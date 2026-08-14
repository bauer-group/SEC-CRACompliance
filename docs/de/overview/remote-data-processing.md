# 1.15 Fernverarbeitung (Art. 3 Nr. 2)

## 1.15.1 Warum das zählt

Ein Produkt mit digitalen Elementen ist nicht nur der Code, der auf dem Gerät des Nutzers läuft. Nach Art. 3 Nr. 1 CRA ist es *„ein Software- oder Hardwareprodukt **und dessen Lösungen für die Datenfernverarbeitung**"*. Verfügt ein Produkt über eine **Fernverarbeitungslösung (Remote Data Processing Solution, RDPS)**, ist diese Bestandteil des Produkts und muss von der Risikobewertung, den grundlegenden Anforderungen des Anhangs I, der technischen Dokumentation, der Konformitätsbewertung sowie den Meldepflichten des Art. 14 erfasst werden.

Diese Grenze falsch zu ziehen ist in beide Richtungen teuer: Wird die gesamte Cloud-Landschaft als Teil des Produkts behandelt, entsteht ein Aufwand, den der CRA nie beabsichtigt hat; wird eine echte RDPS ausgelassen, klafft eine Lücke in der Konformitätsbewertung.

::: info RECHTSGRUNDLAGE
**Art. 3 Nr. 1 CRA:** *„‚Produkt mit digitalen Elementen' bezeichnet ein Software- oder Hardwareprodukt und dessen Lösungen für die Datenfernverarbeitung, einschließlich Software- oder Hardwarekomponenten, die gesondert in Verkehr gebracht werden."*

**Art. 3 Nr. 2 CRA:** *„‚Datenfernverarbeitung' bezeichnet die Datenverarbeitung aus der Ferne, für die die Software vom Hersteller oder unter der Verantwortung des Herstellers konzipiert und entwickelt wird und bei deren Fehlen das Produkt mit digitalen Elementen eine seiner Funktionen nicht ausführen könnte."*

**Erwägungsgründe 11 und 12 CRA** setzen die äußeren Grenzen: Der CRA regelt nicht die Netz- und Informationssysteme des Herstellers als Ganzes, und Cloud-Computing-Dienste als solche fallen unter NIS2.
:::

::: warning NUR SOFTWARE — NICHT DIE HARDWARE
RDPS erfasst ausschließlich die **Softwarebestandteile** der Datenverarbeitung aus der Ferne. Die Server, Hypervisoren und physische Infrastruktur, auf denen die Verarbeitung läuft, werden durch die RDPS-Definition **nicht** in den Produktumfang einbezogen.
:::

## 1.15.2 Der Drei-Elemente-Test

Datenverarbeitung aus der Ferne ist nur dann eine RDPS, wenn **alle drei** Elemente erfüllt sind. Die Elemente 2 und 3 sind die entscheidenden, kumulativen Fragen.

| # | Element | Prüfung |
|---|---------|---------|
| 1 | **Aus der Ferne** | Findet die Verarbeitung außerhalb der Umgebung des Nutzers (bei professionellen Nutzern: außerhalb der Betriebsumgebung der Organisation) statt? |
| 2 | **Notwendig für eine Funktion** | Würde das Fehlen dieser Verarbeitung verhindern, dass das Produkt **eine seiner Funktionen** ausführt? |
| 3 | **Vom oder für den Hersteller erstellt** | Wurde die Software vom Hersteller oder unter seiner Verantwortung konzipiert und entwickelt? |

### Element 1 — „aus der Ferne"

Eine abschließende Definition gibt es nicht; eine Einzelfallbewertung ist erforderlich. Folgendes steht fest:

- Cloud-Computing, **einschließlich Edge-Computing**, ist der typische Fall. Die Verarbeitung kann gerätenah erfolgen und dennoch „aus der Ferne" sein.
- Die Übertragung kann kabelgebunden oder drahtlos erfolgen — das Medium ist unerheblich.
- **On-Premises ist kein sicherer Hafen.** Datenfernverarbeitung auf lokalen Servern des Herstellers oder in einer Private Cloud qualifiziert sich ebenso wahrscheinlich wie eine Lösung in der Public Cloud.

### Element 2 — notwendig für eine der Funktionen des Produkts

Der Begriff lautet **Funktionen**, nicht *Kernfunktionalität* und nicht *Zweckbestimmung*. Der CRA sieht keine solche Einschränkung vor. Beide Kategorien zählen:

- Funktionen, die die Zweckbestimmung unmittelbar erfüllen, wie vom Nutzer erlebt, und
- Funktionen, die die Gesamtleistung des Produkts unterstützen.

Typische Funktionen, bei denen Fernverarbeitung entscheidend ist:

| Funktion | Beispiel |
|----------|----------|
| Senden von Befehlen an ein Gerät | App schaltet einen Controller in einen anderen Betriebsmodus |
| Synchronisation von Dateien | Gerätezustand wird über Installationen hinweg abgeglichen |
| Onboarding des Nutzers | Erstregistrierung und Gerätekopplung |
| Konfiguration / Personalisierung | Serverseitiges Profil wird auf das Gerät angewendet |
| Automatisierte Verteilung von Updates | Funktions-Updates und Sicherheitspatches |
| Identitäts- und Zugriffsverwaltung | Token-Ausstellung, Autorisierungsentscheidungen |

::: tip EIN MANUELLER RÜCKFALLWEG BESEITIGT DIE RDPS NICHT
Kann eine Funktion sowohl fern als auch manuell ausgeführt werden — eine Glühbirne per App oder von Hand schalten —, schließt der manuelle Weg die Qualifikation des Fernwegs als RDPS **nicht** aus. Die Ferndurchführung ist selbst eine der Funktionen, die das Produkt bietet.
:::

Umgekehrt ist eine Verarbeitung, deren Fehlen **keine** Funktion verhindert, keine RDPS. Der klarste Fall ist die **Fernauswertung von Telemetriedaten, die rein zu statistischen Zwecken oder für die künftige Produktentwicklung erhoben werden**. Solche Verarbeitung kann dennoch Risiken einbringen, die in der Risikobewertung zu behandeln sind — Teil des Produkts ist sie nicht.

### Element 3 — vom Hersteller oder unter seiner Verantwortung konzipiert und entwickelt

*„Unter der Verantwortung des Herstellers"* bedeutet, dass die Software **maßgeschneidert** ist: ausschließlich vom Hersteller oder in seinem Auftrag erstellt, auf Grundlage von ihm bereitgestellter Entwürfe und Spezifikationen. Die bloße Lizenzierung eines bestehenden Produkts oder Dienstes, den ein Anbieter auch anderen Kunden anbietet — oder eine leicht abgewandelte Fassung davon —, erfüllt diesen Test nicht.

::: warning WER DIE LÖSUNG BETREIBT, IST NICHT ENTSCHEIDEND
Die Definition stellt allein auf **Konzeption und Entwicklung** ab, nicht auf den Betrieb. Konzipiert und entwickelt ein Hersteller eine Lösung, die anschließend ein Dritter betreibt, bleibt der Hersteller für die CRA-Konformität des Produkts einschließlich dieser RDPS verantwortlich.
:::

## 1.15.3 Entscheidungsbaum

```
Nutzt das Produkt eine Datenverarbeitung aus der Ferne?
│
├── Nein → Keine RDPS. Nichts Weiteres nach diesem Abschnitt.
│
└── Ja ↓

Würde ihr Fehlen verhindern, dass das Produkt eine seiner Funktionen ausführt?
│
├── Nein → KEINE RDPS.
│          → Etwaige eingebrachte Risiken dennoch in der Risikobewertung
│            behandeln und auf Produktebene mindern.
│
└── Ja ↓

Wurde die Software vom Hersteller oder unter seiner Verantwortung
konzipiert und entwickelt (maßgeschneidert)?
│
├── Nein → KEINE RDPS.
│          → Drittlösung wie eine integrierte KOMPONENTE behandeln:
│            Integrationsrisiken bewerten, auf Produktebene mindern,
│            Sorgfaltspflicht ausüben (Logik des Art. 13 Abs. 5).
│
└── Ja  → FERNVERARBEITUNGSLÖSUNG (RDPS)
          → Bestandteil des Produkts mit digitalen Elementen.
          → In Risikobewertung, grundlegende Anforderungen, technische
            Dokumentation, Konformitätsbewertung und Meldungen nach
            Art. 14 einbeziehen.
```

## 1.15.4 Was ausdrücklich keine RDPS ist

Der CRA erstreckt sich nicht auf die IT-Landschaft des Herstellers. Folgendes liegt außerhalb des Produkts, obwohl es dem Hersteller gehört:

| Ausgenommen | Begründung |
|-------------|------------|
| HR-, Lohn-, CRM- und vergleichbare interne Systeme | Keine Software, die die Datenverarbeitungslösung des Produkts ausführt |
| CI/CD-Pipelines | Internes Tooling, nicht Teil des Produkts |
| Verteilung von Sicherheitsupdates an Edge-Standorte | Auslieferungsinfrastruktur, nicht die Produktfunktion selbst |
| Systeme für Penetrationstests, Threat Hunting, Red Teaming | Prüf- und Testtätigkeit — eine Pflicht nach Anhang I Teil II, aber keine RDPS |
| Backend-Systeme, mit denen das Produkt nicht direkt interagiert | Nur die Softwaremodule, die für die Funktionalität des Produkts verantwortlich sind, sowie die Schnittstellen, die diese Module gegenüber externen Diensten nutzen, sind RDPS |
| Telemetrie, die rein für Statistik oder künftige Entwicklung ausgewertet wird | Ihr Fehlen verhindert keine Funktion |
| Websites, die lediglich Informationen über das Produkt darstellen | Eine Website ist nur dann RDPS, wenn sie eine Produktfunktion ermöglicht oder unterstützt |
| Mobilfunk-/WLAN-Netz, Router, Ethernet-Verkabelung | Ermöglicher der Konnektivität, keine Datenverarbeitung, deren Fehlen eine Funktion blockiert |

::: warning DIE GRENZE VERLÄUFT AN DER ERSTEN SCHNITTSTELLE
Spricht das Produkt mit einer Schnittstellenschicht, die ihrerseits tiefere Backend-Systeme aufruft, ist nur die **Schnittstellenschicht** die RDPS. Die dahinterliegenden Systeme sind **externe Abhängigkeiten** — außerhalb des Produkts, aber fest innerhalb der Risikobewertung.
:::

### Sonderfall Websites

Eine Website ist selbst kein Produkt mit digitalen Elementen. Sie fällt nur dann in den Anwendungsbereich des CRA, wenn sie sich als RDPS qualifiziert:

- Weiterleitung des Nutzers auf eine externe Seite mit Informationen und Anleitungen → **keine** RDPS.
- Authentifizierungsportal, das die Anmeldedaten oder Token ausstellt, die das Produkt zum Betrieb benötigt → **RDPS** (sofern die übrigen Kriterien erfüllt sind).

## 1.15.5 Cloud-Servicemodelle

Die drei gängigen Servicemodelle führen zu unterschiedlichen Ergebnissen, weil sie Konzeption und Entwicklung unterschiedlich zuordnen.

| Modell | Wer konzipiert und entwickelt die Software? | RDPS? |
|--------|---------------------------------------------|-------|
| **IaaS eines Dritten** | Der Hersteller betreibt eigene Betriebssysteme und Anwendungen auf den Ressourcen des Anbieters | **Ja** — die Software des Herstellers kann sich qualifizieren (Hypervisor und Hardware nicht) |
| **PaaS eines Dritten** | Der Hersteller stellt seine eigene Anwendung in die Ausführungsumgebung des Anbieters | **Ja** — die Anwendung kann sich qualifizieren (Ausführungsumgebung / Betriebssystem nicht) |
| **SaaS eines Dritten** | Der Anbieter liefert eine fertig entwickelte Anwendung; der Hersteller konfiguriert lediglich | **Nein** — nicht vom oder für den Hersteller konzipiert und entwickelt |

Qualifiziert sich ein Element **nicht** als RDPS — der Hypervisor bei IaaS, das Betriebssystem bei PaaS, die SaaS-Anwendung selbst —, ist aber so in das Produkt integriert, dass es dessen Sicherheit beeinflusst, wird es **wie eine Drittkomponente** behandelt:

1. Risiken aus der Integration identifizieren und bewerten.
2. Ihnen durch Umsetzung der grundlegenden Anforderungen **am Produkt selbst** begegnen.
3. Eine der Sorgfaltspflicht des Art. 13 Abs. 5 entsprechende Pflicht ausüben, angemessen zum Risiko, das die Fernlösung darstellt.
4. Soweit relevant die Sicherheitsfunktionen nutzen, die der Anbieter im Rahmen seines Shared-Responsibility-Modells bereitstellt.

## 1.15.6 Ausgearbeitete Anwendungsfälle

| Anwendungsfall | Fragliches Element | Ergebnis |
|----------------|-------------------|----------|
| **Mobile Banking-App** — selbst entwickelte Banking-Schnittstelle für Authentifizierung und Auftragsübermittlung | Notwendig für eine Funktion ✅, vom Hersteller erstellt ✅ | **RDPS** |
| Dieselbe App — Kontoführungs- und Ledger-Systeme hinter dieser Schnittstelle | App interagiert nicht direkt mit ihnen | **Keine RDPS** — externe Abhängigkeit; Risiken (z. B. manipulierte Transaktionsergebnisse) auf Produktebene mindern |
| Dieselbe App — Support-Chat als SaaS eines Dritten | Notwendig für eine Funktion ✅, aber nicht vom/für den Hersteller erstellt ❌ | **Keine RDPS** — wie Komponente behandeln; von Kernbankfunktionen isolieren, Datenflüsse kontrollieren, Inhalte validieren |
| **Smartes Thermostat** — Steuerungs- und Präferenzsoftware des Herstellers auf IaaS eines Dritten | Beides ✅ | **RDPS**; die IaaS-Nutzung wird dokumentiert und der Anbieter bewertet |
| **E-Reader** — Buchspeicherung als SaaS eines Dritten | Notwendig ✅, vom Hersteller erstellt ❌ | **Keine RDPS** — wie Komponente behandeln; sichere Authentifizierung, Verschlüsselung und Integritätsschutz der Verbindung |
| **Industrieroboter** — Bildverarbeitungs-/Positionierungsdienst des Herstellers auf IaaS eines Dritten | Beides ✅ | **RDPS** |
| **Smartphone** — das 5G-Mobilfunknetz | Netz ist ein Kommunikationskanal, keine Verarbeitung, die eine Funktion ermöglicht | **Keine RDPS und keine Komponente** — keine Sorgfaltspflicht gegenüber dem Netzbetreiber |

## 1.15.7 Dokumentations- und Konformitätspflichten

Verfügt ein Produkt über eine RDPS oder stützt es sich auf Fernlösungen Dritter:

| # | Pflicht | Detail |
|---|---------|--------|
| 1 | **Erklären** | In der [technischen Dokumentation](/de/technical-documentation/) angeben, dass das Produkt eine RDPS hat oder sich auf Fernlösungen Dritter stützt, und **diese Lösungen beschreiben** |
| 2 | **Je Produkt erklären** | Bedient eine RDPS mehrere Produkte, muss sie in der technischen Dokumentation **jedes** Produkts erklärt werden — die Dokumentation selbst darf zwischen Konformitätsbewertungen wiederverwendet werden |
| 3 | **In der Risikobewertung abdecken** | Die [Risikobewertung](/de/vulnerability-management/risk-assessment) erfasst (i) RDPS-Risiken, (ii) Risiken aus der Nutzung von Fernlösungen Dritter und (iii) Risiken aus der Produktumgebung |
| 4 | **Grundlegende Anforderungen darauf anwenden** | Anhang I Teil I gilt für das Produkt *einschließlich* seiner RDPS |
| 5 | **Darüber melden** | Aktiv ausgenutzte Schwachstellen und schwerwiegende Sicherheitsvorfälle, die die RDPS betreffen, fallen unter die [Meldepflicht nach Art. 14](/de/incident-response/enisa-reporting) |
| 6 | **Vertraglich absichern** | Sicherheitszusagen in SLAs mit Drittanbietern verankern, einschließlich Zusagen zur Schwachstellenbehandlung |

### Wiederverwendbare Nachweise für Ferndienste Dritter

Folgende Nachweise können zusätzlich zur eigenen Bewertung des Herstellers zur Unterstützung der Konformitätsbewertung und der Sorgfaltspflicht herangezogen werden:

| Nachweis | Grundlage |
|----------|-----------|
| Nachweis der Erfüllung der NIS2-Durchführungspflichten | Durchführungsverordnung (EU) 2024/2690 |
| Nachweis der Erfüllung der DORA-Pflichten | Verordnung (EU) 2022/2554 |
| Konformitätserklärung oder Zertifikat im Rahmen eines europäischen Schemas für die Cybersicherheitszertifizierung | Verordnung (EU) 2019/881 (Cybersecurity Act) |
| Nachweis der Konformität mit ISO/IEC 27017:2015 oder ISO/IEC 27001:2022 | Internationale Normen |

## 1.15.8 Änderungen des Anbieters sind keine wesentliche Änderung

::: tip ANBIETERÄNDERUNGEN ≠ WESENTLICHE ÄNDERUNG
Eine wesentliche Änderung an einer Lösung, die ein **Ferndienstanbieter als Dritter** bereitstellt, ist **keine** [wesentliche Änderung](/de/overview/substantial-modifications) des Produkts, da diese Elemente nicht in der Verantwortung des Herstellers liegen.

Sie löst jedoch eine Wachsamkeitspflicht aus: Im Rahmen der Sorgfaltspflicht sollten Hersteller sicherstellen, dass Anbieter sie angemessen über Änderungen informieren; anschließend ist die Risikobewertung zu überarbeiten — mit der Frage, ob der Anbieter weiterhin ausreichende Cybersicherheitsgarantien bietet und ob die Kontrollen auf Produktebene weiterhin angemessen sind. Ist das nicht der Fall, sind die Kontrollen anzupassen oder der Anbieter zu wechseln.
:::

## 1.15.9 Prozess bei der BAUER GROUP

| Schritt | Maßnahme | Verantwortlich |
|---------|----------|----------------|
| 1 | Für jedes Produkt jede genutzte Datenverarbeitung aus der Ferne auflisten | Product Owner |
| 2 | Auf jede den Drei-Elemente-Test anwenden und das Ergebnis dokumentieren | Security Lead |
| 3 | Für jede RDPS: in die Produktabgrenzung der technischen Dokumentation aufnehmen | Product Owner |
| 4 | Für jede Nicht-RDPS-Fernlösung Dritter: in das Register der Drittkomponenten aufnehmen ([5.3 Drittanbieter-Bewertung](/de/supply-chain/third-party-assessment)) | Security Lead |
| 5 | Nachweise des Anbieters einholen und archivieren | Security Lead |
| 6 | Bewertung erneut durchführen, sobald der Anbieter eine wesentliche Änderung ankündigt | Product Owner |

::: warning HANDLUNGSBEDARF
Die RDPS-Feststellung ist **je Produkt** und datiert zu dokumentieren, einschließlich der negativen Ergebnisse. Fragt eine Marktüberwachungsbehörde, warum ein Cloud-Backend außerhalb der Produktabgrenzung geblieben ist, ist der dokumentierte Drei-Elemente-Test die Antwort.
:::

## 1.15.10 Verwandte Kapitel

- [1.1 Geltungsbereich](/de/overview/scope) — welche Produkte überhaupt unter den CRA fallen
- [5.3 Drittanbieter-Bewertung](/de/supply-chain/third-party-assessment) — Sorgfaltspflicht bei integrierten Komponenten und Diensten
- [3.4 Risikobewertung](/de/vulnerability-management/risk-assessment) — Behandlung von Risiken außerhalb des Produkts
- [1.14 NIS2-Integration](/de/overview/nis2-integration) — Cloud-Dienste als NIS2-Adressaten
- [Leitlinien der EU-Kommission zum CRA](/de/clarifications/commission-guidance) — Quelle und Rechtsstatus dieser Auslegung
