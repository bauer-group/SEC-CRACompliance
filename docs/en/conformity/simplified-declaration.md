# Simplified EU Declaration of Conformity (Annex VI)

## Overview

In addition to the full EU Declaration of Conformity (Annex V), the CRA permits a **simplified version** in accordance with Annex VI. This may accompany the product, provided the full version is available online.

::: info LEGAL BASIS
**Art. 28(3) CRA:** The manufacturer may accompany the product with a simplified EU Declaration of Conformity in accordance with Annex VI, provided the full version is made available online.

**Annex VI CRA:** Content of the simplified EU Declaration of Conformity.
:::

## When to Use the Simplified Version?

| Situation | Version |
|-----------|---------|
| Product packaging, README, UI | Simplified (Annex VI) |
| Official documentation, authority request | Full (Annex V) |
| Available online | Full (Annex V) |
| Release notes | Simplified (Annex VI) with URL to full version |

## Mandatory Content (Annex VI)

The simplified EU Declaration of Conformity must contain at least:

### 1. Manufacturer Information

```
[Name of the manufacturer]
declares that the product with digital elements
```

### 2. Product Identification

```
[Product name, type, version]
```

### 3. Conformity Statement

```
is in conformity with the provisions of Regulation (EU) 2024/2847
(Cyber Resilience Act).
```

### 4. URL to the Full Declaration

```
The full EU Declaration of Conformity is available at:
[URL]
```

## Template: Simplified EU Declaration of Conformity

```markdown
## EU Declaration of Conformity (simplified)

**BAUER GROUP** hereby declares that the product

**[Product name] v[Version]**

is in conformity with the provisions of Regulation (EU) 2024/2847
(Cyber Resilience Act).

The full EU Declaration of Conformity is available at:
> [URL to full DoC]

Support period: [Date] to [Date]
Contact: [E-mail]
```

## Placement

### For Software Products

- **README.md** in the repository
- **About dialog** or footer in the application
- **Release notes** per version
- **Product website**
- **Container image labels** (OCI Annotations)

### For Firmware / Hardware

- **Packaging** (print or insert)
- **Quick Start Guide**
- **Product label** (QR code with URL)

## Example for Container Image Label

```dockerfile
LABEL eu.cra.doc.url="https://go.bauer-group.com/cra/doc/[product]"
LABEL eu.cra.doc.version="1.0"
LABEL eu.cra.support.end="2031-12-31"
```

## Relationship to Annex V

| Aspect | Annex V (full) | Annex VI (simplified) |
|--------|---------------|----------------------|
| **Mandatory** | Yes, always | Optional (with URL to Annex V) |
| **Scope** | 10 mandatory items | 4 mandatory items |
| **Retention** | 10 years | Product lifetime |
| **Authority request** | Must be submitted | Not sufficient |
| **Language** | Language of the authority | Language of the target market |

> Full version: [EU Declaration of Conformity (Annex V)](/en/conformity/eu-declaration)
>
> Fillable template: [EU Declaration of Conformity Template](/en/templates/eu-declaration-of-conformity)
