# 8.2 自动化工作流

## 架构

BAUER GROUP 的 CRA 自动化分布在两个仓库中：

- **CRA 专用**工作流和操作位于 `SEC-CRACompliance`（本仓库）
- **通用**操作（VEX 生成、SBOM 认证）位于 `automation-templates`

消费者仓库（您的产品）只需一行 `uses:` 即可调用 CRA 发布工作流。

```
┌──────────────────────────────────────────┐
│            Consumer Repo (Product)        │
│                                          │
│  uses: bauer-group/SEC-CRACompliance/    │
│        .github/workflows/cra-release.yml │
└──────────────────┬───────────────────────┘
                   │
    ┌──────────────┼──────────────┐
    ▼              ▼              ▼
┌─────────┐  ┌──────────┐  ┌────────────┐
│ CRA-Repo│  │ CRA-Repo │  │ Automation │
│ Actions │  │ Actions  │  │ Templates  │
├─────────┤  ├──────────┤  ├────────────┤
│ SBOM    │  │Compliance│  │ VEX        │
│ Sign    │  │ Report   │  │ Attestation│
│ Scan    │  │          │  │            │
│ Hub     │  │          │  │            │
└─────────┘  └──────────┘  └────────────┘
CRA-specific  CRA-specific    Generic
```

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

**使用方法（自定义）：**

```yaml
jobs:
  cra:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    with:
      run-validation: true
      validation-command: 'npm run ci'
      sign-sbom: true
      attest-sbom: true
      generate-vex: true
      generate-compliance-report: true
      support-period-years: 5
      fail-on-critical: true
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
| 7 | SARIF 上传 | GitHub Security 标签页 | Annex I, 第I部分, 编号 2(a) |
| 8 | 发布附件 | 发布中的所有制品 | Art. 13 |

::: tip 零配置
所有新功能（认证、VEX、合规报告）默认启用。现有消费者无需更改工作流即可自动获取。
:::

### `cra-scan.yml` — 定期漏洞扫描

用于持续 CVE 监控（Annex I, 第I部分, 编号 2(a)）。通过 cron 计划每日运行。

```yaml
on:
  schedule:
    - cron: '0 6 * * *'

jobs:
  scan:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-scan.yml@main
    with:
      severity-threshold: MEDIUM
      fail-on-critical: false
      create-issue: true
    permissions:
      contents: read
      security-events: write
      issues: write
```

**功能：**

- 多引擎扫描（Trivy + Grype + OSV-Scanner）
- 针对 CRITICAL 发现自动创建 GitHub Issue
- SARIF 上传到 GitHub Security 标签页
- 可配置的严重性阈值

### `cra-report.yml` — Hub API 报告

将合规数据发送到软件安全中心 API 进行集中跟踪。

```yaml
jobs:
  report:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-report.yml@main
    with:
      send-sbom: true
      send-vulnerabilities: true
      send-release-info: true
```

## 完整的消费者工作流

::: tip 复制粘贴
将此工作流复制到您的产品仓库中，保存为 `.github/workflows/cra.yml`。涵盖发布合规、每周扫描和中心报告 — 全部采用合理的默认值。
:::

### 最小配置（零配置）

可在任何仓库中开箱即用。所有功能均以默认值启用。

```yaml
# .github/workflows/cra.yml
name: CRA Compliance

on:
  release:
    types: [published]
  schedule:
    - cron: '0 6 * * 1'  # 每周一 06:00 UTC
  workflow_dispatch:

permissions:
  contents: write
  id-token: write
  attestations: write
  security-events: write
  issues: write

jobs:
  # 发布时：完整的 CRA 流水线
  cra-release:
    if: github.event_name == 'release'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write

  # 每周：CVE 扫描
  cra-scan:
    if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-scan.yml@main
    permissions:
      contents: read
      security-events: write
      issues: write
```

### 完整配置（所有参数）

适用于有特定需求的产品 — Node.js 验证、Class I 分类、Grype 扫描等。

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
  # ── 发布：完整的 CRA 流水线 ──
  cra-release:
    if: github.event_name == 'release'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    with:
      # 验证
      run-validation: true              # 在生成 CRA 制品前运行 lint/build
      node-version: '24'                # 用于验证的 Node.js 版本
      validation-command: 'npm run ci'  # 您的验证命令

      # SBOM 与扫描
      scan-target: '.'                  # 目录、镜像引用或 SBOM 路径
      scan-type: 'auto'                 # auto | fs | image | sbom
      sign-sbom: true                   # Cosign 无密钥签名
      fail-on-critical: true            # CRITICAL CVE 时阻止发布
      enable-grype: true                # 额外的 Grype 扫描
      enable-osv: true                  # 额外的 OSV-Scanner

      # 认证与 VEX
      attest-sbom: true                 # GitHub 原生 SBOM 认证
      generate-vex: true                # OpenVEX 文档
      vex-overrides: 'security/vex-overrides.json'  # 手动分类文件

      # 合规报告
      generate-compliance-report: true
      support-period-years: 5           # Art. 13(8)：至少 5 年

      # EU 符合性声明
      generate-eu-doc: true             # Annex V JSON
      render-pdfs: true                 # JSON → PDF 渲染
      classification: 'important-class-1'  # standard | important-class-1 | important-class-2 | critical
      conformity-module: 'module-a'     # module-a | module-b-c | module-h | eucc
      manufacturer-name: 'BAUER GROUP GmbH'

      # 发布
      upload-to-release: true           # 将所有制品附加到 GitHub Release
      retention-days: 90                # 制品保留期
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write

  # ── 每周：CVE 扫描 ──
  cra-scan:
    if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-scan.yml@main
    with:
      severity-threshold: 'MEDIUM'      # UNKNOWN | LOW | MEDIUM | HIGH | CRITICAL
      fail-on-critical: false           # 不让定期扫描失败
      create-issue: true                # 为 CRITICAL CVE 创建 GitHub Issue
      enable-grype: true
      enable-osv: true
    permissions:
      contents: read
      security-events: write
      issues: write

  # ── 发布后：报告到 Hub ──
  cra-report:
    if: github.event_name == 'release'
    needs: [cra-release]
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-report.yml@main
    with:
      dry-run: true                     # Hub 投入运行后设为 false
    permissions:
      contents: read
      id-token: write
```

### Docker / Container Image

适用于构建容器镜像的产品 — 扫描镜像而非文件系统。

```yaml
jobs:
  cra-release:
    if: github.event_name == 'release'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    with:
      scan-target: 'ghcr.io/bauer-group/my-app:${{ github.ref_name }}'
      scan-type: 'image'
      classification: 'important-class-2'
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write
```

### 产品配置文件（推荐）

无需在工作流中传递所有参数，而是在仓库根目录创建一个 `cra-product.json`。`cra-eu-doc` 操作会自动读取它：

```json
{
  "$schema": "https://cra.docs.bauer-group.com/schemas/cra-product/v1.0.0",
  "product": {
    "name": "API-Gateway",
    "description": "REST API Gateway for BAUER GROUP services",
    "classification": "important-class-1",
    "conformityModule": "module-a"
  },
  "manufacturer": {
    "name": "BAUER GROUP GmbH",
    "address": "Street, City, Country"
  },
  "support": {
    "periodYears": 5,
    "until": "2031-12-31"
  },
  "contacts": {
    "securityEmail": "disclosure@bauer-group.com",
    "productOwner": "team@bauer-group.com"
  }
}
```

## 参数参考

### `cra-release.yml`

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `run-validation` | boolean | `false` | 生成 CRA 制品前运行 lint/build |
| `node-version` | string | `'24'` | Node.js 版本（当 `run-validation: true`） |
| `validation-command` | string | `'npm run lint'` | 验证命令 |
| `scan-target` | string | `'.'` | 目录、镜像引用或 SBOM 文件路径 |
| `scan-type` | string | `'auto'` | `auto`、`fs`、`image` 或 `sbom` |
| `sbom-filename` | string | `'sbom.cdx.json'` | SBOM 输出文件名 |
| `sign-sbom` | boolean | `true` | 使用 Cosign 签名 SBOM（无密钥） |
| `fail-on-critical` | boolean | `false` | 发现 CRITICAL 漏洞时失败 |
| `enable-grype` | boolean | `false` | 将 Grype 作为额外扫描器运行 |
| `enable-osv` | boolean | `true` | 运行 OSV-Scanner |
| `attest-sbom` | boolean | `true` | 创建 GitHub SBOM 认证 |
| `generate-vex` | boolean | `true` | 生成 OpenVEX 文档 |
| `vex-overrides` | string | `'security/vex-overrides.json'` | VEX 分类覆盖文件路径 |
| `generate-compliance-report` | boolean | `true` | 生成 JSON + Markdown 报告 |
| `support-period-years` | number | `5` | 支持期限（Art. 13(8)） |
| `generate-eu-doc` | boolean | `true` | 生成 EU 符合性声明 |
| `render-pdfs` | boolean | `true` | JSON → PDF 渲染 |
| `classification` | string | `'standard'` | CRA 类别：`standard`、`important-class-1`、`important-class-2`、`critical` |
| `conformity-module` | string | `'module-a'` | 模块：`module-a`、`module-b-c`、`module-h`、`eucc` |
| `manufacturer-name` | string | `'BAUER GROUP GmbH'` | 制造商法定名称 |
| `upload-to-release` | boolean | `true` | 将制品附加到 GitHub Release |
| `retention-days` | number | `90` | 制品保留天数 |

### `cra-scan.yml`

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `scan-target` | string | `'.'` | 扫描目标 |
| `scan-type` | string | `'auto'` | 扫描类型 |
| `severity-threshold` | string | `'MEDIUM'` | 报告的最低严重性 |
| `fail-on-critical` | boolean | `false` | 发现 CRITICAL 时失败 |
| `create-issue` | boolean | `true` | 为 CRITICAL 创建 GitHub Issue |
| `enable-grype` | boolean | `false` | 额外的 Grype 扫描 |
| `enable-osv` | boolean | `true` | 额外的 OSV-Scanner |

### 所需权限

| 工作流 | 权限 | 原因 |
|--------|------|------|
| `cra-release` | `contents: write` | 上传发布资产 |
| `cra-release` | `id-token: write` | Cosign 无密钥签名 (OIDC) |
| `cra-release` | `attestations: write` | GitHub SBOM 认证 |
| `cra-release` | `security-events: write` | SARIF 上传到 Security 标签页 |
| `cra-scan` | `contents: read` | 读取仓库进行扫描 |
| `cra-scan` | `security-events: write` | SARIF 上传 |
| `cra-scan` | `issues: write` | 创建 CVE Issue |
| `cra-report` | `contents: read` | 读取 SBOM + 扫描结果 |
| `cra-report` | `id-token: write` | API 身份验证 |

## 发布制品

完整配置的 CRA 发布会产生：

| 制品 | 格式 | 用途 | CRA 参考 |
|------|------|------|---------|
| `sbom.cdx.json` | CycloneDX JSON | 软件物料清单 | Annex I, 第II部分, 编号 1 |
| `sbom.cdx.json.sig` | Cosign 签名 | SBOM 完整性（便携） | Annex I, 第II部分, 编号 7 |
| `sbom.cdx.json.cert` | X.509 证书 | 签名身份 | Annex I, 第II部分, 编号 7 |
| GitHub Attestation | Sigstore | SBOM 来源（GitHub 原生） | Annex I, 第II部分, 编号 7 |
| `vulnerability-report.json` | Trivy JSON | 已知漏洞 | Annex I, 第II部分, 编号 1 |
| `vex.openvex.json` | OpenVEX v0.2.0 | 漏洞可利用性 | Annex I II.2 |
| `cra-compliance-report.json` | Custom Schema v1.0.0 | 机器可读合规状态 | Annex VII |
| `cra-compliance-report.md` | Markdown | 人类可读合规状态 | Annex VII |
| `eu-doc.json` | EU DoC Schema v1.0.0 | 机器可读 EU 符合性声明 | Art. 28, Annex V |
| `EU-Declaration-*.pdf` | PDF | 可打印 EU 符合性声明 | Art. 28, Annex V |
| `CRA-Compliance-Report-*.pdf` | PDF | 可打印合规报告 | Annex VII |

::: warning 验证
下载后请验证 SBOM 的真实性：

```bash
# Cosign
cosign verify-blob --signature sbom.cdx.json.sig --certificate sbom.cdx.json.cert sbom.cdx.json

# GitHub Attestation
gh attestation verify sbom.cdx.json --repo owner/repo
```

:::

## VEX 分类

VEX 文档会为所有发现的 CVE 自动生成 `under_investigation` 声明。进行分类：

1. 在您的产品仓库中创建 `security/vex-overrides.json`
2. 为每个 CVE 添加手动决策

```json
{
  "@context": "https://openvex.dev/ns/v0.2.0",
  "statements": [
    {
      "vulnerability": { "@id": "CVE-2024-1234" },
      "products": [{ "@id": "pkg:github/your-org/your-repo" }],
      "status": "not_affected",
      "justification": "vulnerable_code_not_in_execute_path",
      "impact_statement": "Dependency imported but affected function never called."
    }
  ]
}
```

| 状态 | 使用场景 |
|------|---------|
| `not_affected` | 漏洞存在，但在您的产品中不可利用 |
| `affected` | 漏洞可利用 — 需要修复 |
| `fixed` | 漏洞已修复 |
| `under_investigation` | 评估待定（自动生成的默认值） |

## 合规评分

合规报告给出满分 100 的评分：

| 类别 | 满分 | 标准 |
|------|------|------|
| SBOM | 20 | 已生成 (10) + 已签名 (5) + 已认证 (5) |
| 签名 | 15 | Cosign 验证 (10) + 认证存在 (5) |
| 漏洞 | 20 | 0 关键 (15) + 0 高危 (5) |
| VEX | 10 | 已生成 (5) + 手动覆盖存在 (5) |
| 安全策略 | 15 | SECURITY.md (10) + CVD 流程已定义 (5) |
| 支持期限 | 10 | 已在配置中定义 (10) |
| CRA 条款覆盖 | 10 | 已满足的映射条款百分比 |

::: tip CLI 工具
使用 [cra-check CLI](/zh/compliance-matrix/cra-check) 进行本地验证或检查任何 GitHub 仓库。
:::
