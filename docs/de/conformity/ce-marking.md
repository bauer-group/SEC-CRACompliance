# 7.7 CE-Kennzeichnung (Art. 29–30)

## 7.7.1 Übersicht

Die CE-Kennzeichnung ist das sichtbare Zeichen dafür, dass ein Produkt mit digitalen Elementen alle anwendbaren EU-Anforderungen erfüllt. Sie ist **zwingend vorgeschrieben**, bevor ein Produkt auf dem EU-Markt in Verkehr gebracht wird. Die CE-Kennzeichnung bezieht sich dabei nicht ausschließlich auf den CRA, sondern auf alle für das Produkt geltenden EU-Harmonisierungsrechtsvorschriften.

::: info RECHTSGRUNDLAGE
**Art. 29 CRA:** *„Die CE-Kennzeichnung wird vor dem Inverkehrbringen des Produkts mit digitalen Elementen sichtbar, lesbar und dauerhaft angebracht. Ist dies aufgrund der Art des Produkts nicht möglich oder nicht gerechtfertigt, wird sie auf der Verpackung oder den Begleitunterlagen angebracht."*

**Art. 30 CRA:** Die CE-Kennzeichnung unterliegt den allgemeinen Grundsätzen gemäß Art. 30 der Verordnung (EG) Nr. 765/2008.

**Verordnung (EG) Nr. 765/2008, Art. 30:** Allgemeine Grundsätze der CE-Kennzeichnung (Proportionen, Mindestgröße, Sichtbarkeit).
:::

## 7.7.2 Bedeutung der CE-Kennzeichnung

Die CE-Kennzeichnung bestätigt, dass:

1. Das Produkt die **wesentlichen Anforderungen** aller anwendbaren EU-Harmonisierungsrechtsvorschriften erfüllt
2. Die vorgeschriebene **Konformitätsbewertung** ordnungsgemäß durchgeführt wurde
3. Eine **EU-Konformitätserklärung** (DoC) ausgestellt wurde
4. Der Hersteller die **volle Verantwortung** für die Konformität übernimmt

::: warning KEINE QUALITÄTSGARANTIE
Die CE-Kennzeichnung ist **kein Qualitätssiegel** und kein Zertifikat einer unabhängigen Stelle (außer bei Modul B+C oder H). Sie ist eine **Herstellererklärung** über die Einhaltung der EU-Anforderungen.
:::

## 7.7.3 Wann wird die CE-Kennzeichnung angebracht?

Die CE-Kennzeichnung darf **erst** angebracht werden, wenn:

- [ ] Die Konformitätsbewertung **erfolgreich abgeschlossen** wurde (Modul A, B+C oder H)
- [ ] Die **EU-Konformitätserklärung** gemäß Art. 28 / Annex V erstellt wurde
- [ ] Die **technische Dokumentation** gemäß Annex VII vollständig vorliegt
- [ ] Alle **wesentlichen Anforderungen** aus Annex I (Teil I und Teil II) erfüllt sind
- [ ] Bei externer Bewertung: Die **Bescheinigung der notifizierten Stelle** vorliegt

## 7.7.4 Physische Anforderungen

Gemäß Verordnung (EG) Nr. 765/2008 und Art. 29-30 CRA:

| Anforderung | Spezifikation |
|-------------|---------------|
| Mindestgröße | **5 mm** Höhe (bei physischer Anbringung) |
| Proportionen | Gleichmäßige Vergrößerung/Verkleinerung bei Beibehaltung des Seitenverhältnisses |
| Sichtbarkeit | Gut sichtbar angebracht |
| Lesbarkeit | Leicht lesbar |
| Dauerhaftigkeit | Nicht leicht entfernbar (indelibel) |
| Sprache | Keine Sprachanforderung (universelles Symbol) |

## 7.7.5 Anbringungsort

### Hardware / Physische Produkte

1. **Auf dem Produkt selbst** -- bevorzugt
2. **Auf der Verpackung** -- wenn Anbringung auf dem Produkt nicht möglich oder nicht gerechtfertigt (z.B. zu klein, Material ungeeignet)
3. **In den Begleitunterlagen** -- ergänzend, nicht als alleinige Anbringung

### Software-Produkte

Da Software kein physisches Substrat hat, gelten besondere Regelungen:

| Anbringungsort | Beschreibung | Empfehlung |
|----------------|-------------|------------|
| About-Dialog | Im „Über"-Fenster oder der Info-Seite der Anwendung | Empfohlen |
| README | In der README-Datei des Repositorys oder Release-Bundles | Empfohlen |
| Produktdokumentation | In der Benutzer- oder Installationsdokumentation | Erforderlich |
| Digitale Benutzeroberfläche | In der Anwendungsoberfläche (Footer, Einstellungen) | Empfohlen |
| Produktwebseite | Auf der Download- oder Produktseite | Ergänzend |
| Release Notes | In den Versionshinweisen jedes Releases | Ergänzend |

### Container Images

Für containerisierte Software:

| Anbringungsort | Technische Umsetzung |
|----------------|---------------------|
| OCI-Annotations | `org.opencontainers.image.ce-marking: "true"` |
| OCI-Labels | Label im Dockerfile: `LABEL eu.cra.ce-marking="conformant"` |
| Image-Dokumentation | README des Container-Image-Repositorys |
| Helm Chart / Manifest | In den Metadaten der Deployment-Konfiguration |

### Firmware

| Anbringungsort | Beschreibung |
|----------------|-------------|
| Gerät selbst | CE-Kennzeichnung auf dem physischen Gerät, in das die Firmware integriert ist |
| Benutzeroberfläche | Im Webinterface oder der Konfigurationsoberfläche des Geräts |
| Update-Portal | Auf der Download-Seite für Firmware-Updates |

## 7.7.6 Zusätzliche Kennzeichnungen

### Kennnummer der notifizierten Stelle

Wenn eine **notifizierte Stelle** an der Konformitätsbewertung beteiligt war (Modul B+C oder Modul H), muss deren **vierstellige Kennnummer** unmittelbar nach der CE-Kennzeichnung angebracht werden:

```
CE 1234
```

- Die Kennnummer wird von der notifizierten Stelle selbst oder auf deren Anweisung angebracht
- Die Nummer ist über die [NANDO-Datenbank](https://ec.europa.eu/growth/tools-databases/nando/) der EU-Kommission überprüfbar

::: tip MODUL A
Bei Selbstbewertung nach **Modul A** wird **keine** Kennnummer angebracht. Die CE-Kennzeichnung steht allein.
:::

### Herstellerangaben

Neben der CE-Kennzeichnung müssen angegeben werden:

- **Name oder Handelsmarke** des Herstellers
- **Postanschrift** des Herstellers (oder des Bevollmächtigten)
- **Eindeutige Produktidentifikation** (Typ, Version, Seriennummer)

## 7.7.7 Verbotene Kennzeichnungen

::: danger VERBOTEN
Folgende Kennzeichnungen sind **unzulässig** und können zu Sanktionen führen:

- **Irreführende Kennzeichnungen**, die mit der CE-Kennzeichnung verwechselt werden können (z.B. „China Export"-Zeichen)
- **CE-Kennzeichnung ohne durchgeführte Konformitätsbewertung**
- **CE-Kennzeichnung, die nicht alle anwendbaren Richtlinien abdeckt** (nur CRA, aber nicht andere relevante Vorschriften)
- **Kennnummer einer nicht beteiligten notifizierten Stelle**
- **Manipulierte oder gefälschte CE-Kennzeichnungen**
:::

## 7.7.8 Zusammenhang mit der EU-Konformitätserklärung

Die CE-Kennzeichnung und die EU-Konformitätserklärung (DoC) sind untrennbar verbunden:

| CE-Kennzeichnung | EU-Konformitätserklärung |
|-----------------|--------------------------|
| Sichtbares Zeichen am Produkt | Formales Dokument des Herstellers |
| Verweist implizit auf die DoC | Muss alle Details der Konformität enthalten |
| Keine inhaltliche Information | Enthält Produktidentifikation, Normen, Unterschrift |
| Pflicht am Produkt | Pflicht als Begleitdokument (oder URL darauf) |

Die CE-Kennzeichnung darf **nur** angebracht werden, wenn eine gültige EU-Konformitätserklärung existiert. Umgekehrt ist die DoC ohne CE-Kennzeichnung unvollständig.

> Template: [EU-Konformitätserklärung Template](/de/templates/eu-declaration-of-conformity)

## 7.7.9 Marktüberwachung und fehlende CE-Kennzeichnung

### Art. 56 -- Formale Nicht-Konformität

Eine fehlende, fehlerhafte oder irreführende CE-Kennzeichnung stellt eine **formale Nicht-Konformität** dar:

| Verstoß | Konsequenz |
|---------|-----------|
| CE-Kennzeichnung fehlt | Behörde fordert Anbringung; bei Nichtbefolgung: Vertriebsstopp |
| CE falsch angebracht (Proportionen, Sichtbarkeit) | Korrektur innerhalb gesetzter Frist |
| CE ohne Konformitätsbewertung | Vertriebsstopp + mögliche Sanktionen |
| Irreführende Kennzeichnung | Sanktionen bis zu 5 Mio. EUR oder 1% des Jahresumsatzes |
| Kennnummer der notifizierten Stelle fehlt (bei Modul B+C/H) | Formale Nicht-Konformität |

### Verfahren bei formaler Nicht-Konformität

```
Behörde stellt formale Nicht-Konformität fest
    |
    +-- Hersteller informiert (mit Fristsetzung)
    |
    +-- Hersteller stellt formale Konformität her
    |   +-- Konformität hergestellt --> Verfahren beendet
    |   +-- Nicht hergestellt --> Maßnahmen
    |       +-- Vertriebsstopp
    |       +-- Rücknahme / Rückruf
    |       +-- Sanktionen
```

> Details: [Marktüberwachung (Art. 52-58)](/de/overview/market-surveillance)

## 7.7.10 BAUER GROUP Umsetzung

### Software-Produkte

| Produkt-Typ | CE-Kennzeichnung Ort | Umsetzung |
|-------------|---------------------|-----------|
| Web-Anwendungen | About-Dialog, Footer | Anzeige von „CE" mit Link zur DoC |
| Desktop-Anwendungen | About-Dialog, Splash-Screen | CE-Logo im Info-Bereich |
| CLI-Tools | README, `--version`-Ausgabe | CE-Hinweis in der Versionsinformation |
| Bibliotheken/SDKs | README, Package-Metadaten | CE-Verweis in `package.json`, `pom.xml` o.ä. |

### Container Images

| Maßnahme | Umsetzung |
|----------|-----------|
| OCI-Annotation | `org.opencontainers.image.ce-marking` in Image-Metadaten |
| Dockerfile Label | `LABEL eu.cra.ce-marking="conformant"` |
| Image-README | CE-Kennzeichnung im Repository-README |
| Helm Chart | CE-Annotation in `Chart.yaml` Metadaten |

### Firmware

| Maßnahme | Umsetzung |
|----------|-----------|
| Gerätekennzeichnung | CE-Zeichen auf dem physischen Gerät |
| Webinterface | CE-Hinweis im Admin-Panel / Info-Seite |
| Update-Dokumentation | CE-Verweis in den Release Notes |

## 7.7.11 Checkliste: CE-Kennzeichnung

### Vor Anbringung

- [ ] Konformitätsbewertung erfolgreich abgeschlossen
- [ ] EU-Konformitätserklärung erstellt und unterzeichnet
- [ ] Technische Dokumentation vollständig (Annex VII)
- [ ] Alle anwendbaren EU-Harmonisierungsrechtsvorschriften berücksichtigt (nicht nur CRA)
- [ ] Bei Modul B+C/H: Bescheinigung der notifizierten Stelle erhalten

### Korrekte Anbringung

- [ ] CE-Kennzeichnung sichtbar, lesbar und dauerhaft
- [ ] Mindestgröße 5 mm eingehalten (bei physischen Produkten)
- [ ] Proportionen korrekt
- [ ] Kennnummer der notifizierten Stelle vorhanden (falls zutreffend)
- [ ] Herstellerangaben neben der CE-Kennzeichnung
- [ ] Produktidentifikation vorhanden

### Software-spezifisch

- [ ] CE-Kennzeichnung im About-Dialog / in der Info-Seite
- [ ] CE-Kennzeichnung in der Dokumentation
- [ ] CE-Verweis in README / Release Notes
- [ ] Für Container: OCI-Annotations / Labels gesetzt
- [ ] Link zur EU-Konformitätserklärung verfügbar

### Laufend

- [ ] CE-Kennzeichnung bei jedem Release geprüft
- [ ] Bei neuen Produktversionen: Konformität erneut bestätigt
- [ ] Keine irreführenden Kennzeichnungen vorhanden
- [ ] Dokumentation aktuell

## 7.7.12 Querverweise

- [EU-Konformitätserklärung](/de/conformity/eu-declaration)
- [Selbstbewertung (Modul A)](/de/conformity/self-assessment)
- [EU-Baumusterprüfung (Modul B+C)](/de/conformity/module-bc)
- [Umfassende Qualitätssicherung (Modul H)](/de/conformity/module-h)
- [Produktklassifizierung](/de/conformity/product-classification)
- [Marktüberwachung (Art. 52-58)](/de/overview/market-surveillance)
- [Pflichten der Importeure (Art. 15)](/de/overview/importer-obligations)
