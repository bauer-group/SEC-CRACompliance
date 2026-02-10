# ENISA Early Warning (24h)

::: danger TIME-CRITICAL
This notification must be sent to ENISA / the competent national CSIRT within **24 hours** of becoming aware of an actively exploited vulnerability or a severe security incident.
:::

## Template: Early Warning pursuant to Art. 14(2)(a) CRA

---

### 1. Manufacturer Identification

| Field | Value |
|-------|-------|
| **Company** | BAUER GROUP |
| **Address** | [Full postal address] |
| **Contact Person** | [Name, Role] |
| **Email** | <disclosure@cra.docs.bauer-group.com> |
| **Phone** | [Phone number] |
| **Notification Date** | [YYYY-MM-DD HH:MM UTC] |
| **Notification Reference** | [EW-YYYY-NNN] |

### 2. Type of Notification

- [ ] Actively exploited vulnerability (Art. 14(1))
- [ ] Severe security incident (Art. 14(3))

### 3. Affected Product

| Field | Value |
|-------|-------|
| **Product Name** | [Name] |
| **Product Type** | [Software / Firmware / Container Image] |
| **Affected Versions** | [v1.0.0 -- v1.3.2] |
| **CRA Product Category** | [Standard / Class I / Class II / Critical] |
| **Estimated Number of Users** | [Number / Estimate] |
| **Member States of Availability** | [List of EU Member States where the product has been made available] |

### 4. Vulnerability / Incident

| Field | Value |
|-------|-------|
| **CVE ID** | [CVE-YYYY-XXXXX or "not yet assigned"] |
| **CVSS Score** | [X.X] |
| **Severity** | [CRITICAL / HIGH] |
| **Description** | [Brief description of the vulnerability/incident] |
| **Attack Vector** | [Network / Local / Physical] |
| **Active Exploitation Confirmed** | [Yes / Suspected / Unknown] |
| **Source of Detection** | [Internal detection / External report / Threat Intelligence / CVE DB] |

### 5. Initial Impact Assessment

| Field | Value |
|-------|-------|
| **Confidentiality** | [High / Medium / Low / None] |
| **Integrity** | [High / Medium / Low / None] |
| **Availability** | [High / Medium / Low / None] |
| **Personal Data Affected** | [Yes / No / Unclear] |

### 6. Immediate Measures

| Measure | Status | Timeframe |
|---------|--------|-----------|
| [e.g. Workaround published] | [Implemented / Planned] | [Timestamp] |
| [e.g. Patch in development] | [Implemented / Planned] | [ETA] |
| [e.g. User notification] | [Implemented / Planned] | [Timestamp] |

### 7. Next Steps

- [ ] Detailed analysis (within 72h)
- [ ] Patch development (ETA: [Date])
- [ ] User notification (ETA: [Date])
- [ ] Follow-up notification to ENISA (<=72h)

---

**Note:** This Early Warning will be supplemented by a detailed vulnerability notification within 72 hours.
