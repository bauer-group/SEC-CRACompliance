# 9.3 机器可读格式

## 9.3.1 目的

机器可读的合规数据可实现：

- **自动发布** 到合规门户（→ [9.2](/zh/product-compliance/publication-strategy)）
- **CI/CD 管道中的程序化验证**
- **跨所有产品的中央仪表板聚合**
- **当局通过 API 访问** 供市场监督当局使用

::: tip 格式
**JSON** 是主要格式。文件名为 `cra-statement.json`，存储在产品仓库的 `.compliance/` 目录中。
:::

## 9.3.2 JSON Schema

CRA 合规声明遵循已定义的 JSON Schema：

```json
{
  "$schema": "https://cra.app.bauer-group.com/schemas/cra-statement/v1.json",
  "schema_version": "1.0.0",

  "manufacturer": {
    "name": "BAUER GROUP",
    "address": "[完整邮寄地址]",
    "contact_email": "disclosure@bauer-group.com",
    "website": "[URL]"
  },

  "product": {
    "name": "[产品名称]",
    "version": "[X.Y.Z]",
    "type": "[software|container|firmware|embedded]",
    "description": "[简要描述]",
    "identifier": "[Package URL 或容器镜像引用]"
  },

  "cra_classification": {
    "category": "[standard|class_i|class_ii|critical]",
    "conformity_module": "[module_a|module_bc|module_h|eucc]",
    "notified_body": "[名称和识别号，或 null]"
  },

  "conformity": {
    "declaration_url": "[完整 DoC (Annex V) 的 URL]",
    "declaration_date": "[YYYY-MM-DD]",
    "ce_marking": true,
    "ce_marking_placement": "[about_dialog|documentation|website|container_label]",
    "last_assessment_date": "[YYYY-MM-DD]"
  },

  "security_documentation": {
    "sbom_url": "[SBOM (CycloneDX JSON) 的 URL]",
    "sbom_format": "CycloneDX",
    "sbom_version": "1.5",
    "security_policy_url": "[SECURITY.md 的 URL]",
    "user_info_url": "[用户信息 (Annex II) 的 URL]",
    "disclosure_contact": "disclosure@bauer-group.com"
  },

  "support_period": {
    "start_date": "[YYYY-MM-DD]",
    "end_date": "[YYYY-MM-DD]",
    "phase": "[active|security|eol]",
    "update_mechanism": "[auto|manual|notification]"
  },

  "harmonised_standards": [
    {
      "identifier": "[如 EN XXXXX:YYYY]",
      "description": "[描述]"
    }
  ],

  "metadata": {
    "generated_at": "[ISO 8601 时间戳]",
    "generator": "[工具或手动]",
    "statement_version": "[声明版本]"
  }
}
```

## 9.3.3 字段概览

### 必填字段

| 字段 | 类型 | 描述 |
|------|------|------|
| `schema_version` | string | Schema 版本 (SemVer) |
| `manufacturer.name` | string | 公司名称 |
| `manufacturer.contact_email` | string | 安全联系方式 |
| `product.name` | string | 产品名称 |
| `product.version` | string | 当前版本 (SemVer) |
| `product.type` | enum | `software`、`container`、`firmware`、`embedded` |
| `cra_classification.category` | enum | `standard`、`class_i`、`class_ii`、`critical` |
| `cra_classification.conformity_module` | enum | `module_a`、`module_bc`、`module_h`、`eucc` |
| `conformity.declaration_url` | string (URL) | 完整 DoC 链接 |
| `conformity.declaration_date` | string (日期) | DoC 日期 |
| `conformity.ce_marking` | boolean | 是否已贴附 CE 标志？ |
| `security_documentation.sbom_url` | string (URL) | SBOM 链接 |
| `security_documentation.security_policy_url` | string (URL) | SECURITY.md 链接 |
| `security_documentation.disclosure_contact` | string | CVD 联系地址 |
| `support_period.start_date` | string (日期) | 支持开始 |
| `support_period.end_date` | string (日期) | 支持结束 |

### 可选字段

| 字段 | 类型 | 描述 |
|------|------|------|
| `manufacturer.address` | string | 邮寄地址 |
| `manufacturer.website` | string (URL) | 公司网站 |
| `product.description` | string | 简要描述 |
| `product.identifier` | string | Package URL / 镜像引用 |
| `cra_classification.notified_body` | string | 公告机构（模块 B+C / H） |
| `conformity.ce_marking_placement` | string | CE 标志放置位置 |
| `conformity.last_assessment_date` | string (日期) | 上次合规评估日期 |
| `security_documentation.user_info_url` | string (URL) | Annex II 信息链接 |
| `support_period.phase` | enum | `active`、`security`、`eol` |
| `support_period.update_mechanism` | enum | `auto`、`manual`、`notification` |
| `harmonised_standards[]` | array | 采用的标准 |
| `metadata.*` | object | 生成信息 |

## 9.3.4 验证

### CI/CD 管道

应将 `cra-statement.json` 的验证集成到 CI/CD 管道中：

```yaml
# 示例：GitHub Actions 步骤
- name: Validate CRA Statement
  run: |
    npx ajv validate \
      -s schemas/cra-statement-v1.schema.json \
      -d .compliance/cra-statement.json
```

### 验证规则

| 检查 | 严重性 | 描述 |
|------|:------:|------|
| Schema 一致性 | 🔴 阻断 | JSON 必须通过 Schema 验证 |
| 必填字段存在 | 🔴 阻断 | 所有必填字段必须已填写 |
| URL 可达 | 🟡 警告 | 引用的 URL 应可访问 |
| 日期一致性 | 🟡 警告 | `end_date` 必须晚于 `start_date` |
| 版本匹配 | 🟡 警告 | `product.version` 应匹配发布标签 |
| 支持未过期 | 🟡 警告 | `end_date` 应在未来 |

## 9.3.5 完整示例

```json
{
  "$schema": "https://cra.app.bauer-group.com/schemas/cra-statement/v1.json",
  "schema_version": "1.0.0",

  "manufacturer": {
    "name": "BAUER GROUP",
    "address": "Musterstraße 1, 12345 Musterstadt, Deutschland",
    "contact_email": "disclosure@bauer-group.com",
    "website": "https://www.bauer-group.com"
  },

  "product": {
    "name": "MinIO Gateway",
    "version": "2.1.0",
    "type": "container",
    "description": "S3 兼容对象存储网关",
    "identifier": "ghcr.io/bauer-group/minio-gateway:2.1.0"
  },

  "cra_classification": {
    "category": "standard",
    "conformity_module": "module_a",
    "notified_body": null
  },

  "conformity": {
    "declaration_url": "https://cra.app.bauer-group.com/products/minio-gateway/doc",
    "declaration_date": "2026-03-01",
    "ce_marking": true,
    "ce_marking_placement": "about_dialog",
    "last_assessment_date": "2026-03-01"
  },

  "security_documentation": {
    "sbom_url": "https://github.com/bauer-group/minio-gateway/releases/download/v2.1.0/sbom.cdx.json",
    "sbom_format": "CycloneDX",
    "sbom_version": "1.5",
    "security_policy_url": "https://github.com/bauer-group/minio-gateway/blob/main/SECURITY.md",
    "user_info_url": "https://cra.app.bauer-group.com/products/minio-gateway/user-info",
    "disclosure_contact": "disclosure@bauer-group.com"
  },

  "support_period": {
    "start_date": "2026-03-01",
    "end_date": "2031-03-01",
    "phase": "active",
    "update_mechanism": "auto"
  },

  "harmonised_standards": [
    {
      "identifier": "CycloneDX v1.5",
      "description": "SBOM 格式 (OWASP)"
    },
    {
      "identifier": "ISO/IEC 29147:2018",
      "description": "漏洞披露"
    }
  ],

  "metadata": {
    "generated_at": "2026-03-01T10:00:00Z",
    "generator": "manual",
    "statement_version": "1.0.0"
  }
}
```

## 9.3.6 Schema 版本控制

| 字段 | 规则 |
|------|------|
| `schema_version` | 遵循 SemVer (MAJOR.MINOR.PATCH) |
| MAJOR | 不兼容的更改（新的必填字段、结构更改） |
| MINOR | 向后兼容的扩展（新的可选字段） |
| PATCH | 描述或验证规则的更正 |

::: warning 兼容性
当 Schema 进行 MAJOR 更新时，所有现有的 `cra-statement.json` 文件必须进行迁移。迁移指南将在本手册中记录。
:::

## 9.3.7 交叉引用

| 主题 | 链接 |
|------|------|
| 仓库结构 | [9.2 发布策略](/zh/product-compliance/publication-strategy) |
| 更新流程 | [9.4 维护与更新](/zh/product-compliance/maintenance) |
| SBOM 格式 | [2.2 格式规范](/zh/sbom-signing/format) |
| 可填写模板 | [A.9 CRA 合规声明](/zh/templates/cra-compliance-statement) |
