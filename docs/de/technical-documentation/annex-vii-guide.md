# Annex VII – Leitfaden Technische Dokumentation

## Übersicht

Annex VII des CRA definiert den vollständigen Inhalt der technischen Dokumentation, die jeder Hersteller erstellen und 10 Jahre aufbewahren muss. Dieser Leitfaden erklärt jede Anforderung im Detail und verweist auf die jeweilige Dokumentationsstelle.

::: info RECHTSGRUNDLAGE
**Art. 31 CRA:** Die technische Dokumentation wird erstellt, bevor das Produkt in Verkehr gebracht wird, und wird laufend aktualisiert.

**Annex VII CRA:** Inhalt der technischen Dokumentation.
:::

## Anforderung 1 – Allgemeine Produktbeschreibung

**Annex VII Nr. 1:** Eine allgemeine Beschreibung des Produkts mit digitalen Elementen, einschließlich:

| Element | Beschreibung | Dokumentationsort |
|---------|-------------|-------------------|
| Bestimmungsgemäße Verwendung | Zweck, Zielgruppe, Einsatzszenarien | [Produktbeschreibung](/de/technical-documentation/product-description) |
| Versionen | Betroffene Software-/Firmware-Versionen | Release Notes, SBOM |
| Hardware-Anforderungen | Falls zutreffend: Hardwareanforderungen | Produktbeschreibung |
| Grundlegende Eigenschaften | Funktionaler Umfang, Kernfunktionen | Produktbeschreibung |

**Umsetzung:** Pro Produkt ein Dokument nach [Produktbeschreibungs-Template](/de/technical-documentation/product-description).

---

## Anforderung 2 – Design- und Entwicklungsbeschreibung

**Annex VII Nr. 2:** Beschreibung der Design- und Entwicklungsprozesse, einschließlich:

| Element | Beschreibung | Dokumentationsort |
|---------|-------------|-------------------|
| Sicherheitsarchitektur | Übersicht über die Sicherheitsmaßnahmen | [Sicherheitsarchitektur](/de/technical-documentation/security-architecture) |
| Datenverarbeitung | Welche Daten verarbeitet werden, Datenflüsse | Sicherheitsarchitektur |
| Bedrohungsmodell | Identifizierte Bedrohungen und Gegenmaßnahmen | Risikobewertung |
| Designentscheidungen | Sicherheitsrelevante Architekturentscheidungen | Sicherheitsarchitektur |

---

## Anforderung 3 – Cybersecurity-Risikobewertung

**Annex VII Nr. 3:** Die Cybersecurity-Risikobewertung gemäß Art. 10 Abs. 2, einschließlich:

| Element | Beschreibung | Dokumentationsort |
|---------|-------------|-------------------|
| Methodik | Angewandte Risikobewertungsmethode | [Risikobewertungs-Template](/de/templates/risk-assessment) |
| Identifizierte Risiken | Liste der Cybersicherheitsrisiken | Risikobewertung |
| Bewertung | Eintrittswahrscheinlichkeit × Auswirkung | Risikobewertung |
| Maßnahmen | Risikominderungsmaßnahmen | Risikobewertung |
| Restrisiken | Akzeptierte Restrisiken mit Begründung | Risikobewertung |

---

## Anforderung 4 – Schwachstellenbehandlung

**Annex VII Nr. 4:** Beschreibung der Schwachstellenbehandlungsprozesse:

| Element | Beschreibung | Dokumentationsort |
|---------|-------------|-------------------|
| Überwachung | Wie Schwachstellen identifiziert werden | [CVE-Monitoring](/de/vulnerability-management/cve-monitoring) |
| Bewertung | Wie Schwachstellen bewertet werden | [Risikobewertung](/de/vulnerability-management/risk-assessment) |
| Behebung | Wie Schwachstellen behoben werden | [Patch Management](/de/vulnerability-management/patch-management) |
| Offenlegung | Wie Schwachstellen offengelegt werden | [Disclosure Policy](/de/incident-response/disclosure-policy) |
| SBOM | Maschinenlesbares SBOM | [SBOM & Signierung](/de/sbom-signing/) |

---

## Anforderung 5 – Angewandte Normen und Spezifikationen

**Annex VII Nr. 5:** Liste der angewandten harmonisierten Normen, Common Specifications oder Cybersicherheitszertifizierungsschemata:

| Norm/Standard | Anwendungsbereich | Status |
|---------------|-------------------|--------|
| ISO/IEC 27001 | Informationssicherheitsmanagementsystem | Referenz |
| ISO/IEC 29147 | Vulnerability Disclosure | Angewendet |
| ISO/IEC 30111 | Vulnerability Handling | Angewendet |
| CycloneDX v1.6 | SBOM-Format | Angewendet |
| Sigstore/Cosign | Artefakt-Signierung | Angewendet |
| OWASP ASVS | Application Security Verification | Referenz |
| IEC 62443 | Industrial Cybersecurity | Falls industrielle Produkte |

*Hinweis: Harmonisierte Normen speziell für den CRA sind in Entwicklung. Diese Liste wird aktualisiert, sobald sie veröffentlicht werden.*

::: tip HARMONISIERTE NORMEN
Sobald harmonisierte Normen für den CRA veröffentlicht werden, ermöglichen diese die Konformitätsvermutung. Die Anwendung harmonisierter Normen ist insbesondere für [Klasse I mit Modul A](/de/conformity/self-assessment) entscheidend.
:::

---

## Anforderung 6 – Testergebnisse

**Annex VII Nr. 6:** Ergebnisse der durchgeführten Tests und Prüfungen:

| Testtyp | Beschreibung | Tooling |
|---------|-------------|---------|
| Statische Analyse (SAST) | Quellcode-Analyse auf Schwachstellen | SonarQube, Semgrep |
| Dynamische Analyse (DAST) | Laufzeitprüfung auf Schwachstellen | OWASP ZAP, Burp |
| Dependency Scanning | Prüfung der Abhängigkeiten | Trivy, Grype, Snyk |
| Container Scanning | Prüfung der Container-Images | Trivy |
| Secret Scanning | Suche nach Geheimnissen im Code | Gitleaks, GitGuardian |
| Penetrationstests | Manuelle Sicherheitsprüfung | Extern (bei Klasse I+) |
| Fuzzing | Robustheitstests | AFL, libFuzzer |

**Aufbewahrung:** Testergebnisse werden als CI/CD-Artefakte archiviert und sind über das Repository abrufbar.

---

## Anforderung 7 – Konformitätsbewertungsergebnisse

**Annex VII Nr. 7:** Ergebnisse der Konformitätsbewertung:

| Verfahren | Dokumentation | Dokumentationsort |
|-----------|-------------|-------------------|
| Modul A | Selbstbewertungsbericht | [Interne Kontrolle](/de/conformity/self-assessment) |
| Modul B+C | EU-Baumusterprüfbescheinigung | [Modul B+C](/de/conformity/module-bc) |
| Modul H | QMS-Zertifikat | [Modul H](/de/conformity/module-h) |
| EUCC | Cybersicherheitszertifikat | [EUCC](/de/conformity/eucc) |

---

## Anforderung 8 – EU-Konformitätserklärung

**Annex VII Nr. 8:** Kopie der EU-Konformitätserklärung:

→ [EU-Konformitätserklärung](/de/conformity/eu-declaration)
→ [Template](/de/templates/eu-declaration-of-conformity)

---

## Anforderung 9 – Support-Zeitraum

**Annex VII Nr. 9:** Festlegung des Support-Zeitraums:

→ [Support & Lifecycle](/de/technical-documentation/support-period)

---

## Vollständigkeitscheckliste

- [ ] Nr. 1: Produktbeschreibung erstellt
- [ ] Nr. 2: Design- und Entwicklungsprozesse dokumentiert
- [ ] Nr. 3: Cybersecurity-Risikobewertung durchgeführt
- [ ] Nr. 4: Schwachstellenbehandlung dokumentiert
- [ ] Nr. 4: SBOM generiert und archiviert
- [ ] Nr. 5: Angewandte Normen aufgelistet
- [ ] Nr. 6: Testergebnisse dokumentiert und archiviert
- [ ] Nr. 7: Konformitätsbewertungsergebnisse dokumentiert
- [ ] Nr. 8: EU-Konformitätserklärung erstellt
- [ ] Nr. 9: Support-Zeitraum festgelegt
- [ ] Alle Dokumente archiviert (10-Jahres-Retention)
- [ ] Alle Dokumente versioniert (Git)
