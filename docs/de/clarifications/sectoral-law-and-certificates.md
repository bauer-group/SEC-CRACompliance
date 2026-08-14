# Sektorrecht & bestehende Zertifikate

Zwei Annahmen führen an der Schnittstelle zwischen CRA und anderem EU-Recht regelmäßig zu Fehlern. Die erste: *„Unsere Komponente geht in Fahrzeuge, also gilt der CRA nicht."* Die zweite: *„Wir haben ein gültiges EU-Baumusterprüfbescheinigung, also sind wir abgedeckt."* Beide sind teilweise richtig — und der Teil, der nicht richtig ist, ist genau die Compliance-Lücke.

Die Leitlinien der Kommission vom 27. Juli 2026 behandeln beide Punkte unmittelbar. Diese Seite gibt die dort gezogenen Grenzen wieder.

## Fahrzeuge: die Ausnahme ist enger, als sie aussieht

Art. 2 Abs. 2 Buchst. c CRA nimmt Produkte mit digitalen Elementen aus, für die die **Verordnung (EU) 2019/2144** gilt — also Fahrzeuge der Klassen M, N und O sowie Systeme, Bauteile und selbstständige technische Einheiten, die für solche Fahrzeuge entworfen und gebaut wurden. Produkte, die unter die **Verordnung (EU) Nr. 168/2013** (Fahrzeuge der Klasse L) fallen, wurden durch die **Delegierte Verordnung (EU) 2025/1535** vom CRA ausgenommen.

Die Fahrzeuge selbst liegen eindeutig außerhalb des Anwendungsbereichs. Schwierig sind die **Komponenten**.

::: warning DAS ENTSCHEIDENDE WORT LAUTET „AUSSCHLIESSLICH"
Eine Komponente ist nur dann ausgenommen, wenn sie **ausschließlich** für den Einbau in Fahrzeuge entworfen und gebaut wurde, die von diesen Verordnungen erfasst sind. Eine Komponente, die auch in andere Produktarten integriert werden kann, ist ein Produkt mit digitalen Elementen und unterliegt dem CRA — unabhängig davon, wie der Hersteller ihren Verwendungszweck beschreibt.
:::

Daraus folgen zwei Konsequenzen, die in entgegengesetzte Richtungen weisen:

| Sachverhalt | Bewertung |
|-------------|-----------|
| Komponente wird an den Fahrzeughersteller **oder** an einen anderen Wirtschaftsakteur der Automobil-Lieferkette verkauft, ist aber ausschließlich für den letztlichen Einbau in erfasste Fahrzeuge geeignet | **Ausgenommen.** Die Position in der Lieferkette ist unerheblich, solange die Komponente eindeutig nur für diesen Einbau bestimmt und geeignet ist. |
| Generische Komponente, die in unterschiedliche Produktarten integriert werden kann | **CRA gilt.** |
| Komponente, die nicht ausschließlich für solche Fahrzeuge geeignet ist und über den allgemeinen Einzelhandel oder Online-Kanäle angeboten wird, die Bestellungen der Allgemeinheit annehmen | **CRA gilt**, unabhängig von jeglicher Angabe zum Verwendungszweck. Die objektiven Bereitstellungsbedingungen gehen der erklärten Absicht vor. |
| Beschränkte B2B-Vertriebskanäle, die auf die Automobil-Lieferkette begrenzt sind | Kann auf ausschließliche Auslegung und Konstruktion hindeuten — ein unterstützendes Indiz, kein Ersatz für den Ausschließlichkeitstest selbst. |

Maßgeblich sind die **objektiven Bedingungen, unter denen die Komponente bereitgestellt wird**, nicht ein Haftungsausschluss im Datenblatt. Wer sich auf die Ausnahme beruft, sollte belegen können, dass der Vertriebskanal für nicht-automobile Kunden tatsächlich geschlossen ist.

## Bestehende Zertifikate: gültig, aber nur für das, was sie abdecken

Art. 69 Abs. 1 CRA erlaubt es Herstellern, bestehende Arbeit fortzuführen:

> *„EU-Baumusterprüfbescheinigungen und Zulassungsentscheidungen, die in Bezug auf Cybersicherheitsanforderungen für Produkte mit digitalen Elementen erteilt wurden, die anderen Harmonisierungsrechtsvorschriften der Union als dieser Verordnung unterliegen, bleiben bis zum 11. Juni 2028 gültig, sofern sie nicht vorher auslaufen oder in solchen anderen Harmonisierungsrechtsvorschriften der Union etwas anderes bestimmt ist."*

Das ist praktisch nützlich — und wird regelmäßig überdehnt. Die Leitlinien setzen drei Grenzen.

### Grenze 1 — Nur die Risiken, die das Zertifikat tatsächlich abdeckt

Die Fortgeltung beschränkt sich auf die **Cybersicherheitsrisiken und entsprechenden Anforderungen, die von den Rechtsvorschriften abgedeckt sind, auf deren Grundlage das Zertifikat erteilt wurde**. Nur für diese Risiken entfällt eine erneute Bewertung oder ein erneuter Nachweis für CRA-Zwecke. Das gilt sowohl dort, wo die anderen Rechtsvorschriften eine notifizierte Stelle verlangten, als auch dort, wo der Hersteller sie freiwillig eingeschaltet hat.

### Grenze 2 — Harte Grenze am 11. Juni 2028

Bleibt ein Zertifikat nach den anderen Rechtsvorschriften **über** den 11. Juni 2028 hinaus gültig, darf es **für CRA-Zwecke dennoch nur bis zum 11. Juni 2028** herangezogen werden. Die CRA-Frist ist vom eigenen Ablaufdatum des Zertifikats unabhängig.

### Grenze 3 — Nachweis, kein Konformitätsersatz

::: danger EIN GÜLTIGES ZERTIFIKAT BELEGT KEINE CRA-KONFORMITÄT
Das Bestehen einer gültigen EU-Baumusterprüfbescheinigung oder Zulassungsentscheidung belegt **für sich genommen keine** vollständige Einhaltung des CRA. Es befreit den Hersteller weder von der umfassenden Cybersicherheits-Risikobewertung nach Art. 13 Abs. 2 noch von irgendeiner anderen CRA-Pflicht.

Es erlaubt dem Hersteller, sich **für die entsprechenden Risiken auf das Zertifikat als Konformitätsnachweis zu stützen** — jedes verbleibende oder neu identifizierte Risiko ist weiterhin nach dem CRA zu bewerten und zu mindern.
:::

## Anwendungsbeispiel: Funkanlagenrichtlinie (RED)

Unterliegt ein Produkt den Cybersicherheitsanforderungen der **Delegierten Verordnung (EU) 2022/30** zur Ergänzung der Richtlinie 2014/53/EU (RED) und wurde auf dieser Grundlage eine EU-Baumusterprüfbescheinigung erteilt:

| | Vom RED-Zertifikat abgedeckt | Nicht abgedeckt — nach CRA zu bewerten |
|---|---|---|
| **Typische Risiken** | Netzschutz; Schutz personenbezogener Daten und der Privatsphäre; Betrugsprävention — soweit vom Zertifikat abgedeckt | Prozesse der Schwachstellenbehandlung; Datenminimierung; Verringerung der Angriffsfläche; weitere produktspezifische Aspekte |
| **Wirkung** | Keine erneute Bewertung für CRA-Zwecke während der Gültigkeit, längstens bis 11. Juni 2028 | Vollumfängliche CRA-Pflichten |

## Anwendungsbeispiel: Maschinenverordnung

Dieselbe Logik gilt für die **Verordnung (EU) 2023/1230** (Maschinenverordnung), vollständig anwendbar ab dem **20. Januar 2027**. Wurde auf Grundlage ihrer cybersicherheitsbezogenen grundlegenden Gesundheitsschutz- und Sicherheitsanforderungen eine EU-Baumusterprüfbescheinigung oder Zulassungsentscheidung erteilt, bleibt diese nach Art. 69 Abs. 1 CRA für die von der Maschinenverordnung abgedeckten Cybersicherheitsrisiken gültig — insbesondere:

- **Anhang III Abschnitt 1.1.9** — Schutz vor Korrumpierung
- **Anhang III Abschnitt 1.2.1** — Sicherheit und Zuverlässigkeit von Steuerungssystemen

Für diese Risiken ist für CRA-Zwecke keine erneute Bewertung erforderlich, solange das Zertifikat gültig ist und längstens bis zum 11. Juni 2028. Jedes zusätzliche, durch die Risikobewertung nach Art. 13 Abs. 2 identifizierte Cybersicherheitsrisiko bleibt in der Verantwortung des Herstellers.

## Was das für die Planung bedeutet

| Frage | Antwort |
|-------|---------|
| Können wir nach dem 11.12.2027 ein Produkt gestützt auf ein RED- oder Maschinen-Zertifikat in Verkehr bringen? | Ja — für die davon abgedeckten Risiken, längstens bis zum 11.06.2028. |
| Brauchen wir dennoch eine CRA-Risikobewertung? | **Ja**, immer, und sie muss umfassend sein. |
| Brauchen wir dennoch CRA-Dokumentation, EU-Konformitätserklärung und CE-Kennzeichnung? | **Ja.** Art. 69 Abs. 1 betrifft Nachweise, nicht Pflichten. |
| Was passiert am 12. Juni 2028? | Die Lücke muss bis dahin geschlossen sein. Die Konformität muss dann auf den CRA-eigenen Wegen beruhen. |
| Was gilt für vor dem 11.12.2027 in Verkehr gebrachte Produkte? | Für sie gilt das zum Zeitpunkt des Inverkehrbringens anwendbare Recht; waren sie konform, dürfen sie verkauft und in Betrieb genommen werden — es sei denn, sie erfahren am oder nach dem 11.12.2027 eine [wesentliche Änderung](/de/overview/substantial-modifications). |

::: tip DIE LÜCKENANALYSE JETZT PLANEN, NICHT 2028
Zwischen dem 11.12.2027 und dem 11.06.2028 liegen sechs Monate. Wer Art. 69 Abs. 1 als Verschnaufpause statt als Frist für die Delta-Bewertung versteht, entdeckt die Lücke zum denkbar ungünstigsten Zeitpunkt. Führen Sie den Abgleich — *welche CRA-Risiken deckt unser bestehendes Zertifikat tatsächlich ab?* — durch, solange das Zertifikat noch aktuell ist.
:::

## Verwandte Kapitel

- [Zertifikat vs. CRA-Lifecycle](/de/clarifications/certificate-vs-lifecycle) — warum ein Zertifikat nicht die Ziellinie ist
- [IEC 62443 & ISO vs. CRA](/de/clarifications/iec-62443-vs-cra) — was die Industriestandards abdecken und was nicht
- [Leitlinien der EU-Kommission zum CRA](/de/clarifications/commission-guidance) — Quelle und Rechtsstatus dieser Auslegung
- [1.1 Geltungsbereich](/de/overview/scope) — die CRA-Ausnahmen im Kontext
- [7.3 EU-Baumusterprüfung (Modul B+C)](/de/conformity/module-bc) — der CRA-eigene Baumusterprüfweg
