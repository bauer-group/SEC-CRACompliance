# CE Marking (Art. 29-30)

## Overview

The CE marking is the visible sign that a product with digital elements meets all applicable EU requirements. It is **mandatory** before a product is placed on the EU market. The CE marking does not refer exclusively to the CRA but to all EU harmonisation legislation applicable to the product.

::: info LEGAL BASIS
**Art. 29 CRA:** *"The CE marking shall be affixed visibly, legibly, and indelibly to the product with digital elements before it is placed on the market. Where that is not possible or not warranted on account of the nature of the product, it shall be affixed to the packaging or to the accompanying documents."*

**Art. 30 CRA:** The CE marking is subject to the general principles set out in Art. 30 of Regulation (EC) No 765/2008.

**Regulation (EC) No 765/2008, Art. 30:** General principles of the CE marking (proportions, minimum size, visibility).
:::

## What the CE Marking Signifies

The CE marking confirms that:

1. The product meets the **essential requirements** of all applicable EU harmonisation legislation
2. The prescribed **conformity assessment** has been properly carried out
3. An **EU declaration of conformity** (DoC) has been issued
4. The manufacturer assumes **full responsibility** for conformity

::: warning NOT A QUALITY MARK
The CE marking is **not a quality seal** and not a certificate issued by an independent body (except where Module B+C or H applies). It is a **manufacturer's declaration** of compliance with EU requirements.
:::

## When Is the CE Marking Affixed?

The CE marking may **only** be affixed when:

- [ ] The conformity assessment has been **successfully completed** (Module A, B+C, or H)
- [ ] The **EU declaration of conformity** pursuant to Art. 28 / Annex V has been drawn up
- [ ] The **technical documentation** pursuant to Annex VII is complete
- [ ] All **essential requirements** from Annex I (Part I and Part II) are met
- [ ] Where external assessment applies: The **certificate from the notified body** has been obtained

## Physical Requirements

Pursuant to Regulation (EC) No 765/2008 and Art. 29-30 CRA:

| Requirement | Specification |
|-------------|---------------|
| Minimum size | **5 mm** height (for physical affixing) |
| Proportions | Uniform enlargement/reduction while maintaining the aspect ratio |
| Visibility | Affixed in a visible location |
| Legibility | Easily legible |
| Indelibility | Not easily removable (indelible) |
| Language | No language requirement (universal symbol) |

## Where to Place the CE Marking

### Hardware / Physical Products

1. **On the product itself** -- preferred
2. **On the packaging** -- where affixing to the product is not possible or not warranted (e.g., too small, unsuitable material)
3. **In the accompanying documents** -- supplementary, not as the sole placement

### Software Products

As software has no physical substrate, special provisions apply:

| Placement | Description | Recommendation |
|-----------|-------------|----------------|
| About dialog | In the "About" window or the info page of the application | Recommended |
| README | In the README file of the repository or release bundle | Recommended |
| Product documentation | In the user or installation documentation | Required |
| Digital user interface | In the application interface (footer, settings) | Recommended |
| Product website | On the download or product page | Supplementary |
| Release notes | In the release notes of each release | Supplementary |

### Container Images

For containerised software:

| Placement | Technical Implementation |
|-----------|--------------------------|
| OCI annotations | `org.opencontainers.image.ce-marking: "true"` |
| OCI labels | Label in Dockerfile: `LABEL eu.cra.ce-marking="conformant"` |
| Image documentation | README of the container image repository |
| Helm Chart / Manifest | In the metadata of the deployment configuration |

### Firmware

| Placement | Description |
|-----------|-------------|
| Device itself | CE marking on the physical device containing the firmware |
| User interface | In the web interface or configuration interface of the device |
| Update portal | On the download page for firmware updates |

## Additional Markings

### Notified Body Identification Number

Where a **notified body** was involved in the conformity assessment (Module B+C or Module H), its **four-digit identification number** must be placed immediately after the CE marking:

```
CE 1234
```

- The identification number is affixed by the notified body itself or on its instructions
- The number can be verified via the EU Commission's [NANDO database](https://ec.europa.eu/growth/tools-databases/nando/)

::: tip MODULE A
For self-assessment under **Module A**, **no** identification number is affixed. The CE marking stands alone.
:::

### Manufacturer Details

In addition to the CE marking, the following must be indicated:

- **Name or trademark** of the manufacturer
- **Postal address** of the manufacturer (or of the Authorised Representative)
- **Unique product identification** (type, version, serial number)

## Prohibited Markings

::: danger PROHIBITED
The following markings are **impermissible** and may lead to penalties:

- **Misleading markings** that may be confused with the CE marking (e.g., "China Export" mark)
- **CE marking without a completed conformity assessment**
- **CE marking that does not cover all applicable directives** (only CRA but not other relevant regulations)
- **Identification number of a notified body not involved**
- **Manipulated or counterfeit CE markings**
:::

## Relationship to the EU Declaration of Conformity

The CE marking and the EU declaration of conformity (DoC) are inseparably linked:

| CE Marking | EU Declaration of Conformity |
|------------|------------------------------|
| Visible sign on the product | Formal document of the manufacturer |
| Implicitly references the DoC | Must contain all conformity details |
| No substantive information | Contains product identification, standards, signature |
| Mandatory on the product | Mandatory as accompanying document (or URL thereto) |

The CE marking may **only** be affixed where a valid EU declaration of conformity exists. Conversely, the DoC without the CE marking is incomplete.

> Template: [EU Declaration of Conformity Template](/en/templates/eu-declaration-of-conformity)

## Market Surveillance and Missing CE Marking

### Art. 56 -- Formal Non-Conformity

A missing, defective, or misleading CE marking constitutes **formal non-conformity**:

| Violation | Consequence |
|-----------|-------------|
| CE marking missing | Authority demands affixing; if not complied with: distribution stop |
| CE incorrectly affixed (proportions, visibility) | Correction within set deadline |
| CE without conformity assessment | Distribution stop + possible penalties |
| Misleading marking | Penalties up to EUR 5 million or 1% of annual turnover |
| Notified body identification number missing (for Module B+C/H) | Formal non-conformity |

### Procedure for Formal Non-Conformity

```
Authority determines formal non-conformity
    |
    +-- Manufacturer informed (with deadline)
    |
    +-- Manufacturer establishes formal conformity
    |   +-- Conformity established --> Procedure closed
    |   +-- Not established --> Measures
    |       +-- Distribution stop
    |       +-- Withdrawal / recall
    |       +-- Penalties
```

> Details: [Market Surveillance (Art. 52-58)](/en/overview/market-surveillance)

## BAUER GROUP Implementation

### Software Products

| Product Type | CE Marking Placement | Implementation |
|-------------|----------------------|----------------|
| Web applications | About dialog, footer | Display "CE" with link to DoC |
| Desktop applications | About dialog, splash screen | CE logo in info section |
| CLI tools | README, `--version` output | CE note in version information |
| Libraries/SDKs | README, package metadata | CE reference in `package.json`, `pom.xml`, etc. |

### Container Images

| Measure | Implementation |
|---------|----------------|
| OCI annotation | `org.opencontainers.image.ce-marking` in image metadata |
| Dockerfile label | `LABEL eu.cra.ce-marking="conformant"` |
| Image README | CE marking in the repository README |
| Helm Chart | CE annotation in `Chart.yaml` metadata |

### Firmware

| Measure | Implementation |
|---------|----------------|
| Device labelling | CE mark on the physical device |
| Web interface | CE note in the admin panel / info page |
| Update documentation | CE reference in the release notes |

## Checklist: CE Marking

### Before Affixing

- [ ] Conformity assessment successfully completed
- [ ] EU declaration of conformity drawn up and signed
- [ ] Technical documentation complete (Annex VII)
- [ ] All applicable EU harmonisation legislation considered (not only CRA)
- [ ] For Module B+C/H: Certificate from the notified body obtained

### Correct Affixing

- [ ] CE marking visible, legible, and indelible
- [ ] Minimum size of 5 mm maintained (for physical products)
- [ ] Proportions correct
- [ ] Notified body identification number present (if applicable)
- [ ] Manufacturer details next to the CE marking
- [ ] Product identification present

### Software-Specific

- [ ] CE marking in the About dialog / info page
- [ ] CE marking in the documentation
- [ ] CE reference in README / release notes
- [ ] For containers: OCI annotations / labels set
- [ ] Link to EU declaration of conformity available

### Ongoing

- [ ] CE marking verified with each release
- [ ] For new product versions: conformity reconfirmed
- [ ] No misleading markings present
- [ ] Documentation up to date

## Cross-References

- [EU Declaration of Conformity](/en/conformity/eu-declaration)
- [Self-Assessment (Module A)](/en/conformity/self-assessment)
- [EU Type Examination (Module B+C)](/en/conformity/module-bc)
- [Full Quality Assurance (Module H)](/en/conformity/module-h)
- [Product Classification](/en/conformity/product-classification)
- [Market Surveillance (Art. 52-58)](/en/overview/market-surveillance)
- [Importer Obligations (Art. 15)](/en/overview/importer-obligations)
