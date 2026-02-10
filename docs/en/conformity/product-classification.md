# 7.1 Product Classification

## 7.1.1 Overview

Every product with digital elements must be classified into a CRA risk category under the Cyber Resilience Act (CRA). The classification determines the required conformity assessment procedure. The CRA distinguishes four categories: **Standard**, **Class I** (Important), **Class II** (Important), and **Critical**.

## 7.1.2 Classification Decision Tree

The following decision tree outlines the systematic approach to product classification:

```
Is the product listed in Annex IV?
├── Yes → CRITICAL (EUCC required)
└── No
    └── Is the product listed in Annex III?
        ├── Yes → Which class?
        │   ├── Class II → CLASS II (Module B+C or H)
        │   └── Class I → CLASS I (Module A* or B+C)
        └── No → STANDARD (Module A)
```

*\* Module A only where harmonised standards are applied in full*

## 7.1.3 Product Categories

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

**Conformity assessment:** [European cybersecurity certificate (EUCC)](/en/conformity/eucc) at assurance level "substantial" or higher

**Examples from Annex IV:**

- Hardware security modules (HSM)
- Smart cards and similar devices (incl. secure elements)
- Smart card readers
- Sensors and actuators for robots and machine controllers
- Smart meter gateways

## 7.1.4 Conformity Assessment by Category

| Category | Module A (Self) | Module B+C (Type) | Module H (Quality) | EUCC |
|----------|:-:|:-:|:-:|:-:|
| Standard | ✅ | - | - | - |
| Class I | ✅* | ✅ | - | - |
| Class II | - | ✅ | ✅ | - |
| Critical | - | - | - | ✅ |

*\* Only when applying harmonised standards or when conforming with EU cybersecurity certification*

## 7.1.5 Relevant Product Types for BAUER GROUP

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

## 7.1.6 Classification Process

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

## 7.1.7 Documentation of the Classification

For each product, the classification is documented in the [Product Description](/en/technical-documentation/product-description):

1. **Review against Annex III and IV** -- Systematic comparison against all categories
2. **Rationale** -- Why this classification applies (with reference to the Annex)
3. **Conformity Assessment procedure** -- Which module is applied
4. **Date** -- When the classification was carried out
5. **Responsible person** -- Who carried out the classification
