# 7.1 Produktbeschreibung (Template)

## Template: Produktbeschreibung gemäß Annex VII CRA

::: tip ANWENDUNG
Dieses Template wird für jedes CRA-relevante Produkt individuell ausgefüllt. Kopieren Sie dieses Template und erstellen Sie eine produktspezifische Version.
:::

---

### 1. Produktidentifikation

| Feld | Wert |
|------|------|
| **Produktname** | [Name des Produkts] |
| **Produkttyp** | [Software / Firmware / Container Image / Embedded System] |
| **Aktuelle Version** | [Versionsnummer] |
| **Hersteller** | BAUER GROUP |
| **Kontakt** | <disclosure@cra.docs.bauer-group.com> |
| **Erstellt am** | [Datum] |
| **Letzte Aktualisierung** | [Datum] |

### 2. Bestimmungsgemäße Verwendung

**Beschreibung:**
[Beschreiben Sie den bestimmungsgemäßen Zweck des Produkts, die Zielgruppe und die vorgesehene Betriebsumgebung.]

**Nutzungsumgebung:**

- [z.B. Cloud-Infrastruktur, On-Premise, Embedded Device, IoT]
- [Betriebssystem / Plattform]
- [Netzwerkverbindung erforderlich: Ja / Nein]

### 3. CRA-Produktklassifizierung

| Kriterium | Bewertung |
|-----------|-----------|
| **CRA-Kategorie** | [Standard / Klasse I / Klasse II / Kritisch] |
| **Begründung** | [Warum diese Klassifizierung] |
| **Annex III/IV Referenz** | [Falls zutreffend] |
| **Konformitätsbewertung** | [Modul A / Modul B+C / Modul H / EUCC] |

### 4. Technische Beschreibung

**Architektur-Übersicht:**
[Beschreiben Sie die Softwarearchitektur auf hoher Ebene]

**Technologie-Stack:**

| Komponente | Technologie | Version |
|------------|-------------|---------|
| Runtime | [z.B. Node.js 20, .NET 8, Python 3.12] | [Version] |
| Framework | [z.B. Express, ASP.NET, Django] | [Version] |
| Datenbank | [z.B. PostgreSQL, SQLite] | [Version] |
| Container | [z.B. Alpine 3.19, Distroless] | [Version] |

**Schnittstellen:**

| Schnittstelle | Typ | Beschreibung |
|---------------|-----|--------------|
| [z.B. REST API] | [HTTP/HTTPS] | [Zweck] |
| [z.B. MQTT] | [TCP] | [Zweck] |
| [z.B. USB] | [Physisch] | [Zweck] |

### 5. Sicherheitsfunktionen

| Funktion | Implementierung | Status |
|----------|----------------|--------|
| Authentifizierung | [Methode] | [Implementiert / Geplant] |
| Autorisierung | [Methode] | [Implementiert / Geplant] |
| Verschlüsselung (Transport) | [TLS 1.3] | [Implementiert / Geplant] |
| Verschlüsselung (Daten) | [AES-256] | [Implementiert / Geplant] |
| Secure Boot | [Methode] | [Implementiert / N/A] |
| Integritätsschutz | [Cosign / Checksummen] | [Implementiert / Geplant] |

### 6. Abhängigkeiten

**SBOM-Referenz:** [Link zur aktuellen SBOM]

**Kritische Drittkomponenten:**

| Komponente | Version | Lizenz | Bewertung |
|------------|---------|--------|-----------|
| [Name] | [Version] | [Lizenz] | [A/B/C] |

### 7. Support-Zeitraum

| Feld | Wert |
|------|------|
| **Support-Beginn** | [Datum des Inverkehrbringens] |
| **Support-Ende** | [Datum – mindestens 5 Jahre] |
| **Update-Frequenz** | [z.B. monatlich, bei Bedarf] |
| **EOL-Benachrichtigung** | [Wie werden Nutzer informiert] |

### 8. Konformität

| Dokument | Status | Link |
|----------|--------|------|
| Risikobewertung | [Abgeschlossen / In Arbeit] | [Link] |
| EU-Konformitätserklärung | [Unterzeichnet / In Arbeit] | [Link] |
| SBOM | [Generiert] | [Link] |
| Security Testing | [Durchgeführt / Geplant] | [Link] |
