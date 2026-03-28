# 8.3 CRA Compliance Checker (cra-check)

## Overview

`cra-check` is a zero-dependency Node.js CLI tool that verifies whether a product meets CRA compliance requirements. It checks for the presence and quality of compliance artifacts — SBOM, VEX, vulnerability scans, security policies, and support period definitions.

## Installation

No installation required. Run directly via `npx`:

```bash
npx @bauer-group/cra-check
```

Or install globally:

```bash
npm install -g @bauer-group/cra-check
```

## Usage

```bash
# Check current directory
cra-check

# Check a specific directory
cra-check /path/to/project

# Check a GitHub repository (latest release)
cra-check bauer-group/my-product

# Check a specific release
cra-check bauer-group/my-product --release v2.0.0

# JSON output for automation
cra-check --format json

# CI mode (exit code 1 if below threshold)
cra-check --ci --min-score 70
```

## Modes

### Local Mode

Scans the filesystem for CRA artifacts:

| File | Check |
|------|-------|
| `sbom.cdx.json` | SBOM present, valid, component count |
| `sbom.cdx.json.sig` + `.cert` | Cosign signature present |
| `vex.openvex.json` | VEX document, statement count, triage status |
| `vulnerability-report.json` | Severity counts (critical/high/medium/low) |
| `SECURITY.md` | Security policy present, CVD process defined |
| `cra-config.json` | Support period definition |

### Remote Mode

Fetches data from GitHub API:

- Downloads release assets (SBOM, VEX, vulnerability report)
- Checks for signature files in release
- Verifies SECURITY.md exists in repository
- Extracts support period from compliance report

::: tip AUTHENTICATION
Set `GITHUB_TOKEN` for private repositories and higher API rate limits:

```bash
export GITHUB_TOKEN=ghp_...
cra-check bauer-group/private-repo
```

:::

## Output

### Terminal (default)

```
  CRA Compliance: my-product v2.3.1
  ══════════════════════════════════════════

  SBOM                ✅ PASS  CycloneDX, 142 components
  SBOM Signed         ✅ PASS  Cosign signature + certificate present
  VEX Document        ✅ PASS  15 statements (3 triaged)
  Vulnerabilities     ⚠️ WARN  0 critical, 2 high, 5 medium, 3 low
  Security Policy     ✅ PASS  SECURITY.md present with CVD process
  Support Period      ✅ PASS  5 years

  Score: 85/100 ████████████████░░░░ PASS
```

### JSON (`--format json`)

```json
{
  "$schema": "https://cra.docs.bauer-group.com/schemas/cra-check/v1.0.0",
  "product": { "name": "my-product", "version": "2.3.1" },
  "checks": [
    { "name": "SBOM", "status": "pass", "details": "CycloneDX, 142 components" }
  ],
  "complianceScore": {
    "score": 85,
    "maxScore": 100,
    "passed": true
  }
}
```

## CI/CD Integration

### GitHub Actions

```yaml
- name: 🔍 CRA Compliance Check
  run: npx @bauer-group/cra-check --ci --min-score 70
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Exit Codes

| Code | Meaning |
|------|---------|
| `0` | Score >= min-score (PASS) |
| `1` | Score < min-score (FAIL) — only with `--ci` flag |
| `2` | Fatal error (invalid target, network failure) |

## Scoring

See [Compliance Scoring](/en/compliance-matrix/automation-workflows#compliance-scoring) for the full scoring algorithm.

## Options

| Option | Default | Description |
|--------|---------|-------------|
| `--format <terminal\|json>` | `terminal` | Output format |
| `--ci` | `false` | CI mode: non-zero exit on failure |
| `--min-score <n>` | `70` | Minimum score to pass |
| `--github-token <token>` | `GITHUB_TOKEN` env | GitHub API authentication |
| `--release <tag>` | `latest` | Release tag for remote mode |
| `--no-color` | `false` | Disable ANSI colours |
| `--verbose` | `false` | Show score breakdown |
| `-h, --help` | — | Show help text |
| `-v, --version` | — | Show version |

## Requirements

- Node.js >= 20
- No npm dependencies (zero-dependency design)
