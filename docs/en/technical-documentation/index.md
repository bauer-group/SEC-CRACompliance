# Chapter 7: Technical Documentation

## 7.1 Overview

The Technical Documentation pursuant to Annex VII CRA constitutes the central evidence documentation for the conformity of a product with digital elements. It must be prepared prior to placing on the market and retained for at least 10 years.

::: info LEGAL BASIS
**Art. 31 CRA:** *"The technical documentation shall be drawn up before the product with digital elements is placed on the market and shall be updated continuously during the expected product lifetime or during a period of five years after the placing on the market, whichever is shorter."*

**Annex VII CRA** defines the minimum content of the Technical Documentation.
:::

## Chapter Structure

| Section | Topic | Annex VII Reference |
|---------|-------|---------------------|
| **7.1** | [Product Description (Template)](/en/technical-documentation/product-description) | No. 1: General description |
| **7.2** | [Security Architecture](/en/technical-documentation/security-architecture) | No. 3: Architecture and design |
| **7.3** | [Update Mechanism](/en/technical-documentation/update-mechanism) | No. 4: Update provision |
| **7.4** | [Support & Lifecycle Policy](/en/technical-documentation/support-period) | Art. 13(8), Annex II No. 5 |
| **7.5** | [Security Requirements (Annex I)](/en/technical-documentation/security-requirements) | Annex I Part I: 13 essential requirements |
| **7.6** | [Annex VII – Guide](/en/technical-documentation/annex-vii-guide) | Annex VII: Complete documentation guide |

## Additional Mandatory Content (in Cross-Cutting Chapters)

| Annex VII Requirement | Documentation Location | Chapter |
|-----------------------|------------------------|---------|
| SBOM (machine-readable) | [SBOM & Signing](/en/sbom-signing/) | Ch. 2 |
| Cybersecurity risk assessment | [Risk Assessment](/en/vulnerability-management/risk-assessment) | Ch. 3 |
| Vulnerability handling | [Vulnerability Management](/en/vulnerability-management/) | Ch. 3 |
| Coordinated disclosure | [Disclosure Policy](/en/incident-response/disclosure-policy) | Ch. 5 |
| Conformity assessment results | [Conformity Assessment](/en/conformity/) | Ch. 8 |
| EU Declaration of Conformity | [EU DoC](/en/conformity/eu-declaration) | Ch. 8 |
| User information (Annex II) | [User Information](/en/templates/product-security-info) | Annex |

## Retention Obligation

**Art. 10(13) CRA:** The Technical Documentation shall be retained for **10 years** after the product is placed on the market or for the duration of the Support Period — whichever period is longer.

| Documentation Type | Storage Location | Retention Period |
|--------------------|------------------|------------------|
| Technical Documentation | This repository (Git) | 10 years |
| SBOM per version | Release assets + sbom/ | 10 years |
| Declaration of Conformity | This repository | 10 years |
| Risk assessments | This repository | 10 years |
| Test results | GitHub Actions Artifacts / Archive | 10 years |

## Product-Specific Documentation

::: warning ACTION REQUIRED
For each CRA-relevant product, an individual Technical Documentation must be prepared. The templates provided in this chapter (in particular 7.1 Product Description) serve as a template.

Product-specific documentation is maintained in separate directories under `docs/products/<productname>/`.
:::
