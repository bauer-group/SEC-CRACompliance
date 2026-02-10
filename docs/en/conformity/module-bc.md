# 7.3 EU Type Examination (Module B+C)

## 7.3.1 Overview

The EU type examination under Module B in combination with conformity to type under Module C is the conformity assessment procedure for **Class I** (without harmonised standards) and **Class II** products.

::: info LEGAL BASIS
**Art. 24(2) CRA:** For Class I products not manufactured in full application of harmonised standards, and for Class II products, an EU type examination (Module B) in combination with conformity to type (Module C) must be carried out.

**Annex VIII, Modules B and C** of the CRA describe the procedural requirements.
:::

## 7.3.2 Applicability

| Category | Module B+C required? |
|----------|---------------------|
| Default | No – Module A sufficient |
| Class I (with harm. standards) | No – Module A* sufficient |
| **Class I (without harm. standards)** | **Yes** |
| **Class II** | **Yes** (Alternative: Module H) |
| Critical | No – EUCC required |

## 7.3.3 Procedure

### Module B – EU Type Examination

The EU type examination is the part of the conformity assessment procedure in which a **notified body** examines the technical design of a product and confirms that it meets the essential requirements.

#### 1. Select a Notified Body

- Search via the EU Commission's [NANDO database](https://ec.europa.eu/growth/tools-databases/nando/)
- The body must be notified for the CRA (Regulation (EU) 2024/2847)
- Check for relevant product categories and testing competences
- Conclude a contract covering scope, timeline, and costs

#### 2. Submit Technical Documentation

The following documentation per Annex VII must be submitted:

- [ ] Complete product description ([Reference](/en/technical-documentation/product-description))
- [ ] Security architecture ([Reference](/en/technical-documentation/security-architecture))
- [ ] Cybersecurity risk assessment ([Template](/en/templates/risk-assessment))
- [ ] SBOM (machine-readable, CycloneDX JSON)
- [ ] Description of vulnerability handling processes
- [ ] Test results (penetration tests, security scans)
- [ ] Description of update mechanism ([Reference](/en/technical-documentation/update-mechanism))
- [ ] Source code or source code access (if requested)

#### 3. Examination by the Notified Body

The notified body examines:

1. **Design review** – Whether the design meets Annex I Part I requirements
2. **Vulnerability handling** – Whether Annex I Part II processes are implemented
3. **Test results** – Whether the tests conducted are sufficient and correct
4. **Documentation** – Whether the technical documentation is complete

#### 4. EU Type Examination Certificate

Upon successful examination, the notified body issues an **EU type examination certificate** containing:

- Name and identification number of the notified body
- Product identification (name, type, version)
- Examination result
- Conditions for validity (if applicable)
- Certificate identification number

::: warning VALIDITY
The EU type examination certificate has a **limited validity period**. A re-examination is required for significant changes to the product or requirements.
:::

### Module C – Conformity to Type

Module C ensures that the **produced units** correspond to the examined type.

#### Manufacturer Obligations

1. **Monitor manufacturing process** – Ensure each unit corresponds to the examined type
2. **Configuration management** – Version control and build reproducibility
3. **Release process** – Signed builds, integrity verification
4. **Change management** – For changes, verify whether the type examination certificate remains valid

#### For Software Products, This Means:

- Reproducible builds (CI/CD pipeline)
- Signed artefacts ([Cosign signing](/en/sbom-signing/signing))
- Version control (Git)
- Automated tests with each release
- SBOM generated and archived per release ([SBOM Lifecycle](/en/sbom-signing/))

## 7.3.4 Timeline

| Phase | Estimated Duration |
|-------|-------------------|
| Documentation preparation | 4-8 weeks |
| Selection of notified body | 2-4 weeks |
| Examination by the body | 8-16 weeks |
| Remediation (if needed) | 2-8 weeks |
| Certificate issuance | 1-2 weeks |
| **Total** | **approx. 4-9 months** |

::: tip START EARLY
Availability of notified bodies for CRA examinations will be limited initially. Begin identifying and contacting suitable bodies early.
:::

## 7.3.5 Costs

Costs vary depending on product complexity and the notified body:

| Cost Factor | Estimated Range |
|------------|-----------------|
| Initial examination (Module B) | EUR 10,000 - 50,000 |
| Annual surveillance | EUR 2,000 - 10,000 |
| Re-examination for changes | EUR 5,000 - 25,000 |

*Note: Current market prices for CRA examinations are not yet established. Values serve as guidance based on comparable directives.*

## 7.3.6 Checklist: Module B+C

- [ ] Product classification completed (Class I without harm. standards or Class II)
- [ ] Technical documentation complete (Annex VII)
- [ ] Cybersecurity risk assessment completed
- [ ] Penetration tests conducted and documented
- [ ] Notified body identified and contacted (NANDO)
- [ ] Contract with notified body concluded
- [ ] Documentation submitted
- [ ] Examination passed / remediation implemented
- [ ] EU type examination certificate received
- [ ] Module C measures implemented (reproducible builds, signing)
- [ ] EU Declaration of Conformity issued ([Template](/en/templates/eu-declaration-of-conformity))
- [ ] CE marking with notified body identification number
