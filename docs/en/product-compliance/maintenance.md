# 9.4 Maintenance & Updates

## 9.4.1 Update Triggers

The CRA Compliance Statement must be updated upon the following events:

| Trigger | Affected Fields | Deadline | Priority |
|---------|-----------------|----------|:--------:|
| New major/minor release | `product.version`, `conformity.*`, `sbom_url` | Before placing on the market | 🔴 High |
| Change in CRA product category | `cra_classification.*` | Immediately | 🔴 High |
| New/changed harmonised standards | `harmonised_standards[]` | Within 30 days | 🟡 Medium |
| New CRA delegated/implementing acts | Depends on content | Within 30 days | 🟡 Medium |
| Change in support period | `support_period.*` | Immediately | 🔴 High |
| Change of conformity module | `cra_classification.conformity_module` | Before next release | 🟡 Medium |
| Change in manufacturer data | `manufacturer.*` | Within 14 days | 🟢 Low |
| New Vulnerability Disclosure Policy | `security_documentation.*` | Within 14 days | 🟡 Medium |

::: info LEGAL BASIS
**Art. 10(12) CRA:** *"The manufacturer shall ensure that the product [...] remains in conformity with the essential requirements throughout the support period."*

This implies the obligation to keep the public compliance presentation up to date as well.
:::

## 9.4.2 Review Cycle

### Regular Reviews

| Cycle | Scope | Responsible |
|-------|-------|-------------|
| **Every release** | Full review of all fields | Product Owner |
| **Semi-annually** | Proactive review even without release | Security Lead |
| **Annually** | Alignment with current CRA state (delegated acts) | Compliance Officer |

### Review Checklist

- [ ] All required fields populated and current?
- [ ] Referenced URLs reachable?
- [ ] Support period still valid?
- [ ] DoC date current (for new release)?
- [ ] SBOM link points to current version?
- [ ] Harmonised standards still applicable?
- [ ] Product category still correct?

## 9.4.3 Versioning

CRA Compliance Statements are versioned alongside the product code:

| Aspect | Rule |
|--------|------|
| **Storage** | `.compliance/cra-statement.json` in the product repository |
| **Versioning** | Git history = audit trail |
| **Change log** | `metadata.statement_version` is incremented with each content change |
| **Release coupling** | Statement is frozen with the release tag |

### Example Workflow

```text
1. Developer updates .compliance/cra-statement.json
2. Pull request / code review
3. CI validates JSON schema (→ 9.3)
4. Merge into main
5. Release tag → statement is automatically published (→ 9.2)
```

## 9.4.4 Responsibilities

| Role | Task | When |
|------|------|------|
| **Product Owner** | Content accuracy, recognising triggers | Every release |
| **Security Lead** | Verifying security-relevant fields (SBOM, CVD, standards) | Semi-annually + upon incidents |
| **DevOps** | Maintaining CI/CD pipeline, ensuring schema validation | Upon pipeline changes |
| **Compliance Officer** | Identifying regulatory changes, initiating schema updates | Annually + ad hoc |

## 9.4.5 Automation

### CI/CD Checks

| Check | When | Action on Failure |
|-------|------|-------------------|
| JSON schema validation | Every PR/push | Block build |
| Required field completeness | Every PR/push | Block build |
| URL reachability | Weekly (scheduled) | Warning in Slack/Teams |
| Support expiry warning | Daily | Alert 90/30/7 days before expiry |
| Statement age warning | Monthly | Alert if >6 months without update |

### Automatic Publication

```text
Release tag → CI/CD → compliance portal updated
```

Details: [9.2.6 CI/CD Integration](/en/product-compliance/publication-strategy#_9-2-6-ci-cd-integration)

### Notifications

| Event | Channel | Recipients |
|-------|---------|------------|
| Statement published | Slack/Teams | Product Owner, Security Lead |
| Validation failed | CI/CD | Developers |
| Support expiring | Email + Slack | Product Owner, Management |
| Statement stale (>6 months) | Slack | Product Owner |

## 9.4.6 Special Cases

### Product End-of-Life

When a product reaches the end of its support period:

1. Set `support_period.phase` to `eol`
2. Compliance statement remains published (10-year retention requirement, Art. 10(13))
3. Reference to successor product (if available)
4. No further security updates — communicate clearly

### Substantial Modification (Art. 20)

In case of a substantial modification:

1. Conduct a new conformity assessment (→ [1.8 Substantial Modifications](/en/overview/substantial-modifications))
2. Issue a new EU Declaration of Conformity
3. Fully update the CRA Compliance Statement
4. Publish as a new version on the portal

## 9.4.7 Cross-References

| Topic | Link |
|-------|------|
| JSON schema and validation | [9.3 Machine-Readable Format](/en/product-compliance/machine-readable) |
| Publication pipeline | [9.2 Publication Strategy](/en/product-compliance/publication-strategy) |
| Support & Lifecycle | [6.4 Support & Lifecycle](/en/technical-documentation/support-period) |
| Substantial Modifications | [1.8 Substantial Modifications](/en/overview/substantial-modifications) |
| SBOM retention | [2.3 Archival & Retention](/en/sbom-signing/storage) |
