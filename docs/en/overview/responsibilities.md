# 1.2 Roles & Responsibilities

## CRA Roles under the Regulation

The CRA defines three economic operators, each with their own obligations:

### Manufacturer (Art. 10 CRA)

The manufacturer bears primary responsibility for CRA conformity. A manufacturer is any person who develops or has developed a product with digital elements and markets it under their own name or trademark.

**Obligations:**

- Ensure conformity with Annex I
- Carry out a cybersecurity risk assessment
- Prepare technical documentation (Annex VII)
- Carry out a conformity assessment
- Issue an EU declaration of conformity (Annex V)
- Affix the CE marking
- Handle vulnerabilities during the support period
- Fulfil reporting obligations (Art. 14)
- Prepare and maintain an SBOM

### Importer (Art. 13 CRA)

Importers place products from manufacturers outside the EU on the EU market.

**Obligations:**

- Ensure that the manufacturer has fulfilled their obligations
- Verify the declaration of conformity and technical documentation
- Verify the CE marking and manufacturer contact details

### Distributor (Art. 14 CRA)

Distributors make products available on the market without manufacturing or importing them.

**Obligations:**

- Due diligence: verify CE marking and declaration of conformity
- If non-conformity is identified: cease making the product available

### Authorised Representative / EU Authorized Representative (Art. 16 CRA)

::: warning OBLIGATION FOR NON-EU MANUFACTURERS
Manufacturers established **outside the EU** that make products with digital elements available on the EU market **must** designate an authorised representative in the EU. Without an authorised representative, the product may not be made available on the EU market.
:::

**Legal Basis:**

> *"The manufacturer may, by a written mandate, appoint an authorised representative. The authorised representative shall perform the tasks specified in the mandate agreed with the manufacturer."*
> — Art. 16(1) CRA

**When is an authorised representative required?**

| Scenario | Authorised representative required? |
|----------|:-----------------------------------:|
| Manufacturer established in the EU | No |
| Manufacturer established outside the EU, selling in EU | **Yes** |
| Non-EU manufacturer with EU subsidiary acting as importer | Yes (or importer assumes obligations) |
| Open-source steward (Art. 24) | Special provision |

**Obligations of the authorised representative (Art. 16(2)):**

1. **Maintain conformity documentation** – Keep the EU declaration of conformity and technical documentation available for market surveillance authorities for at least 10 years
2. **Duty to inform** – Upon reasoned request, provide the competent authorities with all information and documentation necessary to demonstrate conformity
3. **Duty to cooperate** – Cooperate with market surveillance authorities on measures to eliminate risks
4. **Reporting obligation in case of non-conformity** – Inform the manufacturer without delay if the authorised representative has reason to believe that the product is not conformant
5. **Termination of the mandate** – Upon termination of the mandate, obligations remain in effect for products already placed on the market

**Requirements for the written mandate:**

The mandate must cover at least the following tasks:

| Task | Description |
|------|-------------|
| Document retention | Retain technical documentation and EU declaration of conformity for 10 years |
| Authority contact | Serve as the point of contact for market surveillance authorities |
| Provision of information | Present a copy of the mandate upon request |
| Cooperation | Participate in corrective measures and recalls |

**Relevance for BAUER GROUP:**

| Scenario | Action Required |
|----------|-----------------|
| BAUER GROUP as EU manufacturer | No authorised representative needed – manufacturer obligations apply directly |
| BAUER GROUP procures from non-EU manufacturers | Verification duty: Does the supplier have an authorised representative? --> [6.3 Third-Party Assessment](/en/supply-chain/third-party-assessment) |
| Non-EU subsidiary selling in EU | An authorised representative in the EU **must** be designated |
| BAUER GROUP acts as importer | Importer obligations under Art. 13 apply (verify CE + documentation) |

::: tip PRACTICAL NOTE
When procuring products with digital elements from non-EU manufacturers, it must be verified as part of the Third-Party Assessment (--> [6.3](/en/supply-chain/third-party-assessment)) whether the supplier has designated an EU authorised representative. This is a **prerequisite** for the lawful placing on the market within the EU.
:::

## Internal Role Assignments

| Role | Responsibility | CRA Reference |
|------|----------------|---------------|
| **Security Lead** | Overall responsibility for CRA compliance, ENISA notifications, incident response | Art. 10, Art. 14 |
| **Product Owner** | Product classification, support period, user information | Art. 10(16), Annex II |
| **DevOps Lead** | SBOM generation, signing, CI/CD pipeline maintenance | Art. 10(12), Art. 13(23) |
| **Development Team** | Security-by-design, vulnerability remediation, code reviews | Art. 10(1) |
| **QA / Release Manager** | Conformity assessment, release approval | Annex VII |
| **Management** | Resource allocation, escalation decisions | Art. 10(2) |

## RACI Matrix

| Activity | Security Lead | Product Owner | DevOps | Dev Team | Management |
|----------|:---:|:---:|:---:|:---:|:---:|
| CRA Risk Assessment | **R** | C | I | C | **A** |
| SBOM Generation | I | I | **R** | C | **A** |
| CVE Monitoring | **R** | I | C | I | **A** |
| Patch Management | C | I | C | **R** | **A** |
| Incident Response | **R** | C | C | C | **A** |
| ENISA Notification | **R** | I | I | I | **A** |
| Technical Documentation | C | **R** | C | C | **A** |
| EU Declaration of Conformity | C | **R** | I | I | **A** |
| Support Period Definition | C | **R** | I | I | **A** |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*
