# 8.3 CRA 合规检查器 (cra-check)

## 概述

`cra-check` 是一个零依赖的 Node.js CLI 工具，用于验证产品是否满足 CRA 合规要求。检查合规制品的存在和质量 — SBOM、VEX、漏洞扫描、安全策略和支持期限。

## 使用方法

```bash
# 检查当前目录
npx @bauer-group/cra-check

# 检查 GitHub 仓库（最新发布）
npx @bauer-group/cra-check bauer-group/my-product

# JSON 输出
npx @bauer-group/cra-check --format json

# CI 模式
npx @bauer-group/cra-check --ci --min-score 70
```

## 模式

### 本地模式

扫描文件系统中的 CRA 制品：

| 文件 | 检查 |
|------|------|
| `sbom.cdx.json` | SBOM 存在、有效、组件数量 |
| `sbom.cdx.json.sig` + `.cert` | Cosign 签名存在 |
| `vex.openvex.json` | VEX 文档、声明数量、分类状态 |
| `vulnerability-report.json` | 严重性计数 |
| `SECURITY.md` | 安全策略、CVD 流程 |

### 远程模式

通过 GitHub API 获取数据 — 发布资产、签名、SECURITY.md。

## 输出

```
  CRA Compliance: my-product v2.3.1
  ══════════════════════════════════════════

  SBOM                ✅ PASS  CycloneDX, 142 组件
  SBOM 签名           ✅ PASS  Cosign 签名 + 证书存在
  VEX 文档            ✅ PASS  15 声明 (3 已分类)
  漏洞                ⚠️ WARN  0 关键, 2 高危
  安全策略            ✅ PASS  SECURITY.md 存在
  支持期限            ✅ PASS  5 年

  Score: 85/100 ████████████████░░░░ PASS
```

## CI/CD 集成

```yaml
- name: 🔍 CRA 合规检查
  run: npx @bauer-group/cra-check --ci --min-score 70
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 退出码

| 代码 | 含义 |
|------|------|
| `0` | 分数 >= 最低分数 (PASS) |
| `1` | 分数 < 最低分数 (FAIL) |
| `2` | 致命错误 |

## 要求

- Node.js >= 20
- 无 npm 依赖
