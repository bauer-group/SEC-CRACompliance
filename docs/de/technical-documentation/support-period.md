# 7.4 Support & Lifecycle Policy

## 7.4.1 Rechtsgrundlage

Gemäß Art. 13 Abs. 8 CRA muss der Hersteller den Support-Zeitraum für jedes Produkt festlegen und veröffentlichen. Während dieses Zeitraums müssen Sicherheitsupdates bereitgestellt werden.

::: info RECHTSGRUNDLAGE
**Art. 13 Abs. 8 CRA:** *„Der Hersteller bestimmt den erwarteten Nutzungszeitraum des Produkts. Bei der Bestimmung des Support-Zeitraums berücksichtigt der Hersteller insbesondere die vernünftigen Erwartungen der Nutzer, die Art des Produkts, einschließlich seines bestimmungsgemäßen Zwecks, und das einschlägige Unionsrecht zur Festlegung der Lebensdauer von Produkten mit digitalen Elementen."*

**Art. 13 Abs. 8 Unterabs. 2 CRA:** *„Der Support-Zeitraum beträgt mindestens fünf Jahre ab dem Inverkehrbringen des Produkts."*

**Annex II Nr. 5 CRA:** Der Support-Zeitraum gehört zu den verpflichtenden Nutzerinformationen, die dem Produkt beigefügt werden müssen.
:::

## 7.4.2 Mindest-Support-Zeitraum

Der CRA schreibt einen Mindest-Support-Zeitraum von **5 Jahren** vor. Für Produktkategorien mit längerer erwarteter Nutzungsdauer legt die BAUER GROUP längere Zeiträume fest:

| Produktkategorie | Mindest-Support | Begründung | Beispiele |
|------------------|:---------------:|------------|-----------|
| Software-Produkte (Web, API) | **5 Jahre** | CRA-Minimum | Microservices, Web-Apps |
| Container-Images | **5 Jahre** | CRA-Minimum | Docker-basierte Dienste |
| Libraries / Pakete | **5 Jahre** ab letztem Major Release | CRA-Minimum | NPM-Pakete, NuGet-Pakete |
| Firmware (IoT Consumer) | **5 Jahre** oder erwartete Gerätelebensdauer | Je nachdem, was länger ist | ESP32-basierte Geräte |
| Firmware (Industrie) | **10 Jahre** | Erwartete Nutzungsdauer industrieller Steuerungen | STM32, Zephyr RTOS |

::: warning HINWEIS ZUR BESTIMMUNG
Die Festlegung des Support-Zeitraums muss **vor dem Inverkehrbringen** erfolgen und ist danach nicht verkürzbar. Eine Verlängerung ist jederzeit möglich und wird empfohlen, wenn die tatsächliche Nutzungsdauer die ursprüngliche Schätzung übersteigt.
:::

## 7.4.3 Lifecycle-Phasen

Jedes Produkt durchläuft drei definierte Lifecycle-Phasen:

```
┌──────────────────────────────────────────────────────────────┐
│  Phase 1: ACTIVE SUPPORT                                     │
│                                                              │
│  Vollständiger Support: Features + Security + Bug Fixes      │
│  Dauer: Bis zum nächsten Major Release oder Phasenübergang   │
│  SLA: Sicherheitsupdates gemäß Patch-Management (→ Kap. 3)  │
├──────────────────────────────────────────────────────────────┤
│  Phase 2: SECURITY SUPPORT                                   │
│                                                              │
│  Nur Sicherheitsupdates: CRITICAL und HIGH CVEs              │
│  Dauer: Bis zum Support-Ende (Mindestens 5 Jahre gesamt)     │
│  SLA: CRITICAL ≤ 48h, HIGH ≤ 7 Tage                         │
├──────────────────────────────────────────────────────────────┤
│  Phase 3: END OF LIFE (EOL)                                  │
│                                                              │
│  Keine Updates mehr                                          │
│  Nutzer werden zur Migration aufgefordert                    │
│  12 Monate vorher angekündigt                                │
│  SBOM + Signaturen + Dokumentation bleiben archiviert        │
└──────────────────────────────────────────────────────────────┘
```

### Übergang zwischen Phasen

| Übergang | Auslöser | Kommunikation |
|----------|----------|---------------|
| Active → Security | Neues Major Release ODER Managemententscheidung | Release Notes + SECURITY.md-Update |
| Security → EOL | Support-Zeitraum abgelaufen | 12-Monats-Vorankündigung (s. EOL-Prozess) |

## 7.4.4 EOL-Prozess

### Ankündigungszeitplan

| Zeitpunkt | Maßnahme | Kanal | Verantwortlich |
|-----------|----------|-------|----------------|
| **12 Monate vor EOL** | EOL-Ankündigung mit geplantem Datum | GitHub Advisory + Release Notes + SECURITY.md | Product Owner |
| **6 Monate vor EOL** | Erinnerung + Migrationsanleitung veröffentlichen | GitHub Advisory + Dokumentation | Product Owner |
| **3 Monate vor EOL** | Letzte Erinnerung + Update der Produktseite | GitHub Advisory + E-Mail (bekannte Kunden) | Product Owner |
| **EOL-Datum** | Letzte Version markiert, keine weiteren Updates | Release Notes + SECURITY.md-Update | DevOps Lead |

### Pflichten nach EOL

Auch nach Erreichen des EOL bestehen folgende Aufbewahrungspflichten gemäß Art. 10 Abs. 13 CRA:

| Pflicht | Dauer | Maßnahme |
|---------|-------|----------|
| Technische Dokumentation archiviert | **10 Jahre** nach Inverkehrbringen | Git-Repository (Protected Branch) |
| SBOMs aller Versionen verfügbar | **10 Jahre** nach Inverkehrbringen | Release-Assets + SBOM-Archiv |
| Signaturen verifizierbar | **10 Jahre** nach Inverkehrbringen | Cosign Public Keys archiviert |
| Bestehende Releases downloadbar | **10 Jahre** nach Inverkehrbringen | GitHub Releases / Registry |
| Konformitätserklärung verfügbar | **10 Jahre** nach Inverkehrbringen | Git-Repository |

## 7.4.5 Versionierungsstrategie

Die BAUER GROUP verwendet [Semantic Versioning 2.0.0](https://semver.org/):

```
MAJOR.MINOR.PATCH[-PRERELEASE][+BUILD]

MAJOR – Inkompatible API-Änderungen (neuer Support-Zyklus)
MINOR – Abwärtskompatible Funktionserweiterungen
PATCH – Abwärtskompatible Fehlerbehebungen / Sicherheitsupdates
```

**Sicherheitsupdates** werden immer als **PATCH**-Releases veröffentlicht und sind abwärtskompatibel. Ist ein Breaking Change für die Behebung einer Schwachstelle unvermeidbar, wird parallel ein Workaround für die aktuelle MAJOR-Version bereitgestellt.

## 7.4.6 Produktkatalog – Support-Status

::: warning PRODUKTSPEZIFISCH
Der folgende Produktkatalog muss für jedes CRA-relevante Produkt der BAUER GROUP gepflegt werden. Die Tabelle wird bei jedem Major Release, Phasenübergang oder EOL-Ereignis aktualisiert.

**Verantwortlich:** Product Owner in Abstimmung mit Security Lead
:::

| Produkt | Typ | Aktuelle Version | Support-Phase | Support-Start | Support-Ende | Nächster Review |
|---------|-----|-----------------|---------------|:-------------:|:------------:|:---------------:|
| *[Produktname eintragen]* | *Software* | *vX.Y.Z* | *Active Support* | *YYYY-MM-DD* | *YYYY-MM-DD* | *YYYY-MM-DD* |
| *[Produktname eintragen]* | *Container* | *vX.Y.Z* | *Security Support* | *YYYY-MM-DD* | *YYYY-MM-DD* | *YYYY-MM-DD* |
| *[Produktname eintragen]* | *Firmware* | *vX.Y.Z* | *Active Support* | *YYYY-MM-DD* | *YYYY-MM-DD* | *YYYY-MM-DD* |

::: tip ANLEITUNG
Für jedes Produkt im CRA-Geltungsbereich (→ Kap. 1.3) ist eine Zeile in dieser Tabelle einzutragen. Der **Support-Start** entspricht dem Datum des Inverkehrbringens (erste öffentliche Bereitstellung). Das **Support-Ende** muss mindestens 5 Jahre nach Support-Start liegen.
:::

## 7.4.7 Nutzerinformation

Gemäß Annex II Nr. 5 CRA müssen Nutzer über den Support-Zeitraum informiert werden. Die Information muss an folgenden Stellen bereitgestellt werden:

| Informationsort | Inhalt | CRA-Pflicht |
|-----------------|--------|-------------|
| **Produktdokumentation** (bei Inverkehrbringen) | Support-Zeitraum, Support-Phasen, EOL-Datum | Art. 13 Abs. 8 |
| **SECURITY.md** (je Repository) | Unterstützte Versionen, Meldewege | Art. 13 Abs. 6 |
| **Produktseite / README** | Aktuelle Support-Phase, nächstes EOL | Annex II Nr. 5 |
| **Release Notes** (bei Phasenübergang) | Übergang Active → Security, EOL-Ankündigung | Best Practice |
| **Nutzerinformation-Template** | Vollständige Sicherheitshinweise | Annex II |

Das Template für die Nutzerinformation findet sich unter [Anhang: Nutzerinformation](/de/templates/product-security-info).

## 7.4.8 Prozessintegration

Der Lifecycle-Prozess ist in die bestehenden CI/CD-Workflows integriert:

| Ereignis | Automatisierung | Workflow |
|----------|----------------|----------|
| Neues Release | SBOM generieren, signieren, als Release-Asset anhängen | `cra-release.yml` |
| Major Release | Support-Phase des Vorgängers auf Security Support setzen | Manuell + Katalog-Update |
| EOL erreicht | SECURITY.md aktualisieren, Deprecation-Notice in Registry | Manuell + Katalog-Update |
| Support-Review (halbjährlich) | Produktkatalog prüfen, Phasenübergänge planen | Manuell |
