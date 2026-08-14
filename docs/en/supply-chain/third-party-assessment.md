# 5.3 Third-Party Assessment

## 5.3.1 Assessment of Third-Party Components

Pursuant to Art. 13(5) CRA, the manufacturer must exercise due diligence when integrating third-party components. This page describes the assessment process.

### Two distinct obligations, one objective

The CRA establishes two **distinct but complementary** obligations. Confusing them is a common source of gaps.

| | Cybersecurity risk assessment (Art. 13(2)) | Due diligence (Art. 13(5)) |
|---|---|---|
| **Object** | The product with digital elements itself, including risks originating **outside** it — external networks, environmental factors, external infrastructure | Elements that **form part of** the product, in particular integrated software or hardware components provided by a third party |
| **Question** | What can affect our product, and how do we mitigate it **in the product**? | Do these components meet what our product needs from them, so that they do not undermine its compliance? |
| **Outcome** | Product-level security measures implementing Annex I Part I | Verified evidence that each component satisfies the identified requirements |

::: info HOW DUE DILIGENCE IS ACTUALLY DONE
Due diligence is discharged by **determining what the product requires from its components** in order to meet its cybersecurity objectives, and then **verifying, in a risk-based manner, that those components are in line with the product's needs** (recital 34).

In alignment with the risk assessment, the manufacturer identifies the requirements the integrated component must satisfy. Where the product relies on **cryptographic functions, update mechanisms or secure communications** provided by a component, the manufacturer must identify those needs and verify that the component satisfies them.
:::

### Acceptable evidence

| Evidence | Notes |
|----------|-------|
| Technical specifications from the component manufacturer | Baseline |
| Security documentation from the component manufacturer | Baseline |
| Relevant conformity or assurance documentation | E.g. a component manufacturer's own CRA conformity evidence |
| Own tests | Where appropriate, to verify the component adequately performs the relevant functions |

::: tip DUE DILIGENCE UNDERPINS YOUR OWN CONFORMITY
Due diligence is a **separate legal obligation**, but it also supports and underpins the manufacturer's ability to demonstrate compliance with the essential requirements for the product **as a whole**.

Where the manufacturer develops a functionality itself, it must **directly implement** the essential requirements. Where it integrates a component developed by others, it must ensure **through due diligence** that the component can be used in a way that enables the product as a whole to comply. The objective is identical in both cases.
:::

::: warning INTEGRATED ≠ SELF-DEVELOPED
Components that are physically or logically integrated into the product but sourced from a third party must be considered in the risk assessment. For compliance purposes, however, they are treated as **externally supplied components whose properties are verified through due diligence upon integration** — the manufacturer may not have redesigned or redeveloped them.
:::

## 5.3.2 Assessment Framework

### Automated Checks (for every dependency)

These checks are performed automatically in the CI/CD pipeline:

| Check | Tool | Blocks Build |
|-------|------|:---:|
| Known CVEs (CRITICAL) | Trivy / Grype | ✅ |
| Known CVEs (HIGH) | Trivy / Grype | ✅ |
| Prohibited Licenses | License Compliance | ✅ |
| Exposed Secrets | Gitleaks / GitGuardian | ✅ |

### Manual Review (for new critical dependencies)

When introducing new dependencies in security-critical areas, an additional manual assessment is conducted:

| Criterion | Assessment | Weight |
|-----------|-----------|--------|
| **Maintainer Reputation** | Verified account, known organisation | High |
| **Project Activity** | Regular commits, active issue resolution | High |
| **Security Response** | Response time to reported vulnerabilities | High |
| **Code Quality** | Tests, CI/CD, code reviews | Medium |
| **Dependency Depth** | Transitive dependencies (fewer = better) | Medium |
| **Alternatives** | Are there more secure alternatives? | Medium |
| **Adoption** | Download numbers, user base | Low |

### Rating Scale

| Rating | Meaning | Action |
|--------|---------|--------|
| **A – Trustworthy** | All criteria met, actively maintained | Approved for use |
| **B – Acceptable** | Minor limitations, overall trustworthy | Use with monitoring |
| **C – At Risk** | Significant limitations | Use only with justification + review |
| **D – Not Acceptable** | Critical limitations | Use prohibited |

## 5.3.3 Special Case: Vendor SDKs (Embedded)

For firmware projects, vendor SDKs (ESP-IDF, STM32 HAL, Zephyr) are assessed separately:

| SDK | Rating | Rationale |
|-----|--------|-----------|
| ESP-IDF (Espressif) | A | Official SDK, actively maintained, SBOM available |
| STM32 HAL (STMicroelectronics) | A | Official SDK, industry-grade |
| Zephyr RTOS | A | Linux Foundation project, Security WG active |
| PlatformIO | B | Community project, widely adopted |

## 5.3.4 Continuous Monitoring

All integrated third-party components are continuously monitored after integration:

1. **Dependabot** – Weekly checks for new versions and CVEs
2. **CVE Monitor** – Daily SBOM scan against current CVE databases
3. **License Compliance** – On every build
4. **Base Image Monitor** – Weekly checks for new base image versions

## 5.3.5 Third-Party Remote Services and Cloud Providers

Where the product relies on a remote solution that is **not** a remote data processing solution — because it was not designed and developed by or for BAUER GROUP — that solution is treated **like an integrated component**: its integration risks are assessed, mitigated at product level, and an equivalent due diligence obligation is exercised, proportionate to the risk the remote solution poses. See [1.15 Remote Data Processing](/en/overview/remote-data-processing) for the determination.

### Reusable assurance artefacts

The following evidence may be reused in support of the conformity assessment and the fulfilment of due diligence obligations towards third-party remote services:

| Artefact | Basis |
|----------|-------|
| Evidence of fulfilment of obligations under Commission Implementing Regulation (EU) 2024/2690 | NIS2 implementing act |
| Evidence of fulfilment of obligations under Regulation (EU) 2022/2554 | DORA |
| Statement of conformity or certificate under a European cybersecurity certification scheme | Regulation (EU) 2019/881 (Cybersecurity Act) |
| Evidence of conformity with ISO/IEC 27017:2015 or ISO/IEC 27001:2022 | International standards |

### Contractual measures

Manufacturers must implement the most appropriate security measures based on their risk assessment, supported where relevant by the provider's **shared responsibility model**. Mitigation includes both product-level security controls and verification of the security measures the provider itself offers.

::: tip EMBED SECURITY GUARANTEES IN THE SLA
A practical tool for mitigating these risks is to embed security guarantees in the **service level agreements** with third-party providers — including assurances that the provider **adequately handles vulnerabilities**.
:::

### When the provider changes something

::: warning A PROVIDER CHANGE IS NOT A SUBSTANTIAL MODIFICATION — BUT IT IS A TRIGGER
A major change in a solution provided by a third-party remote service provider does **not** qualify as a [substantial modification](/en/overview/substantial-modifications) of the product, because those elements are not under the manufacturer's responsibility.

It does, however, oblige the manufacturer to act:

1. As part of due diligence, **ensure providers keep BAUER GROUP adequately informed** about changes they implement.
2. On that basis, **revise the risk assessment**.
3. Ask whether the provider still offers **sufficient cybersecurity guarantees**, and whether the **product-level security controls remain adequate**.
4. Where they do not, **modify the controls or change provider**.
:::

## 5.3.6 Documentation

For the technical documentation (Annex VII CRA), a list of all third-party components is maintained:

- The **SBOM** serves as the machine-readable inventory
- The **component requirements register** records, per component, what the product needs from it (cryptography, update mechanism, secure communication, …) and the evidence verifying it — this is the auditable form of the Art. 13(5) obligation
- Manual assessments are stored in the product documentation folder
- Assurance artefacts obtained from third-party remote service providers are archived with the product file
- License compliance reports are archived as build artefacts

> Source and legal status of the interpretations in sections 5.3.1 and 5.3.5: [Commission Guidance on the CRA](/en/clarifications/commission-guidance).
