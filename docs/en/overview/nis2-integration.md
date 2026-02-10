# 1.14 NIS2 Integration

## 1.14.1 Overview

The Cyber Resilience Act (CRA) and the NIS2 Directive (Directive (EU) 2022/2555) are complementary EU cybersecurity regulations. While the CRA regulates **products**, NIS2 concerns **operators** (essential and important entities). Companies such as BAUER GROUP can be subject to both regulations simultaneously.

::: info LEGAL BASIS
**CRA Recital 20:** The CRA complements the NIS2 Directive and is coherent with its requirements. Products that comply with CRA requirements contribute to their operators' compliance with NIS2 requirements.

**NIS2 Art. 21:** Cybersecurity measures for essential and important entities, including supply chain security.
:::

## 1.14.2 Delineation CRA vs. NIS2

| Criterion | CRA | NIS2 |
|-----------|-----|------|
| **Subject of Regulation** | Products with digital elements | Operators (entities) |
| **Addressee** | Manufacturers, importers, distributors | Essential and important entities |
| **Focus** | Product security (Security by Design) | Operational security (risk management) |
| **Legal form** | Regulation (directly applicable) | Directive (national transposition) |
| **Applicable from** | 11.12.2027 (fully) | 18.10.2024 (transposition deadline) |
| **Sanctions** | Up to EUR 15 million / 2.5% | Up to EUR 10 million / 2% |
| **Reporting obligation** | ENISA (24h/72h/14d) | CSIRT (24h/72h/1 month) |

## 1.14.3 Decision Tree: Which Regulation Applies?

```
Does BAUER GROUP manufacture products with digital elements?
├── Yes → CRA applies (as manufacturer)
│   └── Are the products SaaS (purely cloud-based)?
│       ├── Yes → CRA does NOT apply to SaaS
│       │   └── Check NIS2 (as operator)
│       └── No → CRA applies
└── No → CRA does not apply as manufacturer

Is BAUER GROUP an essential or important entity?
├── Yes → NIS2 applies (as operator)
│   └── Check sector (Annex I/II of NIS2)
└── No → NIS2 does not apply
```

## 1.14.4 Overlapping Requirements

### Vulnerability Management

| Requirement | CRA | NIS2 |
|-------------|-----|------|
| Identify vulnerabilities | Art. 10 para. 6, Annex I Part II | Art. 21 para. 2 (e) |
| Remediate vulnerabilities | Art. 10 para. 6-7 | Art. 21 para. 2 (e) |
| Coordinated Disclosure | Art. 10 para. 9, Art. 13 para. 6 | Art. 12 |
| Maintain SBOM | Art. 13 para. 23 | Not explicit (supply chain) |

> **Synergy:** CRA-compliant vulnerability handling largely satisfies NIS2 Art. 21 para. 2 (e) as well.

### Reporting Obligations

| Aspect | CRA (Art. 14) | NIS2 (Art. 23) |
|--------|-------------|----------------|
| **Trigger** | Actively exploited vulnerability or severe incident | Significant security incident |
| **Early warning** | 24 hours | 24 hours |
| **Notification** | 72 hours | 72 hours |
| **Final report** | 14 days | 1 month |
| **Reporting body** | ENISA + national CSIRT | National CSIRT/authority |
| **Platform** | ENISA Single Reporting Platform | National reporting platform |

::: warning DOUBLE REPORTING
If BAUER GROUP is affected both as a CRA manufacturer and as a NIS2 entity, **two separate reporting obligations** may be triggered. The EU is working on a simplified reporting platform (ENISA SRP) that is intended to consolidate both reports.
:::

> CRA reporting process: [ENISA Reporting Process](/en/incident-response/enisa-reporting)

### Supply Chain Security

| Requirement | CRA | NIS2 |
|-------------|-----|------|
| Supply chain security | Art. 10 para. 4, Annex I Part II No. 1 | Art. 21 para. 2 (d) |
| Supplier due diligence | Annex I Part II No. 1 | Art. 21 para. 2 (d) |
| Third-party assessment | [Third-Party Assessment](/en/supply-chain/third-party-assessment) | Supplier assessment |

> **Synergy:** CRA-compliant supply chain processes also satisfy NIS2 Art. 21 para. 2 (d) supply chain requirements.

### Incident Response

| Requirement | CRA | NIS2 |
|-------------|-----|------|
| Incident response plan | Implicit (Art. 10) | Art. 21 para. 2 (b) |
| Business continuity | Not explicit | Art. 21 para. 2 (c) |
| Crisis management | Not explicit | Art. 21 para. 2 (c) |

> **Gap:** NIS2 explicitly requires business continuity and crisis management, while the CRA focuses on product security.

## 1.14.5 Combined Compliance Strategy

### Step 1: Determine Scope

| Question | Result |
|----------|--------|
| Do we manufacture products with digital elements? | → CRA obligations |
| Are we an essential/important entity (NIS2 Annex I/II)? | → NIS2 obligations |
| Do we operate SaaS products? | → NIS2 (not CRA) |
| Do we import non-EU products? | → CRA importer obligations |

### Step 2: Leverage Synergies

The following processes cover **both** regulations:

1. **Vulnerability Management** → [Vulnerability Management](/en/vulnerability-management/)
2. **Incident Response** → [Incident Response](/en/incident-response/)
3. **Supply Chain Security** → [Supply Chain](/en/supply-chain/)
4. **SBOM Management** → [SBOM & Signing](/en/sbom-signing/)

### Step 3: NIS2-Specific Additions

NIS2 requirements that go beyond the CRA:

| NIS2 Requirement | Description | CRA Coverage |
|------------------|------------|--------------|
| Art. 21(2)(a) | Risk management policy | Partial (product-related) |
| Art. 21(2)(b) | Incident response | ✅ |
| Art. 21(2)(c) | Business continuity | ❌ Required separately |
| Art. 21(2)(d) | Supply chain security | ✅ |
| Art. 21(2)(e) | Vulnerability handling | ✅ |
| Art. 21(2)(f) | Cyber hygiene & training | ❌ Required separately |
| Art. 21(2)(g) | Cryptography | Partial |
| Art. 21(2)(h) | HR security | ❌ Required separately |
| Art. 21(2)(i) | MFA, secure communication | Partial |
| Art. 21(2)(j) | Asset management | Partial (SBOM) |

### Step 4: Unified Reporting Processes

For companies subject to both regulations:

1. **Joint initial assessment process** for incidents
2. **Parallel reporting** to CRA and NIS2 bodies (until a unified platform is available)
3. **Unified templates** ([ENISA Early Warning](/en/templates/enisa-early-warning))
4. **Documented decision logic:** Which incident triggers which reporting obligation

## 1.14.6 Timeline

| Date | Event |
|------|-------|
| **18.10.2024** | NIS2 transposition deadline for member states |
| **11.09.2026** | CRA reporting obligations active (Art. 14) |
| **11.12.2027** | CRA fully applicable |

::: tip RECOMMENDATION
Start with NIS2 compliance (already applicable) and use the implemented processes as a foundation for CRA compliance (from 2027). This way you avoid duplicate effort and create an integrated compliance framework.
:::
