# 8.1 Tooling Map

## 8.1.1 Tool → CRA Compliance Matrix

This mapping shows which tool covers which CRA requirements.

## 8.1.2 GitHub Ecosystem

### Dependabot

| CRA Requirement | Coverage |
|-----------------|-----------|
| Annex I Part II (1) – Identify vulnerabilities | Automatic CVE alerts for dependencies |
| Annex I Part II (2) – Security updates | Automatic PRs when updates are available |
| Annex I, Part II, No. 2 – Remediation without undue delay | Auto-Merge for patch updates |
| Annex I, Part II, No. 5 – Monitor third-party components | Continuous dependency monitoring |

### GitHub Security Advisories

| CRA Requirement | Coverage |
|-----------------|-----------|
| Annex I Part II (5) – Coordinated disclosure | Private advisory, CVE assignment |
| Art. 14(8) – User notification | Public advisory with recommended actions |
| Annex I, Part II, No. 4 – Disclosure of remediated CVEs | Publish security advisory |

### GitHub Actions (Automation Templates)

| Workflow | CRA Requirement | Function |
|----------|-----------------|----------|
| `automatic-release.yml` | Annex I Part II (2) | Automated release pipeline |
| `modules-security-scan.yml` | Annex I Part II (1) | Multi-Engine Security Scanning |
| `modules-license-compliance.yml` | Art. 13(5), Annex I Part II (1) | License check + SBOM |
| `docker-build.yml` | Annex I Part II (7) | Image build + signing |
| `docker-maintenance-dependabot.yml` | Annex I, Part II, No. 2 | Auto-Merge dependency updates |
| `modules-docker-base-image-monitor.yml` | Annex I, Part II, No. 5 | Base image update |
| `security-management.yml` | Art. 13(8) | SECURITY.md auto-generation |
| `teams-notifications.yml` | Art. 14 (supporting) | Incident communication |

## 8.1.3 Security Scanning

### Trivy (Aqua Security)

| CRA Requirement | Coverage |
|-----------------|-----------|
| Annex I Part II (1) | Container image vulnerability scanning |
| Annex I Part I (2)(a) | Detection of known exploitable vulnerabilities |
| Annex I Part II (1) | SBOM generation (CycloneDX, SPDX) |
| Annex I, Part II, No. 1 | Component detection for SBOM |
| Annex I, Part II, No. 3 | Regular security testing (CI/CD) |

### Grype (Anchore)

| CRA Requirement | Coverage |
|-----------------|-----------|
| Annex I Part II (1) | Vulnerability scanning (complementary to Trivy) |
| Annex I, Part II, No. 1 | CVE matching against SBOM |

### OSV-Scanner (Google)

| CRA Requirement | Coverage |
|-----------------|-----------|
| Annex I Part II (1) | OSV database-based vulnerability scanning |
| Annex I Part I (2)(a) | Detection of known vulnerabilities (aggregates NVD, GitHub, PyPI, npm, Go etc.) |
| Annex I, Part II, No. 2 | CVE matching against lockfiles and SBOMs |

### Snyk

| CRA Requirement | Coverage |
|-----------------|-----------|
| Annex I Part II (1) | Application security scanning |
| Annex I, Part II, No. 3 | Code-level vulnerability detection |

### Gitleaks + GitGuardian

| CRA Requirement | Coverage |
|-----------------|-----------|
| Art. 13(1) | Prevention of secret exposure |
| Annex I, Part I, No. 5 | Protection against unauthorised access (secrets) |

## 8.1.4 SBOM & Compliance

### Syft (Anchore)

| CRA Requirement | Coverage |
|-----------------|-----------|
| Annex I Part II (1) | SBOM generation (CycloneDX JSON) |
| Annex I, Part II, No. 1 | Component detection and documentation |
| Annex VII No. 1 | Product description (dependencies) |

### FOSSA / License Compliance

| CRA Requirement | Coverage |
|-----------------|-----------|
| Art. 13(5) | Due diligence for third-party components (licences) |
| Annex I, Part II, No. 1 | Licence inventory as part of the SBOM |

## 8.1.5 Signing, Attestation & Integrity

### Cosign (Sigstore)

| CRA Requirement | Coverage |
|-----------------|-----------|
| Annex I Part II (7) | Integrity protection of updates |
| Annex I, Part I, No. 3.2 | Integrity protection (data/artefacts) |
| Annex I, Part II, No. 6 | Secure provision of updates |

### GitHub Attestation (Sigstore via GitHub)

| CRA Requirement | Coverage |
|-----------------|-----------|
| Annex I Part II (7) | Cryptographic provenance of SBOM |
| Annex I, Part I, No. 3.2 | Verifiable build-time integrity |

::: tip Belt + Suspenders
Both Cosign (portable) and GitHub Attestation (native) are used simultaneously. Cosign works outside GitHub; Attestation is verifiable via `gh attestation verify`.
:::

## 8.1.6 CRA Compliance Workflows (this repository)

In addition to the automation templates, this repository provides dedicated CRA workflows that can be reused in every source code repository. See [8.2 Automation Workflows](/en/compliance-matrix/automation-workflows) for detailed usage.

### Composite Actions (CRA-specific)

| Action | CRA Requirement | Function |
|--------|-----------------|----------|
| `cra-sbom-generate` | Annex I Part II (1) | Generate CycloneDX SBOM (Trivy, auto-detect) |
| `cra-sbom-sign` | Annex I Part II (7) | Sign SBOM (Cosign, keyless OIDC) |
| `cra-vulnerability-scan` | Annex I Part II (1), Annex I Part I (2)(a) | Multi-engine vulnerability scan (Trivy + Grype + OSV-Scanner) |
| `cra-hub-report` | Art. 13 | Send compliance data to Software Security Hub API |
| `cra-compliance-report` | Annex VII | Generate JSON + Markdown compliance report with scoring |
| `cra-eu-doc` | Art. 28, Annex V | Generate machine-readable EU Declaration of Conformity (JSON) |
| `cra-render` | Annex V, Annex VII | Render JSON artifacts to PDF (EU DoC, Compliance Report) |

### Composite Actions (Generic, in automation-templates)

| Action | CRA Requirement | Function |
|--------|-----------------|----------|
| `vex-generate` | Annex I, Part II, No. 2 | Generate OpenVEX document from scan results + manual triage |
| `sbom-attest` | Annex I Part II (7) | Create GitHub-native SBOM attestation |

### Reusable Workflows

| Workflow | Type | CRA Requirement | Function |
|----------|-----|-----------------|----------|
| `cra-release.yml` | Repo-local | Annex I Part II (7), Annex I Part II (1), Annex VII | SBOM + signature + attestation + VEX + compliance report |
| `cra-scan.yml` | Repo-local | Annex I Part II (1), Annex I Part I (2)(a) | Scheduled CVE scan with issue creation |
| `cra-report.yml` | API reporting | Art. 13, Annex VII | All CRA data to CRA Compliance Hub |
| `cra-onboard.yml` | Repo-local | Art. 13, Art. 13(6) | One-click CRA enrollment for any repository |
| `cra-audit.yml` | Repo-local | Annex I, Annex VII | Weekly compliance audit with issue creation |
| `cra-incident.yml` | Repo-local | Art. 14 | Incident response trigger with ENISA deadline calculation |

### CLI Tool

| Tool | CRA Requirement | Function |
|------|-----------------|----------|
| [`cra-check`](/en/compliance-matrix/cra-check) | Annex VII | Local/remote compliance verification with scoring |

## 8.1.7 Planned Extensions

| Tool / Workflow | CRA Requirement | Status |
|----------------|-----------------|--------|
| **CodeQL** (SAST) | Annex I, Part II, No. 3 | 🔧 Optional |

## 8.1.8 Summary: CRA Coverage through Tooling

```
                         CRA Requirement
                    ┌─────────────────────────┐
                    │  Art. 13 (Manufacturer)   │
                    │  ├── (1) Security         │──→ Trivy, Gitleaks, Code Review
                    │  ├── (2) Risk             │──→ Manual + Template
                    │  ├── (4) 3rd Party        │──→ FOSSA, License Compliance
                    │  ├── (6) Vulnerabilities  │──→ CVE-Monitor, Dependabot
                    │  ├── (7) Updates          │──→ Dependabot, CI/CD
                    │  ├── (8) No CVEs          │──→ CVE-Monitor, Trivy
                    │  ├── (9) CVD              │──→ GitHub Advisories
                    │  ├── (12) Integrity       │──→ Cosign + Attestation
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
