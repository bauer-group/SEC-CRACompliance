# Produktklassifizierungs-Protokoll

::: warning RECHTLICHE DOKUMENTATION
Dieses Protokoll dokumentiert die CRA-Produktklassifizierungsentscheidung. Es muss vor dem Inverkehrbringen eines Produkts mit digitalen Elementen auf dem EU-Markt ausgefüllt werden und ist mindestens 10 Jahre aufzubewahren (Art. 13(12) CRA).
:::

## 1. Produktidentifikation

| Feld | Wert |
|------|------|
| **Produktname** | |
| **Produktversion** | |
| **Produktkennung** | |
| **Bestimmungsgemäßer Zweck** | |
| **Product Owner** | |
| **Security Lead** | |
| **Bewertungsdatum** | |

## 2. Anwendbarkeits-Bewertung

| Frage | Antwort | Referenz |
|-------|---------|----------|
| Enthält das Produkt digitale Elemente (Software, Firmware, Hardware mit Datenverbindung)? | [ ] Ja / [ ] Nein | Art. 3(1) |
| Wird das Produkt auf dem EU-Markt bereitgestellt? | [ ] Ja / [ ] Nein | Art. 2(1) |
| Greift eine sektorale Ausnahme (Medizin, Automotive, Luftfahrt, Marine, Militär)? | [ ] Ja / [ ] Nein | Art. 2(2) |
| Handelt es sich um nicht-kommerzielle Open-Source-Software? | [ ] Ja / [ ] Nein | Art. 18–19 |

**Ergebnis Anwendbarkeit:** [ ] CRA anwendbar / [ ] CRA nicht anwendbar

Falls nicht anwendbar, Begründung: ___

## 3. Produktklassifizierung

### 3.1 Annex-IV-Prüfung (Kritische Produkte)

| Annex-IV-Kategorie | Zutreffend? |
|--------------------|-------------|
| Hardware-Sicherheitsmodule (HSM) | [ ] Ja / [ ] Nein |
| Chipkarten und ähnliche Geräte (inkl. sichere Elemente) | [ ] Ja / [ ] Nein |
| Chipkartenleser | [ ] Ja / [ ] Nein |
| Sensor- und Aktuator-Komponenten für Roboter und Robotersteuerungen | [ ] Ja / [ ] Nein |
| Intelligente Messsysteme (gemäß Richtlinie 2019/944) | [ ] Ja / [ ] Nein |

**Annex-IV-Ergebnis:** [ ] Gelistet (→ Kritisch) / [ ] Nicht gelistet (→ weiter)

### 3.2 Annex-III-Prüfung (Wichtige Produkte)

| Annex-III-Kategorie | Klasse | Zutreffend? |
|---------------------|--------|-------------|
| Identitätsmanagement-Systeme und Software für privilegierten Zugang | I | [ ] Ja / [ ] Nein |
| Eigenständige Browser | I | [ ] Ja / [ ] Nein |
| Passwort-Manager | I | [ ] Ja / [ ] Nein |
| Software zur Malware-Erkennung/-Entfernung/-Quarantäne | I | [ ] Ja / [ ] Nein |
| VPN-Produkte | I | [ ] Ja / [ ] Nein |
| Netzwerkmanagementsysteme | I | [ ] Ja / [ ] Nein |
| SIEM-Systeme | I | [ ] Ja / [ ] Nein |
| Boot-Manager | I | [ ] Ja / [ ] Nein |
| Firewalls, IDS/IPS (nicht-industriell) | I | [ ] Ja / [ ] Nein |
| Router, Modems für Internetzugang | I | [ ] Ja / [ ] Nein |
| Mikrocontroller mit Sicherheitsfunktionen | I | [ ] Ja / [ ] Nein |
| Betriebssysteme (nicht Server/Desktop) | I | [ ] Ja / [ ] Nein |
| Hypervisoren und Container-Laufzeitumgebungen | II | [ ] Ja / [ ] Nein |
| Firewalls, IDS/IPS (industriell) | II | [ ] Ja / [ ] Nein |
| Manipulationsresistente Mikrocontroller/Mikroprozessoren | II | [ ] Ja / [ ] Nein |
| BS für Server, Desktop, Mobil | II | [ ] Ja / [ ] Nein |
| PKI und Zertifikatsaussteller | II | [ ] Ja / [ ] Nein |
| Industrielle Automatisierungs- und Steuerungssysteme (IACS) | II | [ ] Ja / [ ] Nein |
| Industrielles IoT (nicht unter sektorale Regulierung fallend) | II | [ ] Ja / [ ] Nein |

**Annex-III-Ergebnis:** [ ] Klasse II / [ ] Klasse I / [ ] Nicht gelistet (→ Standard)

### 3.3 Klassifizierungsergebnis

| Feld | Wert |
|------|------|
| **Produktklasse** | [ ] Standard / [ ] Klasse I / [ ] Klasse II / [ ] Kritisch |
| **Konformitätsweg** | [ ] Modul A / [ ] Modul A + hEN / [ ] Modul B+C / [ ] Modul H / [ ] EUCC |
| **Begründung** | |

## 4. Konformitätsbewertungsweg

| Kriterium | Entscheidung |
|-----------|-------------|
| Werden harmonisierte Normen (hEN) vollständig angewendet? | [ ] Ja / [ ] Nein / [ ] N/A |
| Ist eine Drittbewertung erforderlich? | [ ] Ja / [ ] Nein |
| Gewähltes Bewertungsmodul | Modul ___ |
| Benannte Stelle (falls zutreffend) | |

## 5. Freigabe

| Rolle | Name | Unterschrift | Datum |
|-------|------|-------------|-------|
| Product Owner | | | |
| Security Lead | | | |
| Quality Manager | | | |

---

::: tip
Verwenden Sie den [Scope-Checker](/de/overview/scope-checker) für eine interaktive Anleitung durch den Klassifizierungsprozess.
:::
