# 7.5 EUCC Certification

## 7.5.1 Overview

The European Cybersecurity Certificate (EUCC) is a European certification scheme based on the Common Criteria framework (ISO/IEC 15408). It is grounded in the **EU Cybersecurity Act** (Regulation (EU) 2019/881) and defines the assurance levels "substantial" and "high".

::: warning EUCC IS NOT CURRENTLY MANDATORY
EUCC certification is **not automatically mandatory** for critical products (Annex IV). Under **Art. 8(1) CRA**, the Commission is merely *empowered* to determine, by **delegated act**, which critical products must obtain a European cybersecurity certificate at assurance level at least "substantial".

**As of June 2026, no such delegated act has been adopted.** Until one is, critical products undergo the standard conformity assessment procedures under **Art. 32(3) CRA** — i.e. EU type examination (Module B) + conformity to type (Module C), or full quality assurance (Module H).

An EUCC obligation arises only **once** the Commission adopts the delegated act under Art. 8(1) and names the product concerned within it.
:::

::: info LEGAL BASIS
**Art. 8(1) CRA:** Empowers the Commission to determine, by delegated act, which critical products (Annex IV) must obtain a European cybersecurity certificate at assurance level "substantial" or higher. Until such an act is adopted, no EUCC obligation exists.

**Art. 32(3) CRA:** Until a delegated act under Art. 8(1) enters into force, critical products are subject to the standard conformity assessment procedures (Module B+C or Module H).

**Regulation (EU) 2019/881 (Cybersecurity Act):** Defines the European framework for cybersecurity certification.

**EUCC Scheme (Implementing Regulation (EU) 2024/482):** Specifies the European Common Criteria-based certification scheme.
:::

## 7.5.2 Applicability

| Category | EUCC mandatory? |
|----------|-----------------|
| Default | No |
| Class I | No |
| Class II | No |
| **Critical (Annex IV)** | **Conditional only** — only after a delegated act (Art. 8(1)); currently Module B+C or H (Art. 32(3)) |

::: tip CURRENT CONFORMITY PATH FOR ANNEX IV PRODUCTS
As no delegated act under Art. 8(1) has yet been adopted, critical products currently follow the same procedure as Class II products: [Module B+C](/en/conformity/module-bc) or [Module H](/en/conformity/module-h). The EUCC procedure described below applies in the event that the Commission activates the EUCC obligation for a product category.
:::

### Annex IV Product Categories

The following products are classified as critical:

- Hardware security modules (HSM)
- Smartcards and similar devices (incl. secure elements)
- Smartcard readers
- Sensors and actuators for robots and machine controls
- Smart meter gateways

## 7.5.3 Assurance Levels

The EUCC defines two levels, based on Common Criteria Evaluation Assurance Levels (EAL):

| EUCC Level | Common Criteria | Examination Depth | Typical Use |
|------------|----------------|-------------------|-------------|
| **Substantial** | EAL 3-4 | Methodically tested and checked | Minimum for CRA Annex IV |
| **High** | EAL 5-7 | Semi-formally/formally verified | High-security products |

For the CRA, at least the **"substantial"** level is required.

## 7.5.4 Procedure

### 1. Select an Evaluation Facility (ITSEF)

- **ITSEF** = IT Security Evaluation Facility
- Must be accredited under ISO/IEC 17025
- Must be recognised by the national cybersecurity certification authority
- In Germany: BSI (Federal Office for Information Security) as the responsible authority

### 2. Create Protection Profile / Security Target

#### Security Target (ST)

The Security Target defines:

- **TOE** (Target of Evaluation) – Precise description of the product to be evaluated
- **Security problem** – Threats, organisational security policies, assumptions
- **Security objectives** – For the TOE and the operational environment
- **Security requirements** – Functional (SFR) and assurance (SAR)
- **TOE summary** – How the requirements are met

#### Protection Profile (PP)

If a relevant Protection Profile exists, it should be referenced. This simplifies the evaluation as security requirements are already standardised.

### 3. Evaluation

The ITSEF conducts the evaluation:

| EAL | Evaluation Activities |
|-----|----------------------|
| EAL 1 | Functionally tested |
| EAL 2 | Structurally tested |
| EAL 3 | Methodically tested and checked |
| **EAL 4** | **Methodically designed, tested and checked** |
| EAL 5 | Semi-formally designed and tested |
| EAL 6 | Semi-formally verified |
| EAL 7 | Formally verified |

For CRA Annex IV, typically **EAL 3 or EAL 4** is required ("substantial" level).

### 4. Certification

Upon successful evaluation:

1. ITSEF produces **Evaluation Technical Report** (ETR)
2. National certification body (e.g., BSI) reviews the ETR
3. **EUCC certificate** is issued
4. Certificate is published in the **EU cybersecurity certification database**

### 5. Maintenance

- **Certificate validity:** Limited (typically 3-5 years)
- **Assurance continuity:** For minor changes (maintenance update)
- **Re-evaluation:** For significant changes
- **Vulnerability management:** Ongoing obligation for vulnerability handling

## 7.5.5 Timeline

| Phase | Estimated Duration |
|-------|-------------------|
| Security Target creation | 2-4 months |
| ITSEF selection and engagement | 1-2 months |
| Evaluation (EAL 4) | 6-12 months |
| Certification by national body | 2-4 months |
| **Total** | **approx. 12-24 months** |

::: warning LEAD TIME
EUCC evaluations are extensive and time-consuming. Begin planning at least **18-24 months** before the planned market launch.
:::

## 7.5.6 Costs

| Cost Factor | Estimated Range |
|------------|-----------------|
| Security Target creation | EUR 15,000 - 50,000 |
| Evaluation (EAL 3-4) | EUR 50,000 - 200,000 |
| Certification fees | EUR 5,000 - 15,000 |
| Maintenance / Re-evaluation | EUR 20,000 - 100,000 |
| **Total (initial assessment)** | **approx. EUR 70,000 - 265,000** |

*Note: Actual costs depend heavily on product complexity and target EAL.*

## 7.5.7 Relevance for BAUER GROUP

Based on the [Product Classification](/en/conformity/product-classification):

| Annex IV Category | Affects BAUER GROUP? | Action |
|-------------------|----------------------|--------|
| Hardware security modules (HSM) | No (usage, not manufacturing) | None |
| Smartcards / Secure elements | No (typically) | None |
| Smart meter gateways | Check | If energy products are manufactured |
| Sensors/actuators for robots | Check | If safety-critical controls are manufactured |

::: tip CURRENT STATUS
Based on current assessment, no BAUER GROUP products fall under Annex IV. This assessment is reviewed for each new product and when Delegated Acts are amended.
:::

## 7.5.8 Transitional Provisions

- **Art. 32(3) CRA:** As long as the Commission has not adopted a delegated act under Art. 8(1) triggering an EUCC obligation, critical products (Annex IV) are assessed via the standard conformity assessment procedures — Module B+C or Module H. This is the **current status (as of June 2026)**.
- **Art. 8(1) CRA:** Only the adoption of a delegated act makes the EUCC mandatory for the product categories named therein.
- The EU Commission may also add further products to Annex IV via delegated act.
- Manufacturers must actively monitor the development of delegated and implementing acts in order to identify a future EUCC obligation in good time.

## 7.5.9 Checklist: EUCC

- [ ] Product classification completed (Annex IV confirmed)
- [ ] Relevant Protection Profile identified (if available)
- [ ] Security Target created
- [ ] ITSEF identified and contacted
- [ ] Evaluation contract concluded
- [ ] Evaluation materials provided (source code, documentation, test plans)
- [ ] Evaluation passed / remediation implemented
- [ ] ETR reviewed by national body
- [ ] EUCC certificate received
- [ ] Certificate published in EU database
- [ ] Maintenance plan established
- [ ] EU Declaration of Conformity issued ([Template](/en/templates/eu-declaration-of-conformity))
- [ ] CE marking applied
