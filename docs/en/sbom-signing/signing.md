# 2.4 Signing

## 2.4.1 Overview

Signing ensures the integrity and authenticity of all artifacts produced during the release process. This includes SBOMs, container images, release binaries, and firmware. All signing operations use **Cosign** (Sigstore), which supports both key-based and keyless signing.

::: info LEGAL BASIS
**Art. 10(12) CRA:** Manufacturers must ensure that security updates and associated information (including SBOMs) are provided "securely and with the integrity guaranteed".
:::

## 2.4.2 Tool: Cosign (Sigstore)

Cosign is the primary signing tool in the BAUER GROUP ecosystem. It is part of the Sigstore project and supports:

- **Key-based signing** -- using a private key stored in GitHub Secrets
- **Keyless signing** -- using OIDC-based identity via Sigstore/Fulcio (for public projects)

Cosign is integrated across the CI/CD pipeline: container image signing (`docker-build.yml`), SBOM signing, and binary/firmware signing (`cra-release.yml`).

## 2.4.3 Signing Procedures

### 1. Container Image Signing

Container images are signed directly in the registry. This is already implemented in the `docker-build.yml` workflow.

```bash
# Sign image
cosign sign --key env://COSIGN_PRIVATE_KEY <registry>/<image>@<digest>

# Verify image
cosign verify --key cosign.pub <registry>/<image>@<digest>
```

**Workflow Integration (existing):**

```yaml
# docker-build.yml
inputs:
  sign-image:
    description: 'Sign image with cosign'
    default: true
    type: boolean
```

### 2. SBOM Signing

Signing the SBOM ensures that:

- The SBOM has not been altered after the fact (integrity)
- The SBOM originates from BAUER GROUP (authenticity)
- The association with the release is verifiable (non-repudiation)

#### Key-Based Signing

```bash
# 1. Sign SBOM (detached signature)
cosign sign-blob \
  --key env://COSIGN_PRIVATE_KEY \
  --output-signature sbom.cdx.json.sig \
  --output-certificate sbom.cdx.json.cert \
  sbom.cdx.json

# 2. Generate SHA256 hash
sha256sum sbom.cdx.json > sbom.cdx.json.sha256

# 3. Verify signature
cosign verify-blob \
  --key cosign.pub \
  --signature sbom.cdx.json.sig \
  sbom.cdx.json
```

#### Keyless Signing (Sigstore/Fulcio)

For public projects, keyless signing via Sigstore can be used:

```bash
# Keyless signing (OIDC-based)
cosign sign-blob \
  --output-signature sbom.cdx.json.sig \
  --output-certificate sbom.cdx.json.cert \
  sbom.cdx.json

# Keyless verification
cosign verify-blob \
  --certificate sbom.cdx.json.cert \
  --certificate-identity workflow@github.com \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com \
  --signature sbom.cdx.json.sig \
  sbom.cdx.json
```

### 3. Binary/Blob Signing

Blob signing is used for release binaries and other non-container artifacts:

```bash
# Sign binary
cosign sign-blob \
  --key env://COSIGN_PRIVATE_KEY \
  --output-signature artifact.sig \
  artifact.bin

# Verify binary
cosign verify-blob \
  --key cosign.pub \
  --signature artifact.sig \
  artifact.bin
```

### 4. Firmware Signing

For firmware artifacts (ESP32, STM32, Zephyr):

```bash
# Sign firmware
cosign sign-blob \
  --key env://COSIGN_PRIVATE_KEY \
  --output-signature firmware.bin.sig \
  firmware.bin

# SHA256 for OTA verification
sha256sum firmware.bin > firmware.bin.sha256
```

## 2.4.4 OTA Security

For firmware updates via OTA (Over-The-Air), additional requirements apply:

1. **Signature verification on the device** -- The device validates the Cosign signature before installation
2. **Hash verification** -- SHA256 hash is verified before and after transfer
3. **Rollback protection** -- Anti-rollback counter prevents installation of older (insecure) versions
4. **Secure Boot Chain** -- Firmware is only executed if the signature chain up to the Root-of-Trust is valid

## 2.4.5 Supply Chain Attestation

In addition to signing, SLSA-compatible attestations are supported:

```bash
# Create build attestation
cosign attest \
  --key env://COSIGN_PRIVATE_KEY \
  --predicate build-provenance.json \
  --type slsaprovenance \
  <registry>/<image>@<digest>
```

## 2.4.6 GitHub Actions Integration

```yaml
# Signing steps in each release workflow
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
```

## 2.4.7 Key Management

The keys for all signing operations are managed in accordance with the [Key Management Policy](/en/sbom-signing/key-management):

- Private key: GitHub Secrets (`COSIGN_PRIVATE_KEY`)
- Password: GitHub Secrets (`COSIGN_PASSWORD`)
- Public key: Published in the repository (`cosign.pub`)
- Key rotation: Annually or upon suspicion of compromise

## 2.4.8 Release Assets After Signing

```
Release v2.1.0
+-- product-v2.1.0.tar.gz                <- Build artifact
+-- product-v2.1.0.tar.gz.sig            <- Artifact signature
+-- sbom-product-v2.1.0.cdx.json         <- SBOM
+-- sbom-product-v2.1.0.cdx.json.sig     <- SBOM signature
+-- sbom-product-v2.1.0.cdx.json.sha256  <- SBOM hash
+-- cosign.pub                            <- Public key
+-- SHA256SUMS.txt                        <- All hashes
```
