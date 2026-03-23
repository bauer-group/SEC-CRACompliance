# Chapter 9: Product Compliance Publication

## Overview

The CRA requires manufacturers to make extensive compliance information publicly accessible. The EU Declaration of Conformity, user information, the support period, and the Vulnerability Disclosure Policy must be available to customers, authorities, and the public.

This chapter describes how each software product publishes its CRA compliance artefacts **as a consolidated public compliance statement** — and how this process is standardised and automated across all products.

::: info LEGAL BASIS
**Art. 13 CRA:** *"The manufacturer shall ensure that the product is accompanied by the information set out in Annex II."*

**Art. 28(3) CRA:** *"The manufacturer may include with the product a simplified EU declaration of conformity as set out in Annex VI, provided that the full version is made available online."*

**Art. 29 CRA:** The CE marking shall be affixed to the product or its accompanying documents before the product is placed on the market.
:::

## Why a Public Compliance Page?

| Reason | Explanation |
|--------|-------------|
| **Regulatory obligation** | Art. 13 and Art. 28 CRA require public access to the Declaration of Conformity and user information |
| **Market surveillance** | Authorities must be able to inspect compliance information (Art. 52–58 CRA) |
| **Customer trust** | B2B customers expect demonstrable compliance documentation |
| **Market advantage** | Proactive compliance signals maturity and professionalism |
| **Standardisation** | A uniform format across all products simplifies maintenance and auditing |

## Distinction from Chapter 7

| Aspect | Chapter 7: Conformity Assessment | Chapter 9: Compliance Publication |
|--------|----------------------------------|-----------------------------------|
| **Focus** | How is conformity assessed? | How is it publicly presented? |
| **Output** | EU Declaration of Conformity (Annex V) | Public product compliance page |
| **Audience** | Manufacturer, notified bodies | Customers, authorities, public |
| **Timing** | Before placing on the market | Throughout entire product lifecycle |

## Additional Regulatory Notes

::: tip NOTE FOR AI PRODUCTS
Products containing AI components are additionally subject to the **EU AI Act** (Regulation (EU) 2024/1689). AI Act compliance is covered in separate documentation. The CRA Compliance Statement (→ [9.1](/en/product-compliance/cra-statement)) covers CRA requirements only.
:::

## Chapter Structure

| Section | Topic | Description |
|---------|-------|-------------|
| **9.1** | [CRA Compliance Statement](/en/product-compliance/cra-statement) | Required content, structure, and example of a product-specific compliance statement |
| **9.2** | [Publication Strategy](/en/product-compliance/publication-strategy) | Dual concept: repository as source of truth, website as public presentation |
| **9.3** | [Machine-Readable Format](/en/product-compliance/machine-readable) | JSON schema for `cra-statement.json` and CI/CD validation |
| **9.4** | [Maintenance & Updates](/en/product-compliance/maintenance) | Update triggers, review cycle, responsibilities |

→ Fillable template: [A.9 CRA Compliance Statement](/en/templates/cra-compliance-statement)
