# 8.2 Automation Workflows

## Architecture

BAUER GROUP's CRA automation is split across two repositories:

- **CRA-specific** workflows and actions live in `SEC-CRACompliance` (this repo)
- **Generic** actions (VEX generation, SBOM attestation) live in `automation-templates`

Consumer repositories (your products) call the CRA release workflow with a single `uses:` line.

```
┌──────────────────────────────────────────┐
│            Consumer Repo (Product)        │
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
CRA-specific  CRA-specific    Generic
```

## Reusable Workflows

### `cra-release.yml` — Release Artifacts

The primary workflow. Generates, signs, and archives all CRA artifacts for a release.

**Usage (zero-config):**

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

**Usage (customised):**

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

**Pipeline flow:**

| Step | Action | Artifact | CRA Reference |
|------|--------|----------|---------------|
| 1 | SBOM Generation | `sbom.cdx.json` | Art. 13(23) |
| 2 | SBOM Signing (Cosign) | `.sig` + `.cert` | Art. 10(12) |
| 3 | SBOM Attestation | GitHub Attestation | Art. 10(12) |
| 4 | Vulnerability Scan | `vulnerability-report.json` | Art. 10(6) |
| 5 | VEX Generation | `vex.openvex.json` | Annex I II.2 |
| 6 | Compliance Report | `.json` + `.md` | Annex VII |
| 7 | SARIF Upload | GitHub Security tab | Art. 10(8) |
| 8 | Release Attachment | All artifacts on release | Art. 13 |

::: tip Zero Config
All new features (attestation, VEX, compliance report) are enabled by default. Existing consumers get them automatically without workflow changes.
:::

### `cra-scan.yml` — Scheduled Vulnerability Scan

For continuous CVE monitoring (Art. 10 Abs. 8). Run daily via cron schedule.

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

- Multi-engine scanning (Trivy + Grype + OSV-Scanner)
- Automatic GitHub Issue creation for CRITICAL findings
- SARIF upload to GitHub Security tab
- Configurable severity thresholds

### `cra-report.yml` — Hub API Report

Sends compliance data to the Software Security Hub API for centralised tracking.

```yaml
jobs:
  report:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-report.yml@main
    with:
      send-sbom: true
      send-vulnerabilities: true
      send-release-info: true
```

## Complete Consumer Workflow

::: tip COPY & PASTE
Copy this workflow into your product repository as `.github/workflows/cra.yml`. It covers release compliance, weekly scanning, and Hub reporting — all with sensible defaults.
:::

### Minimal (Zero-Config)

Works out of the box for any repository. All features enabled with defaults.

```yaml
# .github/workflows/cra.yml
name: CRA Compliance

on:
  release:
    types: [published]
  schedule:
    - cron: '0 6 * * 1'  # Weekly Monday 06:00 UTC
  workflow_dispatch:

permissions:
  contents: write
  id-token: write
  attestations: write
  security-events: write
  issues: write

jobs:
  # On release: Full CRA pipeline
  cra-release:
    if: github.event_name == 'release'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write

  # Weekly: CVE scan
  cra-scan:
    if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-scan.yml@main
    permissions:
      contents: read
      security-events: write
      issues: write
```

### Full Configuration (all parameters)

For products with specific requirements — Node.js validation, Class I classification, Grype scanning, etc.

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
  # ── Release: Full CRA pipeline ──
  cra-release:
    if: github.event_name == 'release'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    with:
      # Validation
      run-validation: true              # Run lint/build before CRA artifacts
      node-version: '24'                # Node.js version for validation
      validation-command: 'npm run ci'  # Your validation command

      # SBOM & Scanning
      scan-target: '.'                  # Directory, image ref, or SBOM path
      scan-type: 'auto'                 # auto | fs | image | sbom
      sign-sbom: true                   # Cosign keyless signing
      fail-on-critical: true            # Block release on CRITICAL CVEs
      enable-grype: true                # Additional Grype scan
      enable-osv: true                  # Additional OSV-Scanner

      # Attestation & VEX
      attest-sbom: true                 # GitHub-native SBOM attestation
      generate-vex: true                # OpenVEX document
      vex-overrides: 'security/vex-overrides.json'  # Manual triage file

      # Compliance Report
      generate-compliance-report: true
      support-period-years: 5           # Art. 13(8): minimum 5 years

      # EU Declaration of Conformity
      generate-eu-doc: true             # Annex V JSON
      render-pdfs: true                 # JSON → PDF rendering
      classification: 'important-class-1'  # standard | important-class-1 | important-class-2 | critical
      conformity-module: 'module-a'     # module-a | module-b-c | module-h | eucc
      manufacturer-name: 'BAUER GROUP GmbH'

      # Release
      upload-to-release: true           # Attach all artifacts to GitHub Release
      retention-days: 90                # Artifact retention
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write

  # ── Weekly: CVE Scan ──
  cra-scan:
    if: github.event_name == 'schedule' || github.event_name == 'workflow_dispatch'
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-scan.yml@main
    with:
      severity-threshold: 'MEDIUM'      # UNKNOWN | LOW | MEDIUM | HIGH | CRITICAL
      fail-on-critical: false           # Don't fail scheduled scans
      create-issue: true                # Create GitHub Issue for CRITICAL CVEs
      enable-grype: true
      enable-osv: true
    permissions:
      contents: read
      security-events: write
      issues: write

  # ── After Release: Report to Hub ──
  cra-report:
    if: github.event_name == 'release'
    needs: [cra-release]
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-report.yml@main
    with:
      dry-run: true                     # Set false when Hub is operational
    permissions:
      contents: read
      id-token: write
```

### Docker / Container Image

For products that build container images — scan the image instead of the filesystem.

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

### Product Config File (recommended)

Instead of passing all parameters in the workflow, create a `cra-product.json` in your repository root. The `cra-eu-doc` action reads it automatically:

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

## Parameter Reference

### `cra-release.yml`

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `run-validation` | boolean | `false` | Run lint/build before CRA artifacts |
| `node-version` | string | `'24'` | Node.js version (if `run-validation: true`) |
| `validation-command` | string | `'npm run lint'` | Validation command |
| `scan-target` | string | `'.'` | Directory, image ref, or SBOM file path |
| `scan-type` | string | `'auto'` | `auto`, `fs`, `image`, or `sbom` |
| `sbom-filename` | string | `'sbom.cdx.json'` | SBOM output filename |
| `sign-sbom` | boolean | `true` | Sign SBOM with Cosign (keyless) |
| `fail-on-critical` | boolean | `false` | Fail if CRITICAL vulnerabilities found |
| `enable-grype` | boolean | `false` | Run Grype as additional scanner |
| `enable-osv` | boolean | `true` | Run OSV-Scanner |
| `attest-sbom` | boolean | `true` | Create GitHub SBOM attestation |
| `generate-vex` | boolean | `true` | Generate OpenVEX document |
| `vex-overrides` | string | `'security/vex-overrides.json'` | Path to VEX triage overrides |
| `generate-compliance-report` | boolean | `true` | Generate JSON + Markdown report |
| `support-period-years` | number | `5` | Support period (Art. 13(8)) |
| `generate-eu-doc` | boolean | `true` | Generate EU Declaration of Conformity |
| `render-pdfs` | boolean | `true` | Render JSON → PDF |
| `classification` | string | `'standard'` | CRA class: `standard`, `important-class-1`, `important-class-2`, `critical` |
| `conformity-module` | string | `'module-a'` | Module: `module-a`, `module-b-c`, `module-h`, `eucc` |
| `manufacturer-name` | string | `'BAUER GROUP GmbH'` | Manufacturer legal name |
| `upload-to-release` | boolean | `true` | Attach artifacts to GitHub Release |
| `retention-days` | number | `90` | Artifact retention in days |

### `cra-scan.yml`

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `scan-target` | string | `'.'` | Scan target |
| `scan-type` | string | `'auto'` | Scan type |
| `severity-threshold` | string | `'MEDIUM'` | Minimum severity to report |
| `fail-on-critical` | boolean | `false` | Fail on CRITICAL findings |
| `create-issue` | boolean | `true` | Create GitHub Issue for CRITICALs |
| `enable-grype` | boolean | `false` | Additional Grype scan |
| `enable-osv` | boolean | `true` | Additional OSV-Scanner |

### Required Permissions

| Workflow | Permission | Why |
|----------|-----------|-----|
| `cra-release` | `contents: write` | Upload release assets |
| `cra-release` | `id-token: write` | Cosign keyless signing (OIDC) |
| `cra-release` | `attestations: write` | GitHub SBOM attestation |
| `cra-release` | `security-events: write` | SARIF upload to Security tab |
| `cra-scan` | `contents: read` | Read repository for scanning |
| `cra-scan` | `security-events: write` | SARIF upload |
| `cra-scan` | `issues: write` | Create CVE issues |
| `cra-report` | `contents: read` | Read SBOM + scan results |
| `cra-report` | `id-token: write` | API authentication |

## Release Artifacts

A fully configured CRA release produces:

| Artifact | Format | Purpose | CRA Reference |
|----------|--------|---------|---------------|
| `sbom.cdx.json` | CycloneDX JSON | Software Bill of Materials | Art. 13(23) |
| `sbom.cdx.json.sig` | Cosign Signature | SBOM integrity (portable) | Art. 10(12) |
| `sbom.cdx.json.cert` | X.509 Certificate | Signing identity | Art. 10(12) |
| GitHub Attestation | Sigstore | SBOM provenance (GitHub-native) | Art. 10(12) |
| `vulnerability-report.json` | Trivy JSON | Known vulnerabilities | Art. 10(6) |
| `vex.openvex.json` | OpenVEX v0.2.0 | Vulnerability exploitability | Annex I II.2 |
| `cra-compliance-report.json` | Custom Schema v1.0.0 | Machine-readable compliance status | Annex VII |
| `cra-compliance-report.md` | Markdown | Human-readable compliance status | Annex VII |
| `eu-doc.json` | EU DoC Schema v1.0.0 | Machine-readable EU Declaration of Conformity | Art. 28, Annex V |
| `EU-Declaration-*.pdf` | PDF | Printable EU Declaration of Conformity | Art. 28, Annex V |
| `CRA-Compliance-Report-*.pdf` | PDF | Printable compliance report | Annex VII |

::: warning VERIFICATION
Verify SBOM authenticity after download:

```bash
# Cosign
cosign verify-blob --signature sbom.cdx.json.sig --certificate sbom.cdx.json.cert sbom.cdx.json

# GitHub Attestation
gh attestation verify sbom.cdx.json --repo owner/repo
```

:::

## VEX Triage

The VEX document auto-generates `under_investigation` statements for all found CVEs. To triage:

1. Create `security/vex-overrides.json` in your product repo
2. Add manual decisions for each CVE

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

| Status | When to use |
|--------|-------------|
| `not_affected` | Vulnerability exists but is not exploitable in your product |
| `affected` | Vulnerability is exploitable — remediation required |
| `fixed` | Vulnerability has been remediated |
| `under_investigation` | Assessment pending (auto-generated default) |

## Compliance Scoring

The compliance report assigns a score out of 100:

| Category | Max | Criteria |
|----------|-----|----------|
| SBOM | 20 | Generated (10) + Signed (5) + Attested (5) |
| Signing | 15 | Cosign verified (10) + Attestation present (5) |
| Vulnerabilities | 20 | 0 critical (15) + 0 high (5) |
| VEX | 10 | Generated (5) + Manual overrides present (5) |
| Security Policy | 15 | SECURITY.md (10) + CVD process defined (5) |
| Support Period | 10 | Defined in config (10) |
| CRA Article Coverage | 10 | Percentage of mapped articles met |

::: tip CLI TOOL
Use the [cra-check CLI](/en/compliance-matrix/cra-check) to verify compliance locally or for any GitHub repo.
:::
