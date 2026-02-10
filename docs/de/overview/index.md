# Kapitel 1: CRA-Übersicht

## Dokumentenlenkung

| Feld | Wert |
|------|------|
| **Dokumenttitel** | CRA Compliance Handbuch |
| **Dokumentkennung** | BG-CRA-HB-001 |
| **Version** | 1.0 |
| **Klassifikation** | Öffentlich |
| **Geltungsbereich** | Alle Produkte mit digitalen Elementen der BAUER GROUP |
| **Herausgeber** | BAUER GROUP – Information Security |
| **Erstellt** | 08.02.2026 |
| **Freigabe** | Informationssicherheitsbeauftragter (ISB) |
| **Nächste Revision** | 08.02.2027 |

> **Hinweis:** Dies ist die öffentliche Version dieses Dokuments. Personenbezogene Daten (Namen, Kontaktdaten) werden in dieser Fassung nicht aufgeführt und sind ausschließlich in der internen Version enthalten.

### Änderungshistorie

| Version | Datum | Autor | Änderung |
|---------|-------|-------|----------|
| 1.0 | 2026-02-08 | BAUER GROUP | Erstfassung |

### Verbindlichkeit

Dieses Handbuch ist **verbindlich** für alle Mitarbeiter der BAUER GROUP, die an Entwicklung, Betrieb, Vertrieb oder Support von Produkten mit digitalen Elementen beteiligt sind. Abweichungen von den hier beschriebenen Prozessen bedürfen der schriftlichen Genehmigung durch den Security Lead und das Management.

---

## 1.1 Verordnung (EU) 2024/2847 – Cyber Resilience Act

Der **Cyber Resilience Act (CRA)** ist die EU-Verordnung über horizontale Cybersicherheitsanforderungen für Produkte mit digitalen Elementen. Er wurde am 20. November 2024 im Amtsblatt der Europäischen Union veröffentlicht (ABl. L, 2024/2847) und trat am **10. Dezember 2024** in Kraft.

Der CRA gilt unmittelbar in allen EU-Mitgliedstaaten und begründet verbindliche Pflichten für Hersteller, Importeure und Händler von Produkten mit digitalen Elementen.

### Rechtscharakter

| Merkmal | Ausprägung |
|---------|-----------|
| **Rechtsform** | EU-Verordnung (unmittelbar anwendbar) |
| **Veröffentlichung** | ABl. L, 2024/2847, 20.11.2024 |
| **Inkrafttreten** | 10.12.2024 |
| **Meldepflichten ab** | **11.09.2026** (Art. 14) |
| **Volle Anwendbarkeit ab** | **11.12.2027** (alle Anforderungen) |
| **Sanktionen** | Bis zu 15 Mio. EUR oder 2,5 % des weltweiten Jahresumsatzes (Art. 64) |

## 1.2 Ziel und Zweck

Der CRA verfolgt zwei Kernziele:

1. **Sicherheitsanforderungen an Produkte (Annex I Teil I)** – Produkte mit digitalen Elementen dürfen nur auf dem EU-Markt bereitgestellt werden, wenn sie die wesentlichen Cybersicherheitsanforderungen erfüllen. Dies umfasst Security-by-Design, Vertraulichkeit, Integrität, Verfügbarkeit und Minimalität der Angriffsfläche.

2. **Schwachstellenbehandlung (Annex I Teil II)** – Hersteller müssen während des gesamten Support-Zeitraums (mindestens 5 Jahre, Art. 13 Abs. 8) Schwachstellen systematisch identifizieren, dokumentieren, bewerten, beheben und gegenüber Nutzern und Behörden melden.

### Zusammenspiel mit NIS2

Der CRA ergänzt die **NIS2-Richtlinie** (Richtlinie (EU) 2022/2555). Während NIS2 die Cybersicherheit von Betreibern wesentlicher und wichtiger Einrichtungen regelt, adressiert der CRA die Sicherheit der von diesen Einrichtungen eingesetzten **Produkte**. Die Meldepflichten des CRA (Art. 14) sind an die NIS2-Meldepflichten (Art. 23 NIS2) angelehnt und laufen über die gleiche ENISA-Meldeplattform.

## 1.3 Geltungsbereich

Gemäß Art. 2 CRA gilt diese Verordnung für **Produkte mit digitalen Elementen**, deren bestimmungsgemäße oder vernünftigerweise vorhersehbare Verwendung eine direkte oder indirekte logische oder physische Datenverbindung mit einem Gerät oder Netzwerk umfasst.

Für die BAUER GROUP betrifft dies:

- **Software** – Eigenständige Applikationen, Microservices, APIs, Container-Images
- **Firmware** – Eingebettete Systeme (ESP32, STM32, Zephyr RTOS)
- **Bibliotheken** – Öffentlich veröffentlichte NPM- und NuGet-Pakete
- **Hardware mit Software** – IoT-Geräte, industrielle Steuerungen
- **Remote-Datenverarbeitung** – Cloud-Komponenten, die integraler Bestandteil eines Produkts sind

Detaillierte Produktkategorien und Ausnahmen: siehe [1.1 Geltungsbereich & Produkte](./scope).

### Unterseiten dieses Kapitels

| Sektion | Thema |
|---------|-------|
| **1.1** | [Geltungsbereich & Produkte](./scope) |
| **1.2** | [Rollen & Verantwortlichkeiten](./responsibilities) |
| **1.3** | [Fristen & Deadlines](./timeline) |
| **1.4** | [Importeur-Pflichten (Art. 15)](./importer-obligations) |
| **1.5** | [Bevollmächtigter (Art. 16)](./authorised-representative) |
| **1.6** | [Händler-Pflichten (Art. 17)](./distributor-obligations) |
| **1.7** | [Open-Source-Steward (Art. 18–19)](./open-source-steward) |
| **1.8** | [Wesentliche Änderungen (Art. 20)](./substantial-modifications) |
| **1.9** | [Nichtkonformität (Art. 22–23)](./non-conformity) |
| **1.10** | [Marktüberwachung (Art. 52–58)](./market-surveillance) |
| **1.11** | [Sanktionen (Art. 64)](./penalties) |
| **1.12** | [Harmonisierte Normen (Art. 5–6)](./harmonised-standards) |
| **1.13** | [Allgemeine Produktsicherheit (Art. 9)](./product-safety) |
| **1.14** | [NIS2-Integration](./nis2-integration) |

## 1.4 Struktur dieses Handbuchs

Dieses Handbuch ist nach den Kernprozessen des CRA gegliedert. Jedes Kapitel behandelt einen abgegrenzten Compliance-Bereich mit Rechtsgrundlage, Prozessbeschreibung und operativer Umsetzung:

| Kapitel | Thema | CRA-Bezug |
|---------|-------|-----------|
| **Kap. 1** | Übersicht, Geltungsbereich, Rollen, Fristen | Art. 2, 3, 10, 13, 14, 16 |
| **Kap. 2** | [SBOM & Signierung](/de/sbom-signing/) | Art. 13 Abs. 23, Art. 10 Abs. 12, Annex I Teil I Nr. 3, Teil II Nr. 1 |
| **Kap. 3** | [Schwachstellenmanagement](/de/vulnerability-management/) | Art. 10 Abs. 6, Annex I Teil II Nr. 2-8 |
| **Kap. 4** | [Incident Response & Disclosure](/de/incident-response/) | Art. 13 Abs. 6, Art. 14 |
| **Kap. 5** | [Supply-Chain-Sicherheit](/de/supply-chain/) | Art. 10 Abs. 4, Annex I Teil II Nr. 1 |
| **Kap. 6** | [Technische Dokumentation](/de/technical-documentation/) | Art. 31, Annex VII |
| **Kap. 7** | [Konformitätsbewertung](/de/conformity/) | Art. 24-28, Annex V, VIII |
| **Kap. 8** | [Compliance-Matrix](/de/compliance-matrix/) | Vollständige Anforderungszuordnung |
| **Anhang** | [Vorlagen & Templates](/de/templates/) | ENISA-Meldungen, EU DoC, Berichte |

## 1.5 Toolchain

Die BAUER GROUP setzt auf eine durchgehend automatisierte Toolchain, um CRA-Konformität ohne manuellen Mehraufwand sicherzustellen:

| Bereich | Tool | Funktion | Status |
|---------|------|----------|--------|
| SBOM-Generierung | Trivy / Syft | Software Bill of Materials (CycloneDX JSON) | Aktiv |
| Vulnerability Scanning | Trivy, Grype | CVE-Erkennung gegen NVD + GitHub Advisory DB | Aktiv |
| Secret Scanning | Gitleaks, GitGuardian | Erkennung exponierter Geheimnisse | Aktiv |
| Dependency Monitoring | Dependabot, Renovate | Automatische Dependency-Updates | Aktiv |
| License Compliance | FOSSA / Syft | Lizenzbewertung gegen Whitelist/Blacklist | Aktiv |
| Artefakt-Signierung | Cosign (Sigstore) | Integritätssicherung von Container-Images | Aktiv |
| SBOM-Signierung | Cosign (Blob-Signing) | Integritätssicherung von SBOMs | Aktiv |
| Base-Image-Monitoring | Custom Workflow | Docker-Base-Image-Schwachstellenüberwachung | Aktiv |
| CVE-Monitor | `cra-scan.yml` | Geplanter Vulnerability Scan mit Issue-Erstellung | Aktiv |
| CRA Release | `cra-release.yml` | SBOM + Signatur + Scan als Release-Assets | Aktiv |
| Software Security Hub Report | `cra-report.yml` | Compliance-Daten an CRA Compliance Hub | Aktiv |
| CI/CD | GitHub Actions | Automatisierung aller Compliance-Prozesse | Aktiv |
| Dokumentation | VitePress + GitHub Pages | Dieses Compliance-Handbuch | Aktiv |

## 1.6 Regulatorische Referenzen

| Regelwerk | Referenz | Relevanz |
|-----------|----------|----------|
| **Cyber Resilience Act** | Verordnung (EU) 2024/2847 | Primäre Rechtsgrundlage dieses Handbuchs |
| **NIS2-Richtlinie** | Richtlinie (EU) 2022/2555 | Ergänzende Meldepflichten für Betreiber |
| **Delegierte Rechtsakte** | Art. 7, 8, 14 Abs. 9 CRA | Technische Spezifikationen (erwartet 2026/2027) |
| **ENISA Single Reporting Platform** | Art. 14 CRA | Zentrale Meldeplattform für Schwachstellen |
| **ISO/IEC 29147:2018** | Vulnerability Disclosure | Referenzstandard für Coordinated Vulnerability Disclosure |
| **ISO/IEC 30111:2019** | Vulnerability Handling | Referenzstandard für Schwachstellenbehandlung |
| **CycloneDX v1.5+** | OWASP Standard | SBOM-Format |
| **NIST SP 800-161r1** | C-SCRM | Supply-Chain-Risikomanagement Best Practice |
| **IEC 62443** | Industrial Cybersecurity | Referenz für industrielle Steuerungssysteme |

## 1.7 Begriffe und Definitionen

| Begriff | Definition | CRA-Referenz |
|---------|-----------|-------------|
| **Produkt mit digitalen Elementen** | Software- oder Hardware-Produkt und dessen Remote-Datenverarbeitungslösungen, einschließlich Software- oder Hardware-Komponenten, die getrennt in Verkehr gebracht werden | Art. 3 Nr. 1 |
| **Hersteller** | Natürliche oder juristische Person, die ein Produkt entwickelt oder entwickeln lässt und unter eigenem Namen oder eigener Marke vermarktet | Art. 3 Nr. 13 |
| **Software Bill of Materials (SBOM)** | Formale, maschinenlesbare Aufzeichnung der in einem Produkt enthaltenen Komponenten und deren Abhängigkeiten | Art. 3 Nr. 39 |
| **Aktiv ausgenutzte Schwachstelle** | Schwachstelle, für die zuverlässige Belege existieren, dass sie von einem böswilligen Akteur in einem System ohne Erlaubnis des Eigentümers ausgenutzt wurde | Art. 3 Nr. 42 |
| **Schwerer Vorfall** | Vorfall, der erhebliche Auswirkungen auf die Sicherheit eines Produkts hat, einschließlich Beeinträchtigung der Integrität der Lieferkette | Art. 3 Nr. 43 |
| **Support-Zeitraum** | Zeitraum, in dem der Hersteller verpflichtet ist, die Behandlung von Schwachstellen sicherzustellen, mindestens 5 Jahre | Art. 13 Abs. 8 |
| **Konformitätsbewertung** | Verfahren zur Überprüfung, ob die wesentlichen Anforderungen erfüllt sind | Art. 3 Nr. 30 |
| **CE-Kennzeichnung** | Kennzeichnung, mit der der Hersteller erklärt, dass das Produkt den geltenden EU-Anforderungen entspricht | Art. 29 |
| **Bevollmächtigter** | In der EU niedergelassene natürliche oder juristische Person, die vom Hersteller schriftlich beauftragt wurde, in dessen Namen bestimmte Aufgaben wahrzunehmen | Art. 3 Nr. 15, Art. 16 |
