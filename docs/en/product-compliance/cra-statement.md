# 9.1 CRA Compliance Statement

## 9.1.1 Purpose

The CRA Compliance Statement is the **public summary** of all CRA compliance artefacts for a product. It serves as a central point of reference for customers, market surveillance authorities, and internal audits.

::: warning IMPORTANT
The CRA Compliance Statement is **not a replacement** for the legally binding EU Declaration of Conformity (Annex V). It is a supplementary, publicly accessible presentation that links to all relevant documents.
:::

## 9.1.2 Required Content

The following information must be publicly accessible under the CRA and is consolidated in the statement:

| CRA Reference | Information | Cross-Reference |
|---------------|-------------|-----------------|
| Art. 13(6) | Coordinated Vulnerability Disclosure Policy | → [4.2 Disclosure Policy](/en/incident-response/disclosure-policy) |
| Art. 13(8) | Support period | → [6.4 Support & Lifecycle](/en/technical-documentation/support-period) |
| Art. 13, Annex II | User information (security instructions) | → [7.10 User Information](/en/conformity/annex-ii-user-info) |
| Art. 28, Annex V | EU Declaration of Conformity (or link thereto) | → [7.8 EU Declaration of Conformity](/en/conformity/eu-declaration) |
| Art. 29–30 | CE marking | → [7.7 CE Marking](/en/conformity/ce-marking) |
| Annex I, Part II, No. 1 | SBOM (machine-readable) | → [Chapter 2: SBOM & Signing](/en/sbom-signing/) |
| Annex VII | Manufacturer contact information | → [6.1 Product Description](/en/technical-documentation/product-description) |

## 9.1.3 Recommended Structure

A CRA Compliance Statement should contain the following sections:

### 1. Product Identification

- Product name, version, type (software / container / firmware)
- CRA product category (Standard / Class I / Class II / Critical)
- Unique identifier (e.g. package URL, container image reference)

### 2. Manufacturer Information

- Company, address
- Security contact (e.g. `disclosure@cra.docs.bauer-group.com`)
- Authorised representative (if applicable)

### 3. Conformity Status

- Applied conformity assessment procedure (→ [Chapter 7](/en/conformity/))
- Link to the EU Declaration of Conformity (Annex V)
- CE marking: status and placement
- Date of last assessment

### 4. Security Documentation

Links to:
- SBOM (CycloneDX JSON)
- Vulnerability Disclosure Policy / SECURITY.md
- User information (Annex II)
- Technical documentation (where publicly available)

### 5. Support Period

- Start and end of the support period
- Current phase (Active Support / Security Support)
- Reference to update mechanism (→ [6.3 Update Mechanism](/en/technical-documentation/update-mechanism))

### 6. Harmonised Standards

- Applied harmonised standards and technical specifications
- SBOM format standard (e.g. CycloneDX v1.5)

### 7. Vulnerability Management

- Reference to Vulnerability Disclosure Policy
- CVE monitoring status
- Patch SLAs (→ [3.3 Patch Management](/en/vulnerability-management/patch-management))

## 9.1.4 Example

A CRA Compliance Statement for a fictional product might look like this:

---

> **CRA COMPLIANCE STATEMENT**
>
> **MinIO Gateway** — Version 2.1.0
>
> **Date:** 2026-03-01 | **Manufacturer:** BAUER GROUP
>
> ---
>
> | Field | Value |
> |-------|-------|
> | Product type | Container Image |
> | CRA category | Standard |
> | Conformity module | Module A (Internal Control) |
> | CE marking | ✅ In About dialog and documentation |
> | EU Declaration of Conformity | [Link to DoC] |
> | SBOM | [CycloneDX JSON — GitHub Release] |
> | SECURITY.md | [Link] |
> | User information (Annex II) | [Link] |
> | Support period | 2026-03-01 to 2031-03-01 |
> | Vulnerability disclosure | `disclosure@cra.docs.bauer-group.com` |

---

## 9.1.5 Placement

| Channel | Format | Audience |
|---------|--------|----------|
| **Compliance portal** | HTML (generated from JSON) | Customers, authorities |
| **Product repository** | `.compliance/cra-statement.json` | Developers, audits |
| **README.md** | Simplified reference with link | Developers |
| **Product website** | Compliance section | Customers |
| **Release notes** | Reference to current statement | All |

→ Publication strategy details: [9.2 Publication Strategy](/en/product-compliance/publication-strategy)

## 9.1.6 Cross-References

| Document | Link |
|----------|------|
| EU Declaration of Conformity (Annex V) | [7.8 EU Declaration of Conformity](/en/conformity/eu-declaration) |
| Simplified DoC (Annex VI) | [7.9 Simplified DoC](/en/conformity/simplified-declaration) |
| User Information (Annex II) | [7.10 User Information](/en/conformity/annex-ii-user-info) |
| CE Marking | [7.7 CE Marking](/en/conformity/ce-marking) |
| Template | [A.9 CRA Compliance Statement](/en/templates/cra-compliance-statement) |
