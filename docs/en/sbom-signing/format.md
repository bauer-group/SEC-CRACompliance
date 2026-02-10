# 2.2 Format Specification

## 2.2.1 CycloneDX JSON

We use **CycloneDX** as the primary SBOM format. CycloneDX is an OWASP standard and fulfils the CRA requirement for a "commonly used and machine-readable format" (Art. 13(23)).

### Why CycloneDX

| Criterion | CycloneDX | SPDX |
|-----------|-----------|------|
| Primary focus | Security & compliance | Licences & IP |
| Vulnerability tracking | Native (VEX) | Via extensions |
| Tool support | Trivy, Syft, Grype | Trivy, Syft |
| OWASP standard | Yes | No (Linux Foundation) |
| CRA-compliant | Yes | Yes |
| Complexity | Lower | Higher |

### Structure

A CycloneDX SBOM contains the following main elements:

```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.5",
  "serialNumber": "urn:uuid:<unique-id>",
  "version": 1,
  "metadata": {
    "timestamp": "2026-02-08T12:00:00Z",
    "tools": {
      "components": [
        {
          "type": "application",
          "name": "trivy",
          "version": "0.58.0"
        }
      ]
    },
    "component": {
      "type": "application",
      "name": "product-name",
      "version": "1.2.3",
      "supplier": {
        "name": "BAUER GROUP"
      }
    }
  },
  "components": [
    {
      "type": "library",
      "name": "example-package",
      "version": "4.1.0",
      "purl": "pkg:npm/example-package@4.1.0",
      "licenses": [
        {
          "license": {
            "id": "MIT"
          }
        }
      ],
      "hashes": [
        {
          "alg": "SHA-256",
          "content": "abc123..."
        }
      ]
    }
  ],
  "dependencies": [
    {
      "ref": "product-name",
      "dependsOn": ["example-package"]
    }
  ]
}
```

### Required Fields

| Field | CRA Relevance | Description |
|-------|---------------|-------------|
| `bomFormat` | Format identification | Must be `CycloneDX` |
| `specVersion` | Standard conformity | At least `1.5` |
| `serialNumber` | Uniqueness | UUID for each SBOM instance |
| `metadata.timestamp` | Traceability | Generation timestamp |
| `metadata.component` | Product identification | Product name and version |
| `metadata.component.supplier` | Manufacturer identification | BAUER GROUP |
| `components[].name` | Component identification | Package/library name |
| `components[].version` | Version tracking | Exact version |
| `components[].purl` | Unique reference | Package URL (recommended) |

### File Naming Convention

```
sbom-<product>-<version>.cdx.json

Examples:
sbom-api-gateway-v2.1.0.cdx.json
sbom-firmware-esp32-v1.3.2.cdx.json
sbom-web-frontend-v4.0.1.cdx.json
```

### SBOM Versioning

Each new version of a product receives its own SBOM. The SBOM version (`version` field) is incremented with each regeneration for the same product version (e.g., when correcting the SBOM itself).

## 2.2.2 SPDX (Secondary Format)

SPDX is supported as a secondary format, primarily for scenarios in which business partners or regulators explicitly request SPDX.

```bash
# SPDX generation
trivy image --format spdx-json --output sbom.spdx.json <image>:<tag>
```
