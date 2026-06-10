# IEC 62443 & ISO-Normen vs. CRA

::: info ERGÄNZUNG, KEINE KRITIK
IEC 62443 ist eine wertvolle Norm mit erheblicher Überschneidung zum CRA. Hersteller, die ihr folgen, machen etwas richtig. Zweck dieser Seite ist die **Abgrenzung** — was diese Normen im Verhältnis zum CRA abdecken und was nicht — kein Urteil, dass sie falsch wären.
:::

Unter Herstellern industrieller Kommunikationshardware ist die Annahme verbreitet, ein **IEC-62443-Zertifikat sei gleichbedeutend mit CRA-Konformität**. Das ist es nicht. IEC 62443 ist eine starke Grundlage, die sich mit mehreren CRA-Anforderungen überschneidet, lässt aber die laufenden Betriebs- und Meldepflichten des CRA unabgedeckt.

## Was IEC 62443-4-1 und -4-2 tatsächlich abdecken

| Norm | Gegenstand | Überschneidung mit | Wesentliche Grenze |
|------|------------|--------------------|--------------------|
| **IEC 62443-4-1** | Sicherer Produktentwicklungs-Lebenszyklus (SDLC): Security-Management, Design, Implementierung, Verifikation, Patch- & End-of-Life-Prozesse | CRA Annex I Teil II (Schwachstellenbehandlung / Anforderungen an sichere Prozesse) | Das Audit ist eine **Momentaufnahme**; es verifiziert keine laufenden Betriebsabläufe nach Markteinführung |
| **IEC 62443-4-2** | Technische Sicherheitsanforderungen für Komponenten (Authentifizierung, Zugriffssteuerung, Datenintegrität, Kommunikationssicherheit), gestuft nach Security Level SL 1–4 | CRA Annex I Teil I (wesentliche Cybersicherheitsanforderungen an das Produkt) | Sagt nichts über laufende **Herstellerpflichten** nach dem Inverkehrbringen |

Beide sind echt und nützlich — und beide werden zu einem einzigen Zeitpunkt bewertet.

## Hauptvergleich

| Dimension | IEC 62443-4-1 | IEC 62443-4-2 | ISO 9001 | **CRA** |
|-----------|---------------|---------------|----------|---------|
| Bewertungsgegenstand | Entwicklungsprozess | Produkteigenschaften | Qualitätsprozesse | Prozess **+** Produkt **+** laufender Betrieb |
| Wann | Momentaufnahme | Momentaufnahme | Momentaufnahme + jährliche Überwachung | Gesamter Produktlebenszyklus |
| Zertifikat vorhanden | Ja | Ja | Ja | Bewertungsweg hängt von der Klasse ab (siehe unten) |
| Laufende Herstellerpflicht | Keine bis zur Re-Zertifizierung | Keine bis zur Re-Zertifizierung | QMS aufrechterhalten | CVE-Monitoring, Patching, SBOM-Pflege, ENISA-Meldung |
| Meldepflicht gegenüber einer Behörde | Keine | Keine | Keine | **Ja — ENISA: 24 h Frühwarnung, 72 h Meldung** |
| Haftung nach Markteinführung | Geteilt mit Zertifizierer | Geteilt mit Zertifizierer | Geteilt mit Zertifizierer | **Ausschließlich Hersteller** |
| Mindest-Supportpflicht | Keine | Keine | Keine | **Sicherheitsupdates über den Supportzeitraum (≥ 5 Jahre / erwartete Lebensdauer)** |
| Endet mit | Zertifikatsablauf | Zertifikatsablauf | Zertifikatsablauf | Ende der Marktverfügbarkeit + Supportzeitraum |

::: warning DER BEWERTUNGSWEG IST NICHT „KLASSE = ZERTIFIKAT"
Beim CRA hängt der Bewertungsweg von der Produktklasse **und** davon ab, ob harmonisierte Normen anwendbar sind: **Standard** → Modul A (Selbstbewertung); **Klasse I** → Modul A nur bei vollständiger Anwendung harmonisierter Normen, sonst Modul B+C; **Klasse II** → Modul B+C oder Modul H; **Kritisch** → EUCC. Siehe [Produktklassifizierung](/de/conformity/product-classification) und [Harmonisierte Normen](/de/overview/harmonised-standards).
:::

## Was IEC 62443 NICHT ersetzt

Kein Audit-Zertifikat kann das Folgende ersetzen, weil es sich um **Betriebsaufgaben** handelt, nicht um Bewertungsaufgaben:

- Die **SBOM je Firmware-Version**, laufend aktuell gehalten → [SBOM & Signierung](/de/sbom-signing/)
- Die **ENISA-Meldepflicht** — 24 h Frühwarnung bei aktiv ausgenutzter Schwachstelle, 72 h Meldung, 14-tägiger Abschlussbericht → [ENISA-Meldung](/de/incident-response/enisa-reporting)
- Die **laufende CVE-Monitoring-Infrastruktur** (permanent, nicht zu einem Zeitpunkt auditierbar) → [Schwachstellenmanagement](/de/vulnerability-management/)
- Die **CVD-Richtlinie** als funktionierender Kanal für Sicherheitsforschende → [Disclosure Policy](/de/incident-response/disclosure-policy)
- Die Bereitstellung von **Sicherheitsupdates über den gesamten Supportzeitraum** → [Support & Lifecycle](/de/technical-documentation/support-period)

> Kein Audit ersetzt eine Betriebsaufgabe. Ein Zertifikat bestätigt einen Zustand zu einem Zeitpunkt; dies sind Prozesse, die weiterlaufen müssen.

## Wie Normen Ihnen dennoch helfen

IEC 62443 zu folgen oder ISO-Zertifikate zu besitzen ist echt nützlich — sofern Sie ihre Rolle verstehen:

- Die **Konformitätsvermutung** entsteht ausschließlich aus **harmonisierten Normen**, deren Fundstellen im Amtsblatt der EU (OJEU) veröffentlicht sind. Bis dahin gewährt keine Norm — auch nicht IEC 62443 — automatische CRA-Konformität. IEC 62443 ist derzeit eine **Referenz**, keine harmonisierte CRA-Norm. → [Harmonisierte Normen](/de/overview/harmonised-standards)
- Ein bestehendes **QMS** (ISO 9001 / ISO 27001) ist eine starke Basis für die Prozessanforderungen des CRA und lässt sich gut in den Weg über Modul H integrieren. → [Modul H](/de/conformity/module-h)

> Zurück zu: [Zertifikat vs. CRA-Lebenszyklus](/de/clarifications/certificate-vs-lifecycle)
