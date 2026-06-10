# IEC 62443 & ISO Standards vs. CRA

::: info COMPLEMENT, NOT CRITICISM
IEC 62443 is a valuable standard with substantial overlap with the CRA. Manufacturers who follow it are doing something right. The purpose of this page is **delineation** — what these standards do and do not cover relative to the CRA — not a verdict that they are wrong.
:::

A common belief among manufacturers of industrial communication hardware is that an **IEC 62443 certificate equals CRA compliance**. It does not. IEC 62443 is a strong foundation that overlaps with several CRA requirements, but it leaves the CRA's ongoing operating and reporting duties uncovered.

## What IEC 62443-4-1 and -4-2 actually cover

| Standard | Subject | Overlaps with | Key limitation |
|----------|---------|---------------|----------------|
| **IEC 62443-4-1** | Secure product development lifecycle (SDLC): security management, design, implementation, verification, patch & end-of-life processes | CRA Annex I Part II (vulnerability-handling / secure-process requirements) | The audit is a **snapshot**; it does not verify ongoing operations after market launch |
| **IEC 62443-4-2** | Technical security requirements for components (authentication, access control, data integrity, communication security), graded by Security Level SL 1–4 | CRA Annex I Part I (essential product cybersecurity requirements) | Says nothing about ongoing **manufacturer duties** after placing on the market |

Both are genuine and useful — and both are assessed at a single point in time.

## Master comparison

| Dimension | IEC 62443-4-1 | IEC 62443-4-2 | ISO 9001 | **CRA** |
|-----------|---------------|---------------|----------|---------|
| What is assessed | Development process | Product properties | Quality processes | Process **+** product **+** ongoing operation |
| When | Snapshot | Snapshot | Snapshot + annual surveillance | Entire product lifecycle |
| Certificate exists | Yes | Yes | Yes | Conformity route depends on class (see below) |
| Ongoing manufacturer duty | None until renewal | None until renewal | Maintain the QMS | CVE monitoring, patching, SBOM upkeep, ENISA reporting |
| Reporting duty to an authority | None | None | None | **Yes — ENISA: 24 h early warning, 72 h notification** |
| Liability after market launch | Shared with certifier | Shared with certifier | Shared with certifier | **Manufacturer alone** |
| Minimum support duty | None | None | None | **Security updates across the support period (≥ 5 years / expected lifetime)** |
| Ends with | Certificate expiry | Certificate expiry | Certificate expiry | End of market availability + support period |

::: warning THE CONFORMITY ROUTE IS NOT "CLASS = CERTIFICATE"
For the CRA, the assessment route depends on the product class **and** on whether harmonised standards apply: **Standard** → Module A (self-assessment); **Class I** → Module A only where harmonised standards are applied in full, otherwise Module B+C; **Class II** → Module B+C or Module H; **Critical** → EUCC. See [Product Classification](/en/conformity/product-classification) and [Harmonised Standards](/en/overview/harmonised-standards).
:::

## What IEC 62443 does NOT replace

No audit certificate can substitute for the following, because they are **operating tasks**, not assessment tasks:

- The **SBOM per firmware version**, kept continuously up to date → [SBOM & Signing](/en/sbom-signing/)
- The **ENISA reporting duty** — 24 h early warning for an actively exploited vulnerability, 72 h notification, 14-day final report → [ENISA Reporting](/en/incident-response/enisa-reporting)
- The **continuous CVE-monitoring infrastructure** (permanent, not auditable at a point in time) → [Vulnerability Management](/en/vulnerability-management/)
- The **CVD policy** as a working channel for security researchers → [Disclosure Policy](/en/incident-response/disclosure-policy)
- The provision of **security updates across the entire support period** → [Support & Lifecycle](/en/technical-documentation/support-period)

> No audit replaces an operating task. A certificate confirms a state at a point in time; these are processes that have to keep running.

## How standards still help you

Following IEC 62443 or holding ISO certificates is genuinely useful — provided you understand their role:

- **Presumption of conformity** comes only from **harmonised standards** whose references are published in the Official Journal of the EU (OJEU). Until then, no standard — including IEC 62443 — grants automatic CRA conformity. IEC 62443 is currently a **reference**, not a harmonised CRA standard. → [Harmonised Standards](/en/overview/harmonised-standards)
- An existing **QMS** (ISO 9001 / ISO 27001) is a strong basis for the CRA's process requirements and integrates well with the Module H route. → [Module H](/en/conformity/module-h)

> Back to: [Certificate vs. CRA Lifecycle](/en/clarifications/certificate-vs-lifecycle)
