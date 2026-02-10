# A.8 Product Security Information

## A.8.1 Template: Security Information for Users pursuant to Annex II CRA

---

## A.8.2 Security Information: [Product Name]

**Version:** [X.Y.Z]
**Date:** [YYYY-MM-DD]
**Manufacturer:** BAUER GROUP

---

### 1. Manufacturer Contact Information

| Field | Value |
|-------|-------|
| **Company** | BAUER GROUP |
| **Address** | [Full postal address] |
| **Email (general)** | [Email address] |
| **Email (security)** | <disclosure@cra.docs.bauer-group.com> |
| **Website** | [URL] |

### 2. Product Identification

| Field | Value |
|-------|-------|
| **Product Name** | [Name] |
| **Version** | [X.Y.Z] |
| **Product Type** | [Software / Firmware / Container Image] |
| **Intended Use** | [Brief description] |
| **Security Environment** | [Intended deployment environment, e.g. intranet, cloud, industrial environment] |

### 3. Security-Relevant Properties

**This product provides the following security features:**

- [ ] Encryption of communications (TLS)
- [ ] User authentication
- [ ] Role-based access control
- [ ] Automatic security updates
- [ ] Secure Boot (Firmware)
- [ ] Integrity protection (digital signature)

### 4. Foreseeable Circumstances Leading to Cybersecurity Risks (Annex II No. 5)

[Known or reasonably foreseeable circumstances related to the use of the product that may lead to significant cybersecurity risks:]

- [e.g. Operation without firewall on public networks]
- [e.g. Use of outdated TLS versions by the user]
- [e.g. Operation in non-segmented OT networks]

### 5. EU Declaration of Conformity (Annex II No. 6)

| Field | Value |
|-------|-------|
| **Internet address of the EU Declaration of Conformity** | [URL to the DoC, if provided electronically] |

### 6. Secure Installation and Configuration

[Step-by-step instructions for secure initial setup]

**Recommended Security Settings:**

1. [e.g. Change default password]
2. [e.g. Enable TLS]
3. [e.g. Configure minimum privileges]
4. [e.g. Enable automatic updates]

### 7. Impact of Modifications on Data Security (Annex II No. 8(b))

[Description of how modifications to the product (e.g. configuration changes, extensions, integration of third-party components) may affect the security of stored or processed data]

### 8. Security Updates

| Field | Value |
|-------|-------|
| **Automatic Updates** | [Yes / No / Configurable] |
| **Update Channel** | [e.g. GitHub Releases, Container Registry, OTA] |
| **Update Verification** | [e.g. Cosign Signature, SHA256] |
| **Update Notification** | [e.g. GitHub Watch, Email Newsletter] |

| **Disabling automatic updates** | [Description of how to disable automatic security updates, including impact on security] |

**How to update:**
[Instructions for performing updates]

### 9. Support Period

| Field | Value |
|-------|-------|
| **Support until** | [Date -- at least 5 years] |
| **Security updates until** | [Date] |
| **End of Life planned** | [Date or "Not yet determined"] |

After the support period expires, no further security updates will be provided. Users will be notified of the End of Life in due time.

### 10. Reporting Vulnerabilities

If you discover a security vulnerability in this product:

1. **Preferred:** GitHub Security Advisory in the corresponding repository
2. **Email:** <disclosure@cra.docs.bauer-group.com>
3. **Details:** See [Vulnerability Disclosure Policy](/en/incident-response/disclosure-policy)

**Please do not disclose vulnerabilities publicly** until a fix is available.

### 11. Secure Decommissioning (Annex II No. 8(d))

**How to securely decommission/uninstall this product:**

1. [e.g. Delete all stored data via the "Reset data" function]
2. [e.g. Revoke / rotate cryptographic keys]
3. [e.g. Remove registrations with cloud services]
4. [e.g. Remove container images from private registry]

::: warning NOTE
Ensure that all personal and business-critical data is backed up and subsequently permanently deleted before decommissioning.
:::

### 12. Data Processed by the Product (Annex II)

| Data Category | Description | Personal Data |
|---------------|-------------|:-------------:|
| [e.g. Telemetry data] | [Description] | [Yes / No] |
| [e.g. Authentication data] | [Description] | [Yes] |
| [e.g. Configuration data] | [Description] | [No] |
| [e.g. Log data] | [Description] | [Yes / No] |

### 13. Integration with Other Products (Annex II No. 8(f))

[Information on the secure integration of this product with other products with digital elements, including:]

- [e.g. Supported APIs and interfaces]
- [e.g. Recommended network segmentation]
- [e.g. Required firewall rules]
- [e.g. Dependencies on external services]

### 14. Known Limitations

[List of known security-relevant limitations, e.g.:]

- [e.g. Product is not intended for use in safety-critical infrastructure]
- [e.g. Encryption requires active configuration by the user]

### 15. Further Documentation

| Document | Link |
|----------|------|
| Product documentation | [Link] |
| SBOM (Software Bill of Materials) | [Link to Release Asset] |
| Security Advisory Feed | [Link] |
| Changelog | [Link] |
