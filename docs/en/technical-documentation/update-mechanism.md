# 6.3 Update Mechanism

## 6.3.1 Overview

The Update Mechanism ensures that security updates are delivered to users in a secure, authentic, and timely manner.

::: info LEGAL BASIS
**Annex I, Part II, No. 7:** *"The manufacturer shall ensure that security updates are made available to users without delay and free of charge."*

**Art. 10(12) CRA:** The integrity of security updates must be ensured, in particular in the case of automatic installation.
:::

## 6.3.2 Update Channels

### Container-Based Products

```
Patch verfügbar
    │
    ├── Neues Container-Image bauen
    │   ├── CI/CD Pipeline (automatisch)
    │   ├── Trivy Scan (keine neuen CVEs)
    │   ├── SBOM generieren
    │   └── Cosign signieren
    │
    ├── Image publizieren
    │   ├── GitHub Container Registry (GHCR)
    │   └── Docker Hub (falls konfiguriert)
    │
    ├── Nutzer-Benachrichtigung
    │   ├── GitHub Release mit Changelog
    │   └── Security Advisory (bei CVE-Fixes)
    │
    └── Update durch Nutzer
        ├── docker pull <image>:<new-tag>
        ├── Signatur verifizieren: cosign verify
        └── Container neu starten
```

### Firmware Updates (OTA)

```
Patch verfügbar
    │
    ├── Firmware bauen
    │   ├── Build-Workflow (ESP32/STM32/Zephyr)
    │   ├── SBOM generieren
    │   └── Cosign signieren
    │
    ├── Firmware publizieren
    │   ├── GitHub Release Asset
    │   └── OTA-Server (signiert)
    │
    ├── OTA-Verteilung
    │   ├── Gerät prüft OTA-Server
    │   ├── Signatur validieren
    │   ├── Hash verifizieren
    │   ├── Firmware installieren
    │   └── Anti-Rollback prüfen
    │
    └── Fallback
        └── Manuelle Update-Möglichkeit (USB/Serial)
```

### Software Packages (NuGet, NPM)

```
Patch verfügbar
    │
    ├── Paket bauen + publizieren
    │   ├── Registry (NuGet.org, npmjs.com)
    │   └── SBOM als Release Asset
    │
    └── Nutzer aktualisiert
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

Pursuant to Art. 10(7) CRA, all security updates are provided **free of charge**:

- Container images via public registries (GHCR)
- Firmware via GitHub Releases (public download)
- Software packages via public registries

## 6.3.5 Update Frequency

| Product Type | Regular Updates | Security Updates |
|--------------|-----------------|------------------|
| Container Images | As needed / monthly | Immediately for CRITICAL/HIGH |
| Firmware | Quarterly | Immediately for CRITICAL/HIGH |
| Software Packages | As needed | Immediately for CRITICAL/HIGH |
