# Comprehensive Quality Assurance (Module H)

## Overview

Comprehensive quality assurance under Module H is an alternative conformity assessment procedure for **Class II** products. Unlike Module B+C, this approach does not examine a single type specimen but rather the manufacturer's **entire quality management system**.

::: info LEGAL BASIS
**Art. 24(2) CRA:** For Class II products, as an alternative to the EU type examination (Module B+C), comprehensive quality assurance (Module H) may be applied.

**Annex VIII, Module H** of the CRA describes the requirements for the quality management system.
:::

## Applicability

| Category | Module H applicable? |
|----------|---------------------|
| Default | No – Module A sufficient |
| Class I | No – Module A* or B+C |
| **Class II** | **Yes** (Alternative to Module B+C) |
| Critical | No – EUCC required |

## Module H vs. Module B+C

| Criterion | Module B+C | Module H |
|-----------|-----------|----------|
| **Object of assessment** | Individual type specimen | Entire QMS |
| **Suitable for** | Few product variants | Many product variants |
| **Prerequisite** | Technical documentation | Certified QMS |
| **Advantage** | Focused, faster for single products | Covers all products under the QMS |
| **Disadvantage** | Each new product examined individually | Higher initial effort |
| **Recommended when** | 1-3 Class II products | 4+ Class II products |

## Procedure

### 1. Build a Quality Management System

The QMS must cover the following areas:

#### Design Phase (Security by Design)

- Cybersecurity requirements in product specifications
- Threat modelling and risk assessment
- Secure architecture principles
- Security reviews in the design process

#### Development Phase (Secure Development)

- Secure development guidelines (secure coding guidelines)
- Code reviews with security focus
- Static code analysis (SAST)
- Dependency management and vulnerability scanning

#### Test Phase (Security Testing)

- Dynamic analysis (DAST)
- Penetration testing
- Fuzzing
- Integration testing of security functions

#### Production Phase (Secure Build & Release)

- Reproducible builds
- Signing of all artefacts ([Cosign](/en/sbom-signing/signing))
- SBOM generation per release ([SBOM Lifecycle](/en/sbom-signing/))
- Supply chain integrity verification

#### Operations Phase (Post-Market Surveillance)

- Vulnerability monitoring ([CVE Monitoring](/en/vulnerability-management/cve-monitoring))
- Patch management ([Reference](/en/vulnerability-management/patch-management))
- Incident response ([Playbook](/en/incident-response/playbook))
- ENISA reporting processes ([Reference](/en/incident-response/enisa-reporting))

### 2. Notified Body for QMS Assessment

- Identify body via [NANDO database](https://ec.europa.eu/growth/tools-databases/nando/)
- Body must be notified for CRA QMS assessments
- Contract covering audit scope and surveillance intervals

### 3. QMS Audit

The notified body examines:

1. **QMS documentation** – Process descriptions, policies, procedures
2. **Implementation** – Whether documented processes are actually followed
3. **Effectiveness** – Whether processes achieve the required cybersecurity level
4. **Annex I coverage** – Whether all essential requirements are covered by the QMS

### 4. QMS Certificate

Upon successful audit, the notified body issues a **QMS certificate**. All products manufactured under this QMS are considered conformity-assessed.

### 5. Surveillance

- **Periodic audits** by the notified body (typically annually)
- **Unannounced inspections** are possible
- **Re-certification** for significant changes to the QMS

## Integration with Existing Standards

Module H integrates well with existing management systems:

| Standard | Synergy with Module H |
|----------|----------------------|
| **ISO 27001** (ISMS) | High overlap with security controls |
| **ISO 9001** (QMS) | Base QMS structure reusable |
| **IEC 62443** (Industrial Security) | Relevant for industrial IoT products |
| **ISO/SAE 21434** (Automotive) | Relevant for automotive software |

::: tip LEVERAGE SYNERGIES
If a certified ISO 27001 or ISO 9001 management system already exists, it can serve as a foundation for the CRA QMS. The cybersecurity-specific requirements from Annex I must be supplemented.
:::

## Timeline

| Phase | Estimated Duration |
|-------|-------------------|
| QMS build / extension | 6-12 months |
| Internal audits | 2-4 weeks |
| Selection of notified body | 2-4 weeks |
| External audit | 4-8 weeks |
| Remediation | 2-8 weeks |
| Certificate issuance | 1-2 weeks |
| **Total** | **approx. 9-15 months** |

## Costs

| Cost Factor | Estimated Range |
|------------|-----------------|
| QMS build (internal/external) | EUR 20,000 - 80,000 |
| Initial audit | EUR 15,000 - 40,000 |
| Annual surveillance audits | EUR 5,000 - 15,000 |
| Re-certification (every 3 years) | EUR 10,000 - 30,000 |

*Note: Values serve as guidance. With an existing ISO 27001/9001, the effort is significantly reduced.*

## Checklist: Module H

- [ ] Product classification completed (Class II confirmed)
- [ ] Decision Module H vs. Module B+C made and justified
- [ ] QMS built or existing QMS extended
- [ ] All phases covered (design, development, test, production, operations)
- [ ] Annex I requirements embedded in QMS
- [ ] Internal audits conducted
- [ ] Notified body identified and contacted (NANDO)
- [ ] Contract with notified body concluded
- [ ] External audit passed / remediation implemented
- [ ] QMS certificate received
- [ ] Surveillance plan agreed
- [ ] EU Declaration of Conformity issued ([Template](/en/templates/eu-declaration-of-conformity))
- [ ] CE marking with notified body identification number
