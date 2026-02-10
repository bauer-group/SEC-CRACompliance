# 1.7 Open-Source Steward (Art. 18–19)

## 1.7.1 Overview

The CRA introduces the new role of the **Open Source Software Steward**. This concerns legal persons (e.g., foundations, companies) that systematically support the development of open-source software intended for commercial activities.

::: info LEGAL BASIS
**Art. 3 No. 16 CRA:** *"Open-source software steward" means any legal person, other than a manufacturer, who has the purpose of systematically providing support on a sustained basis for the development of specific products with digital elements qualifying as free and open-source software that are intended for commercial activities, and ensures the viability of those products.*

**Art. 18 CRA:** Obligations of the open-source software steward.

**Art. 19 CRA:** Security attestation for free and open-source software.
:::

## 1.7.2 When Does the OSS Steward Role Apply?

### Requirements (cumulative)

1. **Legal person** (not a natural person)
2. **Not a Manufacturer** of the product in question
3. **Systematic and sustained support** of the development
4. The OSS product is **intended for commercial activities**
5. **Decisive role** in ensuring market viability

### Typical OSS Stewards

- Open-source foundations (Apache, Linux Foundation, Eclipse)
- Companies that sponsor and maintain OSS projects without being the Manufacturer themselves
- Organisations that host OSS projects and provide their release infrastructure

### When Is BAUER GROUP NOT an OSS Steward?

- When using open-source libraries as **dependencies** --> Only manufacturer obligations for the own product
- When contributing to OSS projects as a **contributor** --> No steward role
- When publishing own code as open source --> BAUER GROUP is then a **Manufacturer**, not a steward

### When COULD BAUER GROUP Be an OSS Steward?

- If BAUER GROUP **systematically promotes and maintains** an OSS project from an external community (e.g., own employees as maintainers, infrastructure sponsoring)
- If BAUER GROUP establishes its **own foundation** that manages OSS projects

::: tip CURRENT ASSESSMENT
Based on current knowledge, BAUER GROUP primarily acts as a **Manufacturer** (own code) and **user** (OSS dependencies). The OSS steward role is currently **not applicable**, but must be reviewed for new OSS engagements.
:::

## 1.7.3 Obligations of the OSS Steward (Art. 18)

Even though the steward role is less comprehensive than that of the Manufacturer, the following obligations apply:

### 1. Cybersecurity Policy (Art. 18 Para. 1)

- Establish and implement a documented cybersecurity policy
- Promote cooperation with Market Surveillance authorities
- Support secure development of the software

### 2. Vulnerability Handling (Art. 18 Para. 1)

- Voluntary reporting of actively exploited vulnerabilities to ENISA and national CSIRTs
- Facilitate coordinated vulnerability disclosure (CVD)
- Provide a contact point for vulnerability reports (SECURITY.md or similar)

### 3. Cooperation with Authorities (Art. 18 Para. 2)

- Upon request: provide documentation
- Assist in eliminating security risks
- Share information about vulnerabilities

### 4. Security Attestation (Art. 19)

Open-source software stewards may initiate a **voluntary security attestation**:

- Documentation of applied cybersecurity practices
- Evidence of vulnerability handling processes
- Third-party attestation (optional)

## 1.7.4 Role Distinction for Open Source

| Role | CRA Status | Obligations |
|------|-----------|-------------|
| **OSS user** (as dependency) | Manufacturer of own product | Full manufacturer obligations for the overall product |
| **OSS contributor** | No CRA role | No direct CRA obligations |
| **OSS maintainer** (natural person) | Not a steward (legal person required) | No direct CRA obligations |
| **OSS steward** (organisation) | Art. 18-19 obligations | Limited obligations (see above) |
| **Manufacturer of OSS** (commercial) | Full Manufacturer (Art. 10) | Full manufacturer obligations |

## 1.7.5 Impact on the Supply Chain

### For BAUER GROUP as a Manufacturer

Even if BAUER GROUP is not an OSS steward, the OSS steward provisions have implications:

1. **Review OSS dependencies:** Is there an OSS steward for critical dependencies?
2. **Vulnerability reports:** OSS stewards report vulnerabilities voluntarily -- actively track these reports
3. **Security attestations:** When evaluating OSS components, prefer attested software
4. **Risk assessment:** OSS without a steward or active community = higher risk

> See: [Supply Chain Security](/en/supply-chain/) and [Third-Party Assessment](/en/supply-chain/third-party-assessment)

## 1.7.6 Penalties

OSS stewards are subject to **reduced penalties** compared to manufacturers:

| Violation | Maximum Penalty |
|-----------|-----------------|
| Non-fulfilment of Art. 18 obligations | Up to EUR 5 million or 1% of annual turnover |

*The Commission takes into account the special role and non-commercial character of the steward activity when determining penalties.*

## 1.7.7 Relevant Developments

- The EU Commission will adopt **implementing acts** that further specify the security attestation (Art. 19)
- Harmonised standards for OSS stewards are under development
- The precise delineation will be further clarified through practice and case law
