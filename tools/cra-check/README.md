# cra-check

**CRA Compliance Checker for GitHub repositories and local projects.**

Zero-dependency Node.js CLI that checks whether a product meets EU Cyber Resilience Act requirements by verifying the presence and quality of compliance artifacts (SBOM, VEX, vulnerability scans, security policies).

## Quick Start

```bash
# Check current directory
npx @bauer-group/cra-check

# Check a GitHub repository (latest release)
npx @bauer-group/cra-check bauer-group/my-product

# JSON output for CI pipelines
npx @bauer-group/cra-check --format json --ci
```

## Usage

```
cra-check [target] [options]

Arguments:
  target                  GitHub repo (owner/repo) or local path
                          Default: current directory (.)

Options:
  --format <terminal|json>  Output format (default: terminal)
  --ci                      CI mode: exit code 1 if below min-score
  --min-score <n>           Minimum compliance score (default: 70)
  --github-token <token>    GitHub token (or GITHUB_TOKEN env var)
  --release <tag>           Check specific release (default: latest)
  --no-color                Disable terminal colors
  --verbose                 Show detailed score breakdown
  -h, --help                Show help
  -v, --version             Show version
```

## Modes

### Local Mode (default)

Scans the filesystem for CRA artifacts:

```bash
cra-check .
cra-check /path/to/project
```

**Files checked:**
- `sbom.cdx.json` / `sbom-source.cdx.json` — SBOM
- `sbom.cdx.json.sig` / `.cert` — Cosign signatures
- `vex.openvex.json` — VEX document
- `vulnerability-report.json` — Trivy scan results
- `SECURITY.md` — Security policy with CVD process
- `cra-config.json` / `.cra.json` — Support period config

### Remote Mode

Fetches release assets from GitHub API:

```bash
cra-check bauer-group/my-product
cra-check bauer-group/my-product --release v2.0.0
```

**What it checks:**
- Release assets (SBOM, VEX, vulnerability report, compliance report)
- Signature files in release
- SECURITY.md in repository root
- Support period from compliance report

**Authentication:** Set `GITHUB_TOKEN` environment variable or use `--github-token` for private repos and higher API rate limits.

## Output Examples

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
  "generatedAt": "2026-03-28T10:00:00.000Z",
  "product": { "name": "my-product", "version": "2.3.1" },
  "checks": [
    { "name": "SBOM", "status": "pass", "details": "CycloneDX, 142 components" },
    { "name": "Vulnerabilities", "status": "warn", "details": "0 critical, 2 high" }
  ],
  "complianceScore": {
    "score": 85,
    "maxScore": 100,
    "passed": true,
    "minScore": 70
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
| `1` | Score < min-score (FAIL) — only in `--ci` mode |
| `2` | Fatal error (invalid target, network failure) |

## Scoring Algorithm

| Category | Max Points | Criteria |
|----------|-----------|----------|
| SBOM | 20 | Generated (10) + Signed (5) + Attested (5) |
| Signing | 15 | Cosign verified (10) + Attestation (5) |
| Vulnerabilities | 20 | 0 critical (15) + 0 high (5) |
| VEX | 10 | Generated (5) + Triaged overrides (5) |
| Security Policy | 15 | SECURITY.md (10) + CVD process (5) |
| Support Period | 10 | Defined (10) |
| CRA Article Coverage | 10 | % of articles met |
| **Total** | **100** | |

## Requirements

- Node.js >= 20 (uses built-in `fetch`)
- No npm dependencies (zero install overhead)

## License

MIT
