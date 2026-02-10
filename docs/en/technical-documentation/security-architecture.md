# 7.2 Security Architecture

## Security-by-Design Process

The Security Architecture documents how cybersecurity is integrated into the design, development, and maintenance process.

::: info LEGAL BASIS
**Art. 10(1) CRA:** *"The manufacturer shall ensure that the product is designed, developed and produced in such a way as to ensure an appropriate level of cybersecurity."*

**Annex I, Part I:** Essential cybersecurity requirements for products.
:::

## Secure Development Lifecycle (SDLC)

```
Planning → Design → Development → Testing → Release → Maintenance
   │         │          │           │         │         │
   │         │          │           │         │         └── CVE-Monitor
   │         │          │           │         │             Patch Mgmt
   │         │          │           │         │             ENISA-Meldung
   │         │          │           │         │
   │         │          │           │         └── SBOM generieren
   │         │          │           │             Cosign signieren
   │         │          │           │             Release-Notes
   │         │          │           │
   │         │          │           └── Security Scan (Trivy/Grype)
   │         │          │               License Compliance
   │         │          │               Secret Scanning
   │         │          │
   │         │          └── Code Review (4-Augen)
   │         │              Dependency Prüfung
   │         │              Branch Protection
   │         │
   │         └── Threat Modeling
   │             Sicherheitsanforderungen
   │             Architektur-Review
   │
   └── Risikobewertung
       Produktklassifizierung
       Compliance-Anforderungen
```

## Annex I, Part I — Essential Requirements

The following requirements from Annex I, Part I, CRA are addressed in the Security Architecture:

### (1) Security by Default

| Requirement | Implementation |
|-------------|----------------|
| Secure default configuration | Restrictive settings by default, no unnecessary network access |
| Minimal attack surface | Alpine/Distroless base images, only required ports/services |
| Principle of least privilege | Containers run as non-root, minimal permissions |

### (2) Protection Against Unauthorised Access

| Requirement | Implementation |
|-------------|----------------|
| Authentication | Product-specific (OAuth2, API Keys, mTLS) |
| Authorisation | Role-based access control (RBAC) |
| Brute-force protection | Rate Limiting, Account Lockout |

### (3) Protection of Confidentiality

| Requirement | Implementation |
|-------------|----------------|
| Transport encryption | TLS 1.3 (minimum TLS 1.2) |
| Data encryption | AES-256 for stored sensitive data |
| Secret Management | GitHub Secrets, no plaintext secrets in code |

### (4) Protection of Integrity

| Requirement | Implementation |
|-------------|----------------|
| Artefact signing | Cosign for containers, binaries, SBOMs |
| Update integrity | Signed updates, SHA256 verification |
| Code integrity | Branch Protection, Code Reviews, Signed Commits |

### (5) Protection of Availability

| Requirement | Implementation |
|-------------|----------------|
| Resilience | Product-specific (redundancy, failover) |
| DoS protection | Rate Limiting, Resource Limits |
| Graceful Degradation | Defined behaviour in case of partial failures |

### (6) Minimisation of Adverse Impact

| Requirement | Implementation |
|-------------|----------------|
| Logging | Security-relevant events are logged |
| Monitoring | Anomaly detection (product-specific) |
| Isolation | Container isolation, Network Policies |

## CI/CD Security Measures

| Measure | Implementation | Workflow |
|---------|----------------|----------|
| Branch Protection | Main branch protected, PRs required | GitHub Settings |
| Code Review | At least 1 reviewer | GitHub Settings |
| Security Scanning | Trivy, Grype, Snyk on every build | `modules-security-scan.yml` |
| Secret Scanning | Gitleaks, GitGuardian | `modules-security-scan.yml` |
| License Compliance | Automated check | `modules-license-compliance.yml` |
| Dockerfile Linting | Hadolint | `modules-validate-dockerfile.yml` |
| SBOM Generation | Automatic on release | `modules-license-compliance.yml` |
| Artifact Signing | Cosign on release | `docker-build.yml` |
| Dependency Updates | Dependabot | `docker-maintenance-dependabot.yml` |

## Evidence of Security Architecture

The Security Architecture is evidenced by:

1. **Automated scans** — Results in CI/CD pipeline (archived build artefacts)
2. **Code Reviews** — Documented in Pull Requests (Git history)
3. **SBOM** — Machine-readable component inventory
4. **Signed Releases** — Cosign signatures verifiable
5. **This documentation** — Version-controlled in the Git repository
