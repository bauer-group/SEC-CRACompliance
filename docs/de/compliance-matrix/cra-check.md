# 8.3 CRA Compliance Checker (cra-check)

## Übersicht

`cra-check` ist ein Zero-Dependency Node.js CLI-Tool zur Prüfung der CRA-Compliance eines Produkts. Es prüft Vorhandensein und Qualität von Compliance-Artefakten — SBOM, VEX, Vulnerability Scans, Sicherheitsrichtlinien und Supportzeitraum.

## Installation

Keine Installation erforderlich. Direkt über `npx` ausführen:

```bash
npx @bauer-group/cra-check
```

Oder global installieren:

```bash
npm install -g @bauer-group/cra-check
```

## Verwendung

```bash
# Aktuelles Verzeichnis prüfen
cra-check

# Bestimmtes Verzeichnis prüfen
cra-check /path/to/project

# GitHub-Repository prüfen (neuestes Release)
cra-check bauer-group/my-product

# Bestimmtes Release prüfen
cra-check bauer-group/my-product --release v2.0.0

# JSON-Ausgabe für Automatisierung
cra-check --format json

# CI-Modus (Exit-Code 1 bei Unterschreitung)
cra-check --ci --min-score 70
```

## Modi

### Lokaler Modus

Durchsucht das Dateisystem nach CRA-Artefakten:

| Datei | Prüfung |
|-------|---------|
| `sbom.cdx.json` | SBOM vorhanden, gültig, Komponentenanzahl |
| `sbom.cdx.json.sig` + `.cert` | Cosign-Signatur vorhanden |
| `vex.openvex.json` | VEX-Dokument, Statements, Triage-Status |
| `vulnerability-report.json` | Schweregrad-Zählung (kritisch/hoch/mittel/niedrig) |
| `SECURITY.md` | Sicherheitsrichtlinie vorhanden, CVD-Prozess definiert |
| `cra-config.json` | Supportzeitraum-Definition |

### Remote-Modus

Ruft Daten über die GitHub API ab:

- Lädt Release-Assets herunter (SBOM, VEX, Vulnerability Report)
- Prüft auf Signaturdateien im Release
- Verifiziert, dass SECURITY.md im Repository vorhanden ist
- Extrahiert den Supportzeitraum aus dem Compliance Report

::: tip AUTHENTIFIZIERUNG
`GITHUB_TOKEN` setzen für private Repositories und höhere API-Rate-Limits:

```bash
export GITHUB_TOKEN=ghp_...
cra-check bauer-group/private-repo
```

:::

## Ausgabe

### Terminal (Standard)

```
  CRA Compliance: my-product v2.3.1
  ══════════════════════════════════════════

  SBOM                ✅ PASS  CycloneDX, 142 Komponenten
  SBOM Signiert       ✅ PASS  Cosign-Signatur + Zertifikat vorhanden
  VEX-Dokument        ✅ PASS  15 Statements (3 bewertet)
  Schwachstellen      ⚠️ WARN  0 kritisch, 2 hoch, 5 mittel, 3 niedrig
  Sicherheitsrichtl.  ✅ PASS  SECURITY.md mit CVD-Prozess
  Supportzeitraum     ✅ PASS  5 Jahre

  Score: 85/100 ████████████████░░░░ PASS
```

### JSON (`--format json`)

```json
{
  "$schema": "https://cra.docs.bauer-group.com/schemas/cra-check/v1.0.0",
  "product": { "name": "my-product", "version": "2.3.1" },
  "checks": [
    { "name": "SBOM", "status": "pass", "details": "CycloneDX, 142 components" }
  ],
  "complianceScore": {
    "score": 85,
    "maxScore": 100,
    "passed": true
  }
}
```

## CI/CD-Integration

### GitHub Actions

```yaml
- name: 🔍 CRA Compliance Check
  run: npx @bauer-group/cra-check --ci --min-score 70
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Exit-Codes

| Code | Bedeutung |
|------|-----------|
| `0` | Score >= min-score (PASS) |
| `1` | Score < min-score (FAIL) — nur mit `--ci` |
| `2` | Schwerwiegender Fehler (ungültiges Ziel, Netzwerkfehler) |

## Scoring

Siehe [Compliance Scoring](/de/compliance-matrix/automation-workflows#compliance-scoring) für den vollständigen Scoring-Algorithmus.

## Optionen

| Option | Standard | Beschreibung |
|--------|----------|-------------|
| `--format <terminal\|json>` | `terminal` | Ausgabeformat |
| `--ci` | `false` | CI-Modus: Exit-Code ungleich null bei Fehler |
| `--min-score <n>` | `70` | Mindest-Score |
| `--github-token <token>` | `GITHUB_TOKEN` env | GitHub API-Authentifizierung |
| `--release <tag>` | `latest` | Release-Tag für Remote-Modus |
| `--no-color` | `false` | ANSI-Farben deaktivieren |
| `--verbose` | `false` | Score-Aufschlüsselung anzeigen |
| `-h, --help` | — | Hilfetext anzeigen |
| `-v, --version` | — | Version anzeigen |

## Voraussetzungen

- Node.js >= 20
- Keine npm-Abhängigkeiten (Zero-Dependency-Design)
