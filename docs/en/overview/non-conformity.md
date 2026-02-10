# 1.9 Non-Conformity (Art. 22–23)

## 1.9.1 Overview

The CRA distinguishes between **formal non-conformity** (Art. 22) and **products presenting a significant cybersecurity risk** (Art. 23). This distinction is critical: Art. 22 addresses administrative deficiencies (missing documents, incorrect marking), while Art. 23 covers substantive security issues. Both articles empower Market Surveillance authorities to order corrective measures up to and including withdrawal or recall.

::: info LEGAL BASIS
**Art. 22 CRA (EU) 2024/2847:** Procedure for formal non-conformity -- the Market Surveillance authority requires the economic operator to bring the product into conformity within a specified timeframe.

**Art. 23 CRA (EU) 2024/2847:** Procedure for products presenting a significant cybersecurity risk -- the authority orders corrective measures where the essential requirements (Annex I) are not substantively met.
:::

## 1.9.2 Art. 22 -- Formal Non-Conformity

The Market Surveillance authority shall require corrective action when it identifies any of the following formal deficiencies:

| Formal Deficiency | Legal Basis | Example |
|-------------------|-------------|---------|
| CE marking not affixed or affixed incorrectly | Art. 29-30 | CE mark missing from product or packaging |
| EU Declaration of Conformity not drawn up or drawn up incorrectly | Art. 28, Annex V | DoC missing or does not contain all mandatory information |
| Technical documentation not available or incomplete | Art. 31, Annex VII | Documentation cannot be produced within the required timeframe |
| Manufacturer/importer contact information missing | Art. 10(15), Art. 13(19) | No name, address, or contact details on the product |
| Any other administrative requirement not met | Various | Support period not indicated |

### Procedure

1. Authority identifies formal non-conformity
2. Economic operator is informed and given a **reasonable timeframe** to bring the product into conformity
3. Operator remedies the deficiency within the timeframe
4. **If non-conformity persists:** Authority orders restriction, withdrawal, or recall

::: warning CAUTION
Formal deficiencies may appear trivial but can result in an immediate distribution stop. Complete documentation must be available at all times.
:::

## 1.9.3 Art. 23 -- Product Presenting a Significant Cybersecurity Risk

Where a product with digital elements presents a **significant cybersecurity risk**, an escalated procedure applies:

1. The Market Surveillance authority conducts a **risk-based assessment**
2. Upon finding a significant risk: corrective measures are ordered with a specified deadline
3. The manufacturer must take corrective action within the deadline
4. **If no action is taken:** restriction, withdrawal, or recall of the product

Art. 23 applies in particular where the **essential requirements under Annex I** are not substantively met -- for example missing encryption, unpatched known vulnerabilities, or an inadequate update mechanism.

::: danger SIGNIFICANT RISK
A significant cybersecurity risk can trigger immediate measures. Unlike formal non-conformity, the focus here is on actual user safety. Penalties under [Art. 64](/en/overview/penalties) (up to EUR 15 million / 2.5% of turnover) may be imposed in addition.
:::

## 1.9.4 Comparison: Art. 22 vs. Art. 23

| Criterion | Art. 22 -- Formal Non-Conformity | Art. 23 -- Significant Cybersecurity Risk |
|-----------|----------------------------------|-------------------------------------------|
| **Subject** | Administrative deficiencies (documentation, marking) | Substantive security deficiencies (Annex I) |
| **Typical triggers** | Missing CE marking, incomplete DoC | Unpatched vulnerabilities, missing encryption |
| **Risk assessment** | Not required | Risk-based assessment by the authority |
| **Correction deadline** | Reasonable timeframe | Deadline with urgency depending on risk |
| **Escalation** | Distribution stop, withdrawal | Distribution stop, withdrawal, recall |
| **Fine exposure** | Tier 2 (up to EUR 10 million / 2%) | Tier 1 (up to EUR 15 million / 2.5%) |

## 1.9.5 Practical Measures for BAUER GROUP

### Checklist: Ensuring Formal Conformity

- [ ] CE marking correctly affixed on all products ([CE Marking](/en/conformity/ce-marking))
- [ ] EU Declaration of Conformity drawn up and current for each product ([EU Declaration](/en/conformity/eu-declaration))
- [ ] Technical documentation complete and producible within 10 working days
- [ ] Contact details (name, address, email/URL) on the product or packaging
- [ ] Support period indicated and publicly accessible

### Response Procedure for Authority Contact

| Step | Deadline | Responsible | Action |
|------|----------|-------------|--------|
| 1 | Immediately | Recipient | Forward request to CISO and legal department |
| 2 | 1 working day | CISO | Determine type of non-conformity (formal vs. substantive) |
| 3 | 3 working days | Specialist team | Identify corrective measures and establish timeline |
| 4 | As per deadline | Specialist team | Implement corrective measures |
| 5 | After implementation | CISO | Submit evidence to authority |
| 6 | Ongoing | CISO | Ensure documentation of all measures |

### Escalation Path

```
Authority request received
    |
    +-- CISO + Legal department (initial assessment, 1 WD)
    |
    +-- Formal non-conformity (Art. 22)?
    |   +-- Yes --> Specialist team corrects (documents, marking)
    |   +-- Evidence submitted to authority within deadline
    |
    +-- Significant risk (Art. 23)?
        +-- Yes --> Escalation to senior management
        +-- Immediate risk assessment
        +-- Security update / recall initiated if necessary
        +-- Parallel notification to ENISA (if Art. 14 is triggered)
```

## 1.9.6 Related Pages

- [CE Marking](/en/conformity/ce-marking) -- Requirements for correct affixation
- [EU Declaration of Conformity](/en/conformity/eu-declaration) -- Content and form of the DoC
- [Market Surveillance](/en/overview/market-surveillance) -- Authority procedures and preparation
- [Penalties and Fines](/en/overview/penalties) -- Fine framework for violations
