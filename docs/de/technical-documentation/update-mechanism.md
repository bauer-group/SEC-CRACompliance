# 6.3 Update-Mechanismus

## 6.3.1 Übersicht

Der Update-Mechanismus stellt sicher, dass Sicherheitsupdates sicher, authentisch und zeitnah an Nutzer ausgeliefert werden.

::: info RECHTSGRUNDLAGE
**Annex I, Teil II, Nr. 7:** *„Der Hersteller stellt sicher, dass Sicherheitsupdates den Nutzern unverzüglich und kostenlos zur Verfügung gestellt werden."*

**Annex I Teil II (7) CRA:** Die Integrität von Sicherheitsupdates muss gewährleistet sein, insbesondere bei automatischer Installation.
:::

## 6.3.2 Update-Kanäle

### Container-basierte Produkte

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

### Firmware-Updates (OTA)

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

### Software-Pakete (NuGet, NPM)

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

## 6.3.3 Integritätsschutz

Jedes Update wird durch folgende Mechanismen geschützt:

| Mechanismus | Container | Firmware | Pakete |
|-------------|:---------:|:--------:|:------:|
| Cosign Signatur | ✅ | ✅ | 🔧 Geplant |
| SHA256 Hash | ✅ | ✅ | ✅ (Registry) |
| TLS Transport | ✅ | ✅ | ✅ |
| Anti-Rollback | N/A | ✅ | N/A |
| Secure Boot Chain | N/A | ✅ (wo unterstützt) | N/A |

## 6.3.4 Kostenlose Bereitstellung

Gemäß Annex I Teil II (2) CRA werden alle Sicherheitsupdates **kostenlos** bereitgestellt:

- Container-Images über öffentliche Registries (GHCR)
- Firmware über GitHub Releases (öffentlicher Download)
- Software-Pakete über öffentliche Registries

## 6.3.5 Update-Frequenz

| Produkttyp | Reguläre Updates | Sicherheitsupdates |
|------------|-----------------|-------------------|
| Container-Images | Bei Bedarf / monatlich | Sofort bei CRITICAL/HIGH |
| Firmware | Quartalsweise | Sofort bei CRITICAL/HIGH |
| Software-Pakete | Bei Bedarf | Sofort bei CRITICAL/HIGH |
