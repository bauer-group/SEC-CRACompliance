# 1.4 Importer Obligations (Art. 15)

## 1.4.1 Overview

Importers are economic operators that place a product with digital elements from a third-country manufacturer (outside the EU) on the Union market. The CRA imposes specific due diligence obligations on them to ensure that only compliant products reach the EU market.

::: info LEGAL BASIS
**Art. 15 CRA:** The importer shall only place products on the market that meet the essential requirements of Annex I and whose manufacturer has properly carried out the conformity assessment.

**Art. 3 No. 21 CRA:** *"Importer" means any natural or legal person established in the Union who places a product with digital elements bearing the name or trademark of a person established outside the Union on the market.*
:::

## 1.4.2 When Is BAUER GROUP an Importer?

BAUER GROUP acts as an Importer when:

- Software or hardware is purchased from a **non-EU manufacturer** and distributed under their brand in the EU
- Firmware components are sourced from outside the EU and integrated into own products, where the component qualifies as a standalone product
- A SaaS product from a third country is distributed as on-premise software in the EU

::: warning DISTINCTION
If BAUER GROUP places a third-country product on the market under its **own name or brand**, BAUER GROUP is considered a **Manufacturer** (not an Importer) and is subject to the full manufacturer obligations under Art. 10.
:::

## 1.4.3 Obligations in Detail

### 1. Conformity Verification Before Placing on the Market (Art. 15 Para. 1)

Before placing on the market, the Importer must ensure:

- [ ] Manufacturer has properly carried out the **conformity assessment**
- [ ] Manufacturer has prepared the **technical documentation** in accordance with Annex VII
- [ ] Product bears the **CE marking**
- [ ] Product is accompanied by the **EU declaration of conformity** (or simplified version with URL)
- [ ] Manufacturer has provided contact details on the product / in the documentation
- [ ] Product has a **unique identification** (type, batch, serial number)

### 2. Own Labelling (Art. 15 Para. 2)

The Importer must indicate on the product or its packaging:

- Their **name / trade name / registered trademark**
- Their **postal address and email**

For software: In the documentation, the user interface, or the repository.

### 3. Storage and Transport Conditions (Art. 15 Para. 3)

Ensure that storage and transport do not compromise conformity:

- Integrity protection of software packages (checksums, signed artefacts)
- Secure distribution channels (HTTPS, signed repositories)
- No tampering with firmware/software during the logistics chain

### 4. Market Monitoring (Art. 15 Para. 4)

The Importer must:

- **Monitor** whether the product continues to be compliant
- In case of suspected non-conformity: take corrective measures or cease distribution
- In case of serious risk: inform the manufacturer and Market Surveillance authorities

### 5. Documentation (Art. 15 Para. 5)

- **EU declaration of conformity** must be available to the Importer (copy)
- **Technical documentation** must be available to the authorities upon request
- Retention period: **10 years** after placing on the market

### 6. Cooperation with Authorities (Art. 15 Para. 6)

Upon request from Market Surveillance authorities, the Importer must:

- Provide all required information and documents
- In the language of the authority (or a language accepted by the authority)
- Cooperate in eliminating risks

### 7. Reporting Obligations (Art. 15 Para. 7)

Upon becoming aware of an **actively exploited vulnerability** or a **severe security incident**:

- Inform the manufacturer **without delay**
- If the manufacturer does not respond: Report directly to ENISA and the national CSIRT

## 1.4.4 Checklist for Importers

### Before Placing on the Market

- [ ] Manufacturer identified and verified (non-EU)
- [ ] CE marking present
- [ ] EU declaration of conformity received and reviewed
- [ ] Manufacturer's conformity assessment plausible (module according to category)
- [ ] Technical documentation available or retrievable
- [ ] Product identification present (type, version, serial number)
- [ ] Own contact details affixed to the product / in the documentation
- [ ] SBOM received from manufacturer (Art. 13 Para. 23)
- [ ] Support period defined and communicated

### Ongoing

- [ ] Market monitoring active (tracking manufacturer vulnerability notifications)
- [ ] Distribution channels integrity-secured
- [ ] Readiness to cooperate with authorities ensured
- [ ] Documentation archived (10 years)

## 1.4.5 Liability and Penalties

| Violation | Penalty |
|-----------|---------|
| Placing non-compliant products on the market | Up to EUR 15 million or 2.5% of global annual turnover |
| Missing documentation / labelling | Up to EUR 10 million or 2% of annual turnover |
| False / incomplete information to authorities | Up to EUR 5 million or 1% of annual turnover |

> Details: [Penalties](/en/overview/penalties)
