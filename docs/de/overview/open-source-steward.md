# 1.7 Freie & quelloffene Software und der Steward (Art. 3 Nr. 14, 3 Nr. 48, 24–25)

## 1.7.1 Überblick

Der CRA nimmt Open Source nicht pauschal aus. Er stellt zu **jedem einzelnen Projekt** eine Folge von drei Fragen — und die Antworten können für zwei Projekte derselben Organisation am selben Tag unterschiedlich ausfallen.

```
1. Qualifiziert sich die Software als FOSS nach Art. 3 Nr. 48?      → 1.7.2
   └── Nein → es gelten die allgemeinen Produktregeln

2. Liegt diese FOSS in IHRER Verantwortung?                          → 1.7.3
   └── Nein → Sie sind Beitragender; der CRA gilt für Sie nicht

3. Stellen Sie sie im Rahmen einer KOMMERZIELLEN TÄTIGKEIT bereit,
   d. h. wird sie in Verkehr gebracht?                               → 1.7.4
   ├── Ja   → Sie sind ihr HERSTELLER (volle Pflichten nach Art. 13)
   └── Nein → Sind Sie eine juristische Person, die dauerhafte
              Unterstützung für FOSS leistet, die für kommerzielle
              Tätigkeiten bestimmt ist?                              → 1.7.5
              ├── Ja   → Sie sind ihr STEWARD (Art. 24)
              └── Nein → Keine CRA-Pflichten für dieses Projekt
```

::: info LEITLINIEN DER KOMMISSION ANGEWENDET
Dieses Kapitel setzt Kapitel 3 der Leitlinien der Kommission vom 27. Juli 2026 um — die bislang detaillierteste Behandlung von Open Source unter dem CRA. Die Leitlinien sind rechtlich nicht verbindlich und waren zum Zeitpunkt der Erstellung noch nicht förmlich angenommen — siehe [Leitlinien der EU-Kommission zum CRA](/de/clarifications/commission-guidance).
:::

## 1.7.2 Was sich als FOSS qualifiziert (Art. 3 Nr. 48)

::: info RECHTSGRUNDLAGE
**Art. 3 Nr. 48 CRA:** *„‚freie und quelloffene Software' bezeichnet Software, deren Quellcode offen geteilt wird und die im Rahmen einer freien und quelloffenen Lizenz bereitgestellt wird, die alle Rechte einräumt, sie frei zugänglich, nutzbar, veränderbar und weiterverteilbar zu machen."*
:::

Zwei Bedingungen müssen **kumulativ** erfüllt sein:

| # | Bedingung | Detail |
|---|-----------|--------|
| 1 | **Eine freie und quelloffene Lizenz**, die den vollen Rechteumfang einräumt | Frei zugänglich, nutzbar, veränderbar und weiterverteilbar — das traditionelle FOSS-Verständnis |
| 2 | **Der Quellcode wird offen geteilt** | Öffentlich verfügbar, „upstream" oder „downstream" — nicht lediglich beschränkt oder bedingt bereitgestellt |

::: warning EINE FOSS-LIZENZ ALLEIN GENÜGT NICHT
Software, die unter einer freien und quelloffenen Lizenz vertrieben wird, **deren Quellcode aber nur zahlenden Kunden oder einem begrenzten Nutzerkreis zugänglich ist, ist keine FOSS** im Sinne des Art. 3 Nr. 48. Der Zugang zum Quellcode ist notwendige Voraussetzung für die Ausübung der übrigen Rechte: Ohne ihn lässt sich die Software praktisch weder verändern noch sinnvoll weiterverwenden.

Die Leitlinien benennen keine konkreten Lizenzen als kompatibel oder inkompatibel. Der Test gilt den Lizenzbedingungen **und** der tatsächlichen Verfügbarkeit des Codes.
:::

## 1.7.3 Liegt die FOSS in Ihrer Verantwortung?

FOSS-Entwicklung umfasst typischerweise viele Beitragende, dezentrale Zusammenarbeit und eine Trennung zwischen Beitrag und Entscheidungsfindung. Der CRA knüpft Pflichten nur an diejenigen, die das Projekt tatsächlich steuern.

| Rolle | Test | CRA-Folge |
|-------|------|-----------|
| **Maintainer** | Veröffentlicht die FOSS **und** übt primäre Kontrolle über Entwicklung, Releases und Vertriebsentscheidungen aus | Die FOSS liegt in seiner Verantwortung |
| **Beitragender (Contributor)** | Steuert Quellcode bei, kontrolliert aber weder Releases noch Roadmaps oder Governance-Entscheidungen | Die FOSS liegt **nicht** in seiner Verantwortung — der CRA gilt für ihn insoweit nicht |

::: warning COMMIT-RECHTE SIND KEINE KONTROLLE
Das bloße Bestehen technischer Berechtigungen wie Commit-Zugriff **genügt nicht**, um Verantwortung zu begründen. Verantwortlich sind diejenigen, die das Projekt veröffentlichen und kontrollieren.

> **Beispiel:** Eine Entwicklerin — als Privatperson oder als Beschäftigte eines Unternehmens — reicht einen Pull Request mit einem Sicherheitspatch oder einer neuen Funktion ein. Die Maintainer prüfen, akzeptieren und mergen ihn und nehmen ihn in ein Release auf. Die Einreichende ist **Beitragende** und unterliegt für dieses Projekt nicht dem CRA.
:::

## 1.7.4 Wird sie in Verkehr gebracht? Die Monetarisierungstests

Steht fest, dass das Projekt in Ihrer Verantwortung liegt, stellt sich die Frage, ob Sie es **im Rahmen einer kommerziellen Tätigkeit** bereitstellen — was das Inverkehrbringen ausmacht.

Erwägungsgrund 18 CRA setzt die Grundlinie: *„die bloßen Umstände, unter denen das Produkt mit digitalen Elementen entwickelt wurde, oder die Art seiner Finanzierung sollten nicht berücksichtigt werden"*, und *„die Bereitstellung von Produkten mit digitalen Elementen, die als freie und quelloffene Software gelten und von ihren Herstellern nicht monetarisiert werden, sollte nicht als kommerzielle Tätigkeit gelten"*.

### Übersicht der Tests

| Sachverhalt | In Verkehr gebracht? |
|-------------|:--------------------:|
| Preis für die Software selbst, z. B. für vorkompilierte Binärdateien | **Ja** |
| Kostenlose „Community"-Version neben einer kostenpflichtigen Version (auch Open Core) | **Kostenpflichtige ja; Community-Version nein** |
| Software, über die der Herausgeber andere Produkte oder Dienste monetarisiert (Werbung, Provisionen, Abonnements, kostenpflichtige Zusatzkapazität) | **Ja** |
| Nutzung ist bedingt durch die Verarbeitung personenbezogener Daten zu anderen Zwecken als ausschließlich zur Verbesserung von Sicherheit, Kompatibilität oder Interoperabilität | **Ja** |
| Frei herunterladbare Software mit **optionalen**, gesondert erworbenen professionellen Dienstleistungen | **Nein** |
| Kostenpflichtige Edition oder Enterprise-Version, deren Zugang Vorteile wie technische Unterstützung oder Leistungsoptimierung einschließt | **Ja** |
| Eine **natürliche Person** bündelt technische Unterstützung mit dem Zugang, wobei der Preis nur die tatsächlichen Kosten deckt | **Nein** |
| Technische Unterstützung für FOSS, die **nicht** in Ihrer Verantwortung liegt, ohne wesentliche Änderung | **Nein** |
| Freiwillige Spenden, auch per Spendenlink, selbst wenn sie die Kosten übersteigen | **Nein** (Inverkehrbringen unwahrscheinlich) |
| Spenden, die faktisch Zugangsvoraussetzung zur Software, zu wesentlichen Funktionalitäten oder zu Updates sind | **Ja** |
| Entwicklung, die von Dritten bezahlt, gesponsert oder finanziert wurde, wenn das Ergebnis offen geteilt und frei verfügbar ist | **Nein** |
| Veröffentlichung durch eine gemeinnützige Einrichtung, deren Erträge nach Kosten vollständig gemeinnützigen Zwecken dienen | **Nein** |
| FOSS, die zur Integration durch andere Hersteller bestimmt und vom Herausgeber nicht monetarisiert wird | **Nein** |

### Preis verlangen und die Community/Bezahl-Trennung

Verlangt der Herausgeber einen Preis für die Software selbst, bringt er ein Produkt in Verkehr und ist dessen **Hersteller**.

Viele Herausgeber bieten neben einer kostenpflichtigen eine kostenlose „Community"-Version mit nahezu identischer Codebasis an. Diese gelten als **unterschiedliche Produkte**:

- Die **kostenpflichtige Version** wird monetarisiert und damit in Verkehr gebracht → Herstellerpflichten.
- Die **kostenlose/Community-Version** wird nicht monetarisiert und damit nicht in Verkehr gebracht.

Das gilt auch, wenn die kostenpflichtige Version eine *erweiterte* kommerzielle Fassung ist, welche die kostenlose Codebasis ergänzt oder in ein umfassenderes Produkt einbezieht — das **Open-Core**-Modell.

::: tip DIE WENDUNG BEI JURISTISCHEN PERSONEN
Ist der Herausgeber der Community-Version eine **juristische Person**, unterliegt er für diese kostenlose Version zusätzlich den **Steward-Pflichten**. Ist der Herausgeber eine **natürliche Person**, fällt die kostenlose Version vollständig aus dem CRA heraus.
:::

### Monetarisierung anderer Dienste oder personenbezogener Daten

| Beispiel | Bewertung |
|----------|-----------|
| Eine freie und quelloffene **Marktplatz-Anwendung**, die Käufe ermöglicht und dem Herausgeber Werbeeinnahmen, Provisionen oder Abonnementgebühren einbringt | In Verkehr gebracht |
| Ein freies und quelloffenes **VPN**, bei dem Nutzer für zusätzliche Server oder dedizierte IP-Adressen zahlen können | In Verkehr gebracht |
| Eine freie und quelloffene **Fitness-Tracking-App**, deren Nutzung an die Verarbeitung personenbezogener Daten für zielgerichtete Werbung oder Analysen ohne Bezug zu Sicherheit, Kompatibilität oder Interoperabilität geknüpft ist | In Verkehr gebracht |

### Support-Dienstleistungen

Das bloße Angebot kostenpflichtigen Supports neben einem FOSS-Projekt macht dieses **nicht** zu einer kommerziellen Bereitstellung. Zu Support-Dienstleistungen zählen Beratung, Schulung und professionelle Dienstleistungen zu Nutzung, Dokumentation, Konfiguration und Bereitstellung der Software.

::: info DER ENTSCHEIDENDE FAKTOR
Ist **der Zugang zur FOSS selbst — einschließlich ihrer Wartung — an eine Vergütung geknüpft**? Kann die Software frei heruntergeladen und installiert werden und können Nutzer *optional* professionelle Dienstleistungen hinzukaufen, wird sie nicht in Verkehr gebracht. Ist der Zugang zu einer bestimmten Version, einschließlich Vorteilen wie technischer Unterstützung oder Leistungsoptimierung, an Zahlung geknüpft, wird sie es — unabhängig davon, ob funktional gleichwertige Software auch kostenlos unter einer FOSS-Lizenz verfügbar ist.
:::

Zwei Präzisierungen sind praktisch bedeutsam:

- **Natürliche Personen und tatsächliche Kosten.** Bei einer natürlichen Person macht selbst die direkte Bündelung technischer Unterstützung mit dem Zugang die Tätigkeit nicht kommerziell, sofern der verlangte Preis nur der Deckung **tatsächlicher Kosten** dient. Dazu zählen Konzeption, Entwicklung und Wartung — und ausdrücklich die **angemessenen Lebenshaltungskosten** der Person. Wer als natürliche Person FOSS veröffentlicht und technische Unterstützung anbietet, um seine Kosten zu decken und eine faire Vergütung zu erzielen, bringt sie allein deswegen nicht in Verkehr.
- **Unterstützung für fremde Projekte.** Wer technische Unterstützung für FOSS anbietet, die **nicht** in seiner Verantwortung liegt, bringt sie nicht in Verkehr — es sei denn, er ändert sie im Zuge dieser Unterstützung wesentlich (Art. 22). Ein Dienstleister, der einem Kunden bei der Installation von FOSS auf dessen On-Premises-Server hilft, ohne wesentliche Änderung, bringt sie nicht in Verkehr.

### Spenden

::: tip SPENDEN SIND WEITGEHEND UNPROBLEMATISCH
*„Die Annahme von Spenden ohne Gewinnerzielungsabsicht sollte nicht als kommerzielle Tätigkeit gelten"* (Erwägungsgrund 15). Das bloße Einbinden eines Links zu einer Spendenplattform ist **keine** Gewinnerzielungsabsicht — **selbst wenn die eingenommene Summe die Kosten** für Konzeption, Entwicklung und Bereitstellung übersteigt. Dazu zählen auch eine angemessene Vergütung von einer juristischen Person angestellter Beitragender sowie die angemessenen Lebenshaltungskosten einer natürlichen Person.

Da Spenden im Zeitverlauf schwanken, ist ein gewisses Maß an Flexibilität angebracht. FOSS, die **ausschließlich** über Spenden getragen wird, wird *„voraussichtlich nicht als in Verkehr gebracht gelten"*.
:::

Die Ausnahme betrifft Fälle, in denen Spenden bei Gesamtbetrachtung **faktisch einem Preis gleichkommen**:

| Muster | Bewertung |
|--------|-----------|
| Herunterladbare Releases und Sicherheitsupdates nur **für Spender**; Nichtspender erhalten die aktuelle Version nicht | In Verkehr gebracht — die Spende ist Zugangsvoraussetzung |
| Quellcode öffentlich, aber vorkompilierte Binärdateien, regelmäßige Updates und garantierte Sicherheitsfixes **nur für Spender** | In Verkehr gebracht — Spenden sind an wesentliche Aspekte des Produkts geknüpft |
| Spenden sind mit vertraglichen Vorteilen oder exklusiven Vergünstigungen über Community-Vorteile hinaus verbunden | In Verkehr gebracht |

### Finanzierung und Sponsoring

Dass ein Dritter die Entwicklung bezahlt, gesponsert oder anderweitig finanziert hat, entscheidet für sich genommen **nicht** über das Inverkehrbringen. Das gilt gleichermaßen für Zuschüsse, Bug Bounties, Sponsoring, Dienstleistungsverträge und bezahlte Entwicklungsarbeit.

Wird das Ergebnis offen geteilt und ist es für alle frei zugänglich, nutzbar, veränderbar und weiterverteilbar und wird es nicht anderweitig monetarisiert, wird es **nicht** in Verkehr gebracht. Das finanzierende Unternehmen muss — wie jeder Integrator — bei der Integration **Sorgfaltspflichten nach Art. 13 Abs. 5** ausüben.

### Gemeinnützige Einrichtungen

Ist der Herausgeber eine gemeinnützige Organisation, die *„so aufgestellt ist, dass sichergestellt ist, dass alle Erträge nach Abzug der Kosten zur Verwirklichung gemeinnütziger Ziele verwendet werden"* (Erwägungsgrund 18), wird die von ihr veröffentlichte FOSS **nicht** in Verkehr gebracht. Erfüllt sie die Steward-Definition, unterliegt sie Art. 24.

> **Beispiel:** Eine juristische Person veröffentlicht einen freien und quelloffenen Browser, der direkt über Suchmaschinen-Partnerschaften monetarisiert wird, dessen Erträge nach Kosten aber vollständig gemeinnützigen Zwecken dienen. Der Browser gilt **nicht** als in Verkehr gebracht; der Herausgeber ist sein **Steward**.

### FOSS zur Integration durch andere Hersteller

Wird FOSS von einer identifizierbaren Person veröffentlicht, ist aber zur Integration durch andere Hersteller in deren Produkte bestimmt, wird sie **nicht** auf dem EU-Markt in Verkehr gebracht — es sei denn, der Herausgeber monetarisiert sie zusätzlich. Wird sie nicht in Verkehr gebracht, unterliegt eine sie veröffentlichende juristische Person den **Steward**-Pflichten, sofern sie dauerhaft Unterstützung leistet.

## 1.7.5 Der Open-Source-Steward (Art. 3 Nr. 14)

::: info RECHTSGRUNDLAGE
**Art. 3 Nr. 14 CRA:** *„‚Verwalter quelloffener Software' bezeichnet eine juristische Person, die kein Hersteller ist und die den Zweck oder das Ziel verfolgt, auf nachhaltige Weise systematisch Unterstützung für die Entwicklung bestimmter Produkte mit digitalen Elementen zu leisten, die als freie und quelloffene Software gelten und für kommerzielle Tätigkeiten bestimmt sind, und die die Tragfähigkeit dieser Produkte sicherstellt."*

**Art. 24 CRA:** Pflichten des Verwalters quelloffener Software. **Art. 25 CRA:** Sicherheitsattestierung.
:::

### Voraussetzungen (kumulativ)

1. **Juristische Person** (keine natürliche Person)
2. **Nicht Hersteller** dieses konkreten Projekts — bringt es also nicht in Verkehr
3. **Systematische Unterstützung auf nachhaltiger Basis** für dessen Entwicklung
4. Das Projekt ist **für kommerzielle Tätigkeiten bestimmt** — etwa zur Integration in kommerzielle Dienste oder in monetarisierte Produkte
5. Die Einrichtung **stellt die Tragfähigkeit** des Projekts sicher

### Die Rolle gilt je Projekt, nicht je Organisation

::: warning EINE EINRICHTUNG, VERSCHIEDENE ROLLEN
Steward für ein bestimmtes Projekt zu sein, macht eine Einrichtung **nicht** zum Steward für alles Weitere, was sie veröffentlicht. Dieselbe juristische Person kann gleichzeitig sein:

- **Hersteller** von Projekt A (das sie monetarisiert),
- **Steward** von Projekt B (veröffentlicht, nicht monetarisiert, für kommerzielle Tätigkeiten bestimmt) und
- für Projekt C **überhaupt keinen CRA-Pflichten** unterliegen (nicht in Verkehr gebracht und von ihr nicht systematisch unterstützt, oder nicht für kommerzielle Tätigkeiten bestimmt).

Dazu zählt auch die in 1.7.4 beschriebene Community/Bezahl-Trennung: Der Herausgeber ist **Hersteller der kostenpflichtigen Version** und **Steward der Community-Version**.
:::

### Drei Stufen dauerhafter Unterstützung — und die daraus folgenden Meldepflichten

Alle Stewards müssen Art. 24 Abs. 1 und 2 einhalten. Wie weit die Meldepflichten des **Art. 14 Abs. 1, 3 und 8** gelten, richtet sich nach der Art der geleisteten Unterstützung, gemäß **Art. 24 Abs. 3**:

| Stufe | Typische Unterstützung | Art. 14 Abs. 1 aktiv ausgenutzte Schwachstellen melden | Art. 14 Abs. 3 schwerwiegende Vorfälle melden | Art. 14 Abs. 8 Nutzer informieren |
|-------|------------------------|:---:|:---:|:---:|
| **1 — Nicht-technisch** | Markenverwaltung, Governance-Regeln, Community-Veranstaltungen, Spendensammlung | **Nein** — nicht an der Entwicklung beteiligt | **Nein** — stellt keine Netz- und Informationssysteme für die Entwicklung bereit | — |
| **2 — IT-Infrastruktur** | Hosting von Quellcode-Repositories, Versionsverwaltung, Erzeugung von Signaturschlüsseln | **Nein** | **Ja** — schwerwiegende Vorfälle dieser Infrastruktur, die die Sicherheit von Produkten beeinträchtigen | **Soweit angemessen** alle Nutzer informieren (z. B. allgemeine Bekanntmachung) |
| **3 — Entwicklungsressourcen** | Anstellung von Entwicklern, Koordination der Entwicklungsarbeit, Review oder Merge von Code, Release-Management, Bearbeitung von Schwachstellenmeldungen und Sicherheitspatches | **Ja** | **Ja** | **Soweit angemessen** alle Nutzer informieren; bei direkter Beziehung zu betroffenen Nutzern diese **unmittelbar** informieren |

::: tip WAS EIN STEWARD DER STUFE 1 DENNOCH TUN SOLLTE
Auch wenn ein Steward nicht zur Meldung aktiv ausgenutzter Schwachstellen verpflichtet ist, **sollte er die Information bei Kenntniserlangung an die Maintainer des Projekts weitergeben** — im Einklang mit seiner Cybersicherheitsrichtlinie. Maintainer und Stewards sollten zudem eine **freiwillige Meldung nach Art. 15** erwägen. Stewards der Stufe 2 sollten ebenfalls die korrekte Schwachstellenbehandlung fördern und freiwillige Meldung erwägen.
:::

::: warning AUSLÖSER IST DIE KENNTNIS DER AUSNUTZUNG, NICHT DES FEHLERS
Die Meldepflicht eines Stewards nach Art. 24 Abs. 3 entsteht **mit Kenntnis der aktiven Ausnutzung** — nicht bereits deshalb, weil eine Schwachstelle in der Codebasis existiert. Da FOSS-Komponenten typischerweise nachgelagert integriert werden, erlangt ein Steward diese Kenntnis meist über Meldungen Dritter: Ein Hersteller entdeckt die Ausnutzung der Komponente in seinem eigenen Produkt und meldet sie nach oben, oder ein Nutzer bzw. Sicherheitsforscher meldet Hinweise auf Ausnutzung.
:::

### Statusänderungen

| Änderung | Folge |
|----------|-------|
| Die Einrichtung **stellt** die systematische, dauerhafte Unterstützung **ein** | Sie erfüllt die Steward-Definition möglicherweise nicht mehr und unterliegt den entsprechenden Pflichten möglicherweise nicht mehr. Ihr wird **empfohlen, die Statusänderung für dieses Projekt klar zu kommunizieren**. |
| Ein Steward entscheidet sich, das Projekt direkt zu **monetarisieren** | Er bringt das Produkt in Verkehr und gilt **ab dem Datum des Inverkehrbringens als dessen Hersteller** — **nicht** jedoch für frühere Versionen, für die er als Steward gehandelt hat. |

## 1.7.6 Pflichten des Stewards (Art. 24–25)

### 1. Cybersicherheitsrichtlinie (Art. 24 Abs. 1)

- Eine dokumentierte Cybersicherheitsrichtlinie festlegen und umsetzen, die die Entwicklung sicherer Produkte und die wirksame Behandlung von Schwachstellen fördert
- Zusammenarbeit mit Marktüberwachungsbehörden fördern

### 2. Schwachstellenbehandlung und Meldung (Art. 24 Abs. 1, 3)

- Aktiv ausgenutzte Schwachstellen und schwerwiegende Vorfälle **in dem in der Stufentabelle unter 1.7.5 bestimmten Umfang** melden — dort, wo die Stufe greift, sind dies Pflichten, keine freiwilligen Handlungen
- Koordinierte Offenlegung von Schwachstellen (CVD) ermöglichen
- Eine Kontaktstelle für Schwachstellenmeldungen bereitstellen (SECURITY.md oder gleichwertig)
- Freiwillige Meldung nach Art. 15 erwägen, wo keine Pflicht besteht

### 3. Zusammenarbeit mit Behörden (Art. 24 Abs. 2)

- Auf Anfrage Dokumentation bereitstellen
- Bei der Beseitigung von Sicherheitsrisiken unterstützen
- Informationen über Schwachstellen teilen

### 4. Sicherheitsattestierung (Art. 25)

Stewards können eine **freiwillige Sicherheitsattestierung** initiieren: Dokumentation angewandter Cybersicherheitspraktiken, Nachweis von Prozessen zur Schwachstellenbehandlung und — optional — Attestierung durch Dritte.

## 1.7.7 Beitragende, Integratoren und nachgelagerte Nutzung

| Aussage | Position unter dem CRA |
|---------|------------------------|
| Wer Quellcode zu FOSS beisteuert, die nicht in seiner Verantwortung liegt | **Unterliegt dem CRA nicht** für dieses Projekt (Erwägungsgrund 18) |
| Ein Hersteller, der FOSS-Komponenten in sein eigenes Produkt integriert | Wird **nicht** für deren individuelle CRA-Konformität verantwortlich — **auch dann nicht, wenn er Quellcode zu ihrer Wartung beisteuert** |
| Eine FOSS-Komponente, die in monetarisierte Produkte integriert wird | Ihr eigener Status bleibt **unberührt**. Ob der CRA für sie gilt, hängt **allein** davon ab, ob ihr Herausgeber sie in Verkehr bringt |
| Maintainer von FOSS, die nicht in Verkehr gebracht wird | Haben **keine Pflichten** gegenüber Einrichtungen, die ihre Komponenten integrieren |

Was Integratoren für ihre **eigenen** Produkte tun müssen:

1. Den CRA für das Produkt als Ganzes einhalten
2. **Sorgfaltspflichten** für integrierte Komponenten ausüben (Art. 13 Abs. 5) → [5.3 Drittanbieter-Bewertung](/de/supply-chain/third-party-assessment)
3. **Schwachstellen nach oben melden** und **Sicherheitsfixes teilen** (Art. 13 Abs. 6) → [3.5 Anforderungen an die Schwachstellenbehandlung](/de/vulnerability-management/handling-requirements)

## 1.7.8 Rollenabgrenzung

| Rolle | CRA-Status | Pflichten |
|-------|-----------|-----------|
| **Beitragender** (keine Kontrolle über Releases/Governance) | Keine CRA-Rolle | Keine |
| **Maintainer, natürliche Person, nicht monetarisierend** | Außerhalb des Anwendungsbereichs | Keine |
| **Maintainer, natürliche Person, monetarisierend** | **Hersteller** | Volle Pflichten nach Art. 13 |
| **Maintainer, juristische Person, nicht monetarisierend, Projekt für kommerzielle Tätigkeiten bestimmt, dauerhafte Unterstützung** | **Steward** | Art. 24–25, gestuft nach 1.7.5 |
| **Maintainer, juristische Person, nicht monetarisierend, keine dauerhafte Unterstützung oder nicht für kommerzielle Tätigkeiten bestimmt** | Keine CRA-Rolle | Keine |
| **Herausgeber einer monetarisierten Version** | **Hersteller** dieser Version | Volle Pflichten nach Art. 13 (und Steward der Community-Version, sofern juristische Person) |
| **Integrator von FOSS in eigenes Produkt** | **Hersteller** des eigenen Produkts | Volle Pflichten für das eigene Produkt + Sorgfaltspflicht nach Art. 13 Abs. 5 + Upstream-Meldung nach Art. 13 Abs. 6 |

## 1.7.9 Szenarienkatalog

| # | Szenario | Ergebnis |
|---|----------|----------|
| 1 | Eine Einzelentwicklerin veröffentlicht FOSS unter eigenem Namen, ohne Preis, mit Spendenlink. Unternehmen B, C und D integrieren sie und spenden freiwillig zur Aufrechterhaltung der Wartung. | **Nicht in Verkehr gebracht.** Die Entwicklerin hat keine CRA-Pflichten. B, C und D üben Sorgfaltspflichten nach Art. 13 Abs. 5 aus. |
| 2 | Die gemeinnützige Stiftung F veröffentlicht eine FOSS-Komponente zur Integration in kommerzielle Produkte und verpflichtet sich zu dauerhafter Unterstützung. Unternehmen A und B stellen Entwicklerzeit bei. | **Nicht in Verkehr gebracht.** F ist **Steward** (Art. 24). A, B und C üben Sorgfaltspflichten aus. |
| 3 | Unternehmen A entwickelt eine FOSS-Komponente für eigene Produkte, veröffentlicht und pflegt sie zusätzlich separat und monetarisiert sie nicht. B, C und D integrieren sie und stellen Zeit bei. | **Nicht in Verkehr gebracht.** A ist **nicht** ihr Hersteller, sondern ihr **Steward**. |
| 4 | Unternehmen A veröffentlicht FOSS und bietet eine **kostenpflichtige Version** mit technischer Unterstützung und Leistungsoptimierung an. B, C, D tragen bei; die Kontrolle bleibt bei A. | A ist **Hersteller** der kostenpflichtigen Version (es sei denn, A ist eine qualifizierte gemeinnützige Einrichtung; dann Steward). B, C, D haben für dieses Projekt keine Pflichten. |
| 5 | Unternehmen A veröffentlicht und pflegt FOSS zur Integration durch andere; kein Preis, keine Verarbeitung personenbezogener Daten, kein Supportverkauf. Unternehmen B trägt Code bei und bietet unabhängig davon Support-Dienstleistungen an. | A ist **Steward**. B hat für dieses Projekt **keine Pflichten** nach dem CRA. |
| 6 | Eine gemeinnützige Einrichtung veröffentlicht eine FOSS-Komponente mit dauerhafter Unterstützung; die Wartung wird über Forschungsförderung finanziert, neue Funktionen über Spenden und Partnerprojekte mit integrierenden Herstellern, die in die Codebasis einfließen. | Die gemeinnützige Einrichtung ist **Steward**. Ein Hersteller, der eine Funktion finanziert hat, wird **nicht** Hersteller der Komponente; er übt bei der Integration Sorgfaltspflichten aus. |
| 7 | Eine gemeinnützige Einrichtung veröffentlicht ein FOSS-SDK, finanziert über Mitgliedsbeiträge; Beschäftigte der Mitglieder tragen Code bei. Hersteller nutzen das SDK zum Bau von Produkten. | Die gemeinnützige Einrichtung ist **Steward**. Die Mitglieder sind **nicht** für die CRA-Konformität des SDK verantwortlich. Hersteller üben Sorgfaltspflichten aus. |
| 8 | Eine Einzelperson veröffentlicht eine FOSS-Bibliothek in einem öffentlichen Paket-Repository mit Spendenlink; ein Hersteller lädt sie kostenlos herunter und integriert sie. | Weder die Entwicklerin noch das Paket-Repository haben Pflichten. Der Hersteller übt Sorgfaltspflichten aus. |

## 1.7.10 Position der BAUER GROUP

### Wann ist die BAUER GROUP **kein** Steward?

- Nutzung von Open-Source-Bibliotheken als **Abhängigkeiten** → nur Herstellerpflichten für das eigene Produkt
- Mitwirkung an OSS-Projekten als **Beitragender** → keine Steward-Rolle
- Veröffentlichung eigenen Codes **mit Monetarisierung** → die BAUER GROUP ist dessen **Hersteller**

### Wann **könnte** die BAUER GROUP Steward sein?

- Veröffentlichung einer FOSS-Komponente **ohne Monetarisierung**, bestimmt zur Integration in Produkte Dritter, bei systematischer Pflege → Steward dieser Komponente
- Angebot einer **Community-Version** neben einer kostenpflichtigen Version → Steward der Community-Version, Hersteller der kostenpflichtigen
- Systematische Förderung und Pflege eines externen OSS-Projekts (eigene Beschäftigte als Maintainer, Infrastruktur-Sponsoring)
- Gründung einer eigenen Stiftung, die OSS-Projekte verwaltet

::: warning HANDLUNGSBEDARF — FESTSTELLUNG JE PROJEKT
Die Steward-Frage ist **projektweise** zu beantworten, nicht einmalig für die Organisation. Für jedes veröffentlichte FOSS-Repository unter Kontrolle der BAUER GROUP ist eine dokumentierte Feststellung erforderlich: *Hersteller*, *Steward* oder *keine CRA-Rolle* — mit dem Monetarisierungstest, der zu diesem Ergebnis geführt hat, und einem Datum.
:::

::: tip AKTUELLE EINSCHÄTZUNG
Nach derzeitigem Kenntnisstand agiert die BAUER GROUP überwiegend als **Hersteller** (eigener Code) und **Nutzer** (OSS-Abhängigkeiten). Eine Steward-Rolle wird derzeit nicht beansprucht — veröffentlichte Repositories, die nicht monetarisiert und zur Integration durch Dritte bestimmt sind, müssen jedoch anhand 1.7.5 geprüft werden, da genau diese Kombination einen Steward begründet.
:::

### Auswirkungen auf die Lieferkette

1. **OSS-Abhängigkeiten prüfen:** Gibt es einen Steward für kritische Abhängigkeiten?
2. **Schwachstellenmeldungen:** Stewards melden aktiv ausgenutzte Schwachstellen, wo Stufe 3 greift — diese Kanäle verfolgen
3. **Sicherheitsattestierungen:** Bei der Bewertung von OSS-Komponenten attestierte Software bevorzugen
4. **Risikobewertung:** OSS ohne Steward oder aktive Community bedeutet höheres Risiko

> Siehe: [Lieferkettensicherheit](/de/supply-chain/) und [Drittanbieter-Bewertung](/de/supply-chain/third-party-assessment)

## 1.7.11 Erleichterung der Konformitätsbewertung für FOSS (Art. 32 Abs. 5)

::: tip WICHTIGE PRODUKTE, DIE FOSS SIND
Wichtige Produkte mit digitalen Elementen der Klasse I oder II, die **als FOSS gelten und in Verkehr gebracht werden**, dürfen nach Art. 32 Abs. 5 die Konformitätsbewertungsverfahren der **Standardkategorie** anwenden — die Klassifizierung allein zwingt sie nicht in die strengeren Verfahren. Siehe [7.1 Produktklassifizierung](/de/conformity/product-classification).
:::

## 1.7.12 Sanktionen

| Verstoß | Höchststrafe |
|---------|--------------|
| Nichterfüllung der Pflichten nach Art. 24 | Bis zu 5 Mio. EUR oder 1 % des Jahresumsatzes |

*Die besondere Rolle und der nichtkommerzielle Charakter der Steward-Tätigkeit werden bei der Bemessung berücksichtigt.*

## 1.7.13 Relevante Entwicklungen

- Die Kommission kann **Durchführungsrechtsakte** erlassen, die die Sicherheitsattestierung weiter konkretisieren (Art. 25)
- Für Stewards relevante harmonisierte Normen befinden sich in Entwicklung
- Weitere Leitlinien der Kommission nach Art. 26 bleiben möglich

> Quelle und Rechtsstatus der Auslegungen auf dieser Seite: [Leitlinien der EU-Kommission zum CRA](/de/clarifications/commission-guidance).
