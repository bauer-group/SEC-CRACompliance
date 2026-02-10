# 5.4 Economic Operator Identification (Art. 21)

## 5.4.1 Overview

Art. 21 CRA requires all economic operators to be able to identify their suppliers and customers within the supply chain. This information must be provided to market surveillance authorities upon request. The objective is to ensure complete traceability of products with digital elements across the entire supply chain.

::: info LEGAL BASIS
**Art. 21 CRA:** *"Economic operators shall, on request, identify the following to the market surveillance authorities:*

- *any economic operator who has supplied them with a product;*
- *any economic operator to whom they have supplied a product.*

*Economic operators shall be able to present this information for a period of **10 years** after they have been supplied with the product and for 10 years after they have supplied the product."*
:::

## 5.4.2 Affected Economic Operators

The identification obligation applies to all roles in the supply chain:

| Economic Operator | Identification Obligation | Reference |
|-------------------|--------------------------|-----------|
| Manufacturer | Customers (importers, distributors) | Art. 10, Art. 21 |
| Importer | Manufacturer (supplier) + distributors (customers) | Art. 15, Art. 21 |
| Distributor | Importer/manufacturer (supplier) + customers | Art. 17, Art. 21 |
| Authorised Representative | Manufacturer (principal) + customers | Art. 16, Art. 21 |

## 5.4.3 Documentation Requirements

### Minimum Record Contents

The following data must be maintained for each CRA-relevant transaction:

- **Identity** of the supplier or customer (company name, address, contact details)
- **Product designation** (type, version, serial number or unique identifier)
- **Date** of supply or receipt
- **Quantity** and type of products supplied

### Retention Period

::: warning RETENTION OBLIGATION
All identification records must be retained for at least **10 years** from the date of supply and must be available to market surveillance authorities upon request.
:::

## 5.4.4 BAUER GROUP Implementation

### Incoming Supply (Suppliers)

| Measure | System | Status |
|---------|--------|--------|
| Supplier master data | ERP / Procurement system | ✅ |
| Goods receipt recording with product allocation | ERP | ✅ |
| Archival of procurement documents | DMS | ✅ |
| Retention period ≥ 10 years configured | DMS / ERP | ⚠️ To be verified |

### Outgoing Supply (Customers)

| Measure | System | Status |
|---------|--------|--------|
| Customer master data | ERP / CRM | ✅ |
| Order processing and delivery documentation | ERP | ✅ |
| Archival of sales and distribution documents | DMS | ✅ |
| Retention period ≥ 10 years configured | DMS / ERP | ⚠️ To be verified |

### Process for Authority Requests

1. Request from market surveillance authority is received
2. Forwarding to ISB and the responsible department
3. Identification of the affected product and relevant transactions
4. Compilation of supplier and customer data from ERP/DMS
5. Submission to the authority within the specified deadline

## 5.4.5 Checklist

- [ ] ERP retention periods for supplier and customer data verified at ≥ 10 years
- [ ] DMS archival policies for procurement and sales documents updated
- [ ] Process for authority requests regarding economic operator identification documented
- [ ] Responsibilities for responding to Art. 21 requests defined
- [ ] Regular review of data quality in master data systems

## 5.4.6 Cross-References

- [Supply Chain Security](/en/supply-chain/) -- Overview of supply chain security measures
- [Market Surveillance](/en/overview/market-surveillance) -- Cooperation with authorities and response processes
- [Importer Obligations](/en/overview/importer-obligations) -- Specific obligations for non-EU suppliers
- [Distributor Obligations](/en/overview/distributor-obligations) -- Due diligence obligations for distribution
