# 6.3 Update Mechanism

## 6.3.1 Overview

The Update Mechanism ensures that security updates are delivered to users in a secure, authentic, and timely manner.

::: info LEGAL BASIS
**Annex I, Part II, No. 7:** *"The manufacturer shall ensure that security updates are made available to users without delay and free of charge."*

**Annex I Part II (7) CRA:** The integrity of security updates must be ensured, in particular in the case of automatic installation.
:::

## 6.3.2 Update Channels

### Container-Based Products

```
Patch available
    │
    ├── Build new container image
    │   ├── CI/CD Pipeline (automated)
    │   ├── Trivy Scan (no new CVEs)
    │   ├── Generate SBOM
    │   └── Cosign signing
    │
    ├── Publish image
    │   ├── GitHub Container Registry (GHCR)
    │   └── Docker Hub (if configured)
    │
    ├── User notification
    │   ├── GitHub Release with changelog
    │   └── Security Advisory (for CVE fixes)
    │
    └── Update by user
        ├── docker pull <image>:<new-tag>
        ├── Verify signature: cosign verify
        └── Restart container
```

### Firmware Updates (OTA)

```
Patch available
    │
    ├── Build firmware
    │   ├── Build workflow (ESP32/STM32/Zephyr)
    │   ├── Generate SBOM
    │   └── Cosign signing
    │
    ├── Publish firmware
    │   ├── GitHub Release Asset
    │   └── OTA server (signed)
    │
    ├── OTA distribution
    │   ├── Device checks OTA server
    │   ├── Validate signature
    │   ├── Verify hash
    │   ├── Install firmware
    │   └── Anti-rollback check
    │
    └── Fallback
        └── Manual update option (USB/Serial)
```

### Software Packages (NuGet, NPM)

```
Patch available
    │
    ├── Build + publish package
    │   ├── Registry (NuGet.org, npmjs.com)
    │   └── SBOM as Release Asset
    │
    └── User updates
        └── npm update / dotnet update
```

## 6.3.3 Integrity Protection

Each update is protected by the following mechanisms:

| Mechanism | Container | Firmware | Packages |
|-----------|:---------:|:--------:|:--------:|
| Cosign Signature | ✅ | ✅ | 🔧 Planned |
| SHA256 Hash | ✅ | ✅ | ✅ (Registry) |
| TLS Transport | ✅ | ✅ | ✅ |
| Anti-Rollback | N/A | ✅ | N/A |
| Secure Boot Chain | N/A | ✅ (where supported) | N/A |

## 6.3.4 Free-of-Charge Provision

Pursuant to Annex I Part II (2) CRA, all security updates are provided **free of charge**:

- Container images via public registries (GHCR)
- Firmware via GitHub Releases (public download)
- Software packages via public registries

## 6.3.5 Update Frequency

| Product Type | Regular Updates | Security Updates |
|--------------|-----------------|------------------|
| Container Images | As needed / monthly | Immediately for CRITICAL/HIGH |
| Firmware | Quarterly | Immediately for CRITICAL/HIGH |
| Software Packages | As needed | Immediately for CRITICAL/HIGH |
