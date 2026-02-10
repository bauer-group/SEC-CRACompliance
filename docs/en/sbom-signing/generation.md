# 2.1 SBOM Generation

## 2.1.1 Generation Process

The SBOM is generated automatically with each release. The process is integrated into the existing CI/CD pipeline.

### Trigger

SBOM generation is triggered by:

- Push of a release tag (`v*.*.*`)
- Manual workflow dispatch
- PR merge into the main branch (as a pre-release)

### Generation Steps

**1. Create build artifact**

The release artifact (container image, binary, package) is built as usual.

**2. Generate SBOM**

```bash
# Container image SBOM
trivy image --format cyclonedx --output sbom.cdx.json <image>:<tag>

# Filesystem/source code SBOM
syft packages dir:. --output cyclonedx-json=sbom.cdx.json

# Alternative: Trivy filesystem
trivy fs --format cyclonedx --output sbom.cdx.json .
```

**3. Validate SBOM**

```bash
# Structural validation
trivy sbom sbom.cdx.json --exit-code 0

# Check completeness (components > 0)
jq '.components | length' sbom.cdx.json
```

**4. Enrich metadata**

The SBOM is enriched with the following metadata:

- Product name and version
- Build timestamp
- Build environment (GitHub Actions runner)
- Commit SHA
- Manufacturer information (BAUER GROUP)

## 2.1.2 Type-Specific Generation

### Docker/Container Images

```yaml
# In docker-build.yml
inputs:
  generate-sbom:
    default: true
  sbom-format:
    default: 'cyclonedx-json'
```

Trivy scans the finished container image and captures:

- OS packages (apt, apk, yum)
- Language-specific packages (npm, pip, go modules, etc.)
- Binary dependencies

### .NET Projects

```bash
# NuGet dependencies
syft packages dir:. --output cyclonedx-json=sbom.cdx.json
# Or: CycloneDX .NET Tool
dotnet tool install --global CycloneDX
dotnet CycloneDX <project>.csproj --output sbom.cdx.json --json
```

### Node.js Projects

```bash
# NPM dependencies
syft packages dir:. --output cyclonedx-json=sbom.cdx.json
# Or: CycloneDX Node Module
npx @cyclonedx/cyclonedx-npm --output-file sbom.cdx.json
```

### Python Projects

```bash
# pip/poetry dependencies
syft packages dir:. --output cyclonedx-json=sbom.cdx.json
# Or: CycloneDX Python
pip install cyclonedx-bom
cyclonedx-py environment --output-format json > sbom.cdx.json
```

### Firmware / Embedded (ESP32, STM32, Zephyr)

```bash
# PlatformIO project
syft packages dir:. --output cyclonedx-json=sbom.cdx.json

# Zephyr (west manifest)
# Custom script for extracting west.yml dependencies
```

::: warning NOTE ON EMBEDDED
For firmware projects, automatic SBOM generation is often incomplete. A manual review and, where necessary, supplementation of the SBOM is required, particularly for:

- Vendor SDKs (ESP-IDF, STM32 HAL)
- Statically linked libraries
- Bootloader components
:::

## 2.1.3 Quality Criteria

The generated SBOM must meet the following minimum requirements:

| Criterion | Requirement |
|-----------|-------------|
| Format | CycloneDX JSON (version 1.5+) |
| Spec version | `1.5` or higher |
| Metadata | Product name, version, timestamp, manufacturer |
| Components | At least top-level dependencies |
| Licences | Licence ID per component (where available) |
| Hashes | SHA256 hash per component (where available) |
| Validation | Schema-compliant, parseable, non-empty |
