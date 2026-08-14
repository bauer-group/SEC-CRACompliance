# 1.8 Wesentliche Änderungen & Ersatzteile (Art. 3 Nr. 30, 21–22)

## 1.8.1 Überblick

Eine **wesentliche Änderung** an einem Produkt mit digitalen Elementen macht das geänderte Produkt zu einem **neuen Produkt** im Sinne des CRA. Die Bereitstellung auf dem Markt stellt ein **neues Inverkehrbringen** dar — unabhängig davon, ob der ursprüngliche Hersteller oder ein Dritter die Änderung vorgenommen hat.

Der Begriff ist in vier Konstellationen entscheidend:

| # | Konstellation | Rechtsgrundlage |
|---|---------------|-----------------|
| a | Ein **Importeur oder Händler** ändert ein bereits in Verkehr gebrachtes Produkt wesentlich → gilt als dessen Hersteller | Art. 21 |
| b | **Jede andere natürliche oder juristische Person** ändert ein Produkt wesentlich und stellt es bereit → gilt als dessen Hersteller | Art. 22 |
| c | Eine Person ändert **nach dem 11.12.2027** ein **vor dem 11.12.2027** in Verkehr gebrachtes Produkt wesentlich und bringt es in Verkehr → gilt als dessen Hersteller | Art. 69 Abs. 2 |
| d | Ein **Hersteller** prüft, ob nach dem 11.12.2027 vorgenommene Änderungen eine **neue Konformitätsbewertung** erfordern — der Alltagsfall iterativ entwickelter Software | Art. 32 |

::: info RECHTSGRUNDLAGE
**Art. 3 Nr. 30 CRA:** *„‚wesentliche Änderung' bezeichnet eine Änderung des Produkts mit digitalen Elementen nach dessen Inverkehrbringen, die die Einhaltung der grundlegenden Cybersicherheitsanforderungen nach Anhang I Teil I durch das Produkt mit digitalen Elementen beeinträchtigt oder die zu einer Änderung der Zweckbestimmung führt, für die das Produkt mit digitalen Elementen bewertet wurde."*

**Erwägungsgrund 39 CRA:** Ein Produkt ist wesentlich geändert, wenn eine Änderung **das Cybersicherheitsrisikoniveau verändert** und dieses veränderte oder zusätzliche Risiko **vom Hersteller nicht in seiner Risikobewertung berücksichtigt** wurde und folglich auch nicht bei der Umsetzung der grundlegenden Anforderungen.

**Art. 21, 22 CRA:** Folgen für Importeure, Händler und andere Personen.
:::

## 1.8.2 Definition: wesentliche Änderung

::: danger KORRIGIERTER TEST
Eine frühere Fassung dieses Handbuchs nannte drei **kumulative** Bedingungen (Cybersicherheitsrelevanz **und** über beabsichtigte Updates hinausgehend **und** Ungültigkeit der Konformitätsbewertung). Dieser Test war strenger als das Gesetz und hätte meldepflichtige Änderungen fälschlich als nicht wesentlich eingestuft.

Art. 3 Nr. 30 CRA nennt **zwei alternative Tatbestände**. Eine Änderung ist wesentlich, wenn **einer** von beiden greift.
:::

Eine Änderung an einem Produkt **nach** dessen Inverkehrbringen ist eine wesentliche Änderung, wenn sie:

1. die **Einhaltung** der grundlegenden Cybersicherheitsanforderungen des **Anhangs I Teil I beeinträchtigt**; **oder**
2. zu einer **Änderung der Zweckbestimmung** führt, für die das Produkt bewertet wurde.

Erwägungsgrund 39 liefert die operative Lesart des ersten Tatbestands: Die Änderung verändert das Cybersicherheitsrisikoniveau, und dieses veränderte oder zusätzliche Risiko war **nicht bereits abgedeckt** durch die Risikobewertung des Herstellers.

::: warning WAS NICHT DER TEST IST

- **Nicht** Umfang oder Komplexität der Änderung. Drei Zeilen Code können wesentlich sein; eine vollständige Neuentwicklung muss es nicht sein.
- **Nicht**, ob die Versionsnummer steigt.
- **Nicht**, ob der Hersteller die Änderung als „Sicherheitsupdate" bezeichnet — siehe 1.8.6.
- **Nicht**, ob sie abstrakt vorhersehbar war; entscheidend ist, ob das Risiko **tatsächlich bewertet** wurde.
:::

## 1.8.3 Entscheidungsbaum

```
Nach dem Inverkehrbringen wird eine Änderung am Produkt vorgenommen
│
├── Ist die Änderung eine Aufarbeitung, Wartung oder Reparatur,
│   die Zweckbestimmung, Funktionalität und Risikoniveau unberührt lässt?
│   └── Ja → Keine wesentliche Änderung (→ 1.8.4)
│
├── Ändert die Änderung die ZWECKBESTIMMUNG,
│   für die das Produkt bewertet wurde?
│   └── Ja → WESENTLICHE ÄNDERUNG
│
├── Verändert die Änderung das Cybersicherheitsrisikoniveau?
│   ├── Nein → Keine wesentliche Änderung
│   └── Ja ↓
│
├── War dieses veränderte oder zusätzliche Risiko bereits in der
│   Risikobewertung des Herstellers berücksichtigt, mit umgesetzten
│   und weiterhin gültigen Minderungsmaßnahmen?
│   ├── Ja   → Keine wesentliche Änderung
│   └── Nein → WESENTLICHE ÄNDERUNG
│
└── Folge → neues Inverkehrbringen (→ 1.8.7)
```

## 1.8.4 Physische Reparaturen, Wartung und Aufarbeitung

Aufarbeitung, Wartung oder Reparatur — wie in Art. 2 Nr. 18, 19 und 20 der Verordnung (EU) 2024/1781 definiert —, die ein bereits in Verkehr gebrachtes Produkt physisch verändern, führen **nicht zwangsläufig** zu einer wesentlichen Änderung (Erwägungsgrund 42 CRA). Eine Einzelfallbewertung ist erforderlich.

**Der Austausch defekter oder verschlissener Teile gegen leistungsfähigere** — wegen technischen Fortschritts oder weil das ursprüngliche Teil nicht mehr produziert wird — löst für sich genommen **keine** wesentliche Änderung aus. Das ist nur der Fall, wenn die Leistungsänderung oder die geänderte Betriebsweise des reparierten Produkts:

1. seine Einhaltung der grundlegenden Anforderungen beeinträchtigt **oder**
2. zu einer Änderung der Zweckbestimmung führt, die von der Risikobewertung nicht abgedeckt war.

> **Beispiel:** Ein Hersteller ersetzt defekten Arbeitsspeicher in einem Server durch ein neues, leistungsfähigeres Modul. Die Einhaltung der grundlegenden Anforderungen bleibt unberührt, und die neue Leistung bleibt innerhalb der in der Risikobewertung betrachteten Verwendung. Der Server wurde **nicht** wesentlich geändert.

## 1.8.5 Ersatzteile (Art. 2 Abs. 6)

Art. 2 Abs. 6 CRA nimmt Ersatzteile vom Anwendungsbereich aus, sofern sie zum Ersatz **identischer Komponenten** bestimmt und **nach denselben Spezifikationen gefertigt** sind. Erwägungsgrund 29 bestätigt, dass dies sowohl Ersatzteile für vor Geltung des CRA bereitgestellte Produkte als auch solche erfasst, die selbst eine CRA-Konformitätsbewertung durchlaufen haben.

### Bedingung 1 — *als* Ersatzteil geliefert

Die Ausnahme greift nur, wenn das Teil **gezielt zur Reparatur oder zur Verlängerung der Haltbarkeit** eines bereits in Verkehr gebrachten Produkts geliefert wird (vor oder nach dem 11.12.2027).

| | |
|---|---|
| **Erfüllt** | Der Wartungs- oder Reparaturzweck ergibt sich aus dem Kontext der Lieferung — Produkt oder Produktfamilie sind in der Bestellung oder im Angebot benannt, oder die Lieferung erfolgt über After-Sales- oder Servicekanäle. Belege werden für Marktüberwachungsbehörden vorgehalten. |
| **Erfüllt nicht** | Ein Produkt, das eigenständig geliefert wird, ohne Bezug zur Wartung oder Reparatur eines bestehenden Produkts. Es wird regulär in Verkehr gebracht. |

::: warning TECHNISCHE AUSTAUSCHBARKEIT GENÜGT NICHT
Dass ein Produkt eine Komponente technisch *ersetzen könnte*, reicht für sich genommen **nicht** aus, um es unter die Ausnahme zu bringen. Ohne die genannten Kontextbelege ist es ein gewöhnliches Produkt mit digitalen Elementen.
:::

### Bedingung 2 — tatsächlich identisch

Ob ein Teil „identisch" ist, bemisst sich an seiner **funktionalen Rolle** im Produkt und an den **für die Cybersicherheit relevanten Merkmalen**.

| Unterschied | Wirkung auf die Ausnahme |
|-------------|--------------------------|
| Unterschiede, die weder Sicherheitsmerkmale noch das Cybersicherheits-Risikoprofil berühren — z. B. ein anderer Chipsatz mit denselben Protokollen und Sicherheitsmechanismen und Firmware, die keine sicherheitsrelevanten Merkmale verändert | **Ausnahme bleibt erhalten** |
| Unterschiede bei Algorithmen, Protokollen, kryptografischen Mechanismen, Zugangskontrollfunktionen oder anderen sicherheitsrelevanten Merkmalen | **Nicht identisch** — das Teil ist ein eigenständiges Produkt mit digitalen Elementen |

### Wenn das Ersatzteil nicht identisch ist

Das Ersatzteil unterliegt dem CRA. Die Konformität wird im Lichte **seiner** Zweckbestimmung bewertet — einschließlich, und das ist wesentlich, seiner Funktion, die Kompatibilität oder Interoperabilität mit einem bestehenden Produkt sicherzustellen, das selbst vor Geltung des CRA in Verkehr gebracht worden sein kann.

Können bestimmte grundlegende Anforderungen wegen dieser Zweckbestimmung oder wegen technischer Zwänge nicht vernünftigerweise erfüllt werden, muss der Hersteller dies in der Cybersicherheits-Risikobewertung abbilden und **alternative oder kompensierende Risikominderungsmaßnahmen** umsetzen sowie Zwang, Risiken und Maßnahmen in der technischen Dokumentation und den Nutzerinformationen dokumentieren — derselbe Mechanismus wie bei [komplexen Systemen](/de/overview/scope).

### Ausgearbeitete Beispiele

| Szenario | Bewertung |
|----------|-----------|
| Controller wurden 2026 und 2028 in Verkehr gebracht; in beiden fällt ein digitales Kommunikationsmodul aus; der Hersteller liefert ein identisches, nach denselben Spezifikationen gefertigtes Ersatzmodul | **In beiden Fällen ausgenommen.** Die Reparatur ist keine wesentliche Änderung. |
| Bei einem Industriecontroller von 2026 fällt der Kommunikationschip aus; der Hersteller liefert einen neueren Chip mit gleichwertiger Funktionalität, aber **anderer kryptografischer Implementierung und aktualisiertem Secure Boot** | **Nicht ausgenommen.** Die Unterschiede berühren die Cybersicherheitseigenschaften; es ist ein dem CRA unterliegendes Produkt. |
| Bei einem Smart-Building-Controller von 2028 fällt das Funkmodul aus; das Ersatzmodul nutzt einen anderen Chipsatz, aber dieselben Kommunikationsprotokolle und Sicherheitsmechanismen, mit Firmware, die keine sicherheitsrelevanten Merkmale verändert | **Ausgenommen.** Das Modul kann als identisch gelten. |
| Bei einem Industrieautomatisierungssystem von 2027 fällt die CPU der SPS aus; der Hersteller bietet entweder eine identische Ersatz-CPU **oder** eine komplette identische Ersatz-SPS an, jeweils über den After-Sales-Kanal mit klar benanntem Zielsystem | **In beiden Fällen ausgenommen.** Die Ausnahme gilt sowohl für eine Komponente innerhalb eines Produkts als auch für ein vollständiges Produkt, das Teil eines größeren ist. |

## 1.8.6 Software-Updates als wesentliche Änderungen

Software wird laufend aktualisiert; die Frage stellt sich daher bei jedem Release. Die folgenden vier Muster decken die meisten Fälle ab.

### Muster 1 — Neue Funktionalität ändert die Zweckbestimmung → wesentlich

| Beispiel | Begründung |
|----------|------------|
| Ein Monitoring-Dashboard, das Trends und Alarme anzeigte, erhält die Fähigkeit, die Maschinen zu **steuern** — Betriebsparameter anzupassen und nach Störungen neu zu starten | Die Zweckbestimmung verschiebt sich von Lagebild zu Betriebssteuerung anderer Geräte, über das in der Risikobewertung Vorgesehene hinaus |
| Ein Programm zur Verwaltung persönlicher Informationen erhält die Fähigkeit, **Nutzerinhalte automatisch zu analysieren, Verhaltensprofile zu bilden und automatisierte Entscheidungen** über Priorisierung, Unterdrückung oder Empfehlung ohne Nutzereingriff zu treffen | Die Zweckbestimmung verschiebt sich von einem nutzergesteuerten Werkzeug zu einem automatisierten Entscheidungssystem |

### Muster 2 — Bereits vorgesehene und bewertete Funktionalität → nicht wesentlich

| Beispiel | Begründung |
|----------|------------|
| Eine Messaging-App startet mit Einzelnachrichten; die ursprüngliche Risikobewertung deckte Gruppennachrichten (einschließlich der erhöhten Komplexität des Nachrichten-Routings), Administratorkontrollen und Moderationswerkzeuge bereits ab. Ein späteres Update aktiviert sie | Die Funktionalität liegt innerhalb der ursprünglichen Zweckbestimmung und Risikobewertung |
| Ein Produktionsüberwachungssystem wird mit reinen Anzeige-Dashboards ausgeliefert, während automatisierte Steuerungsfunktionen vorhanden, aber deaktiviert sind; die Risikobewertung deckt ihre spätere Aktivierung ausdrücklich ab, einschließlich der Risiken geschlossener Regelkreise, Operator-Override und Fail-Safe-Zuständen. Ein späteres Update aktiviert sie | Risiken und Schutzmaßnahmen wurden vorab bewertet |

::: tip EIN ARGUMENT FÜR VORAUSSCHAUENDE BEWERTUNG
Eine Risikobewertung, die eine geplante Funktionalität ausdrücklich vorwegnimmt — mit Risiken und Minderungsmaßnahmen —, kann deren spätere Aktivierung aus dem Bereich der „wesentlichen Änderung" heraushalten. Das ist ein konkreter Grund, die Roadmap in der Risikobewertung sichtbar zu machen, statt Feature für Feature zu bewerten.
:::

### Muster 3 — Kleine Änderung, erhebliches neues Risiko → wesentlich

| Beispiel | Begründung |
|----------|------------|
| Eine „Angemeldet bleiben"-Funktion, die Authentifizierungstoken lokal speichert | Geringer Umfang, aber neue Risiken durch Tokendiebstahl, unbefugten Zugriff und Session Hijacking, die in der Risikobewertung nicht berücksichtigt waren |
| Eine Protokollierungs- und Diagnosefunktion, die detaillierte Systemprotokolle zur Fehlersuche exportiert | Führt zur Erhebung und Speicherung sensibler Betriebsdaten **in unverschlüsselter Form** und damit zu einem nicht bewerteten Datenexpositionsrisiko |

### Muster 4 — Sicherheitsupdates → grundsätzlich *nicht* wesentlich

Im Einklang mit Erwägungsgrund 39 sind Sicherheitsupdates grundsätzlich **keine** wesentlichen Änderungen, da ihr Hauptzweck die Verringerung des Cybersicherheitsrisikos ist. Das gilt **auch bei erheblichen technischen Änderungen** und schließt Fälle ein, in denen Funktionalität ausschließlich zur Minderung identifizierter Schwachstellen verändert oder eingeschränkt wird.

| Keine wesentliche Änderung | |
|---|---|
| Korrektur eines Eingabevalidierungsfehlers, der zu einem Pufferüberlauf führen könnte, oder eines Logikfehlers, der eine Authentifizierungsumgehung durch fehlerhafte Session-Token-Prüfung erlaubt | Die interne Implementierung ändert sich; Zweckbestimmung und Exposition nicht |
| Verschärfung von Firewall-Regeln, Deaktivierung ungenutzter Netzwerkports, Änderung von Standard-Administratorpasswortrichtlinien, verpflichtende MFA, sofern bereits verfügbar oder vorgesehen | Betrifft Konfiguration und Zugriff, dient aber allein der Verbesserung der Sicherheitslage |
| Deaktivierung eines veralteten kryptografischen Algorithmus und Aktivierung einer stärkeren, bereits unterstützten Alternative, wenn die Risikobewertung alle kryptografischen Optionen abdeckte und die Veralterung antizipierte | Die Maßnahme war vorgesehen und bewertet; keine neuen externen Abhängigkeiten, keine geänderten Datenflüsse |

| **Ist** eine wesentliche Änderung | |
|---|---|
| Ein Produkt zur lokalen Dateiverschlüsselung wird so geändert, dass alle Dateien in einen vom Hersteller betriebenen **Fern-Verschlüsselungsdienst** hochgeladen und dort verarbeitet werden müssen | Trotz Sicherheitsmotivation ändert sich die Zweckbestimmung grundlegend — das Produkt verschlüsselt nicht mehr lokal |
| Ein intern verwalteter Schlüssellebenszyklus wird durch ein Protokoll ersetzt, das einen **externen Schlüsselverwaltungsdienst eines Dritten** erfordert | Abhängigkeiten und Datenflüsse ändern sich erheblich, neue externe Schnittstellen kommen hinzu, die nicht bewertet waren |

### Der Vier-Faktoren-Test

Bei jedem Update ist — nicht abschließend — zu prüfen, ob es:

| # | Faktor |
|---|--------|
| a | **Neue Bedrohungsvektoren einführt** — zusätzliche Schnittstellen, Kommunikationskanäle, Ausführungsumgebungen oder externe Abhängigkeiten, über die sich Bedrohungen realisieren können |
| b | **Neue Angriffsszenarien ermöglicht** — neue Wege, auf denen unbefugter Zugriff, Manipulation, Störung oder Missbrauch des Produkts oder der von ihm verarbeiteten Daten plausibel erfolgen könnte |
| c | **Die Eintrittswahrscheinlichkeit** bereits identifizierter Angriffsszenarien verändert — durch geringeren Aufwand oder geringere erforderliche Expertise, größere Exposition gegenüber nicht vertrauenswürdigen Akteuren oder Schwächung bestehender Schutzmaßnahmen |
| d | **Die potenziellen Auswirkungen** bereits identifizierter Angriffsszenarien verändert — Umfang betroffener Daten oder Funktionen, Schwere betrieblicher, sicherheitsbezogener oder wirtschaftlicher Folgen, oder die Fähigkeit, einen Vorfall zu erkennen, einzudämmen und sich davon zu erholen |

Trifft **keiner** der vier Faktoren zu und bleiben die Annahmen und Minderungsmaßnahmen der Risikobewertung gültig und wirksam, ist eine wesentliche Änderung unwahrscheinlich. Trifft **einer** zu, muss der Hersteller die Cybersicherheitsrisiken neu bewerten und feststellen, ob die grundlegenden Anforderungen weiterhin erfüllt sind.

## 1.8.7 Folgen einer wesentlichen Änderung

Das wesentlich geänderte Produkt gilt als **neues Produkt**, und seine Bereitstellung stellt ein **neues Inverkehrbringen** dar. Was daraus folgt, hängt davon ab, **wer** geändert hat und **wie weit** die Änderung reicht.

### Änderung durch eine andere Person als den ursprünglichen Hersteller

Diese Person wird zum Hersteller des geänderten Produkts — unabhängig davon, ob sie an der ursprünglichen Konstruktion oder am Inverkehrbringen beteiligt war.

| Reichweite der Änderung | Pflichten des Ändernden |
|-------------------------|-------------------------|
| Die Änderung beeinträchtigt die Cybersicherheit des Produkts **als Ganzes nicht** | Art. 13 und Art. 14 gelten **nur für den wesentlich geänderten Teil** (Art. 22). Für nicht betroffene Aspekte dürfen bestehende Tests und Unterlagen wiederverwendet werden; der Ändernde muss darlegen, welche Teile keiner Aktualisierung bedürfen. Eine Konformitätserklärung ist dennoch auszustellen. |
| Die Änderung beeinträchtigt die Cybersicherheit des Produkts **als Ganzes** — z. B. weil sie nicht mehr gezielt auf eine bestimmte Komponente oder ein Teilsystem beschränkt ist | Das Produkt gilt **in seiner Gesamtheit** als neues, dem CRA unterliegendes Produkt. Vollumfängliche Pflichten nach Art. 13 und 14 für das gesamte Produkt. |

::: info DIE PFLICHTEN DES URSPRÜNGLICHEN HERSTELLERS ENTFALLEN NICHT
Ändert ein Dritter ein Produkt wesentlich, gelten die **Pflichten des ursprünglichen Herstellers für das ursprünglich in Verkehr gebrachte Produkt fort**. Das sichert Kontinuität bei Schwachstellenbehandlung und Konformität der unveränderten Teile.
:::

### Integration ist keine Änderung

::: warning BEIDES NICHT VERWECHSELN
Ein Unternehmen, das Komponenten — auch unter deren Änderung — zu einem **neuen** Produkt zusammenfügt und dieses unter eigenem Namen in Verkehr bringt, ändert **nicht** das Produkt eines anderen wesentlich. Es bringt ein neues Produkt mit digitalen Elementen in Verkehr. Es ist dessen Hersteller und muss den CRA **vollumfänglich für das Produkt als Ganzes** einhalten. Zur Erleichterung der eigenen Konformität darf es sich auf die Konformitätsarbeit der Komponentenhersteller stützen.

> **Beispiel:** Ein Unternehmen kauft handelsübliche Mikrocontroller-Module und Konnektivitätskomponenten, entwickelt eigene Firmware und ein Sensorpaket und montiert daraus ein vernetztes Agrarüberwachungsprodukt, das es unter eigenem Namen in Verkehr bringt. Das ist Integration, keine wesentliche Änderung.
:::

### Änderung durch den ursprünglichen Hersteller

Der ursprüngliche Hersteller bleibt Hersteller, und das wesentlich geänderte Produkt gilt als neu in Verkehr gebracht. Zwei Verhältnismäßigkeitsregeln gelten:

1. **Wiederverwendung ist zulässig.** Bestehende Unterlagen und Testergebnisse dürfen für Aspekte wiederverwendet werden, die von der Änderung nicht betroffen sind. Die Konformitätsbewertung — und, sofern eine notifizierte Stelle beteiligt ist, auch deren Bewertung — soll sich auf die **wesentlich geänderten Teile** konzentrieren.
2. **Vor 2027 in Verkehr gebrachte Produkte werden nicht in die Vollkonformität gezwungen.** Eine wesentliche Änderung durch den ursprünglichen Hersteller an einem vor dem 11.12.2027 in Verkehr gebrachten Produkt verlangt **nicht** per se, das gesamte Produkt in vollständige CRA-Konformität zu bringen — es sei denn, die Änderung beeinträchtigt die Cybersicherheit des Produkts als Ganzes. Andernfalls beschränken sich die Pflichten auf die wesentlich geänderten Teile.

### Pflichten, die unabhängig vom Ergebnis gelten

::: danger DAS ERGEBNIS SETZT DIE GRUNDPFLICHTEN NICHT AUS
Unabhängig davon, ob ein Update eine wesentliche Änderung darstellt, bleibt der Hersteller verpflichtet,

- die Sicherheit der Software-Updates und des Produkts während seines Support-Zeitraums nach den **Anforderungen an die Schwachstellenbehandlung des Anhangs I Teil II** sicherzustellen; und
- **Risikobewertung und technische Dokumentation zutreffend, vollständig und fortlaufend aktuell** zu halten (Art. 13 Abs. 7, Art. 31 Abs. 2).
:::

## 1.8.8 Auswirkung auf den Support-Zeitraum

Eine wesentliche Änderung erfordert eine **Neubewertung** des Support-Zeitraums anhand der Kriterien des Art. 13 Abs. 8, setzt ihn aber **nicht** automatisch zurück oder verlängert ihn. Entscheidend ist, ob die Änderung die Faktoren berührt, die die erwartete Nutzungsdauer ursprünglich bestimmt haben. Regeln und Beispiele finden sich unter [6.4 Support & Lifecycle](/de/technical-documentation/support-period).

## 1.8.9 Schritte nach einem „Ja"

| Schritt | Maßnahme |
|---------|----------|
| 1 | Risikobewertung durchführen oder aktualisieren ([Template](/de/templates/risk-assessment)) — auf den geänderten Teil begrenzt, sofern die Änderung eingegrenzt ist |
| 2 | [Produktklassifizierung](/de/conformity/product-classification) erneut prüfen — eine geänderte Zweckbestimmung kann die Kernfunktionalität ändern |
| 3 | Konformitätsbewertung durchführen, fokussiert auf die geänderten Teile: [Modul A](/de/conformity/self-assessment), [Modul B+C](/de/conformity/module-bc), [Modul H](/de/conformity/module-h) oder [EUCC](/de/conformity/eucc) |
| 4 | Technische Dokumentation aktualisieren, nicht betroffenes Material wiederverwenden |
| 5 | Neue [EU-Konformitätserklärung](/de/conformity/eu-declaration) ausstellen und CE-Kennzeichnung anbringen |
| 6 | [Support-Zeitraum](/de/technical-documentation/support-period) für die geänderte Version neu bewerten und erklären |
| 7 | Abdeckung durch die Meldepflichten nach Art. 14 für das geänderte Produkt bestätigen |

## 1.8.10 Prozess bei der BAUER GROUP

### Bewertung vor jedem Release und vor Änderung eines Drittprodukts

| Schritt | Maßnahme | Verantwortlich |
|---------|----------|----------------|
| 1 | Änderung dokumentieren (was ändert sich, und warum) | Entwicklungsteam |
| 2 | Feststellen, ob sich die Zweckbestimmung ändert | Produktmanagement |
| 3 | Vier-Faktoren-Test anwenden (1.8.6) | CISO |
| 4 | Prüfen, ob das veränderte Risiko bereits von der aktuellen Risikobewertung abgedeckt war | CISO |
| 5 | Entscheidung: wesentliche Änderung ja/nein | CISO + Geschäftsführung |
| 6 | Entscheidung mit Begründung dokumentieren | CISO |

## 1.8.11 Dokumentation

Jede Änderungsentscheidung wird dokumentiert:

1. **Beschreibung der Änderung** — was wurde geändert, warum
2. **Prüfung der Zweckbestimmung** — unverändert oder wie verändert
3. **Vier-Faktoren-Analyse** — Bedrohungsvektoren, Angriffsszenarien, Wahrscheinlichkeit, Auswirkung
4. **Abdeckungsprüfung** — war das veränderte Risiko bereits in der Risikobewertung, und sind die Minderungsmaßnahmen weiterhin gültig
5. **Wesentlichkeitsbewertung** — Entscheidung mit Begründung
6. **Maßnahmen** — was wurde veranlasst, oder warum war nichts erforderlich
7. **Verantwortlicher und Datum**

::: warning DOKUMENTATIONSPFLICHT
Auch die Entscheidung, dass eine Änderung **nicht** wesentlich ist, muss dokumentiert werden. Im Streitfall muss die BAUER GROUP nachweisen können, dass die Prüfung stattgefunden hat — und nach Art. 13 Abs. 7 und Art. 31 Abs. 2, dass Risikobewertung und technische Dokumentation in beiden Fällen aktuell gehalten wurden.
:::

> Quelle und Rechtsstatus der Auslegungen auf dieser Seite: [Leitlinien der EU-Kommission zum CRA](/de/clarifications/commission-guidance).
