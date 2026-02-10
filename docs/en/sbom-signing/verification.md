# 2.6 Verification

## 2.6.1 Verification Procedures

Verification ensures that delivered artifacts are authentic and unaltered. Users and systems can verify the integrity at any time.

## 2.6.2 Verify Container Images

```bash
# 1. Download Public Key (one-time)
curl -sL https://github.com/bauer-group/<repo>/raw/main/cosign.pub -o cosign.pub

# 2. Verify image signature
cosign verify --key cosign.pub ghcr.io/bauer-group/<image>:<tag>
```

**Expected output for a valid signature:**

```
Verification for ghcr.io/bauer-group/<image>:<tag> --
The following checks were performed on each of these signatures:
  - The cosign claims were validated
  - The signatures were verified against the specified public key
```

## 2.6.3 Verify Binaries & Firmware

```bash
# 1. Download artifact, signature, and Public Key
curl -sLO https://github.com/bauer-group/<repo>/releases/download/v1.0.0/artifact.bin
curl -sLO https://github.com/bauer-group/<repo>/releases/download/v1.0.0/artifact.bin.sig
curl -sLO https://github.com/bauer-group/<repo>/raw/main/cosign.pub

# 2. Verify signature
cosign verify-blob --key cosign.pub --signature artifact.bin.sig artifact.bin

# 3. Verify SHA256 hash
sha256sum -c SHA256SUMS.txt
```

## 2.6.4 Verify SBOM

```bash
# Verify SBOM signature
cosign verify-blob \
  --key cosign.pub \
  --signature sbom.cdx.json.sig \
  sbom.cdx.json

# Verify SBOM hash
sha256sum -c sbom.cdx.json.sha256
```

## 2.6.5 Automated Verification in Deployment

### OTA Update Verification (Firmware)

The OTA server only accepts signed artifacts:

```
OTA server receives firmware update
    │
    ├── 1. Verify SHA256 hash
    │   └── Hash of received binary == expected hash?
    │
    ├── 2. Verify Cosign signature
    │   └── cosign verify-blob with stored Public Key
    │
    ├── Both checks passed?
    │   ├── Yes → Approve update for distribution
    │   └── No → Reject update, trigger alert
    │
    └── Logging: Every check is documented
```

### Container Deployment Verification

```yaml
# Kubernetes Admission Controller (example)
# Only signed images are admitted
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

## 2.6.6 Verification by Market Surveillance Authorities

Market surveillance authorities can verify the integrity of all artifacts as follows:

1. **Public Key** -- retrieve from the public repository
2. **Release Assets** -- download (binary, SBOM, signatures, hashes)
3. **Cosign Verify** -- execute verification
4. **SHA256 Hashes** -- compare

All required information is publicly accessible via GitHub Releases.
