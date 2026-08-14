# Sectoral Law & Existing Certificates

Two assumptions cause recurring errors at the border between the CRA and other EU legislation. The first: *"our component goes into cars, so the CRA does not apply."* The second: *"we hold a valid EU type-examination certificate, so we are covered."* Both are partially true — and the part that is not true is where the compliance gap sits.

The Commission guidance of 27 July 2026 addresses both directly. This page sets out the boundaries it draws.

## Vehicles: the exemption is narrower than it looks

Art. 2(2)(c) CRA excludes products with digital elements to which **Regulation (EU) 2019/2144** applies — that is, vehicles of categories M, N and O, and the systems, components and separate technical units designed and constructed for such vehicles. Products falling under **Regulation (EU) No 168/2013** (L-category vehicles) were excluded from the CRA by **Commission Delegated Regulation (EU) 2025/1535**.

The vehicles themselves are unambiguously out of scope. The difficulty lies with **components**.

::: warning THE WORD THAT DECIDES IS "EXCLUSIVELY"
A component is exempt only where it is **exclusively** designed and constructed for integration into vehicles covered by those Regulations. A component that can also be integrated into other types of product is a product with digital elements and is subject to the CRA — regardless of how the manufacturer describes its intended use.
:::

Two consequences follow, and they point in opposite directions:

| Situation | Verdict |
|-----------|---------|
| Component sold to the vehicle manufacturer **or** to another economic operator in the automotive supply chain, but exclusively suitable for ultimate integration into covered vehicles | **Exempt.** The position in the supply chain does not matter, as long as the component is clearly intended and suitable only for that integration. |
| Generic component that can be integrated into different types of product | **CRA applies.** |
| Component that is not exclusively suitable for such vehicles, offered through general retail outlets or online channels that accept orders from the general public | **CRA applies**, irrespective of any statement about intended use. The objective conditions of supply override the declared intention. |
| Restricted, business-to-business distribution limited to the automotive supply chain | May indicate exclusive design and construction — a supporting indicator, not a substitute for the exclusivity test itself. |

The assessment is based on the **objective conditions under which the component is made available**, not on a disclaimer in the datasheet. A manufacturer relying on the exemption should be able to show that its distribution channel is genuinely closed to non-automotive customers.

## Existing certificates: valid, but only for what they cover

Art. 69(1) CRA lets manufacturers carry existing work forward:

> *"EU type-examination certificates and approval decisions issued regarding cybersecurity requirements for products with digital elements that are subject to Union harmonisation legislation other than this Regulation shall remain valid until 11 June 2028, unless they expire before that date, or unless otherwise specified in such other Union harmonisation legislation."*

This is genuinely useful — and routinely over-read. The guidance sets three limits.

### Limit 1 — Only the risks the certificate actually covers

Continued validity is confined to the **cybersecurity risks and corresponding requirements covered by the legislation under which the certificate was issued**. For those risks, and only those, no reassessment or re-demonstration is needed for CRA purposes. This applies both where the other legislation required a notified body and where the manufacturer chose one voluntarily.

### Limit 2 — A hard stop at 11 June 2028

Where a certificate remains valid **beyond** 11 June 2028 under the other legislation, it may still only be relied on **for CRA purposes until 11 June 2028**. The CRA cut-off is independent of the certificate's own expiry date.

### Limit 3 — It is evidence, not a conformity substitute

::: danger A VALID CERTIFICATE DOES NOT DEMONSTRATE CRA COMPLIANCE
The existence of a valid EU type-examination certificate or approval decision does **not**, in itself, demonstrate full compliance with the CRA. It does not exempt the manufacturer from carrying out a comprehensive cybersecurity risk assessment under Art. 13(2), nor from any other CRA obligation.

It allows the manufacturer to **rely on the certificate as evidence of compliance for the corresponding risks** — while any remaining or newly identified risk must still be assessed and mitigated under the CRA.
:::

## Worked example: the Radio Equipment Directive

Where a product is subject to the cybersecurity requirements of **Commission Delegated Regulation (EU) 2022/30** supplementing Directive 2014/53/EU (RED), and an EU type-examination certificate has been issued on that basis:

| | Covered by the RED certificate | Not covered — assess under the CRA |
|---|---|---|
| **Typical risks** | Network protection; protection of personal data and privacy; prevention of fraud — to the extent covered by the certificate | Vulnerability handling processes; data minimisation; reduction of the attack surface; other product-specific aspects |
| **Effect** | No reassessment for CRA purposes while the certificate is valid, and in any event not beyond 11 June 2028 | Full CRA obligations apply |

## Worked example: the Machinery Regulation

The same logic applies to **Regulation (EU) 2023/1230** (Machinery Regulation), fully applicable from **20 January 2027**. Where an EU type-examination certificate or approval decision has been issued on the basis of its cybersecurity-related essential health and safety requirements, it remains valid under Art. 69(1) CRA for the cybersecurity risks the Machinery Regulation covers — in particular:

- **Annex III, Section 1.1.9** — protection against corruption
- **Annex III, Section 1.2.1** — safety and reliability of control systems

For those risks, no reassessment is required for CRA purposes while the certificate is valid and in any event not beyond 11 June 2028. Any additional cybersecurity risk identified by the Art. 13(2) risk assessment remains the manufacturer's responsibility.

## What this means for planning

| Question | Answer |
|----------|--------|
| Can we place a product on the market after 11.12.2027 relying on a RED or Machinery certificate? | Yes — for the risks that certificate covers, until 11.06.2028 at the latest. |
| Do we still need a CRA risk assessment? | **Yes**, always, and it must be comprehensive. |
| Do we still need CRA technical documentation, an EU declaration of conformity and CE marking? | **Yes.** Art. 69(1) affects evidence, not obligations. |
| What happens on 12 June 2028? | The gap must already be closed by then. Conformity must rest on the CRA's own routes. |
| What about products placed on the market before 11.12.2027? | They remain subject to the law applicable at the time of placing on the market and, if compliant, may be sold and put into operation — unless they undergo a [substantial modification](/en/overview/substantial-modifications) on or after 11.12.2027. |

::: tip PLAN THE GAP ANALYSIS NOW, NOT IN 2028
The interval between 11.12.2027 and 11.06.2028 is six months. A manufacturer that treats Art. 69(1) as breathing room rather than as a deadline for the delta assessment will discover the gap at the worst possible moment. Run the comparison — *which CRA risks does our existing certificate genuinely cover?* — while the certificate is still current.
:::

## Related chapters

- [Certificate vs. CRA Lifecycle](/en/clarifications/certificate-vs-lifecycle) — why a certificate is not the finish line
- [IEC 62443 & ISO vs. CRA](/en/clarifications/iec-62443-vs-cra) — what the industrial standards do and do not cover
- [Commission Guidance on the CRA](/en/clarifications/commission-guidance) — source and legal status of this interpretation
- [1.1 Scope](/en/overview/scope) — the CRA's exclusions in context
- [7.3 EU Type Examination (Module B+C)](/en/conformity/module-bc) — the CRA's own type-examination route
