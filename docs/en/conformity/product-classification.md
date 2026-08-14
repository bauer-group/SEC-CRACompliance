# 7.1 Product Classification

## 7.1.1 Overview

Every product with digital elements must be classified into a CRA risk category under the Cyber Resilience Act (CRA). The classification determines the required conformity assessment procedure. The CRA distinguishes four categories: **Standard**, **Class I** (Important), **Class II** (Important), and **Critical**.

::: info LEGAL BASIS
**Art. 7(1) CRA:** Products with digital elements that have the **core functionality** of a product category set out in **Annex III** are *important products with digital elements*, divided into class I and class II.

**Art. 8(1) CRA:** Products with digital elements that have the core functionality of a product category set out in **Annex IV** are *critical products with digital elements*.

**Commission Implementing Regulation (EU) 2025/2392** sets out the technical descriptions of the categories of important and critical products.

**Art. 64(3) CRA:** Non-compliance with the conformity assessment obligations of Art. 32 may trigger administrative fines.
:::

::: tip THE TERM "DEFAULT"
*Default* is not a term defined in the CRA. It is used here — as in the Commission guidance — for products that do **not** have the core functionality of a category in Annex III or IV, and which are consequently subject to the conformity assessment regime of Art. 32(1). This handbook also calls that category **Standard**.
:::

## 7.1.2 Core Functionality — The Decisive Concept

Classification does **not** turn on what a product *can do*. It turns on its **core functionality**. The CRA does not define the term; the Commission guidance does.

::: info THE DEFINITION
The core functionality of a product with digital elements refers to that product's **main features and technical capabilities, without which it would not be able to meet its intended purpose**.

It is assessed in light of the product's specific context and conditions of use, taking into account — among others — the information the manufacturer supplies in the **instructions for use**, in **promotional or sales materials and statements**, and in the **technical documentation**.
:::

### Rule 1 — Ancillary functions do not change the classification

Products are rarely restricted to their core functionality; almost all perform additional functions. The fact that a product performs functions **other than or additional to** those described for an important or critical category does **not** prevent it from having such a core functionality.

Conversely — and this is stated expressly in Art. 7(1) for important products, with the same logic applying to critical ones:

::: warning MERE INTEGRATION IS NOT ENOUGH
The **mere integration** of an important or critical product with digital elements does **not** in itself render the integrating product important or critical.

> **Example:** A smartphone integrates an operating system providing the functionalities described in Annex I, point 11, to Implementing Regulation (EU) 2025/2392. The operating system manages hardware resources and executes applications — but the smartphone **as a whole** has a different core functionality: enabling users to communicate and access information and services. The smartphone therefore does not have the core functionality of an operating system.
:::

### Rule 2 — Substantially exceeding or falling short

A product may resemble an important or critical category, or belong to the same general product family, yet its core functionality may **substantially exceed** or **substantially fall short** of that category.

| Case | Example | Verdict |
|------|---------|---------|
| **Exceeds** | **SOAR** software can collect, analyse and correlate data from multiple sources and present it as actionable security information — the functions of a SIEM. But its core functionality substantially exceeds a SIEM, with incident response among its core technical capabilities | Generally **not** considered to have the core functionality of a SIEM system |
| **Falls short** | **Log collection and visualisation tools** ingest log data and present basic dashboards of system events. They support security monitoring but perform no data correlation and provide no actionable security insights | Generally **not** considered to have the core functionality of a SIEM system |
| **Neither** | A product whose additional functionalities merely **complement or enhance** a core functionality that itself corresponds to an important or critical category | **Retains** that core functionality and is classified accordingly |

The assessment is made on the product's main features and technical capabilities, considered **objectively** in light of its intended purpose — **not** on how it is described or marketed where that description does not reflect its actual technical characteristics.

::: danger MISREPRESENTATION IS NOT AVAILABLE
A manufacturer **may not** misrepresent the core functionality of its product so as to escape the conformity assessment regime applicable to important or critical products — for instance by overly emphasising or downplaying the role of certain functionalities so that the product appears to substantially exceed or fall short of a given core functionality.

**Clear inconsistencies between promotional materials, instructions for use and technical documentation** are precisely what market surveillance authorities will look for.
:::

### Rule 3 — Exactly one core functionality

::: warning ONE PRODUCT, ONE CORE FUNCTIONALITY
A product with digital elements may **not have more than one core functionality** for the purposes of determining the applicable conformity assessment regime.

Under Annex VII, the technical documentation must describe the product's intended purpose and the conformity assessment procedure followed. The **core functionality must therefore be clearly identified** — this is what enables the correct conformity assessment regime to be identified and allows market surveillance authorities to verify that the Regulation is applied correctly.
:::

### Rule 4 — Separately available modules are separate products

Some products are placed on the market as a single product but are composed of **distinct modules with separate functionalities**.

| Situation | Classification level |
|-----------|---------------------|
| The manufacturer **also makes the modules available separately** — separate purchase, licensing or subscription | Each module is a **standalone product** in its own right, classified on **its own** core functionality |
| Modules supplied **solely as components** of an integrated product and not made available separately | Core functionality is determined at the level of the **integrated product** |

> **Example:** A manufacturer places a unified security suite on the market combining a SIEM, an intrusion detection system and an analytics module, and also offers each module by separate subscription. Each module is a distinct product: the **SIEM module** falls under the regime for important products of **class I**; the **intrusion detection system** under **class II** (*Firewalls, intrusion detection and prevention systems*); the **analytics module** under the **default** regime, as its core functionality matches no important or critical category.

### Rule 5 — FOSS relief (Art. 32(5))

Important products of class I or II that **qualify as free and open-source software and are placed on the market** may follow the conformity assessment procedures of the **default category** under Art. 32(5) → [1.7 Free & Open-Source Software and the Steward](/en/overview/open-source-steward).

## 7.1.3 Classification Decision Tree

The following decision tree outlines the systematic approach to product classification:

```
STEP 0 — Determine the product's ONE core functionality (→ 7.1.2)
         Main features and technical capabilities without which the
         product could not meet its intended purpose. Ancillary and
         integrated functions do not count.
         │
         ▼
Does that core functionality match a category in Annex IV?
├── Yes → CRITICAL (Module B+C or H; EUCC only after delegated act under Art. 8(1))
└── No
    └── Does it match a category in Annex III?
        ├── Yes → Which class?
        │   ├── Class II → CLASS II (Module B+C or H)
        │   │              FOSS placed on the market → default regime (Art. 32(5))
        │   └── Class I  → CLASS I (Module A* or B+C)
        │                  FOSS placed on the market → default regime (Art. 32(5))
        └── No → STANDARD / DEFAULT (Module A)
```

*\* Module A only where harmonised standards are applied in full*

## 7.1.4 Product Categories

### Category: Standard (Default)

**Conformity assessment:** Internal control (Module A) -- Self-assessment

The majority of products fall into this category. The manufacturer carries out the conformity assessment themselves.

**Typical Products:**

- Standard web applications
- Internal tools and utilities
- Non-critical container images
- Simple IoT sensors

### Class I (Annex III)

**Conformity assessment:** [Internal control (Module A)](/en/conformity/self-assessment) with application of harmonised standards OR [EU type examination (Module B+C)](/en/conformity/module-bc)

**Examples from Annex III:**

- Identity management systems and software for privileged access
- Browsers (standalone)
- Password managers
- Software for searching, removing, and quarantining malware
- VPN products
- Network management systems
- SIEM systems
- Boot managers
- Firewalls, IDS/IPS (non-industrial)
- Routers, modems (for internet access)
- Microcontrollers with security-relevant functions
- Operating systems (not for server/desktop Class II)

### Class II (Annex III)

**Conformity assessment:** [EU type examination (Module B+C)](/en/conformity/module-bc) OR [Comprehensive quality assurance (Module H)](/en/conformity/module-h)

**Examples from Annex III:**

- Hypervisors and container runtime environments
- Firewalls and IDS/IPS for industrial use
- Tamper-resistant microcontrollers/microprocessors
- Operating systems for servers, desktops, mobile
- Public key infrastructure and certificate issuers
- Industrial automation and control systems (IACS)
- Industrial IoT devices (not subject to other sectoral regulation)

### Category: Critical (Annex IV)

**Conformity assessment (current):** [EU type examination (Module B+C)](/en/conformity/module-bc) or [Comprehensive quality assurance (Module H)](/en/conformity/module-h) pursuant to Art. 32(3) CRA.

**Conformity assessment (conditional, future):** [European cybersecurity certificate (EUCC)](/en/conformity/eucc) at assurance level "substantial" or higher — mandatory only once the EU Commission adopts a delegated act under Art. 8(1) CRA naming the product.

::: info EUCC NOT AUTOMATICALLY MANDATORY
For Annex IV products, the EUCC is **not automatically** required. Under Art. 8(1) CRA the Commission may trigger the EUCC obligation by delegated act; **as of June 2026 this has not happened**. Until then, the standard conformity assessment (Module B+C or H) under Art. 32(3) CRA applies.
:::

**Examples from Annex IV:**

- Hardware security modules (HSM)
- Smart cards and similar devices (incl. secure elements)
- Smart card readers
- Sensors and actuators for robots and machine controllers
- Smart meter gateways

## 7.1.5 Conformity Assessment by Category

| Category | Module A (Self) | Module B+C (Type) | Module H (Quality) | EUCC |
|----------|:-:|:-:|:-:|:-:|
| Standard | ✅ | - | - | - |
| Class I | ✅* | ✅ | - | - |
| Class II | - | ✅ | ✅ | - |
| Critical | - | ✅ | ✅ | ⚠️† |

*\* Only when applying harmonised standards or when conforming with EU cybersecurity certification*

*† EUCC is **not currently mandatory** for critical products. It becomes binding only once the Commission adopts a delegated act under Art. 8(1) CRA. Until then, Module B+C or H applies under Art. 32(3) CRA (as of June 2026).*

::: tip AI Act Synergy
Products listed in **Annex III of the AI Act** as high-risk AI systems may also appear in CRA Annex III (e.g. IACS, safety components). When a product is classified under both regulations, the **stricter conformity assessment** applies. Coordinate classification decisions between CRA and AI Act teams.
:::

::: tip Scope Checker
Use the interactive [Scope Checker](/en/overview/scope-checker) to walk through the full classification process step by step, including effort estimates per product class.
:::

## 7.1.6 Relevant Product Types for BAUER GROUP

### Review against Annex III (Important Products)

| Annex III Category | Applicable to BAUER GROUP? | Rationale |
|--------------------|----------------------------|-----------|
| Identity Management Systems | To be reviewed | If IAM solutions are offered |
| Password Managers | To be reviewed | If credential management is offered |
| VPN Products | To be reviewed | If VPN solutions are offered |
| Network Management Systems | To be reviewed | If network tools are offered |
| Firewalls, IDS/IPS | To be reviewed | If security products are offered |
| Routers, Modems | To be reviewed | If network hardware with firmware |
| Microcontrollers (security-relevant) | **Likely yes** | ESP32/STM32 firmware with security-relevant functions |
| Operating Systems | To be reviewed | If OS-level products |
| Container Runtime | No (as a rule) | We use containers but do not offer a runtime |
| Hypervisor | No (as a rule) | We use hypervisors but do not offer one |
| Industrial IoT Devices | **Likely yes** | If IoT devices for industrial use |

### Review against Annex IV (Critical Products)

| Annex IV Category | Applicable to BAUER GROUP? | Rationale |
|-------------------|----------------------------|-----------|
| Hardware Security Modules (HSM) | No (as a rule) | We use HSMs but do not manufacture them |
| Smartcards / Secure Elements | No (as a rule) | |
| Smart Meter Gateways | To be reviewed | If energy products |

### Typical Classification for BAUER GROUP Products

| Product Type | Expected Class | Assessment Procedure |
|-------------|----------------|----------------------|
| Standard web application | Standard | Module A |
| REST API | Standard | Module A |
| Container image (microservice) | Standard | Module A |
| NPM/NuGet Library | Standard | Module A |
| ESP32 IoT sensor (non-safety-critical) | Standard | Module A |
| ESP32/STM32 industrial controller | Class I | Module A* or B+C |
| Firmware with authentication function | Class I | Module A* or B+C |
| Network router with firmware | Class I | Module A* or B+C |

## 7.1.7 Classification Process

The following process must be carried out for each product:

### 1. Functional Review

Verify whether the product fulfils one of the functions listed in Annex III or IV. Systematically compare against all categories.

### 2. Intended Purpose

Consider the intended purpose:

- Is the product used in critical infrastructure?
- Does it process sensitive/personal data?
- Does it have network functionality?
- Could a compromise cause physical damage?

### 3. Document the Classification

Use the template [Risk Assessment](/en/templates/risk-assessment) to document the classification decision.

::: tip RECOMMENDATION
When in doubt, choose the higher category. A conservative classification is regulatorily safer than one that is too low.
:::

## 7.1.8 Documentation of the Classification

For each product, the classification is documented in the [Product Description](/en/technical-documentation/product-description):

1. **Review against Annex III and IV** -- Systematic comparison against all categories
2. **Rationale** -- Why this classification applies (with reference to the Annex)
3. **Conformity Assessment procedure** -- Which module is applied
4. **Date** -- When the classification was carried out
5. **Responsible person** -- Who carried out the classification

> Source and legal status of the interpretations in section 7.1.2: [Commission Guidance on the CRA](/en/clarifications/commission-guidance).
