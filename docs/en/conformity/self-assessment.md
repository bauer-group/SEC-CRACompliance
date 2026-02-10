# 8.1 Internal Control (Module A)

## Procedure

The Internal Control pursuant to Annex VIII, Module A, CRA is the simplest Conformity Assessment procedure. The manufacturer assesses independently whether its product meets the essential requirements.

::: info APPLICABILITY
Module A is applicable for:

- **Standard products** (not listed in Annex III or IV)
- **Class I** -- only where harmonised standards are applied in full

For **Class II** and **Critical**, Module A is **not** sufficient.
:::

## Internal Control Process

### 1. Prepare Technical Documentation

In accordance with Annex VII CRA, complete technical documentation must be available:

- [ ] Product description ([Template](/en/technical-documentation/product-description))
- [ ] Security architecture ([Reference](/en/technical-documentation/security-architecture))
- [ ] Cybersecurity Risk Assessment ([Template](/en/templates/risk-assessment))
- [ ] SBOM (machine-readable, CycloneDX)
- [ ] Description of vulnerability handling
- [ ] Applied standards and norms
- [ ] Test results

### 2. Requirements Review (Annex I)

Review each requirement from Annex I and document conformity:

**Part I -- Security Requirements:**

| No. | Requirement | Compliant | Evidence |
|-----|-------------|:---------:|----------|
| 1 | Appropriate level of cybersecurity | ☐ | [Reference to documentation] |
| 2 | No known exploitable vulnerabilities | ☐ | CVE Monitor + Trivy Scan |
| 3.1 | Protection of confidentiality | ☐ | [Encryption, access control] |
| 3.2 | Protection of integrity | ☐ | [Cosign, checksums] |
| 3.3 | Protection of availability | ☐ | [Resilience measures] |
| 4 | Secure default configuration | ☐ | [Security-by-Default] |
| 5 | Protection against unauthorised access | ☐ | [Authentication, authorisation] |
| 6 | Minimisation of the attack surface | ☐ | [Minimal services, ports] |
| 7 | Confidentiality of stored data | ☐ | [Encryption] |
| 8 | Integrity of stored data | ☐ | [Integrity checks] |
| 9 | Data minimisation | ☐ | [Only necessary data] |
| 10 | Availability of essential functions | ☐ | [Resilience] |
| 11 | Minimisation of adverse impact | ☐ | [Logging, monitoring] |
| 12 | Security-relevant information | ☐ | [Logging, audit trail] |
| 13 | Secure update capability | ☐ | [Update mechanism] |

**Part II -- Vulnerability Handling:**

| No. | Requirement | Compliant | Evidence |
|-----|-------------|:---------:|----------|
| 1 | Identify and document vulnerabilities (SBOM) | ☐ | SBOM Lifecycle |
| 2 | Remediate vulnerabilities without delay | ☐ | Patch Management |
| 3 | Regular testing and reviews | ☐ | CI/CD Security Scans |
| 4 | Public disclosure of remediated vulnerabilities | ☐ | Security Advisories |
| 5 | Coordinated vulnerability disclosure | ☐ | CVD Policy |
| 6 | Provide security updates | ☐ | Update mechanism |
| 7 | Timely provision of updates | ☐ | Patch Management SLAs |
| 8 | Point of contact for vulnerability reports | ☐ | SECURITY.md |

### 3. Issue the EU Declaration of Conformity

Following a successful review:

- Prepare the EU Declaration of Conformity in accordance with Annex V ([Template](/en/templates/eu-declaration-of-conformity))
- Sign by an authorised person
- Archive in the repository

### 4. CE Marking

- Affix the CE marking on the product or its packaging
- For software: Display in the documentation and, where applicable, in the UI
- Must be visible, legible, and indelible

### 5. Retain Documentation

- Technical documentation: **10 years** after placing on the market
- EU Declaration of Conformity: **10 years** after placing on the market
- Storage location: This repository (Git-versioned)

## Checklist: Module A -- Internal Control

- [ ] Product Classification completed (Standard or Class I with harmonised standards)
- [ ] Technical documentation complete (Annex VII)
- [ ] Cybersecurity Risk Assessment performed
- [ ] Annex I Part I -- all requirements reviewed and documented
- [ ] Annex I Part II -- all requirements reviewed and documented
- [ ] SBOM generated and archived
- [ ] Vulnerability handling process established
- [ ] EU Declaration of Conformity prepared and signed
- [ ] CE marking affixed
- [ ] Documentation archived (10-year retention)
