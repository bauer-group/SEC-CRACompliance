# 1.10 Market Surveillance (Art. 52–58)

## 1.10.1 Overview

Market Surveillance ensures that products on the EU market meet the CRA requirements. Regulation (EU) 2019/1020 (Market Surveillance Regulation) applies. Manufacturers must respond to requests from Market Surveillance authorities and cooperate with corrective measures.

::: info LEGAL BASIS
**Art. 52 CRA:** Regulation (EU) 2019/1020 applies to products with digital elements falling under the CRA.

**Art. 53-58 CRA:** Specific procedures for corrective measures, safeguard clause, formal non-conformity, and Union safeguard clause.
:::

## 1.10.2 Competent Authorities

| Country | Competent Market Surveillance Authority |
|---------|----------------------------------------|
| Germany | Federal Network Agency (BNetzA) / BSI |
| Austria | Telecommunications Office / RTR |
| EU-wide | Coordination by the EU Commission |

*The exact distribution of competences will be determined by the Member States by 11.06.2026.*

## 1.10.3 Powers of Market Surveillance Authorities

### Information Requests (Art. 52)

Authorities may require from the Manufacturer:

- Technical documentation (Annex VII) -- typical deadline: **10 working days**
- EU declaration of conformity
- SBOM
- Results of the conformity assessment
- Source code or access to source code (in justified cases)

### Product Testing

Authorities may:

- Purchase products from the market and test them
- Order laboratory tests and security assessments
- Commission penetration tests
- Check SBOM against known vulnerabilities

### Order Corrective Measures

- Warning to users
- Recall of the product from the market
- Distribution stop
- Destruction of the product (in severe cases)

## 1.10.4 Procedures

### Art. 53 -- Corrective Measures at National Level

```
Authority determines non-conformity
    |
    +-- Manufacturer informed (with deadline)
    |
    +-- Manufacturer has [reasonable deadline] for correction
    |   +-- Correction made --> Procedure closed
    |   +-- Correction not made --> Measure ordered
    |       +-- Distribution stop
    |       +-- Recall
    |       +-- EU Commission + other Member States informed
    |
    +-- In case of serious danger --> Immediate measures (without deadline)
```

### Art. 54 -- Safeguard Clause Procedure (EU-wide)

When a Member State takes measures and other Member States are affected:

1. Member State informs the EU Commission
2. Commission examines whether the measure is justified
3. If confirmed: All Member States take the same measures
4. If rejected: Member State must lift the measure

### Art. 55 -- Compliant Products Posing a Risk

Even a **compliant** product can pose a risk (e.g., new threat landscape). In this case:

- Authority may order provisional measures
- Manufacturer must provide a remedy (patch, warning, recall)
- Commission may adopt implementing acts

### Art. 56 -- Formal Non-Conformity

Formal violations (without substantive risk):

- Missing CE marking
- CE incorrectly affixed
- EU declaration of conformity not prepared or defective
- Technical documentation not available

> Manufacturer must establish **formal conformity**
> In case of non-compliance: distribution stop or recall

## 1.10.5 BAUER GROUP Obligations

### Preparation for Market Surveillance

| Measure | Description | Status |
|---------|-------------|--------|
| Documentation archive | All technical documentation retrievable (10 years) | This repository |
| SBOM archive | SBOMs archived and signed per release | [SBOM & Signing](/en/sbom-signing/) |
| Contact person | Designated person for authority requests | To be designated |
| EU declarations of conformity | Available for all products | Product-specific |
| Recall process | Documented process for product recalls | To be created |

### Response Process for Authority Requests

| Step | Deadline | Action |
|------|----------|--------|
| 1 | Immediately | Forward request to CISO and management |
| 2 | 2 working days | Assess request content, identify responsible team |
| 3 | 5 working days | Compile requested documentation |
| 4 | 10 working days | Submit documentation to authority |
| 5 | As per deadline | Implement corrective measures (if required) |
| 6 | Ongoing | Document measures and inform authority |

### Recall Process

If a recall is ordered or carried out voluntarily:

1. **Risk assessment** -- Severity and scope of the problem
2. **Customer notification** -- Through all known channels
3. **Provide patch** -- Publish security update
4. **Inform authority** -- Communicate measures and timeline
5. **Documentation** -- Record all steps without gaps
6. **Follow-up** -- Monitor patch adoption

> See also: [Communication Plan](/en/incident-response/communication)

## 1.10.6 Checklist: Readiness for Market Surveillance

- [ ] Technical documentation of all products up to date and retrievable
- [ ] EU declarations of conformity available for all products
- [ ] SBOMs archived for all active product versions
- [ ] Contact person for authority requests designated
- [ ] Response process documented and known
- [ ] Recall process documented
- [ ] All documents available in English (authority language)
- [ ] Source code access technically possible (for justified requests)
