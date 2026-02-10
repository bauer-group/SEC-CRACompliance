# 9.1 Tooling-Zuordnung

## Tool → CRA-Anforderungsmatrix

Diese Zuordnung zeigt, welches Tool welche CRA-Anforderungen abdeckt.

## GitHub Ecosystem

### Dependabot

| CRA-Anforderung | Abdeckung |
|-----------------|-----------|
| Art. 10 Abs. 6 – Schwachstellen ermitteln | Automatische CVE-Alerts für Abhängigkeiten |
| Art. 10 Abs. 7 – Sicherheitsupdates | Automatische PRs bei verfügbaren Updates |
| Annex I, Teil II, Nr. 2 – Unverzügliche Behebung | Auto-Merge für Patch-Updates |
| Annex I, Teil II, Nr. 5 – Drittkomponenten überwachen | Kontinuierliches Dependency Monitoring |

### GitHub Security Advisories

| CRA-Anforderung | Abdeckung |
|-----------------|-----------|
| Art. 10 Abs. 9 – Koordinierte Offenlegung | Private Advisory, CVE-Zuweisung |
| Art. 14 Abs. 8 – Nutzerbenachrichtigung | Öffentliches Advisory mit Handlungsempfehlung |
| Annex I, Teil II, Nr. 4 – Offenlegung behobener CVEs | Security Advisory veröffentlichen |

### GitHub Actions (Automation-Templates)

| Workflow | CRA-Anforderung | Funktion |
|----------|-----------------|----------|
| `automatic-release.yml` | Art. 10 Abs. 7 | Automatisierte Release-Pipeline |
| `modules-security-scan.yml` | Art. 10 Abs. 6 | Multi-Engine Security Scanning |
| `modules-license-compliance.yml` | Art. 10 Abs. 4, Art. 13 Abs. 23 | Lizenzprüfung + SBOM |
| `docker-build.yml` | Art. 10 Abs. 12 | Image-Build + Signing |
| `docker-maintenance-dependabot.yml` | Annex I, Teil II, Nr. 2 | Auto-Merge Dependency Updates |
| `modules-docker-base-image-monitor.yml` | Annex I, Teil II, Nr. 5 | Base Image Aktualisierung |
| `security-management.yml` | Art. 13 Abs. 8 | SECURITY.md Auto-Generierung |
| `teams-notifications.yml` | Art. 14 (unterstützend) | Incident-Kommunikation |

## Security Scanning

### Trivy (Aqua Security)

| CRA-Anforderung | Abdeckung |
|-----------------|-----------|
| Art. 10 Abs. 6 | Container-Image Vulnerability Scanning |
| Art. 10 Abs. 8 | Erkennung bekannter ausnutzbarer Schwachstellen |
| Art. 13 Abs. 23 | SBOM-Generierung (CycloneDX, SPDX) |
| Annex I, Teil II, Nr. 1 | Komponentenerkennung für SBOM |
| Annex I, Teil II, Nr. 3 | Regelmäßige Sicherheitstests (CI/CD) |

### Grype (Anchore)

| CRA-Anforderung | Abdeckung |
|-----------------|-----------|
| Art. 10 Abs. 6 | Vulnerability Scanning (komplementär zu Trivy) |
| Annex I, Teil II, Nr. 1 | CVE-Matching gegen SBOM |

### OSV-Scanner (Google)

| CRA-Anforderung | Abdeckung |
|-----------------|-----------|
| Art. 10 Abs. 6 | OSV-Datenbank-basiertes Vulnerability Scanning |
| Art. 10 Abs. 8 | Erkennung bekannter Schwachstellen (aggregiert NVD, GitHub, PyPI, npm, Go u.a.) |
| Annex I, Teil II, Nr. 2 | CVE-Matching gegen Lockfiles und SBOMs |

### Snyk

| CRA-Anforderung | Abdeckung |
|-----------------|-----------|
| Art. 10 Abs. 6 | Application Security Scanning |
| Annex I, Teil II, Nr. 3 | Code-Level Vulnerability Detection |

### Gitleaks + GitGuardian

| CRA-Anforderung | Abdeckung |
|-----------------|-----------|
| Art. 10 Abs. 1 | Verhinderung von Secret Exposure |
| Annex I, Teil I, Nr. 5 | Schutz vor unbefugtem Zugriff (Secrets) |

## SBOM & Compliance

### Syft (Anchore)

| CRA-Anforderung | Abdeckung |
|-----------------|-----------|
| Art. 13 Abs. 23 | SBOM-Generierung (CycloneDX JSON) |
| Annex I, Teil II, Nr. 1 | Komponentenerkennung und -dokumentation |
| Annex VII Nr. 1 | Produktbeschreibung (Abhängigkeiten) |

### FOSSA / License Compliance

| CRA-Anforderung | Abdeckung |
|-----------------|-----------|
| Art. 10 Abs. 4 | Sorgfaltspflicht bei Drittkomponenten (Lizenzen) |
| Annex I, Teil II, Nr. 1 | Lizenzinventar als Teil der SBOM |

## Signing & Integrity

### Cosign (Sigstore)

| CRA-Anforderung | Abdeckung |
|-----------------|-----------|
| Art. 10 Abs. 12 | Integritätsschutz von Updates |
| Annex I, Teil I, Nr. 3.2 | Integritätsschutz (Daten/Artefakte) |
| Annex I, Teil II, Nr. 6 | Sichere Bereitstellung von Updates |

## CRA Compliance Workflows (dieses Repository)

Zusätzlich zu den Automation-Templates stellt dieses Repository dedizierte CRA-Workflows bereit, die in jedem Quellcode-Repository wiederverwendet werden können.

### Composite Actions

| Action | CRA-Anforderung | Funktion |
|--------|-----------------|----------|
| `cra-sbom-generate` | Art. 13 Abs. 23 | CycloneDX SBOM generieren (Trivy, Auto-Detect) |
| `cra-sbom-sign` | Art. 10 Abs. 12 | SBOM signieren (Cosign, keyless OIDC) |
| `cra-vulnerability-scan` | Art. 10 Abs. 6, 8 | Multi-Engine Vulnerability Scan (Trivy + Grype + OSV-Scanner) |
| `cra-hub-report` | Art. 10, Art. 13 | Compliance-Daten an Software Security Hub API senden |

### Reusable Workflows

| Workflow | Typ | CRA-Anforderung | Funktion |
|----------|-----|-----------------|----------|
| `cra-release.yml` | Repo-lokal | Art. 10 Abs. 12, Art. 13 Abs. 23 | SBOM + Signatur + Scan als Release-Assets |
| `cra-scan.yml` | Repo-lokal | Art. 10 Abs. 6, 8 | Geplanter CVE-Scan mit Issue-Erstellung |
| `cra-report.yml` | API-Reporting | Art. 10, Art. 13, Annex VII | Alle CRA-Daten an CRA Compliance Hub |

## Geplante Erweiterungen

| Tool / Workflow | CRA-Anforderung | Status |
|----------------|-----------------|--------|
| **CodeQL** (SAST) | Annex I, Teil II, Nr. 3 | 🔧 Optional |
| **CRA Compliance Hub** (Web-App) | Zentrale Auswertung | 🔧 Geplant |

## Zusammenfassung: CRA-Abdeckung durch Tooling

```
                         CRA-Anforderung
                    ┌─────────────────────────┐
                    │  Art. 10 (Hersteller)    │
                    │  ├── Abs. 1 (Security)   │──→ Trivy, Gitleaks, Code Review
                    │  ├── Abs. 2 (Risiko)     │──→ Manuell + Template
                    │  ├── Abs. 4 (3rd Party)  │──→ FOSSA, License Compliance
                    │  ├── Abs. 6 (Schwachst.) │──→ CVE-Monitor, Dependabot
                    │  ├── Abs. 7 (Updates)    │──→ Dependabot, CI/CD
                    │  ├── Abs. 8 (Keine CVEs) │──→ CVE-Monitor, Trivy
                    │  ├── Abs. 9 (CVD)        │──→ GitHub Advisories
                    │  ├── Abs. 12 (Integrität)│──→ Cosign
                    │  └── Abs. 16 (Support)   │──→ SECURITY.md
                    ├─────────────────────────┤
                    │  Art. 13 (Information)    │
                    │  ├── Abs. 6 (CVD-Policy)  │──→ SECURITY.md
                    │  └── Abs. 23 (SBOM)      │──→ Trivy/Syft
                    ├─────────────────────────┤
                    │  Art. 14 (Meldepflicht)   │
                    │  ├── 24h Frühwarnung      │──→ ENISA SRP + Teams
                    │  ├── 72h Meldung          │──→ ENISA SRP
                    │  └── Nutzer-Info          │──→ GitHub Advisory
                    └─────────────────────────┘
```
