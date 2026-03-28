# 8.2 Automatisierte Workflows

## Architektur

Die CRA-Automatisierung der BAUER GROUP ist auf zwei Repositories aufgeteilt:

- **CRA-spezifische** Workflows und Actions leben in `SEC-CRACompliance` (dieses Repo)
- **Generische** Actions (VEX-Generierung, SBOM-Attestation) leben in `automation-templates`

Consumer-Repositories (Ihre Produkte) rufen den CRA-Release-Workflow mit einer einzigen `uses:`-Zeile auf.

```
┌──────────────────────────────────────────┐
│          Consumer-Repo (Produkt)          │
│                                          │
│  uses: bauer-group/SEC-CRACompliance/    │
│        .github/workflows/cra-release.yml │
└──────────────────┬───────────────────────┘
                   │
    ┌──────────────┼──────────────┐
    ▼              ▼              ▼
┌─────────┐  ┌──────────┐  ┌────────────┐
│ CRA-Repo│  │ CRA-Repo │  │ Automation │
│ Actions │  │ Actions  │  │ Templates  │
├─────────┤  ├──────────┤  ├────────────┤
│ SBOM    │  │Compliance│  │ VEX        │
│ Sign    │  │ Report   │  │ Attestation│
│ Scan    │  │          │  │            │
│ Hub     │  │          │  │            │
└─────────┘  └──────────┘  └────────────┘
CRA-spezifisch CRA-spezifisch  Generisch
```

## Reusable Workflows

### `cra-release.yml` — Release-Artefakte

Der primäre Workflow. Erzeugt, signiert und archiviert alle CRA-Artefakte bei einem Release.

**Verwendung (Zero-Config):**

```yaml
jobs:
  cra:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    permissions:
      contents: write
      id-token: write
      attestations: write
      security-events: write
```

**Pipeline-Ablauf:**

| Schritt | Action | Artefakt | CRA-Referenz |
|---------|--------|----------|-------------|
| 1 | SBOM-Generierung | `sbom.cdx.json` | Art. 13(23) |
| 2 | SBOM-Signierung (Cosign) | `.sig` + `.cert` | Art. 10(12) |
| 3 | SBOM-Attestation | GitHub Attestation | Art. 10(12) |
| 4 | Vulnerability Scan | `vulnerability-report.json` | Art. 10(6) |
| 5 | VEX-Generierung | `vex.openvex.json` | Annex I II.2 |
| 6 | Compliance Report | `.json` + `.md` | Annex VII |
| 7 | SARIF-Upload | GitHub Security Tab | Art. 10(8) |
| 8 | Release-Anhang | Alle Artefakte am Release | Art. 13 |

::: tip Zero Config
Alle neuen Features (Attestation, VEX, Compliance Report) sind standardmäßig aktiviert. Bestehende Consumer erhalten sie automatisch ohne Workflow-Änderungen.
:::

### `cra-scan.yml` — Geplanter Vulnerability Scan

Für kontinuierliches CVE-Monitoring (Art. 10 Abs. 8). Täglich per Cron-Schedule ausführen.

### `cra-report.yml` — Hub-API-Report

Sendet Compliance-Daten an die Software Security Hub API zur zentralen Erfassung.

## Composite Actions

### CRA-spezifisch (dieses Repo)

| Action | Zweck | Ausgabe |
|--------|-------|---------|
| `cra-sbom-generate` | CycloneDX SBOM via Trivy (Sprache auto-erkannt) | `sbom.cdx.json` |
| `cra-sbom-sign` | Cosign Keyless Signing (Sigstore OIDC) | `.sig` + `.cert` |
| `cra-vulnerability-scan` | Multi-Engine-Scan (Trivy + Grype + OSV) | JSON + SARIF |
| `cra-hub-report` | Versionierter API-Envelope an Security Hub | API-Antwort |
| `cra-compliance-report` | Aggregierter Compliance-Report mit Scoring | `.json` + `.md` |

### Generisch (automation-templates)

| Action | Zweck | Ausgabe |
|--------|-------|---------|
| `vex-generate` | OpenVEX-Dokument aus Trivy-Scan + manuelle Overrides | `vex.openvex.json` |
| `sbom-attest` | GitHub-native SBOM-Attestation | Attestation-ID |

## Release-Artefakte

Ein CRA-konformer Release enthält:

| Artefakt | Format | Zweck | CRA-Referenz |
|----------|--------|-------|-------------|
| `sbom.cdx.json` | CycloneDX JSON | Software Bill of Materials | Art. 13(23) |
| `sbom.cdx.json.sig` | Cosign-Signatur | SBOM-Integrität (portabel) | Art. 10(12) |
| `sbom.cdx.json.cert` | X.509-Zertifikat | Signierungsidentität | Art. 10(12) |
| GitHub Attestation | Sigstore | SBOM-Provenance (GitHub-nativ) | Art. 10(12) |
| `vulnerability-report.json` | Trivy JSON | Bekannte Schwachstellen | Art. 10(6) |
| `vex.openvex.json` | OpenVEX v0.2.0 | Schwachstellen-Ausnutzbarkeit | Annex I II.2 |
| `cra-compliance-report.json` | Schema v1.0.0 | Maschinenlesbarer Compliance-Status | Annex VII |
| `cra-compliance-report.md` | Markdown | Menschenlesbarer Compliance-Status | Annex VII |

## VEX-Triage

Erstellen Sie `security/vex-overrides.json` in Ihrem Produkt-Repo für manuelle Triage-Entscheidungen:

| Status | Verwendung |
|--------|-----------|
| `not_affected` | Schwachstelle existiert, ist aber im Produkt nicht ausnutzbar |
| `affected` | Schwachstelle ist ausnutzbar — Behebung erforderlich |
| `fixed` | Schwachstelle wurde behoben |
| `under_investigation` | Bewertung ausstehend (automatisch generierter Standard) |

## Compliance-Scoring

| Kategorie | Max | Kriterien |
|-----------|-----|-----------|
| SBOM | 20 | Generiert (10) + Signiert (5) + Attestiert (5) |
| Signierung | 15 | Cosign verifiziert (10) + Attestation vorhanden (5) |
| Schwachstellen | 20 | 0 kritische (15) + 0 hohe (5) |
| VEX | 10 | Generiert (5) + Manuelle Overrides vorhanden (5) |
| Sicherheitsrichtlinie | 15 | SECURITY.md (10) + CVD-Prozess definiert (5) |
| Supportzeitraum | 10 | In Konfiguration definiert (10) |
| CRA-Artikelabdeckung | 10 | Prozentsatz erfüllter Artikel |

::: tip CLI-TOOL
Nutzen Sie den [cra-check CLI](/de/compliance-matrix/cra-check) zur lokalen Prüfung oder für beliebige GitHub-Repos.
:::
