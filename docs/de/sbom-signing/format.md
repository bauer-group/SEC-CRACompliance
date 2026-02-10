# 2.2 Format-Spezifikation

## CycloneDX JSON

Wir verwenden **CycloneDX** als primäres SBOM-Format. CycloneDX ist ein OWASP-Standard und erfüllt die CRA-Anforderung nach einem „allgemein gebräuchlichen und maschinenlesbaren Format" (Art. 13 Abs. 23).

### Warum CycloneDX

| Kriterium | CycloneDX | SPDX |
|-----------|-----------|------|
| Primärer Fokus | Security & Compliance | Lizenzen & IP |
| Vulnerability Tracking | Nativ (VEX) | Über Erweiterungen |
| Tool-Support | Trivy, Syft, Grype | Trivy, Syft |
| OWASP-Standard | Ja | Nein (Linux Foundation) |
| CRA-konform | Ja | Ja |
| Komplexität | Geringer | Höher |

### Struktur

Eine CycloneDX SBOM enthält folgende Hauptelemente:

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

### Pflichtfelder

| Feld | CRA-Relevanz | Beschreibung |
|------|-------------|--------------|
| `bomFormat` | Formatidentifikation | Muss `CycloneDX` sein |
| `specVersion` | Standardkonformität | Mindestens `1.5` |
| `serialNumber` | Eindeutigkeit | UUID für jede SBOM-Instanz |
| `metadata.timestamp` | Nachvollziehbarkeit | Generierungszeitpunkt |
| `metadata.component` | Produktidentifikation | Produkt-Name und Version |
| `metadata.component.supplier` | Herstelleridentifikation | BAUER GROUP |
| `components[].name` | Komponentenidentifikation | Paket-/Library-Name |
| `components[].version` | Versionsnachverfolgung | Exakte Version |
| `components[].purl` | Eindeutige Referenz | Package URL (empfohlen) |

### Dateinamenskonvention

```
sbom-<product>-<version>.cdx.json

Beispiele:
sbom-api-gateway-v2.1.0.cdx.json
sbom-firmware-esp32-v1.3.2.cdx.json
sbom-web-frontend-v4.0.1.cdx.json
```

### SBOM-Versionierung

Jede neue Version eines Produkts erhält eine eigene SBOM. Die SBOM-Version (`version`-Feld) wird bei jeder Neugenerierung für dieselbe Produktversion inkrementiert (z.B. bei Korrekturen der SBOM selbst).

## SPDX (Sekundärformat)

SPDX wird als Sekundärformat unterstützt, primär für Szenarien, in denen Geschäftspartner oder Regulierer SPDX explizit anfordern.

```bash
# SPDX-Generierung
trivy image --format spdx-json --output sbom.spdx.json <image>:<tag>
```
