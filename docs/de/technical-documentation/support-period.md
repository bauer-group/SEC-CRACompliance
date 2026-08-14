# 6.4 Support & Lifecycle

## 6.4.1 Rechtsgrundlage

Gemäß Art. 13 Abs. 8 CRA muss der Hersteller für jedes Produkt den Support-Zeitraum festlegen und veröffentlichen. Während dieses Zeitraums müssen Sicherheitsupdates bereitgestellt werden.

::: info RECHTSGRUNDLAGE
**Art. 13 Abs. 8 CRA:** *„Beim Inverkehrbringen eines Produkts mit digitalen Elementen und für die erwartete Produktlebensdauer oder für einen Zeitraum von fünf Jahren ab dem Inverkehrbringen des Produkts — je nachdem, welcher Zeitraum kürzer ist — stellen die Hersteller sicher, dass Schwachstellen dieses Produkts, einschließlich seiner Komponenten, wirksam und im Einklang mit den grundlegenden Cybersicherheitsanforderungen nach Anhang I Teil II behandelt werden."*

**Art. 13 Abs. 8 CRA (Kriterien):** Bei der Bestimmung des Support-Zeitraums berücksichtigt der Hersteller insbesondere die vernünftigen Erwartungen der Nutzer, die Art des Produkts einschließlich seiner Zweckbestimmung sowie einschlägiges Unionsrecht zur Bestimmung der Lebensdauer von Produkten mit digitalen Elementen.

**Art. 13 Abs. 19 CRA:** Das Enddatum des Support-Zeitraums — mindestens Monat und Jahr — ist zum Zeitpunkt des Kaufs klar und verständlich anzugeben, und nach Ablauf des Support-Zeitraums ist den Nutzern eine Mitteilung anzuzeigen, sofern dies technisch machbar ist.

**Anhang II Nr. 5 CRA:** Der Support-Zeitraum ist Teil der verpflichtenden Nutzerinformationen, die dem Produkt beiliegen.
:::

## 6.4.2 Fünf Jahre sind eine Untergrenze, kein Standardwert

::: danger KORRIGIERTE PRAXIS
Der Support-Zeitraum spiegelt die **erwartete Nutzungsdauer** des Produkts wider — den Zeitraum, in dem das Produkt voraussichtlich genutzt wird. Die Fünf-Jahres-Angabe wirkt **nur als Auffangregel**, die sicherstellt, dass Schwachstellen hinreichend lange behandelt werden.

Erwägungsgrund 60 CRA ist eindeutig: Produkte, deren Nutzung vernünftigerweise **länger** als fünf Jahre erwartet wird, müssen entsprechend **längere** Support-Zeiträume erhalten. Portfolioweit pauschal fünf Jahre zu erklären ist daher eine Compliance-Lücke, keine sichere Untergrenze.
:::

Die Richtung gilt in beide Seiten:

| Erwartete Nutzungsdauer | Support-Zeitraum |
|-------------------------|------------------|
| Länger als fünf Jahre | **Die erwartete Nutzungsdauer** — länger als fünf Jahre |
| Fünf Jahre oder mehr | Mindestens fünf Jahre, angepasst an die erwartete Nutzungsdauer |
| Nachweislich kürzer als fünf Jahre | **Die erwartete Nutzungsdauer** — die Fünf-Jahres-Untergrenze gilt nicht |

### Kriterien zur Bestimmung der erwarteten Nutzungsdauer

| Kriterium | Quelle |
|-----------|--------|
| Vernünftige Erwartungen der Nutzer | Art. 13 Abs. 8 — ausdrückliches Kriterium |
| Art des Produkts einschließlich seiner Zweckbestimmung | Art. 13 Abs. 8 — ausdrückliches Kriterium |
| Einschlägiges Unionsrecht zur Lebensdauer von Produkten | Art. 13 Abs. 8 — ausdrückliches Kriterium |
| Support-Zeiträume funktional vergleichbarer Produkte anderer Hersteller | Art. 13 Abs. 8 — zusätzliches Kriterium |
| Verfügbarkeit der Betriebsumgebung | Art. 13 Abs. 8 — zusätzliches Kriterium |
| Support-Zeiträume integrierter Drittkomponenten mit Kernfunktionen | Art. 13 Abs. 8 — zusätzliches Kriterium |
| Einschlägige Hinweise der CRA-Gruppe für Verwaltungszusammenarbeit (ADCO) und der Kommission | Art. 13 Abs. 8 — zusätzliches Kriterium |

Alle Kriterien sind so anzuwenden, dass **Verhältnismäßigkeit** gewahrt bleibt.

### Support-Zeiträume je Produktkategorie

| Produktkategorie | Support-Zeitraum | Bestimmender Faktor | Beispiele |
|------------------|:----------------:|---------------------|-----------|
| An Kunden gelieferte Softwareprodukte | **≥ 5 Jahre** je in Verkehr gebrachter Version | Nutzererwartungen; Verfügbarkeit der Betriebsumgebung | On-Premises-Deployments, Appliances |
| Container-Images | **≥ 5 Jahre** | Nutzererwartungen; Base-Image-Support | Docker-basierte Dienste |
| Libraries / Pakete | **≥ 5 Jahre** ab der in Verkehr gebrachten Version | Integrationszyklen nachgelagerter Nutzer | NPM-Pakete, NuGet-Pakete |
| Firmware (IoT Consumer) | **5 Jahre** oder erwartete Gerätelebensdauer, je nachdem was **länger** ist | Physische Haltbarkeit; Nutzererwartungen | ESP32-basierte Geräte |
| Firmware (Industrie) | **10 Jahre** | Erwartete Nutzungsdauer industrieller Steuerungen | STM32, Zephyr RTOS |

::: warning DIE HERLEITUNG DOKUMENTIEREN, NICHT NUR DIE ZAHL
Marktüberwachungsbehörden können fragen, **warum** ein bestimmter Support-Zeitraum gewählt wurde. In der Produktakte ist festzuhalten, welche Kriterien des Art. 13 Abs. 8 angewendet wurden und welche erwartete Nutzungsdauer daraus folgte — nicht nur das resultierende Datum.
:::

::: warning HINWEIS ZUR FESTLEGUNG
Die Festlegung des Support-Zeitraums muss **vor dem Inverkehrbringen** erfolgen und kann danach nicht verkürzt werden. Eine Verlängerung ist jederzeit möglich und empfohlen, wenn die tatsächliche Nutzungsdauer die ursprüngliche Schätzung übersteigt.
:::

## 6.4.3 Iterativ entwickelte Software: ein Support-Zeitraum je Version

Softwareprodukte werden typischerweise iterativ veröffentlicht, und wesentlich geänderte Versionen können häufig in Verkehr gebracht werden. Der Support-Zeitraum ist im Licht dieses Entwicklungsmodells zu verstehen.

::: info DIE REGEL
Jede **wesentlich geänderte Version** eines in Verkehr gebrachten Softwareprodukts muss einen **eigenen erklärten Support-Zeitraum** haben, der Art. 13 Abs. 8 entspricht — einschließlich der Fünf-Jahres-Untergrenze, sofern die erwartete Nutzungsdauer dieser Version nicht nachweislich kürzer ist.

Das folgt daraus, dass eine wesentliche Änderung ein **neues Inverkehrbringen** darstellt → [1.8 Wesentliche Änderungen](/de/overview/substantial-modifications).
:::

### Die Erleichterung des Art. 13 Abs. 10 für Software

Art. 13 Abs. 10 CRA schafft Flexibilität. Ein Hersteller darf die Anforderung an die Schwachstellenbehandlung nach **Anhang I Teil II Nr. 2** — Behebung und Beseitigung von Schwachstellen — **nur für die zuletzt in Verkehr gebrachte Version** erfüllen, sofern Nutzer früherer Versionen:

1. **kostenfreien Zugang** zur neuesten Version haben und
2. **keine zusätzlichen Kosten** für die Anpassung der Hardware- und Softwareumgebung tragen, in der sie die ursprüngliche Version nutzen.

### Was „zusätzliche Kosten" bedeutet

Der Begriff ist **praxisnah und verhältnismäßig** auszulegen, unter Berücksichtigung normaler und erwartbarer Praktiken in Softwarewartung und -betrieb.

| **Keine** zusätzlichen Kosten — angemessener Betriebsaufwand | **Sind** zusätzliche Kosten |
|---|---|
| Personalzeit | Verpflichtender Kauf neuer Hardware |
| Routinemäßige Tests | Ersatz von Infrastruktur |
| Konfigurationsanpassungen | Grundlegende Änderungen der Betriebsumgebung |
| Upgrades zugrunde liegender Software-Abhängigkeiten, die zur Behandlung von End-of-Life-Komponenten oder bekannten Sicherheitslücken erforderlich sind | |

### Was für frühere Versionen weiterhin gilt

::: warning ART. 13 ABS. 10 IST ENG
Die Erleichterung betrifft **ausschließlich** Nr. 2 des Anhangs I Teil II. Der Hersteller bleibt gebunden an:

- **alle übrigen Anforderungen an die Schwachstellenbehandlung** des Anhangs I Teil II — einschließlich, für alle nachfolgenden wesentlich geänderten Versionen, der Aufrechterhaltung einer **Richtlinie zur koordinierten Offenlegung von Schwachstellen** und von **Maßnahmen zur Erleichterung des Informationsaustauschs** über potenzielle Schwachstellen (Erwägungsgrund 40);
- die **Meldepflichten des Art. 14**;
- Art. 13 Abs. 19: Wird die Behebung für frühere Versionen eingestellt, ist zu erwarten, dass nicht aktualisierte Nutzer **informiert** werden, sofern technisch machbar.
:::

::: tip BEZAHLTER SUPPORT FÜR ALTE VERSIONEN BLEIBT MÖGLICH
Können Nutzer ohne zusätzliche Kosten auf die neueste Version aktualisieren, dürfen Hersteller dennoch **wählen**, Schwachstellen in früheren Versionen weiter zu beheben — auch entgeltlich oder im Rahmen anderer kommerzieller Vereinbarungen. Der CRA verlangt nicht, dass Sicherheitsupdates für solche früheren Versionen kostenfrei sind.
:::

### Ausgearbeitete Beispiele

| Szenario | Ergebnis |
|----------|----------|
| Ein Smartphone-Modell wird mit einem erklärten Support-Zeitraum von X Jahren in Verkehr gebracht. In dieser Zeit veröffentlicht der Hersteller wesentlich geänderte Betriebssystemversionen, die Nutzer kostenfrei und ohne neue Hardware installieren können. | Der Hersteller darf Schwachstellen nur in der **neuesten** Betriebssystemversion für dieses Modell beheben. Die übrigen Pflichten zur Schwachstellenbehandlung — CVD, Informationsaustausch — gelten für den gesamten Support-Zeitraum fort. |
| Ein Unternehmenssoftwareprodukt erscheint alle paar Monate als wesentlich geänderte Version. Jede wird mit eigenem erklärtem Support-Zeitraum in Verkehr gebracht. Das Upgrade erfordert Tests und Konfigurationsanpassungen, aber keine neue Hardware oder Infrastrukturänderung. | Der Hersteller darf sich auf Art. 13 Abs. 10 stützen und die Behebung für frühere Versionen einstellen, sobald Nutzer aktualisieren können, während er die übrigen Anforderungen für alle nachfolgenden Versionen weiter erfüllt. |

## 6.4.4 Wesentliche Änderungen und der Support-Zeitraum

Eine wesentliche Änderung ist ein neues Inverkehrbringen — sie setzt den Support-Zeitraum aber **nicht** automatisch zurück oder verlängert ihn.

::: info DIE ENTSCHEIDENDE FRAGE
Berührt die wesentliche Änderung die **Faktoren, die die erwartete Nutzungsdauer des Produkts ursprünglich bestimmt haben**?

Eine wesentliche Änderung erfordert eine **Neubewertung** anhand der Kriterien des Art. 13 Abs. 8. Sie erzeugt nicht von selbst einen neuen Support-Zeitraum.
:::

| Sachverhalt | Wirkung |
|-------------|---------|
| Die Änderung berührt diese Faktoren **nicht** | Die Kriterien des Art. 13 Abs. 8 ergeben weiterhin dieselbe erwartete Nutzungsdauer. Der Support-Zeitraum des geänderten Produkts **entspricht der verbleibenden erwarteten Nutzungsdauer** wie ursprünglich bestimmt — auch wenn dieser Rest nun **weniger als fünf Jahre** beträgt. |
| Die Änderung berührt diese Faktoren | Der Hersteller **berechnet** den Support-Zeitraum entsprechend der neuen erwarteten Nutzungsdauer **neu**. |

### Ausgearbeitete Beispiele

| Szenario | Ergebnis |
|----------|----------|
| Ein Saugroboter hat eine erwartete Nutzungsdauer von X Jahren, bestimmt durch physische Haltbarkeit und Verschleiß der Hardware. Nach Y Jahren fügt ein Software-Update, das eine wesentliche Änderung darstellt, neue Reinigungsmodi und Navigationsfunktionen hinzu. | Hardware-Haltbarkeit und Nutzererwartungen bleiben unverändert → **keine Änderung**; der Support-Zeitraum entspricht der verbleibenden erwarteten Nutzungsdauer. |
| Eine Industriemaschine mit Cloud-Backend (eine RDPS) hat eine erwartete Nutzungsdauer von X Jahren, bestimmt durch die Hardware-Haltbarkeit. Nach Y Jahren strukturiert der Hersteller das Backend mit neuen APIs und Datenflüssen um — eine wesentliche Änderung —, ohne die Art des Produkts oder die Nutzererwartungen zu verändern. | **Keine Änderung**; der Support-Zeitraum entspricht der verbleibenden erwarteten Nutzungsdauer. |
| Die erwartete Nutzungsdauer einer SPS wurde durch die Hardware-Haltbarkeit bestimmt. Jahre später ersetzt der Hersteller die eingebettete Rechenplattform — Prozessor, Speicher und Laufzeitumgebung — durch eine neue Generation, die für eine deutlich längere Betriebsdauer ausgelegt ist. | Nutzererwartungen und Art des Produkts ändern sich → die Kriterien ergeben eine **längere** erwartete Nutzungsdauer → der Hersteller **berechnet** den Support-Zeitraum **neu**. |

::: tip REPARATUREN LÖSEN KEINE NEUBERECHNUNG AUS
Aufarbeitung, Wartung oder Reparatur sind grundsätzlich **keine** wesentlichen Änderungen und erfordern daher für sich genommen keine Neubewertung des Support-Zeitraums → [1.8 Wesentliche Änderungen](/de/overview/substantial-modifications).
:::

## 6.4.5 Lifecycle-Phasen

Jedes Produkt durchläuft drei definierte Lifecycle-Phasen:

```
┌──────────────────────────────────────────────────────────────┐
│  Phase 1: ACTIVE SUPPORT                                     │
│                                                              │
│  Voller Support: Features + Security + Bugfixes              │
│  Dauer: Bis zum nächsten Major-Release oder Phasenwechsel    │
│  SLA: Sicherheitsupdates gemäß Patch Management (→ Kap. 3)   │
├──────────────────────────────────────────────────────────────┤
│  Phase 2: SECURITY SUPPORT                                   │
│                                                              │
│  Nur Sicherheitsupdates: CRITICAL und HIGH CVEs              │
│  Dauer: Bis Support-Ende (erwartete Nutzungsdauer)           │
│  SLA: CRITICAL ≤ 48h, HIGH ≤ 7 Tage                         │
├──────────────────────────────────────────────────────────────┤
│  Phase 3: END OF LIFE (EOL)                                  │
│                                                              │
│  Keine weiteren Updates                                      │
│  Nutzer werden zur Migration aufgefordert                    │
│  Ankündigung 12 Monate im Voraus                             │
│  Mitteilung zum Support-Ende nach Art. 13 Abs. 19            │
│  SBOM + Signaturen + Dokumentation bleiben archiviert        │
└──────────────────────────────────────────────────────────────┘
```

### Übergang zwischen den Phasen

| Übergang | Auslöser | Kommunikation |
|----------|----------|---------------|
| Active → Security | Neues Major-Release ODER Managemententscheidung | Release Notes + SECURITY.md-Update |
| Security → EOL | Support-Zeitraum abgelaufen | 12-monatige Vorankündigung (siehe EOL-Prozess) + Produktmitteilung nach Art. 13 Abs. 19 |

## 6.4.6 EOL-Prozess

### Ankündigungsplan

| Zeitpunkt | Maßnahme | Kanal | Verantwortlich |
|-----------|----------|-------|----------------|
| **12 Monate vor EOL** | EOL-Ankündigung mit geplantem Datum | GitHub Advisory + Release Notes + SECURITY.md | Product Owner |
| **6 Monate vor EOL** | Erinnerung + Migrationsleitfaden veröffentlichen | GitHub Advisory + Dokumentation | Product Owner |
| **3 Monate vor EOL** | Letzte Erinnerung + Produktseite aktualisieren | GitHub Advisory + E-Mail (bekannte Kunden) | Product Owner |
| **EOL-Datum** | Finale Version markiert; Mitteilung nach Art. 13 Abs. 19 anzeigen, sofern technisch machbar | Produktmitteilung + Release Notes + SECURITY.md | DevOps Lead |

::: danger DIE MELDEPFLICHT ENDET NICHT MIT EOL
Die Pflichten zur Schwachstellenbehandlung nach Anhang I Teil II gelten für den Support-Zeitraum. Die **Meldepflichten des Art. 14 bestehen fort, nachdem ein Produkt nicht mehr unterstützt wird**. Eine in einem End-of-Life-Produkt entdeckte, aktiv ausgenutzte Schwachstelle löst weiterhin die 24-h-/72-h-Meldepflicht aus → [4.3 ENISA-Meldeprozess](/de/incident-response/enisa-reporting).
:::

### Pflichten nach EOL

Auch nach Erreichen des EOL gelten folgende Aufbewahrungspflichten gemäß Art. 13 Abs. 13 CRA:

| Pflicht | Dauer | Maßnahme |
|---------|-------|----------|
| Technische Dokumentation archiviert | **10 Jahre** nach Inverkehrbringen | Git-Repository (Protected Branch) |
| SBOMs aller Versionen verfügbar | **10 Jahre** nach Inverkehrbringen | Release Assets + SBOM-Archiv |
| Signaturen überprüfbar | **10 Jahre** nach Inverkehrbringen | Cosign Public Keys archiviert |
| Bestehende Releases herunterladbar | **10 Jahre** nach Inverkehrbringen | GitHub Releases / Registry |
| Konformitätserklärung verfügbar | **10 Jahre** nach Inverkehrbringen | Git-Repository |

::: tip ÖFFENTLICHE ARCHIVE HISTORISCHER VERSIONEN
Art. 13 Abs. 11 CRA erlaubt öffentliche Software-Archive mit Zugang zu historischen Versionen. Wo die BAUER GROUP solche unterhält, müssen Nutzer **klar und leicht zugänglich über die Risiken der Nutzung nicht unterstützter Software informiert** werden.
:::

## 6.4.7 Versionierungsstrategie

Die BAUER GROUP verwendet [Semantic Versioning 2.0.0](https://semver.org/):

```
MAJOR.MINOR.PATCH[-PRERELEASE][+BUILD]

MAJOR – Inkompatible API-Änderungen (neuer Support-Zyklus)
MINOR – Abwärtskompatible Funktionserweiterungen
PATCH – Abwärtskompatible Fehlerbehebungen / Sicherheitsupdates
```

**Sicherheitsupdates** werden stets als **PATCH**-Releases veröffentlicht und sind abwärtskompatibel. Ist ein Breaking Change zur Behebung einer Schwachstelle unvermeidbar, wird parallel ein Workaround für die aktuelle MAJOR-Version bereitgestellt.

::: warning VERSIONSNUMMERN ENTSCHEIDEN NICHT ÜBER DIE WESENTLICHKEIT
Ein MINOR-Release kann eine [wesentliche Änderung](/de/overview/substantial-modifications) sein, ein MAJOR-Release muss es nicht sein. Die semantische Version kommuniziert API-Kompatibilität; der Wesentlichkeitstest fragt nach Cybersicherheitsrisiko und Zweckbestimmung. Beide Feststellungen sind bei jedem Release unabhängig voneinander zu treffen.
:::

## 6.4.8 Produktkatalog — Support-Status

::: warning PRODUKTSPEZIFISCH
Der folgende Produktkatalog ist für jedes CRA-relevante Produkt der BAUER GROUP zu pflegen. Die Tabelle wird bei jedem Major-Release, Phasenwechsel, jeder wesentlichen Änderung und jedem EOL-Ereignis aktualisiert.

**Verantwortlich:** Product Owner in Abstimmung mit dem Security Lead
:::

| Produkt | Typ | Aktuelle Version | Support-Phase | Support-Beginn | Support-Ende | Begründung der Nutzungsdauer | Nächste Prüfung |
|---------|-----|------------------|---------------|:--------------:|:------------:|------------------------------|:---------------:|
| *[Produktname eintragen]* | *Software* | *vX.Y.Z* | *Active Support* | *YYYY-MM-DD* | *YYYY-MM-DD* | *[angewendete Kriterien Art. 13 Abs. 8]* | *YYYY-MM-DD* |
| *[Produktname eintragen]* | *Container* | *vX.Y.Z* | *Security Support* | *YYYY-MM-DD* | *YYYY-MM-DD* | *[angewendete Kriterien Art. 13 Abs. 8]* | *YYYY-MM-DD* |
| *[Produktname eintragen]* | *Firmware* | *vX.Y.Z* | *Active Support* | *YYYY-MM-DD* | *YYYY-MM-DD* | *[angewendete Kriterien Art. 13 Abs. 8]* | *YYYY-MM-DD* |

::: tip HINWEISE
Für jedes Produkt im CRA-Anwendungsbereich (→ Kap. 1.1) ist eine Zeile einzutragen. Der **Support-Beginn** entspricht dem Datum des Inverkehrbringens — bei eigenständiger Software dem Datum, an dem die Version erstmals zum Vertrieb oder zur Verwendung abgegeben wurde (→ [1.1 Geltungsbereich](/de/overview/scope)). Das **Support-Ende** muss der erwarteten Nutzungsdauer entsprechen und mindestens fünf Jahre nach dem Support-Beginn liegen, sofern die erwartete Nutzungsdauer nicht nachweislich kürzer ist.
:::

## 6.4.9 Nutzerinformationen

Gemäß Art. 13 Abs. 19 und Anhang II Nr. 5 CRA müssen Nutzer über den Support-Zeitraum informiert werden. Die Information ist an folgenden Stellen bereitzustellen:

| Ort der Information | Inhalt | CRA-Pflicht |
|---------------------|--------|-------------|
| **Zum Zeitpunkt des Kaufs** | Enddatum des Support-Zeitraums, mindestens Monat und Jahr, klar und verständlich | Art. 13 Abs. 19 |
| **Produktdokumentation** (beim Inverkehrbringen) | Support-Zeitraum, Support-Phasen, EOL-Datum | Art. 13 Abs. 8, Anhang II Nr. 5 |
| **Produktmitteilung** (bei Ablauf) | Support-Zeitraum ist beendet, sofern technisch machbar | Art. 13 Abs. 19 |
| **SECURITY.md** (je Repository) | Unterstützte Versionen, Meldekanäle | Anhang I Teil II |
| **Produktseite / README** | Aktuelle Support-Phase, nächstes EOL | Anhang II Nr. 5 |
| **Release Notes** (bei Phasenwechsel) | Übergang Active → Security, EOL-Ankündigung | Best Practice |
| **Template Nutzerinformationen** | Vollständige Sicherheitshinweise | Anhang II |

Das Template für Nutzerinformationen findet sich unter [Anhang: Nutzerinformationen](/de/templates/product-security-info).

## 6.4.10 Prozessintegration

Der Lifecycle-Prozess ist in die bestehenden CI/CD-Workflows integriert:

| Ereignis | Automatisierung | Workflow |
|----------|-----------------|----------|
| Neues Release | SBOM erzeugen, signieren, als Release Asset anhängen | `cra-release.yml` |
| Wesentlich geändertes Release | Neuen Support-Zeitraum für diese Version erklären | Manuell + Katalogaktualisierung |
| Major-Release | Support-Phase des Vorgängers auf Security Support setzen | Manuell + Katalogaktualisierung |
| EOL erreicht | SECURITY.md aktualisieren, Deprecation-Hinweis in der Registry, Produktmitteilung | Manuell + Katalogaktualisierung |
| Support-Review (halbjährlich) | Produktkatalog prüfen, erwartete Nutzungsdauern revalidieren, Phasenwechsel planen | Manuell |

> Quelle und Rechtsstatus der Auslegungen auf dieser Seite: [Leitlinien der EU-Kommission zum CRA](/de/clarifications/commission-guidance).
