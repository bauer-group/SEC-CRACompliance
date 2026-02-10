# 6.6 Annex VII – Guide

## 6.6.1 Overview

Annex VII of the CRA defines the complete content of the technical documentation that every manufacturer must create and retain for 10 years. This guide explains each requirement in detail and references the respective documentation location.

::: info LEGAL BASIS
**Art. 31 CRA:** The technical documentation shall be drawn up before the product is placed on the market and shall be kept up to date on a continuous basis.

**Annex VII CRA:** Content of the technical documentation.
:::

## 6.6.2 Requirement 1 – General Product Description

**Annex VII No. 1:** A general description of the product with digital elements, including:

| Element | Description | Documentation Location |
|---------|-------------|------------------------|
| Intended Use | Purpose, target audience, usage scenarios | [Product Description](/en/technical-documentation/product-description) |
| Versions | Affected software/firmware versions | Release Notes, SBOM |
| Hardware Requirements | If applicable: hardware requirements | Product Description |
| Basic Characteristics | Functional scope, core functions | Product Description |

**Implementation:** One document per product following the [Product Description Template](/en/technical-documentation/product-description).

---

## 6.6.3 Requirement 2 – Design and Development Description

**Annex VII No. 2:** Description of the design and development processes, including:

| Element | Description | Documentation Location |
|---------|-------------|------------------------|
| Security Architecture | Overview of security measures | [Security Architecture](/en/technical-documentation/security-architecture) |
| Data Processing | What data is processed, data flows | Security Architecture |
| Threat Model | Identified threats and countermeasures | Risk Assessment |
| Design Decisions | Security-relevant architectural decisions | Security Architecture |

---

## 6.6.4 Requirement 3 – Cybersecurity Risk Assessment

**Annex VII No. 3:** The cybersecurity risk assessment pursuant to Art. 10(2), including:

| Element | Description | Documentation Location |
|---------|-------------|------------------------|
| Methodology | Applied risk assessment method | [Risk Assessment Template](/en/templates/risk-assessment) |
| Identified Risks | List of cybersecurity risks | Risk Assessment |
| Evaluation | Likelihood x Impact | Risk Assessment |
| Measures | Risk mitigation measures | Risk Assessment |
| Residual Risks | Accepted residual risks with justification | Risk Assessment |

---

## 6.6.5 Requirement 4 – Vulnerability Handling

**Annex VII No. 4:** Description of vulnerability handling processes:

| Element | Description | Documentation Location |
|---------|-------------|------------------------|
| Monitoring | How vulnerabilities are identified | [CVE Monitoring](/en/vulnerability-management/cve-monitoring) |
| Assessment | How vulnerabilities are assessed | [Risk Assessment](/en/vulnerability-management/risk-assessment) |
| Remediation | How vulnerabilities are remediated | [Patch Management](/en/vulnerability-management/patch-management) |
| Disclosure | How vulnerabilities are disclosed | [Disclosure Policy](/en/incident-response/disclosure-policy) |
| SBOM | Machine-readable SBOM | [SBOM & Signing](/en/sbom-signing/) |

---

## 6.6.6 Requirement 5 – Applied Standards and Specifications

**Annex VII No. 5:** List of applied harmonised standards, Common Specifications or cybersecurity certification schemes:

| Standard | Scope | Status |
|----------|-------|--------|
| ISO/IEC 27001 | Information Security Management System | Reference |
| ISO/IEC 29147 | Vulnerability Disclosure | Applied |
| ISO/IEC 30111 | Vulnerability Handling | Applied |
| CycloneDX v1.6 | SBOM Format | Applied |
| Sigstore/Cosign | Artifact Signing | Applied |
| OWASP ASVS | Application Security Verification | Reference |
| IEC 62443 | Industrial Cybersecurity | If industrial products |

*Note: Harmonised standards specific to the CRA are under development. This list will be updated once they are published.*

::: tip HARMONISED STANDARDS
Once harmonised standards for the CRA are published, these will enable the presumption of conformity. The application of harmonised standards is particularly critical for [Class I with Module A](/en/conformity/self-assessment).
:::

---

## 6.6.7 Requirement 6 – Test Results

**Annex VII No. 6:** Results of the tests and examinations performed:

| Test Type | Description | Tooling |
|-----------|-------------|---------|
| Static Analysis (SAST) | Source code analysis for vulnerabilities | SonarQube, Semgrep |
| Dynamic Analysis (DAST) | Runtime testing for vulnerabilities | OWASP ZAP, Burp |
| Dependency Scanning | Verification of dependencies | Trivy, Grype, Snyk |
| Container Scanning | Verification of container images | Trivy |
| Secret Scanning | Search for secrets in code | Gitleaks, GitGuardian |
| Penetration Testing | Manual security testing | External (for Class I+) |
| Fuzzing | Robustness testing | AFL, libFuzzer |

**Retention:** Test results are archived as CI/CD artifacts and are accessible via the repository.

---

## 6.6.8 Requirement 7 – Conformity Assessment Results

**Annex VII No. 7:** Results of the conformity assessment:

| Procedure | Documentation | Documentation Location |
|-----------|---------------|------------------------|
| Module A | Self-assessment report | [Internal Control](/en/conformity/self-assessment) |
| Module B+C | EU type-examination certificate | [Module B+C](/en/conformity/module-bc) |
| Module H | QMS certificate | [Module H](/en/conformity/module-h) |
| EUCC | Cybersecurity certificate | [EUCC](/en/conformity/eucc) |

---

## 6.6.9 Requirement 8 – EU Declaration of Conformity

**Annex VII No. 8:** Copy of the EU Declaration of Conformity:

> [EU Declaration of Conformity](/en/conformity/eu-declaration)
> [Template](/en/templates/eu-declaration-of-conformity)

---

## 6.6.10 Requirement 9 – Support Period

**Annex VII No. 9:** Determination of the Support Period:

> [Support & Lifecycle](/en/technical-documentation/support-period)

---

## 6.6.11 Completeness Checklist

- [ ] No. 1: Product description created
- [ ] No. 2: Design and development processes documented
- [ ] No. 3: Cybersecurity risk assessment performed
- [ ] No. 4: Vulnerability handling documented
- [ ] No. 4: SBOM generated and archived
- [ ] No. 5: Applied Standards listed
- [ ] No. 6: Test Results documented and archived
- [ ] No. 7: Conformity Assessment Results documented
- [ ] No. 8: EU Declaration of Conformity created
- [ ] No. 9: Support Period determined
- [ ] All documents archived (10-year retention)
- [ ] All documents versioned (Git)
