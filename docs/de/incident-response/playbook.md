# 5.1 Incident-Response-Playbook

## Zweck

Dieses Playbook definiert den verbindlichen Prozess für die Erkennung, Bewertung, Eindämmung, Behebung und Nachbereitung von Cybersecurity-Vorfällen gemäß CRA Art. 14 und Annex I, Teil II.

## Eskalationsstufen

| Stufe | Bezeichnung | Kriterien | Beispiele |
|-------|-------------|-----------|-----------|
| **SEV-1** | Kritisch | Aktiv ausgenutzte Schwachstelle in Produktion, Datenverlust, vollständige Kompromittierung | Zero-Day-Exploit, Ransomware, Datenexfiltration |
| **SEV-2** | Hoch | Ausnutzbare Schwachstelle (PoC verfügbar), teilweise Kompromittierung | CVE mit Public Exploit, laterale Bewegung erkannt |
| **SEV-3** | Mittel | Schwachstelle ohne bekannten Exploit, eingeschränkte Auswirkung | Neue CRITICAL CVE ohne PoC, Konfigurationsfehler |
| **SEV-4** | Niedrig | Informationelle Findings, Best-Practice-Abweichungen | LOW/MEDIUM CVEs, Policy-Verletzungen |

## Playbook: Phase 1 – Erkennung & Triage

**Zeitrahmen:** 0 – 1 Stunde

```
Sicherheitsereignis erkannt
    │
    ├── Quelle identifizieren
    │   ├── CVE-Monitor (automatisch)
    │   ├── Dependabot Alert
    │   ├── Externe Meldung (SECURITY.md)
    │   ├── Interne Erkennung
    │   └── ENISA / CSIRT-Benachrichtigung
    │
    ├── Erstbewertung durch Security Lead
    │   ├── Schweregrad bestimmen (SEV-1 bis SEV-4)
    │   ├── Betroffene Produkte identifizieren
    │   ├── Wird die Schwachstelle aktiv ausgenutzt?
    │   └── Sind Kundendaten betroffen?
    │
    └── Eskalationsentscheidung
        ├── SEV-1/SEV-2 → Sofort-Eskalation an Management
        │   └── Bei aktiver Ausnutzung → ENISA 24h-Frist startet
        ├── SEV-3 → Bearbeitung innerhalb 72h
        └── SEV-4 → Normale Bearbeitung
```

**Checkliste Triage:**

- [ ] Ereignisquelle dokumentiert
- [ ] Schweregrad festgelegt (SEV-1/2/3/4)
- [ ] Betroffene Produkte und Versionen identifiziert
- [ ] Aktive Ausnutzung geprüft (KEV-Katalog, Threat Intelligence)
- [ ] ENISA-Meldepflicht bewertet
- [ ] Incident-Ticket erstellt (GitHub Issue mit Label `incident`)

## Playbook: Phase 2 – Eindämmung

**Zeitrahmen:** 1 – 4 Stunden (SEV-1), 4 – 24 Stunden (SEV-2)

```
Sofortmaßnahmen
    │
    ├── Kurzfristige Eindämmung
    │   ├── Betroffenen Dienst isolieren (wenn möglich)
    │   ├── Workaround implementieren
    │   ├── Zugriff einschränken
    │   └── Beweissicherung (Logs, Artefakte)
    │
    ├── Bei aktiver Ausnutzung
    │   ├── ENISA-Frühwarnung senden (≤ 24h)
    │   ├── Betroffene Nutzer warnen
    │   └── Temporäre Mitigation veröffentlichen
    │
    └── Kommunikation
        ├── Internes Team informieren
        ├── Management briefen (SEV-1/2)
        └── Kommunikationsplan aktivieren
```

**Checkliste Eindämmung:**

- [ ] Sofortmaßnahmen umgesetzt
- [ ] Beweise gesichert (Logs, Screenshots, Artefakte)
- [ ] ENISA-Frühwarnung gesendet (wenn meldepflichtig)
- [ ] Betroffene Nutzer informiert (wenn erforderlich)
- [ ] Eindämmungsmaßnahmen dokumentiert

## Playbook: Phase 3 – Behebung

**Zeitrahmen:** 4 – 48 Stunden (SEV-1), 1 – 7 Tage (SEV-2)

```
Patch-Entwicklung
    │
    ├── Root-Cause-Analyse
    │   ├── Schwachstelle im Code lokalisieren
    │   ├── Ausnutzungspfad nachvollziehen
    │   └── Betroffene Komponenten identifizieren
    │
    ├── Fix implementieren
    │   ├── Dependency-Update ODER Code-Fix
    │   ├── Tests (Unit, Integration, Security)
    │   └── Security Review (4-Augen-Prinzip)
    │
    ├── Hotfix-Release
    │   ├── CI/CD Pipeline
    │   ├── SBOM aktualisieren
    │   ├── Release signieren (Cosign)
    │   └── Release veröffentlichen
    │
    ├── ENISA-Meldung (72h)
    │   └── Detaillierte Schwachstellenmeldung
    │
    └── Nutzer-Update
        ├── Security Advisory veröffentlichen
        ├── Aktualisierungsanweisung
        └── CVE-ID zuweisen (wenn noch keine vorhanden)
```

**Checkliste Behebung:**

- [ ] Root Cause identifiziert und dokumentiert
- [ ] Patch entwickelt und getestet
- [ ] Security Review durchgeführt
- [ ] Hotfix-Release veröffentlicht (signiert)
- [ ] SBOM aktualisiert
- [ ] ENISA-Meldung (72h) gesendet
- [ ] Security Advisory veröffentlicht
- [ ] Nutzer informiert

## Playbook: Phase 4 – Wiederherstellung & Validierung

**Zeitrahmen:** 1 – 7 Tage nach Fix

```
Wiederherstellung
    │
    ├── Patch-Verteilung
    │   ├── Alle Nutzer haben Zugang zum Update
    │   ├── Auto-Update funktioniert (wo implementiert)
    │   └── OTA-Verteilung erfolgreich (Firmware)
    │
    ├── Validierung
    │   ├── Schwachstelle in Produktion geschlossen
    │   ├── Keine Regressionen
    │   ├── Monitoring zeigt Normalbetrieb
    │   └── CVE-Monitor bestätigt Fix
    │
    └── Dokumentation aktualisieren
        ├── CVE-Issue schließen
        ├── Incident-Ticket aktualisieren
        └── Release Notes finalisieren
```

## Playbook: Phase 5 – Nachbereitung

**Zeitrahmen:** 7 – 14 Tage nach Fix

```
Lessons Learned
    │
    ├── ENISA-Abschlussbericht (≤ 14 Tage)
    │   ├── Root-Cause-Analyse
    │   ├── Getroffene Maßnahmen
    │   ├── Betroffene Nutzer/Produkte
    │   └── Verbesserungsmaßnahmen
    │
    ├── Internes Post-Mortem
    │   ├── Was lief gut?
    │   ├── Was kann verbessert werden?
    │   ├── Prozessanpassungen identifiziert?
    │   └── Tooling-Verbesserungen?
    │
    └── Prozessverbesserung
        ├── Playbook aktualisieren
        ├── Monitoring anpassen
        ├── Schulungen ableiten
        └── Dokumentation aktualisieren
```

**Checkliste Nachbereitung:**

- [ ] ENISA-Abschlussbericht gesendet (≤ 14 Tage)
- [ ] Post-Mortem durchgeführt
- [ ] Lessons Learned dokumentiert
- [ ] Prozessverbesserungen umgesetzt
- [ ] Playbook aktualisiert (wenn nötig)
- [ ] Incident-Ticket geschlossen

## Kontaktliste

| Rolle | Erreichbarkeit | Eskalationszeit |
|-------|---------------|-----------------|
| Security Lead | E-Mail + Teams | Sofort (SEV-1/2), 4h (SEV-3) |
| DevOps Lead | E-Mail + Teams | 1h (SEV-1/2), 8h (SEV-3) |
| Management | E-Mail + Telefon | 2h (SEV-1), 4h (SEV-2) |
| ENISA / CSIRT | Single Reporting Platform | Gem. Art. 14 CRA |

::: warning KONTAKTDATEN
Die konkreten Kontaktdaten (E-Mail, Telefon, ENISA-Zugangsdaten) werden in einem separaten, nicht-öffentlichen Dokument gepflegt und sind dem Incident-Response-Team zugänglich.
:::
