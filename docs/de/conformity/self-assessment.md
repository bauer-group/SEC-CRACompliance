# 8.1 Interne Kontrolle (Modul A)

## Verfahren

Die interne Kontrolle gemäß Annex VIII, Modul A, CRA ist das einfachste Konformitätsbewertungsverfahren. Der Hersteller bewertet selbst, ob sein Produkt die wesentlichen Anforderungen erfüllt.

::: info ANWENDBARKEIT
Modul A ist anwendbar für:

- **Standard-Produkte** (nicht in Annex III oder IV aufgeführt)
- **Klasse I** – nur wenn harmonisierte Normen vollständig angewendet werden

Für **Klasse II** und **Kritisch** ist Modul A **nicht** ausreichend.
:::

## Ablauf der internen Kontrolle

### 1. Technische Dokumentation erstellen

Gemäß Annex VII CRA muss die vollständige technische Dokumentation vorliegen:

- [ ] Produktbeschreibung ([Template](/de/technical-documentation/product-description))
- [ ] Sicherheitsarchitektur ([Referenz](/de/technical-documentation/security-architecture))
- [ ] Cybersecurity-Risikobewertung ([Template](/de/templates/risk-assessment))
- [ ] SBOM (maschinenlesbar, CycloneDX)
- [ ] Beschreibung der Schwachstellenbehandlung
- [ ] Angewandte Normen und Standards
- [ ] Testergebnisse

### 2. Anforderungsprüfung (Annex I)

Prüfen Sie jede Anforderung aus Annex I und dokumentieren Sie die Konformität:

**Teil I – Sicherheitsanforderungen:**

| Nr. | Anforderung | Konform | Nachweis |
|-----|-------------|:-------:|----------|
| 1 | Angemessenes Cybersicherheitsniveau | ☐ | [Verweis auf Dokumentation] |
| 2 | Keine bekannten ausnutzbaren Schwachstellen | ☐ | CVE-Monitor + Trivy Scan |
| 3.1 | Schutz der Vertraulichkeit | ☐ | [Verschlüsselung, Zugriffskontrolle] |
| 3.2 | Schutz der Integrität | ☐ | [Cosign, Checksummen] |
| 3.3 | Schutz der Verfügbarkeit | ☐ | [Resilienz-Maßnahmen] |
| 4 | Sichere Standardkonfiguration | ☐ | [Security-by-Default] |
| 5 | Schutz vor unbefugtem Zugriff | ☐ | [Authentifizierung, Autorisierung] |
| 6 | Minimierung der Angriffsfläche | ☐ | [Minimale Dienste, Ports] |
| 7 | Vertraulichkeit gespeicherter Daten | ☐ | [Verschlüsselung] |
| 8 | Integrität gespeicherter Daten | ☐ | [Integritätsprüfungen] |
| 9 | Datenminimierung | ☐ | [Nur notwendige Daten] |
| 10 | Verfügbarkeit wesentlicher Funktionen | ☐ | [Resilienz] |
| 11 | Minimierung negativer Auswirkungen | ☐ | [Logging, Monitoring] |
| 12 | Sicherheitsrelevante Informationen | ☐ | [Logging, Audit Trail] |
| 13 | Sichere Update-Möglichkeit | ☐ | [Update-Mechanismus] |

**Teil II – Schwachstellenbehandlung:**

| Nr. | Anforderung | Konform | Nachweis |
|-----|-------------|:-------:|----------|
| 1 | Schwachstellen ermitteln und dokumentieren (SBOM) | ☐ | SBOM Lifecycle |
| 2 | Schwachstellen unverzüglich beheben | ☐ | Patch Management |
| 3 | Regelmäßige Tests und Reviews | ☐ | CI/CD Security Scans |
| 4 | Öffentliche Offenlegung behobener Schwachstellen | ☐ | Security Advisories |
| 5 | Koordinierte Schwachstellenoffenlegung | ☐ | CVD Policy |
| 6 | Sicherheitsupdates bereitstellen | ☐ | Update-Mechanismus |
| 7 | Unverzügliche Bereitstellung von Updates | ☐ | Patch Management SLAs |
| 8 | Kontaktstelle für Schwachstellenmeldungen | ☐ | SECURITY.md |

### 3. EU-Konformitätserklärung ausstellen

Nach erfolgreicher Prüfung:

- EU-Konformitätserklärung gemäß Annex V erstellen ([Template](/de/templates/eu-declaration-of-conformity))
- Von bevollmächtigter Person unterzeichnen
- Im Repository archivieren

### 4. CE-Kennzeichnung

- CE-Kennzeichnung am Produkt oder der Verpackung anbringen
- Bei Software: In der Dokumentation und ggf. UI anzeigen
- Muss sichtbar, lesbar und dauerhaft sein

### 5. Dokumentation aufbewahren

- Technische Dokumentation: **10 Jahre** nach Inverkehrbringen
- EU-Konformitätserklärung: **10 Jahre** nach Inverkehrbringen
- Speicherort: Dieses Repository (Git-versioniert)

## Checkliste: Modul A – Interne Kontrolle

- [ ] Produktklassifizierung durchgeführt (Standard oder Klasse I mit harm. Normen)
- [ ] Technische Dokumentation vollständig (Annex VII)
- [ ] Cybersecurity-Risikobewertung durchgeführt
- [ ] Annex I Teil I – alle Anforderungen geprüft und dokumentiert
- [ ] Annex I Teil II – alle Anforderungen geprüft und dokumentiert
- [ ] SBOM generiert und archiviert
- [ ] Schwachstellenbehandlungsprozess etabliert
- [ ] EU-Konformitätserklärung erstellt und unterzeichnet
- [ ] CE-Kennzeichnung angebracht
- [ ] Dokumentation archiviert (10-Jahres-Retention)
