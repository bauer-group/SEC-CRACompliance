# 8.2 Automatisierte Workflows

## Architektur

Die CRA-Automatisierung der BAUER GROUP ist auf zwei Repositories aufgeteilt:

- **CRA-spezifische** Workflows und Actions leben in `SEC-CRACompliance` (dieses Repo)
- **Generische** Actions (VEX-Generierung, SBOM-Attestation) leben in `automation-templates`

Consumer-Repositories (Ihre Produkte) rufen den CRA-Release-Workflow mit einer einzigen `uses:`-Zeile auf.

```
┌──────────────────────────────────────────┐
│          Consumer-Repo (Produkt)          │
│                                          │
│  uses: bauer-group/SEC-CRACompliance/    │
│        .github/workflows/cra-release.yml │
└──────────────────┬───────────────────────┘
                   │
    ┌──────────────┼──────────────┐
    ▼              ▼              ▼
┌─────────┐  ┌──────────┐  ┌────────────┐
│ CRA-Repo│  │ CRA-Repo │  │ Automation │
│ Actions │  │ Actions  │  │ Templates  │
├─────────┤  ├──────────┤  ├────────────┤
│ SBOM    │  │Compliance│  │ VEX        │
│ Sign    │  │ Report   │  │ Attestation│
│ Scan    │  │          │  │            │
│ Hub     │  │          │  │            │
└─────────┘  └──────────┘  └────────────┘
CRA-spezifisch CRA-spezifisch  Generisch
```

## Reusable Workflows

### `cra-release.yml` — Release-Artefakte

Der primäre Workflow. Erzeugt, signiert und archiviert alle CRA-Artefakte bei einem Release.

**Verwendung (Zero-Config):**

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

**Verwendung (angepasst):**

```yaml
jobs:
  cra:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    with:
      run-validation: true
      validation-command: 'npm run ci'
      sign-sbom: true
      attest-sbom: true
      generate-vex: true
      generate-compliance-report: true
      support-period-years: 5
      fail-on-critical: true
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write
```

**Pipeline-Ablauf:**

| Schritt | Action | Artefakt | CRA-Referenz |
|---------|--------|----------|-------------|
| 1 | SBOM-Generierung | `sbom.cdx.json` | Annex I Teil II (1) |
| 2 | SBOM-Signierung (Cosign) | `.sig` + `.cert` | Annex I Teil II (7) |
| 3 | SBOM-Attestation | GitHub Attestation | Annex I Teil II (7) |
| 4 | Vulnerability Scan | `vulnerability-report.json` | Annex I Teil II (1) |
| 5 | VEX-Generierung | `vex.openvex.json` | Annex I II.2 |
| 6 | Compliance Report | `.json` + `.md` | Annex VII |
| 7 | SARIF-Upload | GitHub Security Tab | Annex I Teil I (2)(a) |
| 8 | Release-Anhang | Alle Artefakte am Release | Art. 13 |

::: tip Zero Config
Alle neuen Features (Attestation, VEX, Compliance Report) sind standardmäßig aktiviert. Bestehende Consumer erhalten sie automatisch ohne Workflow-Änderungen.
:::

### `cra-scan.yml` — Geplanter Vulnerability Scan

Für kontinuierliches CVE-Monitoring (Annex I Teil I (2)(a)). Täglich per Cron-Schedule ausführen.

```yaml
on:
  schedule:
    - cron: '0 6 * * *'

jobs:
  scan:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-scan.yml@main
    with:
      severity-threshold: MEDIUM
      fail-on-critical: false
      create-issue: true
    permissions:
      contents: read
      security-events: write
      issues: write
```

**Features:**

- Multi-Engine-Scanning (Trivy + Grype + OSV-Scanner)
- Automatische Erstellung von GitHub Issues bei CRITICAL-Findings
- SARIF-Upload in den GitHub Security Tab
- Konfigurierbare Severity-Schwellenwerte

### `cra-report.yml` — Hub-API-Report

Sendet Compliance-Daten an die Software Security Hub API zur zentralen Erfassung.

```yaml
jobs:
  report:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-report.yml@main
    with:
      send-sbom: true
      send-vulnerabilities: true
      send-release-info: true
```

## Vollständiger Consumer-Workflow

::: tip COPY & PASTE
Kopieren Sie diesen Workflow in Ihr Produkt-Repository als `.github/workflows/cra.yml`. Er deckt Release-Compliance, wöchentliches Scanning und Hub-Reporting ab — alles mit sinnvollen Defaults.
:::

### Minimal (Zero-Config)

Funktioniert ohne Konfiguration für jedes Repository. Alle Features mit Defaults aktiviert.

```yaml
# .github/workflows/cra.yml
name: CRA Compliance

on:
  release:
    types: [published]
  schedule:
    - cron: '0 6 * * 1'  # Wöchentlich Montag 06:00 UTC
  workflow_dispatch:

permissions:
  contents: write
  id-token: write
  attestations: write
  security-events: write
  issues: write

jobs:
  # Bei Release: Vollständige CRA-Pipeline
  cra-release:
    if: github.event_name == 'release'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write

  # Wöchentlich: CVE-Scan
  cra-scan:
    if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-scan.yml@main
    permissions:
      contents: read
      security-events: write
      issues: write
```

### Vollständige Konfiguration (alle Parameter)

Für Produkte mit spezifischen Anforderungen — Node.js-Validierung, Class I, Grype-Scanning, etc.

```yaml
# .github/workflows/cra.yml
name: CRA Compliance

on:
  release:
    types: [published]
  schedule:
    - cron: '0 6 * * 1'
  workflow_dispatch:

permissions:
  contents: write
  id-token: write
  attestations: write
  security-events: write
  issues: write

jobs:
  # ── Release: Vollständige CRA-Pipeline ──
  cra-release:
    if: github.event_name == 'release'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    with:
      # Validierung
      run-validation: true              # Lint/Build vor CRA-Artefakten
      node-version: '24'                # Node.js-Version
      validation-command: 'npm run ci'  # Validierungsbefehl

      # SBOM & Scanning
      scan-target: '.'                  # Verzeichnis, Image-Ref oder SBOM-Pfad
      scan-type: 'auto'                 # auto | fs | image | sbom
      sign-sbom: true                   # Cosign Keyless Signing
      fail-on-critical: true            # Release bei CRITICAL CVEs blockieren
      enable-grype: true                # Zusätzlicher Grype-Scan
      enable-osv: true                  # Zusätzlicher OSV-Scanner

      # Attestation & VEX
      attest-sbom: true                 # GitHub-native SBOM-Attestation
      generate-vex: true                # OpenVEX-Dokument
      vex-overrides: 'security/vex-overrides.json'  # Manuelle Triage-Datei

      # Compliance-Report
      generate-compliance-report: true
      support-period-years: 5           # Art. 13(8): mindestens 5 Jahre

      # EU-Konformitätserklärung
      generate-eu-doc: true             # Annex V JSON
      render-pdfs: true                 # JSON → PDF-Rendering
      classification: 'important-class-1'  # standard | important-class-1 | important-class-2 | critical
      conformity-module: 'module-a'     # module-a | module-b-c | module-h | eucc
      manufacturer-name: 'BAUER GROUP GmbH'

      # Release
      upload-to-release: true           # Alle Artefakte am GitHub Release anhängen
      retention-days: 90                # Artefakt-Aufbewahrung
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write

  # ── Wöchentlich: CVE-Scan ──
  cra-scan:
    if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-scan.yml@main
    with:
      severity-threshold: 'MEDIUM'      # UNKNOWN | LOW | MEDIUM | HIGH | CRITICAL
      fail-on-critical: false           # Geplante Scans nicht fehlschlagen lassen
      create-issue: true                # GitHub Issue für CRITICAL CVEs erstellen
      enable-grype: true
      enable-osv: true
    permissions:
      contents: read
      security-events: write
      issues: write

  # ── Nach Release: An Hub melden ──
  cra-report:
    if: github.event_name == 'release'
    needs: [cra-release]
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-report.yml@main
    with:
      dry-run: true                     # Auf false setzen wenn Hub betriebsbereit
    permissions:
      contents: read
      id-token: write
```

### Docker / Container Image

Für Produkte die Container-Images bauen — scannt das Image statt des Dateisystems.

```yaml
jobs:
  cra-release:
    if: github.event_name == 'release'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    with:
      scan-target: 'ghcr.io/bauer-group/my-app:${{ github.ref_name }}'
      scan-type: 'image'
      classification: 'important-class-2'
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write
```

### Produkt-Konfigurationsdatei (empfohlen)

Anstatt alle Parameter im Workflow zu übergeben, legen Sie eine `cra-product.json` im Wurzelverzeichnis Ihres Repositories an. Die `cra-eu-doc`-Action liest sie automatisch ein:

```json
{
  "$schema": "https://cra.docs.bauer-group.com/schemas/cra-product/v1.0.0",
  "product": {
    "name": "API-Gateway",
    "description": "REST API Gateway for BAUER GROUP services",
    "classification": "important-class-1",
    "conformityModule": "module-a"
  },
  "manufacturer": {
    "name": "BAUER GROUP GmbH",
    "address": "Street, City, Country"
  },
  "support": {
    "periodYears": 5,
    "until": "2031-12-31"
  },
  "contacts": {
    "securityEmail": "disclosure@bauer-group.com",
    "productOwner": "team@bauer-group.com"
  }
}
```

## Parameter-Referenz

### `cra-release.yml`

| Parameter | Typ | Default | Beschreibung |
|-----------|-----|---------|-------------|
| `run-validation` | boolean | `false` | Lint/Build vor CRA-Artefakten ausführen |
| `node-version` | string | `'24'` | Node.js-Version (bei `run-validation: true`) |
| `validation-command` | string | `'npm run lint'` | Validierungsbefehl |
| `scan-target` | string | `'.'` | Verzeichnis, Image-Referenz oder SBOM-Pfad |
| `scan-type` | string | `'auto'` | `auto`, `fs`, `image` oder `sbom` |
| `sbom-filename` | string | `'sbom.cdx.json'` | SBOM-Ausgabedateiname |
| `sign-sbom` | boolean | `true` | SBOM mit Cosign signieren (keyless) |
| `fail-on-critical` | boolean | `false` | Bei CRITICAL-Schwachstellen fehlschlagen |
| `enable-grype` | boolean | `false` | Grype als zusätzlichen Scanner aktivieren |
| `enable-osv` | boolean | `true` | OSV-Scanner aktivieren |
| `attest-sbom` | boolean | `true` | GitHub SBOM-Attestation erstellen |
| `generate-vex` | boolean | `true` | OpenVEX-Dokument generieren |
| `vex-overrides` | string | `'security/vex-overrides.json'` | Pfad zu VEX-Triage-Overrides |
| `generate-compliance-report` | boolean | `true` | JSON + Markdown Report generieren |
| `support-period-years` | number | `5` | Supportzeitraum (Art. 13(8)) |
| `generate-eu-doc` | boolean | `true` | EU-Konformitätserklärung generieren |
| `render-pdfs` | boolean | `true` | JSON → PDF rendern |
| `classification` | string | `'standard'` | CRA-Klasse: `standard`, `important-class-1`, `important-class-2`, `critical` |
| `conformity-module` | string | `'module-a'` | Modul: `module-a`, `module-b-c`, `module-h`, `eucc` |
| `manufacturer-name` | string | `'BAUER GROUP GmbH'` | Rechtlicher Herstellername |
| `upload-to-release` | boolean | `true` | Artefakte am GitHub Release anhängen |
| `retention-days` | number | `90` | Artefakt-Aufbewahrung in Tagen |

### `cra-scan.yml`

| Parameter | Typ | Default | Beschreibung |
|-----------|-----|---------|-------------|
| `scan-target` | string | `'.'` | Scan-Ziel |
| `scan-type` | string | `'auto'` | Scan-Typ |
| `severity-threshold` | string | `'MEDIUM'` | Minimale gemeldete Schwere |
| `fail-on-critical` | boolean | `false` | Bei CRITICAL-Findings fehlschlagen |
| `create-issue` | boolean | `true` | GitHub Issue für CRITICALs erstellen |
| `enable-grype` | boolean | `false` | Zusätzlicher Grype-Scan |
| `enable-osv` | boolean | `true` | Zusätzlicher OSV-Scanner |

### Benötigte Permissions

| Workflow | Permission | Grund |
|----------|-----------|-------|
| `cra-release` | `contents: write` | Release-Assets hochladen |
| `cra-release` | `id-token: write` | Cosign Keyless Signing (OIDC) |
| `cra-release` | `attestations: write` | GitHub SBOM-Attestation |
| `cra-release` | `security-events: write` | SARIF-Upload in Security Tab |
| `cra-scan` | `contents: read` | Repository zum Scannen lesen |
| `cra-scan` | `security-events: write` | SARIF-Upload |
| `cra-scan` | `issues: write` | CVE-Issues erstellen |
| `cra-report` | `contents: read` | SBOM + Scan-Ergebnisse lesen |
| `cra-report` | `id-token: write` | API-Authentifizierung |

## Release-Artefakte

Ein vollständig konfiguriertes CRA-Release erzeugt:

| Artefakt | Format | Zweck | CRA-Referenz |
|----------|--------|-------|-------------|
| `sbom.cdx.json` | CycloneDX JSON | Software Bill of Materials | Annex I Teil II (1) |
| `sbom.cdx.json.sig` | Cosign Signature | SBOM-Integrität (portabel) | Annex I Teil II (7) |
| `sbom.cdx.json.cert` | X.509 Certificate | Signatur-Identität | Annex I Teil II (7) |
| GitHub Attestation | Sigstore | SBOM-Provenienz (GitHub-native) | Annex I Teil II (7) |
| `vulnerability-report.json` | Trivy JSON | Bekannte Schwachstellen | Annex I Teil II (1) |
| `vex.openvex.json` | OpenVEX v0.2.0 | Ausnutzbarkeit von Schwachstellen | Annex I II.2 |
| `cra-compliance-report.json` | Custom Schema v1.0.0 | Maschinenlesbarer Compliance-Status | Annex VII |
| `cra-compliance-report.md` | Markdown | Menschenlesbarer Compliance-Status | Annex VII |
| `eu-doc.json` | EU DoC Schema v1.0.0 | Maschinenlesbare EU-Konformitätserklärung | Art. 28, Annex V |
| `EU-Declaration-*.pdf` | PDF | Druckbare EU-Konformitätserklärung | Art. 28, Annex V |
| `CRA-Compliance-Report-*.pdf` | PDF | Druckbarer Compliance-Report | Annex VII |

::: warning VERIFIZIERUNG
Verifizieren Sie die SBOM-Authentizität nach dem Download:

```bash
# Cosign
cosign verify-blob --signature sbom.cdx.json.sig --certificate sbom.cdx.json.cert sbom.cdx.json

# GitHub Attestation
gh attestation verify sbom.cdx.json --repo owner/repo
```

:::

## VEX-Triage

Das VEX-Dokument generiert automatisch `under_investigation`-Statements für alle gefundenen CVEs. Zur Triage:

1. Erstellen Sie `security/vex-overrides.json` in Ihrem Produkt-Repo
2. Fügen Sie manuelle Entscheidungen für jede CVE hinzu

```json
{
  "@context": "https://openvex.dev/ns/v0.2.0",
  "statements": [
    {
      "vulnerability": { "@id": "CVE-2024-1234" },
      "products": [{ "@id": "pkg:github/your-org/your-repo" }],
      "status": "not_affected",
      "justification": "vulnerable_code_not_in_execute_path",
      "impact_statement": "Dependency imported but affected function never called."
    }
  ]
}
```

| Status | Verwendung |
|--------|-----------|
| `not_affected` | Schwachstelle existiert, ist aber im Produkt nicht ausnutzbar |
| `affected` | Schwachstelle ist ausnutzbar — Behebung erforderlich |
| `fixed` | Schwachstelle wurde behoben |
| `under_investigation` | Bewertung ausstehend (automatisch generierter Standard) |

## Compliance-Scoring

Der Compliance-Report vergibt einen Score von maximal 100:

| Kategorie | Max | Kriterien |
|-----------|-----|-----------|
| SBOM | 20 | Generiert (10) + Signiert (5) + Attestiert (5) |
| Signierung | 15 | Cosign verifiziert (10) + Attestation vorhanden (5) |
| Schwachstellen | 20 | 0 kritische (15) + 0 hohe (5) |
| VEX | 10 | Generiert (5) + Manuelle Overrides vorhanden (5) |
| Sicherheitsrichtlinie | 15 | SECURITY.md (10) + CVD-Prozess definiert (5) |
| Supportzeitraum | 10 | In Konfiguration definiert (10) |
| CRA-Artikelabdeckung | 10 | Prozentsatz erfüllter zugeordneter Artikel |

::: tip CLI-TOOL
Nutzen Sie den [cra-check CLI](/de/compliance-matrix/cra-check) zur lokalen Prüfung oder für beliebige GitHub-Repos.
:::
