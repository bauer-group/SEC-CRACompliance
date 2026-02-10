# A.6 Risk Assessment

## A.6.1 Template: Cybersecurity Risk Assessment pursuant to Art. 10(2) CRA

---

### 1. Product Identification

| Field | Value |
|-------|-------|
| **Product Name** | [Name] |
| **Version** | [Version] |
| **CRA Category** | [Standard / Class I / Class II / Critical] |
| **Assessment Date** | [YYYY-MM-DD] |
| **Assessor** | [Name, Role] |
| **Next Review** | [YYYY-MM-DD] |

### 2. Product Description

**Purpose:** [Brief description]

**Technology Stack:** [Listing]

**Data Processing:**

- [ ] Personal data
- [ ] Business-critical data
- [ ] Authentication data
- [ ] No sensitive data

**Network Connectivity:**

- [ ] Internet-facing
- [ ] Internal network
- [ ] Isolated
- [ ] IoT/OT network

### 3. Threat Analysis

| Threat | Likelihood | Impact | Risk |
|--------|:----------:|:------:|:----:|
| Unauthorised network access | [H/M/L] | [C/S/Mo/Mi] | [C/H/M/L] |
| Injection attacks (SQL, XSS, etc.) | [H/M/L] | [C/S/Mo/Mi] | [C/H/M/L] |
| Dependency vulnerability (CVE) | [H/M/L] | [C/S/Mo/Mi] | [C/H/M/L] |
| Supply chain attack | [H/M/L] | [C/S/Mo/Mi] | [C/H/M/L] |
| Denial of Service | [H/M/L] | [C/S/Mo/Mi] | [C/H/M/L] |
| Data exfiltration | [H/M/L] | [C/S/Mo/Mi] | [C/H/M/L] |
| Firmware manipulation | [H/M/L] | [C/S/Mo/Mi] | [C/H/M/L] |
| Physical access | [H/M/L] | [C/S/Mo/Mi] | [C/H/M/L] |
| Insider threat | [H/M/L] | [C/S/Mo/Mi] | [C/H/M/L] |

*H=High, M=Medium, L=Low, C=Critical, S=Significant, Mo=Moderate, Mi=Minor*

### 4. Security Measures

| Risk | Measure | Implementation Status |
|------|---------|:---------------------:|
| Unauthorised access | [e.g. OAuth2, mTLS] | [Implemented/In Progress/Not Started] |
| Injection | [e.g. Input Validation, Prepared Statements] | [Implemented/In Progress/Not Started] |
| CVE in dependencies | [Trivy Scan, Dependabot, CVE Monitor] | Implemented |
| Supply chain | [License Compliance, SBOM, Base Image Monitor] | Implemented |
| DoS | [e.g. Rate Limiting, Resource Limits] | [Implemented/In Progress/Not Started] |
| Data exfiltration | [e.g. Encryption, Access Control] | [Implemented/In Progress/Not Started] |
| Firmware manipulation | [Cosign, Secure Boot, Anti-Rollback] | [Implemented/In Progress/Not Started] |

### 5. Residual Risks

| Residual Risk | Assessment | Acceptance Decision |
|---------------|------------|---------------------|
| [Description] | [Low/Medium] | [Accepted / Further measures planned] |

### 6. Annex I Conformity Check

| No. | Annex I Part I Requirement | Compliant | Evidence |
|:---:|----------------------------|:---------:|---------|
| | Appropriate level of cybersecurity based on risks | [Yes/No] | [Reference] |
| (a) | No known exploitable vulnerabilities at delivery | [Yes/No] | [Trivy Report date] |
| (b) | Secure by default configuration with reset capability | [Yes/No] | [Reference] |
| (c) | Security updates deliverable automatically (with opt-out) | [Yes/No] | [Reference] |
| (d) | Protection from unauthorised access (control mechanisms) | [Yes/No] | [Reference] |
| (e) | Protection of confidentiality (encryption at rest / in transit) | [Yes/No] | [Reference] |
| (f) | Protection of integrity against unauthorised manipulation | [Yes/No] | [Reference] |
| (g) | Data minimisation | [Yes/No] | [Reference] |
| (h) | Protection of availability (resilience, DoS mitigation) | [Yes/No] | [Reference] |
| (i) | Minimise negative impact on availability of other services/devices | [Yes/No] | [Reference] |
| (j) | Minimal attack surface including external interfaces | [Yes/No] | [Reference] |
| (k) | Exploitation mitigation (compartmentalisation, least privilege) | [Yes/No] | [Reference] |
| (l) | Logging and monitoring of relevant activities (with opt-out) | [Yes/No] | [Reference] |
| (m) | Secure and permanent deletion of data and settings | [Yes/No] | [Reference] |

### 7. Result

**Overall Risk Assessment:** [Low / Medium / High / Critical]

**Recommendation:**

- [ ] Product may be released in its current form
- [ ] Release upon implementation of the identified measures
- [ ] Further analysis required

### 8. Signature

| Field | Value |
|-------|-------|
| **Assessor** | [Name] |
| **Date** | [YYYY-MM-DD] |
| **Approved by** | [Name, Role] |
| **Approval Date** | [YYYY-MM-DD] |
