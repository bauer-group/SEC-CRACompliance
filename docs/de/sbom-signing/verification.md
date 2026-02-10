# 4.3 Verifikation

## Verifikationsverfahren

Die Verifikation stellt sicher, dass ausgelieferte Artefakte authentisch und unverändert sind. Nutzer und Systeme können die Integrität jederzeit prüfen.

## Container Images verifizieren

```bash
# 1. Public Key herunterladen (einmalig)
curl -sL https://github.com/bauer-group/<repo>/raw/main/cosign.pub -o cosign.pub

# 2. Image-Signatur verifizieren
cosign verify --key cosign.pub ghcr.io/bauer-group/<image>:<tag>
```

**Erwartete Ausgabe bei gültiger Signatur:**

```
Verification for ghcr.io/bauer-group/<image>:<tag> --
The following checks were performed on each of these signatures:
  - The cosign claims were validated
  - The signatures were verified against the specified public key
```

## Binaries & Firmware verifizieren

```bash
# 1. Artefakt, Signatur und Public Key herunterladen
curl -sLO https://github.com/bauer-group/<repo>/releases/download/v1.0.0/artifact.bin
curl -sLO https://github.com/bauer-group/<repo>/releases/download/v1.0.0/artifact.bin.sig
curl -sLO https://github.com/bauer-group/<repo>/raw/main/cosign.pub

# 2. Signatur verifizieren
cosign verify-blob --key cosign.pub --signature artifact.bin.sig artifact.bin

# 3. SHA256-Hash verifizieren
sha256sum -c SHA256SUMS.txt
```

## SBOM verifizieren

```bash
# SBOM-Signatur prüfen
cosign verify-blob \
  --key cosign.pub \
  --signature sbom.cdx.json.sig \
  sbom.cdx.json

# SBOM-Hash prüfen
sha256sum -c sbom.cdx.json.sha256
```

## Automatische Verifikation im Deployment

### OTA-Update-Verifikation (Firmware)

Der OTA-Server akzeptiert nur signierte Artefakte:

```
OTA-Server empfängt Firmware-Update
    │
    ├── 1. SHA256-Hash prüfen
    │   └── Hash des empfangenen Binaries == erwarteter Hash?
    │
    ├── 2. Cosign-Signatur prüfen
    │   └── cosign verify-blob mit gespeichertem Public Key
    │
    ├── Beide Prüfungen bestanden?
    │   ├── Ja → Update zur Verteilung freigeben
    │   └── Nein → Update ablehnen, Alert auslösen
    │
    └── Logging: Jede Prüfung wird dokumentiert
```

### Container-Deployment-Verifikation

```yaml
# Kubernetes Admission Controller (Beispiel)
# Nur signierte Images werden zugelassen
apiVersion: policy.sigstore.dev/v1alpha1
kind: ClusterImagePolicy
metadata:
  name: bauer-group-signed-images
spec:
  images:
    - glob: "ghcr.io/bauer-group/**"
  authorities:
    - key:
        data: |
          -----BEGIN PUBLIC KEY-----
          <cosign public key>
          -----END PUBLIC KEY-----
```

## Verifikation durch Marktaufsichtsbehörden

Marktaufsichtsbehörden können die Integrität aller Artefakte wie folgt prüfen:

1. **Public Key** abrufen aus dem öffentlichen Repository
2. **Release-Assets** herunterladen (Binary, SBOM, Signaturen, Hashes)
3. **Cosign Verify** ausführen
4. **SHA256-Hashes** vergleichen

Alle benötigten Informationen sind öffentlich zugänglich über GitHub Releases.
