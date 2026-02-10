# Kapitel 9: CRA-Anforderungsmatrix

## Vollständige Zuordnung: CRA-Artikel → Dokumentation → Tooling

Diese Matrix ordnet jede relevante CRA-Anforderung der entsprechenden Dokumentation und dem implementierten Tooling zu. Sie dient als zentrale Referenz für Audits und Konformitätsprüfungen.

::: tip STATUSÜBERSICHT

| Kategorie | ✅ Implementiert | ⚠️ Produktspezifisch | ❌ Offen | Gesamt |
|-----------|:----------------:|:--------------------:|:--------:|:------:|
| Art. 10 – Herstellerpflichten | 8 | 4 | 0 | 12 |
| Art. 13 – Informationspflichten | 3 | 1 | 0 | 4 |
| Art. 14 – Meldepflichten | 1 | 3 | 0 | 4 |
| Art. 16 – Bevollmächtigter | 1 | 2 | 0 | 3 |
| Art. 28/29 – Konformität & CE | 0 | 2 | 0 | 2 |
| Annex I Teil I – Sicherheit | 6 | 1 | 0 | 7 |
| Annex I Teil II – Schwachstellen | 8 | 0 | 0 | 8 |
| Annex II – Nutzerinformation | 4 | 4 | 0 | 8 |
| Annex VII – Technische Doku | 3 | 4 | 0 | 7 |
| **Gesamt** | **34** | **21** | **0** | **55** |

:::

Detaillierte Zuordnung: [9.1 Tooling-Zuordnung](/de/compliance-matrix/tooling-map) (Tool → CRA-Anforderung)

## Art. 10 – Pflichten der Hersteller

| CRA-Referenz | Anforderung | Dokumentation | Tooling | Status |
|-------------|-------------|---------------|---------|:------:|
| Art. 10 Abs. 1 | Angemessenes Cybersicherheitsniveau bei Entwurf, Entwicklung, Herstellung | [Sicherheitsarchitektur](/de/technical-documentation/security-architecture) | Security Scans (Trivy, Grype, Snyk), Code Review | ✅ |
| Art. 10 Abs. 2 | Cybersecurity-Risikobewertung durchführen | [Risikobewertung](/de/vulnerability-management/risk-assessment) | – (manueller Prozess + Template) | ⚠️ |
| Art. 10 Abs. 3 | Risikobewertung in Dokumentation aufnehmen | [Technische Dokumentation](/de/technical-documentation/) | Git-versioniert | ⚠️ |
| Art. 10 Abs. 4 | Sorgfaltspflicht bei Drittkomponenten | [Supply Chain](/de/supply-chain/) | License Compliance, Dependency Scan | ✅ |
| Art. 10 Abs. 5 | Konformitätsbewertung durchführen | [Conformity Assessment](/de/conformity/) | – (manueller Prozess + Template) | ⚠️ |
| Art. 10 Abs. 6 | Schwachstellen wirksam ermitteln | [Vulnerability Management](/de/vulnerability-management/) | CVE-Monitor, Dependabot, Trivy | ✅ |
| Art. 10 Abs. 7 | Sicherheitsupdates kostenlos bereitstellen | [Patch Management](/de/vulnerability-management/patch-management) | Dependabot, Auto-Merge, Release Pipeline | ✅ |
| Art. 10 Abs. 8 | Keine bekannten ausnutzbaren Schwachstellen | [CVE-Monitoring](/de/vulnerability-management/cve-monitoring) | CVE-Monitor (täglich), Trivy | ✅ |
| Art. 10 Abs. 9 | Koordinierte Schwachstellenoffenlegung | [Disclosure Policy](/de/incident-response/disclosure-policy) | SECURITY.md, GitHub Advisories | ✅ |
| Art. 10 Abs. 10 | Kontaktstelle für Schwachstellenmeldungen | [Disclosure Policy](/de/incident-response/disclosure-policy) | SECURITY.md in jedem Repository | ✅ |
| Art. 10 Abs. 12 | Integrität von Sicherheitsupdates | [SBOM & Signierung](/de/sbom-signing/) | Cosign, SHA256 | ✅ |
| Art. 10 Abs. 13 | Dokumentation 10 Jahre aufbewahren | [Technische Dokumentation](/de/technical-documentation/) | Git-Repository (10-Jahres-Retention) | ✅ |
| Art. 10 Abs. 16 | Support-Zeitraum festlegen und veröffentlichen | [Support & Lifecycle](/de/technical-documentation/support-period) | SECURITY.md, Produktseite | ⚠️ |

## Art. 13 – Informationspflichten

| CRA-Referenz | Anforderung | Dokumentation | Tooling | Status |
|-------------|-------------|---------------|---------|:------:|
| Art. 13 Abs. 6 | CVD-Richtlinie veröffentlichen | [Disclosure Policy](/de/incident-response/disclosure-policy) | SECURITY.md | ✅ |
| Art. 13 Abs. 8 | Kontaktdaten für Schwachstellenmeldungen | [SECURITY.md](/de/SECURITY) | Repository SECURITY.md | ✅ |
| Art. 13 Abs. 16 | Support-Zeitraum kommunizieren | [Support & Lifecycle](/de/technical-documentation/support-period) | – | ⚠️ |
| Art. 13 Abs. 23 | SBOM erstellen (maschinenlesbar) | [SBOM & Signierung](/de/sbom-signing/) | Trivy/Syft → CycloneDX JSON | ✅ |

## Art. 14 – Meldepflichten

| CRA-Referenz | Anforderung | Dokumentation | Tooling | Status |
|-------------|-------------|---------------|---------|:------:|
| Art. 14 Abs. 1 | Frühwarnung bei aktiv ausgenutzter Schwachstelle (24h) | [ENISA-Meldeprozess](/de/incident-response/enisa-reporting) | ENISA SRP (ab 09/2026) | ⚠️ |
| Art. 14 Abs. 2 | Schwachstellenmeldung (72h) | [ENISA-Meldeprozess](/de/incident-response/enisa-reporting) | ENISA SRP | ⚠️ |
| Art. 14 Abs. 3 | Abschlussbericht (14 Tage) | [ENISA-Meldeprozess](/de/incident-response/enisa-reporting) | ENISA SRP | ⚠️ |
| Art. 14 Abs. 8 | Nutzerbenachrichtigung | [Kommunikationsplan](/de/incident-response/communication) | GitHub Advisories, E-Mail | ✅ |

## Art. 16 – Bevollmächtigter (EU Authorized Representative)

| CRA-Referenz | Anforderung | Dokumentation | Tooling | Status |
|-------------|-------------|---------------|---------|:------:|
| Art. 16 Abs. 1 | Bevollmächtigten durch schriftliche Vollmacht benennen (Nicht-EU-Hersteller) | [Rollen & Verantwortlichkeiten](/de/overview/responsibilities) | – (vertraglicher Prozess) | ⚠️ |
| Art. 16 Abs. 2 | Konformitätsdokumentation 10 Jahre bereithalten | [Rollen & Verantwortlichkeiten](/de/overview/responsibilities) | Git-Repository (10-Jahres-Retention) | ✅ |
| Art. 16 Abs. 2 | Kooperation mit Marktüberwachungsbehörden | [Rollen & Verantwortlichkeiten](/de/overview/responsibilities) | – | ⚠️ |

## Art. 28 – Konformitätserklärung & CE

| CRA-Referenz | Anforderung | Dokumentation | Tooling | Status |
|-------------|-------------|---------------|---------|:------:|
| Art. 28, Annex V | EU-Konformitätserklärung ausstellen | [EU DoC](/de/conformity/eu-declaration) | Template | ⚠️ |
| Art. 29 | CE-Kennzeichnung anbringen | [EU DoC](/de/conformity/eu-declaration) | – | ⚠️ |

## Annex I, Teil I – Sicherheitsanforderungen

| Nr. | Anforderung | Dokumentation | Tooling | Status |
|----|-------------|---------------|---------|:------:|
| 1 | Angemessenes Cybersicherheitsniveau | [Sicherheitsarchitektur](/de/technical-documentation/security-architecture) | Multi-Engine Security Scanning | ✅ |
| 2 | Keine bekannten ausnutzbaren Schwachstellen | [CVE-Monitoring](/de/vulnerability-management/cve-monitoring) | CVE-Monitor, Trivy, Dependabot | ✅ |
| 3.1 | Vertraulichkeitsschutz (Daten) | [Sicherheitsarchitektur](/de/technical-documentation/security-architecture) | TLS, AES-256 | ✅ |
| 3.2 | Integritätsschutz (Daten) | [SBOM & Signierung](/de/sbom-signing/) | Cosign, SHA256 | ✅ |
| 3.3 | Verfügbarkeitsschutz | [Sicherheitsarchitektur](/de/technical-documentation/security-architecture) | Produktspezifisch | ⚠️ |
| 4 | Sichere Standardkonfiguration | [Sicherheitsarchitektur](/de/technical-documentation/security-architecture) | Security-by-Default | ✅ |
| 5 | Schutz vor unbefugtem Zugriff | [Sicherheitsarchitektur](/de/technical-documentation/security-architecture) | Auth/Authz | ✅ |
| 6 | Minimale Angriffsfläche | [Sicherheitsarchitektur](/de/technical-documentation/security-architecture) | Alpine/Distroless, min. Dienste | ✅ |

## Annex I, Teil II – Schwachstellenbehandlung

| Nr. | Anforderung | Dokumentation | Tooling | Status |
|----|-------------|---------------|---------|:------:|
| 1 | Schwachstellen ermitteln und dokumentieren (SBOM) | [SBOM & Signierung](/de/sbom-signing/) | Trivy/Syft, CycloneDX | ✅ |
| 2 | Schwachstellen unverzüglich beheben | [Patch Management](/de/vulnerability-management/patch-management) | Dependabot, CI/CD | ✅ |
| 3 | Regelmäßige Tests und Reviews | [Sicherheitsarchitektur](/de/technical-documentation/security-architecture) | CI/CD Security Scans | ✅ |
| 4 | Offenlegung behobener Schwachstellen | [Disclosure Policy](/de/incident-response/disclosure-policy) | GitHub Security Advisories | ✅ |
| 5 | Koordinierte Schwachstellenoffenlegung | [Disclosure Policy](/de/incident-response/disclosure-policy) | SECURITY.md, CVD-Prozess | ✅ |
| 6 | Sicherheitsupdates bereitstellen | [Update-Mechanismus](/de/technical-documentation/update-mechanism) | Release Pipeline, OTA | ✅ |
| 7 | Unverzügliche Bereitstellung | [Patch Management](/de/vulnerability-management/patch-management) | SLA-basiert (P0-P4) | ✅ |
| 8 | Kontaktstelle benennen | [SECURITY.md](/de/SECURITY) | SECURITY.md, CVD-Policy | ✅ |

## Annex II – Nutzerinformation

| Nr. | Anforderung | Dokumentation | Status |
|----|-------------|---------------|:------:|
| 1 | Herstellername und Kontakt | Produktseite, SECURITY.md | ✅ |
| 2 | Produktidentifikation | Release Notes, Repository | ✅ |
| 3 | Bestimmungsgemäße Verwendung | [Produktbeschreibung](/de/technical-documentation/product-description) | ⚠️ |
| 4 | Sicherheitsrelevante Eigenschaften | [Nutzerinformation Template](/de/templates/product-security-info) | ⚠️ |
| 5 | Support-Zeitraum | [Support & Lifecycle](/de/technical-documentation/support-period) | ⚠️ |
| 6 | Installationsanweisungen | README, Produktdokumentation | ⚠️ |
| 7 | Kontakt für Schwachstellenmeldungen | SECURITY.md | ✅ |
| 8 | Changelog wesentlicher Änderungen | Changelog, Release Notes | ✅ |

## Annex VII – Technische Dokumentation

| Nr. | Anforderung | Dokumentation | Status |
|----|-------------|---------------|:------:|
| 1 | Allgemeine Produktbeschreibung | [Produktbeschreibung](/de/technical-documentation/product-description) | ⚠️ |
| 2 | Sicherheitsrisikobewertung | [Risikobewertung](/de/vulnerability-management/risk-assessment) | ⚠️ |
| 3 | Architektur und Design | [Sicherheitsarchitektur](/de/technical-documentation/security-architecture) | ✅ |
| 4 | Schwachstellenbehandlungsverfahren | [Vulnerability Management](/de/vulnerability-management/) | ✅ |
| 5 | Angewandte Normen | [Compliance-Matrix](/de/compliance-matrix/) | ✅ |
| 6 | Konformitätsbewertung | [Conformity Assessment](/de/conformity/) | ⚠️ |
| 7 | EU-Konformitätserklärung | [EU DoC](/de/conformity/eu-declaration) | ⚠️ |

## Legende

| Symbol | Bedeutung |
|--------|-----------|
| ✅ | Implementiert und dokumentiert |
| ⚠️ | Dokumentation vorhanden, produktspezifische Umsetzung erforderlich |
| ❌ | Noch nicht implementiert |
