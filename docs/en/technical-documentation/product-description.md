# 6.1 Product Description

## 6.1.1 Template: Product Description pursuant to Annex VII CRA

::: tip USAGE
This template is completed individually for each CRA-relevant product. Copy this template and create a product-specific version.
:::

---

### 1. Product Identification

| Field | Value |
|-------|-------|
| **Product Name** | [Name of the product] |
| **Product Type** | [Software / Firmware / Container Image / Embedded System] |
| **Current Version** | [Version number] |
| **Manufacturer** | BAUER GROUP |
| **Contact** | <disclosure@cra.docs.bauer-group.com> |
| **Created on** | [Date] |
| **Last Updated** | [Date] |

### 2. Intended Use

**Description:**
[Describe the intended purpose of the product, the target audience, and the intended operating environment.]

**Usage Environment:**

- [e.g. Cloud infrastructure, on-premise, embedded device, IoT]
- [Operating system / Platform]
- [Network connection required: Yes / No]

### 3. CRA Product Classification

| Criterion | Assessment |
|-----------|------------|
| **CRA Category** | [Default / Class I / Class II / Critical] |
| **Justification** | [Why this classification] |
| **Annex III/IV Reference** | [If applicable] |
| **Conformity Assessment** | [Module A / Module B+C / Module H / EUCC] |

### 4. Technical Description

**Architecture Overview:**
[Describe the software architecture at a high level]

**Technology Stack:**

| Component | Technology | Version |
|-----------|------------|---------|
| Runtime | [e.g. Node.js 20, .NET 8, Python 3.12] | [Version] |
| Framework | [e.g. Express, ASP.NET, Django] | [Version] |
| Database | [e.g. PostgreSQL, SQLite] | [Version] |
| Container | [e.g. Alpine 3.19, Distroless] | [Version] |

**Interfaces:**

| Interface | Type | Description |
|-----------|------|-------------|
| [e.g. REST API] | [HTTP/HTTPS] | [Purpose] |
| [e.g. MQTT] | [TCP] | [Purpose] |
| [e.g. USB] | [Physical] | [Purpose] |

### 5. Security Features

| Feature | Implementation | Status |
|---------|----------------|--------|
| Authentication | [Method] | [Implemented / Planned] |
| Authorisation | [Method] | [Implemented / Planned] |
| Encryption (Transport) | [TLS 1.3] | [Implemented / Planned] |
| Encryption (Data) | [AES-256] | [Implemented / Planned] |
| Secure Boot | [Method] | [Implemented / N/A] |
| Integrity Protection | [Cosign / Checksums] | [Implemented / Planned] |

### 6. Dependencies

**SBOM Reference:** [Link to the current SBOM]

**Critical Third-Party Components:**

| Component | Version | Licence | Assessment |
|-----------|---------|---------|------------|
| [Name] | [Version] | [Licence] | [A/B/C] |

### 7. Support Period

| Field | Value |
|-------|-------|
| **Support Start** | [Date of placing on the market] |
| **Support End** | [Date — at least 5 years] |
| **Update Frequency** | [e.g. monthly, as needed] |
| **EOL Notification** | [How users will be notified] |

### 8. Conformity

| Document | Status | Link |
|----------|--------|------|
| Risk Assessment | [Completed / In progress] | [Link] |
| EU Declaration of Conformity | [Signed / In progress] | [Link] |
| SBOM | [Generated] | [Link] |
| Security Testing | [Performed / Planned] | [Link] |
