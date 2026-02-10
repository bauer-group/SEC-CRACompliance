# Appendix: Forms & Templates

## Overview

This appendix contains ready-to-use templates for the regulatory obligations under the CRA. The templates cover three areas:

1. **ENISA Reporting Obligations** (Art. 14 CRA) -- Time-bound notifications to ENISA / CSIRT
2. **Incident Documentation** -- Internal and external Incident Reports
3. **Compliance Documentation** -- Risk Assessment, Declaration of Conformity, Product Security Information

::: warning APPLICATION NOTE
All templates must be completed on a **product-specific** basis. Placeholders in square brackets `[...]` shall be replaced with the actual values. Completed templates are archived in the respective incident ticket or in the product directory (`docs/products/<product-name>/`).

The ENISA notification templates are to be used operationally from **11 September 2026** onwards (-> [5.3 ENISA Reporting Process](/en/incident-response/enisa-reporting)).
:::

## ENISA Notification Templates (Art. 14 CRA)

| Template | Deadline | CRA Reference | Usage |
|----------|----------|---------------|-------|
| [ENISA Early Warning](/en/templates/enisa-early-warning) | **24 hours** | Art. 14(2)(a) | Initial notification in case of an actively exploited vulnerability / severe incident |
| [ENISA Notification](/en/templates/enisa-notification) | **72 hours** | Art. 14(2)(b) | Detailed vulnerability notification with technical details |
| [ENISA Final Report](/en/templates/enisa-final-report) | **14 days** | Art. 14(2)(c) | Final analysis, Root Cause, Lessons Learned |

## Incident Templates

| Template | Usage | Trigger |
|----------|-------|---------|
| [Incident Report (Internal)](/en/templates/incident-report) | Internal documentation of a security incident | Every SEV-1 to SEV-4 incident |
| [Vulnerability Report (External)](/en/templates/vulnerability-report) | User notification regarding a vulnerability | Art. 14(8): Without undue delay for ENISA-reportable events |

## Compliance Templates

| Template | CRA Reference | Usage | Frequency |
|----------|---------------|-------|-----------|
| [Risk Assessment](/en/templates/risk-assessment) | Art. 10(2), Annex VII No. 2 | Cybersecurity Risk Assessment per product | Before placing on the market + upon substantial changes |
| [EU Declaration of Conformity](/en/templates/eu-declaration-of-conformity) | Art. 28, Annex V | Formal Declaration of Conformity per product | Before placing on the market + upon new versions |
| [Product Security Information](/en/templates/product-security-info) | Annex II | Security information for end users | Per product, updated upon version changes |

## Templates in the Technical Documentation

In addition to the templates listed here, the [7.1 Product Description (Template)](/en/technical-documentation/product-description) serves as a template for the product-specific technical documentation pursuant to Annex VII CRA.
