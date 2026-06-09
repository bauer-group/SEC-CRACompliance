# 8.3 CRA 合规检查器 (cra-check)

## 概述

`cra-check` 是一个零依赖的 Node.js CLI 工具，用于验证产品是否满足 CRA 合规要求。检查合规制品的存在和质量 — SBOM、VEX、漏洞扫描、安全策略和支持期限。

## 安装

无需安装。通过 `npx` 直接运行：

```bash
npx @bauer-group/cra-check
```

或全局安装：

```bash
npm install -g @bauer-group/cra-check
```

## 使用方法

```bash
# 检查当前目录
cra-check

# 检查指定目录
cra-check /path/to/project

# 检查 GitHub 仓库（最新发布）
cra-check bauer-group/my-product

# 检查指定发布
cra-check bauer-group/my-product --release v2.0.0

# JSON 输出用于自动化
cra-check --format json

# CI 模式（低于阈值时退出码为 1）
cra-check --ci --min-score 70
```

## 模式

### 本地模式

扫描文件系统中的 CRA 制品：

| 文件 | 检查 |
|------|------|
| `sbom.cdx.json` | SBOM 存在、有效、组件数量 |
| `sbom.cdx.json.sig` + `.cert` | Cosign 签名存在 |
| `vex.openvex.json` | VEX 文档、声明数量、分类状态 |
| `vulnerability-report.json` | 严重性计数（关键/高危/中危/低危） |
| `SECURITY.md` | 安全策略存在、CVD 流程已定义 |
| `cra-config.json` | 支持期限定义 |

### 远程模式

通过 GitHub API 获取数据：

- 下载发布资产（SBOM、VEX、漏洞报告）
- 检查发布中的签名文件
- 验证仓库中存在 SECURITY.md
- 从合规报告中提取支持期限

::: tip 身份验证
为私有仓库和更高的 API 速率限制设置 `GITHUB_TOKEN`：

```bash
export GITHUB_TOKEN=ghp_...
cra-check bauer-group/private-repo
```

:::

## 输出

### 终端（默认）

```
  CRA Compliance: my-product v2.3.1
  ══════════════════════════════════════════

  SBOM                ✅ PASS  CycloneDX, 142 组件
  SBOM 签名           ✅ PASS  Cosign 签名 + 证书存在
  VEX 文档            ✅ PASS  15 声明 (3 已分类)
  漏洞                ⚠️ WARN  0 关键, 2 高危, 5 中危, 3 低危
  安全策略            ✅ PASS  SECURITY.md 存在并包含 CVD 流程
  支持期限            ✅ PASS  5 年

  Score: 85/100 ████████████████░░░░ PASS
```

### JSON (`--format json`)

```json
{
  "$schema": "https://cra.docs.bauer-group.com/schemas/cra-check/v1.0.0",
  "product": { "name": "my-product", "version": "2.3.1" },
  "checks": [
    { "name": "SBOM", "status": "pass", "details": "CycloneDX, 142 components" }
  ],
  "complianceScore": {
    "score": 85,
    "maxScore": 100,
    "passed": true
  }
}
```

## CI/CD 集成

### GitHub Actions

```yaml
- name: 🔍 CRA 合规检查
  run: npx @bauer-group/cra-check --ci --min-score 70
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 退出码

| 代码 | 含义 |
|------|------|
| `0` | 分数 >= 最低分数 (PASS) |
| `1` | 分数 < 最低分数 (FAIL) — 仅在 `--ci` 标志下 |
| `2` | 致命错误（无效目标、网络故障） |

## 评分

完整的评分算法请参见 [合规评分](/zh/compliance-matrix/automation-workflows#compliance-scoring)。

## 选项

| 选项 | 默认值 | 说明 |
|------|--------|------|
| `--format <terminal\|json>` | `terminal` | 输出格式 |
| `--ci` | `false` | CI 模式：失败时退出码非零 |
| `--min-score <n>` | `70` | 通过的最低分数 |
| `--github-token <token>` | `GITHUB_TOKEN` env | GitHub API 身份验证 |
| `--release <tag>` | `latest` | 远程模式的发布标签 |
| `--no-color` | `false` | 禁用 ANSI 颜色 |
| `--verbose` | `false` | 显示分数明细 |
| `-h, --help` | — | 显示帮助文本 |
| `-v, --version` | — | 显示版本 |

## 要求

- Node.js >= 20
- 无 npm 依赖（零依赖设计）
