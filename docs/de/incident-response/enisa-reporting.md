# 4.3 ENISA-Meldeprozess

## 4.3.1 Rechtsgrundlage

Gemäß Art. 14 CRA sind Hersteller verpflichtet, bestimmte Sicherheitsereignisse an ENISA bzw. die zuständige nationale CSIRT-Behörde zu melden. Die Meldepflicht gilt ab dem **11. September 2026**.

::: info RECHTSGRUNDLAGE
**Art. 14 Abs. 1 CRA:** Der Hersteller meldet jede **aktiv ausgenutzte Schwachstelle**, die in dem Produkt mit digitalen Elementen enthalten ist, **gleichzeitig** dem als Koordinator benannten CSIRT und ENISA.

**Art. 14 Abs. 3 CRA:** Der Hersteller meldet jeden **schwerwiegenden Sicherheitsvorfall mit Auswirkungen auf die Sicherheit** des Produkts mit digitalen Elementen, ebenfalls gleichzeitig dem benannten CSIRT und ENISA.

**Art. 14 Abs. 8 CRA:** Nach Kenntniserlangung informiert der Hersteller die betroffenen Nutzer und, soweit angemessen, alle Nutzer.

Beide Auslöser folgen derselben dreistufigen Struktur: Frühwarnung, ausführlichere Meldung und Abschlussbericht.
:::

::: danger KRITISCHE FRISTEN

| Meldung | Frist | Fristbeginn |
|---------|-------|-------------|
| Frühwarnung | Unverzüglich, in jedem Fall **24 Stunden** | Kenntniserlangung von der aktiv ausgenutzten Schwachstelle / dem schwerwiegenden Vorfall |
| Meldung | Unverzüglich, in jedem Fall **72 Stunden** | Kenntniserlangung |
| Abschlussbericht (aktiv ausgenutzte Schwachstelle) | **14 Tage** | Verfügbarkeit einer Korrektur- oder Abhilfemaßnahme |
| Abschlussbericht (schwerwiegender Vorfall) | **1 Monat** | Die 72-Stunden-Meldung |

:::

::: tip NIS2-Synergie
Die CRA-Meldepflicht (Art. 14) ist an **NIS2 Art. 23** (Incident-Notification) angelehnt. Beide nutzen dieselbe ENISA Single Reporting Platform (SRP). Organisationen, die bereits unter NIS2 melden, können **dieselbe Plattform und weitgehend denselben Prozess nutzen** — nur der Meldeumfang unterscheidet sich: NIS2 deckt operative Vorfälle ab, CRA deckt Produktschwachstellen ab.
:::

::: tip AI-Act-Synergie
Produkte mit KI-Komponenten, die nach dem AI Act als Hochrisiko eingestuft sind, haben **zusätzliche Meldepflichten** (Art. 62 AI Act). Stimmen Sie KI-bezogene Incident-Meldungen mit der CRA-Meldung ab, um Doppelmeldungen zu vermeiden.
:::

## 4.3.2 Wann beginnt die Frist? „Kenntniserlangung"

Jede oben genannte Frist läuft ab dem Moment der **Kenntniserlangung**. Die Leitlinien der Kommission definieren diesen Moment und stellen ihn in Einklang mit Erwägungsgrund 31 der Durchführungsverordnung (EU) 2024/2690 sowie Abschnitt II(A) der Leitlinien 9/2022 zur Meldung von Verletzungen des Schutzes personenbezogener Daten nach der DSGVO.

::: info DIE DEFINITION
Erkennt der Hersteller ein verdächtiges Ereignis — oder macht ein Dritter, etwa eine Einzelperson, ein Kunde, eine Einrichtung, eine Behörde, ein Medienunternehmen oder eine andere Quelle, ihn auf einen möglichen Vorfall oder eine Schwachstelle aufmerksam —, muss er dies **unverzüglich bewerten**.

Der Hersteller gilt als **kenntniserlangt**, wenn er nach dieser Erstbewertung mit **hinreichender Sicherheit** feststellt, dass

1. eine in seinem Produkt enthaltene Schwachstelle **aktiv ausgenutzt wird**, oder
2. ein **schwerwiegender Sicherheitsvorfall** eingetreten ist und zur Kompromittierung der Sicherheit seines Produkts geführt hat.
:::

Der genaue Zeitpunkt hängt von den Umständen ab. Mitunter ist die aktive Ausnutzung von Anfang an klar; mitunter dauert es, festzustellen, ob das Produkt überhaupt betroffen ist und ob ein böswilliger Akteur die Schwachstelle ausnutzt.

::: warning ENTSCHEIDEND IST DIE ZÜGIGE BEWERTUNG
Eine gemächliche Erstbewertung verschiebt die Frist nicht rechtmäßig nach hinten. Verlangt wird **zügiges Handeln** bei der Erstbewertung — insbesondere wenn die Schwachstelle ein erhebliches Risiko darstellen kann — und, wenn die Voraussetzungen vorliegen, Abhilfe und Meldung.

Operativ: Die Erstbewertung von ≤ 2 Stunden im Phase-1-Prozess weiter unten ist der Mechanismus, der die „Kenntniserlangung" belastbar macht. Zeitpunkt des Signaleingangs, Abschluss der Bewertung und die Begründung sind zu dokumentieren.
:::

Die Meldungen werden anschließend **fortlaufend aktualisiert**, während die interne Untersuchung fortschreitet. Die Frühwarnung enthält bewusst nur begrenzte Informationen; sie ist kein Grund zur Verzögerung.

## 4.3.3 Zeitlicher Anwendungsbereich der Meldepflicht

| Frage | Antwort |
|-------|---------|
| Ab wann gilt Art. 14? | **11. September 2026** |
| Für welche Produkte? | **Alle** Produkte im Anwendungsbereich des CRA — **einschließlich der vor dem 11.12.2027 in Verkehr gebrachten** (Art. 69 Abs. 3, Art. 71 Abs. 2) |
| Endet sie mit dem Support-Zeitraum? | **Nein.** Anders als die Pflichten zur Schwachstellenbehandlung nach Anhang I Teil II **bestehen die Meldepflichten fort, nachdem ein Produkt nicht mehr unterstützt wird** |
| Schulden Bestandsprodukte auch Schwachstellenbehandlung? | **Nein.** Wurde ein Produkt vor dem 11.12.2027 in Verkehr gebracht oder ist sein Support-Zeitraum abgelaufen, gelten die Pflichten des Anhangs I Teil II nicht — die Meldepflicht jedoch schon |

::: tip KEINE RÜCKWIRKENDE MELDUNG
Da die Pflicht durch die **Kenntniserlangung von aktiver Ausnutzung** ausgelöst wird, muss ein Hersteller Schwachstellen **nicht** melden, von deren aktiver Ausnutzung er bereits **vor dem 11. September 2026** Kenntnis erlangt hatte. Der CRA verlangt keine rückwirkende Meldung.

Der umgekehrte Fall **ist** erfasst: Kannte der Hersteller eine Schwachstelle vor dem 11. September 2026, war ihm aber zu diesem Zeitpunkt keine aktive Ausnutzung bekannt — weil noch keine stattgefunden hatte oder weil er davon keine Kenntnis hatte — und tritt die aktive Ausnutzung danach ein oder wird ihm danach bekannt, wird die Schwachstelle zu einer meldepflichtigen, aktiv ausgenutzten Schwachstelle.
:::

## 4.3.4 Schwachstellen in Drittkomponenten

Ein Hersteller meldet nur aktiv ausgenutzte Schwachstellen, die **in seinem eigenen Produkt enthalten** sind. Daraus ergibt sich eine präzise und häufig falsch angewandte Abgrenzung:

| Sachverhalt | Meldepflichtig nach Art. 14 Abs. 1? |
|-------------|:-----------------------------------:|
| Eine Drittkomponente im Produkt enthält eine Schwachstelle, die **im Produkt aktiv ausgenutzt wird** | **Ja** — der Hersteller des Produkts muss sie melden |
| Eine Drittkomponente enthält eine Schwachstelle, die im Produkt **nicht ausnutzbar** ist (z. B. weil der verwundbare Code nicht erreichbar ist) | **Nein** |
| Eine Drittkomponente enthält eine Schwachstelle, die im Produkt **nicht ausgenutzt wurde** | **Nein** |

In den beiden verneinenden Fällen ist der Hersteller gleichwohl verpflichtet:

1. die **Anforderungen an die Schwachstellenbehandlung** des Anhangs I Teil II einzuhalten;
2. die Schwachstelle **nach oben zu melden** — an die Person oder Einrichtung, die die Komponente herstellt oder pflegt (Art. 13 Abs. 6) → [3.5 Anforderungen an die Schwachstellenbehandlung](/de/vulnerability-management/handling-requirements);
3. und er **kann** freiwillig nach **Art. 15** melden.

::: tip AUCH OPEN-SOURCE-STEWARDS MELDEN
Verwalter quelloffener Software müssen aktiv ausgenutzte Schwachstellen nach Art. 24 Abs. 3 ebenfalls melden, soweit sie an der Entwicklung des Produkts beteiligt sind. Da FOSS-Komponenten typischerweise nachgelagert integriert werden, erlangt ein Steward die Kenntnis meist über eine Meldung Dritter — von einem Hersteller, der die Ausnutzung in seinem eigenen Produkt entdeckt hat, oder von einem Nutzer bzw. Sicherheitsforscher. Siehe [1.7 Freie & quelloffene Software und der Steward](/de/overview/open-source-steward).
:::

## 4.3.5 Meldepflichtige Ereignisse

### Aktiv ausgenutzte Schwachstelle (Art. 14 Abs. 1)

Eine Schwachstelle in einem Produkt der BAUER GROUP wird in freier Wildbahn aktiv ausgenutzt. Gemäß Art. 3 Nr. 42 CRA liegt eine aktive Ausnutzung vor, wenn zuverlässige Belege existieren, dass die Schwachstelle von einem böswilligen Akteur in einem System ohne Erlaubnis des Eigentümers ausgenutzt wurde.

**Indikatoren für aktive Ausnutzung:**

- Aufnahme in den **KEV-Katalog** (CISA Known Exploited Vulnerabilities)
- **Threat-Intelligence-Feeds** berichten über Exploitation-Aktivitäten
- **Meldung durch Kunden oder Sicherheitsforscher** mit Nachweis der Ausnutzung
- **Eigene Erkennung** in Logs, Monitoring oder Incident-Response-Prozessen
- **Öffentliche Berichte** (Vendor Advisories, Blogs, Foren) über Angriffe

### Schwerer Sicherheitsvorfall (Art. 14 Abs. 3)

Ein Vorfall, der die Sicherheit des Produkts oder seiner Nutzer erheblich beeinträchtigt (Art. 3 Nr. 44 CRA).

**Kriterien für die Einstufung als schwerer Vorfall:**

| Kriterium | Beschreibung | Beispiele |
|-----------|-------------|-----------|
| Integritätskompromittierung | Die Integrität des Produkts oder seiner Lieferkette ist beeinträchtigt | Manipulierter Quellcode, kompromittierte Build-Pipeline |
| Unbefugter Datenzugriff | Zugriff auf Nutzerdaten ohne Autorisierung | Datenleck, API-Missbrauch, Konfigurationsfehler |
| Verfügbarkeitsverlust | Sicherheitsrelevante Funktionen sind eingeschränkt | Auth-Bypass, Update-Mechanismus gestört |
| Kompromittierte Updates | Manipulierte Updates werden ausgeliefert | Supply-Chain-Angriff, Signing-Key-Kompromittierung |

## 4.3.6 Rollen und Verantwortlichkeiten

| Rolle | Verantwortung im Meldeprozess |
|-------|-------------------------------|
| **Security Lead** | Meldepflicht bewerten, ENISA-Meldungen absenden, Gesamtkoordination |
| **DevOps Lead** | Technische Analyse, Patch-Koordination, Infrastruktur-Maßnahmen |
| **Product Owner** | Nutzerbenachrichtigung, Impact-Assessment, Release-Entscheidung |
| **Management** | Freigabe bei SEV-1/SEV-2, Ressourcenzuweisung, Eskalation |
| **Entwickler** | Root-Cause-Analyse, Patch-Entwicklung, Security-Review |

## 4.3.7 Meldeplattform

<EnisaSrpStatus />

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

*Quelle: [ENISA CSIRTs Network](https://csirtsnetwork.eu/) / [ENISA CSIRT Inventory](https://www.enisa.europa.eu/tools/csirts-by-country-interactive-map). Stand: 2026-04. Aktuelle Kontaktdaten vor Erstmeldung verifizieren.*

::: warning DOPPELMELDUNG
Bei Nutzung des nationalen CSIRT als Fallback ist die Meldung unverzüglich nachzuholen, sobald die ENISA SRP wieder verfügbar ist.
:::

## 4.3.8 Meldeprozess

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

### Phase 3: Abschlussbericht (≤ 14 Tage bei Schwachstellen / ≤ 1 Monat bei schweren Vorfällen)

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
    └── 2. ENISA-Abschlussbericht absenden (Schwachstelle: ≤ 14 Tage nach Verfügbarkeit einer Korrekturmaßnahme / schwerer Vorfall: ≤ 1 Monat nach der 72h-Meldung)
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

## 4.3.9 Nutzerbenachrichtigung (Art. 14 Abs. 8)

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

### Nutzerinformation ist risikobasiert, nicht wahllos

::: info VERHÄLTNISMÄSSIGE OFFENLEGUNG
Art. 14 Abs. 8 bedeutet **nicht**, dass Informationen über eine aktiv ausgenutzte Schwachstelle oder einen schwerwiegenden Vorfall öffentlich gemacht oder wahllos offengelegt werden müssen. Im Licht der Art des Produkts, der betroffenen Nutzer und der potenziellen Auswirkungen dürfen Hersteller die **Offenlegung detaillierter Informationen auf die betroffenen Nutzer oder Kunden beschränken**.

Das gilt insbesondere für Produkte in **sensiblen oder wesentlichen Umgebungen**, in denen die öffentliche Offenlegung technischer Details selbst Cybersicherheitsrisiken erhöhen oder weitere Ausnutzung erleichtern könnte.
:::

| Phase | Angemessener Umfang der Offenlegung |
|-------|-------------------------------------|
| Vor Behebung oder Minderung der Schwachstelle | Begrenzte, gezielte Offenlegung gegenüber betroffenen Nutzern und Kunden; keine technischen Details, die die Ausnutzung erleichtern |
| Nach angemessener Behebung oder Minderung | **Eine breitere Offenlegung kann angemessen sein** — etwa zur allgemeinen Sensibilisierung oder damit Nutzer prüfen können, dass ihre Produkte nicht mehr betroffen sind. Detailtiefe und Zeitpunkt bleiben verhältnismäßig zum Restausnutzungsrisiko, zur Art des Produkts und zu den Interessen der Nutzer |
| Sobald ein Sicherheitsupdate bereitgestellt ist | **Öffentliche Offenlegung ist verpflichtend** nach Anhang I Teil II Nr. 4 — Beschreibung, betroffene Produkte, Auswirkungen, Schweregrad und Abhilfemaßnahmen → [3.5 Anforderungen an die Schwachstellenbehandlung](/de/vulnerability-management/handling-requirements) |

::: danger INFORMIEREN SIE NICHT RECHTZEITIG, KANN DAS CSIRT ES TUN
Versäumt es ein Hersteller, die Nutzer rechtzeitig zu informieren, **können die CSIRTs, die die Meldung erhalten haben, diese Informationen selbst an die Nutzer weitergeben**, sofern dies als verhältnismäßig und erforderlich erachtet wird, um die Auswirkungen der Schwachstelle oder des Vorfalls zu verhindern oder zu mindern. Die Kontrolle über die Botschaft geht damit verloren.
:::

## 4.3.10 Dokumentation und Nachweisführung

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

## 4.3.11 Vorbereitungsmaßnahmen (vor 11.09.2026)

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

## 4.3.12 Entscheidungsbaum: Meldepflicht

```
Sicherheitsereignis erkannt
    │
    ├── Ist eine Schwachstelle in unserem Produkt betroffen?
    │   ├── Nein → Keine CRA-Meldepflicht (ggf. NIS2 prüfen)
    │   └── Ja ↓
    │
    ├── Wird die Schwachstelle aktiv ausgenutzt?
    │   ├── Ja → MELDEPFLICHTIG (Art. 14 Abs. 1)
    │   │         → 24h Frühwarnung + 72h Meldung + 14d Abschlussbericht (nach Verfügbarkeit einer Korrekturmaßnahme)
    │   └── Nein ↓
    │
    ├── Liegt ein schwerer Sicherheitsvorfall vor?
    │   ├── Ja → MELDEPFLICHTIG (Art. 14 Abs. 3)
    │   │         → 24h Frühwarnung + 72h Meldung + 1 Monat Abschlussbericht (nach der 72h-Meldung)
    │   └── Nein ↓
    │
    └── Standardmäßige Schwachstellenbehandlung
        → Vulnerability Management (→ Kap. 3)
        → Patch Management gemäß SLA
        → Keine ENISA-Meldepflicht
```

> Quelle und Rechtsstatus der Auslegungen auf dieser Seite: [Leitlinien der EU-Kommission zum CRA](/de/clarifications/commission-guidance).
