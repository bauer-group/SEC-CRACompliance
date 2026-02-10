# 1.1 Scope

## 1.1.1 Scope of Application

Pursuant to Art. 2 CRA, this regulation applies to products with digital elements that are made available on the EU market and whose intended or reasonably foreseeable use includes a direct or indirect data connection.

## 1.1.2 Affected Product Categories

### Software Products

| Category | Examples | CRA-relevant |
|----------|----------|-------------|
| Web Applications | APIs, Frontends, Microservices | Yes |
| Container Images | Docker-based services | Yes |
| Desktop Applications | .NET WPF/WinForms, MAUI | Yes |
| NPM Packages | Publicly published libraries | Yes |
| NuGet Packages | .NET Libraries | Yes |

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
| Docker Compose Stacks | Multi-container deployments | Yes (as part of the product) |
| CI/CD Pipelines | GitHub Actions Workflows | No (internal tooling) |

## 1.1.3 Exemptions (Art. 2(2) CRA)

The following are not subject to the CRA:

- Open-source software that is not made available in the course of a commercial activity
- SaaS services (fall under NIS2, not CRA) – unless remote data processing is an integral part of the product
- Products subject to sector-specific EU legislation (e.g. medical devices, motor vehicles, aviation)

## 1.1.4 Product Catalogue

::: warning ACTION REQUIRED
For each CRA-relevant product, an individual classification and documentation must be carried out. Use the template at [Product Description](/en/technical-documentation/product-description) as a basis.
:::

The product catalogue is maintained on a product-specific basis. Each product receives:

1. **Unique Identifier** (Product name + Version)
2. **CRA Product Class** (Standard / Class I / Class II / Critical)
3. **Support Period** (at least 5 years or expected lifetime)
4. **Responsible Person** (Product Owner / Security Lead)
5. **SBOM Reference** (Link to current SBOM)
6. **Declaration of Conformity** (Link to EU DoC)
