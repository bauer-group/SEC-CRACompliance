# 7.2 Sicherheitsarchitektur

## Security-by-Design Prozess

Die Sicherheitsarchitektur dokumentiert, wie Cybersicherheit in den Entwurfs-, Entwicklungs- und Wartungsprozess integriert ist.

::: info RECHTSGRUNDLAGE
**Art. 10 Abs. 1 CRA:** *„Der Hersteller stellt sicher, dass das Produkt so entworfen, entwickelt und hergestellt wird, dass es ein angemessenes Cybersicherheitsniveau gewährleistet."*

**Annex I, Teil I:** Wesentliche Cybersicherheitsanforderungen an Produkte.
:::

## Secure Development Lifecycle (SDLC)

```
Planung → Design → Entwicklung → Testing → Release → Wartung
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

## Annex I, Teil I – Wesentliche Anforderungen

Die folgenden Anforderungen aus Annex I, Teil I, CRA werden in der Sicherheitsarchitektur adressiert:

### (1) Sicherheit ab Werk (Security by Default)

| Anforderung | Umsetzung |
|-------------|-----------|
| Sichere Standardkonfiguration | Standardmäßig restriktive Einstellungen, kein unnötiger Netzwerkzugang |
| Minimale Angriffsfläche | Alpine/Distroless Base Images, nur notwendige Ports/Dienste |
| Prinzip der geringsten Rechte | Container laufen als non-root, minimale Berechtigungen |

### (2) Schutz vor unbefugtem Zugriff

| Anforderung | Umsetzung |
|-------------|-----------|
| Authentifizierung | Produktspezifisch (OAuth2, API Keys, mTLS) |
| Autorisierung | Rollenbasierte Zugriffskontrolle (RBAC) |
| Brute-Force-Schutz | Rate Limiting, Account Lockout |

### (3) Schutz der Vertraulichkeit

| Anforderung | Umsetzung |
|-------------|-----------|
| Transport-Verschlüsselung | TLS 1.3 (mindestens TLS 1.2) |
| Datenverschlüsselung | AES-256 für gespeicherte sensible Daten |
| Secret Management | GitHub Secrets, keine Klartext-Secrets im Code |

### (4) Schutz der Integrität

| Anforderung | Umsetzung |
|-------------|-----------|
| Artefakt-Signierung | Cosign für Container, Binaries, SBOMs |
| Update-Integrität | Signierte Updates, SHA256-Prüfung |
| Code-Integrität | Branch Protection, Code Reviews, Signed Commits |

### (5) Schutz der Verfügbarkeit

| Anforderung | Umsetzung |
|-------------|-----------|
| Resilienz | Produktspezifisch (Redundanz, Failover) |
| DoS-Schutz | Rate Limiting, Resource Limits |
| Graceful Degradation | Definiertes Verhalten bei Teilausfällen |

### (6) Minimierung negativer Auswirkungen

| Anforderung | Umsetzung |
|-------------|-----------|
| Logging | Sicherheitsrelevante Events werden protokolliert |
| Monitoring | Anomalie-Erkennung (produktspezifisch) |
| Isolation | Container-Isolation, Network Policies |

## CI/CD-Sicherheitsmaßnahmen

| Maßnahme | Implementierung | Workflow |
|----------|----------------|----------|
| Branch Protection | Main-Branch geschützt, PRs erforderlich | GitHub Settings |
| Code Review | Mindestens 1 Reviewer | GitHub Settings |
| Security Scanning | Trivy, Grype, Snyk bei jedem Build | `modules-security-scan.yml` |
| Secret Scanning | Gitleaks, GitGuardian | `modules-security-scan.yml` |
| License Compliance | Automatische Prüfung | `modules-license-compliance.yml` |
| Dockerfile Linting | Hadolint | `modules-validate-dockerfile.yml` |
| SBOM Generation | Automatisch bei Release | `modules-license-compliance.yml` |
| Artifact Signing | Cosign bei Release | `docker-build.yml` |
| Dependency Updates | Dependabot | `docker-maintenance-dependabot.yml` |

## Nachweis der Sicherheitsarchitektur

Die Sicherheitsarchitektur wird nachgewiesen durch:

1. **Automatisierte Scans** – Ergebnisse in CI/CD-Pipeline (archivierte Build-Artefakte)
2. **Code Reviews** – Dokumentiert in Pull Requests (Git-Historie)
3. **SBOM** – Maschinenlesbares Komponentenverzeichnis
4. **Signierte Releases** – Cosign-Signaturen verifizierbar
5. **Diese Dokumentation** – Versioniert im Git-Repository
