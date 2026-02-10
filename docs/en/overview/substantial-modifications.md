# 1.8 Substantial Modifications (Art. 20)

## 1.8.1 Overview

A **substantial modification** to a product with digital elements may result in the person making the modification being considered a new **Manufacturer** and thus having to assume the full manufacturer obligations under Art. 10. Art. 20 CRA defines when a modification is considered "substantial" and what consequences follow.

::: info LEGAL BASIS
**Art. 20 CRA:** *Any natural or legal person who makes a substantial modification to a product with digital elements that has already been placed on the market shall be considered a Manufacturer within the meaning of this Regulation.*

**Art. 3 No. 31 CRA:** Definition of substantial modification.
:::

## 1.8.2 Definition: Substantial Modification

A modification is considered **substantial** if all of the following conditions are met:

1. The modification affects the **cybersecurity** of the product
2. The modification goes beyond the maintenance and security updates **intended by the original manufacturer**
3. The modification renders the existing **conformity assessment** no longer valid

## 1.8.3 Decision Tree

```
Was the product modified after placing on the market?
+-- No --> No impact
+-- Yes --> Does the modification affect cybersecurity?
    +-- No --> Not a substantial modification
    +-- Yes --> Does the modification go beyond intended updates?
        +-- No --> Not a substantial modification (regular update)
        +-- Yes --> Is the existing conformity assessment invalidated?
            +-- No --> Not a substantial modification
            +-- Yes --> SUBSTANTIAL MODIFICATION
                --> Person making the modification becomes the Manufacturer
```

## 1.8.4 Examples

### Not a Substantial Modification

- Security patches and bugfixes from the manufacturer
- Configuration changes within the intended settings
- Updating a dependency to a patch version (e.g., 1.2.3 --> 1.2.4)
- Adjustment of deployment parameters
- Language packs or localisation

### Substantial Modification (potential)

- **Change of the authentication mechanism** (e.g., password --> OAuth --> custom implementation)
- **Removal of security features** (e.g., disabling encryption)
- **Change of the network architecture** that opens new attack vectors
- **Integration of new security-relevant components** (e.g., custom crypto stack)
- **Porting to a new platform** with a different security model
- **Major version upgrade of a core dependency** with changed security properties

## 1.8.5 Consequences of a Substantial Modification

Whoever makes a substantial modification must:

### 1. Assume Manufacturer Obligations (Art. 10)

- Carry out a cybersecurity risk assessment (for the modified part)
- Create/update technical documentation (Annex VII)
- Ensure vulnerability handling (Annex I Part II)
- Define support period

### 2. Carry Out a New Conformity Assessment

- Carry out [product classification](/en/conformity/product-classification) (also for the modified part)
- Select the appropriate conformity assessment procedure
  - [Module A](/en/conformity/self-assessment) for Standard
  - [Module B+C](/en/conformity/module-bc) for Class I/II
  - [Module H](/en/conformity/module-h) for Class II
  - [EUCC](/en/conformity/eucc) for Critical

### 3. New EU Declaration of Conformity

- Issue an [EU declaration of conformity](/en/conformity/eu-declaration) for the modified product
- Affix CE marking (under own name)

### 4. ENISA Reporting Obligations

- Report vulnerabilities in the modified product (Art. 14)
- Comply with 24h/72h/14d deadlines

## 1.8.6 Process at BAUER GROUP

### Review Before Any Modification to a Third-Party Product

| Step | Action | Responsible |
|------|--------|-------------|
| 1 | Document the modification (What is being changed?) | Development team |
| 2 | Assess cybersecurity relevance | CISO |
| 3 | Check whether the modification was intended by the manufacturer | Product management |
| 4 | Check whether the conformity assessment is still valid | CISO |
| 5 | Decision: Substantial modification yes/no | CISO + Management |
| 6 | Document the decision (with rationale) | CISO |

### If "Yes -- Substantial Modification"

| Step | Action |
|------|--------|
| 7 | Carry out risk assessment ([Template](/en/templates/risk-assessment)) |
| 8 | Carry out product classification |
| 9 | Carry out conformity assessment |
| 10 | Create technical documentation |
| 11 | Issue EU declaration of conformity |
| 12 | Define support period |

## 1.8.7 Documentation

Every modification decision is documented:

1. **Description of the modification** -- What was changed, why
2. **Cybersecurity analysis** -- What impact on security
3. **Substantiality assessment** -- Decision with rationale
4. **Measures** -- What steps were initiated (or why none were necessary)
5. **Responsible person and date**

::: warning DOCUMENTATION OBLIGATION
The decision that a modification is **not** substantial must also be documented. In case of dispute, BAUER GROUP must be able to demonstrate that the review has taken place.
:::
