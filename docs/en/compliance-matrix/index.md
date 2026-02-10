# Chapter 8: CRA Compliance Matrix

## Complete Mapping: CRA Article → Documentation → Tooling

This matrix maps each relevant CRA requirement to the corresponding documentation and implemented tooling. It serves as the central reference for audits and conformity assessments.

::: tip STATUS OVERVIEW

| Category | ✅ Implemented | ⚠️ Product-Specific | ❌ Open | Total |
|-----------|:----------------:|:--------------------:|:--------:|:------:|
| Art. 10 – Manufacturer Obligations | 8 | 4 | 0 | 12 |
| Art. 13 – Information Obligations | 3 | 1 | 0 | 4 |
| Art. 14 – Reporting Obligations | 1 | 3 | 0 | 4 |
| Art. 16 – Authorised Representative | 1 | 2 | 0 | 3 |
| Art. 28/29 – Conformity & CE | 0 | 2 | 0 | 2 |
| Annex I Part I – Security | 6 | 1 | 0 | 7 |
| Annex I Part II – Vulnerabilities | 8 | 0 | 0 | 8 |
| Annex II – User Information | 4 | 4 | 0 | 8 |
| Annex VII – Technical Documentation | 3 | 4 | 0 | 7 |
| **Total** | **34** | **21** | **0** | **55** |

:::

Detailed mapping: [8.1 Tooling Map](/en/compliance-matrix/tooling-map) (Tool → CRA Requirement)

## Art. 10 – Obligations of Manufacturers

| CRA Reference | Requirement | Documentation | Tooling | Status |
|-------------|-------------|---------------|---------|:------:|
| Art. 10(1) | Appropriate level of cybersecurity in design, development, production | [Security Architecture](/en/technical-documentation/security-architecture) | Security Scans (Trivy, Grype, Snyk), Code Review | ✅ |
| Art. 10(2) | Conduct cybersecurity risk assessment | [Risk Assessment](/en/vulnerability-management/risk-assessment) | – (manual process + template) | ⚠️ |
| Art. 10(3) | Include risk assessment in documentation | [Technical Documentation](/en/technical-documentation/) | Git-versioned | ⚠️ |
| Art. 10(4) | Due diligence for third-party components | [Supply Chain](/en/supply-chain/) | License Compliance, Dependency Scan | ✅ |
| Art. 10(5) | Conduct conformity assessment | [Conformity Assessment](/en/conformity/) | – (manual process + template) | ⚠️ |
| Art. 10(6) | Effectively identify vulnerabilities | [Vulnerability Management](/en/vulnerability-management/) | CVE-Monitor, Dependabot, Trivy | ✅ |
| Art. 10(7) | Provide security updates free of charge | [Patch Management](/en/vulnerability-management/patch-management) | Dependabot, Auto-Merge, Release Pipeline | ✅ |
| Art. 10(8) | No known exploitable vulnerabilities | [CVE-Monitoring](/en/vulnerability-management/cve-monitoring) | CVE-Monitor (daily), Trivy | ✅ |
| Art. 10(9) | Coordinated vulnerability disclosure | [Disclosure Policy](/en/incident-response/disclosure-policy) | SECURITY.md, GitHub Advisories | ✅ |
| Art. 10(10) | Point of contact for vulnerability reports | [Disclosure Policy](/en/incident-response/disclosure-policy) | SECURITY.md in each repository | ✅ |
| Art. 10(12) | Integrity of security updates | [SBOM & Signing](/en/sbom-signing/) | Cosign, SHA256 | ✅ |
| Art. 10(13) | Retain documentation for 10 years | [Technical Documentation](/en/technical-documentation/) | Git repository (10-year retention) | ✅ |
| Art. 10(16) | Define and publish support period | [Support & Lifecycle](/en/technical-documentation/support-period) | SECURITY.md, product page | ⚠️ |

## Art. 13 – Information Obligations

| CRA Reference | Requirement | Documentation | Tooling | Status |
|-------------|-------------|---------------|---------|:------:|
| Art. 13(6) | Publish CVD policy | [Disclosure Policy](/en/incident-response/disclosure-policy) | SECURITY.md | ✅ |
| Art. 13(8) | Contact details for vulnerability reports | [SECURITY.md](/en/SECURITY) | Repository SECURITY.md | ✅ |
| Art. 13(16) | Communicate support period | [Support & Lifecycle](/en/technical-documentation/support-period) | – | ⚠️ |
| Art. 13(23) | Produce SBOM (machine-readable) | [SBOM & Signing](/en/sbom-signing/) | Trivy/Syft → CycloneDX JSON | ✅ |

## Art. 14 – Reporting Obligations

| CRA Reference | Requirement | Documentation | Tooling | Status |
|-------------|-------------|---------------|---------|:------:|
| Art. 14(1) | Early warning for actively exploited vulnerability (24h) | [ENISA Reporting Process](/en/incident-response/enisa-reporting) | ENISA SRP (from 09/2026) | ⚠️ |
| Art. 14(2) | Vulnerability notification (72h) | [ENISA Reporting Process](/en/incident-response/enisa-reporting) | ENISA SRP | ⚠️ |
| Art. 14(3) | Final report (14 days) | [ENISA Reporting Process](/en/incident-response/enisa-reporting) | ENISA SRP | ⚠️ |
| Art. 14(8) | User notification | [Communication Plan](/en/incident-response/communication) | GitHub Advisories, E-Mail | ✅ |

## Art. 16 – Authorised Representative (EU Authorized Representative)

| CRA Reference | Requirement | Documentation | Tooling | Status |
|-------------|-------------|---------------|---------|:------:|
| Art. 16(1) | Appoint authorised representative by written mandate (non-EU manufacturers) | [Roles & Responsibilities](/en/overview/responsibilities) | – (contractual process) | ⚠️ |
| Art. 16(2) | Keep conformity documentation available for 10 years | [Roles & Responsibilities](/en/overview/responsibilities) | Git repository (10-year retention) | ✅ |
| Art. 16(2) | Cooperation with market surveillance authorities | [Roles & Responsibilities](/en/overview/responsibilities) | – | ⚠️ |

## Art. 28 – Declaration of Conformity & CE

| CRA Reference | Requirement | Documentation | Tooling | Status |
|-------------|-------------|---------------|---------|:------:|
| Art. 28, Annex V | Issue EU declaration of conformity | [EU DoC](/en/conformity/eu-declaration) | Template | ⚠️ |
| Art. 29 | Affix CE marking | [EU DoC](/en/conformity/eu-declaration) | – | ⚠️ |

## Annex I, Part I – Security Requirements

| No. | Requirement | Documentation | Tooling | Status |
|----|-------------|---------------|---------|:------:|
| 1 | Appropriate level of cybersecurity | [Security Architecture](/en/technical-documentation/security-architecture) | Multi-Engine Security Scanning | ✅ |
| 2 | No known exploitable vulnerabilities | [CVE-Monitoring](/en/vulnerability-management/cve-monitoring) | CVE-Monitor, Trivy, Dependabot | ✅ |
| 3.1 | Confidentiality protection (data) | [Security Architecture](/en/technical-documentation/security-architecture) | TLS, AES-256 | ✅ |
| 3.2 | Integrity protection (data) | [SBOM & Signing](/en/sbom-signing/) | Cosign, SHA256 | ✅ |
| 3.3 | Availability protection | [Security Architecture](/en/technical-documentation/security-architecture) | Product-specific | ⚠️ |
| 4 | Secure default configuration | [Security Architecture](/en/technical-documentation/security-architecture) | Security-by-Default | ✅ |
| 5 | Protection against unauthorised access | [Security Architecture](/en/technical-documentation/security-architecture) | Auth/Authz | ✅ |
| 6 | Minimal attack surface | [Security Architecture](/en/technical-documentation/security-architecture) | Alpine/Distroless, min. services | ✅ |

## Annex I, Part II – Vulnerability Handling

| No. | Requirement | Documentation | Tooling | Status |
|----|-------------|---------------|---------|:------:|
| 1 | Identify and document vulnerabilities (SBOM) | [SBOM & Signing](/en/sbom-signing/) | Trivy/Syft, CycloneDX | ✅ |
| 2 | Remediate vulnerabilities without undue delay | [Patch Management](/en/vulnerability-management/patch-management) | Dependabot, CI/CD | ✅ |
| 3 | Regular testing and reviews | [Security Architecture](/en/technical-documentation/security-architecture) | CI/CD Security Scans | ✅ |
| 4 | Disclosure of remediated vulnerabilities | [Disclosure Policy](/en/incident-response/disclosure-policy) | GitHub Security Advisories | ✅ |
| 5 | Coordinated vulnerability disclosure | [Disclosure Policy](/en/incident-response/disclosure-policy) | SECURITY.md, CVD process | ✅ |
| 6 | Provide security updates | [Update Mechanism](/en/technical-documentation/update-mechanism) | Release Pipeline, OTA | ✅ |
| 7 | Provision without undue delay | [Patch Management](/en/vulnerability-management/patch-management) | SLA-based (P0-P4) | ✅ |
| 8 | Designate point of contact | [SECURITY.md](/en/SECURITY) | SECURITY.md, CVD Policy | ✅ |

## Annex II – User Information

| No. | Requirement | Documentation | Status |
|----|-------------|---------------|:------:|
| 1 | Manufacturer name and contact | Product page, SECURITY.md | ✅ |
| 2 | Product identification | Release Notes, Repository | ✅ |
| 3 | Intended use | [Product Description](/en/technical-documentation/product-description) | ⚠️ |
| 4 | Security-relevant properties | [User Information Template](/en/templates/product-security-info) | ⚠️ |
| 5 | Support period | [Support & Lifecycle](/en/technical-documentation/support-period) | ⚠️ |
| 6 | Installation instructions | README, product documentation | ⚠️ |
| 7 | Contact for vulnerability reports | SECURITY.md | ✅ |
| 8 | Changelog of significant changes | Changelog, Release Notes | ✅ |

## Annex VII – Technical Documentation

| No. | Requirement | Documentation | Status |
|----|-------------|---------------|:------:|
| 1 | General product description | [Product Description](/en/technical-documentation/product-description) | ⚠️ |
| 2 | Security risk assessment | [Risk Assessment](/en/vulnerability-management/risk-assessment) | ⚠️ |
| 3 | Architecture and design | [Security Architecture](/en/technical-documentation/security-architecture) | ✅ |
| 4 | Vulnerability handling procedures | [Vulnerability Management](/en/vulnerability-management/) | ✅ |
| 5 | Applied standards | [Compliance Matrix](/en/compliance-matrix/) | ✅ |
| 6 | Conformity assessment | [Conformity Assessment](/en/conformity/) | ⚠️ |
| 7 | EU declaration of conformity | [EU DoC](/en/conformity/eu-declaration) | ⚠️ |

## Legend

| Symbol | Meaning |
|--------|-----------|
| ✅ | Implemented and documented |
| ⚠️ | Documentation available, product-specific implementation required |
| ❌ | Not yet implemented |
