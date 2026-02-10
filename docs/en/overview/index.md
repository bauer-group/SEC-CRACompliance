# Chapter 1: CRA Overview

## Document Control

| Field | Value |
|-------|-------|
| **Document Title** | CRA Compliance Handbook |
| **Document Identifier** | BG-CRA-HB-001 |
| **Version** | 1.0 |
| **Classification** | Public |
| **Scope** | All products with digital elements of BAUER GROUP |
| **Publisher** | BAUER GROUP – Information Security |
| **Created** | 2026-02-08 |
| **Approval** | Information Security Officer (ISO) |
| **Next Revision** | 2027-02-08 |

> **Note:** This is the public version of this document. Personal data (names, contact details) are not included in this edition and are only available in the internal version.

### Change History

| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-02-08 | BAUER GROUP | Initial version |

### Binding Nature

This handbook is **binding** for all employees of BAUER GROUP who are involved in the development, operation, distribution, or support of products with digital elements. Deviations from the processes described herein require written approval from the Security Lead and Management.

---

## Regulation (EU) 2024/2847 – Cyber Resilience Act

The **Cyber Resilience Act (CRA)** is the EU regulation on horizontal cybersecurity requirements for products with digital elements. It was published in the Official Journal of the European Union on 20 November 2024 (OJ L, 2024/2847) and entered into force on **10 December 2024**.

The CRA applies directly in all EU Member States and establishes binding obligations for manufacturers, importers, and distributors of products with digital elements.

### Legal Characteristics

| Characteristic | Detail |
|----------------|--------|
| **Legal Form** | EU Regulation (directly applicable) |
| **Publication** | OJ L, 2024/2847, 20.11.2024 |
| **Entry into Force** | 10.12.2024 |
| **Reporting obligations from** | **11.09.2026** (Art. 14) |
| **Full applicability from** | **11.12.2027** (all requirements) |
| **Penalties** | Up to EUR 15 million or 2.5% of global annual turnover (Art. 64) |

## Purpose and Objectives

The CRA pursues two core objectives:

1. **Security requirements for products (Annex I Part I)** – Products with digital elements may only be made available on the EU market if they fulfil the essential cybersecurity requirements. This includes security-by-design, confidentiality, integrity, availability, and minimisation of the attack surface.

2. **Vulnerability handling (Annex I Part II)** – Manufacturers must systematically identify, document, assess, remediate, and report vulnerabilities to users and authorities throughout the entire support period (at least 5 years, Art. 13(8)).

### Interplay with NIS2

The CRA complements the **NIS2 Directive** (Directive (EU) 2022/2555). While NIS2 governs the cybersecurity of operators of essential and important entities, the CRA addresses the security of the **products** used by those entities. The reporting obligations under the CRA (Art. 14) are modelled on the NIS2 reporting obligations (Art. 23 NIS2) and utilise the same ENISA reporting platform.

## Scope

Pursuant to Art. 2 CRA, this regulation applies to **products with digital elements** whose intended or reasonably foreseeable use includes a direct or indirect logical or physical data connection to a device or network.

For BAUER GROUP, this concerns:

- **Software** – Standalone applications, microservices, APIs, container images
- **Firmware** – Embedded systems (ESP32, STM32, Zephyr RTOS)
- **Libraries** – Publicly published NPM and NuGet packages
- **Hardware with Software** – IoT devices, industrial controllers
- **Remote Data Processing** – Cloud components that are an integral part of a product

Detailed product categories and exemptions: see [1.1 Scope & Products](./scope).

### Subpages of this Chapter

| Section | Topic |
|---------|-------|
| **1.1** | [Scope & Products](./scope) |
| **1.2** | [Roles & Responsibilities](./responsibilities) |
| **1.3** | [Deadlines & Timelines](./timeline) |
| **1.4** | [Importer Obligations (Art. 15)](./importer-obligations) |
| **1.5** | [Authorised Representative (Art. 16)](./authorised-representative) |
| **1.6** | [Distributor Obligations (Art. 17)](./distributor-obligations) |
| **1.7** | [Open-Source Steward (Art. 18–19)](./open-source-steward) |
| **1.8** | [Substantial Modifications (Art. 20)](./substantial-modifications) |
| **1.9** | [Non-Conformity (Art. 22–23)](./non-conformity) |
| **1.10** | [Market Surveillance (Art. 52–58)](./market-surveillance) |
| **1.11** | [Penalties (Art. 64)](./penalties) |
| **1.12** | [Harmonised Standards (Art. 5–6)](./harmonised-standards) |
| **1.13** | [General Product Safety (Art. 9)](./product-safety) |
| **1.14** | [NIS2 Integration](./nis2-integration) |

## Structure of this Handbook

This handbook is structured according to the core processes of the CRA. Each chapter addresses a distinct compliance area with legal basis, process description, and operational implementation:

| Chapter | Topic | CRA Reference |
|---------|-------|---------------|
| **Ch. 1** | Overview, Scope, Roles, Deadlines | Art. 2, 3, 10, 13, 14, 16 |
| **Ch. 2** | [SBOM & Signing](/en/sbom-signing/) | Art. 13(23), Art. 10(12), Annex I Part I No. 3, Part II No. 1 |
| **Ch. 3** | [Vulnerability Management](/en/vulnerability-management/) | Art. 10(6), Annex I Part II No. 2-8 |
| **Ch. 4** | [Incident Response & Disclosure](/en/incident-response/) | Art. 13(6), Art. 14 |
| **Ch. 5** | [Supply Chain Security](/en/supply-chain/) | Art. 10(4), Annex I Part II No. 1 |
| **Ch. 6** | [Technical Documentation](/en/technical-documentation/) | Art. 31, Annex VII |
| **Ch. 7** | [Conformity Assessment](/en/conformity/) | Art. 24-28, Annex V, VIII |
| **Ch. 8** | [Compliance Matrix](/en/compliance-matrix/) | Complete requirements mapping |
| **Appendix** | [Templates](/en/templates/) | ENISA notifications, EU DoC, Reports |

## Toolchain

BAUER GROUP relies on a fully automated toolchain to ensure CRA conformity without additional manual effort:

| Area | Tool | Function | Status |
|------|------|----------|--------|
| SBOM Generation | Trivy / Syft | Software Bill of Materials (CycloneDX JSON) | Active |
| Vulnerability Scanning | Trivy, Grype | CVE detection against NVD + GitHub Advisory DB | Active |
| Secret Scanning | Gitleaks, GitGuardian | Detection of exposed secrets | Active |
| Dependency Monitoring | Dependabot, Renovate | Automated dependency updates | Active |
| License Compliance | FOSSA / Syft | License evaluation against whitelist/blacklist | Active |
| Artefact Signing | Cosign (Sigstore) | Integrity assurance for container images | Active |
| SBOM Signing | Cosign (Blob-Signing) | Integrity assurance for SBOMs | Active |
| Base Image Monitoring | Custom Workflow | Docker base image vulnerability monitoring | Active |
| CVE Monitor | `cra-scan.yml` | Scheduled vulnerability scan with issue creation | Active |
| CRA Release | `cra-release.yml` | SBOM + signature + scan as release assets | Active |
| Software Security Hub Report | `cra-report.yml` | Compliance data to CRA Compliance Hub | Active |
| CI/CD | GitHub Actions | Automation of all compliance processes | Active |
| Documentation | VitePress + GitHub Pages | This compliance handbook | Active |

## Regulatory References

| Regulation | Reference | Relevance |
|------------|-----------|-----------|
| **Cyber Resilience Act** | Regulation (EU) 2024/2847 | Primary legal basis of this handbook |
| **NIS2 Directive** | Directive (EU) 2022/2555 | Supplementary reporting obligations for operators |
| **Delegated Acts** | Art. 7, 8, 14(9) CRA | Technical specifications (expected 2026/2027) |
| **ENISA Single Reporting Platform** | Art. 14 CRA | Central reporting platform for vulnerabilities |
| **ISO/IEC 29147:2018** | Vulnerability Disclosure | Reference standard for Coordinated Vulnerability Disclosure |
| **ISO/IEC 30111:2019** | Vulnerability Handling | Reference standard for vulnerability handling |
| **CycloneDX v1.5+** | OWASP Standard | SBOM format |
| **NIST SP 800-161r1** | C-SCRM | Supply chain risk management best practice |
| **IEC 62443** | Industrial Cybersecurity | Reference for industrial control systems |

## Terms and Definitions

| Term | Definition | CRA Reference |
|------|-----------|---------------|
| **Product with digital elements** | Software or hardware product and its remote data processing solutions, including software or hardware components placed on the market separately | Art. 3(1) |
| **Manufacturer** | Natural or legal person who develops or has developed a product and markets it under their own name or trademark | Art. 3(13) |
| **Software Bill of Materials (SBOM)** | Formal, machine-readable record of the components contained in a product and their dependencies | Art. 3(39) |
| **Actively exploited vulnerability** | Vulnerability for which there is reliable evidence that it has been exploited by a malicious actor in a system without the permission of the owner | Art. 3(42) |
| **Severe incident** | Incident that has a significant impact on the security of a product, including compromise of supply chain integrity | Art. 3(43) |
| **Support period** | Period during which the manufacturer is obligated to ensure vulnerability handling, at least 5 years | Art. 13(8) |
| **Conformity assessment** | Procedure for verifying whether the essential requirements have been met | Art. 3(30) |
| **CE marking** | Marking by which the manufacturer declares that the product complies with the applicable EU requirements | Art. 29 |
| **Authorised representative** | Natural or legal person established in the EU who has been authorised in writing by the manufacturer to act on their behalf for certain tasks | Art. 3(15), Art. 16 |
