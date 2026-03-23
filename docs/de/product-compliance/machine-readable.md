# 9.3 Maschinenlesbares Format

## 9.3.1 Zweck

Maschinenlesbare Compliance-Daten ermöglichen:

- **Automatisierte Publikation** auf dem Compliance-Portal (→ [9.2](/de/product-compliance/publication-strategy))
- **Programmatische Validierung** in CI/CD-Pipelines
- **Aggregation** über alle Produkte in einem zentralen Dashboard
- **Behördenzugang** via API für Marktaufsichtsbehörden

::: tip FORMAT
**JSON** ist das primäre Format. Der Dateiname ist `cra-statement.json`, Speicherort ist `.compliance/` im Produkt-Repository.
:::

## 9.3.2 JSON-Schema

Das CRA Compliance Statement folgt einem definierten JSON-Schema:

```json
{
  "$schema": "https://cra.docs.bauer-group.com/schemas/cra-statement/v1.json",
  "schema_version": "1.0.0",

  "manufacturer": {
    "name": "BAUER GROUP",
    "address": "[Vollständige Postanschrift]",
    "contact_email": "disclosure@cra.docs.bauer-group.com",
    "website": "[URL]"
  },

  "product": {
    "name": "[Produktname]",
    "version": "[X.Y.Z]",
    "type": "[software|container|firmware|embedded]",
    "description": "[Kurzbeschreibung]",
    "identifier": "[Package-URL oder Container-Image-Referenz]"
  },

  "cra_classification": {
    "category": "[standard|class_i|class_ii|critical]",
    "conformity_module": "[module_a|module_bc|module_h|eucc]",
    "notified_body": "[Name und Kennnummer oder null]"
  },

  "conformity": {
    "declaration_url": "[URL zur vollständigen DoC (Annex V)]",
    "declaration_date": "[YYYY-MM-DD]",
    "ce_marking": true,
    "ce_marking_placement": "[about_dialog|documentation|website|container_label]",
    "last_assessment_date": "[YYYY-MM-DD]"
  },

  "security_documentation": {
    "sbom_url": "[URL zum SBOM (CycloneDX JSON)]",
    "sbom_format": "CycloneDX",
    "sbom_version": "1.5",
    "security_policy_url": "[URL zur SECURITY.md]",
    "user_info_url": "[URL zur Nutzerinformation (Annex II)]",
    "disclosure_contact": "disclosure@cra.docs.bauer-group.com"
  },

  "support_period": {
    "start_date": "[YYYY-MM-DD]",
    "end_date": "[YYYY-MM-DD]",
    "phase": "[active|security|eol]",
    "update_mechanism": "[auto|manual|notification]"
  },

  "harmonised_standards": [
    {
      "identifier": "[z.B. EN XXXXX:YYYY]",
      "description": "[Beschreibung]"
    }
  ],

  "metadata": {
    "generated_at": "[ISO 8601 Timestamp]",
    "generator": "[Tool oder manuell]",
    "statement_version": "[Version des Statements]"
  }
}
```

## 9.3.3 Feldübersicht

### Pflichtfelder

| Feld | Typ | Beschreibung |
|------|-----|-------------|
| `schema_version` | string | Version des Schemas (SemVer) |
| `manufacturer.name` | string | Firmenname |
| `manufacturer.contact_email` | string | Sicherheitskontakt |
| `product.name` | string | Produktname |
| `product.version` | string | Aktuelle Version (SemVer) |
| `product.type` | enum | `software`, `container`, `firmware`, `embedded` |
| `cra_classification.category` | enum | `standard`, `class_i`, `class_ii`, `critical` |
| `cra_classification.conformity_module` | enum | `module_a`, `module_bc`, `module_h`, `eucc` |
| `conformity.declaration_url` | string (URL) | Link zur vollständigen DoC |
| `conformity.declaration_date` | string (Datum) | Datum der DoC |
| `conformity.ce_marking` | boolean | CE-Kennzeichnung angebracht? |
| `security_documentation.sbom_url` | string (URL) | Link zum SBOM |
| `security_documentation.security_policy_url` | string (URL) | Link zur SECURITY.md |
| `security_documentation.disclosure_contact` | string | CVD-Kontaktadresse |
| `support_period.start_date` | string (Datum) | Support-Beginn |
| `support_period.end_date` | string (Datum) | Support-Ende |

### Optionale Felder

| Feld | Typ | Beschreibung |
|------|-----|-------------|
| `manufacturer.address` | string | Postanschrift |
| `manufacturer.website` | string (URL) | Unternehmenswebsite |
| `product.description` | string | Kurzbeschreibung |
| `product.identifier` | string | Package-URL / Image-Referenz |
| `cra_classification.notified_body` | string | Notifizierte Stelle (bei Modul B+C / H) |
| `conformity.ce_marking_placement` | string | Wo die CE-Kennzeichnung angebracht ist |
| `conformity.last_assessment_date` | string (Datum) | Datum der letzten Konformitätsbewertung |
| `security_documentation.user_info_url` | string (URL) | Link zur Annex-II-Information |
| `support_period.phase` | enum | `active`, `security`, `eol` |
| `support_period.update_mechanism` | enum | `auto`, `manual`, `notification` |
| `harmonised_standards[]` | array | Angewandte Normen |
| `metadata.*` | object | Generierungsinformationen |

## 9.3.4 Validierung

### CI/CD-Pipeline

Die Validierung der `cra-statement.json` sollte in die CI/CD-Pipeline integriert werden:

```yaml
# Beispiel: GitHub Actions Step
- name: Validate CRA Statement
  run: |
    npx ajv validate \
      -s schemas/cra-statement-v1.schema.json \
      -d .compliance/cra-statement.json
```

### Validierungsregeln

| Prüfung | Schweregrad | Beschreibung |
|---------|:-----------:|-------------|
| Schema-Konformität | 🔴 Blocker | JSON muss gegen Schema validieren |
| Pflichtfelder vorhanden | 🔴 Blocker | Alle Pflichtfelder müssen ausgefüllt sein |
| URLs erreichbar | 🟡 Warning | Referenzierte URLs sollten erreichbar sein |
| Datum-Konsistenz | 🟡 Warning | `end_date` muss nach `start_date` liegen |
| Version-Match | 🟡 Warning | `product.version` sollte zum Release-Tag passen |
| Support nicht abgelaufen | 🟡 Warning | `end_date` sollte in der Zukunft liegen |

## 9.3.5 Vollständiges Beispiel

```json
{
  "$schema": "https://cra.docs.bauer-group.com/schemas/cra-statement/v1.json",
  "schema_version": "1.0.0",

  "manufacturer": {
    "name": "BAUER GROUP",
    "address": "Musterstraße 1, 12345 Musterstadt, Deutschland",
    "contact_email": "disclosure@cra.docs.bauer-group.com",
    "website": "https://www.bauer-group.com"
  },

  "product": {
    "name": "MinIO Gateway",
    "version": "2.1.0",
    "type": "container",
    "description": "S3-kompatibler Object Storage Gateway",
    "identifier": "ghcr.io/bauer-group/minio-gateway:2.1.0"
  },

  "cra_classification": {
    "category": "standard",
    "conformity_module": "module_a",
    "notified_body": null
  },

  "conformity": {
    "declaration_url": "https://cra.docs.bauer-group.com/products/minio-gateway/doc",
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
    "user_info_url": "https://cra.docs.bauer-group.com/products/minio-gateway/user-info",
    "disclosure_contact": "disclosure@cra.docs.bauer-group.com"
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
      "description": "SBOM-Format (OWASP)"
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

## 9.3.6 Schema-Versionierung

| Feld | Regel |
|------|-------|
| `schema_version` | Folgt SemVer (MAJOR.MINOR.PATCH) |
| MAJOR | Inkompatible Änderungen (neue Pflichtfelder, Strukturänderungen) |
| MINOR | Rückwärtskompatible Erweiterungen (neue optionale Felder) |
| PATCH | Korrekturen an Beschreibungen oder Validierungsregeln |

::: warning KOMPATIBILITÄT
Bei einem Schema-MAJOR-Update müssen alle bestehenden `cra-statement.json`-Dateien migriert werden. Migration Guides werden in diesem Manual dokumentiert.
:::

## 9.3.7 Querverweise

| Thema | Link |
|-------|------|
| Repository-Struktur | [9.2 Publikationsstrategie](/de/product-compliance/publication-strategy) |
| Aktualisierungsprozess | [9.4 Pflege & Aktualisierung](/de/product-compliance/maintenance) |
| SBOM-Format | [2.2 Format-Spezifikation](/de/sbom-signing/format) |
| Ausfüllbare Vorlage | [A.9 CRA Compliance Statement](/de/templates/cra-compliance-statement) |
