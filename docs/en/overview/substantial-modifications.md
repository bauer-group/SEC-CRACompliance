# 1.8 Substantial Modifications & Spare Parts (Art. 3(30), 21–22)

## 1.8.1 Overview

A **substantial modification** to a product with digital elements makes the modified product a **new product** for the purposes of the CRA. The act of making it available on the market constitutes a **new placing on the market** — regardless of whether the original manufacturer or a third party carried out the modification.

The concept is decisive in four distinct situations:

| # | Situation | Legal basis |
|---|-----------|-------------|
| a | An **importer or distributor** substantially modifies a product already placed on the market → considered its manufacturer | Art. 21 |
| b | **Any other natural or legal person** substantially modifies a product and makes it available → considered its manufacturer | Art. 22 |
| c | Any person substantially modifies **after 11.12.2027** a product placed on the market **before 11.12.2027** and places it on the market → considered its manufacturer | Art. 69(2) |
| d | A **manufacturer** determines whether changes made after 11.12.2027 require a **new conformity assessment** — the everyday case for iteratively developed software | Art. 32 |

::: info LEGAL BASIS
**Art. 3(30) CRA:** *"'substantial modification' means a change to the product with digital elements following its placing on the market, which affects the compliance of the product with digital elements with the essential cybersecurity requirements set out in Part I of Annex I or which results in a modification to the intended purpose for which the product with digital elements has been assessed."*

**Recital 39 CRA:** A product is substantially modified where a change **alters the level of cybersecurity risk** and that altered or additional risk **has not been considered by the manufacturer in its risk assessment** and, consequently, in its implementation of the essential requirements.

**Art. 21, 22 CRA:** Consequences for importers, distributors and other persons.
:::

## 1.8.2 Definition: Substantial Modification

::: danger CORRECTED TEST
An earlier version of this handbook stated three **cumulative** conditions (cybersecurity relevance **and** going beyond intended updates **and** invalidating the conformity assessment). That test was stricter than the law and would have wrongly classified reportable changes as non-substantial.

Art. 3(30) CRA sets out **two alternative limbs**. A modification is substantial if **either** applies.
:::

A change to a product **after** its placing on the market is a substantial modification where it:

1. **affects the compliance** of the product with the essential cybersecurity requirements of **Annex I Part I**; **or**
2. **results in a modification to the intended purpose** for which the product was assessed.

Recital 39 supplies the operative reading of limb 1: the change alters the level of cybersecurity risk, and that altered or additional risk was **not already covered** by the manufacturer's risk assessment.

::: warning WHAT IS NOT THE TEST

- **Not** the scale or complexity of the change. A three-line change can be substantial; a full rewrite may not be.
- **Not** whether the version number increases.
- **Not** whether the manufacturer labels it a "security update" — see 1.8.6.
- **Not** whether it was foreseeable in the abstract; the question is whether the risk was **actually assessed**.
:::

## 1.8.3 Decision Tree

```
A change is made to a product after it was placed on the market
│
├── Is the change a refurbishment, maintenance or repair
│   that leaves intended purpose, functionality and risk level unaffected?
│   └── Yes → Not a substantial modification (→ 1.8.4)
│
├── Does the change modify the INTENDED PURPOSE
│   for which the product was assessed?
│   └── Yes → SUBSTANTIAL MODIFICATION
│
├── Does the change alter the level of cybersecurity risk?
│   ├── No  → Not a substantial modification
│   └── Yes ↓
│
├── Was that altered or additional risk already considered
│   in the manufacturer's risk assessment, with mitigations
│   implemented and still valid?
│   ├── Yes → Not a substantial modification
│   └── No  → SUBSTANTIAL MODIFICATION
│
└── Consequence → new placing on the market (→ 1.8.7)
```

## 1.8.4 Physical Repairs, Maintenance and Refurbishment

Operations of refurbishment, maintenance or repair — as defined in Art. 2 points (18), (19) and (20) of Regulation (EU) 2024/1781 — that physically modify a product already placed on the market **do not necessarily** amount to substantial modifications (recital 42 CRA). A case-by-case assessment is required.

**Replacing defective or worn parts with better-performing ones** — because of technical progress or because the original part is no longer produced — does **not** in itself trigger a substantial modification. It does so only where the performance change or the changed way the repaired product operates:

1. affects its compliance with the essential requirements, **or**
2. results in a change to the intended purpose not covered by the risk assessment.

> **Example:** A manufacturer replaces defective RAM in a computer server with a new, better-performing module. Compliance with the essential requirements is unaffected and the new performance remains within the intended use considered in the risk assessment. The server has **not** been substantially modified.

## 1.8.5 Spare Parts (Art. 2(6))

Art. 2(6) CRA takes spare parts out of the scope of the Regulation where they are intended to replace **identical components** and are **manufactured according to the same specifications**. Recital 29 confirms that this covers both spare parts for products made available before the CRA applied and spare parts that have themselves undergone a CRA conformity assessment.

### Condition 1 — supplied *as* a spare part

The exemption applies only where the part is **specifically supplied to repair or extend the durability** of a product already placed on the market (before or after 11.12.2027).

| | |
|---|---|
| **Qualifies** | The maintenance or repair purpose is apparent from the context of supply — the product or product family is identified in the order or commercial offer, or supply runs through after-sales or service channels. Supporting evidence is kept available for market surveillance authorities. |
| **Does not qualify** | A product supplied as a standalone product, with no connection to the maintenance or repair of a pre-existing product. It is placed on the market in the ordinary way. |

::: warning TECHNICAL INTERCHANGEABILITY IS NOT ENOUGH
The fact that a product *could* technically be used to replace a component is **not**, in itself, sufficient to bring it within the exemption. Without the contextual evidence above, it is an ordinary product with digital elements.
:::

### Condition 2 — genuinely identical

Whether a part is "identical" is assessed against its **functional role** in the product and the **characteristics that may be relevant to cybersecurity**.

| Difference | Effect on the exemption |
|------------|-------------------------|
| Differences that do not affect the security characteristics or the cybersecurity risk profile — e.g. a different chipset with the same protocols and security mechanisms, and firmware that does not alter security-relevant characteristics | **Exemption preserved** |
| Differences in algorithms, protocols, cryptographic mechanisms, access control features or other security-relevant characteristics | **Not identical** — the part is a product with digital elements in its own right |

### If the spare part is not identical

The replacement part is subject to the CRA. Compliance is assessed in light of **its** intended purpose — including, importantly, its function of ensuring compatibility or interoperability with an existing product, which may itself have been placed on the market before the CRA applied.

Where certain essential requirements cannot reasonably be met because of that intended purpose or technical constraints, the manufacturer must reflect this in the cybersecurity risk assessment and implement **alternative or compensatory risk-mitigation measures**, documenting the constraint, the risks and the mitigations in the technical documentation and the user information — the same mechanism as for [complex systems](/en/overview/scope).

### Worked examples

| Scenario | Verdict |
|----------|---------|
| Controllers placed on the market in 2026 and in 2028; a digital communication module fails in both; the manufacturer supplies an identical replacement module manufactured to the same specifications | **Exempt in both cases.** The repair is not a substantial modification. |
| A 2026 industrial controller's communication chip fails; the manufacturer supplies a newer chip with equivalent functionality but a **different cryptographic implementation and updated secure boot** | **Not exempt.** The differences affect the chip's cybersecurity properties; it is a product with digital elements subject to the CRA. |
| A 2028 smart building controller's wireless module fails; the replacement uses a different chipset but the same communication protocols and security mechanisms, with firmware that does not alter security-relevant characteristics | **Exempt.** The module can be considered identical. |
| A 2027 industrial automation system's PLC central processing unit fails; the manufacturer offers either an identical replacement CPU **or** a complete identical replacement PLC, both via the after-sales channel with the target system identified | **Exempt in both cases.** The exemption applies whether the replacement is a component within a product or a complete product forming part of a larger one. |

## 1.8.6 Software Updates as Substantial Modifications

Software is updated continuously; the question is therefore an operational one, faced at every release. The following four patterns cover most cases.

### Pattern 1 — New functionality changing the intended purpose → substantial

| Example | Why |
|---------|-----|
| A monitoring dashboard that displayed trends and alerts gains the ability to **control** the machines — adjusting operating parameters and restarting them after faults | The intended purpose shifts from situational awareness to operational control over other devices, beyond what the risk assessment envisaged |
| A personal information manager gains the ability to **automatically analyse user content, build behavioural profiles and make automated decisions** on prioritisation, suppression or recommendation without user intervention | The intended purpose shifts from a user-controlled tool to an automated decision-making system |

### Pattern 2 — Functionality already foreseen and assessed → not substantial

| Example | Why |
|---------|-----|
| A messaging app initially ships with one-to-one messaging; the original risk assessment already covered group messaging (including the increased complexity of message routing), administrator controls and moderation tools. A later update enables them | The functionality falls within the original intended purpose and risk assessment |
| A production monitoring system ships with read-only dashboards while automated control features exist but are disabled; the risk assessment explicitly covers their future activation, including closed-loop control risks, operator override and fail-safe states. A later update enables them | The risks and safeguards were assessed in advance |

::: tip THIS IS AN ARGUMENT FOR ASSESSING AHEAD
A risk assessment that explicitly anticipates a planned functionality — describing the risks and the mitigations — can keep its later activation out of "substantial modification" territory. This is a concrete reason to make the roadmap visible in the risk assessment rather than assessing feature by feature.
:::

### Pattern 3 — Small change, significant new risk → substantial

| Example | Why |
|---------|-----|
| A *"remember me"* / persistent login feature storing authentication tokens locally | Limited in scope, but introduces token theft, unauthorised access and session hijacking risks not considered in the risk assessment |
| A logging and diagnostics feature exporting detailed system logs for troubleshooting | Results in collection and storage of sensitive operational data **in unencrypted form**, introducing unassessed data-exposure risk |

### Pattern 4 — Security updates → generally *not* substantial

In line with recital 39, security updates are generally **not** substantial modifications, because their primary purpose is to reduce the level of cybersecurity risk. This holds **even where the update introduces significant technical changes**, and includes cases where functionality is modified or constrained solely to mitigate identified vulnerabilities.

| Not a substantial modification | |
|---|---|
| Correcting an input validation error that could lead to a buffer overflow, or a logic flaw allowing authentication bypass through improper session token validation | The internal implementation changes; intended purpose and exposure do not |
| Tightening firewall rules, disabling unused network ports, changing default administrator password policies, making MFA mandatory where already available or foreseen | Affects how users configure or access the product, but serves solely to enhance its security posture |
| Disabling a deprecated cryptographic algorithm and activating a stronger, already-supported alternative, where the risk assessment covered all cryptographic options and anticipated deprecation | The measure was foreseen and assessed; no new external dependencies, no altered data flows |

| **Is** a substantial modification | |
|---|---|
| A local file encryption product is changed so that all files must be uploaded to and processed by a **remote encryption service** operated by the manufacturer | Although security-driven, it fundamentally alters the intended purpose — the product no longer performs local encryption |
| An internally managed key lifecycle is replaced with a protocol requiring an **external third-party key management service** | Dependencies and data flows are materially altered, adding new external interfaces not considered in the risk assessment |

### The four-factor test

When assessing any update, consider — non-exhaustively — whether it:

| # | Factor |
|---|--------|
| a | **Introduces new threat vectors** — additional interfaces, communication channels, execution environments or external dependencies through which threats could materialise |
| b | **Enables new attack scenarios** — new ways in which unauthorised access, manipulation, interference or misuse of the product, or of the data it processes, could plausibly occur |
| c | **Changes the likelihood** of previously identified attack scenarios — lowering the effort or expertise required, increasing exposure to untrusted actors, or weakening existing safeguards |
| d | **Changes the potential impact** of previously identified attack scenarios — the scope of affected data or functions, the severity of operational, safety or economic consequences, or the ability to detect, contain or recover from an incident |

Where **none** of the four applies and the assumptions and mitigations in the risk assessment remain valid and effective, the update is unlikely to be a substantial modification. Where **any** applies, the manufacturer must reassess the cybersecurity risks and determine whether the essential requirements continue to be met.

## 1.8.7 Consequences of a Substantial Modification

The substantially modified product is treated as a **new product**, and making it available constitutes a **new placing on the market**. What follows depends on **who** modified it and **how far** the modification reaches.

### Modification by a person other than the original manufacturer

That person becomes the manufacturer of the modified product — irrespective of whether they were involved in its original design or placing on the market.

| Reach of the modification | Obligations of the modifier |
|---------------------------|-----------------------------|
| The modification **does not** negatively affect the cybersecurity of the product as a whole | Art. 13 and Art. 14 apply **only in respect of the substantially modified part** (Art. 22). Existing tests and documentation may be reused for unaffected aspects; it is for the modifier to demonstrate which parts need no update. A declaration of conformity must still be drawn up. |
| The modification **does** negatively affect the cybersecurity of the product as a whole — e.g. it is no longer targeted or limited to a specific component or subsystem | The product is treated as a new product subject to the CRA **in its entirety**. Full Art. 13 and Art. 14 obligations for the product as a whole. |

::: info THE ORIGINAL MANUFACTURER'S DUTIES DO NOT LAPSE
Where a third party substantially modifies a product, the **original manufacturer's obligations continue to apply to the original product** as placed on the market. This ensures continuity in vulnerability handling and compliance for the unchanged parts.
:::

### Integration is not modification

::: warning DO NOT CONFUSE THE TWO
A company that assembles components — including by modifying them — into a **new** product that it places on the market under its own name is **not** substantially modifying someone else's product. It is placing a new product with digital elements on the market. It is the manufacturer of that new product and must comply with the CRA **in its entirety, for the product as a whole**. It may rely on the compliance activities of the component manufacturers to facilitate its own compliance.

> **Example:** A company buys off-the-shelf microcontroller modules and connectivity components, develops proprietary firmware and a sensor package, and assembles a connected agricultural monitoring product placed on the market under its own name. This is integration, not substantial modification.
:::

### Modification by the original manufacturer

The original manufacturer remains the manufacturer, and the substantially modified product is considered newly placed on the market. Two proportionality rules apply:

1. **Reuse is permitted.** Existing documentation and test results may be reused for aspects not impacted by the modification. The conformity assessment — and, where a notified body is involved, the third-party assessment — should **focus on the substantially modified parts**.
2. **Pre-2027 products are not dragged into full compliance.** A substantial modification by the original manufacturer of a product placed on the market before 11.12.2027 does **not**, in itself, require bringing the entire product into full CRA compliance — unless the modification negatively affects the cybersecurity of the product as a whole. Otherwise the obligations are limited to the substantially modified parts.

### Obligations that apply regardless of the verdict

::: danger THE VERDICT DOES NOT SUSPEND THE BASELINE
Whether or not an update qualifies as a substantial modification, the manufacturer remains obliged to:

- ensure the security of software updates and of the product throughout its support period, in accordance with the **vulnerability handling requirements of Annex I Part II**; and
- keep the **risk assessment and technical documentation accurate, complete and continuously up to date** (Art. 13(7), Art. 31(2)).
:::

## 1.8.8 Effect on the Support Period

A substantial modification requires a **reassessment** of the support period against the Art. 13(8) criteria, but does **not** automatically reset or extend it. The decisive question is whether the modification affects the factors that originally determined the product's expected use time. The rules and worked examples are in [6.4 Support & Lifecycle](/en/technical-documentation/support-period).

## 1.8.9 Steps After a "Yes" Verdict

| Step | Action |
|------|--------|
| 1 | Carry out or update the risk assessment ([Template](/en/templates/risk-assessment)) — scoped to the modified part where the modification is contained |
| 2 | Re-check the [product classification](/en/conformity/product-classification) — a changed intended purpose may change the core functionality |
| 3 | Carry out the conformity assessment, focused on the modified parts: [Module A](/en/conformity/self-assessment), [Module B+C](/en/conformity/module-bc), [Module H](/en/conformity/module-h) or [EUCC](/en/conformity/eucc) |
| 4 | Update the technical documentation, reusing unaffected material |
| 5 | Issue a new [EU declaration of conformity](/en/conformity/eu-declaration) and affix the CE marking |
| 6 | Reassess and declare the [support period](/en/technical-documentation/support-period) for the modified version |
| 7 | Confirm Art. 14 reporting coverage for the modified product |

## 1.8.10 Process at BAUER GROUP

### Assessment before every release and before modifying a third-party product

| Step | Action | Responsible |
|------|--------|-------------|
| 1 | Document the change (what changes, and why) | Development team |
| 2 | Determine whether the intended purpose changes | Product management |
| 3 | Apply the four-factor test (1.8.6) | CISO |
| 4 | Check whether the altered risk was already covered by the current risk assessment | CISO |
| 5 | Decide: substantial modification yes/no | CISO + Management |
| 6 | Document the decision with its rationale | CISO |

## 1.8.11 Documentation

Every modification decision is documented:

1. **Description of the modification** — what was changed, why
2. **Intended-purpose check** — unchanged, or changed how
3. **Four-factor analysis** — threat vectors, attack scenarios, likelihood, impact
4. **Coverage check** — was the altered risk already in the risk assessment, and are the mitigations still valid
5. **Substantiality assessment** — decision with rationale
6. **Measures** — what was initiated, or why nothing was necessary
7. **Responsible person and date**

::: warning DOCUMENTATION OBLIGATION
The decision that a modification is **not** substantial must also be documented. In case of dispute, BAUER GROUP must be able to demonstrate that the review has taken place — and, under Art. 13(7) and Art. 31(2), that the risk assessment and technical documentation were kept up to date either way.
:::

> Source and legal status of the interpretations on this page: [Commission Guidance on the CRA](/en/clarifications/commission-guidance).
