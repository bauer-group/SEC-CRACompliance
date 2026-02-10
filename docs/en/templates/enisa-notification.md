# A.4 ENISA Notification (72h)

::: warning DEADLINE
This notification must be sent to ENISA / the competent national CSIRT within **72 hours** of becoming aware. It supplements the Early Warning (24h).
:::

## A.4.1 Template: Vulnerability Notification pursuant to Art. 14(2)(b) CRA

---

### 1. Reference to Early Warning

| Field | Value |
|-------|-------|
| **Early Warning Reference** | [EW-YYYY-NNN] |
| **Date of Early Warning** | [YYYY-MM-DD HH:MM UTC] |
| **Notification Reference** | [SM-YYYY-NNN] |
| **Notification Date** | [YYYY-MM-DD HH:MM UTC] |

### 2. Manufacturer Identification

| Field | Value |
|-------|-------|
| **Company** | BAUER GROUP |
| **Contact Person** | [Name, Role] |
| **Email** | <disclosure@cra.docs.bauer-group.com> |
| **Phone** | [Phone number] |

### 3. Affected Product (updated)

| Field | Value |
|-------|-------|
| **Product Name** | [Name] |
| **Product Type** | [Software / Firmware / Container Image] |
| **All Affected Versions** | [Complete version list] |
| **Unaffected Versions** | [Versions that are not affected] |
| **Fixed Version** | [Version containing the fix, if already available] |
| **Estimated Number of Users/Devices** | [Updated estimate] |
| **Affected Platforms** | [OS, Architecture, Deployment type] |

### 4. Detailed Vulnerability Description

| Field | Value |
|-------|-------|
| **CVE ID** | [CVE-YYYY-XXXXX] |
| **CWE Classification** | [CWE-XXX: Description] |
| **CVSS v3.1 Vector** | [e.g. AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H] |
| **CVSS Score** | [X.X] |
| **Severity** | [CRITICAL / HIGH] |

**Technical Description:**

[Detailed technical description of the vulnerability, including:

- Affected component / function
- Type of vulnerability (Buffer Overflow, Injection, etc.)
- Attack vector and prerequisites
- Impact upon successful exploitation]

**Exploitation Scenarios:**

[Description of known or possible exploitation scenarios]

### 5. Active Exploitation

| Field | Value |
|-------|-------|
| **Active Exploitation Confirmed** | [Yes / No / Suspected] |
| **Type of Exploitation** | [e.g. Targeted Attack, Mass Exploitation] |
| **Source of Information** | [Threat Intelligence, Customer report, etc.] |
| **Listed in KEV Catalog** | [Yes / No] |
| **Known Threat Actors** | [If known] |

### 6. Impact Analysis (updated)

| Impact | Assessment | Details |
|--------|------------|---------|
| **Confidentiality** | [High / Medium / Low] | [What data is affected] |
| **Integrity** | [High / Medium / Low] | [What manipulation is possible] |
| **Availability** | [High / Medium / Low] | [What outages are possible] |
| **Personal Data** | [Yes / No] | [Type of data] |
| **Physical Safety** | [Yes / No] | [If Firmware/IoT] |

### 7. Actions Taken

| Action | Status | Date |
|--------|--------|------|
| Vulnerability analysed | Completed | [Date] |
| Workaround provided | [Completed/In Progress/Not Started] | [Date] |
| Patch developed | [Completed/In Progress/Not Started] | [Date] |
| Patch tested | [Completed/In Progress/Not Started] | [Date] |
| Patch released | [Completed/In Progress/Not Started] | [Date] |
| Users notified | [Completed/In Progress/Not Started] | [Date] |
| SBOM updated | [Completed/In Progress/Not Started] | [Date] |

### 8. Recommended Actions for Users

[Clear instructions for affected users, e.g.:

- Update to version X.Y.Z
- Workaround until patch is available
- Configuration change]

### 9. Next Steps

- [ ] Final Report (<=14 days, [planned date])
- [ ] Further patches (if necessary)
- [ ] Monitoring of exploitation activity

---

**Note:** This notification will be supplemented by a Final Report within 14 days.
