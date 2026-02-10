# Kapitel 2: SBOM & Signierung

## Übersicht

Die Software Bill of Materials (SBOM) und die kryptographische Signierung von Artefakten sind zentrale Bausteine der CRA-Konformität. Dieses Kapitel beschreibt den vollständigen Lebenszyklus einer SBOM -- von der Generierung über die Formatierung und Archivierung bis hin zur Signierung -- sowie die übergreifenden Signierungsverfahren für alle Artefakttypen (Container-Images, Binaries, Firmware, SBOMs).

::: info RECHTSGRUNDLAGE
**Art. 13 Abs. 23 CRA:** *„Der Hersteller ermittelt und dokumentiert die Schwachstellen und Komponenten, die in dem Produkt mit digitalen Elementen enthalten sind, unter anderem durch Erstellung einer Software-Stückliste in einem allgemein gebräuchlichen und maschinenlesbaren Format, die mindestens die Top-Level-Abhängigkeiten des Produkts erfasst."*

**Art. 10 Abs. 12 CRA:** *„Der Hersteller stellt sicher, dass Sicherheitsupdates, die an Nutzer weitergegeben werden, sicher bereitgestellt werden und dass die Integrität des Produkts gewährleistet ist, wenn diese Sicherheitsupdates automatisch installiert werden."*

**Annex I, Teil I, Nr. 3:** *„Produkte mit digitalen Elementen [...] gewährleisten den Schutz der Integrität gespeicherter, übermittelter oder anderweitig verarbeiteter Daten [...] vor Manipulation oder Veränderung."*
:::

## Prozessübersicht

```
Release-Trigger (Git Tag)
    │
    ▼
Build Artifact (Binary, Image, Firmware)
    │
    ├──▶ SBOM generieren (Trivy/Syft → CycloneDX JSON)
    │       ├──▶ SBOM als Release-Asset anhängen
    │       ├──▶ SBOM signieren (Cosign)
    │       ├──▶ SHA256-Hash erzeugen
    │       └──▶ SBOM archivieren (Compliance-Repo)
    │
    ├──▶ Build-Artefakt signieren (Cosign)
    │       ├──▶ SHA256-Hash erzeugen
    │       └──▶ Signatur als Release-Asset
    │
    └──▶ Release
            ├── Artifact + Signature + Hash
            ├── SBOM + Signature + Hash
            ├── Public Key (cosign.pub)
            └── SHA256SUMS.txt
```

## Anforderungen

| Anforderung | Umsetzung | CRA-Artikel |
|-------------|-----------|-------------|
| Maschinenlesbares Format | CycloneDX JSON | Art. 13 Abs. 23 |
| Top-Level-Abhängigkeiten | Automatische Erkennung via Syft/Trivy | Art. 13 Abs. 23 |
| Pro Release | SBOM wird bei jedem Release-Tag generiert | Best Practice |
| Integritätsschutz | Signierung aller Artefakte mit Cosign | Art. 10 Abs. 12 |
| Authentizität | Kryptographische Signatur belegt Herkunft | Annex I, Teil I, Nr. 3 |
| Nachvollziehbarkeit | Git-Historie + Release-Assets | Annex VII |
| Verfügbarkeit | Archivierung im Compliance-Repo + Release-Assets | Art. 13 Abs. 23 |

## Signierte Artefakttypen

| Artefakt | Signierung | Tool | Status |
|----------|-----------|------|--------|
| Docker/Container Images | Cosign (Image Signing) | `docker-build.yml` | Implementiert |
| Release Binaries | Cosign (Blob Signing) | `cra-release.yml` | Implementiert |
| SBOMs | Cosign (Blob Signing, keyless OIDC) | `cra-release.yml` | Implementiert |
| Firmware Binaries | Cosign (Blob Signing) | Build-Workflows | Geplant |

## Tooling

| Tool | Funktion | Einsatzbereich |
|------|----------|----------------|
| **Trivy** | SBOM-Generierung aus Container-Images und Filesystems | CycloneDX, SPDX |
| **Syft** | SBOM-Generierung aus Source Code und Binaries | CycloneDX, SPDX |
| **Cosign** | Signierung von Artefakten und SBOMs | Sigstore |
| **GitHub Actions** | Automatisierung der gesamten Pipeline | CI/CD |

## Workflow-Integration

Die SBOM-Generierung und Signierung erfolgt über zwei Wege:

**1. Automation-Templates (bestehend):**
Die SBOM-Generierung ist in den bestehenden Release-Workflow (`automatic-release.yml`) über das Modul `modules-license-compliance.yml` integriert.

```yaml
# Aktivierung in Workflow-Aufruf
license-compliance:
  generate-sbom: true
  sbom-format: cyclonedx-json
```

**2. CRA Compliance Workflows (neu):**
Der dedizierte CRA-Release-Workflow übernimmt SBOM-Generierung, Signierung und Archivierung als Release-Assets -- unabhängig von den bestehenden Release-Workflows.

```yaml
# Nutzung in jedem Repository (Zero-Config)
jobs:
  cra-release:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    permissions:
      contents: write
      id-token: write
      security-events: write
```

Der Workflow nutzt die Composite Actions `cra-sbom-generate` (Trivy, Auto-Detect) und `cra-sbom-sign` (Cosign, keyless OIDC).

## Kapitelstruktur

| Sektion | Thema | Beschreibung |
|---------|-------|-------------|
| | [SBOM-Generierung](/de/sbom-signing/generation) | Automatisierte Erzeugung der SBOM pro Release |
| | [Format-Spezifikation](/de/sbom-signing/format) | CycloneDX JSON als primäres SBOM-Format |
| | [Archivierung & Retention](/de/sbom-signing/storage) | Speicherorte und Aufbewahrungsfristen |
| | [Signierung](/de/sbom-signing/signing) | SBOM- und Artefakt-Signierung mit Cosign |
| | [Key Management](/de/sbom-signing/key-management) | Schlüsselverwaltung und -rotation |
| | [Verifikation](/de/sbom-signing/verification) | Verifizierungsverfahren für Endnutzer und Systeme |
