# Wesentliche Sicherheitsanforderungen (Annex I Teil I)

## Übersicht

Annex I Teil I des CRA definiert 13 wesentliche Cybersicherheitsanforderungen, die jedes Produkt mit digitalen Elementen erfüllen muss. Diese Seite bietet detaillierte Umsetzungshinweise für jede einzelne Anforderung.

::: info RECHTSGRUNDLAGE
**Annex I Teil I CRA:** Wesentliche Cybersicherheitsanforderungen. Produkte mit digitalen Elementen werden so konzipiert, entwickelt und hergestellt, dass sie unter Berücksichtigung der Risiken ein angemessenes Cybersicherheitsniveau gewährleisten.
:::

## Nr. 1 – Angemessenes Cybersicherheitsniveau

**Anforderung:** Produkte werden so konzipiert, entwickelt und hergestellt, dass sie ein angemessenes Cybersicherheitsniveau gewährleisten, basierend auf den Risiken.

**Umsetzung bei BAUER GROUP:**

- Security by Design: Sicherheitsanforderungen ab der Designphase
- Threat Modeling vor jeder Architekturentscheidung
- Risikobewertung ([Template](/de/templates/risk-assessment)) für jedes Produkt
- Multi-Layer Security (Defense in Depth)

**Nachweis:** Risikobewertung, Sicherheitsarchitekturdokument, Testergebnisse

---

## Nr. 2 – Keine bekannten ausnutzbaren Schwachstellen

**Anforderung:** Produkte werden ohne bekannte ausnutzbare Schwachstellen ausgeliefert.

**Umsetzung bei BAUER GROUP:**

- Automatisiertes [CVE-Monitoring](/de/vulnerability-management/cve-monitoring) (täglich)
- Multi-Engine Security Scanning (Trivy, Grype, Snyk)
- Dependabot für automatische Dependency-Updates
- Pre-Release Security Gate: Kein Release mit bekannten Critical/High CVEs

**Nachweis:** CVE-Scan-Berichte, Dependency-Audit-Logs, Release-Gate-Ergebnisse

---

## Nr. 3 – Schutz der Vertraulichkeit, Integrität und Verfügbarkeit

### Nr. 3.1 – Vertraulichkeitsschutz

**Anforderung:** Schutz der Vertraulichkeit von gespeicherten, übertragenen oder anderweitig verarbeiteten Daten.

**Umsetzung:**

- **Daten in Transit:** TLS 1.2+ für alle Netzwerkverbindungen, mTLS für Service-to-Service
- **Daten at Rest:** AES-256 Verschlüsselung für sensible Daten
- **Schlüsselmanagement:** Hardware-gestützt (HSM/KMS) oder Vault
- **Zugriffskontrolle:** Principle of Least Privilege, RBAC/ABAC

**Nachweis:** Kryptografie-Inventar, Verschlüsselungskonfiguration, Zugriffskontrolllisten

### Nr. 3.2 – Integritätsschutz

**Anforderung:** Schutz der Integrität von gespeicherten, übertragenen oder anderweitig verarbeiteten Daten, Befehlen, Programmen und Konfigurationen.

**Umsetzung:**

- **Artefakt-Signierung:** Cosign für Container und Binaries ([Signierung](/de/sbom-signing/signing))
- **SBOM-Integrität:** Signierte SBOMs pro Release
- **Code-Integrität:** Signierte Git-Commits, geschützte Branches
- **Datenintegrität:** Checksummen, digitale Signaturen
- **Konfigurationsintegrität:** Infrastructure as Code, GitOps

**Nachweis:** Signaturprotokolle, Checksummen-Verifikation, Git-Audit-Trail

### Nr. 3.3 – Verfügbarkeitsschutz

**Anforderung:** Schutz der Verfügbarkeit wesentlicher Funktionen, auch unter Angriff (z.B. DDoS).

**Umsetzung:**

- Redundante Systeme und Failover
- Rate Limiting und DDoS-Schutz
- Graceful Degradation bei Ressourcenknappheit
- Backup- und Recovery-Verfahren
- Monitoring und Alerting

**Nachweis:** Architekturdiagramme, DR-Pläne, Lasttestergebnisse

---

## Nr. 4 – Sichere Standardkonfiguration

**Anforderung:** Produkte werden mit einer sicheren Standardkonfiguration ausgeliefert, einschließlich der Möglichkeit, das Produkt in den Originalzustand zurückzusetzen.

**Umsetzung:**

- **Security-by-Default:** Alle nicht benötigten Dienste deaktiviert
- **Keine Standard-Passwörter:** Einrichtungsassistent erzwingt individuelle Credentials
- **Restriktive Defaults:** Firewall-Regeln, Berechtigungen, Ports
- **Factory Reset:** Möglichkeit zur Rücksetzung auf sichere Standardkonfiguration
- **Dokumentation:** Sichere Konfiguration in der Nutzerdokumentation beschrieben

**Nachweis:** Default-Konfigurationsdateien, Einrichtungsprozess-Dokumentation

---

## Nr. 5 – Schutz vor unbefugtem Zugriff

**Anforderung:** Schutz vor unbefugtem Zugriff durch angemessene Kontrollmechanismen (Authentifizierung, Identitätsmanagement, Zugriffskontrolle).

**Umsetzung:**

- **Authentifizierung:** Multi-Faktor-Authentifizierung (MFA) wo möglich
- **Autorisierung:** RBAC mit Principle of Least Privilege
- **Session-Management:** Sichere Tokens, Timeout, Invalidierung
- **API-Sicherheit:** API-Keys, OAuth 2.0, Rate Limiting
- **Brute-Force-Schutz:** Account Lockout, CAPTCHA

**Nachweis:** Authentifizierungsarchitektur, Berechtigungsmatrix, Penetrationstestberichte

---

## Nr. 6 – Minimale Angriffsfläche

**Anforderung:** Minimierung der Angriffsfläche, einschließlich externer Schnittstellen.

**Umsetzung:**

- **Minimale Container:** Alpine/Distroless Base Images
- **Minimale Dienste:** Nur benötigte Ports und Dienste
- **Minimale Abhängigkeiten:** Regelmäßige Bereinigung ([Dependency Policy](/de/supply-chain/dependency-policy))
- **Minimale Berechtigungen:** Non-Root Container, eingeschränkte Capabilities
- **Netzwerksegmentierung:** Zero-Trust-Architektur

**Nachweis:** Container-Scan-Berichte, Port-Inventar, Dependency-Audit

---

## Nr. 7 – Vertraulichkeit gespeicherter Daten

**Anforderung:** Schutz der Vertraulichkeit von gespeicherten, übertragenen oder anderweitig verarbeiteten Daten, einschließlich personenbezogener Daten.

**Umsetzung:**

- Verschlüsselung aller persistenten Datenbanken (AES-256)
- Verschlüsselte Backups
- Sichere Schlüsselrotation
- Datenklassifizierung (öffentlich, intern, vertraulich, streng vertraulich)
- Löschmechanismen für nicht mehr benötigte Daten

**Nachweis:** Verschlüsselungsinventar, Schlüsselrotationsprotokoll, Datenklassifizierungsschema

---

## Nr. 8 – Integrität gespeicherter Daten

**Anforderung:** Schutz der Integrität gespeicherter Daten und Befehle gegen Manipulation.

**Umsetzung:**

- Integritätsprüfsummen für kritische Daten
- Write-Once-Read-Many (WORM) für Audit-Logs
- Digitale Signaturen für Konfigurationsdaten
- Datenbank-Integritätsprüfungen
- Tamper-Detection-Mechanismen

**Nachweis:** Integritätsprüfungsprotokolle, Audit-Log-Konfiguration

---

## Nr. 9 – Datenminimierung

**Anforderung:** Verarbeitung nur der Daten (persönlich oder anderweitig), die für den bestimmungsgemäßen Gebrauch des Produkts erforderlich sind.

**Umsetzung:**

- Privacy by Design: Nur notwendige Daten erheben
- Datenminimierungsrichtlinie pro Produkt
- Automatische Löschung nach Ablauf der Aufbewahrungsfrist
- Kein Tracking/Telemetrie ohne explizite Einwilligung
- Pseudonymisierung wo möglich

**Nachweis:** Datenkatalog pro Produkt, Datenflussdiagramme, Löschkonzept

---

## Nr. 10 – Verfügbarkeit wesentlicher Funktionen

**Anforderung:** Wesentliche Funktionen des Produkts müssen auch bei Ausfall einzelner Komponenten verfügbar bleiben.

**Umsetzung:**

- Identifikation wesentlicher Funktionen pro Produkt
- Failover-Mechanismen für kritische Komponenten
- Offline-Fähigkeit wo sinnvoll
- Graceful Degradation statt vollständiger Ausfall
- Recovery-Verfahren dokumentiert

**Nachweis:** Kritikalitätsanalyse, Failover-Tests, Recovery-Time-Objectives

---

## Nr. 11 – Minimierung negativer Auswirkungen

**Anforderung:** Minimierung der negativen Auswirkungen auf die Verfügbarkeit anderer Geräte und Netzwerke bei Sicherheitsvorfall.

**Umsetzung:**

- Netzwerkisolation (Segmentierung, VLANs)
- Ressourcenbegrenzung (CPU, Memory, Bandwidth Limits)
- Circuit Breaker Pattern für Microservices
- Automatische Quarantäne bei Anomalien
- Incident Containment Procedures ([Playbook](/de/incident-response/playbook))

**Nachweis:** Netzwerksegmentierungsplan, Ressourcenlimits, Containment-Verfahren

---

## Nr. 12 – Sicherheitsrelevante Informationen

**Anforderung:** Sammlung und Bereitstellung von sicherheitsrelevanten Informationen, einschließlich Logging und Monitoring.

**Umsetzung:**

- Zentrales Logging (Security Events, Authentifizierung, Autorisierung)
- Audit Trail für sicherheitsrelevante Aktionen
- Monitoring und Alerting (SIEM-Integration)
- Log-Retention: Mindestens 12 Monate
- Tamper-Schutz für Logs

**Nachweis:** Logging-Konfiguration, SIEM-Dashboards, Log-Retention-Policy

---

## Nr. 13 – Sichere Update-Möglichkeit

**Anforderung:** Möglichkeit zur sicheren Aktualisierung des Produkts, einschließlich automatischer Benachrichtigung über verfügbare Updates.

**Umsetzung:**

- Automatische Update-Benachrichtigung
- Signierte Updates ([Cosign](/de/sbom-signing/signing))
- Rollback-Möglichkeit bei fehlgeschlagenen Updates
- Separate Bereitstellung von Sicherheitsupdates (ohne Funktionsänderung)
- OTA (Over-the-Air) für IoT/Firmware ([Update-Mechanismus](/de/technical-documentation/update-mechanism))

**Nachweis:** Update-Architektur, Signaturprüfung, Rollback-Tests

---

## Compliance-Matrix

| Nr. | Anforderung | Umsetzungsstatus | Nachweis-Ort |
|-----|-------------|:---:|-------------|
| 1 | Angemessenes Cybersicherheitsniveau | ✅ | Risikobewertung, Architektur |
| 2 | Keine bekannten Schwachstellen | ✅ | CVE-Monitor, Scan-Berichte |
| 3.1 | Vertraulichkeitsschutz | ✅ | Kryptografie-Inventar |
| 3.2 | Integritätsschutz | ✅ | Signaturprotokolle |
| 3.3 | Verfügbarkeitsschutz | ⚠️ | Produktspezifisch |
| 4 | Sichere Standardkonfiguration | ✅ | Default-Konfiguration |
| 5 | Schutz vor unbefugtem Zugriff | ✅ | Auth-Architektur |
| 6 | Minimale Angriffsfläche | ✅ | Container-Scans |
| 7 | Vertraulichkeit gespeicherter Daten | ✅ | Verschlüsselungsinventar |
| 8 | Integrität gespeicherter Daten | ✅ | Integritätsprotokolle |
| 9 | Datenminimierung | ✅ | Datenkatalog |
| 10 | Verfügbarkeit wesentlicher Funktionen | ⚠️ | Produktspezifisch |
| 11 | Minimierung negativer Auswirkungen | ✅ | Segmentierungsplan |
| 12 | Sicherheitsrelevante Informationen | ✅ | Logging-Konfiguration |
| 13 | Sichere Update-Möglichkeit | ✅ | Update-Architektur |
