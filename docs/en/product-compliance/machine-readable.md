# 9.3 Machine-Readable Format

## 9.3.1 Purpose

Machine-readable compliance data enables:

- **Automated publication** on the compliance portal (→ [9.2](/en/product-compliance/publication-strategy))
- **Programmatic validation** in CI/CD pipelines
- **Aggregation** across all products in a central dashboard
- **Authority access** via API for market surveillance authorities

::: tip FORMAT
**JSON** is the primary format. The filename is `cra-statement.json`, stored in `.compliance/` within the product repository.
:::

## 9.3.2 JSON Schema

The CRA Compliance Statement follows a defined JSON schema:

```json
{
  "$schema": "https://cra.app.bauer-group.com/schemas/cra-statement/v1.json",
  "schema_version": "1.0.0",

  "manufacturer": {
    "name": "BAUER GROUP",
    "address": "[Full postal address]",
    "contact_email": "disclosure@bauer-group.com",
    "website": "[URL]"
  },

  "product": {
    "name": "[Product name]",
    "version": "[X.Y.Z]",
    "type": "[software|container|firmware|embedded]",
    "description": "[Brief description]",
    "identifier": "[Package URL or container image reference]"
  },

  "cra_classification": {
    "category": "[standard|class_i|class_ii|critical]",
    "conformity_module": "[module_a|module_bc|module_h|eucc]",
    "notified_body": "[Name and identification number, or null]"
  },

  "conformity": {
    "declaration_url": "[URL to full DoC (Annex V)]",
    "declaration_date": "[YYYY-MM-DD]",
    "ce_marking": true,
    "ce_marking_placement": "[about_dialog|documentation|website|container_label]",
    "last_assessment_date": "[YYYY-MM-DD]"
  },

  "security_documentation": {
    "sbom_url": "[URL to SBOM (CycloneDX JSON)]",
    "sbom_format": "CycloneDX",
    "sbom_version": "1.5",
    "security_policy_url": "[URL to SECURITY.md]",
    "user_info_url": "[URL to user information (Annex II)]",
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
      "identifier": "[e.g. EN XXXXX:YYYY]",
      "description": "[Description]"
    }
  ],

  "metadata": {
    "generated_at": "[ISO 8601 timestamp]",
    "generator": "[Tool or manual]",
    "statement_version": "[Version of the statement]"
  }
}
```

## 9.3.3 Field Overview

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `schema_version` | string | Schema version (SemVer) |
| `manufacturer.name` | string | Company name |
| `manufacturer.contact_email` | string | Security contact |
| `product.name` | string | Product name |
| `product.version` | string | Current version (SemVer) |
| `product.type` | enum | `software`, `container`, `firmware`, `embedded` |
| `cra_classification.category` | enum | `standard`, `class_i`, `class_ii`, `critical` |
| `cra_classification.conformity_module` | enum | `module_a`, `module_bc`, `module_h`, `eucc` |
| `conformity.declaration_url` | string (URL) | Link to full DoC |
| `conformity.declaration_date` | string (date) | Date of DoC |
| `conformity.ce_marking` | boolean | CE marking applied? |
| `security_documentation.sbom_url` | string (URL) | Link to SBOM |
| `security_documentation.security_policy_url` | string (URL) | Link to SECURITY.md |
| `security_documentation.disclosure_contact` | string | CVD contact address |
| `support_period.start_date` | string (date) | Support start |
| `support_period.end_date` | string (date) | Support end |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `manufacturer.address` | string | Postal address |
| `manufacturer.website` | string (URL) | Company website |
| `product.description` | string | Brief description |
| `product.identifier` | string | Package URL / image reference |
| `cra_classification.notified_body` | string | Notified body (for Module B+C / H) |
| `conformity.ce_marking_placement` | string | Where CE marking is placed |
| `conformity.last_assessment_date` | string (date) | Date of last conformity assessment |
| `security_documentation.user_info_url` | string (URL) | Link to Annex II information |
| `support_period.phase` | enum | `active`, `security`, `eol` |
| `support_period.update_mechanism` | enum | `auto`, `manual`, `notification` |
| `harmonised_standards[]` | array | Applied standards |
| `metadata.*` | object | Generation information |

## 9.3.4 Validation

### CI/CD Pipeline

Validation of `cra-statement.json` should be integrated into the CI/CD pipeline:

```yaml
# Example: GitHub Actions step
- name: Validate CRA Statement
  run: |
    npx ajv validate \
      -s schemas/cra-statement-v1.schema.json \
      -d .compliance/cra-statement.json
```

### Validation Rules

| Check | Severity | Description |
|-------|:--------:|-------------|
| Schema conformance | 🔴 Blocker | JSON must validate against schema |
| Required fields present | 🔴 Blocker | All required fields must be populated |
| URLs reachable | 🟡 Warning | Referenced URLs should be reachable |
| Date consistency | 🟡 Warning | `end_date` must be after `start_date` |
| Version match | 🟡 Warning | `product.version` should match the release tag |
| Support not expired | 🟡 Warning | `end_date` should be in the future |

## 9.3.5 Complete Example

```json
{
  "$schema": "https://cra.app.bauer-group.com/schemas/cra-statement/v1.json",
  "schema_version": "1.0.0",

  "manufacturer": {
    "name": "BAUER GROUP",
    "address": "Musterstraße 1, 12345 Musterstadt, Germany",
    "contact_email": "disclosure@bauer-group.com",
    "website": "https://www.bauer-group.com"
  },

  "product": {
    "name": "MinIO Gateway",
    "version": "2.1.0",
    "type": "container",
    "description": "S3-compatible object storage gateway",
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
      "description": "SBOM format (OWASP)"
    },
    {
      "identifier": "ISO/IEC 29147:2018",
      "description": "Vulnerability Disclosure"
    }
  ],

  "metadata": {
    "generated_at": "2026-03-01T10:00:00Z",
    "generator": "manual",
    "statement_version": "1.0.0"
  }
}
```

## 9.3.6 Schema Versioning

| Field | Rule |
|-------|------|
| `schema_version` | Follows SemVer (MAJOR.MINOR.PATCH) |
| MAJOR | Incompatible changes (new required fields, structural changes) |
| MINOR | Backward-compatible extensions (new optional fields) |
| PATCH | Corrections to descriptions or validation rules |

::: warning COMPATIBILITY
When the schema undergoes a MAJOR update, all existing `cra-statement.json` files must be migrated. Migration guides will be documented in this manual.
:::

## 9.3.7 Cross-References

| Topic | Link |
|-------|------|
| Repository structure | [9.2 Publication Strategy](/en/product-compliance/publication-strategy) |
| Update process | [9.4 Maintenance & Updates](/en/product-compliance/maintenance) |
| SBOM format | [2.2 Format Specification](/en/sbom-signing/format) |
| Fillable template | [A.9 CRA Compliance Statement](/en/templates/cra-compliance-statement) |
