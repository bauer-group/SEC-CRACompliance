# 7.2 Internal Control (Module A)

## 7.2.1 Procedure

The Internal Control pursuant to Annex VIII, Module A, CRA is the simplest Conformity Assessment procedure. The manufacturer assesses independently whether its product meets the essential requirements.

::: info APPLICABILITY
Module A is applicable for:

- **Standard / default products** (whose core functionality matches no category in Annex III or IV) — always
- **Class I** — only where the conditions in 7.2.2 are met
- **Class I and Class II products qualifying as free and open-source software** placed on the market — under Art. 32(5) they may follow the default-category procedures

For **Class II** and **Critical** products that are not FOSS, Module A is **not** sufficient: third-party involvement is mandatory, whether via [Module B+C](/en/conformity/module-bc), [Module H](/en/conformity/module-h) or a European cybersecurity certification scheme at assurance level at least *substantial*.
:::

::: tip A MORE STRINGENT ROUTE IS ALWAYS AVAILABLE
A manufacturer may always choose to apply a more stringent conformity assessment procedure than the one required (Art. 32(1)).
:::

## 7.2.2 When Class I Products May Use Internal Control

An important product of class I requires third-party conformity assessment **only if** the manufacturer has not applied — or has applied only in part — relevant harmonised standards whose references have been published in the Official Journal of the European Union, common specifications, or European cybersecurity certification schemes at assurance level at least *substantial*.

::: warning THE TWO CUMULATIVE CONDITIONS
For a class I product to be eligible for internal control:

1. **All the applicable requirements** of a relevant harmonised standard must be applied — not merely some of them; **and**
2. The **standard's scope must cover at least all the cybersecurity risks associated with the product's [core functionality](/en/conformity/product-classification)**.
:::

### The gap between the standard and the product

A product's scope is frequently **broader** than the scope foreseen by the relevant harmonised standard, and those additional functions may present different or additional cybersecurity risks.

The manufacturer is **always** required to carry out a risk assessment under Art. 13(2), and must consequently check whether implementing the harmonised standard covers **all** risks associated with the product. Where it does not, the manufacturer must ensure by other means that the product complies with the essential requirements — and must **document which additional measures treat those residual risks** as part of its conformity assessment activities.

::: info THIS DOES NOT COST YOU MODULE A
Where the harmonised standard covers the risks associated with the **core functionality**, the manufacturer may use the internal control procedure for the product **as a whole**, including the additional functions — provided the additional risks are treated and documented.

> **Example:** Antivirus software has the core functionality of software that searches for, removes or quarantines malicious software (Annex I, point 4, to Implementing Regulation (EU) 2025/2392). It also includes a disk-cleaning function and an anti-tracking function. The manufacturer performs a risk assessment covering the entire product, applies a harmonised standard covering the core functionality's risks, and adds measures for the additional functions. **Module A may be used for the whole product.**
:::

### Integrated important or critical components

The same applies where the product integrates a function that is itself that of another important or critical product. It is the **core functionality of the product as a whole** — not the functionality of integrated components taken in isolation — that determines the category and hence the regime.

> **Example:** A hardware product has the core functionality of a router (Annex I, point 12, to Implementing Regulation (EU) 2025/2392) and additionally integrates a firewall component. The product as a whole is subject to the class I regime. The manufacturer applies a harmonised standard covering the router's core-functionality risks, and may apply the harmonised standard for firewalls to cover the firewall risks. **Module A remains available.**

::: danger MODULE A ELIGIBILITY ≠ FULL PRESUMPTION OF CONFORMITY
Being permitted to use internal control is **not** the same as benefiting from the presumption of conformity. The presumption extends only to the risks the standard actually covers; the additional functionalities in the examples above may fall outside it. See [1.12 Harmonised Standards](/en/overview/harmonised-standards).
:::

## 7.2.3 Internal Control Process

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

## 7.2.4 Checklist: Module A -- Internal Control

- [ ] Core functionality determined and documented (→ [7.1.2](/en/conformity/product-classification))
- [ ] Product Classification completed (Standard/default, or Class I meeting both conditions in 7.2.2, or FOSS under Art. 32(5))
- [ ] Coverage gap between harmonised standard and product scope assessed and additional measures documented
- [ ] Technical documentation complete (Annex VII)
- [ ] Cybersecurity Risk Assessment performed
- [ ] Annex I Part I -- all requirements reviewed and documented
- [ ] Annex I Part II -- all requirements reviewed and documented
- [ ] SBOM generated and archived
- [ ] Vulnerability handling process established
- [ ] EU Declaration of Conformity prepared and signed
- [ ] CE marking affixed
- [ ] Documentation archived (10-year retention)

> Source and legal status of the interpretations in section 7.2.2: [Commission Guidance on the CRA](/en/clarifications/commission-guidance).
