# 1.1 Geltungsbereich

## 1.1.1 Anwendungsbereich

Gemäß Art. 2 CRA gilt diese Verordnung für Produkte mit digitalen Elementen, die auf dem EU-Markt bereitgestellt werden und deren bestimmungsgemäße oder vernünftigerweise vorhersehbare Verwendung eine direkte oder indirekte logische oder physische Datenverbindung zu einem Gerät oder Netz umfasst.

Drei Fragen entscheiden daher, ob ein Gegenstand erfasst ist:

1. Ist es ein **Produkt mit digitalen Elementen** (Art. 3 Nr. 1)? → 1.1.2
2. Verfügt es über eine **Datenverbindung** im Sinne des Art. 2 Abs. 1? → 1.1.6
3. Wird es im Rahmen einer kommerziellen Tätigkeit **in Verkehr gebracht** (Art. 3 Nr. 21, 22)? → 1.1.4

::: info LEITLINIEN DER KOMMISSION ANGEWENDET
Die Auslegungen in den Abschnitten 1.1.2 bis 1.1.8 folgen den Leitlinien der Kommission zur Anwendung des CRA vom 27. Juli 2026 (Kapitel 2). Diese Leitlinien sind rechtlich nicht verbindlich und waren zum Zeitpunkt der Erstellung noch nicht förmlich angenommen — zum genauen Status siehe [Leitlinien der EU-Kommission zum CRA](/de/clarifications/commission-guidance).
:::

## 1.1.2 Was ist ein Produkt mit digitalen Elementen?

Art. 3 Nr. 1 CRA definiert ein Produkt mit digitalen Elementen als *„ein Software- oder Hardwareprodukt und dessen Lösungen für die Datenfernverarbeitung, einschließlich Software- oder Hardwarekomponenten, die gesondert in Verkehr gebracht werden"*. Vier Familien sind erfasst:

| Familie | Beispiele |
|---------|-----------|
| Eigenständige Software | Apps und Computerprogramme, digital oder physisch vertrieben |
| Hardware mit eingebetteter Software | IoT-Geräte, Laptops, Tablets |
| Eigenständige Hardware | Integrierte Schaltkreise, Mainboards |
| Getrennt gelieferte Kombinationen, die zum Zusammenwirken bestimmt sind | Gerät und zugehörige Begleit-App |

### Der entscheidende Test für Software: läuft sie auf Nutzerseite?

Damit Software in den Anwendungsbereich des CRA fällt, muss sie **einem Nutzer bereitgestellt, von diesem bezogen und auf — oder als Teil von — einem elektronischen Informationssystem auf Nutzerseite betrieben werden**.

| Konstellation | Produkt mit digitalen Elementen? |
|---------------|:--------------------------------:|
| Software, die heruntergeladen, installiert oder anderweitig an den Nutzer geliefert wird und auf dessen System ausgeführt wird | **Ja** |
| Browser-Erweiterung | **Ja** |
| Mit Web-Technologien erstellte Anwendung, die für die **lokale** Installation paketiert ist | **Ja** |
| Aus einem App-Store heruntergeladene Mobil-App | **Ja** |
| **Ausschließlich über einen Browser** genutzte Webanwendung (einschließlich Progressive Web Apps) | **Nein** |
| Website, die Besuchern Informationen darstellt | **Nein** |
| Lokal installierter Client eines Webdienstes | **Ja** — und dessen Datenfernverarbeitung kann Teil des Produkts sein |

::: warning KORREKTUR GEGENÜBER DER BISHERIGEN PRAXIS
Software, die aus der Ferne ausgeführt und vom Nutzer lediglich *aufgerufen* wird, ist allein aus diesem Grund kein Produkt mit digitalen Elementen. Serverseitige Webanwendungen und Websites sind vom CRA **nur** erfasst, soweit sie die Funktionalität eines Produkts mit digitalen Elementen unterstützen — also soweit sie sich als [Fernverarbeitung](/de/overview/remote-data-processing) qualifizieren. Die Erwägungsgründe 11 und 12 CRA ziehen diese Unterscheidung; die Leitlinien der Kommission bestätigen sie.

Das stellt solche Dienste **nicht** außerhalb jeder Regulierung: Cloud- und Webdienste fallen unter [NIS2](/de/overview/nis2-integration).
:::

### Computercode als Produkt

Der CRA definiert Software als *„den Teil eines elektronischen Informationssystems, der aus Computercode besteht"* (Art. 3 Nr. 4). Das erfasst **sowohl Maschinencode als auch Quellcode**. Ob eine konkrete Bereitstellung von Code ein *Inverkehrbringen* darstellt, ist eine gesonderte Frage und hängt von der kommerziellen Tätigkeit ab:

| Bereitstellung von Code | In Verkehr gebracht? |
|-------------------------|:--------------------:|
| Freier und quelloffener Code in einem öffentlich zugänglichen Repository | **Grundsätzlich nein** → siehe [1.7 Open-Source-Steward](/de/overview/open-source-steward) |
| Unfertiger Code, der während Konzeption und Entwicklung geteilt wird (zum Testen oder Review) | **Nein** — die Herstellungsphase ist nicht abgeschlossen |
| Beispiel- oder Demo-Code in Tutorials und Schulungsmaterialien | **Nein** |
| Alpha-, Beta- oder Release-Candidate-Software nach Art. 4 Abs. 3, nur für die zum Testen und zur Rückmeldungssammlung erforderliche Zeit bereitgestellt | **Nein** — ausdrücklich von der Konformität ausgenommen |
| Quellcode, der einem Kunden als Produkt lizenziert wird, auch wenn dieser ihn noch anpassen und kompilieren muss | **Ja** — der Lieferant unterliegt dem CRA |

::: tip WO DIE VERANTWORTUNG ENDET
Lizenziert ein Unternehmen Quellcode an einen Kunden, bringt es diesen Code in Verkehr und unterliegt dem CRA. Es ist **nicht** für die CRA-Konformität der anschließenden Anpassungen und Kompilierung durch den Kunden verantwortlich.
:::

### Hardware und Software als ein Produkt

Ob Software Teil eines Produkts ist, bestimmt sich **nicht danach, wie oder wann sie ausgeliefert wird**, sondern danach, ob sie — im Lichte der Zweckbestimmung und der vernünftigerweise vorhersehbaren Verwendung — für die Ausführung der bestimmungsgemäßen Funktionen erforderlich ist.

Software, die erforderlich ist, um ein Produkt bestimmungsgemäß zu betreiben, zu konfigurieren, zu steuern oder zu nutzen, ist Teil dieses Produkts, **auch wenn sie über einen separaten Kanal bezogen wird** (App-Store, Download-Link oder ein anderer digitaler Kanal, nachdem die Hardware in Verkehr gebracht wurde). Ihr Inverkehrbringen erfolgt zeitgleich mit dem der Hardware-Einheiten.

> **Beispiel:** Ein Netzwerkdrucker wird als Hardware in Verkehr gebracht, während die für Druckaufträge und Konfiguration erforderlichen Treiber von der Website des Herstellers heruntergeladen werden. Drucker und Treiber bilden zusammen **ein einziges** Produkt mit digitalen Elementen, weil der Drucker ohne die Treiber seine Zweckbestimmung nicht erfüllen kann. Dasselbe gilt für ein Fitness-Wearable, dessen Messwerte nur über die Smartphone-App des Herstellers angezeigt und konfiguriert werden können.

## 1.1.3 Betroffene Produktkategorien

### Software-Produkte

| Kategorie | Beispiele | CRA-relevant |
|-----------|-----------|-------------|
| An Kunden zum Selbstbetrieb gelieferte Software | Container-Images, On-Premises-Deployments, Appliances | Ja |
| Desktop-Anwendungen | .NET WPF/WinForms, MAUI, lokal installierte Electron-Builds | Ja |
| Mobile Anwendungen | Über App-Stores vertriebene Apps | Ja |
| Browser-Erweiterungen | Lokal installierte Erweiterungen | Ja |
| NPM-Pakete | Öffentlich veröffentlichte Libraries | Ja (sofern in Verkehr gebracht — siehe [1.7](/de/overview/open-source-steward)) |
| NuGet-Pakete | .NET Libraries | Ja (sofern in Verkehr gebracht — siehe [1.7](/de/overview/open-source-steward)) |
| Von uns betriebene Web-Anwendungen / APIs, die nur über Browser oder Netz aufgerufen werden | Gehostete SaaS-Frontends, gehostete REST-APIs | Nein — allein deswegen kein Produkt mit digitalen Elementen; kann [RDPS](/de/overview/remote-data-processing) eines anderen Produkts sein und fällt unter NIS2 |

::: warning DIESELBE CODEBASIS KANN AUF BEIDEN SEITEN LIEGEN
Ein von der **BAUER GROUP betriebener** Microservice, den Kunden über das Netz aufrufen, ist selbst kein Produkt mit digitalen Elementen. **Derselbe** Microservice, der einem Kunden als Container-Image zum eigenen Betrieb ausgeliefert wird, **ist** eines. Unterscheidungsmerkmal ist, ob die Software dem Nutzer bereitgestellt wird und auf dessen Seite ausgeführt wird. Im Produktkatalog ist festzuhalten, welches der beiden Liefermodelle gilt.
:::

### Firmware / Embedded

| Kategorie | Plattform | CRA-relevant |
|-----------|-----------|-------------|
| ESP32 Firmware | ESP-IDF, Arduino | Ja |
| STM32 Firmware | HAL, CMSIS | Ja |
| Zephyr RTOS | Zephyr OS | Ja |
| PlatformIO Builds | Cross-Platform | Ja |

### Infrastruktur

| Kategorie | Beispiele | CRA-relevant |
|-----------|-----------|-------------|
| An Kunden ausgelieferte Docker-Compose-Stacks | Multi-Container-Deployments | Ja (als Teil des Produkts) |
| CI/CD Pipelines | GitHub Actions Workflows | Nein (internes Tooling — ausdrücklich von RDPS ausgenommen) |

## 1.1.4 Wann wird ein Produkt in Verkehr gebracht?

*Bereitstellung auf dem Markt* ist die Abgabe eines Produkts zum Vertrieb oder zur Verwendung auf dem Unionsmarkt im Rahmen einer kommerziellen Tätigkeit, entgeltlich oder unentgeltlich (Art. 3 Nr. 22). Ein Produkt wird **in Verkehr gebracht**, wenn es erstmals bereitgestellt wird (Art. 3 Nr. 21). Beide Begriffe beziehen sich auf **jedes einzelne Produkt**, nicht auf einen Produkttyp.

Für Hardware gelten die etablierten Kriterien des Blue Guide. Für **eigenständige Software** stellen die Leitlinien eine Regel auf, die das Release-Management unmittelbar betrifft:

::: info DIE KOPIEN-REGEL
Ein eigenständiges Softwareprodukt wird in Verkehr gebracht, wenn seine **Herstellungsphase abgeschlossen** ist und es **erstmals zum Vertrieb oder zur Verwendung** auf dem EU-Markt im Rahmen einer kommerziellen Tätigkeit abgegeben wird.

Der Hersteller gilt als hätte er **alle Kopien dieser Version zum selben Zeitpunkt in Verkehr gebracht**, unabhängig davon, wann die einzelne Kopie später heruntergeladen oder an einen Nutzer übertragen wird. Anders als bei physischen Gütern entsteht bei jeder Bereitstellung eine neue identische Kopie — es gibt keine Produktions- oder Lagerbeschränkung.
:::

| Szenario | Datum des Inverkehrbringens |
|----------|-----------------------------|
| Version 1.0.0 erstmals angeboten am 1. Januar 2028; Kunde 1 kauft am 1. Januar, Kunde 2 am 15. Januar | **Beide Kopien: 1. Januar 2028** |
| Version 1.0.1 erscheint am 15. Januar 2028 (keine wesentliche Änderung); Kunde 2 kauft 1.0.1 am 30. Januar | **Sowohl 1.0.0 als auch 1.0.1: 1. Januar 2028** |
| Eine spätere Iteration ist eine [wesentliche Änderung](/de/overview/substantial-modifications) | **Neues Inverkehrbringen** an dem Tag, an dem die geänderte Version bereitgestellt wird |

Zwei Grenzen dieser Regel:

- **Varianten sind keine Kopien.** Bietet ein Hersteller Varianten an, die sich in enthaltenen Komponenten, Konfigurationen oder aktivierten Funktionalitäten unterscheiden — Builds für verschiedene Betriebssysteme, Bundles mit unterschiedlichem Funktionsumfang —, sind diese Varianten **eigenständige Produkte mit digitalen Elementen** mit jeweils eigenem Inverkehrbringen.
- **Sie gilt nur für eigenständige Software.** Wird Software mit Hardware kombiniert, greift stattdessen die Kombinationsregel aus 1.1.2.

::: tip ARCHIVE HISTORISCHER VERSIONEN
Art. 13 Abs. 11 CRA erlaubt Herstellern, öffentliche Software-Archive zu unterhalten, die Nutzern Zugang zu historischen Versionen geben. In diesem Fall müssen Nutzer **klar und leicht zugänglich über die Risiken der Nutzung nicht unterstützter Software informiert** werden.
:::

## 1.1.5 Vor Geltung des CRA entworfene Produkte

Häufig wird gefragt, ob ein langlebiges Produkt, das Jahre vor dem 11.12.2027 entworfen wurde, für den Verkauf nach diesem Datum neu konstruiert werden muss. Das muss es nicht — eine dokumentierte Risikobewertung ist jedoch zwingend.

| Pflicht | Gilt? |
|---------|:-----:|
| Produkt neu konstruieren | **Nein**, sofern die Risikobewertung zeigt, dass die vorhandenen Maßnahmen geeignet und wirksam sind |
| Neue Sicherheitsfunktionen einführen | **Nein**, sofern nicht zur Behandlung identifizierter Risiken erforderlich |
| Cybersicherheits-Risikobewertung durchführen (Art. 13 Abs. 2) | **Ja** — mit Bestimmung, welche Anforderungen des Anhangs I Teil I gelten und wie sie umgesetzt werden |
| Konformitätsbewertung durchführen, EU-Konformitätserklärung ausstellen, CE-Kennzeichnung anbringen | **Ja**, vor dem Inverkehrbringen — unabhängig davon, ob eine Konstruktionsänderung resultierte |
| Historische Konstruktions- oder Testdokumentation nachträglich erstellen | **Nein** — das würde nicht zur Sicherheit des Produkts beitragen |
| Testergebnisse zu den ursprünglichen Konzeptions- und Entwicklungsphasen vorlegen | **Nein**, sofern die Risikobewertung zeigt, dass die vorhandenen Maßnahmen die Risiken behandeln |
| Einhaltung der Schwachstellenbehandlung nach Anhang I Teil II nachweisen | **Ja** |
| Risikobewertung aktuell halten (Art. 13 Abs. 3) und Nutzerinformationen bereitstellen (Art. 13 Abs. 18) | **Ja** |

::: info WENN DIE URSPRÜNGLICHE RISIKOBEWERTUNG NICHT BELEGBAR IST
Lässt sich nicht darlegen, wie eine Risikobewertung in der ursprünglichen Konzeptions- und Entwicklungsphase berücksichtigt wurde, ist Art. 13 Abs. 2 so zu verstehen, dass der Hersteller eine **aktuelle** Cybersicherheits-Risikobewertung durchzuführen und auf deren Grundlage nachzuweisen hat, dass das Produkt angemessene Sicherheitsmaßnahmen enthält — mit Blick auf die Minimierung von Cybersicherheitsrisiken, die Verhinderung von Vorfällen und die Minimierung ihrer Auswirkungen, einschließlich auf Gesundheit und Sicherheit der Nutzer.
:::

Teilen mehrere Varianten dieselbe Konstruktion und dasselbe Cybersicherheits-Risikoprofil, darf der Hersteller sich auf **repräsentative Nachweise für die Produktfamilie** stützen, statt jede Variante zu prüfen → siehe [3.4 Risikobewertung](/de/vulnerability-management/risk-assessment).

## 1.1.6 Die Grenze der Datenverbindung

Der Anwendungsbereich des CRA knüpft nicht an das Vorhandensein von Elektronik an, sondern an die **Fähigkeit zum Austausch digitaler Informationen**.

| Sachverhalt | Datenverbindung? |
|-------------|:----------------:|
| Ein Sender erzeugt gezielt digitale Symbole nach einem definierten Schema, und ein Empfänger kann sie als Daten interpretieren | **Ja** |
| Ein Ausgang wird lediglich ein- und ausgeschaltet, ohne dass die Zustände Daten darstellen sollen oder von einem digitalen Eingang gelesen werden | **Nein** |
| Elektrische oder elektronische Signale, die ausschließlich eine Funktion auslösen oder mit Energie versorgen, ohne digital kodierte Informationen zu übermitteln | **Nein** — das Produkt fällt nicht unter Art. 2 Abs. 1 |

## 1.1.7 Komplexe Systeme und Interoperabilitätszwänge

Ein System aus mehreren zusammenwirkenden Hardware- und Softwareelementen, das als **ein einziges** Produkt in Verkehr gebracht wird, ist ein Produkt mit digitalen Elementen. Lange Entwicklungszyklen, vor dem CRA geschlossene Verträge, Altkomponenten und vorgeschriebene Interoperabilitätsstandards nehmen solche Systeme **nicht** aus dem Anwendungsbereich. Sie aktivieren jedoch den risikobasierten Ansatz des CRA (Art. 13 Abs. 3) und Erwägungsgrund 55, der anerkennt, dass bestimmte grundlegende Anforderungen mit der Natur eines Produkts möglicherweise nicht vollständig vereinbar sind.

Ist eine bestimmte grundlegende Anforderung nicht anwendbar oder kann sie mit dem Stand der Technik nicht erfüllt werden, weil die Zweckbestimmung das Zusammenwirken mit bestehenden Abhängigkeiten oder die Einhaltung von Interoperabilitätsanforderungen verlangt, muss der Hersteller:

1. den konkreten Zwang **identifizieren und dokumentieren**;
2. die damit verbundenen Cybersicherheitsrisiken **bewerten**;
3. **alternative oder kompensierende Risikominderungsmaßnahmen umsetzen**, damit die Sicherheit des Produkts nicht untergraben wird;
4. Zwang, Risiken und Minderungsmaßnahmen transparent in der [technischen Dokumentation](/de/technical-documentation/) (Art. 31) und in den [Nutzerinformationen](/de/conformity/annex-ii-user-info) (Anhang II) **beschreiben**;
5. **regelmäßig neu prüfen**, ob der Zwang fortbesteht, und das Produkt aktualisieren, sobald er aufgehoben oder verringert werden kann.

> **Beispiel:** Ein Produkt muss mit bestehenden Systemen zusammenwirken, die nur ein älteres, weniger sicheres Protokoll unterstützen. Es darf dieses Protokoll implementieren, soweit dies für die Interoperabilität erforderlich ist, sofern die Risiken identifiziert und anderweitig gemindert werden. Kann das Produkt technisch **beide** unterstützen, wird erwartet, dass der Hersteller das sichere Protokoll implementiert und **standardmäßig aktiviert**; das weniger sichere Protokoll ist nur zulässig, soweit die Interoperabilität es erfordert.

::: tip NICHT AUF KOMPLEXE SYSTEME BESCHRÄNKT
Diese Überlegungen gelten sinngemäß für **alle** Produkte mit digitalen Elementen im Anwendungsbereich des CRA — nicht nur für komplexe Systeme.
:::

## 1.1.8 Ausnahmen (Art. 2 Abs. 2, Art. 2 Abs. 6 CRA)

Nicht unter den CRA fallen:

| Ausnahme | Detail |
|----------|--------|
| **Freie und quelloffene Software, die nicht im Rahmen einer kommerziellen Tätigkeit bereitgestellt wird** | Ausführliche Monetarisierungstests unter [1.7 Open-Source-Steward](/de/overview/open-source-steward) |
| **Software, die aus der Ferne ausgeführt und lediglich aufgerufen wird** | Webanwendungen und Websites — es sei denn, sie qualifizieren sich als [Fernverarbeitung](/de/overview/remote-data-processing) eines Produkts. Stattdessen von NIS2 erfasst |
| **Ersatzteile** (Art. 2 Abs. 6) | Teile zum Ersatz identischer Komponenten, nach denselben Spezifikationen gefertigt und gezielt zur Reparatur oder Verlängerung der Haltbarkeit eines bereits in Verkehr gebrachten Produkts geliefert → [1.8 Wesentliche Änderungen](/de/overview/substantial-modifications) |
| **Fahrzeuge und ihre ausschließlichen Komponenten** | Verordnung (EU) 2019/2144 und, über die Delegierte Verordnung (EU) 2025/1535, Verordnung (EU) Nr. 168/2013 → [Sektorrecht & bestehende Zertifikate](/de/clarifications/sectoral-law-and-certificates) |
| **Andere sektorspezifische EU-Rechtsvorschriften** | Z. B. Medizinprodukte, Zivilluftfahrt |
| **Unfertige Software nach Art. 4 Abs. 3** | Alpha-, Beta- und Release-Candidate-Versionen, nur für die zum Testen und zur Rückmeldungssammlung erforderliche Zeit bereitgestellt |

## 1.1.9 Übergangsregelung / Bestandsschutz (Art. 69)

Produkte mit digitalen Elementen, die **vor dem 11.12.2027** in Verkehr gebracht wurden, unterliegen den Anforderungen des CRA nur dann, wenn sie ab diesem Datum einer **wesentlichen Änderung** unterzogen werden. Bestehende Produkte genießen damit Bestandsschutz und fallen erst durch eine wesentliche Änderung am oder nach dem 11.12.2027 in den Anwendungsbereich.

> **Beispiel:** Eine 2026 veröffentlichte Firmware bleibt außerhalb des CRA-Anwendungsbereichs – bis ein Update im Jahr 2028 den Authentifizierungsmechanismus austauscht und damit eine wesentliche Änderung darstellt.

::: danger DIE MELDEPFLICHT GENIESST KEINEN BESTANDSSCHUTZ
Die Meldepflicht nach Art. 14 gilt ab **11.09.2026 für alle Produkte im Anwendungsbereich des CRA, einschließlich der vor dem 11.12.2027 in Verkehr gebrachten**, und besteht auch nach Ende des Support-Zeitraums fort. Der Bestandsschutz befreit solche Produkte von den Schwachstellenbehandlungspflichten des Anhangs I Teil II — **nicht** von der Meldepflicht. Siehe [4.3 ENISA-Meldeprozess](/de/incident-response/enisa-reporting).
:::

Was als wesentliche Änderung gilt, ist unter [Wesentliche Änderungen](/de/overview/substantial-modifications) beschrieben.

## 1.1.10 Produktkatalog

::: warning HANDLUNGSBEDARF
Für jedes CRA-relevante Produkt muss eine individuelle Einstufung und Dokumentation erfolgen. Verwenden Sie das Template unter [Produktbeschreibung](/de/technical-documentation/product-description) als Vorlage.
:::

Der Produktkatalog wird produktspezifisch gepflegt. Jedes Produkt erhält:

1. **Eindeutige Kennung** (Produktname + Version)
2. **Liefermodell** (an den Nutzer geliefert / von uns betrieben) — entscheidet, ob überhaupt ein Produkt mit digitalen Elementen vorliegt
3. **CRA-Produktklasse** (Standard / Klasse I / Klasse II / Kritisch), abgeleitet aus der [Kernfunktionalität](/de/conformity/product-classification)
4. **RDPS-Feststellung** (hat das Produkt eine [Fernverarbeitungslösung](/de/overview/remote-data-processing)?)
5. **Support-Zeitraum** (erwartete Nutzungsdauer; mindestens 5 Jahre)
6. **Verantwortlicher** (Product Owner / Security Lead)
7. **SBOM-Referenz** (Link zur aktuellen SBOM)
8. **Konformitätserklärung** (Link zur EU DoC)
