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
| 1 | SBOM 生成 | `sbom.cdx.json` | Art. 13(23) |
| 2 | SBOM 签名 (Cosign) | `.sig` + `.cert` | Art. 10(12) |
| 3 | SBOM 认证 | GitHub Attestation | Art. 10(12) |
| 4 | 漏洞扫描 | `vulnerability-report.json` | Art. 10(6) |
| 5 | VEX 生成 | `vex.openvex.json` | Annex I II.2 |
| 6 | 合规报告 | `.json` + `.md` | Annex VII |

::: tip 零配置
所有新功能（认证、VEX、合规报告）默认启用。现有消费者无需更改工作流即可自动获取。
:::

### `cra-scan.yml` — 定期漏洞扫描

用于持续 CVE 监控（Art. 10(8)）。通过 cron 计划每日运行。

### `cra-report.yml` — Hub API 报告

将合规数据发送到软件安全中心 API 进行集中跟踪。

## 发布制品

| 制品 | 格式 | 用途 | CRA 参考 |
|------|------|------|---------|
| `sbom.cdx.json` | CycloneDX JSON | 软件物料清单 | Art. 13(23) |
| `sbom.cdx.json.sig` | Cosign 签名 | SBOM 完整性 | Art. 10(12) |
| `vulnerability-report.json` | Trivy JSON | 已知漏洞 | Art. 10(6) |
| `vex.openvex.json` | OpenVEX v0.2.0 | 漏洞可利用性 | Annex I II.2 |
| `cra-compliance-report.json` | Schema v1.0.0 | 机器可读合规状态 | Annex VII |
| `cra-compliance-report.md` | Markdown | 人类可读合规状态 | Annex VII |

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
