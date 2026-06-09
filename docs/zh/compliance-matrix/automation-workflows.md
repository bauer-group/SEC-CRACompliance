# 8.2 自动化工作流

## 架构

BAUER GROUP 的 CRA 自动化分布在两个仓库中：

- **CRA 专用**工作流和操作位于 `SEC-CRACompliance`（本仓库）
- **通用**操作（VEX 生成、SBOM 认证）位于 `automation-templates`

消费者仓库（您的产品）只需一行 `uses:` 即可调用 CRA 发布工作流。

## 可复用工作流

### `cra-release.yml` — 发布制品

主要工作流。为每次发布生成、签名和存档所有 CRA 制品。

**使用方法（零配置）：**

```yaml
jobs:
  cra:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write
```

**流水线流程：**

| 步骤 | 操作 | 制品 | CRA 参考 |
|------|------|------|---------|
| 1 | SBOM 生成 | `sbom.cdx.json` | Annex I, 第II部分, 编号 1 |
| 2 | SBOM 签名 (Cosign) | `.sig` + `.cert` | Annex I, 第II部分, 编号 7 |
| 3 | SBOM 认证 | GitHub Attestation | Annex I, 第II部分, 编号 7 |
| 4 | 漏洞扫描 | `vulnerability-report.json` | Annex I, 第II部分, 编号 1 |
| 5 | VEX 生成 | `vex.openvex.json` | Annex I II.2 |
| 6 | 合规报告 | `.json` + `.md` | Annex VII |

::: tip 零配置
所有新功能（认证、VEX、合规报告）默认启用。现有消费者无需更改工作流即可自动获取。
:::

### `cra-scan.yml` — 定期漏洞扫描

用于持续 CVE 监控（Annex I, 第I部分, 编号 2(a)）。通过 cron 计划每日运行。

### `cra-report.yml` — Hub API 报告

将合规数据发送到软件安全中心 API 进行集中跟踪。

## 完整的消费者工作流

::: tip 复制粘贴
将此工作流复制到您的产品仓库中，保存为 `.github/workflows/cra.yml`。涵盖发布合规、每周扫描和中心报告。
:::

### 最小配置（零配置）

```yaml
# .github/workflows/cra.yml
name: CRA Compliance

on:
  release:
    types: [published]
  schedule:
    - cron: '0 6 * * 1'
  workflow_dispatch:

permissions:
  contents: write
  id-token: write
  attestations: write
  security-events: write
  issues: write

jobs:
  cra-release:
    if: github.event_name == 'release'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write

  cra-scan:
    if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-scan.yml@main
    permissions:
      contents: read
      security-events: write
      issues: write
```

### 完整配置（所有参数）

```yaml
jobs:
  cra-release:
    if: github.event_name == 'release'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    with:
      run-validation: true              # 在生成 CRA 制品前运行验证
      validation-command: 'npm run ci'
      sign-sbom: true                   # Cosign 无密钥签名
      fail-on-critical: true            # CRITICAL CVE 时阻止发布
      enable-grype: true                # 额外的 Grype 扫描
      attest-sbom: true                 # GitHub SBOM 认证
      generate-vex: true                # OpenVEX 文档
      generate-eu-doc: true             # EU 符合性声明 (Annex V)
      render-pdfs: true                 # JSON → PDF 渲染
      classification: 'important-class-1'
      support-period-years: 5
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write

  cra-scan:
    if: github.event_name == 'schedule'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-scan.yml@main
    with:
      severity-threshold: 'MEDIUM'
      create-issue: true
    permissions:
      contents: read
      security-events: write
      issues: write
```

## 参数参考

### `cra-release.yml`

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `run-validation` | boolean | `false` | 生成 CRA 制品前运行验证 |
| `sign-sbom` | boolean | `true` | 使用 Cosign 签名 SBOM |
| `fail-on-critical` | boolean | `false` | CRITICAL 漏洞时失败 |
| `enable-grype` | boolean | `false` | 启用 Grype 扫描 |
| `enable-osv` | boolean | `true` | 启用 OSV-Scanner |
| `attest-sbom` | boolean | `true` | 创建 GitHub SBOM 认证 |
| `generate-vex` | boolean | `true` | 生成 OpenVEX 文档 |
| `generate-eu-doc` | boolean | `true` | 生成 EU 符合性声明 |
| `render-pdfs` | boolean | `true` | JSON → PDF 渲染 |
| `classification` | string | `'standard'` | `standard`, `important-class-1`, `important-class-2`, `critical` |
| `support-period-years` | number | `5` | 支持期限（Art. 13(8)） |

### 所需权限

| 工作流 | 权限 | 原因 |
|--------|------|------|
| `cra-release` | `contents: write` | 上传发布资产 |
| `cra-release` | `id-token: write` | Cosign 无密钥签名 (OIDC) |
| `cra-release` | `attestations: write` | GitHub SBOM 认证 |
| `cra-release` | `security-events: write` | SARIF 上传 |
| `cra-scan` | `issues: write` | 创建 CVE Issue |

## 发布制品

| 制品 | 格式 | 用途 | CRA 参考 |
|------|------|------|---------|
| `sbom.cdx.json` | CycloneDX JSON | 软件物料清单 | Annex I, 第II部分, 编号 1 |
| `sbom.cdx.json.sig` | Cosign 签名 | SBOM 完整性 | Annex I, 第II部分, 编号 7 |
| `vulnerability-report.json` | Trivy JSON | 已知漏洞 | Annex I, 第II部分, 编号 1 |
| `vex.openvex.json` | OpenVEX v0.2.0 | 漏洞可利用性 | Annex I II.2 |
| `cra-compliance-report.json` | Schema v1.0.0 | 机器可读合规状态 | Annex VII |
| `eu-doc.json` | EU DoC Schema v1.0.0 | 机器可读 EU 符合性声明 | Art. 28, Annex V |
| `EU-Declaration-*.pdf` | PDF | 可打印 EU 符合性声明 | Art. 28, Annex V |
| `CRA-Compliance-Report-*.pdf` | PDF | 可打印合规报告 | Annex VII |

## 合规评分

| 类别 | 满分 | 标准 |
|------|------|------|
| SBOM | 20 | 已生成 (10) + 已签名 (5) + 已认证 (5) |
| 签名 | 15 | Cosign 验证 (10) + 认证存在 (5) |
| 漏洞 | 20 | 0 关键 (15) + 0 高危 (5) |
| VEX | 10 | 已生成 (5) + 手动覆盖存在 (5) |
| 安全策略 | 15 | SECURITY.md (10) + CVD 流程 (5) |
| 支持期限 | 10 | 已定义 (10) |
| CRA 条款覆盖 | 10 | 满足条款百分比 |

::: tip CLI 工具
使用 [cra-check CLI](/zh/compliance-matrix/cra-check) 进行本地验证或检查任何 GitHub 仓库。
:::
