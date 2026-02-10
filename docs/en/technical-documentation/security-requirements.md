# Essential Security Requirements (Annex I Part I)

## Overview

Annex I Part I of the CRA defines 13 essential cybersecurity requirements that every product with digital elements must fulfill. This page provides detailed implementation guidance for each individual requirement.

::: info LEGAL BASIS
**Annex I Part I CRA:** Essential cybersecurity requirements. Products with digital elements shall be designed, developed and produced in such a way that they ensure an appropriate level of cybersecurity, taking into account the risks.
:::

## No. 1 – Appropriate Level of Cybersecurity

**Requirement:** Products shall be designed, developed and produced in such a way that they ensure an appropriate level of cybersecurity, based on the risks.

**Implementation at BAUER GROUP:**

- Security by Design: Security requirements from the design phase onward
- Threat Modeling before every architectural decision
- Risk Assessment ([Template](/en/templates/risk-assessment)) for each product
- Multi-Layer Security (Defense in Depth)

**Evidence:** Risk Assessment, Security Architecture Document, Test Results

---

## No. 2 – No Known Exploitable Vulnerabilities

**Requirement:** Products shall be delivered without known exploitable vulnerabilities.

**Implementation at BAUER GROUP:**

- Automated [CVE Monitoring](/en/vulnerability-management/cve-monitoring) (daily)
- Multi-Engine Security Scanning (Trivy, Grype, Snyk)
- Dependabot for automatic dependency updates
- Pre-Release Security Gate: No release with known Critical/High CVEs

**Evidence:** CVE scan reports, dependency audit logs, release gate results

---

## No. 3 – Protection of Confidentiality, Integrity and Availability

### No. 3.1 – Confidentiality Protection

**Requirement:** Protection of the confidentiality of stored, transmitted or otherwise processed data.

**Implementation:**

- **Data in Transit:** TLS 1.2+ for all network connections, mTLS for service-to-service
- **Data at Rest:** AES-256 encryption for sensitive data
- **Key Management:** Hardware-backed (HSM/KMS) or Vault
- **Access Control:** Principle of Least Privilege, RBAC/ABAC

**Evidence:** Cryptography inventory, encryption configuration, access control lists

### No. 3.2 – Integrity Protection

**Requirement:** Protection of the integrity of stored, transmitted or otherwise processed data, commands, programs and configurations.

**Implementation:**

- **Artifact Signing:** Cosign for containers and binaries ([Signing](/en/sbom-signing/signing))
- **SBOM Integrity:** Signed SBOMs per release
- **Code Integrity:** Signed Git commits, protected branches
- **Data Integrity:** Checksums, digital signatures
- **Configuration Integrity:** Infrastructure as Code, GitOps

**Evidence:** Signature logs, checksum verification, Git audit trail

### No. 3.3 – Availability Protection

**Requirement:** Protection of the availability of essential functions, including under attack (e.g., DDoS).

**Implementation:**

- Redundant systems and failover
- Rate Limiting and DDoS protection
- Graceful Degradation under resource scarcity
- Backup and recovery procedures
- Monitoring and Alerting

**Evidence:** Architecture diagrams, DR plans, load test results

---

## No. 4 – Secure Default Configuration

**Requirement:** Products shall be delivered with a secure default configuration, including the ability to reset the product to its original state.

**Implementation:**

- **Security-by-Default:** All unnecessary services disabled
- **No Default Passwords:** Setup wizard enforces individual credentials
- **Restrictive Defaults:** Firewall rules, permissions, ports
- **Factory Reset:** Ability to reset to secure default configuration
- **Documentation:** Secure configuration described in user documentation

**Evidence:** Default configuration files, setup process documentation

---

## No. 5 – Protection Against Unauthorized Access

**Requirement:** Protection against unauthorized access through appropriate control mechanisms (authentication, identity management, access control).

**Implementation:**

- **Authentication:** Multi-Factor Authentication (MFA) where possible
- **Authorization:** RBAC with Principle of Least Privilege
- **Session Management:** Secure tokens, timeout, invalidation
- **API Security:** API keys, OAuth 2.0, Rate Limiting
- **Brute-Force Protection:** Account lockout, CAPTCHA

**Evidence:** Authentication architecture, permissions matrix, penetration test reports

---

## No. 6 – Minimal Attack Surface

**Requirement:** Minimization of the attack surface, including external interfaces.

**Implementation:**

- **Minimal Containers:** Alpine/Distroless base images
- **Minimal Services:** Only required ports and services
- **Minimal Dependencies:** Regular cleanup ([Dependency Policy](/en/supply-chain/dependency-policy))
- **Minimal Permissions:** Non-root containers, restricted capabilities
- **Network Segmentation:** Zero-Trust architecture

**Evidence:** Container scan reports, port inventory, dependency audit

---

## No. 7 – Confidentiality of Stored Data

**Requirement:** Protection of the confidentiality of stored, transmitted or otherwise processed data, including personal data.

**Implementation:**

- Encryption of all persistent databases (AES-256)
- Encrypted backups
- Secure key rotation
- Data classification (public, internal, confidential, strictly confidential)
- Deletion mechanisms for data no longer needed

**Evidence:** Encryption inventory, key rotation log, data classification schema

---

## No. 8 – Integrity of Stored Data

**Requirement:** Protection of the integrity of stored data and commands against manipulation.

**Implementation:**

- Integrity checksums for critical data
- Write-Once-Read-Many (WORM) for audit logs
- Digital signatures for configuration data
- Database integrity checks
- Tamper detection mechanisms

**Evidence:** Integrity check logs, audit log configuration

---

## No. 9 – Data Minimization

**Requirement:** Processing only the data (personal or otherwise) that is necessary for the intended use of the product.

**Implementation:**

- Privacy by Design: Collect only necessary data
- Data minimization policy per product
- Automatic deletion after retention period expiry
- No tracking/telemetry without explicit consent
- Pseudonymization where possible

**Evidence:** Data catalog per product, data flow diagrams, deletion concept

---

## No. 10 – Availability of Essential Functions

**Requirement:** Essential functions of the product must remain available even in the event of failure of individual components.

**Implementation:**

- Identification of essential functions per product
- Failover mechanisms for critical components
- Offline capability where appropriate
- Graceful Degradation instead of complete failure
- Recovery procedures documented

**Evidence:** Criticality analysis, failover tests, Recovery Time Objectives

---

## No. 11 – Minimization of Negative Impact

**Requirement:** Minimization of negative impact on the availability of other devices and networks in the event of a security incident.

**Implementation:**

- Network isolation (segmentation, VLANs)
- Resource limits (CPU, memory, bandwidth limits)
- Circuit Breaker Pattern for microservices
- Automatic quarantine on anomalies
- Incident Containment Procedures ([Playbook](/en/incident-response/playbook))

**Evidence:** Network segmentation plan, resource limits, containment procedures

---

## No. 12 – Security-Relevant Information

**Requirement:** Collection and provision of security-relevant information, including logging and monitoring.

**Implementation:**

- Centralized logging (security events, authentication, authorization)
- Audit trail for security-relevant actions
- Monitoring and Alerting (SIEM integration)
- Log retention: At least 12 months
- Tamper protection for logs

**Evidence:** Logging configuration, SIEM dashboards, log retention policy

---

## No. 13 – Secure Update Capability

**Requirement:** Ability to securely update the product, including automatic notification of available updates.

**Implementation:**

- Automatic update notification
- Signed updates ([Cosign](/en/sbom-signing/signing))
- Rollback capability for failed updates
- Separate delivery of security updates (without functional changes)
- OTA (Over-the-Air) for IoT/firmware ([Update Mechanism](/en/technical-documentation/update-mechanism))

**Evidence:** Update architecture, signature verification, rollback tests

---

## Compliance Matrix

| No. | Requirement | Implementation Status | Evidence Location |
|-----|-------------|:---:|-------------|
| 1 | Appropriate level of cybersecurity | ✅ | Risk Assessment, Architecture |
| 2 | No known vulnerabilities | ✅ | CVE Monitor, Scan Reports |
| 3.1 | Confidentiality protection | ✅ | Cryptography Inventory |
| 3.2 | Integrity protection | ✅ | Signature Logs |
| 3.3 | Availability protection | ⚠️ | Product-specific |
| 4 | Secure Default Configuration | ✅ | Default Configuration |
| 5 | Protection against unauthorized access | ✅ | Auth Architecture |
| 6 | Minimal Attack Surface | ✅ | Container Scans |
| 7 | Confidentiality of stored data | ✅ | Encryption Inventory |
| 8 | Integrity of stored data | ✅ | Integrity Logs |
| 9 | Data Minimization | ✅ | Data Catalog |
| 10 | Availability of essential functions | ⚠️ | Product-specific |
| 11 | Minimization of negative impact | ✅ | Segmentation Plan |
| 12 | Security-relevant information | ✅ | Logging Configuration |
| 13 | Secure update capability | ✅ | Update Architecture |
