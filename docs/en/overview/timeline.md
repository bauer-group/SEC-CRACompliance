# 1.3 Timelines & Deadlines

## 1.3.1 CRA Timeline

The Cyber Resilience Act (Regulation (EU) 2024/2847) was published in the Official Journal of the EU on 20 November 2024 and entered into force on 10 December 2024.

### Critical Deadlines

| Date | Requirement | Status |
|------|-------------|--------|
| 10.12.2024 | **Entry into force** of the CRA | Completed |
| 11.06.2026 | Procedures for notifying authorities & conformity assessment bodies apply (Chapter IV) | Preparation |
| **11.09.2026** | **Reporting obligations take effect** – Art. 14 CRA (actively exploited vulnerabilities, severe incidents); ENISA SRP operational | **ACTION REQUIRED** |
| 11.12.2026 | Sufficient notified bodies designated (avoiding capacity bottlenecks) | Monitoring |
| 20.01.2027 | Machinery Regulation (EU) 2023/1230 fully applicable — relevant to [existing certificates](/en/clarifications/sectoral-law-and-certificates) | Monitoring |
| **11.12.2027** | **Full applicability** – all requirements incl. conformity assessment, CE marking, technical documentation | **ACTION REQUIRED** |
| **11.06.2028** | **Hard stop for Art. 69(1)**: EU type-examination certificates and approval decisions issued under other Union harmonisation legislation cease to be usable as CRA evidence | **ACTION REQUIRED** |

::: danger REPORTING OBLIGATION FROM 11.09.2026
From 11 September 2026, actively exploited vulnerabilities must be reported to ENISA / the competent national authority within **24 hours**. The incident response process must be fully operational by this date.

The obligation covers **all products in scope of the CRA — including those placed on the market before 11.12.2027** — and **continues after a product's support period has ended**. There is, however, **no retroactive reporting** of active exploitation the manufacturer had already become aware of before 11.09.2026. See [4.3 ENISA Reporting Process](/en/incident-response/enisa-reporting).
:::

::: info COMMISSION GUIDANCE (ART. 26) — ADOPTION PENDING
On **27 July 2026** the Commission approved the **content** of its guidance on the application of the CRA. Formal adoption follows once all EU language versions are available, and the guidance applies only from that moment. Its interpretations have been worked into this handbook — see [Commission Guidance on the CRA](/en/clarifications/commission-guidance) for the source, its legal status, and the full mapping.
:::

### Detailed Timeline

**Phase 1: Preparation (until 11.06.2026)**

- Create product catalogue and carry out CRA classification
- Establish and validate SBOM processes
- Create and test incident response playbook
- Prepare ENISA notification templates
- Implement CVE monitoring workflows

**Phase 2: Reporting Obligations (from 11.09.2026)**

- Reporting processes must be operational
- Utilise ENISA Single Reporting Platform (SRP)
- 24h early warning for actively exploited vulnerabilities / severe incidents
- 72h notification with detailed assessment
- Final report: 14 days for vulnerabilities (after a corrective measure is available) or 1 month for severe incidents (after the 72h notification)

**Phase 3: Full Conformity (from 11.12.2027)**

- Technical documentation in accordance with Annex VII complete
- EU declaration of conformity (Annex V) per product
- CE marking
- Conformity assessment carried out
- Support period declared and published
- SBOM available for every shipped product
- User information provided in accordance with Annex II

## 1.3.2 NIS2 Timeline

| Date | Requirement |
|------|-------------|
| 17.10.2024 | NIS2 transposition deadline for Member States |
| Ongoing | Reporting obligations pursuant to Art. 23 NIS2 for significant security incidents |

## 1.3.3 Internal Implementation Timeline

| Quarter | Measures |
|---------|----------|
| **Q1 2026** | Build compliance documentation, validate SBOM processes |
| **Q2 2026** | Test incident response playbook, finalise ENISA notification templates |
| **Q3 2026** | Reporting obligations operational (Deadline: 11.09.2026) |
| **Q4 2026** | Begin technical documentation per product |
| **Q1-Q2 2027** | Prepare conformity assessment, create EU DoC |
| **Q3 2027** | Trial run conformity assessment, prepare CE marking |
| **Q4 2027** | Full conformity (Deadline: 11.12.2027) |
