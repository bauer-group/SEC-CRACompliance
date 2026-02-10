# 6.4 Support & Lifecycle

## 6.4.1 Legal Basis

Pursuant to Art. 13(8) CRA, the manufacturer must determine and publish the Support Period for each product. During this period, security updates must be provided.

::: info LEGAL BASIS
**Art. 13(8) CRA:** *"The manufacturer shall determine the expected product lifetime. When determining the support period, the manufacturer shall take into account in particular the reasonable expectations of users, the nature of the product, including its intended purpose, and the relevant Union law on determining the lifetime of products with digital elements."*

**Art. 13(8) subpara. 2 CRA:** *"The support period shall be at least five years from the placing on the market of the product."*

**Annex II No. 5 CRA:** The Support Period is part of the mandatory user information that must accompany the product.
:::

## 6.4.2 Minimum Support Period

The CRA prescribes a minimum Support Period of **5 years**. For product categories with a longer expected useful life, BAUER GROUP establishes longer periods:

| Product Category | Minimum Support | Justification | Examples |
|------------------|:---------------:|---------------|----------|
| Software products (Web, API) | **5 years** | CRA minimum | Microservices, web apps |
| Container images | **5 years** | CRA minimum | Docker-based services |
| Libraries / Packages | **5 years** from last major release | CRA minimum | NPM packages, NuGet packages |
| Firmware (IoT Consumer) | **5 years** or expected device lifetime | Whichever is longer | ESP32-based devices |
| Firmware (Industrial) | **10 years** | Expected useful life of industrial controllers | STM32, Zephyr RTOS |

::: warning NOTE ON DETERMINATION
The determination of the Support Period must be made **prior to placing on the market** and cannot be shortened thereafter. An extension is possible at any time and is recommended if the actual useful life exceeds the original estimate.
:::

## 6.4.3 Lifecycle Phases

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
│  Duration: Until end of support (minimum 5 years total)      │
│  SLA: CRITICAL ≤ 48h, HIGH ≤ 7 days                         │
├──────────────────────────────────────────────────────────────┤
│  Phase 3: END OF LIFE (EOL)                                  │
│                                                              │
│  No further updates                                          │
│  Users are prompted to migrate                               │
│  Announced 12 months in advance                              │
│  SBOM + Signatures + Documentation remain archived           │
└──────────────────────────────────────────────────────────────┘
```

### Transition Between Phases

| Transition | Trigger | Communication |
|------------|---------|---------------|
| Active → Security | New major release OR management decision | Release Notes + SECURITY.md update |
| Security → EOL | Support Period expired | 12-month advance notice (see EOL process) |

## 6.4.4 EOL Process

### Announcement Schedule

| Timepoint | Action | Channel | Responsible |
|-----------|--------|---------|-------------|
| **12 months before EOL** | EOL announcement with planned date | GitHub Advisory + Release Notes + SECURITY.md | Product Owner |
| **6 months before EOL** | Reminder + publish migration guide | GitHub Advisory + Documentation | Product Owner |
| **3 months before EOL** | Final reminder + update product page | GitHub Advisory + E-mail (known customers) | Product Owner |
| **EOL date** | Final version marked, no further updates | Release Notes + SECURITY.md update | DevOps Lead |

### Obligations After EOL

Even after reaching EOL, the following retention obligations apply pursuant to Art. 10(13) CRA:

| Obligation | Duration | Measure |
|------------|----------|---------|
| Technical Documentation archived | **10 years** after placing on the market | Git repository (Protected Branch) |
| SBOMs of all versions available | **10 years** after placing on the market | Release assets + SBOM archive |
| Signatures verifiable | **10 years** after placing on the market | Cosign Public Keys archived |
| Existing releases downloadable | **10 years** after placing on the market | GitHub Releases / Registry |
| Declaration of Conformity available | **10 years** after placing on the market | Git repository |

## 6.4.5 Versioning Strategy

BAUER GROUP uses [Semantic Versioning 2.0.0](https://semver.org/):

```
MAJOR.MINOR.PATCH[-PRERELEASE][+BUILD]

MAJOR – Incompatible API changes (new support cycle)
MINOR – Backward-compatible feature additions
PATCH – Backward-compatible bug fixes / security updates
```

**Security updates** are always published as **PATCH** releases and are backward-compatible. If a breaking change is unavoidable to remediate a vulnerability, a workaround for the current MAJOR version is provided in parallel.

## 6.4.6 Product Catalogue — Support Status

::: warning PRODUCT-SPECIFIC
The following product catalogue must be maintained for each CRA-relevant product of BAUER GROUP. The table is updated upon each major release, phase transition, or EOL event.

**Responsible:** Product Owner in coordination with Security Lead
:::

| Product | Type | Current Version | Support Phase | Support Start | Support End | Next Review |
|---------|------|-----------------|---------------|:-------------:|:-----------:|:-----------:|
| *[Enter product name]* | *Software* | *vX.Y.Z* | *Active Support* | *YYYY-MM-DD* | *YYYY-MM-DD* | *YYYY-MM-DD* |
| *[Enter product name]* | *Container* | *vX.Y.Z* | *Security Support* | *YYYY-MM-DD* | *YYYY-MM-DD* | *YYYY-MM-DD* |
| *[Enter product name]* | *Firmware* | *vX.Y.Z* | *Active Support* | *YYYY-MM-DD* | *YYYY-MM-DD* | *YYYY-MM-DD* |

::: tip INSTRUCTIONS
For each product within the CRA scope (→ Ch. 1.3), a row must be entered in this table. The **Support Start** corresponds to the date of placing on the market (first public provision). The **Support End** must be at least 5 years after the Support Start.
:::

## 6.4.7 User Information

Pursuant to Annex II No. 5 CRA, users must be informed about the Support Period. The information must be provided at the following locations:

| Information Location | Content | CRA Obligation |
|----------------------|---------|----------------|
| **Product documentation** (at placing on the market) | Support Period, support phases, EOL date | Art. 13(8) |
| **SECURITY.md** (per repository) | Supported versions, reporting channels | Art. 13(6) |
| **Product page / README** | Current support phase, next EOL | Annex II No. 5 |
| **Release Notes** (at phase transition) | Transition Active → Security, EOL announcement | Best Practice |
| **User Information Template** | Complete security notices | Annex II |

The template for user information can be found under [Annex: User Information](/en/templates/product-security-info).

## 6.4.8 Process Integration

The lifecycle process is integrated into the existing CI/CD workflows:

| Event | Automation | Workflow |
|-------|------------|----------|
| New release | Generate SBOM, sign, attach as release asset | `cra-release.yml` |
| Major release | Set support phase of predecessor to Security Support | Manual + catalogue update |
| EOL reached | Update SECURITY.md, deprecation notice in registry | Manual + catalogue update |
| Support review (semi-annual) | Review product catalogue, plan phase transitions | Manual |
