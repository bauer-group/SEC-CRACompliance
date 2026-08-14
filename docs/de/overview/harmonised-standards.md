# 1.12 Harmonisierte Standards (Art. 5–6)

## 1.12.1 Übersicht

Art. 5 und 6 CRA regeln den freien Warenverkehr für Produkte mit digitalen Elementen im EU-Binnenmarkt sowie die Rolle harmonisierter Normen bei der Konformitätsvermutung. Für BAUER GROUP sind diese Vorschriften zentral, da sie bestimmen, unter welchen Bedingungen Produkte auf dem EU-Markt bereitgestellt werden dürfen und welches Konformitätsbewertungsverfahren anzuwenden ist.

::: info RECHTSGRUNDLAGE
**Art. 5 CRA:** Freier Warenverkehr -- Produkte mit digitalen Elementen, die die Anforderungen des CRA erfüllen, dürfen im EU-Binnenmarkt nicht durch nationale Vorschriften eingeschränkt werden.

**Art. 6 CRA:** Harmonisierte Normen -- Produkte, die harmonisierten Normen (oder Teilen davon) entsprechen, deren Fundstellen im Amtsblatt der EU (OJEU) veröffentlicht wurden, genießen eine Konformitätsvermutung hinsichtlich der abgedeckten wesentlichen Anforderungen aus Annex I.
:::

## 1.12.2 Art. 5 -- Freier Warenverkehr

### Grundsatz

Produkte mit digitalen Elementen, die den Anforderungen des CRA entsprechen, dürfen auf dem EU-Markt bereitgestellt werden. Die Mitgliedstaaten dürfen die Bereitstellung solcher Produkte **nicht verbieten, beschränken oder behindern**.

### Verbot zusätzlicher nationaler Anforderungen

Kein Mitgliedstaat darf zusätzliche nationale Cybersicherheitsanforderungen für das Bereitstellung von Produkten mit digitalen Elementen auf dem Markt vorschreiben. Die CRA-Anforderungen gelten EU-weit einheitlich.

### Ausnahme: Messen und Ausstellungen

Produkte dürfen auf Messen, Ausstellungen und Vorführungen auch **ohne vollständige CRA-Konformität** präsentiert werden, sofern:

- ein **sichtbarer Hinweis** angebracht ist, dass das Produkt noch nicht den CRA-Anforderungen entspricht
- das Produkt auf der Veranstaltung **nicht tatsächlich auf dem Markt bereitgestellt** wird
- angemessene Sicherheitsmaßnahmen getroffen werden

::: tip PRAXISHINWEIS
Bei Messeauftritten von BAUER GROUP müssen Prototypen und Vorserienprodukte mit einem entsprechenden Hinweisschild versehen werden, z.B.: *„Dieses Produkt entspricht noch nicht den Anforderungen der Verordnung (EU) 2024/2847 (Cyber Resilience Act) und ist nicht für die Bereitstellung auf dem Markt bestimmt."*
:::

## 1.12.3 Art. 6 -- Harmonisierte Normen & Konformitätsvermutung

### Mechanismus der Konformitätsvermutung

| Element | Beschreibung |
|---------|-------------|
| **Grundlage** | Harmonisierte Normen, deren Fundstellen im OJEU veröffentlicht wurden |
| **Wirkung** | Vermutung der Konformität mit den abgedeckten wesentlichen Anforderungen aus Annex I |
| **Umfang** | Vollständige Vermutung bei vollständiger Anwendung; teilweise Vermutung bei teilweiser Anwendung |
| **Normungsorganisationen** | CEN, CENELEC, ETSI (im Auftrag der EU-Kommission) |
| **Rechtsfolge** | Beweislastumkehr -- die Behörde müsste die Nicht-Konformität nachweisen |

### Entwicklungsstand harmonisierter Normen

<HarmonisedStandardsStatus />

### Die Vermutung reicht nur so weit wie die Abdeckung der Norm

::: danger TEILABDECKUNG IST DER NORMALFALL
Art. 27 Abs. 1 CRA gewährt Produkten und Prozessen, die harmonisierten Normen **„oder Teilen davon"** entsprechen, eine Konformitätsvermutung — und zwar nur für die **von diesen Normen oder Teilen davon abgedeckten grundlegenden Anforderungen**.

Der Umfang eines Produkts ist in der Regel breiter als der Anwendungsbereich einer einzelnen harmonisierten Norm. Weisen die zusätzlichen Funktionalitäten Cybersicherheitsrisiken auf, die die Norm nicht adressiert, **gilt für diese Funktionalitäten keine Konformitätsvermutung** — auch dann nicht, wenn der Hersteller für das Produkt als Ganzes [Modul A](/de/conformity/self-assessment) nutzen darf.
:::

| Sachverhalt | Konformitätsvermutung |
|-------------|-----------------------|
| Die Norm adressiert alle Risiken der Kernfunktionalität, und es gibt keine zusätzlichen Funktionalitäten mit Cybersicherheitsrisiken | **Vollständig** — das Produkt profitiert von der Vermutung |
| Die Norm adressiert die Risiken der Kernfunktionalität; das Produkt hat zusätzlich Nebenfunktionen, deren Risiken die Norm nicht abdeckt | **Teilweise** — Vermutung nur für die Kernfunktionalität; die Nebenrisiken sind anderweitig zu behandeln und zu dokumentieren |
| Die Norm wird später erweitert und deckt eine dieser Nebenfunktionen mit ab | Die Vermutung erstreckt sich auf Kernfunktionalität **und** diese Nebenfunktion — nicht jedoch auf die übrigen |

> **Beispiel:** Eine Antivirensoftware, deren Kernfunktionalität von einer harmonisierten Norm abgedeckt ist, verfügt zusätzlich über eine Datenträgerbereinigung und eine Anti-Tracking-Funktion, die die Norm nicht abdeckt. Modul A darf für das gesamte Produkt genutzt werden, die Konformitätsvermutung gilt aber nur für die Risiken der Kernfunktionalität. Wird die Norm später um die Datenträgerbereinigung erweitert, wächst die Vermutung entsprechend — Anti-Tracking bleibt außen vor.

::: warning DIE NORM ENTBINDET NICHT VON DER RISIKOBEWERTUNG
Wie der Blue Guide festhält, bleiben Hersteller in risikobezogenen Harmonisierungsrechtsvorschriften **stets** — auch bei Anwendung im Amtsblatt veröffentlichter harmonisierter Normen — vollumfänglich dafür verantwortlich, **alle** Risiken ihres Produkts zu bewerten, um zu bestimmen, welche grundlegenden Anforderungen einschlägig sind. Erst danach können sie die technischen Spezifikationen dieser Normen als Risikominderungsmaßnahmen anwenden.
:::

Dieselben Regeln gelten für **gemeinsame Spezifikationen** nach Art. 27 Abs. 5 sowie für **europäische Schemata für die Cybersicherheitszertifizierung** nach Art. 27 Abs. 8, soweit die Kommission dies durch delegierte Rechtsakte nach Art. 27 Abs. 9 festlegt.

### Gemeinsame Spezifikationen (Fallback)

Solange keine harmonisierten Normen vorliegen oder diese die wesentlichen Anforderungen nur unvollständig abdecken, kann die EU-Kommission **gemeinsame Spezifikationen** (Common Specifications) im Wege von Durchführungsrechtsakten erlassen. Diese entfalten die gleiche Konformitätsvermutung, innerhalb derselben Abdeckungsgrenzen.

### Bedeutung für die Konformitätsbewertung

Die Verfügbarkeit harmonisierter Normen hat **direkte Auswirkungen** auf das anwendbare Konformitätsbewertungsverfahren:

| Produktklasse | Mit harmonisierten Normen | Ohne harmonisierte Normen |
|---------------|---------------------------|---------------------------|
| **Standard** | Modul A (Selbstbewertung) | Modul A (Selbstbewertung) |
| **Klasse I** | Modul A (Selbstbewertung) -- nur wenn **beide** Bedingungen unten erfüllt sind | Modul B+C (EU-Baumusterprüfung) erforderlich |
| **Klasse II** | Modul B+C oder Modul H | Modul B+C oder Modul H |
| **Kritisch** | Modul B+C oder Modul H nach Art. 32 Abs. 3; EUCC erst nach delegiertem Rechtsakt gemäß Art. 8 Abs. 1 | Modul B+C oder Modul H |
| **Klasse I / II als FOSS** | Verfahren der Standardkategorie nach Art. 32 Abs. 5 | Verfahren der Standardkategorie nach Art. 32 Abs. 5 |

::: warning HANDLUNGSBEDARF FÜR KLASSE-I-PRODUKTE
Für Produkte der Klasse I, die BAUER GROUP herstellt (z.B. Mikrocontroller mit sicherheitsrelevanten Funktionen), ist die Verfügbarkeit harmonisierter Normen entscheidend. Modul A steht **nur** zur Verfügung, wenn **beide** Bedingungen erfüllt sind:

1. **alle anwendbaren Anforderungen** einer einschlägigen harmonisierten Norm sind angewendet — nicht nur einige; und
2. der **Anwendungsbereich der Norm deckt mindestens alle Cybersicherheitsrisiken der [Kernfunktionalität](/de/conformity/product-classification) des Produkts** ab.

Andernfalls ist das aufwändigere Verfahren nach [Modul B+C](/de/conformity/module-bc) erforderlich. Siehe [7.2 Interne Kontrolle](/de/conformity/self-assessment).
:::

## 1.12.4 Praktische Auswirkungen für BAUER GROUP

### Monitoring-Prozess für harmonisierte Normen

BAUER GROUP etabliert den folgenden Überwachungsprozess:

1. **OJEU-Monitoring** -- Regelmäßige Prüfung des Amtsblatts der EU auf Veröffentlichung von Fundstellen harmonisierter CRA-Normen
2. **CEN/CENELEC/ETSI-Beobachtung** -- Verfolgung der Normungsentwürfe und öffentlichen Konsultationen
3. **Bewertung der Anwendbarkeit** -- Prüfung, welche veröffentlichten Normen für die eigenen Produkte relevant sind
4. **Implementierungsplanung** -- Planung der Umsetzung relevanter Normen in den eigenen Prozessen und Produkten

### Übergangsplanung bei Veröffentlichung neuer Normen

| Phase | Maßnahme | Verantwortlich |
|-------|----------|----------------|
| Veröffentlichung | Relevanz für BAUER GROUP Produkte bewerten | ISB / Product Owner |
| Analyse (1-3 Monate) | Gap-Analyse gegen bestehende Produktdokumentation | Security Lead |
| Umsetzung (3-6 Monate) | Anpassung von Prozessen, Dokumentation und Produkten | Entwicklungsteams |
| Validierung | Prüfung der vollständigen Normenkonformität | ISB |
| Dokumentation | Aktualisierung der Konformitätserklärungen | Product Owner |

### Auswirkungen auf die Modulwahl

Bis zur Verfügbarkeit harmonisierter Normen gilt:

- **Standard-Produkte:** Modul A weiterhin anwendbar (keine Einschränkung)
- **Klasse-I-Produkte:** Modul B+C erforderlich -- siehe [Modul B+C](/de/conformity/module-bc)
- Nach Veröffentlichung harmonisierter Normen: Klasse-I-Produkte können auf Modul A ([Selbstbewertung](/de/conformity/self-assessment)) umgestellt werden, sofern die Normen vollständig angewendet werden

> Siehe auch: [Produktklassifizierung](/de/conformity/product-classification) | [Selbstbewertung (Modul A)](/de/conformity/self-assessment)
>
> Quelle und Rechtsstatus der Auslegungen in Abschnitt 1.12.3: [Leitlinien der EU-Kommission zum CRA](/de/clarifications/commission-guidance).
