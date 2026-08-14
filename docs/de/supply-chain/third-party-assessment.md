# 5.3 Third-Party Assessment

## 5.3.1 Bewertung von Drittkomponenten

Gemäß Art. 13 Abs. 5 CRA muss der Hersteller bei der Integration von Drittkomponenten die gebotene Sorgfalt walten lassen. Diese Seite beschreibt den Bewertungsprozess.

### Zwei getrennte Pflichten, ein Ziel

Der CRA begründet zwei **getrennte, aber einander ergänzende** Pflichten. Ihre Vermengung ist eine häufige Lückenquelle.

| | Cybersicherheits-Risikobewertung (Art. 13 Abs. 2) | Sorgfaltspflicht (Art. 13 Abs. 5) |
|---|---|---|
| **Gegenstand** | Das Produkt mit digitalen Elementen selbst, einschließlich Risiken, die **außerhalb** entstehen — externe Netze, Umgebungsfaktoren, externe Infrastruktur | Elemente, die **Bestandteil** des Produkts sind, insbesondere integrierte Software- oder Hardwarekomponenten Dritter |
| **Frage** | Was kann unser Produkt beeinträchtigen, und wie mindern wir es **im Produkt**? | Erfüllen diese Komponenten, was unser Produkt von ihnen benötigt, so dass sie seine Konformität nicht untergraben? |
| **Ergebnis** | Sicherheitsmaßnahmen auf Produktebene zur Umsetzung von Anhang I Teil I | Geprüfte Nachweise, dass jede Komponente die identifizierten Anforderungen erfüllt |

::: info WIE SORGFALTSPFLICHT PRAKTISCH ERFÜLLT WIRD
Die Sorgfaltspflicht wird erfüllt, indem **bestimmt wird, was das Produkt von seinen Komponenten benötigt**, um seine Cybersicherheitsziele zu erreichen, und anschließend **risikobasiert überprüft wird, dass diese Komponenten dem Bedarf des Produkts entsprechen** (Erwägungsgrund 34).

In Abstimmung mit der Risikobewertung identifiziert der Hersteller die Anforderungen, die die integrierte Komponente erfüllen muss. Stützt sich das Produkt auf **kryptografische Funktionen, Update-Mechanismen oder sichere Kommunikation** einer Komponente, muss der Hersteller diesen Bedarf identifizieren und die Erfüllung überprüfen.
:::

### Zulässige Nachweise

| Nachweis | Hinweise |
|----------|----------|
| Technische Spezifikationen des Komponentenherstellers | Grundlage |
| Sicherheitsdokumentation des Komponentenherstellers | Grundlage |
| Einschlägige Konformitäts- oder Assurance-Unterlagen | Z. B. eigene CRA-Konformitätsnachweise des Komponentenherstellers |
| Eigene Tests | Soweit angemessen, zur Überprüfung, dass die Komponente die relevanten Funktionen angemessen erbringt |

::: tip SORGFALTSPFLICHT TRÄGT DIE EIGENE KONFORMITÄT
Die Sorgfaltspflicht ist eine **eigenständige Rechtspflicht**, unterstützt aber zugleich die Fähigkeit des Herstellers, die Einhaltung der grundlegenden Anforderungen für das Produkt **als Ganzes** nachzuweisen.

Entwickelt der Hersteller eine Funktionalität selbst, muss er die grundlegenden Anforderungen **unmittelbar umsetzen**. Integriert er eine von anderen entwickelte Komponente, muss er **durch Sorgfaltspflicht** sicherstellen, dass die Komponente so verwendet werden kann, dass das Produkt als Ganzes konform ist. Das Ziel ist in beiden Fällen identisch.
:::

::: warning INTEGRIERT ≠ SELBST ENTWICKELT
Komponenten, die physisch oder logisch in das Produkt integriert, aber von Dritten bezogen sind, müssen in der Risikobewertung berücksichtigt werden. Für Compliance-Zwecke sind sie jedoch als **extern gelieferte Komponenten zu behandeln, deren Eigenschaften bei der Integration durch Sorgfaltsprüfung verifiziert werden** — der Hersteller hat sie möglicherweise weder neu konstruiert noch neu entwickelt.
:::

## 5.3.2 Bewertungsrahmen

### Automatisierte Prüfung (für jede Abhängigkeit)

Diese Prüfungen werden automatisch in der CI/CD-Pipeline durchgeführt:

| Prüfung | Tool | Blockiert Build |
|---------|------|:---:|
| Bekannte CVEs (CRITICAL) | Trivy / Grype | ✅ |
| Bekannte CVEs (HIGH) | Trivy / Grype | ✅ |
| Verbotene Lizenzen | License Compliance | ✅ |
| Exponierte Secrets | Gitleaks / GitGuardian | ✅ |

### Manuelle Prüfung (für neue kritische Abhängigkeiten)

Bei der Einführung neuer Abhängigkeiten in sicherheitskritischen Bereichen wird zusätzlich eine manuelle Bewertung durchgeführt:

| Kriterium | Bewertung | Gewichtung |
|-----------|-----------|------------|
| **Maintainer-Reputation** | Verifizierter Account, bekannte Organisation | Hoch |
| **Projekt-Aktivität** | Regelmäßige Commits, aktive Issue-Bearbeitung | Hoch |
| **Security-Response** | Reaktionszeit auf gemeldete Schwachstellen | Hoch |
| **Codequalität** | Tests, CI/CD, Code-Reviews | Mittel |
| **Dependency-Tiefe** | Transitive Abhängigkeiten (weniger = besser) | Mittel |
| **Alternativen** | Gibt es sicherere Alternativen? | Mittel |
| **Verbreitung** | Download-Zahlen, Nutzer-Basis | Niedrig |

### Bewertungsskala

| Bewertung | Bedeutung | Aktion |
|-----------|-----------|--------|
| **A – Vertrauenswürdig** | Alle Kriterien erfüllt, aktiv gepflegt | Nutzung freigegeben |
| **B – Akzeptabel** | Kleine Einschränkungen, insgesamt vertrauenswürdig | Nutzung mit Monitoring |
| **C – Risikobehaftet** | Relevante Einschränkungen | Nutzung nur mit Begründung + Review |
| **D – Nicht akzeptabel** | Kritische Einschränkungen | Nutzung verboten |

## 5.3.3 Sonderfall: Vendor SDKs (Embedded)

Für Firmware-Projekte werden Vendor SDKs (ESP-IDF, STM32 HAL, Zephyr) separat bewertet:

| SDK | Bewertung | Begründung |
|-----|-----------|------------|
| ESP-IDF (Espressif) | A | Offizielles SDK, aktiv gepflegt, SBOM verfügbar |
| STM32 HAL (STMicroelectronics) | A | Offizielles SDK, industrietauglich |
| Zephyr RTOS | A | Linux Foundation Projekt, Security WG aktiv |
| PlatformIO | B | Community-Projekt, breite Nutzung |

## 5.3.4 Kontinuierliches Monitoring

Alle integrierten Drittkomponenten werden nach Integration kontinuierlich überwacht:

1. **Dependabot** – Wöchentliche Prüfung auf neue Versionen und CVEs
2. **CVE-Monitor** – Täglicher SBOM-Scan gegen aktuelle CVE-Datenbanken
3. **License Compliance** – Bei jedem Build
4. **Base Image Monitor** – Wöchentliche Prüfung auf neue Base-Image-Versionen

## 5.3.5 Ferndienste Dritter und Cloud-Anbieter

Stützt sich das Produkt auf eine Fernlösung, die **keine** Fernverarbeitungslösung ist — weil sie nicht von oder für die BAUER GROUP konzipiert und entwickelt wurde —, wird sie **wie eine integrierte Komponente** behandelt: Ihre Integrationsrisiken werden bewertet, auf Produktebene gemindert, und eine gleichwertige Sorgfaltspflicht wird ausgeübt, angemessen zum Risiko der Fernlösung. Zur Feststellung siehe [1.15 Fernverarbeitung](/de/overview/remote-data-processing).

### Wiederverwendbare Nachweise

Folgende Nachweise können zur Unterstützung der Konformitätsbewertung und der Sorgfaltspflicht gegenüber Ferndiensten Dritter herangezogen werden:

| Nachweis | Grundlage |
|----------|-----------|
| Nachweis der Erfüllung von Pflichten nach der Durchführungsverordnung (EU) 2024/2690 | NIS2-Durchführungsrechtsakt |
| Nachweis der Erfüllung von Pflichten nach der Verordnung (EU) 2022/2554 | DORA |
| Konformitätserklärung oder Zertifikat im Rahmen eines europäischen Schemas für die Cybersicherheitszertifizierung | Verordnung (EU) 2019/881 (Cybersecurity Act) |
| Nachweis der Konformität mit ISO/IEC 27017:2015 oder ISO/IEC 27001:2022 | Internationale Normen |

### Vertragliche Maßnahmen

Hersteller müssen auf Grundlage ihrer Risikobewertung die geeignetsten Sicherheitsmaßnahmen umsetzen, soweit relevant gestützt auf das **Shared-Responsibility-Modell** des Anbieters. Zur Minderung gehören sowohl Sicherheitskontrollen auf Produktebene als auch die Überprüfung der Sicherheitsmaßnahmen des Anbieters selbst.

::: tip SICHERHEITSZUSAGEN IN DIE SLA AUFNEHMEN
Ein praktisches Instrument zur Risikominderung ist die Verankerung von Sicherheitszusagen in den **Service Level Agreements** mit Drittanbietern — einschließlich Zusagen, dass der Anbieter **Schwachstellen angemessen behandelt**.
:::

### Wenn der Anbieter etwas ändert

::: warning EINE ANBIETERÄNDERUNG IST KEINE WESENTLICHE ÄNDERUNG — ABER EIN AUSLÖSER
Eine wesentliche Änderung an einer von einem Ferndienstanbieter bereitgestellten Lösung ist **keine** [wesentliche Änderung](/de/overview/substantial-modifications) des Produkts, da diese Elemente nicht in der Verantwortung des Herstellers liegen.

Sie verpflichtet den Hersteller jedoch zum Handeln:

1. Im Rahmen der Sorgfaltspflicht **sicherstellen, dass Anbieter die BAUER GROUP angemessen über Änderungen informieren**.
2. Auf dieser Grundlage die **Risikobewertung überarbeiten**.
3. Prüfen, ob der Anbieter weiterhin **ausreichende Cybersicherheitsgarantien** bietet und ob die **Kontrollen auf Produktebene weiterhin angemessen** sind.
4. Andernfalls die **Kontrollen anpassen oder den Anbieter wechseln**.
:::

## 5.3.6 Dokumentation

Für die technische Dokumentation (Annex VII CRA) wird eine Liste aller Drittkomponenten gepflegt:

- Die **SBOM** dient als maschinenlesbares Verzeichnis
- Das **Komponenten-Anforderungsregister** hält je Komponente fest, was das Produkt von ihr benötigt (Kryptografie, Update-Mechanismus, sichere Kommunikation, …) und mit welchem Nachweis dies belegt ist — dies ist die prüffähige Form der Pflicht aus Art. 13 Abs. 5
- Manuelle Bewertungen werden im Produktdokumentationsordner abgelegt
- Von Ferndienstanbietern erhaltene Nachweise werden mit der Produktakte archiviert
- Die License Compliance Reports werden als Build-Artefakte archiviert

> Quelle und Rechtsstatus der Auslegungen in den Abschnitten 5.3.1 und 5.3.5: [Leitlinien der EU-Kommission zum CRA](/de/clarifications/commission-guidance).
