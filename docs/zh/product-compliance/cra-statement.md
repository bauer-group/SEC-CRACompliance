# 9.1 CRA 合规声明

## 9.1.1 目的

CRA 合规声明是产品所有 CRA 合规制品的**公开摘要**。它作为客户、市场监督当局和内部审计的中心参考点。

::: warning 重要
CRA 合规声明**不能替代**具有法律约束力的欧盟符合性声明 (Annex V)。它是补充性的、可公开访问的展示，链接到所有相关文件。
:::

## 9.1.2 生成原则

::: info 原则
**机器可读的 JSON 是唯一来源。** 所有人类可读格式和合规制品均从中生成——从不单独维护。
:::

```text
                    ┌──────────────────────────┐
                    │  .compliance/             │
                    │  cra-statement.json       │
                    │  (唯一事实来源)             │
                    └─────────┬────────────────┘
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ 合规页面        │ │ CE 标志         │ │ 容器标签        │
│ (HTML/PDF)      │ │ (关于对话框、   │ │ (OCI 注解、     │
│ 门户上          │ │  README、页脚)  │ │  Dockerfile)    │
└─────────────────┘ └─────────────────┘ └─────────────────┘
          │                   │                   │
          ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ API 端点        │ │ 简化 DoC        │ │ 发布说明        │
│ 供当局使用      │ │ (Annex VI)      │ │ 片段            │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### 生成的制品

| 制品 | 生成自 | 目标 |
|------|--------|------|
| **合规页面** (HTML/PDF) | 所有 JSON 字段 | 合规门户 |
| **CE 标志** | `manufacturer.*`、`conformity.*`、`cra_classification.notified_body` | 关于对话框、README、页脚、文档 |
| **容器标签** | `conformity.ce_marking`、`conformity.declaration_url`、`support_period.end_date` | Dockerfile / OCI 注解 |
| **简化 DoC** (Annex VI) | `manufacturer.name`、`product.*`、`conformity.declaration_url`、`support_period.*` | README、发布说明、包装 |
| **API 响应** | 完整 JSON | `/api/products/{name}.json` |
| **发布说明片段** | `conformity.*`、`support_period.*`、`security_documentation.*` | GitHub Release |

### 从 JSON 生成 CE 标志

CE 标志从 JSON 字段生成，并自动放置在配置的位置（→ [7.7 CE 标志](/zh/conformity/ce-marking)）：

```text
生成的 CE 标志：

  CE [1234]                              ← notified_body（如适用）
  BAUER GROUP                            ← manufacturer.name
  Musterstraße 1, 12345 Musterstadt     ← manufacturer.address
  MinIO Gateway v2.1.0                   ← product.name + product.version
```

对于容器镜像，还会生成 OCI 标签：

```dockerfile
LABEL org.opencontainers.image.ce-marking="conformant"
LABEL eu.cra.doc.url="https://go.bauer-group.com/cra-minio-gateway"
LABEL eu.cra.doc.version="1.0"
LABEL eu.cra.support.end="2031-03-01"
```

## 9.1.3 必要内容

根据 CRA，以下信息必须公开可访问，并在声明中汇总：

| CRA 参考 | 信息 | 交叉引用 |
|-----------|------|----------|
| Art. 13(6) | 协调漏洞披露政策 | → [4.2 披露政策](/zh/incident-response/disclosure-policy) |
| Art. 13(8) | 支持期限 | → [6.4 支持与生命周期](/zh/technical-documentation/support-period) |
| Art. 13, Annex II | 用户信息（安全说明） | → [7.10 用户信息](/zh/conformity/annex-ii-user-info) |
| Art. 28, Annex V | 欧盟符合性声明（或链接） | → [7.8 欧盟符合性声明](/zh/conformity/eu-declaration) |
| Art. 29–30 | CE 标志 | → [7.7 CE 标志](/zh/conformity/ce-marking) |
| Annex I, 第二部分, 第1项 | SBOM（机器可读） | → [第2章：SBOM 与签名](/zh/sbom-signing/) |
| Annex VII | 制造商联系信息 | → [6.1 产品描述](/zh/technical-documentation/product-description) |

## 9.1.4 推荐结构

CRA 合规声明应包含以下部分：

### 1. 产品标识

- 产品名称、版本、类型（软件 / 容器 / 固件）
- CRA 产品类别（标准 / 第一类 / 第二类 / 关键）
- 唯一标识符（如 Package URL、容器镜像引用）

### 2. 制造商信息

- 公司、地址
- 安全联系方式（如 `disclosure@bauer-group.com`）
- 授权代表（如适用）

### 3. 合规状态

- 采用的合规评估程序（→ [第7章](/zh/conformity/)）
- 欧盟符合性声明 (Annex V) 的链接
- CE 标志：状态和位置
- 上次评估日期

### 4. 安全文档

链接至：

- SBOM (CycloneDX JSON)
- 漏洞披露政策 / SECURITY.md
- 用户信息 (Annex II)
- 技术文档（公开可用部分）

### 5. 支持期限

- 支持期限的开始和结束
- 当前阶段（主动支持 / 安全支持）
- 更新机制参考（→ [6.3 更新机制](/zh/technical-documentation/update-mechanism)）

### 6. 协调标准

- 采用的协调标准和技术规范
- SBOM 格式标准（如 CycloneDX v1.5）

### 7. 漏洞管理

- 漏洞披露政策参考
- CVE 监控状态
- 补丁 SLA（→ [3.3 补丁管理](/zh/vulnerability-management/patch-management)）

## 9.1.5 示例

虚拟产品的 CRA 合规声明示例：

---

> **CRA 合规声明**
>
> **MinIO Gateway** — 版本 2.1.0
>
> **日期：** 2026-03-01 | **制造商：** BAUER GROUP
>
> ---
>
> | 字段 | 值 |
> |------|-----|
> | 产品类型 | 容器镜像 |
> | CRA 类别 | 标准 |
> | 合规模块 | 模块 A（内部控制） |
> | CE 标志 | ✅ 在"关于"对话框和文档中 |
> | 欧盟符合性声明 | [DoC 链接] |
> | SBOM | [CycloneDX JSON — GitHub Release] |
> | SECURITY.md | [链接] |
> | 用户信息 (Annex II) | [链接] |
> | 支持期限 | 2026-03-01 至 2031-03-01 |
> | 漏洞披露 | `disclosure@bauer-group.com` |

---

## 9.1.6 放置位置

| 渠道 | 格式 | 受众 |
|------|------|------|
| **合规门户** | HTML（从 JSON 生成） | 客户、当局 |
| **产品仓库** | `.compliance/cra-statement.json` | 开发人员、审计 |
| **README.md** | 带链接的简化引用 | 开发人员 |
| **产品网站** | 合规部分 | 客户 |
| **发布说明** | 当前声明的引用 | 所有人 |

→ 发布策略详情：[9.2 发布策略](/zh/product-compliance/publication-strategy)

## 9.1.7 交叉引用

| 文档 | 链接 |
|------|------|
| 欧盟符合性声明 (Annex V) | [7.8 欧盟符合性声明](/zh/conformity/eu-declaration) |
| 简化 DoC (Annex VI) | [7.9 简化 DoC](/zh/conformity/simplified-declaration) |
| 用户信息 (Annex II) | [7.10 用户信息](/zh/conformity/annex-ii-user-info) |
| CE 标志 | [7.7 CE 标志](/zh/conformity/ce-marking) |
| 模板 | [A.9 CRA 合规声明](/zh/templates/cra-compliance-statement) |
