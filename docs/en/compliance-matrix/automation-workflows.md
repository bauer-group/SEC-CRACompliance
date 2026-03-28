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

## Composite Actions

### CRA-Specific (this repo)

| Action | Purpose | Key Output |
|--------|---------|------------|
| `cra-sbom-generate` | CycloneDX SBOM via Trivy (auto-detects language) | `sbom.cdx.json` |
| `cra-sbom-sign` | Cosign keyless signing (Sigstore OIDC) | `.sig` + `.cert` |
| `cra-vulnerability-scan` | Multi-engine scan (Trivy + Grype + OSV) | JSON + SARIF |
| `cra-hub-report` | Versioned API envelope to Security Hub | API response |
| `cra-compliance-report` | Aggregated compliance report with scoring | `.json` + `.md` |

### Generic (automation-templates)

| Action | Purpose | Key Output |
|--------|---------|------------|
| `vex-generate` | OpenVEX document from Trivy scan + manual overrides | `vex.openvex.json` |
| `sbom-attest` | GitHub-native SBOM attestation | Attestation ID |

## Release Artifacts

A CRA-compliant release contains the following artifacts:

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
