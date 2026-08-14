# 1.1 Scope

## 1.1.1 Scope of Application

Pursuant to Art. 2 CRA, this regulation applies to products with digital elements that are made available on the EU market and whose intended or reasonably foreseeable use includes a direct or indirect logical or physical data connection to a device or network.

Three questions therefore decide whether a given item is covered:

1. Is it a **product with digital elements** (Art. 3(1))? → 1.1.2
2. Does it have a **data connection** in the sense of Art. 2(1)? → 1.1.6
3. Is it **placed on the market** in the course of a commercial activity (Art. 3(21), (22))? → 1.1.4

::: info COMMISSION GUIDANCE APPLIED
The interpretations in sections 1.1.2 to 1.1.8 follow the Commission guidance on the application of the CRA of 27 July 2026 (Chapter 2). That guidance is not legally binding and had not been formally adopted at the time of writing — see [Commission Guidance on the CRA](/en/clarifications/commission-guidance) for its exact status.
:::

## 1.1.2 What Is a Product with Digital Elements?

Art. 3(1) CRA defines a product with digital elements as *"a software or hardware product and its remote data processing solutions, including software or hardware components being placed on the market separately"*. Four families are covered:

| Family | Examples |
|--------|----------|
| Standalone software | Apps and computer programs, whether digitally or physically distributed |
| Hardware with embedded software | IoT devices, laptops, tablets |
| Standalone hardware | Integrated circuits, motherboards |
| Combinations supplied separately but intended to operate together | Device plus its companion application |

### The decisive test for software: does it run on the user's side?

For software to fall within the scope of the CRA, it must be **provided to a user, obtained by that user, and operated on — or as part of — an electronic information system on the user's side**.

| Constellation | Product with digital elements? |
|---------------|:------------------------------:|
| Software downloaded, installed or otherwise supplied to the user and executing on the user's system | **Yes** |
| Browser extension | **Yes** |
| Application built with web technologies but packaged for **local** installation | **Yes** |
| Mobile app downloaded from an app store | **Yes** |
| Web application accessed **exclusively through a browser** (including progressive web apps) | **No** |
| Website presenting information to visitors | **No** |
| Locally installed client of a web service | **Yes** — and its remote data processing may be part of the product |

::: warning CORRECTION TO EARLIER PRACTICE
Software that executes remotely and is merely *accessed* by the user is not, on that basis alone, a product with digital elements. Server-side web applications and websites are covered by the CRA **only** where they support the functionality of a product with digital elements — that is, where they qualify as [remote data processing](/en/overview/remote-data-processing). Recitals 11 and 12 CRA draw this distinction; the Commission guidance confirms it.

This does **not** put such services beyond regulation: cloud and web services fall under [NIS2](/en/overview/nis2-integration).
:::

### Computer code as a product

The CRA defines software as *"the part of an electronic information system which consists of computer code"* (Art. 3(4)). This covers **both machine code and source code**. Whether a given supply of code is *placed on the market* is a separate question, and it turns on commercial activity:

| Supply of code | Placed on the market? |
|----------------|:---------------------:|
| Free and open-source code shared on a publicly accessible repository | **Generally no** → see [1.7 Open-Source Steward](/en/overview/open-source-steward) |
| Unfinished code shared during design and development (for testing or review) | **No** — the manufacturing phase is not complete |
| Sample or demo code in tutorials and training materials | **No** |
| Alpha, beta or release-candidate software under Art. 4(3), made available only for the time necessary to test it and gather feedback | **No** — expressly permitted not to comply |
| Source code licensed to a customer as a product, even if the customer must still adapt and compile it | **Yes** — the supplier is subject to the CRA |

::: tip WHERE RESPONSIBILITY ENDS
Where a company licenses source code to a customer, it is placing that code on the market and is subject to the CRA. It is **not** responsible for the CRA compliance of the customer's subsequent adaptations and compilation.
:::

### Hardware and software forming one product

Whether software forms part of a product is determined **not by how or when it is delivered**, but by whether — in light of the product's intended purpose and reasonably foreseeable use — the software is necessary for the product to perform its intended functions.

Software needed to operate, configure, control or use a product in accordance with its intended purpose is part of that product **even if obtained through a separate channel** (an app store, a download link, or any other digital channel after the hardware was placed on the market). Its placing on the market occurs at the same time as the hardware units.

> **Example:** A network printer is placed on the market as hardware, while the drivers required to send print jobs and configure the device are downloaded from the manufacturer's website. Printer and drivers together constitute a **single** product with digital elements, because the printer cannot fulfil its intended purpose without the drivers. The same applies to a fitness wearable whose measurements can only be displayed and configured through the manufacturer's smartphone app.

## 1.1.3 Affected Product Categories

### Software Products

| Category | Examples | CRA-relevant |
|----------|----------|-------------|
| Software supplied to customers for self-hosting | Container images, on-premises deployments, appliances | Yes |
| Desktop applications | .NET WPF/WinForms, MAUI, Electron-style local builds | Yes |
| Mobile applications | App-store distributed apps | Yes |
| Browser extensions | Locally installed extensions | Yes |
| NPM packages | Publicly published libraries | Yes (when placed on the market — see [1.7](/en/overview/open-source-steward)) |
| NuGet packages | .NET libraries | Yes (when placed on the market — see [1.7](/en/overview/open-source-steward)) |
| Web applications / APIs operated by us and only accessed via browser or network | Hosted SaaS frontends, hosted REST APIs | No — not a product with digital elements on that basis alone; may be an [RDPS](/en/overview/remote-data-processing) of another product, and falls under NIS2 |

::: warning THE SAME CODEBASE CAN FALL ON BOTH SIDES
A microservice **operated by BAUER GROUP** and accessed by customers over the network is not itself a product with digital elements. The **same** microservice shipped to a customer as a container image for the customer to run **is** one. The distinguishing factor is whether the software is supplied to the user and executes on the user's side. Product catalogue entries must record which of the two delivery models applies.
:::

### Firmware / Embedded

| Category | Platform | CRA-relevant |
|----------|----------|-------------|
| ESP32 Firmware | ESP-IDF, Arduino | Yes |
| STM32 Firmware | HAL, CMSIS | Yes |
| Zephyr RTOS | Zephyr OS | Yes |
| PlatformIO Builds | Cross-Platform | Yes |

### Infrastructure

| Category | Examples | CRA-relevant |
|----------|----------|-------------|
| Docker Compose stacks shipped to customers | Multi-container deployments | Yes (as part of the product) |
| CI/CD Pipelines | GitHub Actions Workflows | No (internal tooling — expressly excluded from RDPS) |

## 1.1.4 When Is a Product Placed on the Market?

*Making available on the market* is the supply of a product for distribution or use on the Union market in the course of a commercial activity, whether for payment or free of charge (Art. 3(22)). A product is **placed on the market** the first time it is made available (Art. 3(21)). Both concepts refer to **each individual product**, not to a product type.

For hardware, the established Blue Guide criteria apply. For **standalone software**, the guidance sets out a rule that materially affects release management:

::: info THE COPIES RULE
A standalone software product is placed on the market when its **manufacturing phase is complete** and it is **first supplied for distribution or use** on the EU market in the course of a commercial activity.

The manufacturer is considered to have placed **all copies of that version on the market at that same moment**, regardless of when each individual copy is later downloaded or transferred to a user. Unlike physical goods, each act of making software available creates a new identical copy — there is no production or stock limitation.
:::

| Scenario | Date of placing on the market |
|----------|-------------------------------|
| Version 1.0.0 first offered on 1 January 2028; customer 1 buys on 1 January, customer 2 on 15 January | **Both copies: 1 January 2028** |
| Version 1.0.1 issued 15 January 2028 (not a substantial modification); customer 2 buys 1.0.1 on 30 January | **Both 1.0.0 and 1.0.1: 1 January 2028** |
| A later iteration qualifies as a [substantial modification](/en/overview/substantial-modifications) | **New placing on the market** on the date the modified version is made available |

Two boundaries on this rule:

- **Variants are not copies.** Where a manufacturer offers variants that differ in their included components, configurations or enabled functionalities — builds for different operating systems, bundles with differing feature sets — those variants are **distinct products with digital elements**, each with its own placing on the market.
- **It applies to standalone software only.** Where software is combined with hardware, the combination rule in 1.1.2 applies instead.

::: tip HISTORICAL VERSION ARCHIVES
Art. 13(11) CRA permits manufacturers to maintain public software archives giving users access to historical versions. Where they do, users must be **clearly and accessibly informed of the risks of using unsupported software**.
:::

## 1.1.5 Products Designed Before the CRA Applies

A common concern is whether a long-lived product designed years before 11.12.2027 must be redesigned in order to be sold after that date. It does not — but a documented risk assessment is mandatory.

| Obligation | Applies? |
|------------|:--------:|
| Redesign the product | **No**, where the risk assessment shows existing measures are appropriate and effective |
| Introduce new security features | **No**, where not necessary to address identified risks |
| Carry out a cybersecurity risk assessment (Art. 13(2)) | **Yes** — determining which Annex I Part I requirements apply and how they are implemented |
| Carry out the conformity assessment, draw up the EU DoC, affix CE marking | **Yes**, before placing on the market — independent of whether any design change resulted |
| Recreate historical design or test documentation | **No** — it would not contribute to the product's security |
| Provide test results covering the original design and development phases | **No**, where the risk assessment shows existing measures address the risks |
| Demonstrate compliance with Annex I Part II vulnerability handling | **Yes** |
| Keep the risk assessment updated (Art. 13(3)) and provide user information (Art. 13(18)) | **Yes** |

::: info WHERE THE ORIGINAL RISK ASSESSMENT CANNOT BE SHOWN
Where it is not possible to demonstrate how a risk assessment was taken into account during the original design and development phase, Art. 13(2) is to be read as requiring the manufacturer to perform a **current** cybersecurity risk assessment and to demonstrate on that basis that the product incorporates adequate security measures — minimising cybersecurity risks, preventing incidents and minimising their impact, including for the health and safety of users.
:::

Where several variants share the same design and cybersecurity risk profile, the manufacturer may rely on **representative evidence covering the product family** rather than testing every variant → see [3.4 Risk Assessment](/en/vulnerability-management/risk-assessment).

## 1.1.6 The Data Connection Boundary

The scope of the CRA is anchored not in the presence of electronics, but in the **capacity to exchange digital information**.

| Situation | Data connection? |
|-----------|:----------------:|
| A sender deliberately generates digital symbols according to a defined scheme, and a receiver can interpret them as data | **Yes** |
| An output is simply switched on and off, where the states are not intended to represent data and are not read by a digital input | **No** |
| Electrical or electronic signals used solely to trigger or power a function, conveying no digitally encoded information | **No** — the product falls outside Art. 2(1) |

## 1.1.7 Complex Systems and Interoperability Constraints

A system composed of multiple hardware and software elements that operate together and is placed on the market as a **single** product is a product with digital elements. Long development cycles, contracts predating the CRA, legacy components and mandated interoperability standards do **not** take such systems out of scope. They do, however, engage the CRA's risk-based approach (Art. 13(3)) and recital 55, which recognises that certain essential requirements may not be fully compatible with the nature of a given product.

Where a specific essential requirement is not applicable, or cannot be met through state-of-the-art measures because the intended purpose requires interaction with existing dependencies or compliance with interoperability requirements, the manufacturer must:

1. **Identify and document** the specific constraint;
2. **Assess** the associated cybersecurity risks;
3. **Implement alternative or compensatory risk-mitigation measures**, so that the product's security is not undermined;
4. **Describe** the constraint, the risks and the mitigations transparently in the [technical documentation](/en/technical-documentation/) (Art. 31) and in the [user information](/en/conformity/annex-ii-user-info) (Annex II);
5. **Periodically reassess** whether the constraint still exists, and update the product to move towards an appropriate level of cybersecurity where it can be lifted or reduced.

> **Example:** A product must interoperate with existing systems that only support an older, less secure protocol. It may implement that protocol where necessary for interoperability, provided the risks are identified and mitigated by other means. Where the product can technically support **both**, the manufacturer is expected to implement the secure protocol and **enable it by default**, allowing the less secure protocol only where interoperability requires it.

::: tip NOT LIMITED TO COMPLEX SYSTEMS
This reasoning applies, as appropriate, to **all** products with digital elements in scope of the CRA — not only to systems that are complex.
:::

## 1.1.8 Exemptions (Art. 2(2), Art. 2(6) CRA)

The following are not subject to the CRA:

| Exemption | Detail |
|-----------|--------|
| **Free and open-source software not supplied in the course of a commercial activity** | Detailed monetisation tests in [1.7 Open-Source Steward](/en/overview/open-source-steward) |
| **Software executing remotely and merely accessed by the user** | Web applications and websites — unless they qualify as [remote data processing](/en/overview/remote-data-processing) of a product. Covered instead by NIS2 |
| **Spare parts** (Art. 2(6)) | Parts intended to replace identical components, manufactured to the same specifications, and supplied specifically to repair or extend the durability of a product already placed on the market → [1.8 Substantial Modifications](/en/overview/substantial-modifications) |
| **Vehicles and their exclusive components** | Regulation (EU) 2019/2144 and, via Delegated Regulation (EU) 2025/1535, Regulation (EU) No 168/2013 → [Sectoral Law & Existing Certificates](/en/clarifications/sectoral-law-and-certificates) |
| **Other sector-specific EU legislation** | E.g. medical devices, civil aviation |
| **Unfinished software under Art. 4(3)** | Alpha, beta and release-candidate versions, made available only for the time necessary to test and gather feedback |

## 1.1.9 Transitional Provision / Grandfathering (Art. 69)

Products with digital elements placed on the market **before 11.12.2027** are subject to the requirements of the CRA only if, from that date, they undergo a **substantial modification**. Existing products are therefore grandfathered and only fall within the scope of application through a substantial modification on or after 11.12.2027.

> **Example:** A firmware released in 2026 remains outside the CRA scope – until a 2028 update replaces the authentication mechanism and thus constitutes a substantial modification.

::: danger THE REPORTING OBLIGATION IS NOT GRANDFATHERED
Art. 14 reporting applies from **11.09.2026 to all products in scope of the CRA, including products placed on the market before 11.12.2027**, and continues even after a product's support period has ended. Grandfathering exempts such products from the Annex I Part II vulnerability handling obligations — **not** from reporting. See [4.3 ENISA Reporting Process](/en/incident-response/enisa-reporting).
:::

What qualifies as a substantial modification is described under [Substantial Modifications](/en/overview/substantial-modifications).

## 1.1.10 Product Catalogue

::: warning ACTION REQUIRED
For each CRA-relevant product, an individual classification and documentation must be carried out. Use the template at [Product Description](/en/technical-documentation/product-description) as a basis.
:::

The product catalogue is maintained on a product-specific basis. Each product receives:

1. **Unique Identifier** (Product name + Version)
2. **Delivery model** (supplied to the user / operated by us) — decides whether it is a product with digital elements at all
3. **CRA Product Class** (Standard / Class I / Class II / Critical), derived from its [core functionality](/en/conformity/product-classification)
4. **RDPS determination** (does the product have a [remote data processing solution](/en/overview/remote-data-processing)?)
5. **Support Period** (expected use time; at least 5 years)
6. **Responsible Person** (Product Owner / Security Lead)
7. **SBOM Reference** (Link to current SBOM)
8. **Declaration of Conformity** (Link to EU DoC)
