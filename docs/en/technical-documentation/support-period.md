# 6.4 Support & Lifecycle

## 6.4.1 Legal Basis

Pursuant to Art. 13(8) CRA, the manufacturer must determine and publish the Support Period for each product. During this period, security updates must be provided.

::: info LEGAL BASIS
**Art. 13(8) CRA:** *"When placing a product with digital elements on the market, and for the expected product lifetime or for a period of five years from the placing of the product on the market, whichever is shorter, manufacturers shall ensure that vulnerabilities of that product, including its components, are handled effectively and in accordance with the essential cybersecurity requirements set out in Part II of Annex I."*

**Art. 13(8) CRA (criteria):** When determining the support period, the manufacturer shall take into account in particular the reasonable expectations of users, the nature of the product including its intended purpose, and relevant Union law determining the lifetime of products with digital elements.

**Art. 13(19) CRA:** The end date of the support period — at least the month and year — must be indicated at the time of purchase in a clear and understandable manner, and a notification must be displayed to users once the support period expires, where technically feasible.

**Annex II No. 5 CRA:** The support period is part of the mandatory user information accompanying the product.
:::

## 6.4.2 Five Years Is a Floor, Not a Default

::: danger CORRECTED PRACTICE
The support period reflects the **expected use time** of the product — the period during which it is expected to be in use. The five-year figure operates **only as a safeguard**, ensuring that vulnerabilities are handled for a sufficiently long period.

Recital 60 CRA is explicit: products reasonably expected to be in use for **longer** than five years must accordingly have **longer** support periods. Declaring five years by default across a portfolio is therefore a compliance gap, not a safe minimum.
:::

The direction of travel runs both ways:

| Expected use time | Support period |
|-------------------|----------------|
| Longer than five years | **The expected use time** — longer than five years |
| Five years or more | At least five years, matched to the expected use time |
| Demonstrably shorter than five years | **The expected use time** — the five-year floor does not apply |

### Criteria for determining the expected use time

| Criterion | Source |
|-----------|--------|
| Reasonable expectations of users | Art. 13(8) — named criterion |
| The nature of the product, including its intended purpose | Art. 13(8) — named criterion |
| Relevant Union law determining the lifetime of products | Art. 13(8) — named criterion |
| Support periods of products offering similar functionality placed on the market by other manufacturers | Art. 13(8) — additional criterion |
| Availability of the operating environment | Art. 13(8) — additional criterion |
| Support periods of integrated third-party components that provide core functions | Art. 13(8) — additional criterion |
| Relevant guidance from the CRA administrative cooperation group (ADCO) and the Commission | Art. 13(8) — additional criterion |

All criteria are to be applied in a way that ensures **proportionality**.

### Support periods per product category

| Product Category | Support Period | Determining factor | Examples |
|------------------|:--------------:|--------------------|----------|
| Software products supplied to customers | **≥ 5 years** per version placed on the market | Reasonable user expectations; availability of the operating environment | On-premises deployments, appliances |
| Container images | **≥ 5 years** | Reasonable user expectations; base-image support | Docker-based services |
| Libraries / Packages | **≥ 5 years** from the version placed on the market | Downstream integration cycles | NPM packages, NuGet packages |
| Firmware (IoT Consumer) | **5 years** or expected device lifetime, whichever is **longer** | Physical durability; user expectations | ESP32-based devices |
| Firmware (Industrial) | **10 years** | Expected use time of industrial controllers | STM32, Zephyr RTOS |

::: warning DOCUMENT THE DERIVATION, NOT JUST THE NUMBER
Market surveillance authorities can ask **why** a given support period was chosen. The product file must record which Art. 13(8) criteria were applied and what expected use time they produced — not merely the resulting date.
:::

::: warning NOTE ON DETERMINATION
The determination of the support period must be made **prior to placing on the market** and cannot be shortened thereafter. An extension is possible at any time and is recommended if the actual use time exceeds the original estimate.
:::

## 6.4.3 Iteratively Developed Software: One Support Period per Version

Software products are typically released iteratively, and substantially modified versions may be placed on the market frequently. The support period must be understood in light of that development model.

::: info THE RULE
Each **substantially modified version** of a software product placed on the market must have its **own declared support period** complying with Art. 13(8) — including the five-year floor, unless the expected use time of that version is demonstrably shorter.

This follows from the fact that a substantial modification constitutes a **new placing on the market** → [1.8 Substantial Modifications](/en/overview/substantial-modifications).
:::

### The Art. 13(10) relief for software

Art. 13(10) CRA provides flexibility. A manufacturer may comply with the vulnerability handling requirement in **point (2) of Annex I Part II** — addressing and remediating vulnerabilities — **only for the version last placed on the market**, provided that users of earlier versions:

1. have access to the latest version **free of charge**, and
2. **do not incur additional costs** to adjust the hardware and software environment in which they use the original version.

### What "additional costs" means

The concept is interpreted in a **practical and proportionate** manner, taking into account normal and expected practices in software maintenance and operation.

| **Not** additional costs — reasonable operational effort | **Are** additional costs |
|---|---|
| Personnel time | Mandatory purchase of new hardware |
| Routine testing | Infrastructure replacement |
| Configuration adjustments | Fundamental changes to the operating environment |
| Upgrades of underlying software dependencies necessary to address end-of-life components or known security vulnerabilities | |

### What still applies to earlier versions

::: warning ART. 13(10) IS NARROW
The relief covers **only** point (2) of Annex I Part II. The manufacturer remains subject to:

- **all other vulnerability handling requirements** of Annex I Part II — including, for all subsequent substantially modified versions, maintaining a **coordinated vulnerability disclosure policy** and **measures to facilitate the sharing of information** about potential vulnerabilities (recital 40);
- the **reporting obligations of Art. 14**;
- Art. 13(19): where remediation for earlier versions is discontinued, users who have not upgraded are expected to be **informed**, where technically feasible.
:::

::: tip PAID SUPPORT FOR OLD VERSIONS REMAINS POSSIBLE
Where users can upgrade to the latest version without additional costs, manufacturers may nevertheless **choose** to continue remediating vulnerabilities in earlier versions — including on a paid basis or under other commercial arrangements. The CRA does not require security updates for such earlier versions to be free of charge.
:::

### Worked examples

| Scenario | Outcome |
|----------|---------|
| A smartphone model is placed on the market with a declared support period of X years. During it, the manufacturer releases substantially modified OS versions that users can install free of charge without new hardware. | The manufacturer may remediate vulnerabilities only in the **latest** OS version for that model. Other vulnerability handling duties — CVD, information sharing — continue for the whole support period. |
| An enterprise software product is re-released every few months as a substantially modified version. Each is placed on the market with its own declared support period. Upgrading requires testing and configuration adjustments, but no new hardware or infrastructure change. | The manufacturer may rely on Art. 13(10) to discontinue remediation for earlier versions once users can upgrade, while continuing to meet the other requirements for all subsequent versions. |

## 6.4.4 Substantial Modifications and the Support Period

A substantial modification is a new placing on the market — but that does **not** automatically reset or extend the support period.

::: info THE DECISIVE QUESTION
Does the substantial modification **affect the factors that originally determined the product's expected use time**?

A substantial modification requires a **reassessment** against the Art. 13(8) criteria. It does not, by itself, produce a new support period.
:::

| Situation | Effect |
|-----------|--------|
| The modification does **not** affect those factors | The Art. 13(8) criteria continue to indicate the same expected use time. The support period of the modified product **aligns with the remaining expected use time** as originally determined — including where that remainder is now **less than five years**. |
| The modification **does** affect those factors | The manufacturer **recalculates** the support period to reflect the new expected use time. |

### Worked examples

| Scenario | Outcome |
|----------|---------|
| A robot vacuum cleaner has an expected use time of X years determined by the physical durability and wear characteristics of its hardware. After Y years, a software update qualifying as a substantial modification adds new cleaning modes and navigation features. | Hardware durability and user expectations are unchanged → **no change**; the support period aligns with the remaining expected use time. |
| Industrial machinery with a cloud back-end (an RDPS) has an expected use time of X years driven by hardware durability. After Y years the manufacturer rearchitects the back-end with new APIs and data flows — a substantial modification — without altering the nature of the product or user expectations. | **No change**; the support period aligns with the remaining expected use time. |
| A PLC's expected use time was driven by hardware durability. Several years later the manufacturer replaces its embedded computing platform — processor, memory and runtime environment — with a new generation designed for a significantly longer operational lifetime. | User expectations and the nature of the product change → the criteria indicate a **longer** expected use time → the manufacturer **recalculates** the support period. |

::: tip REPAIRS DO NOT TRIGGER RECALCULATION
Operations of refurbishment, maintenance or repair are generally **not** substantial modifications and therefore do not, in themselves, require the support period to be reassessed → [1.8 Substantial Modifications](/en/overview/substantial-modifications).
:::

## 6.4.5 Lifecycle Phases

Each product passes through three defined lifecycle phases:

```
┌──────────────────────────────────────────────────────────────┐
│  Phase 1: ACTIVE SUPPORT                                     │
│                                                              │
│  Full support: Features + Security + Bug Fixes               │
│  Duration: Until the next major release or phase transition  │
│  SLA: Security updates per Patch Management (→ Ch. 3)        │
├──────────────────────────────────────────────────────────────┤
│  Phase 2: SECURITY SUPPORT                                   │
│                                                              │
│  Security updates only: CRITICAL and HIGH CVEs               │
│  Duration: Until end of support (expected use time)          │
│  SLA: CRITICAL ≤ 48h, HIGH ≤ 7 days                         │
├──────────────────────────────────────────────────────────────┤
│  Phase 3: END OF LIFE (EOL)                                  │
│                                                              │
│  No further updates                                          │
│  Users are prompted to migrate                               │
│  Announced 12 months in advance                              │
│  Art. 13(19) end-of-support notification displayed           │
│  SBOM + Signatures + Documentation remain archived           │
└──────────────────────────────────────────────────────────────┘
```

### Transition Between Phases

| Transition | Trigger | Communication |
|------------|---------|---------------|
| Active → Security | New major release OR management decision | Release Notes + SECURITY.md update |
| Security → EOL | Support Period expired | 12-month advance notice (see EOL process) + Art. 13(19) in-product notification |

## 6.4.6 EOL Process

### Announcement Schedule

| Timepoint | Action | Channel | Responsible |
|-----------|--------|---------|-------------|
| **12 months before EOL** | EOL announcement with planned date | GitHub Advisory + Release Notes + SECURITY.md | Product Owner |
| **6 months before EOL** | Reminder + publish migration guide | GitHub Advisory + Documentation | Product Owner |
| **3 months before EOL** | Final reminder + update product page | GitHub Advisory + E-mail (known customers) | Product Owner |
| **EOL date** | Final version marked; Art. 13(19) notification displayed where technically feasible | In-product notification + Release Notes + SECURITY.md | DevOps Lead |

::: danger REPORTING DOES NOT END AT EOL
The Annex I Part II vulnerability handling obligations run for the support period. The **Art. 14 reporting obligations continue after a product is no longer supported**. An actively exploited vulnerability discovered in an end-of-life product still triggers the 24 h / 72 h reporting duty → [4.3 ENISA Reporting Process](/en/incident-response/enisa-reporting).
:::

### Obligations After EOL

Even after reaching EOL, the following retention obligations apply pursuant to Art. 13(13) CRA:

| Obligation | Duration | Measure |
|------------|----------|---------|
| Technical Documentation archived | **10 years** after placing on the market | Git repository (Protected Branch) |
| SBOMs of all versions available | **10 years** after placing on the market | Release assets + SBOM archive |
| Signatures verifiable | **10 years** after placing on the market | Cosign Public Keys archived |
| Existing releases downloadable | **10 years** after placing on the market | GitHub Releases / Registry |
| Declaration of Conformity available | **10 years** after placing on the market | Git repository |

::: tip PUBLIC ARCHIVES OF HISTORICAL VERSIONS
Art. 13(11) CRA permits public software archives giving users access to historical versions. Where BAUER GROUP maintains them, users must be **clearly and accessibly informed of the risks of using unsupported software**.
:::

## 6.4.7 Versioning Strategy

BAUER GROUP uses [Semantic Versioning 2.0.0](https://semver.org/):

```
MAJOR.MINOR.PATCH[-PRERELEASE][+BUILD]

MAJOR – Incompatible API changes (new support cycle)
MINOR – Backward-compatible feature additions
PATCH – Backward-compatible bug fixes / security updates
```

**Security updates** are always published as **PATCH** releases and are backward-compatible. If a breaking change is unavoidable to remediate a vulnerability, a workaround for the current MAJOR version is provided in parallel.

::: warning VERSION NUMBERS DO NOT DECIDE SUBSTANTIALITY
A MINOR release can be a [substantial modification](/en/overview/substantial-modifications) and a MAJOR release may not be. The semantic version communicates API compatibility; the substantial-modification test asks about cybersecurity risk and intended purpose. Both determinations must be made independently at every release.
:::

## 6.4.8 Product Catalogue — Support Status

::: warning PRODUCT-SPECIFIC
The following product catalogue must be maintained for each CRA-relevant product of BAUER GROUP. The table is updated upon each major release, phase transition, substantial modification, or EOL event.

**Responsible:** Product Owner in coordination with Security Lead
:::

| Product | Type | Current Version | Support Phase | Support Start | Support End | Expected use time rationale | Next Review |
|---------|------|-----------------|---------------|:-------------:|:-----------:|-----------------------------|:-----------:|
| *[Enter product name]* | *Software* | *vX.Y.Z* | *Active Support* | *YYYY-MM-DD* | *YYYY-MM-DD* | *[Art. 13(8) criteria applied]* | *YYYY-MM-DD* |
| *[Enter product name]* | *Container* | *vX.Y.Z* | *Security Support* | *YYYY-MM-DD* | *YYYY-MM-DD* | *[Art. 13(8) criteria applied]* | *YYYY-MM-DD* |
| *[Enter product name]* | *Firmware* | *vX.Y.Z* | *Active Support* | *YYYY-MM-DD* | *YYYY-MM-DD* | *[Art. 13(8) criteria applied]* | *YYYY-MM-DD* |

::: tip INSTRUCTIONS
For each product within the CRA scope (→ Ch. 1.1), a row must be entered in this table. The **Support Start** corresponds to the date of placing on the market — for standalone software, the date the version was first supplied for distribution or use (→ [1.1 Scope](/en/overview/scope)). The **Support End** must correspond to the expected use time, and at least five years after the Support Start unless the expected use time is demonstrably shorter.
:::

## 6.4.9 User Information

Pursuant to Art. 13(19) and Annex II No. 5 CRA, users must be informed about the support period. The information must be provided at the following locations:

| Information Location | Content | CRA Obligation |
|----------------------|---------|----------------|
| **At the time of purchase** | End date of the support period, at least month and year, clear and understandable | Art. 13(19) |
| **Product documentation** (at placing on the market) | Support period, support phases, EOL date | Art. 13(8), Annex II No. 5 |
| **In-product notification** (at expiry) | Support period has ended, where technically feasible | Art. 13(19) |
| **SECURITY.md** (per repository) | Supported versions, reporting channels | Annex I Part II |
| **Product page / README** | Current support phase, next EOL | Annex II No. 5 |
| **Release Notes** (at phase transition) | Transition Active → Security, EOL announcement | Best Practice |
| **User Information Template** | Complete security notices | Annex II |

The template for user information can be found under [Annex: User Information](/en/templates/product-security-info).

## 6.4.10 Process Integration

The lifecycle process is integrated into the existing CI/CD workflows:

| Event | Automation | Workflow |
|-------|------------|----------|
| New release | Generate SBOM, sign, attach as release asset | `cra-release.yml` |
| Substantially modified release | Declare a new support period for that version | Manual + catalogue update |
| Major release | Set support phase of predecessor to Security Support | Manual + catalogue update |
| EOL reached | Update SECURITY.md, deprecation notice in registry, in-product notification | Manual + catalogue update |
| Support review (semi-annual) | Review product catalogue, revalidate expected use times, plan phase transitions | Manual |

> Source and legal status of the interpretations on this page: [Commission Guidance on the CRA](/en/clarifications/commission-guidance).
