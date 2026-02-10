# Chapter 2: SBOM & Signing

## Overview

The Software Bill of Materials (SBOM) and the signing of software artifacts are central pillars of CRA compliance. The SBOM provides a transparent inventory of all components contained in a product, while signing ensures the integrity and authenticity of both the SBOM itself and all delivered artifacts.

::: info LEGAL BASIS
**Art. 13(23) CRA:** *"The manufacturer shall identify and document vulnerabilities and components contained in the product with digital elements, including by drawing up a software bill of materials in a commonly used and machine-readable format covering at least the top-level dependencies of the product."*

**Art. 10(12) CRA:** *"The manufacturer shall ensure that security updates distributed to users are provided in a secure manner and that the integrity of the product is ensured when such security updates are installed automatically."*

**Annex I, Part I, No. 3:** *"Products with digital elements [...] shall ensure the protection of the integrity of stored, transmitted or otherwise processed data [...] against manipulation or alteration."*
:::

## SBOM Lifecycle

Pursuant to Art. 13(23) CRA, the manufacturer must create an SBOM that covers at least the top-level dependencies of the product. The SBOM is generated automatically with each release and undergoes the following lifecycle:

```
Release Trigger (Git Tag)
    |
    v
Build Artifact
    |
    v
Generate SBOM (Trivy/Syft -> CycloneDX JSON)
    |
    |-->  Attach SBOM as release asset
    |-->  Sign SBOM (Cosign)
    |-->  Generate SHA256 hash
    |-->  Attach hash + signature as release asset
    +-->  Archive SBOM (compliance repo)
```

## Signing Architecture

All artifacts produced during the release process are signed to guarantee integrity and authenticity. The signing architecture covers every deliverable:

```
Build Pipeline
    |
    +-- Build Artifact (Binary, Image, Firmware)
    |   +-- Generate SHA256 hash
    |   +-- Sign with Cosign
    |
    +-- SBOM (CycloneDX JSON)
    |   +-- Generate SHA256 hash
    |   +-- Sign with Cosign
    |
    +-- Release
        +-- Artifact + Signature + Hash
        +-- SBOM + Signature + Hash
        +-- Public Key (cosign.pub)
        +-- SHA256SUMS.txt
```

## Requirements

| Requirement | Implementation | CRA Article |
|-------------|----------------|-------------|
| Machine-readable SBOM format | CycloneDX JSON | Art. 13(23) |
| Top-level dependencies | Automatic detection via Syft/Trivy | Art. 13(23) |
| Per-release SBOM | SBOM is generated for each release tag | Best Practice |
| Integrity protection | Signing with Cosign (all artifacts and SBOMs) | Art. 10(12) |
| Traceability | Git history + release assets | Annex VII |
| Availability | Archiving in compliance repo + release assets | Art. 13(23) |

## Signed Artifact Types

| Artifact | Signing Method | Tool | Status |
|----------|----------------|------|--------|
| Docker/Container Images | Cosign (Image Signing) | `docker-build.yml` | Implemented |
| Release Binaries | Cosign (Blob Signing) | `cra-release.yml` | Implemented |
| SBOMs | Cosign (Blob Signing, keyless OIDC) | `cra-release.yml` / `cra-sbom-sign` | Implemented |
| Firmware Binaries | Cosign (Blob Signing) | Build Workflows | Planned |

## Tooling

| Tool | Function | Format |
|------|----------|--------|
| **Trivy** | SBOM generation from container images and filesystems | CycloneDX, SPDX |
| **Syft** | SBOM generation from source code and binaries | CycloneDX, SPDX |
| **Cosign** | Signing and verification of artifacts and SBOMs | Sigstore |
| **GitHub Actions** | Automation of generation, signing, and archiving | - |

## Workflow Integration

SBOM generation and signing are performed via two paths:

**1. Automation Templates (existing):**
SBOM generation is integrated into the existing release workflow (`automatic-release.yml`) via the `modules-license-compliance.yml` module.

```yaml
# Activation in workflow call
license-compliance:
  generate-sbom: true
  sbom-format: cyclonedx-json
```

**2. CRA Compliance Workflows (new):**
The dedicated CRA release workflow handles SBOM generation, signing, and archiving as release assets -- independently of the existing release workflows.

```yaml
# Usage in any repository (zero-config)
jobs:
  cra-release:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    permissions:
      contents: write
      id-token: write
      security-events: write
```

The workflow uses the composite actions `cra-sbom-generate` (Trivy, auto-detect) and `cra-sbom-sign` (Cosign, keyless OIDC).

## Chapter Structure

| Section | Topic | Description |
|---------|-------|-------------|
| **1** | [SBOM Generation](/en/sbom-signing/generation) | Generation process, triggers, and type-specific tooling |
| **2** | [Format Specification](/en/sbom-signing/format) | CycloneDX JSON format, required fields, and naming conventions |
| **3** | [Archiving & Retention](/en/sbom-signing/storage) | Storage locations, retention policy, and access |
| **4** | [Signing](/en/sbom-signing/signing) | SBOM signing, artifact signing, and Cosign procedures |
| **5** | [Key Management](/en/sbom-signing/key-management) | Key generation, storage, rotation, and emergency procedures |
| **6** | [Verification](/en/sbom-signing/verification) | Verification procedures for end users, systems, and regulators |
