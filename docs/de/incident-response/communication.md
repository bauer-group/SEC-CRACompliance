# 4.4 Kommunikationsplan

## 4.4.1 Übersicht

Der Kommunikationsplan definiert die internen und externen Kommunikationswege bei Sicherheitsvorfällen. Ziel ist eine schnelle, konsistente und rechtskonforme Informationsweitergabe.

## 4.4.2 Kommunikationsmatrix

### Interne Kommunikation

| Schweregrad | Empfänger | Kanal | Zeitrahmen |
|-------------|-----------|-------|------------|
| **SEV-1** | Security Lead, DevOps Lead, Management, Dev Team | Teams (Incident Channel) + Telefon | Sofort |
| **SEV-2** | Security Lead, DevOps Lead, betr. Dev Team | Teams (Incident Channel) | ≤ 1 Stunde |
| **SEV-3** | Security Lead, betr. Dev Team | Teams + GitHub Issue | ≤ 4 Stunden |
| **SEV-4** | Betr. Dev Team | GitHub Issue | ≤ 24 Stunden |

### Externe Kommunikation

| Empfänger | Kanal | Zeitrahmen | Verantwortlich |
|-----------|-------|------------|----------------|
| **ENISA / CSIRT** | Single Reporting Platform | ≤ 24h (Frühwarnung) | Security Lead |
| **Betroffene Nutzer** | GitHub Advisory + E-Mail | Unverzüglich (nach Fix) | Security Lead + Product Owner |
| **Öffentlichkeit** | GitHub Security Advisory | Nach Patch-Verfügbarkeit | Security Lead |
| **Sicherheitsforscher** (bei CVD) | GitHub Advisory / E-Mail | Gem. Disclosure Policy | Security Lead |

## 4.4.3 Kommunikationsvorlagen

### Interne Erstmeldung (Teams)

```
🚨 SECURITY INCIDENT – SEV-[1/2/3/4]

Produkt: [Produktname] v[Version]
Schwachstelle: [CVE-ID oder Kurzbeschreibung]
Schweregrad: [CRITICAL/HIGH/MEDIUM/LOW]
Aktiv ausgenutzt: [Ja/Nein/Unbekannt]
ENISA-meldepflichtig: [Ja/Nein]

Status: [Triage/Eindämmung/Behebung/Abgeschlossen]
Nächste Schritte: [Beschreibung]
Verantwortlich: [Name]

Incident-Ticket: [Link zum GitHub Issue]
```

### Externe Nutzerbenachrichtigung

```
Sicherheitshinweis – [Produktname]

Sehr geehrte Nutzerin, sehr geehrter Nutzer,

wir haben eine Sicherheitslücke in [Produktname] identifiziert
und behoben.

Betroffene Versionen: [Versionen]
Behobene Version: [Version]
Schweregrad: [CRITICAL/HIGH]
CVE: [CVE-ID]

Empfohlene Maßnahme:
Bitte aktualisieren Sie auf Version [X.Y.Z].

Details: [Link zum Security Advisory]

Bei Fragen wenden Sie sich an: disclosure@bauer-group.com
```

## 4.4.4 Eskalationspfade

```
SEV-1 (Kritisch):
Developer → Security Lead → Management → ENISA (24h)
                                       → Nutzer (unverzüglich)

SEV-2 (Hoch):
Developer → Security Lead → Management (Info)
                          → Nutzer (nach Fix)

SEV-3 (Mittel):
Developer → Security Lead → Patch im nächsten Release

SEV-4 (Niedrig):
Developer → Backlog → Regulärer Release
```

## 4.4.5 Teams-Integration

Die bestehende Teams-Notification (`teams-notifications.yml`) wird für Sicherheitsvorfälle erweitert:

- **Incident Channel:** Dedizierter Teams-Kanal für Security Incidents
- **Automatische Alerts:** Bei CRITICAL/HIGH CVE-Findings aus dem CVE-Monitor
- **Status-Updates:** Automatische Updates bei Statusänderung des Incident-Tickets

## 4.4.6 Dokumentationspflicht

Alle Kommunikation im Rahmen eines Sicherheitsvorfalls wird dokumentiert:

- Zeitstempel jeder Kommunikation
- Empfänger und Kanal
- Inhalt (Zusammenfassung)
- Bestätigung des Empfangs

Diese Dokumentation ist Teil des Incident-Tickets und dient als Nachweis gegenüber Aufsichtsbehörden.
