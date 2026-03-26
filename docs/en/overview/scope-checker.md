# CRA Scope Checker

Use this decision tree to determine whether the Cyber Resilience Act applies to your product and which conformity path to follow.

::: danger BAUER GROUP Rule
**Every product with digital elements undergoes this assessment before EU market launch.** Classification decisions must be documented using the [Product Classification Record](/en/templates/product-classification-record).
:::

## Decision Tree

### Gate 1: Product with Digital Elements?

```
┌───────────────────────────────────────────────┐
│ Does the product contain digital elements?    │
│ (Software, firmware, or hardware with         │
│ logical data connection — Art. 3(1) CRA)      │
│                                               │
│   NO  → CRA not applicable → STOP            │
│   YES ↓                                      │
└───────────────────────────────────────────────┘
```

**"Product with digital elements"** means any software or hardware product and its remote data processing solutions, including software or hardware components being placed on the market separately (Art. 3(1) CRA).

### Gate 2: Exemptions (Art. 2(2))

```
┌───────────────────────────────────────────────┐
│ Does any of the following exemptions apply?   │
│                                               │
│ ☐ Medical device (Reg. 2017/745, 2017/746)   │
│ ☐ Motor vehicle (Reg. 2019/2144)             │
│ ☐ Aviation (Reg. 2018/1139)                  │
│ ☐ Marine equipment (Dir. 2014/90/EU)         │
│ ☐ National security / military product       │
│ ☐ Pure SaaS without product component        │
│                                               │
│   YES → CRA not applicable (sector-specific  │
│          regulation applies) → STOP           │
│   NO  ↓                                      │
└───────────────────────────────────────────────┘
```

::: tip NIS2 Synergy
Pure SaaS services fall under NIS2, not CRA — unless remote data processing is an integral part of a physical or installable product.
:::

### Gate 3: Open-Source Assessment (Art. 18–19)

```
┌───────────────────────────────────────────────┐
│ Is this open-source software?                 │
│                                               │
│   NO  → Continue to Gate 4 ↓                 │
│   YES → Is there a commercial activity?       │
│         (sale, paid support, monetised         │
│          integration, SaaS offering)           │
│                                               │
│     NO  → CRA not applicable → STOP          │
│     YES → Open-Source Steward obligations     │
│           apply (Art. 18–19) → Continue ↓    │
└───────────────────────────────────────────────┘
```

::: warning Note
"Commercial activity" is broadly defined. Accepting donations alone does **not** constitute commercial activity. However, providing the software as part of a paid product or service **does**.
:::

### Gate 4: Product Classification (Art. 6–7, Annex III & IV)

```
┌───────────────────────────────────────────────┐
│ Is the product listed in Annex IV?            │
│                                               │
│   YES → CRITICAL                              │
│         → EUCC certification required         │
│         → See: Conformity / EUCC              │
│   NO  ↓                                      │
├───────────────────────────────────────────────┤
│ Is the product listed in Annex III?           │
│                                               │
│   YES → Which class?                          │
│     Class II → Module B+C or Module H         │
│                → See: Conformity / Module B+C  │
│     Class I  → Module A (with hEN) or B+C     │
│                → See: Conformity / Module A    │
│   NO  ↓                                      │
├───────────────────────────────────────────────┤
│ STANDARD (Default Category)                   │
│ → Module A (Self-Assessment)                  │
│ → See: Conformity / Self-Assessment           │
└───────────────────────────────────────────────┘
```

## Results Summary

| Result | Product Class | Conformity Path | Effort Level |
|--------|--------------|-----------------|--------------|
| <span class="badge-default">Standard</span> | Default | [Module A (Self-Assessment)](/en/conformity/self-assessment) | Low |
| <span class="badge-class-i">Class I</span> | Important (Class I) | [Module A with hEN](/en/conformity/self-assessment) or [Module B+C](/en/conformity/module-bc) | Medium |
| <span class="badge-class-ii">Class II</span> | Important (Class II) | [Module B+C](/en/conformity/module-bc) or [Module H](/en/conformity/module-h) | High |
| <span class="badge-critical">Critical</span> | Critical (Annex IV) | [EUCC Certification](/en/conformity/eucc) | Very High |

## Estimated Compliance Effort

| Requirement | One-off | Annual | Applies to |
|---|---|---|---|
| Security risk assessment (Annex I) | 20–40h | 10–20h | All classes |
| SBOM generation & maintenance | 8–16h | 8–16h | All classes |
| Vulnerability handling process | 20–40h | 20–40h | All classes |
| Incident reporting setup (Art. 14) | 16–32h | 8–16h | All classes |
| Technical documentation (Annex VII) | 40–80h | 10–20h | All classes |
| CE marking & EU DoC | 8–16h | 4–8h | All classes |
| Third-party assessment (Module B+C) | 40–80h | 20–40h | Class I\* / II |
| QMS establishment (Module H) | 60–120h | 30–60h | Class II (alt.) |
| EUCC certification process | 80–160h | 40–80h | Critical |
| **Total Standard** | **112–224h** | **60–120h** | |
| **Total Class I (with hEN)** | **112–224h** | **60–120h** | |
| **Total Class I (without hEN)** | **152–304h** | **80–160h** | |
| **Total Class II** | **212–424h** | **110–220h** | |
| **Total Critical** | **252–504h** | **130–260h** | |

\* Class I only requires third-party assessment if harmonised standards are **not** applied in full.

::: tip BAUER GROUP Approach
BAUER GROUP relies on a **fully automated toolchain** (Trivy, Grype, CycloneDX, Cosign, GitHub Actions) to minimise manual effort for Standard and Class I products. See the [Tooling Map](/en/compliance-matrix/tooling-map) for details.
:::

## Next Steps

Based on your classification result:

1. **Document the decision** → [Product Classification Record](/en/templates/product-classification-record)
2. **Start conformity process** → [Conformity Assessment Overview](/en/conformity/)
3. **Prepare documentation** → [Technical Documentation](/en/technical-documentation/)
4. **Set up reporting** → [ENISA Reporting Process](/en/incident-response/enisa-reporting)
