# 7.4 Qualitätssicherung (Modul H)

## 7.4.1 Übersicht

Die umfassende Qualitätssicherung nach Modul H ist ein alternatives Konformitätsbewertungsverfahren für **Klasse II** Produkte. Im Gegensatz zu Modul B+C wird hier nicht ein einzelnes Baumuster geprüft, sondern das **gesamte Qualitätsmanagementsystem** des Herstellers.

::: info RECHTSGRUNDLAGE
**Art. 24 Abs. 2 CRA:** Für Produkte der Klasse II kann alternativ zur EU-Baumusterprüfung (Modul B+C) eine umfassende Qualitätssicherung (Modul H) angewendet werden.

**Annex VIII, Modul H** des CRA beschreibt die Anforderungen an das Qualitätsmanagementsystem.
:::

## 7.4.2 Anwendbarkeit

| Kategorie | Modul H anwendbar? |
|-----------|-------------------|
| Standard | Nein – Modul A ausreichend |
| Klasse I | Nein – Modul A* oder B+C |
| **Klasse II** | **Ja** (Alternative zu Modul B+C) |
| Kritisch | Nein – EUCC erforderlich |

## 7.4.3 Modul H vs. Modul B+C

| Kriterium | Modul B+C | Modul H |
|-----------|-----------|---------|
| **Prüfgegenstand** | Einzelnes Baumuster | Gesamtes QMS |
| **Geeignet für** | Wenige Produktvarianten | Viele Produktvarianten |
| **Voraussetzung** | Technische Dokumentation | Zertifiziertes QMS |
| **Vorteil** | Fokussiert, schneller bei Einzelprodukten | Deckt alle Produkte des QMS ab |
| **Nachteil** | Jedes neue Produkt einzeln prüfen | Höherer initialer Aufwand |
| **Empfohlen wenn** | 1-3 Klasse II Produkte | 4+ Klasse II Produkte |

## 7.4.4 Verfahrensablauf

### 1. Qualitätsmanagementsystem aufbauen

Das QMS muss folgende Bereiche abdecken:

#### Designphase (Security by Design)

- Cybersecurity-Anforderungen in der Produktspezifikation
- Threat Modeling und Risikobewertung
- Sichere Architekturprinzipien
- Security Reviews im Designprozess

#### Entwicklungsphase (Secure Development)

- Sichere Entwicklungsrichtlinien (Secure Coding Guidelines)
- Code Reviews mit Sicherheitsfokus
- Statische Code-Analyse (SAST)
- Dependency Management und Schwachstellenscanning

#### Testphase (Security Testing)

- Dynamische Analyse (DAST)
- Penetrationstests
- Fuzzing
- Integrationstests der Sicherheitsfunktionen

#### Produktionsphase (Secure Build & Release)

- Reproduzierbare Builds
- Signierung aller Artefakte ([Cosign](/de/sbom-signing/signing))
- SBOM-Generierung pro Release ([SBOM Lifecycle](/de/sbom-signing/))
- Integritätsprüfung der Lieferkette

#### Betriebsphase (Post-Market Surveillance)

- Schwachstellenmonitoring ([CVE-Monitoring](/de/vulnerability-management/cve-monitoring))
- Patch Management ([Referenz](/de/vulnerability-management/patch-management))
- Incident Response ([Playbook](/de/incident-response/playbook))
- ENISA-Meldeprozesse ([Referenz](/de/incident-response/enisa-reporting))

### 2. Notifizierte Stelle für QMS-Bewertung

- Stelle über [NANDO-Datenbank](https://ec.europa.eu/growth/tools-databases/nando/) identifizieren
- Stelle muss für CRA-QMS-Bewertungen notifiziert sein
- Vertrag über Prüfumfang und Überwachungsintervalle

### 3. QMS-Audit

Die notifizierte Stelle prüft:

1. **Dokumentation des QMS** – Prozessbeschreibungen, Richtlinien, Verfahrensanweisungen
2. **Implementierung** – Ob die dokumentierten Prozesse tatsächlich gelebt werden
3. **Wirksamkeit** – Ob die Prozesse das geforderte Cybersicherheitsniveau erreichen
4. **Annex I Abdeckung** – Ob alle wesentlichen Anforderungen durch das QMS abgedeckt sind

### 4. QMS-Zertifikat

Nach erfolgreichem Audit stellt die notifizierte Stelle ein **QMS-Zertifikat** aus. Alle unter diesem QMS hergestellten Produkte gelten als konformitätsbewertet.

### 5. Überwachung

- **Periodische Audits** durch die notifizierte Stelle (i.d.R. jährlich)
- **Unangekündigte Prüfungen** sind möglich
- **Re-Zertifizierung** bei wesentlichen Änderungen am QMS

## 7.4.5 Integration mit bestehenden Standards

Modul H lässt sich gut mit bestehenden Managementsystemen verbinden:

| Standard | Synergie mit Modul H |
|----------|---------------------|
| **ISO 27001** (ISMS) | Hohe Überlappung bei Sicherheitskontrollen |
| **ISO 9001** (QMS) | Basis-QMS-Struktur wiederverwendbar |
| **IEC 62443** (Industrial Security) | Relevant für industrielle IoT-Produkte |
| **ISO/SAE 21434** (Automotive) | Relevant für Automotive-Software |

::: tip SYNERGIEN NUTZEN
Falls bereits ein ISO 27001 oder ISO 9001 zertifiziertes Managementsystem besteht, kann dieses als Grundlage für das CRA-QMS dienen. Die Cybersecurity-spezifischen Anforderungen aus Annex I müssen ergänzt werden.
:::

## 7.4.6 Zeitplanung

| Phase | Geschätzter Zeitaufwand |
|-------|------------------------|
| QMS-Aufbau / -Erweiterung | 6-12 Monate |
| Interne Audits | 2-4 Wochen |
| Auswahl notifizierte Stelle | 2-4 Wochen |
| Externes Audit | 4-8 Wochen |
| Nachbesserungen | 2-8 Wochen |
| Zertifikat | 1-2 Wochen |
| **Gesamt** | **ca. 9-15 Monate** |

## 7.4.7 Kosten

| Kostenfaktor | Geschätzter Bereich |
|-------------|---------------------|
| QMS-Aufbau (intern/extern) | 20.000 - 80.000 EUR |
| Initiales Audit | 15.000 - 40.000 EUR |
| Jährliche Überwachungsaudits | 5.000 - 15.000 EUR |
| Re-Zertifizierung (alle 3 Jahre) | 10.000 - 30.000 EUR |

*Hinweis: Die Werte dienen als Orientierung. Bei bestehendem ISO 27001/9001 reduziert sich der Aufwand erheblich.*

## 7.4.8 Checkliste: Modul H

- [ ] Produktklassifizierung abgeschlossen (Klasse II bestätigt)
- [ ] Entscheidung Modul H vs. Modul B+C getroffen und begründet
- [ ] QMS aufgebaut oder bestehendes QMS erweitert
- [ ] Alle Phasen abgedeckt (Design, Entwicklung, Test, Produktion, Betrieb)
- [ ] Annex I Anforderungen im QMS verankert
- [ ] Interne Audits durchgeführt
- [ ] Notifizierte Stelle identifiziert und kontaktiert (NANDO)
- [ ] Vertrag mit notifizierter Stelle geschlossen
- [ ] Externes Audit bestanden / Nachbesserungen umgesetzt
- [ ] QMS-Zertifikat erhalten
- [ ] Überwachungsplan vereinbart
- [ ] EU-Konformitätserklärung erstellt ([Template](/de/templates/eu-declaration-of-conformity))
- [ ] CE-Kennzeichnung mit Kennnummer der notifizierten Stelle
