# 2.3 Archiving & Retention

## 2.3.1 Archiving Strategy

SBOMs are archived in three locations to ensure availability and traceability.

### 1. GitHub Release Assets (Primary)

Each GitHub release includes the SBOM as an asset:

```
Release v2.1.0
├── product-v2.1.0-linux-amd64.tar.gz
├── product-v2.1.0-linux-amd64.tar.gz.sig    <- Cosign signature
├── sbom-product-v2.1.0.cdx.json              <- SBOM
├── sbom-product-v2.1.0.cdx.json.sig          <- SBOM signature
└── SHA256SUMS.txt                             <- Checksums
```

**Advantages:**

- Directly associated with the release
- Publicly accessible (for public repos)
- Versioned and immutable
- API access via GitHub REST API

### 2. Compliance Repository (Secondary)

This repository (`CRA-Compliance`) contains an SBOM archive:

```
sbom/
├── product-a/
│   ├── sbom-product-a-v1.0.0.cdx.json
│   ├── sbom-product-a-v1.1.0.cdx.json
│   └── sbom-product-a-v2.0.0.cdx.json
├── product-b/
│   ├── sbom-product-b-v3.0.0.cdx.json
│   └── sbom-product-b-v3.1.0.cdx.json
└── firmware-esp32/
    ├── sbom-firmware-esp32-v1.0.0.cdx.json
    └── sbom-firmware-esp32-v1.1.0.cdx.json
```

**Advantages:**

- Central overview of all product SBOMs
- Git history as audit trail
- CVE monitor can scan all SBOMs centrally

### 3. GitHub Actions Artifacts (Short-term)

Build artifacts are stored as GitHub Actions artifacts (90-day retention).

**Advantages:**

- Available immediately after the build
- Temporary analysis and debugging

## 2.3.2 Retention Policy

| Storage Location | Retention Period | Justification |
|------------------|------------------|---------------|
| GitHub Release Assets | **Unlimited** (lifetime of the repo) | Regulatory evidence (Art. 10(13) CRA: 10 years or the lifetime of the product, whichever is longer) |
| Compliance repo (sbom/) | **10 years** after the last product deployment | Art. 10(13) CRA |
| GitHub Actions Artifacts | **90 days** | Debugging and analysis |

::: danger RETENTION PERIOD
**Art. 10(13) CRA:** The technical documentation and the EU declaration of conformity shall be retained for **10 years** after the placing on the market of the product or for the duration of the support period -- whichever period is longer.

SBOMs, as part of the technical documentation, are subject to this retention period.
:::

## 2.3.3 Integrity Protection

Each archived SBOM is protected through the following measures:

1. **SHA256 hash** -- integrity verification
2. **Cosign signature** -- proof of authenticity
3. **Git history** -- proof of immutability
4. **Branch protection** -- protection against unauthorised modifications

```bash
# Integrity verification
sha256sum -c SHA256SUMS.txt

# Signature verification
cosign verify-blob --key cosign.pub --signature sbom.cdx.json.sig sbom.cdx.json
```

## 2.3.4 Access & Provision

### For Regulators / Market Surveillance Authorities

SBOMs are provided upon request (Art. 13(23) CRA):

- Access via GitHub release assets (for public repos)
- Direct download link
- Upon request as an email attachment

### For Internal Use

- CVE monitor workflow uses SBOMs from the compliance repo
- Security team has read access to all SBOMs
- Dashboard integration via GitHub API
