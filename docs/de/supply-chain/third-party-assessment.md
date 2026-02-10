# 5.3 Third-Party Assessment

## 5.3.1 Bewertung von Drittkomponenten

Gemäß Art. 10 Abs. 4 CRA muss der Hersteller bei der Integration von Drittkomponenten die gebotene Sorgfalt walten lassen. Diese Seite beschreibt den Bewertungsprozess.

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

## 5.3.5 Dokumentation

Für die technische Dokumentation (Annex VII CRA) wird eine Liste aller Drittkomponenten gepflegt:

- Die **SBOM** dient als maschinenlesbares Verzeichnis
- Manuelle Bewertungen werden im Produktdokumentationsordner abgelegt
- Die License Compliance Reports werden als Build-Artefakte archiviert
