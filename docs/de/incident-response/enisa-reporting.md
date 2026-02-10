# 4.3 ENISA-Meldeprozess

## 4.3.1 Rechtsgrundlage

Gemäß Art. 14 CRA sind Hersteller verpflichtet, bestimmte Sicherheitsereignisse an ENISA bzw. die zuständige nationale CSIRT-Behörde zu melden. Die Meldepflicht gilt ab dem **11. September 2026**.

::: info RECHTSGRUNDLAGE
**Art. 14 Abs. 1 CRA:** *„Der Hersteller meldet jede aktiv ausgenutzte Schwachstelle, die in dem Produkt mit digitalen Elementen enthalten ist, gleichzeitig dem benannten CSIRT und ENISA. Der Hersteller übermittelt eine Frühwarnung innerhalb von 24 Stunden, nachdem er davon Kenntnis erlangt hat."*

**Art. 14 Abs. 2 CRA:** *„Der Hersteller übermittelt innerhalb von 72 Stunden nach Kenntnisnahme eine Schwachstellenmeldung, die eine allgemeine Beschreibung der Schwachstelle, eine erste Bewertung des Schweregrads und der Auswirkungen sowie Informationen über ergriffene Korrekturmaßnahmen enthält."*

**Art. 14 Abs. 3 CRA:** *„Der Hersteller übermittelt innerhalb von 14 Tagen nach Kenntnisnahme einen Abschlussbericht, der eine detaillierte Beschreibung der Schwachstelle, Informationen über ergriffene Korrektur- oder Abhilfemaßnahmen sowie gegebenenfalls Kompromittierungsindikatoren enthält."*
:::

::: danger KRITISCHE FRISTEN

| Meldung | Frist | Fristbeginn |
|---------|-------|-------------|
| Frühwarnung | **24 Stunden** | Kenntnisnahme der aktiv ausgenutzten Schwachstelle / des schweren Vorfalls |
| Schwachstellenmeldung | **72 Stunden** | Kenntnisnahme |
| Abschlussbericht | **14 Tage** | Kenntnisnahme |

:::

## 4.3.2 Meldepflichtige Ereignisse

### Aktiv ausgenutzte Schwachstelle (Art. 14 Abs. 1)

Eine Schwachstelle in einem Produkt der BAUER GROUP wird in freier Wildbahn aktiv ausgenutzt. Gemäß Art. 3 Nr. 42 CRA liegt eine aktive Ausnutzung vor, wenn zuverlässige Belege existieren, dass die Schwachstelle von einem böswilligen Akteur in einem System ohne Erlaubnis des Eigentümers ausgenutzt wurde.

**Indikatoren für aktive Ausnutzung:**

- Aufnahme in den **KEV-Katalog** (CISA Known Exploited Vulnerabilities)
- **Threat-Intelligence-Feeds** berichten über Exploitation-Aktivitäten
- **Meldung durch Kunden oder Sicherheitsforscher** mit Nachweis der Ausnutzung
- **Eigene Erkennung** in Logs, Monitoring oder Incident-Response-Prozessen
- **Öffentliche Berichte** (Vendor Advisories, Blogs, Foren) über Angriffe

### Schwerer Sicherheitsvorfall (Art. 14 Abs. 3)

Ein Vorfall, der die Sicherheit des Produkts oder seiner Nutzer erheblich beeinträchtigt (Art. 3 Nr. 43 CRA).

**Kriterien für die Einstufung als schwerer Vorfall:**

| Kriterium | Beschreibung | Beispiele |
|-----------|-------------|-----------|
| Integritätskompromittierung | Die Integrität des Produkts oder seiner Lieferkette ist beeinträchtigt | Manipulierter Quellcode, kompromittierte Build-Pipeline |
| Unbefugter Datenzugriff | Zugriff auf Nutzerdaten ohne Autorisierung | Datenleck, API-Missbrauch, Konfigurationsfehler |
| Verfügbarkeitsverlust | Sicherheitsrelevante Funktionen sind eingeschränkt | Auth-Bypass, Update-Mechanismus gestört |
| Kompromittierte Updates | Manipulierte Updates werden ausgeliefert | Supply-Chain-Angriff, Signing-Key-Kompromittierung |

## 4.3.3 Rollen und Verantwortlichkeiten

| Rolle | Verantwortung im Meldeprozess |
|-------|-------------------------------|
| **Security Lead** | Meldepflicht bewerten, ENISA-Meldungen absenden, Gesamtkoordination |
| **DevOps Lead** | Technische Analyse, Patch-Koordination, Infrastruktur-Maßnahmen |
| **Product Owner** | Nutzerbenachrichtigung, Impact-Assessment, Release-Entscheidung |
| **Management** | Freigabe bei SEV-1/SEV-2, Ressourcenzuweisung, Eskalation |
| **Entwickler** | Root-Cause-Analyse, Patch-Entwicklung, Security-Review |

## 4.3.4 Meldeplattform

### ENISA Single Reporting Platform (SRP)

Ab dem 11. September 2026 steht die ENISA Single Reporting Platform als zentrale Meldestelle zur Verfügung:

| Eigenschaft | Details |
|-------------|---------|
| **URL** | Wird von ENISA bereitgestellt (voraussichtlich `https://reporting.enisa.europa.eu`) |
| **Zugang** | Registrierung als Hersteller gemäß Art. 14 Abs. 4 CRA erforderlich |
| **Format** | Strukturiertes Online-Formular + API-Zugang (geplant) |
| **Sprache** | Englisch (EU-weit), ggf. nationale Sprachen |
| **Bestätigung** | Automatische Empfangsbestätigung durch die Plattform |

### Nationale CSIRTs der EU-Mitgliedstaaten

Falls die ENISA SRP temporär nicht verfügbar ist, erfolgt die Meldung an das zuständige nationale CSIRT. Nachfolgend das vollständige Verzeichnis aller 27 EU-Mitgliedstaaten:

| Land | CSIRT | Website | E-Mail |
|------|-------|---------|--------|
| **Belgien** | CERT.be (CCB) | [ccb.belgium.be/cert](https://ccb.belgium.be/cert) | `cert@cert.be` |
| **Bulgarien** | CERT Bulgaria | [www.govcert.bg](https://www.govcert.bg) | `cert@govcert.bg` |
| **Dänemark** | CFCS | [www.cfcs.dk](https://www.cfcs.dk) | `cfcs@cfcs.dk` |
| **Deutschland** | CERT-Bund (BSI) | [www.bsi.bund.de](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Cyber-Sicherheitslage/Reaktion/CERT-Bund/cert-bund_node.html) | `certbund@bsi.bund.de` |
| **Estland** | CERT-EE (RIA) | [www.cert.ee](https://www.cert.ee) | `cert@cert.ee` |
| **Finnland** | NCSC-FI (Traficom) | [www.kyberturvallisuuskeskus.fi](https://www.kyberturvallisuuskeskus.fi) | `cert@traficom.fi` |
| **Frankreich** | CERT-FR (ANSSI) | [www.cert.ssi.gouv.fr](https://www.cert.ssi.gouv.fr) | `cert-fr@ssi.gouv.fr` |
| **Griechenland** | National CERT-GR | [www.cert.gr](https://www.cert.gr) | `cert@cert.gr` |
| **Irland** | NCSC-IE | [www.ncsc.gov.ie](https://www.ncsc.gov.ie) | `certreport@ncsc.gov.ie` |
| **Italien** | CSIRT Italia (ACN) | [www.csirt.gov.it](https://www.csirt.gov.it) | `csirt@pec.acn.gov.it` |
| **Kroatien** | National CERT (CERT.hr) | [www.cert.hr](https://www.cert.hr) | `ncert@cert.hr` |
| **Lettland** | CERT.LV | [cert.lv](https://cert.lv) | `cert@cert.lv` |
| **Litauen** | NKSC | [www.nksc.lt](https://www.nksc.lt) | `cert@nksc.lt` |
| **Luxemburg** | CIRCL / GovCERT.lu | [www.circl.lu](https://www.circl.lu) | `info@circl.lu` |
| **Malta** | CSIRTMalta | [www.mca.org.mt](https://www.mca.org.mt) | `csirtmalta@gov.mt` |
| **Niederlande** | NCSC-NL | [www.ncsc.nl](https://www.ncsc.nl) | `cert@ncsc.nl` |
| **Österreich** | CERT.at | [www.cert.at](https://www.cert.at) | `reports@cert.at` |
| **Polen** | CERT Polska (NASK) | [cert.pl](https://cert.pl) | `cert@cert.pl` |
| **Portugal** | CERT.PT (CNCS) | [www.cncs.gov.pt](https://www.cncs.gov.pt) | `cert@cert.pt` |
| **Rumänien** | CERT-RO | [www.cert.ro](https://www.cert.ro) | `cert@cert.ro` |
| **Schweden** | CERT-SE (MSB) | [www.cert.se](https://www.cert.se) | `cert@cert.se` |
| **Slowakei** | SK-CERT (NASES) | [www.sk-cert.sk](https://www.sk-cert.sk) | `incident@sk-cert.sk` |
| **Slowenien** | SI-CERT | [www.cert.si](https://www.cert.si) | `cert@cert.si` |
| **Spanien** | CCN-CERT / INCIBE-CERT | [www.incibe.es](https://www.incibe.es) | `incidencias@incibe-cert.es` |
| **Tschechien** | NÚKIB / GovCERT.CZ | [www.nukib.cz](https://www.nukib.cz) | `cert@nukib.cz` |
| **Ungarn** | NCSC Hungary (NBSZ NKI) | [nki.gov.hu](https://nki.gov.hu) | `cert@nki.gov.hu` |
| **Zypern** | CSIRT-CY (DMRID) | [csirt.cy](https://csirt.cy) | `info@csirt.cy` |

*Quelle: [ENISA CSIRTs Network](https://csirtsnetwork.eu/) / [ENISA CSIRT Inventory](https://www.enisa.europa.eu/tools/csirts-by-country-interactive-map). Stand: 2026-02. Aktuelle Kontaktdaten vor Erstmeldung verifizieren.*

::: warning DOPPELMELDUNG
Bei Nutzung des nationalen CSIRT als Fallback ist die Meldung unverzüglich nachzuholen, sobald die ENISA SRP wieder verfügbar ist.
:::

## 4.3.5 Meldeprozess

### Phase 1: Frühwarnung (≤ 24 Stunden)

**Verantwortlich:** Security Lead

```
Aktiv ausgenutzte Schwachstelle / schwerer Vorfall erkannt
    │
    ├── 1. Sofortbenachrichtigung
    │   ├── Security Lead alarmieren (sofort, jede Uhrzeit)
    │   └── Incident-Ticket erstellen (GitHub Issue, Label: incident + enisa)
    │
    ├── 2. Erstbewertung (≤ 2 Stunden)
    │   ├── Schwachstelle / Vorfall bestätigen
    │   ├── Betroffene Produkte und Versionen identifizieren
    │   ├── Aktive Ausnutzung verifizieren (KEV, Threat Intel)
    │   ├── Schweregrad bestimmen (CVSS)
    │   └── ENISA-Meldepflicht bestätigen
    │
    ├── 3. ENISA-Frühwarnung absenden (≤ 24h)
    │   ├── Template: /templates/enisa-early-warning
    │   ├── Plattform: ENISA SRP (primär) oder CSIRT (Fallback)
    │   └── Mindestinhalt gemäß Art. 14 Abs. 1:
    │       ├── Hersteller-Identifikation
    │       ├── Betroffenes Produkt / betroffene Versionen
    │       ├── Art der Schwachstelle / des Vorfalls
    │       ├── Schweregrad (CVSS Score + Vector)
    │       ├── Bestätigung der aktiven Ausnutzung
    │       ├── Erste Einschätzung der Auswirkung
    │       └── Geplante Sofortmaßnahmen
    │
    └── 4. Parallele Maßnahmen
        ├── Kommunikationsplan aktivieren (→ 5.4)
        ├── Management informieren (bei SEV-1/SEV-2)
        └── Sofortmaßnahmen einleiten (Workaround, Isolation)
```

**Nachweis:** Screenshot der Meldungsbestätigung + Zeitstempel im Incident-Ticket

### Phase 2: Schwachstellenmeldung (≤ 72 Stunden)

**Verantwortlich:** Security Lead + DevOps Lead

```
Detailbewertung läuft / abgeschlossen
    │
    ├── 1. Technische Analyse vertiefen
    │   ├── Vollständige Versionsliste der betroffenen Produkte
    │   ├── CWE-Klassifikation zuweisen
    │   ├── CVSS v3.1 Vector vollständig berechnen
    │   ├── Angriffsvektor und Voraussetzungen dokumentieren
    │   └── Ausnutzungsszenarien beschreiben
    │
    ├── 2. Maßnahmen dokumentieren
    │   ├── Bereits ergriffene Mitigationsmaßnahmen
    │   ├── Status der Patch-Entwicklung
    │   ├── Verfügbare Workarounds
    │   └── Empfohlene Nutzermaßnahmen
    │
    └── 3. ENISA-Meldung absenden (≤ 72h)
        ├── Template: /templates/enisa-notification
        ├── Plattform: ENISA SRP
        └── Mindestinhalt gemäß Art. 14 Abs. 2:
            ├── Bezug zur Frühwarnung
            ├── Detaillierte Schwachstellenbeschreibung
            ├── CVE-ID (falls bereits zugewiesen)
            ├── Alle betroffenen Produktversionen
            ├── CWE-Klassifikation + CVSS Vector
            ├── Technische Details (Attack Vector, Impact)
            ├── Status ergriffener Mitigationsmaßnahmen
            ├── Verfügbarer Patch / Workaround
            ├── Empfohlene Nutzermaßnahmen
            └── Geschätzte Anzahl betroffener Nutzer / Geräte
```

**Nachweis:** Meldungsbestätigung + vollständige Kopie im Incident-Ticket

### Phase 3: Abschlussbericht (≤ 14 Tage)

**Verantwortlich:** Security Lead

```
Behebung abgeschlossen oder fortgeschritten
    │
    ├── 1. Abschlussdokumentation erstellen
    │   ├── Root-Cause-Analyse abschließen
    │   ├── Vollständige Zeitlinie des Vorfalls erstellen
    │   ├── Alle ergriffenen Maßnahmen auflisten
    │   ├── Bereitgestellte Patches / Updates benennen
    │   ├── Verbleibende Risiken bewerten
    │   └── Lessons Learned formulieren
    │
    └── 2. ENISA-Abschlussbericht absenden (≤ 14 Tage)
        ├── Template: /templates/enisa-final-report
        ├── Plattform: ENISA SRP
        └── Mindestinhalt gemäß Art. 14 Abs. 3:
            ├── Bezug zu Frühwarnung und Meldung
            ├── Detaillierte Schwachstellenbeschreibung
            ├── Root-Cause-Analyse
            ├── Vollständige Ereigniszeitlinie
            ├── Alle ergriffenen Korrekturmaßnahmen
            ├── Bereitgestellte Patches / Updates (mit Versionsnummern)
            ├── Verbleibende Risiken und deren Mitigation
            ├── Kompromittierungsindikatoren (IoC), falls vorhanden
            ├── Lessons Learned
            └── Maßnahmen zur Vermeidung künftiger Vorfälle
```

**Nachweis:** Meldungsbestätigung + vollständige Kopie im Incident-Ticket + Archivierung

## 4.3.6 Nutzerbenachrichtigung (Art. 14 Abs. 8)

Parallel zur ENISA-Meldung müssen betroffene Nutzer **unverzüglich** über die Schwachstelle und verfügbare Korrekturmaßnahmen informiert werden.

| Aspekt | Details |
|--------|---------|
| **Auslöser** | Jede aktiv ausgenutzte Schwachstelle oder jeder schwere Vorfall |
| **Frist** | Unverzüglich (Art. 14 Abs. 8) |
| **Primärkanal** | GitHub Security Advisory |
| **Sekundärkanal** | E-Mail an bekannte Kunden (bei SEV-1/SEV-2) |
| **Inhalt** | Schwachstellenbeschreibung, Auswirkung, empfohlene Maßnahmen, verfügbarer Patch |
| **Template** | [Vulnerability Report](/de/templates/vulnerability-report) |
| **Verantwortlich** | Security Lead + Product Owner |

::: warning KOORDINATION MIT ENISA
Die Nutzerbenachrichtigung darf keine Details enthalten, die die Ausnutzung der Schwachstelle erleichtern könnten, solange kein Patch verfügbar ist. In Abstimmung mit ENISA kann eine verzögerte Offenlegung vereinbart werden (Art. 14 Abs. 7).
:::

## 4.3.7 Dokumentation und Nachweisführung

Jede ENISA-Meldung wird vollständig dokumentiert. Diese Dokumentation dient als **Nachweis der Pflichterfüllung** gegenüber Marktaufsichtsbehörden (Art. 52 CRA).

### Pflichtdokumentation je Meldung

| Dokumentationsbestandteil | Ablageort | Aufbewahrungsfrist |
|--------------------------|-----------|-------------------|
| Vollständige Kopie jeder ENISA-Meldung | Incident-Ticket (GitHub Issue) | 10 Jahre |
| Zeitstempel aller Meldungen und Aktionen | Incident-Ticket + Git-Log | 10 Jahre |
| Empfangsbestätigung durch ENISA / CSIRT | Incident-Ticket (Anhang) | 10 Jahre |
| Kommunikationsprotokoll (intern + extern) | Incident-Ticket | 10 Jahre |
| Nutzerbenachrichtigungen (Advisory + E-Mail) | GitHub Advisory + E-Mail-Archiv | 10 Jahre |
| Post-Mortem / Lessons Learned | Incident-Ticket | 10 Jahre |

### Referenzierungsschema

Alle Meldungen verwenden ein einheitliches Referenzierungsschema:

| Meldungstyp | Format | Beispiel |
|-------------|--------|----------|
| Frühwarnung | `EW-YYYY-NNN` | EW-2026-001 |
| Schwachstellenmeldung | `VN-YYYY-NNN` | VN-2026-001 |
| Abschlussbericht | `FR-YYYY-NNN` | FR-2026-001 |
| Interner Incident | `INC-YYYY-NNN` | INC-2026-001 |

## 4.3.8 Vorbereitungsmaßnahmen (vor 11.09.2026)

Die folgenden Maßnahmen müssen vor dem Inkrafttreten der Meldepflicht abgeschlossen sein:

| Nr. | Maßnahme | Verantwortlich | Frist | Status |
|-----|----------|---------------|-------|--------|
| 1 | ENISA SRP-Registrierung durchführen | Security Lead | Sobald verfügbar | Ausstehend |
| 2 | Nationale CSIRT-Kontaktdaten verifizieren | Security Lead | Q2 2026 | Ausstehend |
| 3 | Meldevorlagen vorbereiten und intern testen | Security Lead | Q2 2026 | ✅ Erledigt |
| 4 | Incident-Response-Team auf Meldeprozess schulen | Security Lead | Q2 2026 | Ausstehend |
| 5 | Testmeldung über ENISA SRP durchführen | Security Lead | Q3 2026 | Ausstehend |
| 6 | Eskalationspfade und Kontaktlisten aktualisieren | Security Lead | Q2 2026 | Ausstehend |
| 7 | ENISA-Zugangsdaten sicher hinterlegen | Security Lead | Q3 2026 | Ausstehend |
| 8 | Meldeprozess in Tabletop-Übung testen | Security Lead | Q3 2026 | Ausstehend |

## 4.3.9 Entscheidungsbaum: Meldepflicht

```
Sicherheitsereignis erkannt
    │
    ├── Ist eine Schwachstelle in unserem Produkt betroffen?
    │   ├── Nein → Keine CRA-Meldepflicht (ggf. NIS2 prüfen)
    │   └── Ja ↓
    │
    ├── Wird die Schwachstelle aktiv ausgenutzt?
    │   ├── Ja → MELDEPFLICHTIG (Art. 14 Abs. 1)
    │   │         → 24h Frühwarnung + 72h Meldung + 14d Abschlussbericht
    │   └── Nein ↓
    │
    ├── Liegt ein schwerer Sicherheitsvorfall vor?
    │   ├── Ja → MELDEPFLICHTIG (Art. 14 Abs. 3)
    │   │         → 24h Frühwarnung + 72h Meldung + 14d Abschlussbericht
    │   └── Nein ↓
    │
    └── Standardmäßige Schwachstellenbehandlung
        → Vulnerability Management (→ Kap. 3)
        → Patch Management gemäß SLA
        → Keine ENISA-Meldepflicht
```
