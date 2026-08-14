# 1.7 Free & Open-Source Software and the Steward (Art. 3(14), 3(48), 24–25)

## 1.7.1 Overview

The CRA does not exempt open source as a category. It asks a sequence of three questions about **each specific project**, and the answers can differ for two projects published by the same organisation on the same day.

```
1. Does the software qualify as FOSS under Art. 3(48)?          → 1.7.2
   └── No  → ordinary product rules apply

2. Is that FOSS under YOUR responsibility?                       → 1.7.3
   └── No  → you are a contributor; the CRA does not apply to you

3. Do you supply it in the course of a COMMERCIAL ACTIVITY,
   i.e. is it placed on the market?                              → 1.7.4
   ├── Yes → you are its MANUFACTURER (full Art. 13 obligations)
   └── No  → are you a legal person providing sustained support
             for FOSS intended for commercial activities?        → 1.7.5
             ├── Yes → you are its STEWARD (Art. 24)
             └── No  → no CRA obligations for that project
```

::: info COMMISSION GUIDANCE APPLIED
This chapter implements Chapter 3 of the Commission guidance of 27 July 2026, which is the most detailed treatment of open source under the CRA published so far. It is not legally binding and had not been formally adopted at the time of writing — see [Commission Guidance on the CRA](/en/clarifications/commission-guidance).
:::

## 1.7.2 What Qualifies as FOSS (Art. 3(48))

::: info LEGAL BASIS
**Art. 3(48) CRA:** *"'free and open-source software' means software the source code of which is openly shared and which is made available under a free and open-source licence which provides for all rights to make it freely accessible, usable, modifiable and redistributable."*
:::

Two conditions must be met **cumulatively**:

| # | Condition | Detail |
|---|-----------|--------|
| 1 | **A free and open-source licence** granting the full set of rights | Freely accessible, usable, modifiable and redistributable — the traditional understanding of FOSS |
| 2 | **The source code is openly shared** | Publicly available, whether upstream or downstream — not merely provided on a restricted or conditional basis |

::: warning A FOSS LICENCE ALONE IS NOT ENOUGH
Software distributed under a free and open-source licence **whose source code is shared only with paying customers or a limited group of users is not FOSS** within the meaning of Art. 3(48). Access to the source code is a necessary precondition for exercising the other rights: without it, the software cannot practically be modified or meaningfully reused.

The guidance does not name specific licences as compatible or incompatible. The test is applied to the licence terms **and** to the actual availability of the code.
:::

## 1.7.3 Is the FOSS Under Your Responsibility?

FOSS development typically involves many contributors, decentralised collaboration and a separation between contribution and decision-making. The CRA attaches obligations only to those who actually control the project.

| Role | Test | CRA consequence |
|------|------|-----------------|
| **Maintainer** | Publishes the FOSS **and** exercises primary control over its development, releases and distribution decisions | The FOSS is under their responsibility |
| **Contributor** | Contributes source code but does not control releases, roadmaps or governance decisions | The FOSS is **not** under their responsibility — the CRA does not apply to them for that project |

::: warning COMMIT ACCESS IS NOT CONTROL
The mere existence of technical permissions, such as commit access, is **not sufficient** to establish that the FOSS is under a person's responsibility. Responsibility lies with those who publish and control the project.

> **Example:** A developer — whether an individual or an employee of a company — submits a pull request containing a security patch or a new feature. The maintainers review, accept and merge it, and include it in a release. The submitter is a **contributor** and is not subject to the CRA for that project.
:::

## 1.7.4 Is It Placed on the Market? The Monetisation Tests

Once the project is established as being under your responsibility, the question is whether you supply it **in the course of a commercial activity** — which is what constitutes placing on the market.

Recital 18 CRA sets the baseline: *"the mere circumstances under which the product with digital elements has been developed, or how the development has been financed, should not be taken into account"*, and *"the provision of products with digital elements qualifying as free and open-source software that are not monetised by their manufacturers should not be considered to be a commercial activity"*.

### Summary of the tests

| Situation | Placed on the market? |
|-----------|:---------------------:|
| Charging a price for the software itself, e.g. for pre-compiled binaries | **Yes** |
| A free "community" version alongside a paid version (including open-core) | **Paid version yes; community version no** |
| Software through which the publisher monetises other products or services (ads, commissions, subscriptions, paid extra capacity) | **Yes** |
| Use conditional on processing personal data for purposes other than exclusively improving security, compatibility or interoperability | **Yes** |
| Freely downloadable software with **optional**, separately purchased professional services | **No** |
| A paid edition or enterprise version whose access includes benefits such as technical assistance or performance optimisation | **Yes** |
| A **natural person** bundling technical assistance with access, where the price only recuperates actual costs | **No** |
| Technical assistance for FOSS **not** under your responsibility, without substantially modifying it | **No** |
| Voluntary donations, including via a donation link, even where they exceed costs | **No** (unlikely to be placed on the market) |
| Donations that are de facto a condition of access to the software, essential functionalities or updates | **Yes** |
| Development paid for, sponsored or financed by a third party, where the result is openly shared and freely available | **No** |
| Publication by a not-for-profit entity whose earnings after costs all serve not-for-profit objectives | **No** |
| FOSS intended for integration by other manufacturers, not monetised by its publisher | **No** |

### Charging a price, and the community/paid split

Where the publisher charges a price for the software itself, it is placing a product on the market and is its **manufacturer**.

Many publishers offer a free "community" version alongside a paid one, with an almost identical codebase. These are treated as **different products**:

- The **paid version** is monetised and therefore placed on the market → manufacturer obligations.
- The **free/community version** is not monetised and therefore not placed on the market.

This also holds where the paid version is an *enhanced* commercial version extending the free codebase, or incorporates it into a broader product — the **open-core** model.

::: tip THE LEGAL-PERSON TWIST
If the publisher of the community version is a **legal person**, it is additionally subject to the **steward obligations** for that free version. If the publisher is a **natural person**, the free version falls entirely outside the CRA.
:::

### Monetisation of other services, or of personal data

| Example | Verdict |
|---------|---------|
| A free and open-source **marketplace application** enabling purchases, from which the publisher earns advertising revenue, commission or subscription fees | Placed on the market |
| A free and open-source **VPN** where users can pay for additional servers or dedicated IP addresses | Placed on the market |
| A free and open-source **fitness tracking app** whose use is conditional on processing personal data for targeted advertising or analytics unrelated to security, compatibility or interoperability | Placed on the market |

### Support services

Merely offering paid support alongside a FOSS project does **not** make it a commercial supply. Support services include consultancy, training and professional services relating to the use, documentation, configuration and deployment of the software.

::: info THE DECISIVE FACTOR
Is **access to the FOSS itself — including its maintenance — conditioned on remuneration**? If the software can be downloaded and installed freely and users may *optionally* buy professional services, it is not placed on the market. If access to a specific version, including benefits such as technical assistance or performance optimisation, is conditioned on payment, it is — irrespective of whether functionally equivalent software is also available free of charge under a FOSS licence.
:::

Two refinements matter in practice:

- **Natural persons and actual costs.** For a natural person, even bundling technical assistance directly with access does not make it a commercial activity where the price charged serves only the recuperation of **actual costs**. Those costs include design, development and maintenance — and expressly the person's **reasonable living expenses**. A natural person publishing FOSS and offering technical assistance to cover their costs and obtain fair remuneration is not, on that basis alone, placing it on the market.
- **Assistance for someone else's project.** A person offering technical assistance for FOSS **not under their responsibility** is not placing it on the market — unless they substantially modify it in the course of that assistance (Art. 22). A service provider helping a customer install FOSS on the customer's on-premises server, without substantial modification, is not placing it on the market.

### Donations

::: tip DONATIONS ARE BROADLY SAFE
*"Accepting donations without the intention of making a profit should not be considered to be a commercial activity"* (recital 15). Merely including a link to a donation platform is **not** an intention to make a profit — **even where the amount collected exceeds the costs** associated with design, development and provision. This includes reasonable compensation for contributors hired by a legal person, and a natural person's reasonable living expenses.

Because donations fluctuate over time, a degree of flexibility applies. FOSS supported **only** through donations is *"unlikely to be considered to be placed on the market"*.
:::

The exception is where, on an overall assessment, donations are **de facto equivalent to charging a price**:

| Pattern | Verdict |
|---------|---------|
| Downloadable releases and security updates provided **only to donors**; non-donors cannot obtain the current version | Placed on the market — the donation is a condition of access |
| Source code public, but pre-compiled binaries, regular updates and guaranteed security fixes **only for donors** | Placed on the market — donations are linked to essential aspects of the product |
| Donations tied to contractual benefits or exclusive advantages beyond community perks | Placed on the market |

### Financing and sponsorship

The fact that a third party has paid for, sponsored or otherwise financed development does **not** in itself determine whether the FOSS is placed on the market. This covers grants, bug bounties, sponsorships, service contracts and paid development work alike.

Where the result is openly shared and freely available for all to access, use, modify and redistribute, and is not otherwise monetised, it is **not** placed on the market. The company that funded the work — like any other integrator — must exercise **due diligence under Art. 13(5)** when integrating it.

### Not-for-profit entities

Where the publisher is a not-for-profit organisation *"set up in such a way that ensures that all earnings after costs are used to achieve not-for-profit objectives"* (recital 18), the FOSS it publishes is **not** placed on the market. If it meets the steward definition, it is subject to Art. 24.

> **Example:** A legal person publishes a free and open-source browser that is directly monetised via search engine partnerships, but all earnings after costs are used for not-for-profit objectives. The browser is **not** considered placed on the market; the publisher is its **steward**.

### FOSS intended for integration by other manufacturers

Where FOSS is published by an identifiable person but is intended for integration by other manufacturers into their own products, it is **not** placed on the EU market — unless the publisher also monetises it. Where it is not placed on the market, a legal person publishing it is subject to the **steward** obligations if it provides support on a sustained basis.

## 1.7.5 The Open-Source Software Steward (Art. 3(14))

::: info LEGAL BASIS
**Art. 3(14) CRA:** *"'open-source software steward' means any legal person, other than a manufacturer, who has the purpose or objective of systematically providing support on a sustained basis for the development of specific products with digital elements qualifying as free and open-source software that are intended for commercial activities, and that ensures the viability of those products."*

**Art. 24 CRA:** Obligations of the open-source software steward. **Art. 25 CRA:** Security attestation.
:::

### Requirements (cumulative)

1. **Legal person** (not a natural person)
2. **Not the manufacturer** of that specific project — i.e. it does **not** place it on the market
3. **Systematic support on a sustained basis** for its development
4. The project is **intended for commercial activities** — such as integration into commercial services or into monetised products
5. The entity **ensures the viability** of the project

### The role is per project, not per organisation

::: warning ONE ENTITY, DIFFERENT ROLES
Being a steward for one specific project does **not** make an entity a steward for everything else it publishes. The same legal entity can simultaneously be:

- the **manufacturer** of project A (which it monetises),
- the **steward** of project B (published, not monetised, intended for commercial activities), and
- subject to **no CRA obligations at all** for project C (not placed on the market and not systematically supported by it, or not intended for commercial activities).

This includes the community/paid split described in 1.7.4: the publisher is the **manufacturer of the paid version** and the **steward of the community version**.
:::

### Three tiers of sustained support — and the reporting duties that follow

All stewards must comply with Art. 24(1) and (2). How far the reporting obligations of **Art. 14(1), (3) and (8)** apply varies with the type of support provided, in accordance with **Art. 24(3)**:

| Tier | Typical support | Art. 14(1) report actively exploited vulnerabilities | Art. 14(3) report severe incidents | Art. 14(8) inform users |
|------|-----------------|:---:|:---:|:---:|
| **1 — Non-technical** | Managing branding, laying down governance rules, organising community events, collecting donations | **No** — not involved in development | **No** — provides no network and information systems for development | — |
| **2 — IT infrastructure** | Hosting source code repositories, providing version control, generating signing keys | **No** | **Yes** — severe incidents relating to that infrastructure which impact the security of products | **Where appropriate**, inform all users (e.g. a general announcement) |
| **3 — Engineering resources** | Employing developers, coordinating development work, reviewing or merging code, managing releases, handling vulnerability reports and security patches | **Yes** | **Yes** | **Where appropriate**, inform all users; where the steward has a direct relationship with impacted users, inform them **directly** |

::: tip WHAT A TIER-1 STEWARD SHOULD STILL DO
Even where a steward is not required to report actively exploited vulnerabilities, on becoming aware of one it **should share the information with the project's maintainers** in accordance with its cybersecurity policy. Maintainers and stewards should also consider **voluntary reporting under Art. 15**. Tier-2 stewards should likewise foster correct vulnerability handling and consider voluntary reporting.
:::

::: warning THE TRIGGER IS AWARENESS OF EXPLOITATION, NOT OF THE BUG
A steward's Art. 24(3) reporting obligation arises **upon becoming aware of active exploitation** — not merely because a vulnerability exists in the codebase. Because FOSS components are typically integrated downstream, a steward usually becomes aware through third-party reports: a manufacturer detects exploitation of the component inside its own product and reports it upstream, or a user or security researcher reports evidence of exploitation.
:::

### Changing status

| Change | Consequence |
|--------|-------------|
| The entity **ceases** to provide systematic support on a sustained basis | It may no longer meet the definition of steward and may cease to be subject to the corresponding obligations. It is **encouraged to communicate the change of status clearly** for that project. |
| A steward decides to **monetise** the project directly | It places the product on the market and qualifies as its **manufacturer from the date of placing on the market** — but **not** in respect of earlier versions for which it acted as steward. |

## 1.7.6 Obligations of the Steward (Art. 24–25)

### 1. Cybersecurity policy (Art. 24(1))

- Establish and implement a documented cybersecurity policy fostering the development of secure products and effective handling of vulnerabilities
- Promote cooperation with market surveillance authorities

### 2. Vulnerability handling and reporting (Art. 24(1), (3))

- Report actively exploited vulnerabilities and severe incidents **to the extent set out by the tier table in 1.7.5** — these are obligations, not voluntary acts, where the tier applies
- Facilitate coordinated vulnerability disclosure (CVD)
- Provide a contact point for vulnerability reports (SECURITY.md or equivalent)
- Consider voluntary reporting under Art. 15 where the mandatory duty does not apply

### 3. Cooperation with authorities (Art. 24(2))

- Provide documentation on request
- Assist in eliminating security risks
- Share information about vulnerabilities

### 4. Security attestation (Art. 25)

Stewards may initiate a **voluntary security attestation**: documentation of applied cybersecurity practices, evidence of vulnerability handling processes, and — optionally — third-party attestation.

## 1.7.7 Contributors, Integrators and Downstream Use

| Statement | Position under the CRA |
|-----------|------------------------|
| A person contributing source code to FOSS not under their responsibility | **Not subject to the CRA** for that project (recital 18) |
| A manufacturer integrating FOSS components into its own product | Does **not** become responsible for those components' individual CRA compliance — **even where it contributes source code to their maintenance** |
| A FOSS component being integrated into monetised products | Its own status is **unaffected**. Whether the CRA applies to it depends **solely** on whether its publisher places it on the market |
| Maintainers of FOSS not placed on the market | Bear **no obligations** towards entities that integrate their components |

What integrators **must** do for their own products:

1. Comply with the CRA for the product as a whole
2. Exercise **due diligence** on integrated components (Art. 13(5)) → [5.3 Third-Party Assessment](/en/supply-chain/third-party-assessment)
3. **Report vulnerabilities upstream** and **share security fixes** (Art. 13(6)) → [3.5 Handling Requirements](/en/vulnerability-management/handling-requirements)

## 1.7.8 Role Distinction

| Role | CRA status | Obligations |
|------|-----------|-------------|
| **Contributor** (no control over releases/governance) | No CRA role | None |
| **Maintainer, natural person, not monetising** | Out of scope | None |
| **Maintainer, natural person, monetising** | **Manufacturer** | Full Art. 13 obligations |
| **Maintainer, legal person, not monetising, project intended for commercial activities, sustained support** | **Steward** | Art. 24–25, tiered per 1.7.5 |
| **Maintainer, legal person, not monetising, no sustained support or not intended for commercial activities** | No CRA role | None |
| **Publisher of a monetised version** | **Manufacturer** of that version | Full Art. 13 obligations (and steward of the community version, if a legal person) |
| **Integrator of FOSS into own product** | **Manufacturer** of its own product | Full obligations for its own product + Art. 13(5) due diligence + Art. 13(6) upstream reporting |

## 1.7.9 Scenario Catalogue

| # | Scenario | Outcome |
|---|----------|---------|
| 1 | Individual developer publishes FOSS under their own name, no price, donation link. Companies B, C, D integrate it and donate voluntarily to keep it maintained. | **Not placed on the market.** The developer has no CRA obligations. B, C and D exercise Art. 13(5) due diligence. |
| 2 | Not-for-profit foundation F publishes a FOSS component for integration into commercial products and commits to sustained support. Companies A and B contribute developer time. | **Not placed on the market.** F is the **steward** (Art. 24). A, B and C exercise due diligence. |
| 3 | Company A develops a FOSS component for its own products, also publishes and maintains it separately, does not monetise it. B, C and D integrate it and contribute time. | **Not placed on the market.** A is **not** its manufacturer but is its **steward**. |
| 4 | Company A publishes FOSS and offers a **paid version** including technical assistance and performance optimisation. B, C, D contribute; control stays with A. | A is the **manufacturer** of the paid version (unless A is a qualifying not-for-profit, in which case it is the steward). B, C, D have no obligations for that project. |
| 5 | Company A publishes and maintains FOSS for integration by others; no price, no personal data processing, no support sales. Company B contributes code and separately offers support services independent of distribution. | A is the **steward**. B has **no obligations** under the CRA for that project. |
| 6 | A not-for-profit publishes a FOSS component with sustained support; maintenance financed by research grants; new features funded by donations and partner projects with integrating manufacturers, merged into the codebase. | The not-for-profit is the **steward**. A manufacturer that funded a feature does **not** become the manufacturer of the component; it exercises due diligence on integration. |
| 7 | A not-for-profit publishes a FOSS SDK, funded by membership fees; member employees contribute code. Manufacturers use the SDK to build products. | The not-for-profit is the **steward**. Members are **not** responsible for the SDK's compliance. Manufacturers exercise due diligence. |
| 8 | An individual publishes a FOSS library on a public package repository with a donation link; a manufacturer downloads and integrates it for free. | Neither the developer nor the package repository has obligations. The manufacturer exercises due diligence. |

## 1.7.10 Position of BAUER GROUP

### When is BAUER GROUP **not** a steward?

- Using open-source libraries as **dependencies** → manufacturer obligations for the own product only
- Contributing to OSS projects as a **contributor** → no steward role
- Publishing own code **and monetising it** → BAUER GROUP is its **manufacturer**

### When **could** BAUER GROUP be a steward?

- Publishing a FOSS component **without monetising it**, intended for integration into other parties' products, while systematically maintaining it → steward of that component
- Offering a **community version** alongside a paid version → steward of the community version, manufacturer of the paid one
- Systematically promoting and maintaining an external OSS project (own employees as maintainers, infrastructure sponsoring)
- Establishing an own foundation that manages OSS projects

::: warning ACTION REQUIRED — PER-PROJECT DETERMINATION
The steward question must be answered **project by project**, not once for the organisation. Every published FOSS repository under BAUER GROUP control requires a recorded determination: *manufacturer*, *steward*, or *no CRA role* — with the monetisation test that produced the answer, and a date.
:::

::: tip CURRENT ASSESSMENT
Based on current knowledge, BAUER GROUP primarily acts as a **manufacturer** (own code) and **user** (OSS dependencies). No steward role is currently claimed — but published repositories that are unmonetised and intended for integration by others must be reviewed against 1.7.5, since that combination is precisely what creates a steward.
:::

### Impact on the supply chain

1. **Review OSS dependencies:** is there a steward for critical dependencies?
2. **Vulnerability reports:** stewards report actively exploited vulnerabilities where tier 3 applies — track those channels
3. **Security attestations:** prefer attested software when evaluating OSS components
4. **Risk assessment:** OSS without a steward or an active community carries higher risk

> See: [Supply Chain Security](/en/supply-chain/) and [Third-Party Assessment](/en/supply-chain/third-party-assessment)

## 1.7.11 Conformity Assessment Relief for FOSS (Art. 32(5))

::: tip IMPORTANT PRODUCTS THAT ARE FOSS
Important products with digital elements of class I or II that **qualify as FOSS and are placed on the market** may follow the conformity assessment procedures of the **default category** under Art. 32(5) — they are not pushed into the stricter regimes by their classification alone. See [7.1 Product Classification](/en/conformity/product-classification).
:::

## 1.7.12 Penalties

| Violation | Maximum penalty |
|-----------|-----------------|
| Non-fulfilment of Art. 24 obligations | Up to EUR 5 million or 1% of annual turnover |

*The special role and non-commercial character of steward activity is taken into account when determining penalties.*

## 1.7.13 Relevant Developments

- The Commission may adopt **implementing acts** further specifying the security attestation (Art. 25)
- Harmonised standards relevant to stewards are under development
- Further Commission guidance under Art. 26 remains possible

> Source and legal status of the interpretations on this page: [Commission Guidance on the CRA](/en/clarifications/commission-guidance).
