# 2.4 Signierung

## 2.4.1 Zweck der Signierung

Die kryptographische Signierung von Artefakten stellt sicher, dass:

- Artefakte nicht nachträglich verändert wurden (**Integrität**)
- Artefakte von BAUER GROUP stammen (**Authentizität**)
- Die Zuordnung zum Release verifizierbar ist (**Nichtabstreitbarkeit**)

::: info RECHTSGRUNDLAGE
**Art. 10 Abs. 12 CRA:** Hersteller müssen sicherstellen, dass Sicherheitsupdates und zugehörige Informationen (inkl. SBOM) „sicher und unter Gewährleistung der Integrität" bereitgestellt werden.
:::

## 2.4.2 Tool: Cosign (Sigstore)

Cosign ist das primäre Signierungstool im BAUER GROUP Ökosystem. Es ist Teil des Sigstore-Projekts und unterstützt sowohl key-basierte als auch keyless Signierung. Cosign wird einheitlich für alle Artefakttypen eingesetzt -- Container-Images, Binaries, Firmware und SBOMs.

## 2.4.3 Signierungsverfahren nach Artefakttyp

### 1. Container Image Signing

Container-Images werden direkt im Registry signiert. Dies ist bereits im `docker-build.yml` Workflow implementiert.

```bash
# Image signieren
cosign sign --key env://COSIGN_PRIVATE_KEY <registry>/<image>@<digest>

# Image verifizieren
cosign verify --key cosign.pub <registry>/<image>@<digest>
```

**Workflow-Integration (bestehend):**

```yaml
# docker-build.yml
inputs:
  sign-image:
    description: 'Sign image with cosign'
    default: true
    type: boolean
```

### 2. Binary/Blob Signing

Für Release-Binaries wird Blob Signing verwendet:

```bash
# Binary signieren
cosign sign-blob \
  --key env://COSIGN_PRIVATE_KEY \
  --output-signature artifact.sig \
  artifact.bin

# Binary verifizieren
cosign verify-blob \
  --key cosign.pub \
  --signature artifact.sig \
  artifact.bin
```

### 3. SBOM Signing

SBOMs werden als Blobs signiert. Neben der Signatur wird ein SHA256-Hash erzeugt:

#### Key-basierte Signierung

```bash
# 1. SBOM signieren (Detached Signature)
cosign sign-blob \
  --key env://COSIGN_PRIVATE_KEY \
  --output-signature sbom.cdx.json.sig \
  --output-certificate sbom.cdx.json.cert \
  sbom.cdx.json

# 2. SHA256-Hash generieren
sha256sum sbom.cdx.json > sbom.cdx.json.sha256

# 3. Signatur verifizieren
cosign verify-blob \
  --key cosign.pub \
  --signature sbom.cdx.json.sig \
  sbom.cdx.json
```

#### Keyless Signierung (Sigstore/Fulcio)

Für öffentliche Projekte kann die keyless Signierung über Sigstore verwendet werden:

```bash
# Keyless Signierung (OIDC-basiert)
cosign sign-blob \
  --output-signature sbom.cdx.json.sig \
  --output-certificate sbom.cdx.json.cert \
  sbom.cdx.json

# Keyless Verifizierung
cosign verify-blob \
  --certificate sbom.cdx.json.cert \
  --certificate-identity workflow@github.com \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com \
  --signature sbom.cdx.json.sig \
  sbom.cdx.json
```

### 4. Firmware Signing

Für Firmware-Artefakte (ESP32, STM32, Zephyr):

```bash
# Firmware signieren
cosign sign-blob \
  --key env://COSIGN_PRIVATE_KEY \
  --output-signature firmware.bin.sig \
  firmware.bin

# SHA256 für OTA-Verifikation
sha256sum firmware.bin > firmware.bin.sha256
```

## 2.4.4 OTA-Sicherheit

Für Firmware-Updates über OTA (Over-The-Air) gelten zusätzliche Anforderungen:

1. **Signaturprüfung auf dem Gerät** -- Das Gerät validiert die Cosign-Signatur vor der Installation
2. **Hash-Prüfung** -- SHA256-Hash wird vor und nach dem Transfer geprüft
3. **Rollback-Schutz** -- Anti-Rollback-Counter verhindert Installation älterer (unsicherer) Versionen
4. **Secure Boot Chain** -- Firmware wird nur ausgeführt, wenn die Signaturkette bis zum Root-of-Trust gültig ist

## 2.4.5 Supply Chain Attestation

Zusätzlich zur Signierung werden SLSA-kompatible Attestierungen unterstützt:

```bash
# Build-Attestierung erstellen
cosign attest \
  --key env://COSIGN_PRIVATE_KEY \
  --predicate build-provenance.json \
  --type slsaprovenance \
  <registry>/<image>@<digest>
```

## 2.4.6 GitHub Actions Integration

Der folgende Abschnitt zeigt die vollständige Signierungspipeline in GitHub Actions, die alle Artefakttypen abdeckt:

```yaml
steps:
  - name: Install Cosign
    uses: sigstore/cosign-installer@v3

  - name: Sign Container Image
    if: inputs.sign-image
    run: cosign sign --key env://COSIGN_PRIVATE_KEY ${{ env.IMAGE }}@${{ env.DIGEST }}

  - name: Sign SBOM
    env:
      COSIGN_PRIVATE_KEY: ${{ secrets.COSIGN_PRIVATE_KEY }}
      COSIGN_PASSWORD: ${{ secrets.COSIGN_PASSWORD }}
    run: |
      cosign sign-blob \
        --key env://COSIGN_PRIVATE_KEY \
        --output-signature sbom.cdx.json.sig \
        sbom.cdx.json

  - name: Sign Binary
    if: inputs.sign-binary
    run: cosign sign-blob --key env://COSIGN_PRIVATE_KEY --output-signature artifact.sig artifact.bin

  - name: Generate Checksums
    run: sha256sum artifact.bin sbom.cdx.json > SHA256SUMS.txt

  - name: Upload Release Assets
    uses: softprops/action-gh-release@v2
    with:
      files: |
        sbom.cdx.json
        sbom.cdx.json.sig
        sbom.cdx.json.sha256
        artifact.bin
        artifact.bin.sig
        SHA256SUMS.txt
```

## 2.4.7 Key Management

Die Schlüssel für alle Signierungsvorgänge werden gemäß der [Key Management Policy](/de/sbom-signing/key-management) verwaltet:

- **Private Key:** GitHub Secrets (`COSIGN_PRIVATE_KEY`)
- **Passwort:** GitHub Secrets (`COSIGN_PASSWORD`)
- **Public Key:** Im Repository veröffentlicht (`cosign.pub`)
- **Key-Rotation:** Jährlich oder bei Kompromittierungsverdacht

## 2.4.8 Release-Assets nach Signierung

```
Release v2.1.0
├── product-v2.1.0.tar.gz                ← Build-Artefakt
├── product-v2.1.0.tar.gz.sig            ← Artefakt-Signatur
├── sbom-product-v2.1.0.cdx.json         ← SBOM
├── sbom-product-v2.1.0.cdx.json.sig     ← SBOM-Signatur
├── sbom-product-v2.1.0.cdx.json.sha256  ← SBOM-Hash
├── cosign.pub                           ← Öffentlicher Schlüssel
└── SHA256SUMS.txt                        ← Alle Hashes
```
