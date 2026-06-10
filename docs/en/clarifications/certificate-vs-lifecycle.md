# Certificate vs. CRA Lifecycle

For most export markets, a product certificate is the finish line: you pass an assessment, you receive a certificate, and the product may enter the market. The Cyber Resilience Act (CRA) deliberately breaks that pattern. This page explains the difference using a comparison every exporter already knows: **ISO 9001**.

## The familiar model: certification as a one-time gate

Product certification normally works as a single entry gate:

| Certification | What you do | Result |
|---------------|-------------|--------|
| CE marking (classic directives) | Conformity assessment | Certificate / declaration → market access |
| EMC / safety (via a test house) | Type testing | Certificate → market access |
| CCC | Type testing | Certificate → market access |
| IEC 62443-4-1 / -4-2 | Audit | Certificate → "we are secure" |

In this model, *"compliant"* is a **state** you reach by obtaining a certificate, and the assessing body carries much of the responsibility for the verdict. After the certificate is issued, there are no ongoing product obligations toward an authority. This is a perfectly reasonable expectation — it is how most product regulation has worked.

## Why the CRA reads differently through that lens

Read through the certificate lens, the CRA's requirements are systematically misunderstood:

- An **SBOM** (Software Bill of Materials) looks like a document you produce once.
- A **CVD policy** (Coordinated Vulnerability Disclosure) looks like a text a lawyer drafts.
- The **ENISA reporting duty** looks like a form a test house files on your behalf.

None of these readings is correct. Each is a **process you operate** — continuously, for as long as the product is on the market — not an artefact you obtain once.

## The ISO 9001 analogy

Almost every exporter already holds or knows **ISO 9001**. It is the clearest bridge to how the CRA actually thinks, in three steps.

**1 — Anchor to what you know (the CE logic).**
For products with digital elements, CRA conformity becomes a precondition for CE marking. For *important* products (Annex III), conformity may require the involvement of a notified body. So yes — at the end there is a formal proof of conformity, comparable to other regulated product categories. (Which route applies depends on the product class → [Conformity Assessment](/en/conformity/).)

**2 — Pivot to process logic (this is the ISO 9001 part).**
The CRA does not only assess the product at one point in time. It assesses whether your **processes exist and function** — exactly as ISO 9001 audits your *quality management system*, not your end product. An ISO 9001 certificate proves that your QMS demonstrably meets the standard. It does **not** mean quality problems are impossible; it means you operate a process for dealing with them. The CRA applies the same logic to security.

**3 — The decisive difference.**

::: warning NO CERTIFIER CAN STOP THIS CLOCK
ISO 9001 has **no** external reporting duty to a public authority. The CRA does. If an **actively exploited** vulnerability is found in your product — whether by you, a security researcher, or a customer — you have **24 hours** to submit an early warning to ENISA and the designated CSIRT (Art. 14(1) CRA), followed by a 72-hour notification and a final report. No certificate, no test house, and no service provider can stop that clock for you. You need an internal process that can.
:::

## The CRA as a lifecycle obligation

The certificate is one moment; the obligation spans the whole product life. The operational detail lives in the chapters linked below — this is only the map.

| Phase | What the CRA expects | Where it is covered |
|-------|----------------------|---------------------|
| **Before placing on the market** | Risk assessment, SBOM, technical documentation (Annex VII), conformity assessment, a working CVD contact point | [Technical Documentation](/en/technical-documentation/) · [SBOM](/en/sbom-signing/) · [Conformity](/en/conformity/) |
| **While on the market** *(the critical phase)* | Continuous CVE monitoring, free security updates, SBOM kept current per version, 24 h / 72 h / 14 d ENISA reporting, a live CVD channel | [Vulnerability Management](/en/vulnerability-management/) · [ENISA Reporting](/en/incident-response/enisa-reporting) · [Disclosure Policy](/en/incident-response/disclosure-policy) |
| **Support period** | Security updates for the support period — at least 5 years, or the expected product lifetime if longer | [Support & Lifecycle](/en/technical-documentation/support-period) |

::: tip THE ON-MARKET PHASE IS WHERE CERTIFICATES END AND THE CRA CONTINUES
A certificate audit is a snapshot. The CRA's centre of gravity is the *on-market* phase — the years after the audit, during which a certificate says nothing about whether you are still monitoring, patching, and reporting.
:::

## What this means in practice

None of the following can be supplied by a certificate, because they are **operating tasks, not assessment tasks**:

- An internal process that can **detect and report within 24 hours**.
- **Continuous CVE monitoring** of your own code and all third-party components.
- An **SBOM kept current** for every firmware / software version.
- A **live CVD channel** that security researchers can actually reach.
- **Security updates** delivered, free of charge, across the entire support period.

> Next: [IEC 62443 & ISO vs. CRA](/en/clarifications/iec-62443-vs-cra) — how the specific standards map to the CRA, and exactly what they do and do not cover.
