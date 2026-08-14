# 4.3 ENISA Reporting Process

## 4.3.1 Legal Basis

Pursuant to Art. 14 CRA, manufacturers are required to report certain security events to ENISA or the competent national CSIRT authority. The reporting obligation applies from **11 September 2026**.

::: info LEGAL BASIS
**Art. 14(1) CRA:** The manufacturer shall notify any **actively exploited vulnerability** contained in the product with digital elements **simultaneously** to the CSIRT designated as coordinator and to ENISA.

**Art. 14(3) CRA:** The manufacturer shall notify any **severe incident having an impact on the security** of the product with digital elements, likewise simultaneously to the designated CSIRT and to ENISA.

**Art. 14(8) CRA:** After becoming aware, the manufacturer shall inform impacted users and, where appropriate, all users.

Both triggers follow the same three-stage structure: an early warning, a fuller notification, and a complete report.
:::

::: danger CRITICAL DEADLINES

| Notification | Deadline | Deadline Starts |
|--------------|----------|-----------------|
| Early warning | Without undue delay, in any event **24 hours** | Becoming aware of the actively exploited vulnerability / severe incident |
| Notification | Without undue delay, in any event **72 hours** | Becoming aware |
| Complete report (actively exploited vulnerability) | **14 days** | A corrective or mitigating measure becomes available |
| Complete report (severe incident) | **1 month** | The 72-hour notification |

:::

::: tip NIS2 Synergy
CRA Art. 14 reporting aligns with **NIS2 Art. 23** (incident notification). Both use the same ENISA Single Reporting Platform (SRP). Organizations already reporting under NIS2 can **reuse the same platform and largely the same process** — only the reporting scope differs: NIS2 covers operational incidents, CRA covers product vulnerabilities.
:::

::: tip AI Act Synergy
Products containing AI components that are classified as high-risk under the AI Act have **additional reporting obligations** (Art. 62 AI Act). Coordinate AI-related incident reports with CRA reporting to avoid duplicate filings.
:::

## 4.3.2 When Does the Clock Start? "Becoming Aware"

Every deadline above runs from the moment the manufacturer **becomes aware**. The Commission guidance defines that moment, aligning it with recital 31 of Commission Implementing Regulation (EU) 2024/2690 and Section II(A) of the EDPB Guidelines 9/2022 on personal data breach notification under the GDPR.

::: info THE DEFINITION
Where the manufacturer detects a suspicious event — or a third party such as an individual, a customer, an entity, an authority, a media organisation or another source brings a potential incident or vulnerability to its attention — the manufacturer must **assess it immediately**.

The manufacturer is regarded as having **become aware** when, after that initial assessment, it has a **reasonable degree of certainty** that:

1. a vulnerability contained in its product **is being actively exploited**, or
2. a **severe incident** has occurred and has led to the security of its product being compromised.
:::

The exact point in time depends on the circumstances. Sometimes active exploitation is clear from the outset; sometimes it takes time to establish whether the product is affected at all, and whether a malicious actor is exploiting the vulnerability.

::: warning THE EMPHASIS IS ON PROMPT ASSESSMENT
An unhurried initial assessment does not lawfully postpone the clock. The requirement is **prompt action** to carry out the initial assessment — particularly where the vulnerability may pose a significant risk — and, where the conditions are met, to take remedial action and notify.

Operationally: the ≤ 2-hour initial assessment in the Phase 1 process below is the mechanism that makes "becoming aware" defensible. Record the time the signal arrived, the time the assessment concluded, and the reasoning.
:::

Notifications are then **updated progressively** as the internal investigation advances and knowledge becomes more detailed. The early warning contains limited information by design; it is not a reason to delay.

## 4.3.3 Temporal Scope of the Reporting Obligation

| Question | Answer |
|----------|--------|
| From when does Art. 14 apply? | **11 September 2026** |
| To which products? | **All** products in scope of the CRA — **including products placed on the market before 11.12.2027** (Art. 69(3), Art. 71(2)) |
| Does it stop when the support period ends? | **No.** Unlike the Annex I Part II vulnerability handling obligations, the reporting obligations **continue after a product is no longer supported** |
| Do grandfathered products also owe vulnerability handling? | **No.** Where a product was placed on the market before 11.12.2027, or its support period has ended, the Annex I Part II obligations do not apply — but reporting does |

::: tip NO RETROACTIVE REPORTING
Because the obligation is triggered by **becoming aware of active exploitation**, a manufacturer is **not** required to report vulnerabilities whose active exploitation it had already become aware of **before 11 September 2026**. The CRA does not require retroactive reporting.

The converse case **is** covered: where the manufacturer knew of a vulnerability before 11 September 2026 but was not then aware of any active exploitation — because none had occurred, or because it had not become aware of it — and active exploitation subsequently occurs or comes to its attention after that date, the vulnerability becomes an actively exploited one subject to the reporting obligation.
:::

## 4.3.4 Vulnerabilities in Third-Party Components

A manufacturer reports only actively exploited vulnerabilities **contained in its own product**. That produces a precise, and frequently misapplied, boundary:

| Situation | Reportable under Art. 14(1)? |
|-----------|:----------------------------:|
| A third-party component in the product contains a vulnerability that **is being actively exploited in the product** | **Yes** — the manufacturer of the product must notify it |
| A third-party component contains a vulnerability that **cannot be exploited** in the product (e.g. the vulnerable code is not reachable) | **No** |
| A third-party component contains a vulnerability that **has not been exploited** in the product | **No** |

In the two negative cases the manufacturer is nevertheless required to:

1. comply with the **vulnerability handling requirements** of Annex I Part II;
2. **report the vulnerability upstream** to the person or entity manufacturing or maintaining the component (Art. 13(6)) → [3.5 Handling Requirements](/en/vulnerability-management/handling-requirements);
3. and it **may** notify voluntarily under **Art. 15**.

::: tip OPEN-SOURCE STEWARDS REPORT TOO
Open-source software stewards are also required to report actively exploited vulnerabilities under Art. 24(3), to the extent they are involved in the development of the product. Because FOSS components are typically integrated downstream, a steward usually becomes aware through a third-party report — from a manufacturer that detected exploitation in its own product, or from a user or security researcher. See [1.7 Free & Open-Source Software and the Steward](/en/overview/open-source-steward).
:::

## 4.3.5 Reportable Events

### Actively Exploited Vulnerability (Art. 14(1))

A vulnerability in a BAUER GROUP product is being actively exploited in the wild. Pursuant to Art. 3(42) CRA, active exploitation exists when reliable evidence shows that the vulnerability has been exploited by a malicious actor in a system without the permission of the owner.

**Indicators of active exploitation:**

- Inclusion in the **KEV catalog** (CISA Known Exploited Vulnerabilities)
- **Threat intelligence feeds** report exploitation activity
- **Report by customers or security researchers** with evidence of exploitation
- **Own detection** in logs, monitoring or incident response processes
- **Public reports** (vendor advisories, blogs, forums) about attacks

### Severe Security Incident (Art. 14(3))

An incident that significantly affects the security of the product or its users (Art. 3(44) CRA).

**Criteria for classification as a severe incident:**

| Criterion | Description | Examples |
|-----------|-------------|----------|
| Integrity compromise | The integrity of the product or its supply chain is compromised | Manipulated source code, compromised build pipeline |
| Unauthorised data access | Access to user data without authorisation | Data leak, API abuse, configuration error |
| Availability loss | Security-relevant functions are impaired | Auth bypass, update mechanism disrupted |
| Compromised updates | Manipulated updates are delivered | Supply chain attack, signing key compromise |

## 4.3.6 Roles and Responsibilities

| Role | Responsibility in the Reporting Process |
|------|-----------------------------------------|
| **Security Lead** | Assess reporting obligation, submit ENISA notifications, overall coordination |
| **DevOps Lead** | Technical analysis, patch coordination, infrastructure measures |
| **Product Owner** | User notification, impact assessment, release decision |
| **Management** | Approval for SEV-1/SEV-2, resource allocation, escalation |
| **Developer** | Root cause analysis, patch development, security review |

## 4.3.7 Reporting Platform

<EnisaSrpStatus />

### National CSIRTs of EU Member States

If the ENISA SRP is temporarily unavailable, the notification shall be submitted to the competent national CSIRT. Below is the complete directory of all 27 EU Member States:

| Country | CSIRT | Website | Email |
|---------|-------|---------|-------|
| **Austria** | CERT.at | [www.cert.at](https://www.cert.at) | `reports@cert.at` |
| **Belgium** | CERT.be (CCB) | [ccb.belgium.be/cert](https://ccb.belgium.be/cert) | `cert@cert.be` |
| **Bulgaria** | CERT Bulgaria | [www.govcert.bg](https://www.govcert.bg) | `cert@govcert.bg` |
| **Croatia** | National CERT (CERT.hr) | [www.cert.hr](https://www.cert.hr) | `ncert@cert.hr` |
| **Cyprus** | CSIRT-CY (DMRID) | [csirt.cy](https://csirt.cy) | `info@csirt.cy` |
| **Czechia** | NÚKIB / GovCERT.CZ | [www.nukib.cz](https://www.nukib.cz) | `cert@nukib.cz` |
| **Denmark** | CFCS | [www.cfcs.dk](https://www.cfcs.dk) | `cfcs@cfcs.dk` |
| **Estonia** | CERT-EE (RIA) | [www.cert.ee](https://www.cert.ee) | `cert@cert.ee` |
| **Finland** | NCSC-FI (Traficom) | [www.kyberturvallisuuskeskus.fi](https://www.kyberturvallisuuskeskus.fi) | `cert@traficom.fi` |
| **France** | CERT-FR (ANSSI) | [www.cert.ssi.gouv.fr](https://www.cert.ssi.gouv.fr) | `cert-fr@ssi.gouv.fr` |
| **Germany** | CERT-Bund (BSI) | [www.bsi.bund.de](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Cyber-Sicherheitslage/Reaktion/CERT-Bund/cert-bund_node.html) | `certbund@bsi.bund.de` |
| **Greece** | National CERT-GR | [www.cert.gr](https://www.cert.gr) | `cert@cert.gr` |
| **Hungary** | NCSC Hungary (NBSZ NKI) | [nki.gov.hu](https://nki.gov.hu) | `cert@nki.gov.hu` |
| **Ireland** | NCSC-IE | [www.ncsc.gov.ie](https://www.ncsc.gov.ie) | `certreport@ncsc.gov.ie` |
| **Italy** | CSIRT Italia (ACN) | [www.csirt.gov.it](https://www.csirt.gov.it) | `csirt@pec.acn.gov.it` |
| **Latvia** | CERT.LV | [cert.lv](https://cert.lv) | `cert@cert.lv` |
| **Lithuania** | NKSC | [www.nksc.lt](https://www.nksc.lt) | `cert@nksc.lt` |
| **Luxembourg** | CIRCL / GovCERT.lu | [www.circl.lu](https://www.circl.lu) | `info@circl.lu` |
| **Malta** | CSIRTMalta | [www.mca.org.mt](https://www.mca.org.mt) | `csirtmalta@gov.mt` |
| **Netherlands** | NCSC-NL | [www.ncsc.nl](https://www.ncsc.nl) | `cert@ncsc.nl` |
| **Poland** | CERT Polska (NASK) | [cert.pl](https://cert.pl) | `cert@cert.pl` |
| **Portugal** | CERT.PT (CNCS) | [www.cncs.gov.pt](https://www.cncs.gov.pt) | `cert@cert.pt` |
| **Romania** | CERT-RO | [www.cert.ro](https://www.cert.ro) | `cert@cert.ro` |
| **Slovakia** | SK-CERT (NASES) | [www.sk-cert.sk](https://www.sk-cert.sk) | `incident@sk-cert.sk` |
| **Slovenia** | SI-CERT | [www.cert.si](https://www.cert.si) | `cert@cert.si` |
| **Spain** | CCN-CERT / INCIBE-CERT | [www.incibe.es](https://www.incibe.es) | `incidencias@incibe-cert.es` |
| **Sweden** | CERT-SE (MSB) | [www.cert.se](https://www.cert.se) | `cert@cert.se` |

*Source: [ENISA CSIRTs Network](https://csirtsnetwork.eu/) / [ENISA CSIRT Inventory](https://www.enisa.europa.eu/tools/csirts-by-country-interactive-map). As of: 2026-04. Verify current contact details before initial notification.*

::: warning DUPLICATE NOTIFICATION
When using the national CSIRT as a fallback, the notification must be re-submitted without delay once the ENISA SRP is available again.
:::

## 4.3.8 Reporting Process

### Phase 1: Early Warning (≤ 24 hours)

**Responsible:** Security Lead

```
Actively exploited vulnerability / severe incident detected
    │
    ├── 1. Immediate notification
    │   ├── Alert Security Lead (immediately, any time of day)
    │   └── Create incident ticket (GitHub Issue, label: incident + enisa)
    │
    ├── 2. Initial assessment (≤ 2 hours)
    │   ├── Confirm vulnerability / incident
    │   ├── Identify affected products and versions
    │   ├── Verify active exploitation (KEV, threat intel)
    │   ├── Determine severity (CVSS)
    │   └── Confirm ENISA reporting obligation
    │
    ├── 3. Submit ENISA early warning (≤ 24h)
    │   ├── Template: /templates/enisa-early-warning
    │   ├── Platform: ENISA SRP (primary) or CSIRT (fallback)
    │   └── Minimum content per Art. 14(1):
    │       ├── Manufacturer identification
    │       ├── Affected product / affected versions
    │       ├── Nature of the vulnerability / incident
    │       ├── Severity (CVSS score + vector)
    │       ├── Confirmation of active exploitation
    │       ├── Initial assessment of impact
    │       └── Planned immediate measures
    │
    └── 4. Parallel measures
        ├── Activate communication plan (→ 5.4)
        ├── Inform management (for SEV-1/SEV-2)
        └── Initiate immediate measures (workaround, isolation)
```

**Evidence:** Screenshot of notification confirmation + timestamp in incident ticket

### Phase 2: Vulnerability Notification (≤ 72 hours)

**Responsible:** Security Lead + DevOps Lead

```
Detailed assessment in progress / completed
    │
    ├── 1. Deepen technical analysis
    │   ├── Complete version list of affected products
    │   ├── Assign CWE classification
    │   ├── Calculate complete CVSS v3.1 vector
    │   ├── Document attack vector and prerequisites
    │   └── Describe exploitation scenarios
    │
    ├── 2. Document measures
    │   ├── Mitigation measures already taken
    │   ├── Status of patch development
    │   ├── Available workarounds
    │   └── Recommended user measures
    │
    └── 3. Submit ENISA notification (≤ 72h)
        ├── Template: /templates/enisa-notification
        ├── Platform: ENISA SRP
        └── Minimum content per Art. 14(2):
            ├── Reference to early warning
            ├── Detailed vulnerability description
            ├── CVE-ID (if already assigned)
            ├── All affected product versions
            ├── CWE classification + CVSS vector
            ├── Technical details (attack vector, impact)
            ├── Status of mitigation measures taken
            ├── Available patch / workaround
            ├── Recommended user measures
            └── Estimated number of affected users / devices
```

**Evidence:** Notification confirmation + complete copy in incident ticket

### Phase 3: Final Report (≤ 14 days for vulnerabilities / ≤ 1 month for severe incidents)

**Responsible:** Security Lead

```
Remediation completed or well advanced
    │
    ├── 1. Prepare final documentation
    │   ├── Complete root cause analysis
    │   ├── Create complete incident timeline
    │   ├── List all measures taken
    │   ├── Identify patches / updates provided
    │   ├── Assess residual risks
    │   └── Formulate lessons learned
    │
    └── 2. Submit ENISA final report (vulnerability: ≤ 14 days after a corrective measure is available / severe incident: ≤ 1 month after the 72h notification)
        ├── Template: /templates/enisa-final-report
        ├── Platform: ENISA SRP
        └── Minimum content per Art. 14(3):
            ├── Reference to early warning and notification
            ├── Detailed vulnerability description
            ├── Root cause analysis
            ├── Complete event timeline
            ├── All corrective measures taken
            ├── Patches / updates provided (with version numbers)
            ├── Residual risks and their mitigation
            ├── Indicators of compromise (IoC), if available
            ├── Lessons learned
            └── Measures to prevent future incidents
```

**Evidence:** Notification confirmation + complete copy in incident ticket + archiving

## 4.3.9 User Notification (Art. 14(8))

In parallel to the ENISA notification, affected users must be informed **without delay** about the vulnerability and available corrective measures.

| Aspect | Details |
|--------|---------|
| **Trigger** | Any actively exploited vulnerability or severe incident |
| **Deadline** | Without delay (Art. 14(8)) |
| **Primary channel** | GitHub Security Advisory |
| **Secondary channel** | Email to known customers (for SEV-1/SEV-2) |
| **Content** | Vulnerability description, impact, recommended measures, available patch |
| **Template** | [Vulnerability Report](/en/templates/vulnerability-report) |
| **Responsible** | Security Lead + Product Owner |

::: warning COORDINATION WITH ENISA
The user notification must not contain details that could facilitate exploitation of the vulnerability as long as no patch is available. A delayed disclosure may be agreed in coordination with ENISA (Art. 14(7)).
:::

### Informing users is risk-based, not indiscriminate

::: info PROPORTIONATE DISCLOSURE
Art. 14(8) does **not** imply that information about an actively exploited vulnerability or a severe incident must be made public or disclosed indiscriminately. In light of the nature of the product, the affected users and the potential impact, manufacturers **may limit the disclosure of detailed information to the relevant users or customers concerned**.

This applies in particular to products used in **sensitive or essential environments**, where public disclosure of technical details could itself increase cybersecurity risks or facilitate further exploitation.
:::

| Phase | Appropriate scope of disclosure |
|-------|--------------------------------|
| Before the vulnerability is addressed or mitigated | Limited, targeted disclosure to impacted users and customers; no technical detail that would facilitate exploitation |
| Once adequately addressed or mitigated | **Broader disclosure may be appropriate** — e.g. to raise general awareness or to let users verify that their products are no longer affected. Level of detail and timing remain proportionate to residual exploitation risk, the nature of the product and the interests of the users concerned |
| Once a security update has been made available | **Public disclosure is mandatory** under point (4) of Annex I Part II — description, affected products, impact, severity and remediation → [3.5 Handling Requirements](/en/vulnerability-management/handling-requirements) |

::: danger IF YOU DO NOT INFORM USERS IN TIME, THE CSIRT MAY
Where a manufacturer fails to inform users in a timely manner, the CSIRTs that received the notification **may provide that information to users themselves**, where this is considered proportionate and necessary to prevent or mitigate the impact of the vulnerability or incident. Control over the message is lost at that point.
:::

## 4.3.10 Documentation and Record-Keeping

Each ENISA notification is fully documented. This documentation serves as **evidence of compliance** vis-a-vis market surveillance authorities (Art. 52 CRA).

### Mandatory Documentation per Notification

| Documentation Component | Storage Location | Retention Period |
|------------------------|------------------|-----------------|
| Complete copy of each ENISA notification | Incident ticket (GitHub Issue) | 10 years |
| Timestamps of all notifications and actions | Incident ticket + Git log | 10 years |
| Acknowledgement of receipt by ENISA / CSIRT | Incident ticket (attachment) | 10 years |
| Communication log (internal + external) | Incident ticket | 10 years |
| User notifications (advisory + email) | GitHub Advisory + email archive | 10 years |
| Post-mortem / lessons learned | Incident ticket | 10 years |

### Reference Numbering Scheme

All notifications use a uniform reference numbering scheme:

| Notification Type | Format | Example |
|-------------------|--------|---------|
| Early warning | `EW-YYYY-NNN` | EW-2026-001 |
| Vulnerability notification | `VN-YYYY-NNN` | VN-2026-001 |
| Final report | `FR-YYYY-NNN` | FR-2026-001 |
| Internal incident | `INC-YYYY-NNN` | INC-2026-001 |

## 4.3.11 Preparatory Measures (before 11.09.2026)

The following measures must be completed before the reporting obligation enters into force:

| No. | Measure | Responsible | Deadline | Status |
|-----|---------|-------------|----------|--------|
| 1 | Complete ENISA SRP registration | Security Lead | As soon as available | Pending |
| 2 | Verify national CSIRT contact details | Security Lead | Q2 2026 | Pending |
| 3 | Prepare and internally test reporting templates | Security Lead | Q2 2026 | Done |
| 4 | Train incident response team on reporting process | Security Lead | Q2 2026 | Pending |
| 5 | Conduct test notification via ENISA SRP | Security Lead | Q3 2026 | Pending |
| 6 | Update escalation paths and contact lists | Security Lead | Q2 2026 | Pending |
| 7 | Securely store ENISA access credentials | Security Lead | Q3 2026 | Pending |
| 8 | Test reporting process in tabletop exercise | Security Lead | Q3 2026 | Pending |

## 4.3.12 Decision Tree: Reporting Obligation

```
Security event detected
    │
    ├── Is a vulnerability in our product affected?
    │   ├── No → No CRA reporting obligation (check NIS2 if applicable)
    │   └── Yes ↓
    │
    ├── Is the vulnerability being actively exploited?
    │   ├── Yes → REPORTABLE (Art. 14(1))
    │   │         → 24h early warning + 72h notification + 14d final report (after a corrective measure is available)
    │   └── No ↓
    │
    ├── Is it a severe security incident?
    │   ├── Yes → REPORTABLE (Art. 14(3))
    │   │         → 24h early warning + 72h notification + 1 month final report (after the 72h notification)
    │   └── No ↓
    │
    └── Standard vulnerability handling
        → Vulnerability management (→ Chapter 3)
        → Patch management per SLA
        → No ENISA reporting obligation
```

> Source and legal status of the interpretations on this page: [Commission Guidance on the CRA](/en/clarifications/commission-guidance).
