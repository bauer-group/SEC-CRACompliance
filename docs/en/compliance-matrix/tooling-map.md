# 9.1 Tooling Map

## Tool → CRA Compliance Matrix

This mapping shows which tool covers which CRA requirements.

## GitHub Ecosystem

### Dependabot

| CRA Requirement | Coverage |
|-----------------|-----------|
| Art. 10(6) – Identify vulnerabilities | Automatic CVE alerts for dependencies |
| Art. 10(7) – Security updates | Automatic PRs when updates are available |
| Annex I, Part II, No. 2 – Remediation without undue delay | Auto-Merge for patch updates |
| Annex I, Part II, No. 5 – Monitor third-party components | Continuous dependency monitoring |

### GitHub Security Advisories

| CRA Requirement | Coverage |
|-----------------|-----------|
| Art. 10(9) – Coordinated disclosure | Private advisory, CVE assignment |
| Art. 14(8) – User notification | Public advisory with recommended actions |
| Annex I, Part II, No. 4 – Disclosure of remediated CVEs | Publish security advisory |

### GitHub Actions (Automation Templates)

| Workflow | CRA Requirement | Function |
|----------|-----------------|----------|
| `automatic-release.yml` | Art. 10(7) | Automated release pipeline |
| `modules-security-scan.yml` | Art. 10(6) | Multi-Engine Security Scanning |
| `modules-license-compliance.yml` | Art. 10(4), Art. 13(23) | License check + SBOM |
| `docker-build.yml` | Art. 10(12) | Image build + signing |
| `docker-maintenance-dependabot.yml` | Annex I, Part II, No. 2 | Auto-Merge dependency updates |
| `modules-docker-base-image-monitor.yml` | Annex I, Part II, No. 5 | Base image update |
| `security-management.yml` | Art. 13(8) | SECURITY.md auto-generation |
| `teams-notifications.yml` | Art. 14 (supporting) | Incident communication |

## Security Scanning

### Trivy (Aqua Security)

| CRA Requirement | Coverage |
|-----------------|-----------|
| Art. 10(6) | Container image vulnerability scanning |
| Art. 10(8) | Detection of known exploitable vulnerabilities |
| Art. 13(23) | SBOM generation (CycloneDX, SPDX) |
| Annex I, Part II, No. 1 | Component detection for SBOM |
| Annex I, Part II, No. 3 | Regular security testing (CI/CD) |

### Grype (Anchore)

| CRA Requirement | Coverage |
|-----------------|-----------|
| Art. 10(6) | Vulnerability scanning (complementary to Trivy) |
| Annex I, Part II, No. 1 | CVE matching against SBOM |

### OSV-Scanner (Google)

| CRA Requirement | Coverage |
|-----------------|-----------|
| Art. 10(6) | OSV database-based vulnerability scanning |
| Art. 10(8) | Detection of known vulnerabilities (aggregates NVD, GitHub, PyPI, npm, Go etc.) |
| Annex I, Part II, No. 2 | CVE matching against lockfiles and SBOMs |

### Snyk

| CRA Requirement | Coverage |
|-----------------|-----------|
| Art. 10(6) | Application security scanning |
| Annex I, Part II, No. 3 | Code-level vulnerability detection |

### Gitleaks + GitGuardian

| CRA Requirement | Coverage |
|-----------------|-----------|
| Art. 10(1) | Prevention of secret exposure |
| Annex I, Part I, No. 5 | Protection against unauthorised access (secrets) |

## SBOM & Compliance

### Syft (Anchore)

| CRA Requirement | Coverage |
|-----------------|-----------|
| Art. 13(23) | SBOM generation (CycloneDX JSON) |
| Annex I, Part II, No. 1 | Component detection and documentation |
| Annex VII No. 1 | Product description (dependencies) |

### FOSSA / License Compliance

| CRA Requirement | Coverage |
|-----------------|-----------|
| Art. 10(4) | Due diligence for third-party components (licences) |
| Annex I, Part II, No. 1 | Licence inventory as part of the SBOM |

## Signing & Integrity

### Cosign (Sigstore)

| CRA Requirement | Coverage |
|-----------------|-----------|
| Art. 10(12) | Integrity protection of updates |
| Annex I, Part I, No. 3.2 | Integrity protection (data/artefacts) |
| Annex I, Part II, No. 6 | Secure provision of updates |

## CRA Compliance Workflows (this repository)

In addition to the automation templates, this repository provides dedicated CRA workflows that can be reused in every source code repository.

### Composite Actions

| Action | CRA Requirement | Function |
|--------|-----------------|----------|
| `cra-sbom-generate` | Art. 13(23) | Generate CycloneDX SBOM (Trivy, auto-detect) |
| `cra-sbom-sign` | Art. 10(12) | Sign SBOM (Cosign, keyless OIDC) |
| `cra-vulnerability-scan` | Art. 10(6), (8) | Multi-engine vulnerability scan (Trivy + Grype + OSV-Scanner) |
| `cra-hub-report` | Art. 10, Art. 13 | Send compliance data to Software Security Hub API |

### Reusable Workflows

| Workflow | Type | CRA Requirement | Function |
|----------|-----|-----------------|----------|
| `cra-release.yml` | Repo-local | Art. 10(12), Art. 13(23) | SBOM + signature + scan as release assets |
| `cra-scan.yml` | Repo-local | Art. 10(6), (8) | Scheduled CVE scan with issue creation |
| `cra-report.yml` | API reporting | Art. 10, Art. 13, Annex VII | All CRA data to CRA Compliance Hub |

## Planned Extensions

| Tool / Workflow | CRA Requirement | Status |
|----------------|-----------------|--------|
| **CodeQL** (SAST) | Annex I, Part II, No. 3 | 🔧 Optional |
| **CRA Compliance Hub** (web app) | Central evaluation | 🔧 Planned |

## Summary: CRA Coverage through Tooling

```
                         CRA Requirement
                    ┌─────────────────────────┐
                    │  Art. 10 (Manufacturer)   │
                    │  ├── (1) Security         │──→ Trivy, Gitleaks, Code Review
                    │  ├── (2) Risk             │──→ Manual + Template
                    │  ├── (4) 3rd Party        │──→ FOSSA, License Compliance
                    │  ├── (6) Vulnerabilities  │──→ CVE-Monitor, Dependabot
                    │  ├── (7) Updates          │──→ Dependabot, CI/CD
                    │  ├── (8) No CVEs          │──→ CVE-Monitor, Trivy
                    │  ├── (9) CVD              │──→ GitHub Advisories
                    │  ├── (12) Integrity       │──→ Cosign
                    │  └── (16) Support         │──→ SECURITY.md
                    ├─────────────────────────┤
                    │  Art. 13 (Information)     │
                    │  ├── (6) CVD Policy        │──→ SECURITY.md
                    │  └── (23) SBOM            │──→ Trivy/Syft
                    ├─────────────────────────┤
                    │  Art. 14 (Reporting)       │
                    │  ├── 24h Early Warning     │──→ ENISA SRP + Teams
                    │  ├── 72h Notification      │──→ ENISA SRP
                    │  └── User Info            │──→ GitHub Advisory
                    └─────────────────────────┘
```
