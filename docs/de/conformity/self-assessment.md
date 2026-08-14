# 7.2 Interne Kontrolle (Modul A)

## 7.2.1 Verfahren

Die interne Kontrolle gemäß Annex VIII, Modul A, CRA ist das einfachste Konformitätsbewertungsverfahren. Der Hersteller bewertet selbst, ob sein Produkt die wesentlichen Anforderungen erfüllt.

::: info ANWENDBARKEIT
Modul A ist anwendbar für:

- **Standard-Produkte** (deren Kernfunktionalität keiner Kategorie in Annex III oder IV entspricht) — stets
- **Klasse I** — nur wenn die Bedingungen in 7.2.2 erfüllt sind
- **Produkte der Klasse I und II, die als freie und quelloffene Software gelten** und in Verkehr gebracht werden — nach Art. 32 Abs. 5 dürfen sie die Verfahren der Standardkategorie anwenden

Für **Klasse II** und **Kritisch**, sofern nicht FOSS, ist Modul A **nicht** ausreichend: Die Beteiligung eines Dritten ist zwingend, sei es über [Modul B+C](/de/conformity/module-bc), [Modul H](/de/conformity/module-h) oder ein europäisches Schema für die Cybersicherheitszertifizierung mit dem Vertrauensniveau mindestens *substanziell*.
:::

::: tip EIN STRENGERES VERFAHREN IST IMMER MÖGLICH
Ein Hersteller kann stets ein strengeres Konformitätsbewertungsverfahren wählen als das vorgeschriebene (Art. 32 Abs. 1).
:::

## 7.2.2 Wann Klasse-I-Produkte die interne Kontrolle nutzen dürfen

Ein wichtiges Produkt der Klasse I erfordert eine Konformitätsbewertung durch Dritte **nur dann**, wenn der Hersteller einschlägige harmonisierte Normen, deren Fundstellen im Amtsblatt der Europäischen Union veröffentlicht wurden, gemeinsame Spezifikationen oder europäische Schemata für die Cybersicherheitszertifizierung mit dem Vertrauensniveau mindestens *substanziell* nicht oder nur teilweise angewendet hat.

::: warning DIE ZWEI KUMULATIVEN BEDINGUNGEN
Damit ein Klasse-I-Produkt für die interne Kontrolle in Betracht kommt:

1. müssen **alle anwendbaren Anforderungen** einer einschlägigen harmonisierten Norm angewendet werden — nicht nur einige; **und**
2. muss der **Anwendungsbereich der Norm mindestens alle Cybersicherheitsrisiken der [Kernfunktionalität](/de/conformity/product-classification) des Produkts abdecken**.
:::

### Die Lücke zwischen Norm und Produkt

Der Umfang eines Produkts ist häufig **breiter** als der Anwendungsbereich der einschlägigen harmonisierten Norm, und diese zusätzlichen Funktionen können andere oder zusätzliche Cybersicherheitsrisiken aufweisen.

Der Hersteller ist **stets** zur Risikobewertung nach Art. 13 Abs. 2 verpflichtet und muss folglich prüfen, ob die Umsetzung der harmonisierten Norm **alle** Risiken des Produkts abdeckt. Ist das nicht der Fall, muss er auf anderem Wege sicherstellen, dass das Produkt die grundlegenden Anforderungen erfüllt — und im Rahmen seiner Konformitätsbewertungstätigkeiten **dokumentieren, welche zusätzlichen Maßnahmen diese Restrisiken behandeln**.

::: info DAS KOSTET MODUL A NICHT
Deckt die harmonisierte Norm die Risiken der **Kernfunktionalität** ab, darf der Hersteller die interne Kontrolle für das Produkt **als Ganzes** nutzen, einschließlich der Zusatzfunktionen — sofern die zusätzlichen Risiken behandelt und dokumentiert sind.

> **Beispiel:** Eine Antivirensoftware hat die Kernfunktionalität von Software, die Schadsoftware sucht, entfernt oder in Quarantäne verschiebt (Anhang I Nr. 4 der Durchführungsverordnung (EU) 2025/2392). Sie enthält zusätzlich eine Datenträgerbereinigung und eine Anti-Tracking-Funktion. Der Hersteller führt eine Risikobewertung für das gesamte Produkt durch, wendet eine harmonisierte Norm für die Risiken der Kernfunktionalität an und ergänzt Maßnahmen für die Zusatzfunktionen. **Modul A darf für das gesamte Produkt genutzt werden.**
:::

### Integrierte wichtige oder kritische Komponenten

Dasselbe gilt, wenn das Produkt eine Funktion integriert, die selbst die eines anderen wichtigen oder kritischen Produkts ist. Maßgeblich ist die **Kernfunktionalität des Produkts als Ganzes** — nicht die isoliert betrachtete Funktionalität integrierter Komponenten.

> **Beispiel:** Ein Hardwareprodukt hat die Kernfunktionalität eines Routers (Anhang I Nr. 12 der Durchführungsverordnung (EU) 2025/2392) und integriert zusätzlich eine Firewall-Komponente. Das Produkt als Ganzes unterliegt dem Klasse-I-Regime. Der Hersteller wendet eine harmonisierte Norm für die Router-Kernfunktionalität an und kann für die Firewall-Risiken die harmonisierte Norm für Firewalls heranziehen. **Modul A bleibt verfügbar.**

::: danger MODUL-A-BERECHTIGUNG ≠ VOLLE KONFORMITÄTSVERMUTUNG
Die interne Kontrolle nutzen zu dürfen ist **nicht** dasselbe wie eine Konformitätsvermutung. Die Vermutung reicht nur so weit, wie die Norm die Risiken tatsächlich abdeckt; die Zusatzfunktionen in den obigen Beispielen können außerhalb bleiben. Siehe [1.12 Harmonisierte Normen](/de/overview/harmonised-standards).
:::

## 7.2.3 Ablauf der internen Kontrolle

### 1. Technische Dokumentation erstellen

Gemäß Annex VII CRA muss die vollständige technische Dokumentation vorliegen:

- [ ] Produktbeschreibung ([Template](/de/technical-documentation/product-description))
- [ ] Sicherheitsarchitektur ([Referenz](/de/technical-documentation/security-architecture))
- [ ] Cybersecurity-Risikobewertung ([Template](/de/templates/risk-assessment))
- [ ] SBOM (maschinenlesbar, CycloneDX)
- [ ] Beschreibung der Schwachstellenbehandlung
- [ ] Angewandte Normen und Standards
- [ ] Testergebnisse

### 2. Anforderungsprüfung (Annex I)

Prüfen Sie jede Anforderung aus Annex I und dokumentieren Sie die Konformität:

**Teil I – Sicherheitsanforderungen:**

| Nr. | Anforderung | Konform | Nachweis |
|-----|-------------|:-------:|----------|
| 1 | Angemessenes Cybersicherheitsniveau | ☐ | [Verweis auf Dokumentation] |
| 2 | Keine bekannten ausnutzbaren Schwachstellen | ☐ | CVE-Monitor + Trivy Scan |
| 3.1 | Schutz der Vertraulichkeit | ☐ | [Verschlüsselung, Zugriffskontrolle] |
| 3.2 | Schutz der Integrität | ☐ | [Cosign, Checksummen] |
| 3.3 | Schutz der Verfügbarkeit | ☐ | [Resilienz-Maßnahmen] |
| 4 | Sichere Standardkonfiguration | ☐ | [Security-by-Default] |
| 5 | Schutz vor unbefugtem Zugriff | ☐ | [Authentifizierung, Autorisierung] |
| 6 | Minimierung der Angriffsfläche | ☐ | [Minimale Dienste, Ports] |
| 7 | Vertraulichkeit gespeicherter Daten | ☐ | [Verschlüsselung] |
| 8 | Integrität gespeicherter Daten | ☐ | [Integritätsprüfungen] |
| 9 | Datenminimierung | ☐ | [Nur notwendige Daten] |
| 10 | Verfügbarkeit wesentlicher Funktionen | ☐ | [Resilienz] |
| 11 | Minimierung negativer Auswirkungen | ☐ | [Logging, Monitoring] |
| 12 | Sicherheitsrelevante Informationen | ☐ | [Logging, Audit Trail] |
| 13 | Sichere Update-Möglichkeit | ☐ | [Update-Mechanismus] |

**Teil II – Schwachstellenbehandlung:**

| Nr. | Anforderung | Konform | Nachweis |
|-----|-------------|:-------:|----------|
| 1 | Schwachstellen ermitteln und dokumentieren (SBOM) | ☐ | SBOM Lifecycle |
| 2 | Schwachstellen unverzüglich beheben | ☐ | Patch Management |
| 3 | Regelmäßige Tests und Reviews | ☐ | CI/CD Security Scans |
| 4 | Öffentliche Offenlegung behobener Schwachstellen | ☐ | Security Advisories |
| 5 | Koordinierte Schwachstellenoffenlegung | ☐ | CVD Policy |
| 6 | Sicherheitsupdates bereitstellen | ☐ | Update-Mechanismus |
| 7 | Unverzügliche Bereitstellung von Updates | ☐ | Patch Management SLAs |
| 8 | Kontaktstelle für Schwachstellenmeldungen | ☐ | SECURITY.md |

### 3. EU-Konformitätserklärung ausstellen

Nach erfolgreicher Prüfung:

- EU-Konformitätserklärung gemäß Annex V erstellen ([Template](/de/templates/eu-declaration-of-conformity))
- Von bevollmächtigter Person unterzeichnen
- Im Repository archivieren

### 4. CE-Kennzeichnung

- CE-Kennzeichnung am Produkt oder der Verpackung anbringen
- Bei Software: In der Dokumentation und ggf. UI anzeigen
- Muss sichtbar, lesbar und dauerhaft sein

### 5. Dokumentation aufbewahren

- Technische Dokumentation: **10 Jahre** nach Inverkehrbringen
- EU-Konformitätserklärung: **10 Jahre** nach Inverkehrbringen
- Speicherort: Dieses Repository (Git-versioniert)

## 7.2.4 Checkliste: Modul A – Interne Kontrolle

- [ ] Kernfunktionalität bestimmt und dokumentiert (→ [7.1.2](/de/conformity/product-classification))
- [ ] Produktklassifizierung durchgeführt (Standard, oder Klasse I mit beiden Bedingungen aus 7.2.2, oder FOSS nach Art. 32 Abs. 5)
- [ ] Abdeckungslücke zwischen harmonisierter Norm und Produktumfang bewertet und Zusatzmaßnahmen dokumentiert
- [ ] Technische Dokumentation vollständig (Annex VII)
- [ ] Cybersecurity-Risikobewertung durchgeführt
- [ ] Annex I Teil I – alle Anforderungen geprüft und dokumentiert
- [ ] Annex I Teil II – alle Anforderungen geprüft und dokumentiert
- [ ] SBOM generiert und archiviert
- [ ] Schwachstellenbehandlungsprozess etabliert
- [ ] EU-Konformitätserklärung erstellt und unterzeichnet
- [ ] CE-Kennzeichnung angebracht
- [ ] Dokumentation archiviert (10-Jahres-Retention)

> Quelle und Rechtsstatus der Auslegungen in Abschnitt 7.2.2: [Leitlinien der EU-Kommission zum CRA](/de/clarifications/commission-guidance).
