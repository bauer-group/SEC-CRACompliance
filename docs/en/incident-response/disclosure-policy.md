# 4.2 Vulnerability Disclosure Policy

## 4.2.1 Coordinated Vulnerability Disclosure (CVD)

This policy defines the process for Coordinated Vulnerability Disclosure pursuant to CRA Art. 13(6) and ISO/IEC 29147:2018.

::: info LEGAL BASIS
**Art. 13(6) CRA:** *"The manufacturer shall facilitate the coordinated disclosure of vulnerabilities by designating a contact point for the reporting of vulnerabilities and setting out its coordinated vulnerability disclosure policy."*
:::

## 4.2.2 Scope

This policy applies to all products with digital elements of BAUER GROUP, including:

- Software products (web applications, APIs, libraries)
- Container images
- Firmware (ESP32, STM32, Zephyr)
- Publicly accessible services

## 4.2.3 Reporting Channels

### 1. GitHub Security Advisories (preferred)

**For each repository:** Security → Advisories → New Draft Advisory

Advantages:

- Confidential communication
- Integrated CVE assignment
- Patch coordination in private fork
- Structured capture

### 2. Email

**Address:** <disclosure@cra.docs.bauer-group.com>

- Encryption: PGP key in the repository (`SECURITY.md`)
- Language: German or English

### 3. SECURITY.md

Each repository contains a `SECURITY.md` with:

- Reporting channels
- PGP key (or link)
- Supported versions
- Response times

## 4.2.4 Process for External Reporters

### What We Expect

Security researchers reporting vulnerabilities are asked to:

- Not disclose the vulnerability publicly before a fix is available
- Not exfiltrate or destroy any data
- Not conduct denial-of-service attacks
- Allow a reasonable timeframe for remediation

### What We Commit To

| Commitment | Details |
|------------|---------|
| **Acknowledgement of receipt** | Within **48 hours** |
| **Initial assessment** | Within **7 days** |
| **Status update** | At least every **14 days** |
| **Coordinated Vulnerability Disclosure** | Jointly agreed date, default **90 days** after report |
| **Credit** | Named acknowledgement in the advisory (upon request) |
| **No legal action** | Against reporters who comply with this policy |

### Disclosure Timeline

```
Day 0:   Vulnerability reported
Day 2:   Acknowledgement of receipt
Day 7:   Initial assessment and severity classification
Day 14:  Status update to reporter
Day 28:  Status update to reporter
Day 60:  Patch should be developed
Day 90:  Coordinated Vulnerability Disclosure (default deadline)
         ├── Publish security advisory
         ├── Assign CVE-ID
         ├── Publish patch release
         └── Reporter credited in advisory (upon request)
```

::: warning EXCEPTION
For actively exploited vulnerabilities, the disclosure timeline is shortened. In such cases, a patch is provided without delay and the ENISA reporting obligation is triggered (24h).
:::

## 4.2.5 Internal Process for Incoming Reports

```
External vulnerability report
    │
    ├── 1. Confirm receipt (≤ 48h)
    │   └── Automatically or by Security Lead
    │
    ├── 2. Triage (≤ 7 days)
    │   ├── Reproduce vulnerability
    │   ├── Assess severity (CVSS)
    │   ├── Identify affected products
    │   └── Check: Actively exploited?
    │       └── Yes → ENISA reporting obligation + accelerated fix
    │
    ├── 3. Patch development
    │   ├── Develop fix (if applicable in private fork)
    │   ├── Conduct tests
    │   └── Security review
    │
    ├── 4. Coordinated Vulnerability Disclosure
    │   ├── Agree on timing with reporter
    │   ├── Prepare security advisory
    │   ├── Request CVE-ID (via GitHub or MITRE)
    │   └── Prepare patch release
    │
    └── 5. Publication
        ├── Publish security advisory
        ├── Publish patch release
        ├── Update SBOM
        ├── Inform users
        └── Thank and credit reporter
```

## 4.2.6 Safe Harbor

BAUER GROUP will not take legal action against security researchers who:

- Act in good faith
- Comply with this Disclosure Policy
- Do not access, copy or destroy data without authorisation
- Do not impair services through denial-of-service
- Do not endanger affected third parties

## 4.2.7 Compliance References

| Standard | Coverage |
|----------|----------|
| CRA Art. 13(6) | Contact point + CVD policy |
| ISO/IEC 29147:2018 | Vulnerability Disclosure |
| ISO/IEC 30111:2019 | Vulnerability Handling Processes |
