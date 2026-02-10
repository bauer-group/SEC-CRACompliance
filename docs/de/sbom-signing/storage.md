# 2.3 Archivierung & Retention

## 2.3.1 Archivierungsstrategie

SBOMs werden an drei Stellen archiviert, um Verfügbarkeit und Nachvollziehbarkeit sicherzustellen.

### 1. GitHub Release-Assets (Primär)

Jeder GitHub Release enthält die SBOM als Asset:

```
Release v2.1.0
├── product-v2.1.0-linux-amd64.tar.gz
├── product-v2.1.0-linux-amd64.tar.gz.sig    ← Cosign Signatur
├── sbom-product-v2.1.0.cdx.json              ← SBOM
├── sbom-product-v2.1.0.cdx.json.sig          ← SBOM Signatur
└── SHA256SUMS.txt                             ← Checksummen
```

**Vorteile:**

- Direkt dem Release zugeordnet
- Öffentlich zugänglich (bei Public Repos)
- Versioniert und unveränderlich
- API-Zugriff über GitHub REST API

### 2. Compliance-Repository (Sekundär)

Dieses Repository (`CRA-Compliance`) enthält ein SBOM-Archiv:

```
sbom/
├── product-a/
│   ├── sbom-product-a-v1.0.0.cdx.json
│   ├── sbom-product-a-v1.1.0.cdx.json
│   └── sbom-product-a-v2.0.0.cdx.json
├── product-b/
│   ├── sbom-product-b-v3.0.0.cdx.json
│   └── sbom-product-b-v3.1.0.cdx.json
└── firmware-esp32/
    ├── sbom-firmware-esp32-v1.0.0.cdx.json
    └── sbom-firmware-esp32-v1.1.0.cdx.json
```

**Vorteile:**

- Zentrale Übersicht aller Produkt-SBOMs
- Git-Historie als Audit-Trail
- CVE-Monitor kann zentral alle SBOMs scannen

### 3. GitHub Actions Artifacts (Kurzfristig)

Build-Artefakte werden als GitHub Actions Artifacts gespeichert (90 Tage Retention).

**Vorteile:**

- Sofort nach Build verfügbar
- Temporäre Analyse und Debugging

## 2.3.2 Retention Policy

| Speicherort | Aufbewahrungsdauer | Begründung |
|-------------|-------------------|------------|
| GitHub Release-Assets | **Unbegrenzt** (Lebenszeit des Repos) | Regulatorischer Nachweis (Art. 10 Abs. 13 CRA: 10 Jahre oder Lebensdauer des Produkts, je nachdem, was länger ist) |
| Compliance-Repo (sbom/) | **10 Jahre** nach letzter Produktbereitstellung | Art. 10 Abs. 13 CRA |
| GitHub Actions Artifacts | **90 Tage** | Debugging und Analyse |

::: danger AUFBEWAHRUNGSFRIST
**Art. 10 Abs. 13 CRA:** Die technische Dokumentation und die EU-Konformitätserklärung sind **10 Jahre** nach Inverkehrbringen des Produkts oder für die Dauer des Support-Zeitraums aufzubewahren – je nachdem, welcher Zeitraum länger ist.

SBOMs als Teil der technischen Dokumentation unterliegen dieser Aufbewahrungsfrist.
:::

## 2.3.3 Integritätsschutz

Jede archivierte SBOM wird durch folgende Maßnahmen geschützt:

1. **SHA256-Hash** – Integritätsprüfung
2. **Cosign-Signatur** – Authentizitätsnachweis
3. **Git-Historie** – Unveränderlichkeitsnachweis
4. **Branch Protection** – Schutz vor unbefugten Änderungen

```bash
# Integritätsprüfung
sha256sum -c SHA256SUMS.txt

# Signaturprüfung
cosign verify-blob --key cosign.pub --signature sbom.cdx.json.sig sbom.cdx.json
```

## 2.3.4 Zugriff & Bereitstellung

### Für Regulierer / Marktaufsichtsbehörden

SBOMs werden auf Anfrage bereitgestellt (Art. 13 Abs. 23 CRA):

- Zugang über GitHub Release-Assets (bei Public Repos)
- Direkter Download-Link
- Auf Anfrage als E-Mail-Anhang

### Für interne Nutzung

- CVE-Monitor-Workflow nutzt SBOMs aus dem Compliance-Repo
- Security-Team hat Lesezugriff auf alle SBOMs
- Dashboard-Integration über GitHub API
