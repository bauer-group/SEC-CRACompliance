# 5.3 Third-Party Assessment

## 5.3.1 Assessment of Third-Party Components

Pursuant to Art. 10(4) CRA, the manufacturer must exercise due diligence when integrating third-party components. This page describes the assessment process.

## 5.3.2 Assessment Framework

### Automated Checks (for every dependency)

These checks are performed automatically in the CI/CD pipeline:

| Check | Tool | Blocks Build |
|-------|------|:---:|
| Known CVEs (CRITICAL) | Trivy / Grype | ✅ |
| Known CVEs (HIGH) | Trivy / Grype | ✅ |
| Prohibited Licenses | License Compliance | ✅ |
| Exposed Secrets | Gitleaks / GitGuardian | ✅ |

### Manual Review (for new critical dependencies)

When introducing new dependencies in security-critical areas, an additional manual assessment is conducted:

| Criterion | Assessment | Weight |
|-----------|-----------|--------|
| **Maintainer Reputation** | Verified account, known organisation | High |
| **Project Activity** | Regular commits, active issue resolution | High |
| **Security Response** | Response time to reported vulnerabilities | High |
| **Code Quality** | Tests, CI/CD, code reviews | Medium |
| **Dependency Depth** | Transitive dependencies (fewer = better) | Medium |
| **Alternatives** | Are there more secure alternatives? | Medium |
| **Adoption** | Download numbers, user base | Low |

### Rating Scale

| Rating | Meaning | Action |
|--------|---------|--------|
| **A – Trustworthy** | All criteria met, actively maintained | Approved for use |
| **B – Acceptable** | Minor limitations, overall trustworthy | Use with monitoring |
| **C – At Risk** | Significant limitations | Use only with justification + review |
| **D – Not Acceptable** | Critical limitations | Use prohibited |

## 5.3.3 Special Case: Vendor SDKs (Embedded)

For firmware projects, vendor SDKs (ESP-IDF, STM32 HAL, Zephyr) are assessed separately:

| SDK | Rating | Rationale |
|-----|--------|-----------|
| ESP-IDF (Espressif) | A | Official SDK, actively maintained, SBOM available |
| STM32 HAL (STMicroelectronics) | A | Official SDK, industry-grade |
| Zephyr RTOS | A | Linux Foundation project, Security WG active |
| PlatformIO | B | Community project, widely adopted |

## 5.3.4 Continuous Monitoring

All integrated third-party components are continuously monitored after integration:

1. **Dependabot** – Weekly checks for new versions and CVEs
2. **CVE Monitor** – Daily SBOM scan against current CVE databases
3. **License Compliance** – On every build
4. **Base Image Monitor** – Weekly checks for new base image versions

## 5.3.5 Documentation

For the technical documentation (Annex VII CRA), a list of all third-party components is maintained:

- The **SBOM** serves as the machine-readable inventory
- Manual assessments are stored in the product documentation folder
- License compliance reports are archived as build artefacts
