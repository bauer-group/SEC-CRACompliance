# 6.1 Dependency Policy

## Principles

### 1. Principle of Minimality

Only use dependencies that are necessary for the product's functionality. Unnecessary dependencies increase the attack surface.

### 2. Trustworthiness

Dependencies must originate from trustworthy sources and be actively maintained.

### 3. License Compliance

Only use dependencies with compatible licenses.

### 4. Versioning

Dependencies must be pinned to specific versions (no `latest`, no ranges).

## Permitted Licenses

| License | Status |
|---------|--------|
| MIT | ✅ Permitted |
| Apache-2.0 | ✅ Permitted |
| BSD-2-Clause | ✅ Permitted |
| BSD-3-Clause | ✅ Permitted |
| ISC | ✅ Permitted |
| CC0-1.0 | ✅ Permitted |
| Unlicense | ✅ Permitted |
| MPL-2.0 | ⚠️ Review required |

## Prohibited Licenses

| License | Status | Reason |
|---------|--------|--------|
| GPL-2.0 | ❌ Prohibited | Copyleft – may affect proprietary code |
| GPL-3.0 | ❌ Prohibited | Strong copyleft |
| AGPL-3.0 | ❌ Prohibited | Network copyleft |
| SSPL | ❌ Prohibited | Server-side copyleft |
| EUPL (without review) | ⚠️ Review | Compatibility review required |

License compliance checks are performed automatically via `modules-license-compliance.yml`.

## Evaluation Criteria for New Dependencies

Before adopting a new dependency:

| Criterion | Minimum Requirement |
|-----------|---------------------|
| **Maintenance** | Last commit < 6 months |
| **Community** | >100 GitHub Stars or established project |
| **Security History** | No unresolved CRITICAL CVEs |
| **License** | On the permitted list |
| **Transitive Dependencies** | No known risks |
| **Maintainer** | Identifiable, no anonymous throwaway accounts |

## Automated Enforcement

### CI/CD Pipeline

```yaml
# Every PR is checked for:
- Security Scan (Trivy/Grype) → Blocks on CRITICAL
- License Compliance → Blocks on prohibited licenses
- Dependabot Alerts → Info on new vulnerabilities
```

### Dependabot Configuration

- Weekly checks across all ecosystems
- Automatic PRs for security updates
- Auto-merge for patch updates of trusted packages

## Process for Supply Chain Attacks

In case of suspected compromised dependencies (dependency confusion, typosquatting, maintainer takeover):

1. **Immediately:** Identify the affected dependency across all projects (SBOM search)
2. **Within 4h:** Pin the dependency to a safe version or remove it
3. **Within 24h:** Verify whether the compromised version was ever deployed to production
4. **If compromised:** Activate the incident response playbook
