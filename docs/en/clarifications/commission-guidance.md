# Commission Guidance on the CRA (Art. 26)

On **27 July 2026** the European Commission approved the content of its **guidance on the application of Regulation (EU) 2024/2847 (Cyber Resilience Act)**. The guidance is the single most detailed interpretation of the CRA published to date: it resolves questions on scope, open-source software, substantial modifications, support periods, product classification and remote data processing that the Regulation itself leaves open.

This page records **what the document is, what legal weight it carries, and where its content has been worked into this handbook**. The substance itself is not repeated here — it has been integrated into the operational chapters, which are listed in the mapping table below.

## The source document

| Field | Value |
|-------|-------|
| **Reference** | C(2026) 5252 final (Communication to the Commission) + C(2026) 5252 final ANNEX (the guidance) |
| **Title** | Commission guidance on the application of Regulation (EU) 2024/2847 (Cyber Resilience Act) |
| **Date** | Brussels, 27 July 2026 |
| **Legal basis** | Art. 26(1) CRA — the Commission is required to publish guidance assisting economic operators, with a particular focus on microenterprises and SMEs |
| **Extent** | 9 chapters, 257 numbered points, 67 worked examples, 10 figures |
| **Preparation** | Expert Group on Cybersecurity of products with digital elements; public consultation 3 March – 13 April 2026 |
| **Predecessor** | Commission FAQs on the CRA, published 3 December 2025 |

Art. 26(2) CRA prescribes the minimum aspects the guidance must address. All four are covered: (i) the scope of the CRA, with particular attention to remote data processing solutions and free and open-source software; (ii) the notion of *support periods*; (iii) the interplay between the CRA and other EU legislation; and (iv) the concept of *substantial modification*.

## Legal status — read this before relying on it

::: danger CONTENT APPROVED, FORMAL ADOPTION STILL PENDING
The Communication of 27 July 2026 approves the **content** of the draft guidance. The guidance in the Annex *"will be formally adopted by the Commission at a later date, when all language versions are available. It is only from that moment that it will apply."*

As of **August 2026**, that formal adoption has **not yet taken place**. The content is stable and may be used for planning, but any citation in technical documentation, a declaration of conformity, or correspondence with a market surveillance authority should note that formal adoption was still outstanding at the time of writing.
:::

Three further limits apply and are stated by the Commission itself:

| Limit | What the guidance says |
|-------|------------------------|
| **Not binding** | The guidance *"is not binding for economic operators or other actors subject to the CRA."* It sets out the Commission's interpretation with a view to supporting compliance and harmonised enforcement. |
| **No authoritative interpretation** | *"An authoritative interpretation of the CRA may only be given by the Court of Justice of the European Union."* |
| **Examples are illustrations, not substitutes** | The 67 examples *"are not intended to replace a case-by-case assessment, which will always be necessary to account for the specifics of each individual case."* |

::: tip HOW BAUER GROUP USES IT
The guidance is treated as the **best available evidence of how the CRA will be enforced**, not as law. Where this handbook now follows an interpretation from the guidance, the decision and its rationale are documented in the product file, so that the reasoning remains auditable even if the final adopted text or later case law diverges.
:::

The guidance also addresses market surveillance authorities, notifying authorities and notified bodies. Its practical significance is therefore higher than its non-binding status suggests: it is the interpretation the enforcing authorities are expected to apply.

## Structure of the guidance

| Ch. | Title | Core question answered |
|-----|-------|------------------------|
| 1 | Introduction | Purpose, legal status, relationship to the FAQs |
| 2 | Scope | When is software *placed on the market*? What is a product with digital elements? |
| 3 | Free and open-source software | When is FOSS supplied *in the course of a commercial activity*? Who is a steward? |
| 4 | Substantial modifications and spare parts | When does a change — physical or in software — create a new product? |
| 5 | Support period | How long, per version, and what happens after a substantial modification? |
| 6 | Important and critical products | What is *core functionality*, and which conformity route follows from it? |
| 7 | Risk assessment and integration | Residual risk, due diligence, product families |
| 8 | Remote data processing | Which cloud and back-end elements are part of the product? |
| 9 | Additional elements | Reporting, vulnerability handling, interplay with other EU law |

## Where the guidance has been worked into this handbook

| Guidance section | Integrated into |
|------------------|-----------------|
| 2.1–2.5 Placing on the market, software, computer code, hardware+software, data connection | [1.1 Scope](/en/overview/scope) |
| 2.6 Complex systems | [1.1 Scope](/en/overview/scope) · [3.4 Risk Assessment](/en/vulnerability-management/risk-assessment) |
| 2.7 Products designed before the CRA applies | [1.1 Scope](/en/overview/scope) |
| 3 Free and open-source software (all subsections) | [1.7 Open-Source Steward](/en/overview/open-source-steward) |
| 4.1–4.2 Physical repairs, spare parts | [1.8 Substantial Modifications](/en/overview/substantial-modifications) |
| 4.3 Software updates as substantial modifications | [1.8 Substantial Modifications](/en/overview/substantial-modifications) |
| 4.4 Consequences of a substantial modification | [1.8 Substantial Modifications](/en/overview/substantial-modifications) |
| 5 Support period, 5.1 and substantial modifications | [6.4 Support & Lifecycle](/en/technical-documentation/support-period) |
| 6.1 Core functionality | [7.1 Product Classification](/en/conformity/product-classification) |
| 6.2 Conformity assessment for important and critical products | [7.2 Internal Control (Module A)](/en/conformity/self-assessment) |
| 6.3 Implications for presumption of conformity | [1.12 Harmonised Standards](/en/overview/harmonised-standards) |
| 7.1–7.2 Evaluation and treatment of cybersecurity risks | [3.4 Risk Assessment](/en/vulnerability-management/risk-assessment) |
| 7.3 Due diligence for external dependencies and components | [5.3 Third-Party Assessment](/en/supply-chain/third-party-assessment) |
| 7.4 Reuse for families of products | [3.4 Risk Assessment](/en/vulnerability-management/risk-assessment) |
| 8 Remote data processing (all subsections) | [1.15 Remote Data Processing](/en/overview/remote-data-processing) |
| 9.1 Reporting obligations | [4.3 ENISA Reporting Process](/en/incident-response/enisa-reporting) |
| 9.2.1 Reporting upstream and sharing security fixes | [3.5 Handling Requirements](/en/vulnerability-management/handling-requirements) |
| 9.2.2 Known exploitable vulnerabilities | [3.5 Handling Requirements](/en/vulnerability-management/handling-requirements) |
| 9.2.3 Effective and regular tests and reviews | [3.5 Handling Requirements](/en/vulnerability-management/handling-requirements) |
| 9.3 Interplay with other legislation | [Sectoral Law & Existing Certificates](/en/clarifications/sectoral-law-and-certificates) |

## What changed in this handbook

The guidance did not merely add detail — in several places it **corrected** an interpretation that was previously in use here. The changes with the greatest operational impact:

| # | Change | Why it matters |
|---|--------|----------------|
| 1 | The test for a **substantial modification** was replaced with the two-limb test of Art. 3(30) plus the risk-based criteria of the guidance | The previous three-condition test was stricter than the law and would have classified reportable changes as non-substantial |
| 2 | **Five years is a floor, not a default** support period | Products with a longer expected use time require a longer period; declaring "5 years" by default is a compliance gap |
| 3 | Each **substantially modified software version** is newly placed on the market and needs its own declared support period | Affects release planning for iteratively developed software |
| 4 | **Open-source stewards must report** actively exploited vulnerabilities under Art. 24(3) where they contribute engineering resources — this is not voluntary | Previously described here as voluntary reporting |
| 5 | **Web applications accessed only through a browser are not products with digital elements** | Sharpens the scope boundary for the product catalogue |
| 6 | A vulnerability in a third-party component is only reportable when it is **actively exploited in your product** | Prevents both over- and under-reporting from 11 September 2026 |
| 7 | **No retroactive reporting** of active exploitation the manufacturer already knew about before 11 September 2026 | Removes an obligation previously assumed to exist |
| 8 | A product may have **only one core functionality** for classification purposes | Resolves classification of multi-function products |
| 9 | Presumption of conformity extends **only to the risks a harmonised standard actually covers** | Ancillary functions may remain outside the presumption even where Module A is permitted |
| 10 | Changes made by a **third-party cloud provider** are not a substantial modification of the product | Clarifies the boundary of the manufacturer's responsibility |

## What the guidance does not cover

The guidance is explicitly **not** a complete commentary on the CRA. Two gaps are named by the Commission as candidates for further guidance under Art. 26:

- Interplay between the CRA and **Regulation (EU) 2024/1689 (AI Act)**
- Interplay between the CRA and **Regulation (EU) 2022/2554 (DORA)**

Products with AI components or products in the financial sector therefore still require an individual legal assessment of the overlap. See [NIS2 Integration](/en/overview/nis2-integration) for the interfaces already documented.

## Related chapters

- [Clarifications & Misconceptions](/en/clarifications/) — overview of this section
- [Sectoral Law & Existing Certificates](/en/clarifications/sectoral-law-and-certificates) — Art. 69(1), RED, Machinery Regulation, vehicles
- [1.3 Timelines & Deadlines](/en/overview/timeline) — the CRA application dates the guidance interprets
