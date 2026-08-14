# 1.12 Harmonised Standards (Art. 5–6)

## 1.12.1 Overview

Art. 5 and 6 CRA govern the free movement of products with digital elements within the EU single market and the role of harmonised standards in establishing a presumption of conformity. For BAUER GROUP, these provisions are pivotal as they determine the conditions under which products may be made available on the EU market and which conformity assessment procedure applies.

::: info LEGAL BASIS
**Art. 5 CRA:** Free movement of goods -- Products with digital elements that meet the CRA requirements shall not be prohibited or restricted from being made available on the market by national provisions.

**Art. 6 CRA:** Harmonised standards -- Products conforming to harmonised standards (or parts thereof) whose references have been published in the Official Journal of the EU (OJEU) are presumed to comply with the corresponding essential requirements of Annex I.
:::

## 1.12.2 Art. 5 -- Free Movement of Products

### Principle

Products with digital elements that comply with the requirements of the CRA shall be made available on the EU market. Member States shall **not prohibit, restrict, or impede** the making available of such products.

### Prohibition of Additional National Requirements

No Member State may impose additional national cybersecurity requirements for making products with digital elements available on the market. The CRA requirements apply uniformly across the EU.

### Exception: Trade Fairs and Exhibitions

Products may be presented at trade fairs, exhibitions, and demonstrations **without full CRA compliance**, provided that:

- a **visible notice** is displayed indicating that the product does not yet conform to the CRA requirements
- the product is **not actually made available on the market** at the event
- appropriate safety measures are taken

::: tip PRACTICAL NOTE
When BAUER GROUP exhibits at trade fairs, prototypes and pre-production products must carry a corresponding notice, e.g.: *"This product does not yet meet the requirements of Regulation (EU) 2024/2847 (Cyber Resilience Act) and is not intended to be made available on the market."*
:::

## 1.12.3 Art. 6 -- Harmonised Standards & Presumption of Conformity

### Presumption of Conformity Mechanism

| Element | Description |
|---------|-------------|
| **Basis** | Harmonised standards whose references have been published in the OJEU |
| **Effect** | Presumption of conformity with the covered essential requirements of Annex I |
| **Scope** | Full presumption when applied in full; partial presumption when applied in part |
| **Standardisation organisations** | CEN, CENELEC, ETSI (mandated by the EU Commission) |
| **Legal consequence** | Reversal of the burden of proof -- the authority would need to demonstrate non-conformity |

### Development Status of Harmonised Standards

<HarmonisedStandardsStatus />

### The presumption covers only the risks the standard covers

::: danger PARTIAL COVERAGE IS THE NORMAL CASE
Art. 27(1) CRA grants a presumption of conformity to products and processes that conform to harmonised standards **"or parts thereof"** — and only for **the essential requirements covered by those standards or parts thereof**.

A product's scope is usually broader than the scope of any single harmonised standard. Where the additional functionalities present cybersecurity risks the standard does not address, the product **does not benefit from the presumption of conformity for those functionalities** — even where the manufacturer is entitled to use [Module A](/en/conformity/self-assessment) for the product as a whole.
:::

| Situation | Presumption of conformity |
|-----------|---------------------------|
| The standard addresses all risks associated with the product's core functionality, and there are no additional functionalities presenting cybersecurity risks | **Full** — the product benefits from the presumption |
| The standard addresses the core functionality's risks; the product also has ancillary functions whose risks the standard does not cover | **Partial** — presumption for the core functionality only; the ancillary risks must be addressed and documented by other means |
| The standard is later updated to also cover one of those ancillary functions | Presumption extends to the core functionality **and** that ancillary function — but still not to the others |

> **Example:** Antivirus software whose core functionality is covered by a harmonised standard, plus a disk-cleaning function and an anti-tracking function that the standard does not cover. Module A may be used for the whole product, but the presumption of conformity applies only to the core functionality's risks. If the standard is later extended to cover disk cleaning, the presumption grows to include it — anti-tracking remains outside.

::: warning THE STANDARD DOES NOT RELIEVE YOU OF THE RISK ASSESSMENT
As the Blue Guide states, in risk-related harmonisation legislation manufacturers **always** — even when using harmonised standards published in the OJEU — remain fully responsible for assessing **all** the risks of their product in order to determine which essential requirements are relevant. Only after that assessment may they choose to apply the technical specifications given in those standards as risk-reduction measures.
:::

The same rules apply to **common specifications** adopted under Art. 27(5) and to **European cybersecurity certification schemes** under Art. 27(8), where specified by the Commission via delegated acts pursuant to Art. 27(9).

### Common Specifications (Fallback)

Where harmonised standards do not exist or cover the essential requirements only incompletely, the EU Commission may adopt **common specifications** via implementing acts. These provide the same presumption of conformity, within the same limits of coverage.

### Significance for Conformity Assessment

The availability of harmonised standards has a **direct impact** on the applicable conformity assessment procedure:

| Product class | With harmonised standards | Without harmonised standards |
|---------------|---------------------------|------------------------------|
| **Standard / default** | Module A (self-assessment) | Module A (self-assessment) |
| **Class I** | Module A (self-assessment) -- only where **both** conditions below are met | Module B+C (EU type examination) required |
| **Class II** | Module B+C or Module H | Module B+C or Module H |
| **Critical** | Module B+C or Module H under Art. 32(3); EUCC only once triggered by delegated act under Art. 8(1) | Module B+C or Module H |
| **Class I / II qualifying as FOSS** | Default-category procedures under Art. 32(5) | Default-category procedures under Art. 32(5) |

::: warning ACTION REQUIRED FOR CLASS I PRODUCTS
For Class I products manufactured by BAUER GROUP (e.g. microcontrollers with security-relevant functions), the availability of harmonised standards is decisive. Module A is available **only where both** of the following hold:

1. **all applicable requirements** of a relevant harmonised standard are applied — not merely some; and
2. the **standard's scope covers at least all cybersecurity risks associated with the product's [core functionality](/en/conformity/product-classification)**.

Otherwise the more demanding [Module B+C](/en/conformity/module-bc) procedure is required. See [7.2 Internal Control](/en/conformity/self-assessment).
:::

## 1.12.4 Practical Implications for BAUER GROUP

### Monitoring Process for Harmonised Standards

BAUER GROUP establishes the following monitoring process:

1. **OJEU monitoring** -- Regular review of the Official Journal of the EU for publication of references to harmonised CRA standards
2. **CEN/CENELEC/ETSI tracking** -- Following draft standards and public consultations
3. **Applicability assessment** -- Evaluating which published standards are relevant to own products
4. **Implementation planning** -- Planning the adoption of relevant standards in own processes and products

### Transition Planning When New Standards Are Published

| Phase | Action | Responsible |
|-------|--------|-------------|
| Publication | Assess relevance for BAUER GROUP products | CISO / Product Owner |
| Analysis (1-3 months) | Gap analysis against existing product documentation | Security Lead |
| Implementation (3-6 months) | Adapt processes, documentation, and products | Development teams |
| Validation | Verify full compliance with the standard | CISO |
| Documentation | Update declarations of conformity | Product Owner |

### Impact on Module Selection

Until harmonised standards become available:

- **Standard products:** Module A remains applicable (no restriction)
- **Class I products:** Module B+C required -- see [Module B+C](/en/conformity/module-bc)
- After publication of harmonised standards: Class I products can transition to Module A ([Self-Assessment](/en/conformity/self-assessment)), provided the standards are applied in full

> See also: [Product Classification](/en/conformity/product-classification) | [Self-Assessment (Module A)](/en/conformity/self-assessment)
