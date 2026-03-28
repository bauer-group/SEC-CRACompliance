# 8.3 CRA Compliance Checker (cra-check)

## Übersicht

`cra-check` ist ein Zero-Dependency Node.js CLI-Tool zur Prüfung der CRA-Compliance eines Produkts. Es prüft Vorhandensein und Qualität von Compliance-Artefakten — SBOM, VEX, Vulnerability Scans, Sicherheitsrichtlinien und Supportzeitraum.

## Verwendung

```bash
# Aktuelles Verzeichnis prüfen
npx @bauer-group/cra-check

# GitHub-Repository prüfen (neuestes Release)
npx @bauer-group/cra-check bauer-group/mein-produkt

# JSON-Ausgabe für Automatisierung
npx @bauer-group/cra-check --format json

# CI-Modus (Exit-Code 1 bei Unterschreitung)
npx @bauer-group/cra-check --ci --min-score 70
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
| `SECURITY.md` | Sicherheitsrichtlinie, CVD-Prozess definiert |
| `cra-config.json` | Supportzeitraum-Definition |

### Remote-Modus

Ruft Daten über die GitHub API ab — Release-Assets, Signaturen, SECURITY.md.

## Ausgabe

```
  CRA Compliance: mein-produkt v2.3.1
  ══════════════════════════════════════════

  SBOM                ✅ PASS  CycloneDX, 142 Komponenten
  SBOM Signiert       ✅ PASS  Cosign-Signatur + Zertifikat vorhanden
  VEX-Dokument        ✅ PASS  15 Statements (3 bewertet)
  Schwachstellen      ⚠️ WARN  0 kritisch, 2 hoch, 5 mittel, 3 niedrig
  Sicherheitsrichtl.  ✅ PASS  SECURITY.md mit CVD-Prozess
  Supportzeitraum     ✅ PASS  5 Jahre

  Score: 85/100 ████████████████░░░░ PASS
```

## CI/CD-Integration

```yaml
- name: 🔍 CRA Compliance Check
  run: npx @bauer-group/cra-check --ci --min-score 70
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Exit-Codes

| Code | Bedeutung |
|------|-----------|
| `0` | Score >= min-score (PASS) |
| `1` | Score < min-score (FAIL) — nur mit `--ci` |
| `2` | Schwerwiegender Fehler |

## Optionen

| Option | Standard | Beschreibung |
|--------|----------|-------------|
| `--format <terminal\|json>` | `terminal` | Ausgabeformat |
| `--ci` | `false` | CI-Modus: Exit-Code bei Fehler |
| `--min-score <n>` | `70` | Mindest-Score |
| `--github-token <token>` | `GITHUB_TOKEN` | GitHub API-Authentifizierung |
| `--release <tag>` | `latest` | Release-Tag für Remote-Modus |
| `--verbose` | `false` | Score-Aufschlüsselung anzeigen |

## Voraussetzungen

- Node.js >= 20
- Keine npm-Abhängigkeiten
