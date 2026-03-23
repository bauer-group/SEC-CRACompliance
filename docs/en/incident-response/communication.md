# 4.4 Communication Plan

## 4.4.1 Overview

The communication plan defines the internal and external communication channels for security incidents. The objective is rapid, consistent and legally compliant information sharing.

## 4.4.2 Communication Matrix

### Internal Communication

| Severity | Recipients | Channel | Timeframe |
|----------|-----------|---------|-----------|
| **SEV-1** | Security Lead, DevOps Lead, Management, Dev Team | Teams (Incident Channel) + Phone | Immediately |
| **SEV-2** | Security Lead, DevOps Lead, affected Dev Team | Teams (Incident Channel) | ≤ 1 hour |
| **SEV-3** | Security Lead, affected Dev Team | Teams + GitHub Issue | ≤ 4 hours |
| **SEV-4** | Affected Dev Team | GitHub Issue | ≤ 24 hours |

### External Communication

| Recipient | Channel | Timeframe | Responsible |
|-----------|---------|-----------|-------------|
| **ENISA / CSIRT** | Single Reporting Platform | ≤ 24h (early warning) | Security Lead |
| **Affected users** | GitHub Advisory + Email | Without delay (after fix) | Security Lead + Product Owner |
| **Public** | GitHub Security Advisory | After patch availability | Security Lead |
| **Security researchers** (CVD) | GitHub Advisory / Email | Per Disclosure Policy | Security Lead |

## 4.4.3 Communication Templates

### Internal Initial Notification (Teams)

```
🚨 SECURITY INCIDENT – SEV-[1/2/3/4]

Product: [Product name] v[Version]
Vulnerability: [CVE-ID or brief description]
Severity: [CRITICAL/HIGH/MEDIUM/LOW]
Actively exploited: [Yes/No/Unknown]
ENISA reportable: [Yes/No]

Status: [Triage/Containment/Remediation/Closed]
Next steps: [Description]
Responsible: [Name]

Incident ticket: [Link to GitHub Issue]
```

### External User Notification

```
Security Notice – [Product name]

Dear user,

we have identified and remediated a security vulnerability
in [Product name].

Affected versions: [Versions]
Fixed version: [Version]
Severity: [CRITICAL/HIGH]
CVE: [CVE-ID]

Recommended action:
Please update to version [X.Y.Z].

Details: [Link to Security Advisory]

For questions, please contact: disclosure@bauer-group.com
```

## 4.4.4 Escalation Paths

```
SEV-1 (Critical):
Developer → Security Lead → Management → ENISA (24h)
                                       → Users (without delay)

SEV-2 (High):
Developer → Security Lead → Management (info)
                          → Users (after fix)

SEV-3 (Medium):
Developer → Security Lead → Patch in next release

SEV-4 (Low):
Developer → Backlog → Regular release
```

## 4.4.5 Teams Integration

The existing Teams notification (`teams-notifications.yml`) is extended for security incidents:

- **Incident Channel:** Dedicated Teams channel for security incidents
- **Automatic Alerts:** For CRITICAL/HIGH CVE findings from the CVE monitor
- **Status Updates:** Automatic updates on status changes of the incident ticket

## 4.4.6 Documentation Requirement

All communication in the context of a security incident is documented:

- Timestamp of each communication
- Recipient and channel
- Content (summary)
- Confirmation of receipt

This documentation is part of the incident ticket and serves as evidence vis-a-vis supervisory authorities.
