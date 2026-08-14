# 1.15 Remote Data Processing (Art. 3(2))

## 1.15.1 Why This Matters

A product with digital elements is not only the code that runs on the user's device. Under Art. 3(1) CRA, it is *"a software or hardware product **and its remote data processing solutions**"*. Where a product has a **remote data processing solution (RDPS)**, that solution is part of the product and must be covered by the risk assessment, by the essential requirements of Annex I, by the technical documentation, by the conformity assessment, and by the reporting obligations of Art. 14.

Getting this boundary wrong is expensive in both directions: treating the entire cloud estate as part of the product creates a compliance burden the CRA never intended, while omitting a genuine RDPS leaves a gap in the conformity assessment.

::: info LEGAL BASIS
**Art. 3(1) CRA:** *"'product with digital elements' means a software or hardware product and its remote data processing solutions, including software or hardware components being placed on the market separately."*

**Art. 3(2) CRA:** *"'remote data processing' means data processing at a distance for which the software is designed and developed by the manufacturer, or under the responsibility of the manufacturer, and the absence of which would prevent the product with digital elements from performing one of its functions."*

**Recitals 11 and 12 CRA** set the outer limits: the CRA does not regulate the manufacturer's network and information systems as a whole, and cloud computing services as such fall under NIS2.
:::

::: warning SOFTWARE ONLY — NOT THE HARDWARE
RDPS covers only the **software elements** of data processing at a distance. The servers, hypervisors and physical infrastructure the processing runs on are **not** brought into the scope of the product by the RDPS definition.
:::

## 1.15.2 The Three-Element Test

Data processing at a distance qualifies as an RDPS only where **all three** elements are met. Elements 2 and 3 are the decisive, cumulative questions.

| # | Element | Test |
|---|---------|------|
| 1 | **At a distance** | Does the processing take place outside the user's own environment (or, for professional users, outside the organisation's operational environment)? |
| 2 | **Necessary for a function** | Would the absence of this processing prevent the product from performing **one of its functions**? |
| 3 | **Built by or for the manufacturer** | Was the software designed and developed by the manufacturer, or under its responsibility? |

### Element 1 — "At a distance"

There is no exhaustive definition; a case-by-case assessment is required. The following points are settled:

- Cloud computing, **including edge computing**, is the typical case. Processing may take place close to the device and still be "at a distance".
- Transmission may be wired or wireless — the transport medium is irrelevant.
- **On-premises is not a safe harbour.** Remote data processing running on the manufacturer's own local servers or private cloud is just as likely to qualify as a solution on a public cloud.

### Element 2 — Necessary for one of the product's functions

The word is **functions**, not *core functionality* and not *intended purpose*. The CRA imposes no such narrowing. Both categories count:

- functions that directly fulfil the intended purpose as experienced by the user, and
- functions that support the product's overall performance.

Typical functions where remote processing is decisive:

| Function | Example |
|----------|---------|
| Sending commands to a device | App switches a controller into another operating mode |
| Synchronising files | Device state mirrored across a user's installations |
| Onboarding the user | Initial registration and device pairing |
| Configuration / personalisation | Server-side profile applied to the device |
| Automated distribution of updates | Feature updates and security patching |
| Identity and access management | Token issuance, authorisation decisions |

::: tip A MANUAL FALLBACK DOES NOT REMOVE THE RDPS
Where a function can be performed both remotely and manually — switching a light bulb by app or by hand — the existence of the manual path does **not** exclude the remote path from qualifying as an RDPS. Performing the function remotely is itself one of the functions the product offers.
:::

By contrast, processing whose absence does **not** prevent any function is not an RDPS. The clearest case is **remote analysis of telemetry collected purely for statistics or future product development**. Such processing may still introduce risks that must be handled in the risk assessment — but it is not part of the product.

### Element 3 — Designed and developed by the manufacturer, or under its responsibility

*"Under the responsibility of the manufacturer"* means the software is **tailor-made**: built solely by or on behalf of the manufacturer, based on designs and specifications the manufacturer provided. Merely licensing an existing product or service that a provider also offers to its other customers — or a slightly modified version of it — does not meet this test.

::: warning WHO OPERATES IT IS NOT DECISIVE
The definition refers only to **design and development**, not operation. If a manufacturer designs and develops a solution that a third party then operates, the manufacturer remains responsible for CRA compliance of the product, including that RDPS.
:::

## 1.15.3 Decision Tree

```
Does the product rely on data processing at a distance?
│
├── No  → No RDPS. Nothing further under this section.
│
└── Yes ↓

Would its absence prevent the product from performing one of its functions?
│
├── No  → NOT an RDPS.
│         → Still assess any risks it introduces in the risk assessment
│           and mitigate them at product level.
│
└── Yes ↓

Was the software designed and developed by the manufacturer,
or under its responsibility (tailor-made)?
│
├── No  → NOT an RDPS.
│         → Treat the third-party solution like an integrated COMPONENT:
│           assess integration risks, mitigate at product level,
│           and exercise due diligence (Art. 13(5) logic).
│
└── Yes → REMOTE DATA PROCESSING SOLUTION (RDPS)
          → Part of the product with digital elements.
          → Include in risk assessment, essential requirements,
            technical documentation, conformity assessment and
            Art. 14 reporting.
```

## 1.15.4 What Is Explicitly Not an RDPS

The CRA does not extend to the manufacturer's IT estate. The following are outside the product, even though they belong to the manufacturer:

| Excluded | Rationale |
|----------|-----------|
| HR, payroll, CRM and comparable internal systems | Not software executing the product's data processing solution |
| CI/CD pipelines | Internal tooling, not part of the product |
| Distribution of security updates to edge locations | Infrastructure supporting delivery, not the product function itself |
| Penetration testing, threat hunting, red teaming systems | Auditing and testing activity — an Annex I Part II duty, but not an RDPS |
| Back-end systems the product does not interact with directly | Only the software modules responsible for the product's functionality, and the interfaces those modules use towards external services, are RDPS |
| Telemetry analysed purely for statistics or future development | Absence prevents no function |
| Websites that merely present information about the product | A website is an RDPS only where it enables or supports a product function |
| The cellular / Wi-Fi network, routers, ethernet cabling | Enablers of connectivity, not data processing whose absence blocks a function |

::: warning THE BOUNDARY RUNS AT THE FIRST INTERFACE
Where the product talks to an interface layer which in turn calls deeper back-end systems, only the **interface layer** is the RDPS. The systems behind it are **external dependencies** — outside the product, but firmly inside the risk assessment.
:::

### Special case: websites

A website is not itself a product with digital elements. It falls within the scope of the CRA only where it qualifies as an RDPS:

- Redirecting the user to an external page carrying information and instructions → **not** an RDPS.
- An authentication portal issuing the credentials or tokens the product needs in order to operate → **RDPS** (provided the other criteria are met).

## 1.15.5 Cloud Service Models

The three common service models produce different answers because they allocate design and development differently.

| Model | Who designs and develops the software? | RDPS? |
|-------|----------------------------------------|-------|
| **Third-party IaaS** | The manufacturer deploys and runs its own operating systems and applications on the provider's resources | **Yes** — the manufacturer's software may qualify (hypervisor and hardware do not) |
| **Third-party PaaS** | The manufacturer deploys its own application into the provider's execution environment | **Yes** — the application may qualify (the execution environment / OS does not) |
| **Third-party SaaS** | The provider supplies a fully developed application; the manufacturer only configures it | **No** — not designed or developed by or for the manufacturer |

Where an element does **not** qualify as an RDPS — the hypervisor under IaaS, the operating system under PaaS, the SaaS application itself — but is integrated into the product in a way that affects its security, it is treated **like a third-party component**:

1. Identify and assess the risks arising from its integration.
2. Address them by implementing the essential requirements **on the product itself**.
3. Exercise an obligation equivalent to the due diligence of Art. 13(5), proportionate to the risk the remote solution poses.
4. Where relevant, use the security functions the provider offers under its shared responsibility model.

## 1.15.6 Worked Use Cases

| Use case | Element in question | Verdict |
|----------|--------------------|---------|
| **Mobile banking app** — self-developed banking interface handling authentication and instruction submission | Necessary for a function ✅, built by the manufacturer ✅ | **RDPS** |
| Same app — account-management and ledger systems behind that interface | App does not interact with them directly | **Not RDPS** — external dependency; risks (e.g. manipulated transaction results) mitigated at product level |
| Same app — third-party SaaS support chat | Necessary for a function ✅, but not built by or for the manufacturer ❌ | **Not RDPS** — treat as component; isolate from core banking functions, control data flows, validate content |
| **Smart thermostat** — manufacturer's control and preference software running on third-party IaaS | Both ✅ | **RDPS**; the IaaS reliance is documented and the provider assessed |
| **e-Reader** — third-party SaaS book storage | Necessary ✅, built by manufacturer ❌ | **Not RDPS** — treat as component; secure authentication, encryption and integrity protection of the link |
| **Industrial robot** — manufacturer's vision/positioning service on third-party IaaS | Both ✅ | **RDPS** |
| **Smartphone** — the 5G cellular network | Network is a communication channel, not processing that enables a function | **Not RDPS** and **not a component** — no due diligence towards the network operator |

## 1.15.7 Documentation and Conformity Duties

Where a product has an RDPS or relies on third-party remote solutions:

| # | Duty | Detail |
|---|------|--------|
| 1 | **Declare it** | State in the [technical documentation](/en/technical-documentation/) that the product has an RDPS or relies on third-party remote solutions, and **describe those solutions** |
| 2 | **Declare it per product** | Where one RDPS serves several products, it must be declared in **each** product's technical documentation — the documentation itself may be reused between conformity assessments |
| 3 | **Cover it in the risk assessment** | The [risk assessment](/en/vulnerability-management/risk-assessment) covers (i) RDPS risks, (ii) risks from reliance on third-party remote solutions, and (iii) risks from the product environment |
| 4 | **Implement essential requirements on it** | Annex I Part I applies to the product *including* its RDPS |
| 5 | **Report on it** | Actively exploited vulnerabilities and severe incidents affecting the RDPS fall under [Art. 14 reporting](/en/incident-response/enisa-reporting) |
| 6 | **Contract for it** | Embed security guarantees in SLAs with third-party providers, including assurances on vulnerability handling |

### Reusable assurance artefacts for third-party remote services

The following evidence can be reused in support of the conformity assessment and due diligence, in addition to the manufacturer's own assessment:

| Artefact | Basis |
|----------|-------|
| Evidence of fulfilment of NIS2 implementing obligations | Commission Implementing Regulation (EU) 2024/2690 |
| Evidence of fulfilment of DORA obligations | Regulation (EU) 2022/2554 |
| Statement of conformity or certificate under a European cybersecurity certification scheme | Regulation (EU) 2019/881 (Cybersecurity Act) |
| Evidence of conformity with ISO/IEC 27017:2015 or ISO/IEC 27001:2022 | International standards |

## 1.15.8 Changes by the Provider Are Not a Substantial Modification

::: tip PROVIDER CHANGES ≠ SUBSTANTIAL MODIFICATION
A major change in a solution supplied by a **third-party remote service provider** does **not** qualify as a [substantial modification](/en/overview/substantial-modifications) of the product, because those elements are not under the manufacturer's responsibility.

It does, however, trigger a duty of vigilance: as part of due diligence, manufacturers should ensure providers keep them adequately informed about changes, and must then revise the risk assessment — asking whether the provider still offers sufficient cybersecurity guarantees and whether the product-level controls remain adequate. If not, the controls must be changed, or the provider replaced.
:::

## 1.15.9 Process at BAUER GROUP

| Step | Action | Responsible |
|------|--------|-------------|
| 1 | For each product, list every instance of data processing at a distance it relies on | Product Owner |
| 2 | Apply the three-element test to each and record the verdict | Security Lead |
| 3 | For each RDPS: add to the product boundary in the technical documentation | Product Owner |
| 4 | For each non-RDPS third-party remote solution: add to the third-party component register ([5.3 Third-Party Assessment](/en/supply-chain/third-party-assessment)) | Security Lead |
| 5 | Obtain and archive the provider's assurance artefacts | Security Lead |
| 6 | Re-run the assessment whenever the provider announces a material change | Product Owner |

::: warning ACTION REQUIRED
The RDPS determination must be recorded **per product** and dated, including the negative results. Where a market surveillance authority asks why a cloud back-end was left outside the product boundary, the documented three-element test is the answer.
:::

## 1.15.10 Related Chapters

- [1.1 Scope](/en/overview/scope) — which products fall under the CRA at all
- [5.3 Third-Party Assessment](/en/supply-chain/third-party-assessment) — due diligence on integrated components and services
- [3.4 Risk Assessment](/en/vulnerability-management/risk-assessment) — treating risks that originate outside the product
- [1.14 NIS2 Integration](/en/overview/nis2-integration) — cloud services as NIS2 subjects
- [Commission Guidance on the CRA](/en/clarifications/commission-guidance) — source and legal status of this interpretation
