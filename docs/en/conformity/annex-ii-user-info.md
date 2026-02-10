# 7.10 User Information (Annex II)

## 7.10.1 Overview

Annex II of the CRA defines the mandatory information that the manufacturer must provide to users of the product. This information must be clear, comprehensible, and made available in a manner that is easily accessible to the user.

::: info LEGAL BASIS
**Annex II CRA:** Information and instructions for the user. The following information shall accompany the product with digital elements.
:::

## 7.10.2 Mandatory Content

### No. 1 – Manufacturer Information

**Requirement:** Name, registered trade name or registered trade mark and postal address of the manufacturer.

**Implementation at BAUER GROUP:**

- In every product repository: README.md with manufacturer details
- On the product website: Legal notice / Imprint
- In the software: About dialog or footer
- In the documentation: Title page

**Template specification:**

```
Manufacturer: BAUER GROUP
Address:      [Company address]
E-Mail:       [Contact e-mail]
Web:          [Product URL]
```

---

### No. 2 – Contact Point

**Requirement:** Single point of contact through which vulnerabilities can be reported, and the manufacturer's vulnerability handling policy.

**Implementation at BAUER GROUP:**

- SECURITY.md in every repository ([Template](/en/SECURITY))
- Contact: `disclosure@cra.docs.bauer-group.com`
- GitHub Security Advisories enabled
- Reference to [Disclosure Policy](/en/incident-response/disclosure-policy)

---

### No. 3 – Product Identification

**Requirement:** Unique identification of the product: name, type, version, batch/serial number.

**Implementation at BAUER GROUP:**

- Semantic Versioning (SemVer) for all software
- Container image tags with SHA digest
- Release notes with version, date, and changelog
- SBOM contains unique product identification (CPE/PURL)

---

### No. 4 – Intended Use

**Requirement:** Intended use of the product, including the security environment.

**Implementation at BAUER GROUP:**

- **Product description** ([Reference](/en/technical-documentation/product-description)): Purpose, target audience, deployment environment
- **Operating conditions:** Operating system, network, hardware requirements
- **Security environment:** Prerequisites (firewall, VPN, network segmentation)
- **Limitations:** Explicitly document what the product is NOT intended for

**Example:**

```
Intended use: Internal enterprise application for managing
[function]. Designed for operation behind a corporate
firewall with authenticated access.

NOT intended: Public-facing operation without network
protection, use in critical infrastructure (CRITIS).
```

---

### No. 5 – Foreseeable Misuse

**Requirement:** Description of foreseeable misuse scenarios.

**Implementation at BAUER GROUP:**

- Identification of typical misuse scenarios per product type
- Warning notices in the documentation
- Technical safeguards against misuse

**Typical misuse scenarios:**

| Scenario | Measure |
|----------|---------|
| Default passwords in production | Forced password change on initial setup |
| Operation without updates for extended periods | Automatic update notification |
| Exposure of internal APIs to the internet | Warning in documentation, network checks |
| Use of outdated TLS versions | Support only TLS 1.2+, reject older versions |
| Disabling security features | Warning on deactivation, audit log |

---

### No. 6 – SBOM Reference

**Requirement:** Notice of the availability of the SBOM (or URL for retrieval).

**Implementation at BAUER GROUP:**

- SBOM published as a release asset
- URL to the SBOM in the product documentation
- SBOM in machine-readable format (CycloneDX JSON)

**Template specification:**

```
SBOM: Available at [Release-URL]/sbom.cdx.json
Format: CycloneDX JSON v1.6
Signed: Yes (Cosign)
```

> Details: [SBOM & Signing](/en/sbom-signing/)

---

### No. 7 – Support Period

**Requirement:** Period during which security updates will be provided, at least 5 years or the expected product lifetime.

**Implementation at BAUER GROUP:**

- Support period documented in the product documentation
- In SECURITY.md per repository
- On the product website
- In the release notes

> Details: [Support & Lifecycle](/en/technical-documentation/support-period)

---

### No. 8 – Installation Guide and Secure Configuration

**Requirement:** Instructions for secure installation, configuration, commissioning, and use of the product.

**Implementation at BAUER GROUP:**

- **Installation guide:** Step-by-step with security notes
- **Hardening guide:** Recommended security configuration
- **Checklist:** Post-installation security checklist
- **Minimum requirements:** Documented system prerequisites

**Contents of the installation guide:**

1. System prerequisites (including security requirements)
2. Installation steps with integrity verification
3. Initial setup (password, MFA, network)
4. Recommended security configuration (hardening)
5. Update configuration (automatic/manual)
6. Backup setup

---

### No. 9 – EU Declaration of Conformity

**Requirement:** Reference to the EU Declaration of Conformity or simplified version with URL.

**Implementation at BAUER GROUP:**

- URL to the EU Declaration of Conformity in the product documentation
- Simplified version according to Annex VI (-> [Simplified DoC](/en/conformity/simplified-declaration))

---

### No. 10 – Update Information

**Requirement:** Information about the type and location of security updates.

**Implementation at BAUER GROUP:**

- Release channel documented (GitHub Releases, Container Registry, OTA)
- Notification channel (GitHub Watch, e-mail, RSS)
- Update instructions in the documentation

## 7.10.3 Template: User Information

> Fillable template: [User Information / Product Security Info](/en/templates/product-security-info)

## 7.10.4 Checklist: Annex II

- [ ] Manufacturer details in the product and documentation
- [ ] SECURITY.md with contact point and CVD policy
- [ ] Unique product identification (SemVer, digest)
- [ ] Intended use documented
- [ ] Foreseeable misuse scenarios identified and addressed
- [ ] SBOM reference in the product documentation
- [ ] Support period defined and communicated
- [ ] Installation guide with security notes
- [ ] Reference to EU Declaration of Conformity
- [ ] Update information (channel, notification, instructions)
