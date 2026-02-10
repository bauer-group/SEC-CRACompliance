# 4.2 Vulnerability Disclosure Policy

## 4.2.1 Coordinated Vulnerability Disclosure (CVD)

Diese Policy definiert den Prozess für die koordinierte Offenlegung von Schwachstellen gemäß CRA Art. 13 Abs. 6 und ISO/IEC 29147:2018.

::: info RECHTSGRUNDLAGE
**Art. 13 Abs. 6 CRA:** *„Der Hersteller erleichtert die koordinierte Offenlegung von Schwachstellen, indem er eine Kontaktstelle für die Meldung von Schwachstellen benennt und seine Maßnahmen zur koordinierten Offenlegung von Schwachstellen in einer Richtlinie festlegt."*
:::

## 4.2.2 Geltungsbereich

Diese Policy gilt für alle Produkte mit digitalen Elementen der BAUER GROUP, einschließlich:

- Software-Produkte (Web-Anwendungen, APIs, Libraries)
- Container-Images
- Firmware (ESP32, STM32, Zephyr)
- Öffentlich zugängliche Dienste

## 4.2.3 Meldewege

### 1. GitHub Security Advisories (bevorzugt)

**Für jedes Repository:** Security → Advisories → New Draft Advisory

Vorteile:

- Vertrauliche Kommunikation
- Integrierte CVE-Zuweisung
- Patch-Koordination im Private Fork
- Strukturierte Erfassung

### 2. E-Mail

**Adresse:** <disclosure@cra.docs.bauer-group.com>

- Verschlüsselung: PGP-Schlüssel im Repository (`SECURITY.md`)
- Sprache: Deutsch oder Englisch

### 3. SECURITY.md

Jedes Repository enthält eine `SECURITY.md` mit:

- Meldewegen
- PGP-Schlüssel (oder Link)
- Unterstützte Versionen
- Reaktionszeiten

## 4.2.4 Prozess für externe Melder

### Was wir erwarten

Sicherheitsforscher, die Schwachstellen melden, werden gebeten:

- Die Schwachstelle nicht öffentlich zu machen, bevor ein Fix bereitsteht
- Keine Daten zu exfiltrieren oder zu zerstören
- Keine Denial-of-Service-Angriffe durchzuführen
- Einen angemessenen Zeitraum für die Behebung einzuräumen

### Was wir zusichern

| Zusage | Details |
|--------|---------|
| **Empfangsbestätigung** | Innerhalb von **48 Stunden** |
| **Erstbewertung** | Innerhalb von **7 Tagen** |
| **Statusupdate** | Mindestens alle **14 Tage** |
| **Koordinierte Offenlegung** | Gemeinsam vereinbarter Zeitpunkt, standardmäßig **90 Tage** nach Meldung |
| **Credit** | Namentliche Nennung im Advisory (auf Wunsch) |
| **Keine rechtlichen Schritte** | Gegen Melder, die diese Policy einhalten |

### Offenlegungszeitplan

```
Tag 0:   Schwachstelle gemeldet
Tag 2:   Empfangsbestätigung
Tag 7:   Erstbewertung und Severity-Einstufung
Tag 14:  Statusupdate an Melder
Tag 28:  Statusupdate an Melder
Tag 60:  Patch sollte entwickelt sein
Tag 90:  Koordinierte Offenlegung (Default-Deadline)
         ├── Security Advisory veröffentlichen
         ├── CVE-ID zuweisen
         ├── Patch-Release veröffentlichen
         └── Melder wird im Advisory genannt (auf Wunsch)
```

::: warning AUSNAHME
Bei aktiv ausgenutzten Schwachstellen wird der Offenlegungszeitraum verkürzt. In diesem Fall wird unverzüglich ein Patch bereitgestellt und die ENISA-Meldepflicht ausgelöst (24h).
:::

## 4.2.5 Interner Prozess bei eingehender Meldung

```
Externe Schwachstellenmeldung
    │
    ├── 1. Empfang bestätigen (≤ 48h)
    │   └── Automatisch oder durch Security Lead
    │
    ├── 2. Triage (≤ 7 Tage)
    │   ├── Schwachstelle reproduzieren
    │   ├── Schweregrad bewerten (CVSS)
    │   ├── Betroffene Produkte identifizieren
    │   └── Prüfe: Aktiv ausgenutzt?
    │       └── Ja → ENISA-Meldepflicht + beschleunigter Fix
    │
    ├── 3. Patch-Entwicklung
    │   ├── Fix entwickeln (ggf. im Private Fork)
    │   ├── Tests durchführen
    │   └── Security Review
    │
    ├── 4. Koordinierte Offenlegung
    │   ├── Zeitpunkt mit Melder abstimmen
    │   ├── Security Advisory vorbereiten
    │   ├── CVE-ID beantragen (via GitHub oder MITRE)
    │   └── Patch-Release vorbereiten
    │
    └── 5. Veröffentlichung
        ├── Security Advisory publizieren
        ├── Patch-Release veröffentlichen
        ├── SBOM aktualisieren
        ├── Nutzer informieren
        └── Melder danken und nennen
```

## 4.2.6 Safe Harbor

BAUER GROUP wird keine rechtlichen Schritte gegen Sicherheitsforscher einleiten, die:

- In gutem Glauben handeln
- Diese Disclosure Policy einhalten
- Keine Daten unbefugt zugreifen, kopieren oder vernichten
- Keine Dienste durch Denial-of-Service beeinträchtigen
- Betroffene Dritte nicht gefährden

## 4.2.7 Compliance-Referenzen

| Standard | Abdeckung |
|----------|-----------|
| CRA Art. 13 Abs. 6 | Kontaktstelle + CVD-Richtlinie |
| ISO/IEC 29147:2018 | Vulnerability Disclosure |
| ISO/IEC 30111:2019 | Vulnerability Handling Processes |
