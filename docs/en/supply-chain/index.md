# Chapter 6: Supply Chain Security

## 6.1 Overview

Securing the software supply chain is a core CRA requirement. Manufacturers must exercise due diligence when integrating third-party components and ensure the integrity of the entire supply chain.

::: info LEGAL BASIS
**Art. 10(4) CRA:** *"The manufacturer shall exercise due diligence when integrating components sourced from third parties, to ensure that those components do not compromise the security of the product."*

**Annex I, Part II, No. 1:** *"The manufacturer shall identify and document the vulnerabilities and components contained in the product, including by drawing up a software bill of materials."*
:::

## 6.2 Security Measures

### Implemented Measures

| Measure | Tool | Workflow | Status |
|---------|------|----------|--------|
| Dependency Vulnerability Scanning | Trivy, Grype, Snyk | `modules-security-scan.yml` | ✅ |
| Automated Dependency Updates | Dependabot | `docker-maintenance-dependabot.yml` | ✅ |
| License Compliance | FOSSA / Custom | `modules-license-compliance.yml` | ✅ |
| Secret Scanning | Gitleaks, GitGuardian | `modules-security-scan.yml` | ✅ |
| Docker Base Image Monitoring | Custom Workflow | `modules-docker-base-image-monitor.yml` | ✅ |
| Container Image Signing | Cosign | `docker-build.yml` | ✅ |
| SBOM Generation | Trivy / Syft | `modules-license-compliance.yml` | ✅ |

## 6.3 Chapter Structure

| Section | Topic | Description |
|---------|-------|-------------|
| **6.1** | [Dependency Policy](/en/supply-chain/dependency-policy) | Policies for dependencies |
| **6.2** | [Base Image Policy](/en/supply-chain/base-image-policy) | Docker base image management |
| **6.3** | [Third-Party Assessment](/en/supply-chain/third-party-assessment) | Assessment of third-party components |
| **6.4** | [Economic Operator Identification (Art. 21)](/en/supply-chain/economic-operator-identification) | Supply chain traceability |
