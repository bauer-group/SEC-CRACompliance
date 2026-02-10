# 2.1 SBOM-Generierung

## Generierungsprozess

Die SBOM wird automatisiert bei jedem Release generiert. Der Prozess ist in die bestehende CI/CD-Pipeline integriert.

### Trigger

Die SBOM-Generierung wird ausgelöst durch:

- Push eines Release-Tags (`v*.*.*`)
- Manuellen Workflow-Dispatch
- PR-Merge in den Main-Branch (als Pre-Release)

### Generierungsschritte

**1. Build Artifact erstellen**

Das Release-Artefakt (Container-Image, Binary, Package) wird regulär gebaut.

**2. SBOM generieren**

```bash
# Container-Image SBOM
trivy image --format cyclonedx --output sbom.cdx.json <image>:<tag>

# Filesystem/Source-Code SBOM
syft packages dir:. --output cyclonedx-json=sbom.cdx.json

# Alternativ: Trivy Filesystem
trivy fs --format cyclonedx --output sbom.cdx.json .
```

**3. SBOM validieren**

```bash
# Struktur-Validierung
trivy sbom sbom.cdx.json --exit-code 0

# Prüfe Vollständigkeit (Komponenten > 0)
jq '.components | length' sbom.cdx.json
```

**4. Metadaten anreichern**

Die SBOM wird mit folgenden Metadaten ergänzt:

- Produkt-Name und Version
- Build-Zeitstempel
- Build-Umgebung (GitHub Actions Runner)
- Commit-SHA
- Hersteller-Informationen (BAUER GROUP)

## Typ-spezifische Generierung

### Docker/Container-Images

```yaml
# In docker-build.yml
inputs:
  generate-sbom:
    default: true
  sbom-format:
    default: 'cyclonedx-json'
```

Trivy scannt das fertige Container-Image und erfasst:

- OS-Pakete (apt, apk, yum)
- Sprachspezifische Pakete (npm, pip, go modules, etc.)
- Binär-Abhängigkeiten

### .NET-Projekte

```bash
# NuGet-Abhängigkeiten
syft packages dir:. --output cyclonedx-json=sbom.cdx.json
# Oder: CycloneDX .NET Tool
dotnet tool install --global CycloneDX
dotnet CycloneDX <project>.csproj --output sbom.cdx.json --json
```

### Node.js-Projekte

```bash
# NPM-Abhängigkeiten
syft packages dir:. --output cyclonedx-json=sbom.cdx.json
# Oder: CycloneDX Node Module
npx @cyclonedx/cyclonedx-npm --output-file sbom.cdx.json
```

### Python-Projekte

```bash
# pip/poetry Abhängigkeiten
syft packages dir:. --output cyclonedx-json=sbom.cdx.json
# Oder: CycloneDX Python
pip install cyclonedx-bom
cyclonedx-py environment --output-format json > sbom.cdx.json
```

### Firmware / Embedded (ESP32, STM32, Zephyr)

```bash
# PlatformIO-Projekt
syft packages dir:. --output cyclonedx-json=sbom.cdx.json

# Zephyr (west manifest)
# Benutzerdefiniertes Script zur Extraktion der west.yml Abhängigkeiten
```

::: warning HINWEIS EMBEDDED
Für Firmware-Projekte ist die automatische SBOM-Generierung oft unvollständig. Eine manuelle Prüfung und ggf. Ergänzung der SBOM ist erforderlich, insbesondere für:

- Vendor-SDKs (ESP-IDF, STM32 HAL)
- Statisch gelinkte Libraries
- Bootloader-Komponenten
:::

## Qualitätskriterien

Die generierte SBOM muss folgende Mindestanforderungen erfüllen:

| Kriterium | Anforderung |
|-----------|-------------|
| Format | CycloneDX JSON (Version 1.5+) |
| Spec-Version | `1.5` oder höher |
| Metadata | Produkt-Name, Version, Zeitstempel, Hersteller |
| Components | Mindestens Top-Level-Abhängigkeiten |
| Lizenzen | Lizenz-ID je Komponente (soweit verfügbar) |
| Hashes | SHA256-Hash je Komponente (soweit verfügbar) |
| Validierung | Schema-konform, parsebar, nicht leer |
