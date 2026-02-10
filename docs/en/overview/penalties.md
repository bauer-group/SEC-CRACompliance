# 1.11 Penalties (Art. 64)

## 1.11.1 Overview

The CRA provides for significant penalties for violations. The fines follow the GDPR framework and are tiered according to the severity of the violation. The determination and imposition is the responsibility of the national Market Surveillance authorities of the Member States.

::: info LEGAL BASIS
**Art. 64 CRA:** The Member States shall lay down rules on penalties and take all necessary measures to ensure their enforcement. The penalties shall be effective, proportionate, and dissuasive.
:::

## 1.11.2 Fine Framework

### Tier 1 -- Serious Violations (Art. 64 Para. 2)

**Up to EUR 15,000,000 or 2.5% of global annual turnover** (whichever is higher)

Violations of:

- **Art. 10** -- Manufacturer obligations (essential requirements, conformity assessment, technical documentation)
- **Art. 13** -- Information obligations (SBOM, support period, contact details)
- **Art. 14** -- Reporting Obligations (ENISA 24h/72h/14d)
- **Annex I** -- Essential cybersecurity requirements
- **Annex VII** -- Technical documentation

### Tier 2 -- Other Violations (Art. 64 Para. 3)

**Up to EUR 10,000,000 or 2% of global annual turnover**

Violations of:

- **Art. 15** -- [Importer Obligations](/en/overview/importer-obligations)
- **Art. 17** -- [Distributor Obligations](/en/overview/distributor-obligations)
- **Art. 20** -- [Substantial Modifications](/en/overview/substantial-modifications) (without assuming manufacturer obligations)
- **Art. 24-28** -- Conformity Assessment (formally not carried out)

### Tier 3 -- False Information (Art. 64 Para. 4)

**Up to EUR 5,000,000 or 1% of global annual turnover**

- False, incomplete, or misleading information to authorities
- Refusal to cooperate with Market Surveillance authorities
- Obstruction of inspections

### Special Provision: OSS Stewards (Art. 64 Para. 5)

**Up to EUR 5,000,000 or 1% of global annual turnover**

- Reduced penalties for [Open Source Software Stewards](/en/overview/open-source-steward)
- Consideration of the non-commercial character

## 1.11.3 Overview Table

| Violation Category | Maximum | Typical Triggers |
|--------------------|---------|------------------|
| **Tier 1** | EUR 15 million / 2.5% | No SBOM, no conformity assessment, no ENISA reporting, known vulnerabilities not remediated |
| **Tier 2** | EUR 10 million / 2% | Missing CE marking, Importer without verification, no DoC |
| **Tier 3** | EUR 5 million / 1% | False information to authorities, refusal to cooperate |

## 1.11.4 Assessment Criteria

When determining the amount of the fine, the authorities take into account:

### Aggravating Factors

- **Severity of the violation** -- How serious were the consequences?
- **Duration** -- How long did the violation persist?
- **Intent** -- Was the violation intentional?
- **Repetition** -- Were there previous violations?
- **Affected users** -- How many users were affected?
- **Damage** -- What actual damage occurred?

### Mitigating Factors

- **Cooperation** -- Active collaboration with authorities
- **Self-reporting** -- Voluntary disclosure of the violation
- **Corrective measures** -- Rapid remediation of the problem
- **Compliance programme** -- Demonstrable compliance management
- **First violation** -- No previous violations
- **Company size** -- Proportionality for SMEs

## 1.11.5 Comparison with Other Regulations

| Regulation | Maximum Fine | Calculation |
|------------|-------------|-------------|
| **CRA** | EUR 15 million / 2.5% | Per violation |
| **GDPR** | EUR 20 million / 4% | Per violation |
| **NIS2** | EUR 10 million / 2% | Per violation |
| **AI Act** | EUR 35 million / 7% | Per violation |

## 1.11.6 Risk Minimisation

### Compliance as Protection

A documented and actively practised compliance programme significantly reduces the risk of fines. The following measures serve as mitigating factors:

1. **Complete documentation** -- This handbook and all referenced processes
2. **Proactive reporting** -- Comply with ENISA deadlines ([Reporting Process](/en/incident-response/enisa-reporting))
3. **Active vulnerability management** -- CVE monitoring, rapid patches ([Vulnerability Management](/en/vulnerability-management/))
4. **Regular audits** -- Internal review of compliance
5. **Training** -- Employees are aware of the CRA requirements
6. **Readiness to cooperate** -- Documented process for authority requests ([Market Surveillance](/en/overview/market-surveillance))

### Priority Compliance Areas

The highest fine risks exist for:

| Priority | Area | Risk |
|----------|------|------|
| **1** | No ENISA reporting for actively exploited vulnerability | Tier 1 |
| **2** | Known exploitable vulnerabilities not remediated | Tier 1 |
| **3** | No SBOM created (Art. 13 Para. 23) | Tier 1 |
| **4** | No conformity assessment carried out | Tier 1 |
| **5** | No technical documentation (Annex VII) | Tier 1 |
| **6** | No cooperation with authorities | Tier 3 |

::: warning TIMELINE
The penalty provisions apply from **11.12.2027** (full applicability). The Reporting Obligations under Art. 14 apply from **11.09.2026**.
:::
