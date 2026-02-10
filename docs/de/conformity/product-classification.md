# 7.1 Produktklassifizierung

## 7.1.1 Übersicht

Jedes Produkt mit digitalen Elementen muss gemäß dem Cyber Resilience Act (CRA) in eine Risikokategorie eingestuft werden. Die Einstufung bestimmt das erforderliche Konformitätsbewertungsverfahren. Der CRA unterscheidet vier Kategorien: **Standard**, **Klasse I** (Wichtig), **Klasse II** (Wichtig) und **Kritisch**.

## 7.1.2 Entscheidungsbaum zur Klassifizierung

Der folgende Entscheidungsbaum zeigt den systematischen Ablauf der Produktklassifizierung:

```
Ist das Produkt in Annex IV aufgeführt?
├── Ja → KRITISCH (EUCC erforderlich)
└── Nein
    └── Ist das Produkt in Annex III aufgeführt?
        ├── Ja → Welche Klasse?
        │   ├── Klasse II → KLASSE II (Modul B+C oder H)
        │   └── Klasse I → KLASSE I (Modul A* oder B+C)
        └── Nein → STANDARD (Modul A)
```

*\* Modul A nur bei vollständiger Anwendung harmonisierter Normen*

## 7.1.3 Produktkategorien

### Kategorie: Standard (Default)

**Konformitätsbewertung:** Interne Kontrolle (Modul A) – Selbstbewertung

Die Mehrheit der Produkte fällt in diese Kategorie. Der Hersteller führt die Konformitätsbewertung selbst durch.

**Typische Produkte:**

- Standard-Webanwendungen
- Interne Tools und Utilities
- Nicht-kritische Container-Images
- Einfache IoT-Sensoren

### Klasse I (Annex III)

**Konformitätsbewertung:** [Interne Kontrolle (Modul A)](/de/conformity/self-assessment) mit Anwendung harmonisierter Normen ODER [EU-Baumusterprüfung (Modul B+C)](/de/conformity/module-bc)

**Beispiele aus Annex III:**

- Identity Management Systeme und Software für privilegierten Zugang
- Browser (eigenständig)
- Passwort-Manager
- Software zur Suche, Entfernung und Quarantäne von Schadsoftware
- VPN-Produkte
- Netzwerk-Management-Systeme
- SIEM-Systeme
- Boot-Manager
- Firewalls, IDS/IPS (nicht-industriell)
- Router, Modems (für Internetzugang)
- Mikrocontroller mit sicherheitsrelevanten Funktionen
- Betriebssysteme (nicht für Server/Desktop-Klasse II)

### Klasse II (Annex III)

**Konformitätsbewertung:** [EU-Baumusterprüfung (Modul B+C)](/de/conformity/module-bc) ODER [Umfassende Qualitätssicherung (Modul H)](/de/conformity/module-h)

**Beispiele aus Annex III:**

- Hypervisor und Container-Laufzeitumgebungen
- Firewalls und IDS/IPS für industrielle Nutzung
- Tamper-Resistant Mikrocontroller/-prozessoren
- Betriebssysteme für Server, Desktop, Mobile
- Public-Key-Infrastruktur und Zertifikatsaussteller
- Industrielle Automatisierungs- und Steuerungssysteme (IACS)
- Industrielle IoT-Geräte (nicht unter andere sektorale Regulierung)

### Kategorie: Kritisch (Annex IV)

**Konformitätsbewertung:** [Europäisches Cybersicherheitszertifikat (EUCC)](/de/conformity/eucc) auf Vertrauenswürdigkeitsstufe „substanziell" oder höher

**Beispiele aus Annex IV:**

- Hardware-Sicherheitsmodule (HSM)
- Smartcards und ähnliche Geräte (inkl. Secure Elements)
- Smartcard-Leser
- Sensoren und Aktoren für Roboter und Maschinensteuerungen
- Smart Meter Gateways

## 7.1.4 Konformitätsbewertung je Kategorie

| Kategorie | Modul A (Selbst) | Modul B+C (Baumuster) | Modul H (Qualität) | EUCC |
|-----------|:-:|:-:|:-:|:-:|
| Standard | ✅ | - | - | - |
| Klasse I | ✅* | ✅ | - | - |
| Klasse II | - | ✅ | ✅ | - |
| Kritisch | - | - | - | ✅ |

*\* Nur bei Anwendung harmonisierter Normen oder bei Konformität mit EU-Cybersicherheitszertifizierung*

## 7.1.5 Relevante Produkttypen für BAUER GROUP

### Prüfung gegen Annex III (Wichtige Produkte)

| Annex III Kategorie | Betrifft BAUER GROUP? | Begründung |
|--------------------|-----------------------|------------|
| Identity Management Systeme | Prüfen | Falls IAM-Lösungen angeboten werden |
| Passwort-Manager | Prüfen | Falls Credential-Management angeboten wird |
| VPN-Produkte | Prüfen | Falls VPN-Lösungen angeboten werden |
| Netzwerk-Management-Systeme | Prüfen | Falls Netzwerk-Tools angeboten werden |
| Firewalls, IDS/IPS | Prüfen | Falls Sicherheitsprodukte angeboten werden |
| Router, Modems | Prüfen | Falls Netzwerkhardware mit Firmware |
| Mikrocontroller (sicherheitsrelevant) | **Wahrscheinlich ja** | ESP32/STM32 Firmware mit sicherheitsrelevanten Funktionen |
| Betriebssysteme | Prüfen | Falls OS-nahe Produkte |
| Container Runtime | Nein (in der Regel) | Wir nutzen Container, bieten aber keine Runtime an |
| Hypervisor | Nein (in der Regel) | Wir nutzen Hypervisor, bieten aber keinen an |
| Industrielle IoT-Geräte | **Wahrscheinlich ja** | Wenn IoT-Geräte für industrielle Nutzung |

### Prüfung gegen Annex IV (Kritische Produkte)

| Annex IV Kategorie | Betrifft BAUER GROUP? | Begründung |
|-------------------|-----------------------|------------|
| Hardware-Sicherheitsmodule (HSM) | Nein (in der Regel) | Wir nutzen HSM, stellen aber keine her |
| Smartcards / Secure Elements | Nein (in der Regel) | |
| Smart Meter Gateways | Prüfen | Falls Energieprodukte |

### Typische Klassifizierung für BAUER GROUP Produkte

| Produkttyp | Erwartete Klasse | Bewertungsverfahren |
|-----------|-----------------|---------------------|
| Standard-Webanwendung | Standard | Modul A |
| REST API | Standard | Modul A |
| Container-Image (Microservice) | Standard | Modul A |
| NPM/NuGet Library | Standard | Modul A |
| ESP32 IoT-Sensor (nicht sicherheitskritisch) | Standard | Modul A |
| ESP32/STM32 Industriesteuerung | Klasse I | Modul A* oder B+C |
| Firmware mit Authentifizierungsfunktion | Klasse I | Modul A* oder B+C |
| Netzwerk-Router mit Firmware | Klasse I | Modul A* oder B+C |

## 7.1.6 Klassifizierungsprozess

Für jedes Produkt ist folgender Prozess durchzuführen:

### 1. Funktionsprüfung

Prüfen Sie, ob das Produkt eine der in Annex III oder IV genannten Funktionen erfüllt. Gleichen Sie systematisch alle Kategorien ab.

### 2. Verwendungszweck

Berücksichtigen Sie den bestimmungsgemäßen Verwendungszweck:

- Wird das Produkt in kritischer Infrastruktur eingesetzt?
- Verarbeitet es sensible/personenbezogene Daten?
- Hat es Netzwerkfunktionalität?
- Kann eine Kompromittierung physische Schäden verursachen?

### 3. Einstufung dokumentieren

Verwenden Sie das Template [Risikobewertung](/de/templates/risk-assessment) zur Dokumentation der Klassifizierungsentscheidung.

::: tip EMPFEHLUNG
Im Zweifelsfall die höhere Kategorie wählen. Eine konservative Einstufung ist regulatorisch sicherer als eine zu niedrige.
:::

## 7.1.7 Dokumentation der Klassifizierung

Für jedes Produkt wird die Klassifizierung in der [Produktbeschreibung](/de/technical-documentation/product-description) dokumentiert:

1. **Prüfung gegen Annex III und IV** -- Systematisches Abgleichen aller Kategorien
2. **Begründung** -- Warum diese Klassifizierung (mit Verweis auf Annex)
3. **Konformitätsbewertungsverfahren** -- Welches Modul angewendet wird
4. **Datum** -- Wann die Klassifizierung durchgeführt wurde
5. **Verantwortlicher** -- Wer die Klassifizierung durchgeführt hat
