# A.9 CRA Compliance Statement

## A.9.1 Template: Public CRA Compliance Statement

This template serves as the basis for the product-specific public CRA Compliance Statement. It consolidates all CRA-relevant information on a single page and links to the associated detailed documents.

::: warning APPLICATION NOTE
This statement is a **supplementary public presentation**. It does not replace the legally binding EU Declaration of Conformity pursuant to Annex V (→ [A.7 EU Declaration of Conformity](/en/templates/eu-declaration-of-conformity)).

Placeholders in square brackets `[...]` shall be replaced with the actual values.
:::

---

## A.9.2 CRA COMPLIANCE STATEMENT

### [Product Name] — Version [X.Y.Z]

**Date:** [YYYY-MM-DD] | **Manufacturer:** BAUER GROUP

---

**1. Product Identification**

| Field | Value |
|-------|-------|
| Product name | [Full product name] |
| Version | [X.Y.Z] |
| Product type | [Software / Container Image / Firmware / Embedded System] |
| CRA product category | [Standard / Class I / Class II / Critical] |
| Unique identifier | [Package URL, container image reference, or other ID] |
| Brief description | [One-line description of the product purpose] |

**2. Manufacturer**

| Field | Value |
|-------|-------|
| Company | BAUER GROUP |
| Address | [Full postal address] |
| Security contact | <disclosure@cra.docs.bauer-group.com> |
| Website | [URL] |
| Authorised representative (if applicable) | [Name, address] or "Not applicable" |

**3. Conformity Status**

| Field | Value |
|-------|-------|
| Conformity assessment procedure | [Module A / Module B+C / Module H / EUCC] |
| EU Declaration of Conformity (Annex V) | [URL to full DoC] |
| CE marking | [Yes — applied in: About dialog / documentation / website / container label] |
| Notified body (if applicable) | [Name, identification number] or "Not applicable (Module A)" |
| Date of last assessment | [YYYY-MM-DD] |

**4. Security Documentation**

| Document | Available | Link |
|----------|:---------:|------|
| SBOM (CycloneDX JSON) | [Yes / No] | [URL to SBOM in GitHub Release] |
| Vulnerability Disclosure Policy | [Yes] | [URL to SECURITY.md] |
| User information (Annex II) | [Yes] | [URL] |
| Technical documentation (Annex VII) | On request | [Contact email] |

**5. Support Period**

| Field | Value |
|-------|-------|
| Support start | [YYYY-MM-DD] |
| Support end | [YYYY-MM-DD — at least 5 years] |
| Current phase | [Active Support / Security Support / End of Life] |
| Update mechanism | [Automatic / Manual / Notification] |

**6. Harmonised Standards and Technical Specifications**

| Standard / Specification | Description |
|--------------------------|-------------|
| [e.g. EN XXXXX:YYYY] | [Description] |
| CycloneDX v1.5 | SBOM format (OWASP) |
| ISO/IEC 29147:2018 | Vulnerability Disclosure |
| [Others] | [Description] |

**7. Vulnerability Management**

| Field | Value |
|-------|-------|
| Vulnerability Disclosure Policy | [URL to SECURITY.md] |
| Reporting contact | <disclosure@cra.docs.bauer-group.com> |
| CVE monitoring | [Automated (daily) / Manual] |
| Patch SLAs | [Critical: 48h / High: 7d / Medium: 30d / Low: 90d] |
| ENISA reporting obligation | [Yes, pursuant to Art. 14 CRA] |

---

::: info LEGAL NOTE
This CRA Compliance Statement is a summary presentation for transparency purposes. The legally binding EU Declaration of Conformity pursuant to Annex V of Regulation (EU) 2024/2847 is available at the link stated above.

False statements in the EU Declaration of Conformity may result in penalties (Art. 64 CRA: up to EUR 15 million or 2.5% of global annual turnover).
:::

## A.9.3 Machine-Readable Format

In parallel to the human-readable version, this statement is maintained as `cra-statement.json` in the product repository:

→ [9.3 Machine-Readable Format](/en/product-compliance/machine-readable)

→ [9.2 Publication Strategy](/en/product-compliance/publication-strategy)

## A.9.4 Updates

This statement is updated upon:

- New major/minor release
- Change in CRA product category
- Change in harmonised standards
- Change in support period

Detailed maintenance process: → [9.4 Maintenance & Updates](/en/product-compliance/maintenance)
