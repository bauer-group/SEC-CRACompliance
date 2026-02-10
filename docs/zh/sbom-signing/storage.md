# 2.3 归档与保留

## 2.3.1 归档策略

SBOM 在三个位置进行归档，以确保可用性和可追溯性。

### 1. GitHub 发布资产（主要）

每个 GitHub 发布都包含 SBOM 作为资产：

```
Release v2.1.0
├── product-v2.1.0-linux-amd64.tar.gz
├── product-v2.1.0-linux-amd64.tar.gz.sig    <- Cosign 签名
├── sbom-product-v2.1.0.cdx.json              <- SBOM
├── sbom-product-v2.1.0.cdx.json.sig          <- SBOM 签名
└── SHA256SUMS.txt                             <- 校验和
```

**优势：**

- 与发布直接关联
- 可公开访问（针对公开仓库）
- 版本化且不可变
- 通过 GitHub REST API 进行 API 访问

### 2. 合规仓库（次要）

本仓库 (`CRA-Compliance`) 包含 SBOM 归档：

```
sbom/
├── product-a/
│   ├── sbom-product-a-v1.0.0.cdx.json
│   ├── sbom-product-a-v1.1.0.cdx.json
│   └── sbom-product-a-v2.0.0.cdx.json
├── product-b/
│   ├── sbom-product-b-v3.0.0.cdx.json
│   └── sbom-product-b-v3.1.0.cdx.json
└── firmware-esp32/
    ├── sbom-firmware-esp32-v1.0.0.cdx.json
    └── sbom-firmware-esp32-v1.1.0.cdx.json
```

**优势：**

- 所有产品 SBOM 的集中概览
- Git 历史记录作为审计跟踪
- CVE 监控可集中扫描所有 SBOM

### 3. GitHub Actions 制品（短期）

构建制品作为 GitHub Actions 制品存储（保留 90 天）。

**优势：**

- 构建后立即可用
- 用于临时分析和调试

## 2.3.2 保留策略

| 存储位置 | 保留期限 | 依据 |
|----------|----------|------|
| GitHub 发布资产 | **无限期**（仓库存续期间） | 监管证据 (Art. 10(13) CRA：10 年或产品生命周期，以较长者为准) |
| 合规仓库 (sbom/) | 最后一次产品部署后 **10 年** | Art. 10(13) CRA |
| GitHub Actions 制品 | **90 天** | 调试和分析 |

::: danger 保留期限
**Art. 10(13) CRA:** 技术文档和欧盟符合性声明 (EU Declaration of Conformity) 应在产品投放市场后保留 **10 年**，或在支持期间内保留——以较长者为准。

SBOM 作为技术文档的一部分，受此保留期限约束。
:::

## 2.3.3 完整性保护

每个归档的 SBOM 通过以下措施进行保护：

1. **SHA256 哈希** —— 完整性验证
2. **Cosign 签名** —— 真实性证明
3. **Git 历史记录** —— 不可篡改性证明
4. **分支保护** —— 防止未经授权的修改

```bash
# 完整性验证
sha256sum -c SHA256SUMS.txt

# 签名验证
cosign verify-blob --key cosign.pub --signature sbom.cdx.json.sig sbom.cdx.json
```

## 2.3.4 访问与提供

### 面向监管机构 / 市场监督管理机构

SBOM 应要求提供 (Art. 13(23) CRA)：

- 通过 GitHub 发布资产访问（针对公开仓库）
- 直接下载链接
- 应要求作为电子邮件附件提供

### 内部使用

- CVE 监控工作流使用合规仓库中的 SBOM
- 安全团队对所有 SBOM 具有读取权限
- 通过 GitHub API 进行仪表盘集成
