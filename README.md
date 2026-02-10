# CRA Compliance Documentation

Vollständige Compliance-Dokumentation und CI/CD-Automatisierung für den **EU Cyber Resilience Act** (Verordnung (EU) 2024/2847) und die **NIS2-Richtlinie** (Richtlinie (EU) 2022/2555) der BAUER GROUP.

> **Live-Dokumentation:** [cra.docs.bauer-group.com](https://cra.docs.bauer-group.com)
>
> Verfügbar in **Deutsch**, **English** und **简体中文** (Vereinfachtes Chinesisch)

## Regulatorische Fristen

| Frist | Pflicht |
|-------|---------|
| **11.09.2026** | Meldepflichten (24h/72h/14d an ENISA) |
| **11.12.2027** | Vollständige Anwendbarkeit (CE-Kennzeichnung, technische Dokumentation, Konformitätsbewertung) |

## Projektstruktur

```text
.
├── docs/                          # VitePress-Dokumentation
│   ├── de/                        # Deutsche Dokumentation (69 Seiten)
│   ├── en/                        # Englische Dokumentation (69 Seiten)
│   ├── zh/                        # Chinesische Dokumentation (69 Seiten, 简体中文)
│   ├── public/                    # Statische Assets (Logo, Favicon)
│   └── .vitepress/
│       ├── config.ts              # VitePress-Konfiguration
│       ├── locales/               # DE/EN/ZH Navigation + Sidebar
│       └── theme/                 # Custom Theme (BAUER CI)
├── .github/
│   ├── actions/                   # 4 Composite Actions (CRA-spezifisch)
│   └── workflows/                 # Reusable Workflows + Deployment
├── sbom/                          # SBOM-Artefakte (lokal)
├── internal/docs/                 # Interne Konzeptdokumente
└── package.json                   # @bauer-group/cra-compliance
```

## Dokumentation

207 Markdown-Seiten in vollständiger DE/EN/ZH-Parität (69 Seiten × 3 Sprachen), aufgeteilt in 8 Kapitel + Anhang:

| Kapitel | Sektion | Inhalt | Seiten |
|---------|---------|--------|--------|
| **1** | Überblick | CRA-Einführung, Zeitplan, Geltungsbereich, Wirtschaftsakteure, Durchsetzung, NIS2 | 15 |
| **2** | SBOM & Signierung | Generierung, Format, Speicherung, Signierung, Schlüssel, Verifikation | 7 |
| **3** | Schwachstellenmanagement | CVE-Monitoring, Dependency-Monitoring, Patch-Management, Risikobewertung, Handling | 6 |
| **4** | Incident Response | ENISA-Meldung, Playbook, Kommunikation, Disclosure Policy | 5 |
| **5** | Supply Chain | Dependency-Policy, Base-Image-Policy, Third-Party-Assessment, Wirtschaftsakteur-ID | 5 |
| **6** | Technische Dokumentation | Produktbeschreibung, Sicherheitsarchitektur, Update-Mechanismus, Support-Zeitraum, Annex VII | 7 |
| **7** | Konformität | CE-Kennzeichnung, EU-Erklärung, Selbstbewertung, Module B/C/H, EUCC, Produktklassifizierung | 11 |
| **8** | Compliance-Matrix | Anforderungs-Tooling-Zuordnung | 2 |
| **A** | Templates | ENISA-Frühwarnung/-Meldung/-Abschlussbericht, Incident-/Vulnerability-Report, Risikobewertung, EU-Konformitätserklärung, Produktsicherheitsinformation | 9 |

### CRA-Abdeckung

- Alle 10 Annexe vollständig dokumentiert (I-VII + vereinfachte Erklärung)
- Alle herstellerrelevanten Artikel (Art. 10-14)
- Alle Wirtschaftsakteur-Rollen (Art. 15-20)
- Durchsetzungskette (Art. 22-23, 52-58, 64)
- Regulatorischer Kontext (Art. 5-6, Art. 9, NIS2-Integration)

## CI/CD-Automatisierung

### Composite Actions

| Action | Funktion | CRA-Referenz |
|--------|----------|--------------|
| `cra-sbom-generate` | CycloneDX-SBOM-Generierung via Trivy | Art. 13 Abs. 23, Annex I Teil II Nr. 1 |
| `cra-sbom-sign` | Cosign-Signierung (keyless/Sigstore OIDC) | Art. 10 Abs. 12 |
| `cra-vulnerability-scan` | Multi-Engine-Scan (Trivy + Grype + OSV-Scanner) | Art. 10 Abs. 6, Annex I Teil II Nr. 2 |
| `cra-hub-report` | API-Reporting an Software Security Hub | - |

### Reusable Workflows

| Workflow | Funktion |
|----------|----------|
| `cra-scan.yml` | Geplanter/manueller Vulnerability-Scan mit GitHub-Issue-Erstellung bei CRITICAL |
| `cra-release.yml` | Release-Pipeline: SBOM-Generierung + Signierung + Vulnerability-Scan + SARIF-Upload |
| `cra-report.yml` | Sammelt CRA-Compliance-Daten und sendet sie an den Software Security Hub |
| `deploy-pages.yml` | VitePress-Build + GitHub Pages Deployment |
| `release.yml` | Semantic Release |

## Tech Stack

| Tool | Zweck |
|------|-------|
| [VitePress](https://vitepress.dev/) 1.6.x | Dokumentations-Framework |
| [CycloneDX](https://cyclonedx.org/) | SBOM-Format (JSON) |
| [Cosign](https://docs.sigstore.dev/) | SBOM-Signierung (Sigstore OIDC) |
| [Trivy](https://trivy.dev/) | SBOM-Generierung + Vulnerability-Scan |
| [Grype](https://github.com/anchore/grype) | Vulnerability-Scan (optional) |
| [OSV-Scanner](https://google.github.io/osv-scanner/) | Vulnerability-Scan (OSV-Datenbank) |
| [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) | Markdown-Linting |
| [linkinator](https://github.com/JustinBeckwith/linkinator) | Link-Validierung |

## Quickstart

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run docs:dev

# Produktions-Build
npm run docs:build

# Build-Preview
npm run docs:preview
```

### Verfuegbare Scripts

| Script | Beschreibung |
|--------|-------------|
| `npm run docs:dev` | Entwicklungsserver mit Hot Reload |
| `npm run docs:build` | Produktions-Build |
| `npm run docs:preview` | Preview des Produktions-Builds |
| `npm run docs:clean` | Build-Cache und dist bereinigen |
| `npm run lint` | Markdown-Linting |
| `npm run lint:fix` | Markdown-Linting mit Auto-Fix |
| `npm run validate` | Lint + Build + Link-Check |
| `npm run ci` | CI-Pipeline (install + lint + build) |

## Deployment

Push auf `main` (änderungen in `docs/`, `package.json`, `package-lock.json`) triggert automatisch:

1. Checkout + Node.js Setup (via `.nvmrc`)
2. `npm ci` + Markdown-Lint
3. VitePress-Build
4. GitHub Pages Deployment

## Nutzung der CRA-Workflows

Die Workflows sind als **Reusable Workflows** konzipiert und koennen von jedem Repository der Organisation eingebunden werden:

```yaml
# Täglicher Vulnerability-Scan
on:
  schedule:
    - cron: '0 6 * * *'
jobs:
  cra-scan:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-scan.yml@main
    permissions:
      contents: read
      security-events: write
      issues: write

# Release mit CRA-Artefakten
jobs:
  cra-release:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    permissions:
      contents: write
      id-token: write
      security-events: write
```

## Lizenz

Dieses Repository verwendet ein **Dual-License-Modell**:

| Bereich | Lizenz | SPDX |
|---------|--------|------|
| Code, Workflows, Actions, Konfiguration | [MIT License](LICENSE) | `MIT` |
| Dokumentation (`docs/`) | [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) | `CC-BY-NC-4.0` |

Die Dokumentation darf mit Namensnennung geteilt und bearbeitet werden, jedoch **nicht fuer kommerzielle Zwecke** verwendet werden.

Copyright © 2026 BAUER GROUP
