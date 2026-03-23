# 9.2 Publication Strategy

## 9.2.1 Dual Publication Concept

::: info PRINCIPLE
**Single Source of Truth** = the product's Git repository
**Public Presentation** = central compliance website
:::

Compliance data is maintained in exactly one place — the respective product's repository. From there, it is automatically published to a central compliance website.

```text
┌────────────────────┐     CI/CD      ┌──────────────────────────┐
│  Product Repo      │ ──────────────→│  Compliance Portal       │
│                    │                │                          │
│  .compliance/      │  Validation    │  /products/{name}/       │
│    cra-statement.  │  + Publish     │    → HTML rendering      │
│    json            │                │    → PDF download        │
└────────────────────┘                └──────────────────────────┘
        ↑                                       ↑
   Developers                          Customers, authorities,
   maintain here                       public
```

## 9.2.2 Benefits

| Aspect | Benefit |
|--------|---------|
| **Versioning** | Statement is versioned alongside the product code |
| **Review** | Changes go through the same review process as code |
| **Automation** | Publication happens automatically on release |
| **Consistency** | JSON schema enforces a uniform format across all products |
| **Audit trail** | Git history documents every change |

## 9.2.3 Repository Structure

Each product repository contains a `.compliance/` directory:

```text
product-repo/
├── .compliance/
│   ├── cra-statement.json          # Machine-readable CRA statement
│   └── README.md                   # Brief note on compliance structure
├── SECURITY.md                     # Vulnerability Disclosure Policy
├── docs/
│   └── compliance/
│       ├── eu-declaration.pdf      # EU Declaration of Conformity (Annex V)
│       └── user-info.md            # User information (Annex II)
└── ...
```

### Files in Detail

| File | Required | Description |
|------|----------|-------------|
| `.compliance/cra-statement.json` | ✅ Yes | Machine-readable CRA Compliance Statement (→ [9.3](/en/product-compliance/machine-readable)) |
| `.compliance/README.md` | Recommended | Explains the compliance structure to developers |
| `SECURITY.md` | ✅ Yes | Vulnerability Disclosure Policy (→ [4.2](/en/incident-response/disclosure-policy)) |
| `docs/compliance/eu-declaration.pdf` | ✅ Yes | Legally binding EU Declaration of Conformity |
| `docs/compliance/user-info.md` | ✅ Yes | User information per Annex II |

## 9.2.4 Website URL Scheme

The central compliance portal follows a uniform URL structure:

```text
https://cra.app.bauer-group.com/
├── /products/                      # Product directory
│   ├── /products/{name}/           # Product compliance page
│   │   ├── /cra                    # CRA Compliance Statement
│   │   ├── /doc                    # EU Declaration of Conformity
│   │   └── /sbom                   # SBOM download
│   └── ...
└── /api/                           # (Optional) API access for authorities
    └── /api/products/{name}.json   # Machine-readable access
```

## 9.2.5 Accessibility

| Information | Public | Internal | CRA Reference |
|-------------|:------:|:--------:|---------------|
| CRA Compliance Statement | ✅ | ✅ | Art. 13 |
| EU Declaration of Conformity | ✅ | ✅ | Art. 28 |
| Simplified DoC | ✅ | ✅ | Annex VI |
| User information (Annex II) | ✅ | ✅ | Art. 13 |
| SBOM | On request | ✅ | Annex I, Part II |
| Technical documentation (Annex VII) | ❌ | ✅ | Art. 31 |
| Conformity assessment records | ❌ | ✅ | Art. 28 |

::: warning NOTE
The complete technical documentation (Annex VII) is **not** required to be made public, but must be presented to market surveillance authorities within 10 days upon request (Art. 31 CRA).
:::

## 9.2.6 CI/CD Integration

Publication is integrated into the existing CI/CD pipeline:

```text
Release tag created
    │
    ├── 1. JSON schema validation (.compliance/cra-statement.json)
    │       → Failure = release blocked
    │
    ├── 2. Completeness check
    │       → Are all required fields populated?
    │       → Do referenced documents (DoC, SBOM) exist?
    │
    ├── 3. Publication to compliance portal
    │       → Generate HTML
    │       → Generate PDF (optional)
    │
    └── 4. Notification
            → Slack/Teams: "Compliance statement for {product} v{version} published"
```

## 9.2.7 Cross-References

| Topic | Link |
|-------|------|
| JSON schema definition | [9.3 Machine-Readable Format](/en/product-compliance/machine-readable) |
| Update process | [9.4 Maintenance & Updates](/en/product-compliance/maintenance) |
| SBOM archival | [2.3 Archival & Retention](/en/sbom-signing/storage) |
| Fillable template | [A.9 CRA Compliance Statement](/en/templates/cra-compliance-statement) |
