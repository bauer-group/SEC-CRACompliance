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

### `cra-report.yml` — Hub-API-Report

Sendet Compliance-Daten an die Software Security Hub API zur zentralen Erfassung.

## Vollständiger Consumer-Workflow

::: tip COPY & PASTE
Kopieren Sie diesen Workflow in Ihr Produkt-Repository als `.github/workflows/cra.yml`. Er deckt Release-Compliance, wöchentliches Scanning und Hub-Reporting ab.
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
      vex-overrides: 'security/vex-overrides.json'

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
      upload-to-release: true
      retention-days: 90
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
      severity-threshold: 'MEDIUM'
      fail-on-critical: false
      create-issue: true
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

## Parameter-Referenz

### `cra-release.yml`

| Parameter | Typ | Default | Beschreibung |
|-----------|-----|---------|-------------|
| `run-validation` | boolean | `false` | Lint/Build vor CRA-Artefakten ausführen |
| `node-version` | string | `'24'` | Node.js-Version (bei `run-validation: true`) |
| `validation-command` | string | `'npm run lint'` | Validierungsbefehl |
| `scan-target` | string | `'.'` | Verzeichnis, Image-Referenz oder SBOM-Pfad |
| `scan-type` | string | `'auto'` | `auto`, `fs`, `image` oder `sbom` |
| `sign-sbom` | boolean | `true` | SBOM mit Cosign signieren (keyless) |
| `fail-on-critical` | boolean | `false` | Bei CRITICAL-Schwachstellen fehlschlagen |
| `enable-grype` | boolean | `false` | Grype als zusätzlichen Scanner aktivieren |
| `enable-osv` | boolean | `true` | OSV-Scanner aktivieren |
| `attest-sbom` | boolean | `true` | GitHub SBOM-Attestation erstellen |
| `generate-vex` | boolean | `true` | OpenVEX-Dokument generieren |
| `support-period-years` | number | `5` | Supportzeitraum (Art. 13(8)) |
| `generate-eu-doc` | boolean | `true` | EU-Konformitätserklärung generieren |
| `render-pdfs` | boolean | `true` | JSON → PDF rendern |
| `classification` | string | `'standard'` | `standard`, `important-class-1`, `important-class-2`, `critical` |
| `conformity-module` | string | `'module-a'` | `module-a`, `module-b-c`, `module-h`, `eucc` |

### `cra-scan.yml`

| Parameter | Typ | Default | Beschreibung |
|-----------|-----|---------|-------------|
| `severity-threshold` | string | `'MEDIUM'` | Minimale gemeldete Schwere |
| `fail-on-critical` | boolean | `false` | Bei CRITICAL fehlschlagen |
| `create-issue` | boolean | `true` | GitHub Issue für CRITICALs erstellen |

### Benötigte Permissions

| Workflow | Permission | Grund |
|----------|-----------|-------|
| `cra-release` | `contents: write` | Release-Assets hochladen |
| `cra-release` | `id-token: write` | Cosign Keyless Signing (OIDC) |
| `cra-release` | `attestations: write` | GitHub SBOM-Attestation |
| `cra-release` | `security-events: write` | SARIF-Upload in Security Tab |
| `cra-scan` | `issues: write` | CVE-Issues erstellen |

## VEX-Triage

Erstellen Sie `security/vex-overrides.json` in Ihrem Produkt-Repo für manuelle Triage-Entscheidungen:

| Status | Verwendung |
|--------|-----------|
| `not_affected` | Schwachstelle existiert, ist aber im Produkt nicht ausnutzbar |
| `affected` | Schwachstelle ist ausnutzbar — Behebung erforderlich |
| `fixed` | Schwachstelle wurde behoben |
| `under_investigation` | Bewertung ausstehend (automatisch generierter Standard) |

## Compliance-Scoring

| Kategorie | Max | Kriterien |
|-----------|-----|-----------|
| SBOM | 20 | Generiert (10) + Signiert (5) + Attestiert (5) |
| Signierung | 15 | Cosign verifiziert (10) + Attestation vorhanden (5) |
| Schwachstellen | 20 | 0 kritische (15) + 0 hohe (5) |
| VEX | 10 | Generiert (5) + Manuelle Overrides vorhanden (5) |
| Sicherheitsrichtlinie | 15 | SECURITY.md (10) + CVD-Prozess definiert (5) |
| Supportzeitraum | 10 | In Konfiguration definiert (10) |
| CRA-Artikelabdeckung | 10 | Prozentsatz erfüllter Artikel |

::: tip CLI-TOOL
Nutzen Sie den [cra-check CLI](/de/compliance-matrix/cra-check) zur lokalen Prüfung oder für beliebige GitHub-Repos.
:::
