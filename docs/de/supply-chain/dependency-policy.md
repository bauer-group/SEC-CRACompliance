# 6.1 Dependency Policy

## Grundsätze

### 1. Minimalprinzip

Nur Abhängigkeiten einsetzen, die für die Funktionalität des Produkts notwendig sind. Unnötige Abhängigkeiten erhöhen die Angriffsfläche.

### 2. Vertrauenswürdigkeit

Abhängigkeiten müssen aus vertrauenswürdigen Quellen stammen und aktiv gepflegt werden.

### 3. Lizenzkonformität

Nur Abhängigkeiten mit kompatiblen Lizenzen verwenden.

### 4. Versionierung

Abhängigkeiten müssen auf spezifische Versionen gepinnt werden (kein `latest`, keine Ranges).

## Erlaubte Lizenzen

| Lizenz | Status |
|--------|--------|
| MIT | ✅ Erlaubt |
| Apache-2.0 | ✅ Erlaubt |
| BSD-2-Clause | ✅ Erlaubt |
| BSD-3-Clause | ✅ Erlaubt |
| ISC | ✅ Erlaubt |
| CC0-1.0 | ✅ Erlaubt |
| Unlicense | ✅ Erlaubt |
| MPL-2.0 | ⚠️ Prüfung erforderlich |

## Verbotene Lizenzen

| Lizenz | Status | Grund |
|--------|--------|-------|
| GPL-2.0 | ❌ Verboten | Copyleft – kann proprietären Code betreffen |
| GPL-3.0 | ❌ Verboten | Starkes Copyleft |
| AGPL-3.0 | ❌ Verboten | Netzwerk-Copyleft |
| SSPL | ❌ Verboten | Server-Side Copyleft |
| EUPL (ohne Prüfung) | ⚠️ Prüfung | Kompatibilitätsprüfung notwendig |

Die Lizenzprüfung wird automatisiert durch `modules-license-compliance.yml` durchgeführt.

## Bewertungskriterien für neue Abhängigkeiten

Vor der Aufnahme einer neuen Abhängigkeit:

| Kriterium | Mindestanforderung |
|-----------|-------------------|
| **Wartung** | Letzter Commit < 6 Monate |
| **Community** | >100 GitHub Stars oder etabliertes Projekt |
| **Sicherheitshistorie** | Keine unbehobenen CRITICAL CVEs |
| **Lizenz** | Auf der Erlaubtliste |
| **Transitive Abhängigkeiten** | Keine bekannten Risiken |
| **Maintainer** | Identifizierbar, keine anonymen Einweg-Accounts |

## Automatisierte Durchsetzung

### CI/CD Pipeline

```yaml
# Jeder PR wird geprüft auf:
- Security Scan (Trivy/Grype) → Blockiert bei CRITICAL
- License Compliance → Blockiert bei verbotenen Lizenzen
- Dependabot Alerts → Info bei neuen Schwachstellen
```

### Dependabot-Konfiguration

- Wöchentliche Prüfung aller Ökosysteme
- Automatische PRs bei Sicherheitsupdates
- Auto-Merge für Patch-Updates vertrauenswürdiger Pakete

## Prozess bei Supply-Chain-Angriffen

Bei Verdacht auf kompromittierte Abhängigkeiten (Dependency Confusion, Typosquatting, Maintainer Takeover):

1. **Sofort:** Betroffene Abhängigkeit in allen Projekten identifizieren (SBOM-Suche)
2. **Innerhalb 4h:** Abhängigkeit auf sichere Version pinnen oder entfernen
3. **Innerhalb 24h:** Prüfen ob kompromittierte Version jemals in Produktion war
4. **Bei Kompromittierung:** Incident-Response-Playbook aktivieren
