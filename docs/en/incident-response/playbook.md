# 5.1 Incident Response Playbook

## Purpose

This playbook defines the binding process for the detection, assessment, containment, remediation and post-incident review of cybersecurity incidents pursuant to CRA Art. 14 and Annex I, Part II.

## Escalation Levels

| Level | Designation | Criteria | Examples |
|-------|-------------|----------|----------|
| **SEV-1** | Critical | Actively exploited vulnerability in production, data loss, full compromise | Zero-day exploit, ransomware, data exfiltration |
| **SEV-2** | High | Exploitable vulnerability (PoC available), partial compromise | CVE with public exploit, lateral movement detected |
| **SEV-3** | Medium | Vulnerability without known exploit, limited impact | New CRITICAL CVE without PoC, configuration error |
| **SEV-4** | Low | Informational findings, best-practice deviations | LOW/MEDIUM CVEs, policy violations |

## Playbook: Phase 1 – Detection & Triage

**Timeframe:** 0 – 1 hour

```
Security event detected
    │
    ├── Identify source
    │   ├── CVE monitor (automated)
    │   ├── Dependabot Alert
    │   ├── External report (SECURITY.md)
    │   ├── Internal detection
    │   └── ENISA / CSIRT notification
    │
    ├── Initial assessment by Security Lead
    │   ├── Determine severity (SEV-1 to SEV-4)
    │   ├── Identify affected products
    │   ├── Is the vulnerability being actively exploited?
    │   └── Is customer data affected?
    │
    └── Escalation decision
        ├── SEV-1/SEV-2 → Immediate escalation to management
        │   └── If actively exploited → ENISA 24h deadline starts
        ├── SEV-3 → Resolution within 72h
        └── SEV-4 → Standard processing
```

**Triage Checklist:**

- [ ] Event source documented
- [ ] Severity determined (SEV-1/2/3/4)
- [ ] Affected products and versions identified
- [ ] Active exploitation verified (KEV catalog, threat intelligence)
- [ ] ENISA reporting obligation assessed
- [ ] Incident ticket created (GitHub Issue with label `incident`)

## Playbook: Phase 2 – Containment

**Timeframe:** 1 – 4 hours (SEV-1), 4 – 24 hours (SEV-2)

```
Immediate measures
    │
    ├── Short-term containment
    │   ├── Isolate affected service (if possible)
    │   ├── Implement workaround
    │   ├── Restrict access
    │   └── Evidence preservation (logs, artefacts)
    │
    ├── In case of active exploitation
    │   ├── Send ENISA early warning (≤ 24h)
    │   ├── Warn affected users
    │   └── Publish temporary mitigation
    │
    └── Communication
        ├── Inform internal team
        ├── Brief management (SEV-1/2)
        └── Activate communication plan
```

**Containment Checklist:**

- [ ] Immediate measures implemented
- [ ] Evidence secured (logs, screenshots, artefacts)
- [ ] ENISA early warning sent (if reportable)
- [ ] Affected users informed (if required)
- [ ] Containment measures documented

## Playbook: Phase 3 – Remediation

**Timeframe:** 4 – 48 hours (SEV-1), 1 – 7 days (SEV-2)

```
Patch development
    │
    ├── Root cause analysis
    │   ├── Locate vulnerability in code
    │   ├── Trace exploitation path
    │   └── Identify affected components
    │
    ├── Implement fix
    │   ├── Dependency update OR code fix
    │   ├── Tests (unit, integration, security)
    │   └── Security review (four-eyes principle)
    │
    ├── Hotfix release
    │   ├── CI/CD Pipeline
    │   ├── Update SBOM
    │   ├── Sign release (Cosign)
    │   └── Publish release
    │
    ├── ENISA notification (72h)
    │   └── Detailed vulnerability notification
    │
    └── User update
        ├── Publish security advisory
        ├── Update instructions
        └── Assign CVE-ID (if not yet assigned)
```

**Remediation Checklist:**

- [ ] Root cause identified and documented
- [ ] Patch developed and tested
- [ ] Security review completed
- [ ] Hotfix release published (signed)
- [ ] SBOM updated
- [ ] ENISA notification (72h) sent
- [ ] Security advisory published
- [ ] Users informed

## Playbook: Phase 4 – Recovery & Validation

**Timeframe:** 1 – 7 days after fix

```
Recovery
    │
    ├── Patch distribution
    │   ├── All users have access to the update
    │   ├── Auto-update functioning (where implemented)
    │   └── OTA distribution successful (firmware)
    │
    ├── Validation
    │   ├── Vulnerability closed in production
    │   ├── No regressions
    │   ├── Monitoring shows normal operation
    │   └── CVE monitor confirms fix
    │
    └── Update documentation
        ├── Close CVE issue
        ├── Update incident ticket
        └── Finalise release notes
```

## Playbook: Phase 5 – Post-Incident Review

**Timeframe:** 7 – 14 days after fix

```
Lessons Learned
    │
    ├── ENISA final report (≤ 14 days)
    │   ├── Root cause analysis
    │   ├── Measures taken
    │   ├── Affected users/products
    │   └── Improvement measures
    │
    ├── Internal post-mortem
    │   ├── What went well?
    │   ├── What can be improved?
    │   ├── Process adjustments identified?
    │   └── Tooling improvements?
    │
    └── Process improvement
        ├── Update playbook
        ├── Adjust monitoring
        ├── Derive training measures
        └── Update documentation
```

**Post-Incident Review Checklist:**

- [ ] ENISA final report sent (≤ 14 days)
- [ ] Post-mortem conducted
- [ ] Lessons learned documented
- [ ] Process improvements implemented
- [ ] Playbook updated (if necessary)
- [ ] Incident ticket closed

## Contact List

| Role | Reachability | Escalation Time |
|------|-------------|-----------------|
| Security Lead | Email + Teams | Immediately (SEV-1/2), 4h (SEV-3) |
| DevOps Lead | Email + Teams | 1h (SEV-1/2), 8h (SEV-3) |
| Management | Email + Phone | 2h (SEV-1), 4h (SEV-2) |
| ENISA / CSIRT | Single Reporting Platform | Per Art. 14 CRA |

::: warning CONTACT DETAILS
Specific contact details (email, phone, ENISA credentials) are maintained in a separate, non-public document and are accessible to the Incident Response Team.
:::
