# Zertifikat vs. CRA-Lebenszyklus

In den meisten Exportmärkten ist ein Produktzertifikat die Ziellinie: Man besteht eine Bewertung, erhält ein Zertifikat, und das Produkt darf auf den Markt. Der Cyber Resilience Act (CRA) bricht dieses Muster bewusst. Diese Seite erklärt den Unterschied anhand eines Vergleichs, den jeder Exporteur bereits kennt: **ISO 9001**.

## Das bekannte Modell: Zertifizierung als einmaliges Eingangstor

Produktzertifizierung funktioniert normalerweise als einzelnes Eingangstor:

| Zertifizierung | Was Sie tun | Ergebnis |
|----------------|-------------|----------|
| CE-Kennzeichnung (klassische Richtlinien) | Konformitätsbewertung | Zertifikat / Erklärung → Marktzugang |
| EMV / Sicherheit (über ein Prüfhaus) | Baumusterprüfung | Zertifikat → Marktzugang |
| CCC | Baumusterprüfung | Zertifikat → Marktzugang |
| IEC 62443-4-1 / -4-2 | Audit | Zertifikat → „wir sind sicher" |

In diesem Modell ist *„konform"* ein **Zustand**, den man durch den Erwerb eines Zertifikats erreicht, und die bewertende Stelle trägt einen Großteil der Verantwortung für das Urteil. Nach Ausstellung des Zertifikats bestehen keine laufenden produktbezogenen Pflichten gegenüber einer Behörde. Das ist eine völlig nachvollziehbare Erwartung — so hat Produktregulierung bisher meist funktioniert.

## Warum der CRA durch diese Brille anders gelesen wird

Durch die Zertifikatsbrille gelesen, werden die CRA-Anforderungen systematisch missverstanden:

- Eine **SBOM** (Software Bill of Materials) sieht aus wie ein Dokument, das man einmal erstellt.
- Eine **CVD-Richtlinie** (Coordinated Vulnerability Disclosure) sieht aus wie ein Text, den ein Anwalt aufsetzt.
- Die **ENISA-Meldepflicht** sieht aus wie ein Formular, das ein Prüfhaus für Sie einreicht.

Keine dieser Lesarten ist korrekt. Jede davon ist ein **Prozess, den Sie betreiben** — laufend, solange das Produkt auf dem Markt ist — und kein Artefakt, das man einmal erwirbt.

## Die ISO-9001-Analogie

Praktisch jeder Exporteur besitzt oder kennt **ISO 9001**. Sie ist die klarste Brücke zu dem, wie der CRA tatsächlich denkt — in drei Schritten.

**1 — Anknüpfung an Bekanntes (die CE-Logik).**
Für Produkte mit digitalen Elementen wird die CRA-Konformität zur Voraussetzung für die CE-Kennzeichnung. Für *wichtige* Produkte (Annex III) kann die Konformität die Einbindung einer benannten Stelle erfordern. Insofern gibt es am Ende einen formalen Konformitätsnachweis — vergleichbar mit anderen regulierten Produktkategorien. (Welcher Weg gilt, hängt von der Produktklasse ab → [Konformitätsbewertung](/de/conformity/).)

**2 — Wechsel zur Prozesslogik (das ist der ISO-9001-Teil).**
Der CRA bewertet nicht nur das Produkt zu einem Zeitpunkt. Er bewertet, ob Ihre **Prozesse existieren und funktionieren** — genauso wie ISO 9001 Ihr *Qualitätsmanagementsystem* prüft, nicht Ihr Endprodukt. Ein ISO-9001-Zertifikat belegt, dass Ihr QMS die Norm nachweislich erfüllt. Es bedeutet **nicht**, dass Qualitätsprobleme ausgeschlossen sind; es bedeutet, dass Sie einen Prozess betreiben, um mit ihnen umzugehen. Der CRA folgt derselben Logik für Sicherheit.

**3 — Der entscheidende Unterschied.**

::: warning KEIN ZERTIFIZIERER KANN DIESE UHR ANHALTEN
ISO 9001 hat **keine** externe Meldepflicht gegenüber einer Behörde. Der CRA schon. Wird in Ihrem Produkt eine **aktiv ausgenutzte** Schwachstelle entdeckt — ob durch Sie selbst, eine:n Sicherheitsforscher:in oder eine:n Kund:in — haben Sie **24 Stunden** Zeit, eine Frühwarnung an ENISA und das zuständige CSIRT zu übermitteln (Art. 14 Abs. 1 CRA), gefolgt von einer 72-Stunden-Meldung und einem Abschlussbericht. Kein Zertifikat, kein Prüfhaus und kein Dienstleister kann diese Uhr für Sie anhalten. Sie brauchen einen internen Prozess, der das kann.
:::

## Der CRA als Lebenszykluspflicht

Das Zertifikat ist ein Moment; die Pflicht umspannt das gesamte Produktleben. Die operativen Details stehen in den unten verlinkten Kapiteln — dies ist nur die Landkarte.

| Phase | Was der CRA erwartet | Wo es behandelt wird |
|-------|----------------------|----------------------|
| **Vor dem Inverkehrbringen** | Risikobewertung, SBOM, technische Dokumentation (Annex VII), Konformitätsbewertung, funktionierender CVD-Kontaktpunkt | [Technische Dokumentation](/de/technical-documentation/) · [SBOM](/de/sbom-signing/) · [Konformität](/de/conformity/) |
| **Während der Marktphase** *(die kritische Phase)* | Laufendes CVE-Monitoring, kostenlose Sicherheitsupdates, je Version aktuell gehaltene SBOM, ENISA-Meldung 24 h / 72 h / 14 d, aktiver CVD-Kanal | [Schwachstellenmanagement](/de/vulnerability-management/) · [ENISA-Meldung](/de/incident-response/enisa-reporting) · [Disclosure Policy](/de/incident-response/disclosure-policy) |
| **Supportzeitraum** | Sicherheitsupdates über den Supportzeitraum — mindestens 5 Jahre, oder die erwartete Produktlebensdauer, falls länger | [Support & Lifecycle](/de/technical-documentation/support-period) |

::: tip DIE MARKTPHASE IST DORT, WO ZERTIFIKATE ENDEN UND DER CRA WEITERLÄUFT
Ein Zertifikatsaudit ist eine Momentaufnahme. Der Schwerpunkt des CRA liegt in der *Marktphase* — den Jahren nach dem Audit, in denen ein Zertifikat nichts darüber aussagt, ob Sie weiterhin überwachen, patchen und melden.
:::

## Was das in der Praxis bedeutet

Keines der folgenden Dinge kann ein Zertifikat liefern, weil es sich um **Betriebsaufgaben handelt, nicht um Bewertungsaufgaben**:

- Ein interner Prozess, der **innerhalb von 24 Stunden erkennen und melden** kann.
- **Laufendes CVE-Monitoring** des eigenen Codes und aller Drittkomponenten.
- Eine **je Firmware-/Softwareversion aktuell gehaltene SBOM**.
- Ein **aktiver CVD-Kanal**, den Sicherheitsforschende tatsächlich erreichen.
- **Sicherheitsupdates**, kostenlos bereitgestellt, über den gesamten Supportzeitraum.

> Weiter: [IEC 62443 & ISO vs. CRA](/de/clarifications/iec-62443-vs-cra) — wie die konkreten Normen auf den CRA abbilden und was sie genau abdecken und was nicht.
