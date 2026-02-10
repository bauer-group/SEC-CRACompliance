# 4.3 ENISA Reporting Process

## 4.3.1 Legal Basis

Pursuant to Art. 14 CRA, manufacturers are required to report certain security events to ENISA or the competent national CSIRT authority. The reporting obligation applies from **11 September 2026**.

::: info LEGAL BASIS
**Art. 14(1) CRA:** *"The manufacturer shall notify any actively exploited vulnerability contained in the product with digital elements simultaneously to the designated CSIRT and to ENISA. The manufacturer shall submit an early warning within 24 hours of becoming aware of it."*

**Art. 14(2) CRA:** *"The manufacturer shall submit within 72 hours of becoming aware a vulnerability notification containing a general description of the vulnerability, an initial assessment of the severity and impact, as well as information on corrective measures taken."*

**Art. 14(3) CRA:** *"The manufacturer shall submit within 14 days of becoming aware a final report containing a detailed description of the vulnerability, information on corrective or mitigating measures taken, and, where applicable, indicators of compromise."*
:::

::: danger CRITICAL DEADLINES

| Notification | Deadline | Deadline Starts |
|--------------|----------|-----------------|
| Early warning | **24 hours** | Becoming aware of the actively exploited vulnerability / severe incident |
| Vulnerability notification | **72 hours** | Becoming aware |
| Final report | **14 days** | Becoming aware |

:::

## 4.3.2 Reportable Events

### Actively Exploited Vulnerability (Art. 14(1))

A vulnerability in a BAUER GROUP product is being actively exploited in the wild. Pursuant to Art. 3(42) CRA, active exploitation exists when reliable evidence shows that the vulnerability has been exploited by a malicious actor in a system without the permission of the owner.

**Indicators of active exploitation:**

- Inclusion in the **KEV catalog** (CISA Known Exploited Vulnerabilities)
- **Threat intelligence feeds** report exploitation activity
- **Report by customers or security researchers** with evidence of exploitation
- **Own detection** in logs, monitoring or incident response processes
- **Public reports** (vendor advisories, blogs, forums) about attacks

### Severe Security Incident (Art. 14(3))

An incident that significantly affects the security of the product or its users (Art. 3(43) CRA).

**Criteria for classification as a severe incident:**

| Criterion | Description | Examples |
|-----------|-------------|----------|
| Integrity compromise | The integrity of the product or its supply chain is compromised | Manipulated source code, compromised build pipeline |
| Unauthorised data access | Access to user data without authorisation | Data leak, API abuse, configuration error |
| Availability loss | Security-relevant functions are impaired | Auth bypass, update mechanism disrupted |
| Compromised updates | Manipulated updates are delivered | Supply chain attack, signing key compromise |

## 4.3.3 Roles and Responsibilities

| Role | Responsibility in the Reporting Process |
|------|-----------------------------------------|
| **Security Lead** | Assess reporting obligation, submit ENISA notifications, overall coordination |
| **DevOps Lead** | Technical analysis, patch coordination, infrastructure measures |
| **Product Owner** | User notification, impact assessment, release decision |
| **Management** | Approval for SEV-1/SEV-2, resource allocation, escalation |
| **Developer** | Root cause analysis, patch development, security review |

## 4.3.4 Reporting Platform

### ENISA Single Reporting Platform (SRP)

From 11 September 2026, the ENISA Single Reporting Platform is available as the central reporting point:

| Property | Details |
|----------|---------|
| **URL** | To be provided by ENISA (expected: `https://reporting.enisa.europa.eu`) |
| **Access** | Registration as manufacturer pursuant to Art. 14(4) CRA required |
| **Format** | Structured online form + API access (planned) |
| **Language** | English (EU-wide), possibly national languages |
| **Confirmation** | Automatic acknowledgement of receipt by the platform |

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

*Source: [ENISA CSIRTs Network](https://csirtsnetwork.eu/) / [ENISA CSIRT Inventory](https://www.enisa.europa.eu/tools/csirts-by-country-interactive-map). As of: 2026-02. Verify current contact details before initial notification.*

::: warning DUPLICATE NOTIFICATION
When using the national CSIRT as a fallback, the notification must be re-submitted without delay once the ENISA SRP is available again.
:::

## 4.3.5 Reporting Process

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

### Phase 3: Final Report (≤ 14 days)

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
    └── 2. Submit ENISA final report (≤ 14 days)
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

## 4.3.6 User Notification (Art. 14(8))

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

## 4.3.7 Documentation and Record-Keeping

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

## 4.3.8 Preparatory Measures (before 11.09.2026)

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

## 4.3.9 Decision Tree: Reporting Obligation

```
Security event detected
    │
    ├── Is a vulnerability in our product affected?
    │   ├── No → No CRA reporting obligation (check NIS2 if applicable)
    │   └── Yes ↓
    │
    ├── Is the vulnerability being actively exploited?
    │   ├── Yes → REPORTABLE (Art. 14(1))
    │   │         → 24h early warning + 72h notification + 14d final report
    │   └── No ↓
    │
    ├── Is it a severe security incident?
    │   ├── Yes → REPORTABLE (Art. 14(3))
    │   │         → 24h early warning + 72h notification + 14d final report
    │   └── No ↓
    │
    └── Standard vulnerability handling
        → Vulnerability management (→ Chapter 3)
        → Patch management per SLA
        → No ENISA reporting obligation
```
