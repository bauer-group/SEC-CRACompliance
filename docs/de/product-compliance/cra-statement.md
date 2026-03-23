# 9.1 CRA Compliance Statement

## 9.1.1 Zweck

Das CRA Compliance Statement ist die **öffentliche Zusammenfassung** aller CRA-Compliance-Artefakte eines Produkts. Es dient als zentrale Anlaufstelle für Kunden, Marktaufsichtsbehörden und interne Audits.

::: warning WICHTIG
Das CRA Compliance Statement ist **kein Ersatz** für die rechtsverbindliche EU-Konformitätserklärung (Annex V). Es ist eine ergänzende, öffentlich zugängliche Darstellung, die auf alle relevanten Dokumente verweist.
:::

## 9.1.2 Generierungsprinzip

::: info GRUNDSATZ
**Das maschinenlesbare JSON ist die einzige Quelle.** Alle menschenlesbaren Formate und Compliance-Artefakte werden daraus generiert — nie manuell separat gepflegt.
:::

```text
                    ┌──────────────────────────┐
                    │  .compliance/             │
                    │  cra-statement.json       │
                    │  (Single Source of Truth)  │
                    └─────────┬────────────────┘
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Compliance-Seite│ │ CE-Kennzeichnung│ │ Container-Labels│
│ (HTML/PDF)      │ │ (About-Dialog,  │ │ (OCI-Annotations│
│ auf Portal      │ │  README, Footer)│ │  Dockerfile)    │
└─────────────────┘ └─────────────────┘ └─────────────────┘
          │                   │                   │
          ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ API-Endpunkt    │ │ Vereinfachte DoC│ │ Release Notes   │
│ für Behörden    │ │ (Annex VI)      │ │ Snippet         │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### Generierte Artefakte

| Artefakt | Generiert aus | Ziel |
|----------|--------------|------|
| **Compliance-Seite** (HTML/PDF) | Alle JSON-Felder | Compliance-Portal |
| **CE-Kennzeichnung** | `manufacturer.*`, `conformity.*`, `cra_classification.notified_body` | About-Dialog, README, Footer, Dokumentation |
| **Container-Labels** | `conformity.ce_marking`, `conformity.declaration_url`, `support_period.end_date` | Dockerfile / OCI-Annotations |
| **Vereinfachte DoC** (Annex VI) | `manufacturer.name`, `product.*`, `conformity.declaration_url`, `support_period.*` | README, Release Notes, Verpackung |
| **API-Response** | Vollständiges JSON | `/api/products/{name}.json` |
| **Release-Notes-Snippet** | `conformity.*`, `support_period.*`, `security_documentation.*` | GitHub Release |

### CE-Kennzeichnung aus JSON

Die CE-Kennzeichnung wird aus den JSON-Feldern generiert und automatisch an den konfigurierten Stellen platziert (→ [7.7 CE-Kennzeichnung](/de/conformity/ce-marking)):

```text
Generierte CE-Kennzeichnung:

  CE [1234]                              ← notified_body (falls vorhanden)
  BAUER GROUP                            ← manufacturer.name
  Musterstraße 1, 12345 Musterstadt     ← manufacturer.address
  MinIO Gateway v2.1.0                   ← product.name + product.version
```

Für Container Images werden zusätzlich OCI-Labels generiert:

```dockerfile
LABEL org.opencontainers.image.ce-marking="conformant"
LABEL eu.cra.doc.url="https://go.bauer-group.com/cra-minio-gateway"
LABEL eu.cra.doc.version="1.0"
LABEL eu.cra.support.end="2031-03-01"
```

## 9.1.3 Pflichtinhalte

Folgende Informationen müssen gemäß CRA öffentlich zugänglich sein und werden im Statement gebündelt:

| CRA-Referenz | Information | Querverweis |
|-------------|-------------|-------------|
| Art. 13 Abs. 6 | Coordinated Vulnerability Disclosure Policy | → [4.2 Disclosure Policy](/de/incident-response/disclosure-policy) |
| Art. 13 Abs. 8 | Support-Zeitraum | → [6.4 Support & Lifecycle](/de/technical-documentation/support-period) |
| Art. 13, Annex II | Nutzerinformation (Sicherheitshinweise) | → [7.10 Nutzerinformation](/de/conformity/annex-ii-user-info) |
| Art. 28, Annex V | EU-Konformitätserklärung (oder Link dazu) | → [7.8 EU-Konformitätserklärung](/de/conformity/eu-declaration) |
| Art. 29–30 | CE-Kennzeichnung | → [7.7 CE-Kennzeichnung](/de/conformity/ce-marking) |
| Annex I, Teil II, Nr. 1 | SBOM (maschinenlesbar) | → [Kapitel 2: SBOM & Signierung](/de/sbom-signing/) |
| Annex VII | Kontaktinformationen des Herstellers | → [6.1 Produktbeschreibung](/de/technical-documentation/product-description) |

## 9.1.4 Empfohlene Struktur

Ein CRA Compliance Statement sollte folgende Abschnitte enthalten:

### 1. Produktidentifikation

- Produktname, Version, Typ (Software / Container / Firmware)
- CRA-Produktkategorie (Standard / Klasse I / Klasse II / Kritisch)
- Eindeutige Kennung (z.B. Package-URL, Container-Image-Referenz)

### 2. Herstellerangaben

- Unternehmen, Anschrift
- Sicherheitskontakt (z.B. `disclosure@bauer-group.com`)
- Bevollmächtigter (falls zutreffend)

### 3. Konformitätsstatus

- Angewandtes Konformitätsbewertungsverfahren (→ [Kapitel 7](/de/conformity/))
- Link zur EU-Konformitätserklärung (Annex V)
- CE-Kennzeichnung: Status und Platzierung
- Datum der letzten Bewertung

### 4. Sicherheitsdokumentation

Links zu:

- SBOM (CycloneDX JSON)
- Vulnerability Disclosure Policy / SECURITY.md
- Nutzerinformation (Annex II)
- Technische Dokumentation (soweit öffentlich)

### 5. Support-Zeitraum

- Beginn und Ende des Support-Zeitraums
- Aktuelle Phase (Active Support / Security Support)
- Verweis auf Update-Mechanismus (→ [6.3 Update-Mechanismus](/de/technical-documentation/update-mechanism))

### 6. Harmonisierte Normen

- Angewandte harmonisierte Normen und technische Spezifikationen
- SBOM-Format-Standard (z.B. CycloneDX v1.5)

### 7. Schwachstellenmanagement

- Verweis auf Vulnerability Disclosure Policy
- CVE-Monitoring-Status
- Patch-SLAs (→ [3.3 Patch Management](/de/vulnerability-management/patch-management))

## 9.1.5 Beispiel

So könnte ein CRA Compliance Statement für ein fiktives Produkt aussehen:

---

> **CRA COMPLIANCE STATEMENT**
>
> **MinIO Gateway** — Version 2.1.0
>
> **Datum:** 2026-03-01 | **Hersteller:** BAUER GROUP
>
> ---
>
> | Feld | Wert |
> |------|------|
> | Produkttyp | Container Image |
> | CRA-Kategorie | Standard |
> | Konformitätsmodul | Modul A (Interne Kontrolle) |
> | CE-Kennzeichnung | ✅ In About-Dialog und Dokumentation |
> | EU-Konformitätserklärung | [Link zur DoC] |
> | SBOM | [CycloneDX JSON — GitHub Release] |
> | SECURITY.md | [Link] |
> | Nutzerinformation (Annex II) | [Link] |
> | Support-Zeitraum | 2026-03-01 bis 2031-03-01 |
> | Vulnerability Disclosure | `disclosure@bauer-group.com` |

---

## 9.1.6 Platzierung

| Kanal | Format | Zielgruppe |
|-------|--------|------------|
| **Compliance-Portal** | HTML (generiert aus JSON) | Kunden, Behörden |
| **Produkt-Repository** | `.compliance/cra-statement.json` | Entwickler, Audits |
| **README.md** | Vereinfachter Verweis mit Link | Entwickler |
| **Produktwebseite** | Compliance-Sektion | Kunden |
| **Release Notes** | Verweis auf aktuelles Statement | Alle |

→ Details zur Publikationsstrategie: [9.2 Publikationsstrategie](/de/product-compliance/publication-strategy)

## 9.1.7 Querverweise

| Dokument | Link |
|----------|------|
| EU-Konformitätserklärung (Annex V) | [7.8 EU-Konformitätserklärung](/de/conformity/eu-declaration) |
| Vereinfachte DoC (Annex VI) | [7.9 Vereinfachte DoC](/de/conformity/simplified-declaration) |
| Nutzerinformation (Annex II) | [7.10 Nutzerinformation](/de/conformity/annex-ii-user-info) |
| CE-Kennzeichnung | [7.7 CE-Kennzeichnung](/de/conformity/ce-marking) |
| Template | [A.9 CRA Compliance Statement](/de/templates/cra-compliance-statement) |
