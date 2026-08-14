# 7.1 Produktklassifizierung

## 7.1.1 Übersicht

Jedes Produkt mit digitalen Elementen muss gemäß dem Cyber Resilience Act (CRA) in eine Risikokategorie eingestuft werden. Die Einstufung bestimmt das erforderliche Konformitätsbewertungsverfahren. Der CRA unterscheidet vier Kategorien: **Standard**, **Klasse I** (Wichtig), **Klasse II** (Wichtig) und **Kritisch**.

::: info RECHTSGRUNDLAGE
**Art. 7 Abs. 1 CRA:** Produkte mit digitalen Elementen, die die **Kernfunktionalität** einer in **Anhang III** aufgeführten Produktkategorie aufweisen, sind *wichtige Produkte mit digitalen Elementen*, unterteilt in Klasse I und Klasse II.

**Art. 8 Abs. 1 CRA:** Produkte mit digitalen Elementen, die die Kernfunktionalität einer in **Anhang IV** aufgeführten Produktkategorie aufweisen, sind *kritische Produkte mit digitalen Elementen*.

**Durchführungsverordnung (EU) 2025/2392** enthält die technischen Beschreibungen der Kategorien wichtiger und kritischer Produkte.

**Art. 64 Abs. 3 CRA:** Verstöße gegen die Konformitätsbewertungspflichten des Art. 32 können Geldbußen auslösen.
:::

::: tip DER BEGRIFF „STANDARD"
*Standard* (in den Leitlinien: *default*) ist kein im CRA definierter Begriff. Er wird hier für Produkte verwendet, die **nicht** die Kernfunktionalität einer Kategorie aus Anhang III oder IV aufweisen und folglich dem Konformitätsbewertungsregime des Art. 32 Abs. 1 unterliegen.
:::

## 7.1.2 Kernfunktionalität — der entscheidende Begriff

Die Klassifizierung richtet sich **nicht** danach, was ein Produkt *kann*. Sie richtet sich nach seiner **Kernfunktionalität**. Der CRA definiert den Begriff nicht; die Leitlinien der Kommission tun es.

::: info DIE DEFINITION
Die Kernfunktionalität eines Produkts mit digitalen Elementen bezeichnet dessen **wesentliche Merkmale und technische Fähigkeiten, ohne die es seine Zweckbestimmung nicht erfüllen könnte**.

Sie wird im Licht des konkreten Kontexts und der Verwendungsbedingungen des Produkts bewertet, unter Berücksichtigung unter anderem der Angaben des Herstellers in der **Gebrauchsanleitung**, in **Werbe- oder Verkaufsmaterialien und Aussagen** sowie in der **technischen Dokumentation**.
:::

### Regel 1 — Nebenfunktionen ändern die Einstufung nicht

Produkte beschränken sich selten auf ihre Kernfunktionalität; nahezu alle erbringen zusätzliche Funktionen. Dass ein Produkt **andere oder zusätzliche** Funktionen als die für eine wichtige oder kritische Kategorie beschriebenen erbringt, hindert es **nicht** daran, eine solche Kernfunktionalität aufzuweisen.

Umgekehrt gilt — in Art. 7 Abs. 1 ausdrücklich für wichtige Produkte geregelt, mit derselben Logik für kritische:

::: warning BLOSSE INTEGRATION GENÜGT NICHT
Die **bloße Integration** eines wichtigen oder kritischen Produkts mit digitalen Elementen macht das integrierende Produkt **nicht** selbst zu einem wichtigen oder kritischen Produkt.

> **Beispiel:** Ein Smartphone integriert ein Betriebssystem mit den in Anhang I Nr. 11 der Durchführungsverordnung (EU) 2025/2392 beschriebenen Funktionalitäten. Das Betriebssystem verwaltet Hardware-Ressourcen und führt Anwendungen aus — das Smartphone **als Ganzes** hat jedoch eine andere Kernfunktionalität: Nutzern Kommunikation sowie den Zugang zu Informationen und Diensten zu ermöglichen. Es weist damit nicht die Kernfunktionalität eines Betriebssystems auf.
:::

### Regel 2 — Deutliches Überschreiten oder Unterschreiten

Ein Produkt kann einer wichtigen oder kritischen Kategorie ähneln oder derselben allgemeinen Produktfamilie angehören, während seine Kernfunktionalität die der Kategorie **deutlich überschreitet** oder **deutlich unterschreitet**.

| Fall | Beispiel | Bewertung |
|------|----------|-----------|
| **Überschreitet** | **SOAR**-Software kann Daten aus mehreren Quellen sammeln, analysieren und korrelieren und als handlungsrelevante Sicherheitsinformationen darstellen — die Funktionen eines SIEM. Ihre Kernfunktionalität überschreitet ein SIEM jedoch deutlich, mit Incident Response als Kernbestandteil ihrer technischen Fähigkeiten | Weist in der Regel **nicht** die Kernfunktionalität eines SIEM-Systems auf |
| **Unterschreitet** | **Werkzeuge zur Protokollsammlung und -visualisierung** nehmen Logdaten auf und zeigen einfache Dashboards mit Systemereignissen. Sie unterstützen die Sicherheitsüberwachung, führen aber keine Datenkorrelation durch und liefern keine handlungsrelevanten Sicherheitserkenntnisse | Weist in der Regel **nicht** die Kernfunktionalität eines SIEM-Systems auf |
| **Keines von beiden** | Ein Produkt, dessen zusätzliche Funktionalitäten eine Kernfunktionalität, die selbst einer wichtigen oder kritischen Kategorie entspricht, lediglich **ergänzen oder verbessern** | **Behält** diese Kernfunktionalität und wird entsprechend eingestuft |

Die Bewertung erfolgt anhand der wesentlichen Merkmale und technischen Fähigkeiten, **objektiv** im Licht der Zweckbestimmung betrachtet — **nicht** anhand der Beschreibung oder Vermarktung, soweit diese die tatsächlichen technischen Eigenschaften nicht widerspiegelt.

::: danger FALSCHDARSTELLUNG IST KEINE OPTION
Ein Hersteller **darf** die Kernfunktionalität seines Produkts **nicht** so darstellen, dass er dem für wichtige oder kritische Produkte geltenden Konformitätsbewertungsregime entgeht — etwa indem er die Rolle bestimmter Funktionalitäten überbetont oder herunterspielt, damit das Produkt eine Kernfunktionalität scheinbar deutlich überschreitet oder unterschreitet.

**Klare Widersprüche zwischen Werbematerialien, Gebrauchsanleitung und technischer Dokumentation** sind genau das, worauf Marktüberwachungsbehörden achten werden.
:::

### Regel 3 — Genau eine Kernfunktionalität

::: warning EIN PRODUKT, EINE KERNFUNKTIONALITÄT
Ein Produkt mit digitalen Elementen darf für die Bestimmung des anwendbaren Konformitätsbewertungsregimes **nicht mehr als eine Kernfunktionalität** haben.

Nach Anhang VII muss die technische Dokumentation die Zweckbestimmung des Produkts und das angewandte Konformitätsbewertungsverfahren beschreiben. Die **Kernfunktionalität ist daher eindeutig zu benennen** — nur so lässt sich das zutreffende Regime bestimmen, und nur so können Marktüberwachungsbehörden die korrekte Anwendung der Verordnung prüfen.
:::

### Regel 4 — Separat erhältliche Module sind eigene Produkte

Manche Produkte werden als ein einziges Produkt in Verkehr gebracht, bestehen aber aus **eigenständigen Modulen mit getrennten Funktionalitäten**.

| Sachverhalt | Ebene der Einstufung |
|-------------|----------------------|
| Der Hersteller stellt die Module **auch separat bereit** — getrennter Kauf, getrennte Lizenzierung oder getrenntes Abonnement | Jedes Modul ist ein **eigenständiges Produkt** und wird nach **seiner eigenen** Kernfunktionalität eingestuft |
| Module werden **ausschließlich als Bestandteile** eines integrierten Produkts geliefert und nicht separat bereitgestellt | Die Kernfunktionalität wird auf Ebene des **integrierten Produkts** bestimmt |

> **Beispiel:** Ein Hersteller bringt eine einheitliche Security-Suite aus SIEM, Intrusion-Detection-System und Analysemodul in Verkehr und bietet jedes Modul zusätzlich als separates Abonnement an. Jedes Modul ist ein eigenes Produkt: Das **SIEM-Modul** fällt unter das Regime für wichtige Produkte der **Klasse I**, das **Intrusion-Detection-System** unter **Klasse II** (*Firewalls, Systeme zur Erkennung und Verhinderung von Eindringversuchen*), das **Analysemodul** unter das **Standardregime**, da seine Kernfunktionalität keiner wichtigen oder kritischen Kategorie entspricht.

### Regel 5 — Erleichterung für FOSS (Art. 32 Abs. 5)

Wichtige Produkte der Klasse I oder II, die **als FOSS gelten und in Verkehr gebracht werden**, dürfen nach Art. 32 Abs. 5 die Konformitätsbewertungsverfahren der **Standardkategorie** anwenden → [1.7 Freie & quelloffene Software und der Steward](/de/overview/open-source-steward).

## 7.1.3 Entscheidungsbaum zur Klassifizierung

Der folgende Entscheidungsbaum zeigt den systematischen Ablauf der Produktklassifizierung:

```
SCHRITT 0 — Die EINE Kernfunktionalität des Produkts bestimmen (→ 7.1.2)
            Wesentliche Merkmale und technische Fähigkeiten, ohne die das
            Produkt seine Zweckbestimmung nicht erfüllen könnte. Neben-
            und integrierte Funktionen zählen nicht.
            │
            ▼
Entspricht diese Kernfunktionalität einer Kategorie in Annex IV?
├── Ja → KRITISCH (Modul B+C oder H; EUCC erst nach delegiertem Rechtsakt nach Art. 8 Abs. 1)
└── Nein
    └── Entspricht sie einer Kategorie in Annex III?
        ├── Ja → Welche Klasse?
        │   ├── Klasse II → KLASSE II (Modul B+C oder H)
        │   │               FOSS in Verkehr gebracht → Standardregime (Art. 32 Abs. 5)
        │   └── Klasse I  → KLASSE I (Modul A* oder B+C)
        │                   FOSS in Verkehr gebracht → Standardregime (Art. 32 Abs. 5)
        └── Nein → STANDARD (Modul A)
```

*\* Modul A nur bei vollständiger Anwendung harmonisierter Normen*

## 7.1.4 Produktkategorien

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

**Konformitätsbewertung (derzeit):** [EU-Baumusterprüfung (Modul B+C)](/de/conformity/module-bc) oder [Umfassende Qualitätssicherung (Modul H)](/de/conformity/module-h) gemäß Art. 32 Abs. 3 CRA.

**Konformitätsbewertung (bedingt, künftig):** [Europäisches Cybersicherheitszertifikat (EUCC)](/de/conformity/eucc) auf Vertrauenswürdigkeitsstufe „substanziell" oder höher — verpflichtend erst, sobald die EU-Kommission einen delegierten Rechtsakt nach Art. 8 Abs. 1 CRA erlässt, der das Produkt benennt.

::: info EUCC NICHT AUTOMATISCH VERPFLICHTEND
Für Annex-IV-Produkte ist das EUCC **nicht automatisch** vorgeschrieben. Nach Art. 8 Abs. 1 CRA kann die Kommission die EUCC-Pflicht per delegiertem Rechtsakt auslösen; **Stand Juni 2026 ist dies nicht geschehen**. Bis dahin gilt die reguläre Konformitätsbewertung (Modul B+C oder H) nach Art. 32 Abs. 3 CRA.
:::

**Beispiele aus Annex IV:**

- Hardware-Sicherheitsmodule (HSM)
- Smartcards und ähnliche Geräte (inkl. Secure Elements)
- Smartcard-Leser
- Sensoren und Aktoren für Roboter und Maschinensteuerungen
- Smart Meter Gateways

## 7.1.5 Konformitätsbewertung je Kategorie

| Kategorie | Modul A (Selbst) | Modul B+C (Baumuster) | Modul H (Qualität) | EUCC |
|-----------|:-:|:-:|:-:|:-:|
| Standard | ✅ | - | - | - |
| Klasse I | ✅* | ✅ | - | - |
| Klasse II | - | ✅ | ✅ | - |
| Kritisch | - | ✅ | ✅ | ⚠️† |

*\* Nur bei Anwendung harmonisierter Normen oder bei Konformität mit EU-Cybersicherheitszertifizierung*

*† EUCC ist für kritische Produkte **derzeit nicht verpflichtend**. Es wird erst verbindlich, sobald die Kommission einen delegierten Rechtsakt nach Art. 8 Abs. 1 CRA erlässt. Bis dahin gilt Modul B+C oder H nach Art. 32 Abs. 3 CRA (Stand Juni 2026).*

::: tip AI-Act-Synergie
Produkte, die in **Annex III des AI Act** als Hochrisiko-KI-Systeme gelistet sind, können auch in CRA Annex III erscheinen (z.B. IACS, Sicherheitskomponenten). Wenn ein Produkt unter beide Verordnungen fällt, gilt die **strengere Konformitätsbewertung**. Stimmen Sie Klassifizierungsentscheidungen zwischen CRA- und AI-Act-Teams ab.
:::

::: tip Scope-Checker
Nutzen Sie den interaktiven [Scope-Checker](/de/overview/scope-checker), um den vollständigen Klassifizierungsprozess Schritt für Schritt durchzugehen, einschließlich Aufwandsschätzungen pro Produktklasse.
:::

## 7.1.6 Relevante Produkttypen für BAUER GROUP

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

## 7.1.7 Klassifizierungsprozess

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

## 7.1.8 Dokumentation der Klassifizierung

Für jedes Produkt wird die Klassifizierung in der [Produktbeschreibung](/de/technical-documentation/product-description) dokumentiert:

1. **Prüfung gegen Annex III und IV** -- Systematisches Abgleichen aller Kategorien
2. **Begründung** -- Warum diese Klassifizierung (mit Verweis auf Annex)
3. **Konformitätsbewertungsverfahren** -- Welches Modul angewendet wird
4. **Datum** -- Wann die Klassifizierung durchgeführt wurde
5. **Verantwortlicher** -- Wer die Klassifizierung durchgeführt hat

> Quelle und Rechtsstatus der Auslegungen in Abschnitt 7.1.2: [Leitlinien der EU-Kommission zum CRA](/de/clarifications/commission-guidance).
