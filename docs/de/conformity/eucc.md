# 7.5 EUCC-Zertifizierung

## 7.5.1 Übersicht

Das Europäische Cybersicherheitszertifikat (EUCC) ist ein europäisches, auf Common Criteria (ISO/IEC 15408) basierendes Zertifizierungsschema. Es basiert auf dem **EU Cybersecurity Act** (Verordnung (EU) 2019/881) und kennt die Vertrauenswürdigkeitsstufen „substanziell" und „hoch".

::: warning EUCC IST DERZEIT NICHT VERPFLICHTEND
Eine EUCC-Zertifizierung ist für kritische Produkte (Annex IV) **nicht automatisch verpflichtend**. Nach **Art. 8 Abs. 1 CRA** ist die EU-Kommission lediglich *ermächtigt*, per **delegiertem Rechtsakt** festzulegen, welche kritischen Produkte ein europäisches Cybersicherheitszertifikat auf mindestens der Stufe „substanziell" erlangen müssen.

**Stand Juni 2026 wurde kein solcher delegierter Rechtsakt erlassen.** Solange dies nicht geschieht, durchlaufen kritische Produkte die regulären Konformitätsbewertungsverfahren gemäß **Art. 32 Abs. 3 CRA** — d.h. EU-Baumusterprüfung (Modul B) + Konformität mit der Bauart (Modul C) oder umfassende Qualitätssicherung (Modul H).

Eine EUCC-Pflicht entsteht erst, **sobald** die Kommission den delegierten Rechtsakt nach Art. 8 Abs. 1 erlässt und das betreffende Produkt darin benannt wird.
:::

::: info RECHTSGRUNDLAGE
**Art. 8 Abs. 1 CRA:** Ermächtigt die Kommission, per delegiertem Rechtsakt festzulegen, welche kritischen Produkte (Annex IV) ein europäisches Cybersicherheitszertifikat auf der Stufe „substanziell" oder höher erlangen müssen. Bis ein solcher Rechtsakt vorliegt, besteht keine EUCC-Pflicht.

**Art. 32 Abs. 3 CRA:** Bis zum Inkrafttreten eines delegierten Rechtsakts nach Art. 8 Abs. 1 unterliegen kritische Produkte den regulären Konformitätsbewertungsverfahren (Modul B+C oder Modul H).

**Verordnung (EU) 2019/881 (Cybersecurity Act):** Definiert den europäischen Rahmen für Cybersicherheitszertifizierung.

**EUCC-Schema (Durchführungsverordnung (EU) 2024/482):** Spezifiziert das europäische Common-Criteria-basierte Zertifizierungsschema.
:::

## 7.5.2 Anwendbarkeit

| Kategorie | EUCC verpflichtend? |
|-----------|---------------------|
| Standard | Nein |
| Klasse I | Nein |
| Klasse II | Nein |
| **Kritisch (Annex IV)** | **Nur bedingt** — erst nach delegiertem Rechtsakt (Art. 8 Abs. 1); derzeit Modul B+C oder H (Art. 32 Abs. 3) |

::: tip DERZEITIGER KONFORMITÄTSWEG FÜR ANNEX-IV-PRODUKTE
Da bislang kein delegierter Rechtsakt nach Art. 8 Abs. 1 erlassen wurde, folgen kritische Produkte aktuell demselben Verfahren wie Klasse-II-Produkte: [Modul B+C](/de/conformity/module-bc) oder [Modul H](/de/conformity/module-h). Die nachfolgende EUCC-Verfahrensbeschreibung gilt für den Fall, dass die Kommission die EUCC-Pflicht für eine Produktkategorie aktiviert.
:::

### Annex IV Produktkategorien

Folgende Produkte sind als kritisch eingestuft:

- Hardware-Sicherheitsmodule (HSM)
- Smartcards und ähnliche Geräte (inkl. Secure Elements)
- Smartcard-Leser
- Sensoren und Aktoren für Roboter und Maschinensteuerungen
- Smart Meter Gateways

## 7.5.3 Vertrauenswürdigkeitsstufen

Das EUCC kennt zwei Stufen, basierend auf den Common Criteria Evaluation Assurance Levels (EAL):

| EUCC-Stufe | Common Criteria | Prüftiefe | Typischer Einsatz |
|------------|----------------|-----------|-------------------|
| **Substanziell** | EAL 3-4 | Methodisch getestet, geprüft | Mindestanforderung CRA Annex IV |
| **Hoch** | EAL 5-7 | Semi-formal/formal verifiziert | Hochsicherheitsprodukte |

Für den CRA ist mindestens die Stufe **„substanziell"** erforderlich.

## 7.5.4 Verfahrensablauf

### 1. Evaluierungsstelle (ITSEF) auswählen

- **ITSEF** = IT Security Evaluation Facility
- Muss nach ISO/IEC 17025 akkreditiert sein
- Muss vom nationalen Cybersicherheitszertifizierungsorgan anerkannt sein
- In Deutschland: BSI (Bundesamt für Sicherheit in der Informationstechnik) als zuständige Behörde

### 2. Protection Profile / Security Target erstellen

#### Security Target (ST)

Das Security Target definiert:

- **TOE** (Target of Evaluation) – Genaue Beschreibung des zu prüfenden Produkts
- **Sicherheitsproblem** – Bedrohungen, organisatorische Sicherheitspolitiken, Annahmen
- **Sicherheitsziele** – Für das TOE und die Einsatzumgebung
- **Sicherheitsanforderungen** – Funktionale (SFR) und zur Vertrauenswürdigkeit (SAR)
- **TOE-Zusammenfassung** – Wie die Anforderungen erfüllt werden

#### Protection Profile (PP)

Falls ein relevantes Protection Profile existiert, sollte dieses referenziert werden. Es vereinfacht die Evaluierung, da die Sicherheitsanforderungen bereits standardisiert sind.

### 3. Evaluierung

Die ITSEF führt die Evaluierung durch:

| EAL | Prüfaktivitäten |
|-----|----------------|
| EAL 1 | Funktional getestet |
| EAL 2 | Strukturell getestet |
| EAL 3 | Methodisch getestet und geprüft |
| **EAL 4** | **Methodisch entworfen, getestet und geprüft** |
| EAL 5 | Semi-formal entworfen und getestet |
| EAL 6 | Semi-formal verifiziert |
| EAL 7 | Formal verifiziert |

Für CRA Annex IV ist typischerweise **EAL 3 oder EAL 4** erforderlich (Stufe „substanziell").

### 4. Zertifizierung

Nach erfolgreicher Evaluierung:

1. ITSEF erstellt **Evaluierungsbericht** (ETR – Evaluation Technical Report)
2. Nationale Zertifizierungsstelle (z.B. BSI) prüft den ETR
3. **EUCC-Zertifikat** wird ausgestellt
4. Zertifikat wird in der **EU-Datenbank für Cybersicherheitszertifizierung** veröffentlicht

### 5. Maintenance

- **Zertifikatsgültigkeit:** Begrenzt (typisch 3-5 Jahre)
- **Assurance Continuity:** Bei kleineren Änderungen (Maintenance Update)
- **Re-Evaluierung:** Bei wesentlichen Änderungen
- **Vulnerability Management:** Laufende Pflicht zur Schwachstellenbehandlung

## 7.5.5 Zeitplanung

| Phase | Geschätzter Zeitaufwand |
|-------|------------------------|
| Security Target erstellen | 2-4 Monate |
| ITSEF auswählen und beauftragen | 1-2 Monate |
| Evaluierung (EAL 4) | 6-12 Monate |
| Zertifizierung durch nationale Stelle | 2-4 Monate |
| **Gesamt** | **ca. 12-24 Monate** |

::: warning PLANUNGSVORLAUF
EUCC-Evaluierungen sind aufwändig und langwierig. Beginnen Sie mindestens **18-24 Monate** vor dem geplanten Inverkehrbringen mit der Planung.
:::

## 7.5.6 Kosten

| Kostenfaktor | Geschätzter Bereich |
|-------------|---------------------|
| Security Target Erstellung | 15.000 - 50.000 EUR |
| Evaluierung (EAL 3-4) | 50.000 - 200.000 EUR |
| Zertifizierungsgebühren | 5.000 - 15.000 EUR |
| Maintenance / Re-Evaluierung | 20.000 - 100.000 EUR |
| **Gesamt (Erstbewertung)** | **ca. 70.000 - 265.000 EUR** |

*Hinweis: Die tatsächlichen Kosten hängen stark von der Produktkomplexität und dem angestrebten EAL ab.*

## 7.5.7 Relevanz für BAUER GROUP

Basierend auf der [Produktklassifizierung](/de/conformity/product-classification):

| Annex IV Kategorie | Betrifft BAUER GROUP? | Maßnahme |
|-------------------|-----------------------|----------|
| Hardware-Sicherheitsmodule (HSM) | Nein (Nutzung, keine Herstellung) | Keine |
| Smartcards / Secure Elements | Nein (in der Regel) | Keine |
| Smart Meter Gateways | Prüfen | Falls Energieprodukte hergestellt werden |
| Sensoren/Aktoren für Roboter | Prüfen | Falls sicherheitskritische Steuerungen |

::: tip AKTUELLER STATUS
Nach derzeitigem Kenntnisstand fallen keine BAUER GROUP Produkte unter Annex IV. Diese Einschätzung wird bei jedem neuen Produkt und bei Änderungen der Delegated Acts überprüft.
:::

## 7.5.8 Übergangsregelungen

- **Art. 32 Abs. 3 CRA:** Solange die Kommission keinen delegierten Rechtsakt nach Art. 8 Abs. 1 erlassen hat, der eine EUCC-Pflicht auslöst, werden kritische Produkte (Annex IV) über die regulären Konformitätsbewertungsverfahren bewertet — Modul B+C oder Modul H. Dies ist der **derzeitige Status (Stand Juni 2026)**.
- **Art. 8 Abs. 1 CRA:** Erst der Erlass eines delegierten Rechtsakts macht das EUCC für die darin benannten Produktkategorien verpflichtend.
- Die EU-Kommission kann per delegiertem Rechtsakt zudem weitere Produkte zu Annex IV hinzufügen.
- Hersteller müssen die Entwicklung der delegierten und Durchführungsrechtsakte aktiv verfolgen, um eine künftige EUCC-Pflicht rechtzeitig zu erkennen.

## 7.5.9 Checkliste: EUCC

- [ ] Produktklassifizierung abgeschlossen (Annex IV bestätigt)
- [ ] Relevantes Protection Profile identifiziert (falls vorhanden)
- [ ] Security Target erstellt
- [ ] ITSEF identifiziert und kontaktiert
- [ ] Evaluierungsvertrag geschlossen
- [ ] Evaluierungsmaterial bereitgestellt (Quellcode, Dokumentation, Testpläne)
- [ ] Evaluierung bestanden / Nachbesserungen umgesetzt
- [ ] ETR durch nationale Stelle geprüft
- [ ] EUCC-Zertifikat erhalten
- [ ] Zertifikat in EU-Datenbank veröffentlicht
- [ ] Maintenance-Plan aufgesetzt
- [ ] EU-Konformitätserklärung erstellt ([Template](/de/templates/eu-declaration-of-conformity))
- [ ] CE-Kennzeichnung angebracht
