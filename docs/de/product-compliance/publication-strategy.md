# 9.2 Publikationsstrategie

## 9.2.1 Dual-Publication-Konzept

::: info GRUNDSATZ
**Single Source of Truth** = Git-Repository des Produkts
**Öffentliche Darstellung** = Zentrale Compliance-Website
:::

Compliance-Daten werden an genau einer Stelle gepflegt — im Repository des jeweiligen Produkts. Von dort werden sie automatisiert auf eine zentrale Compliance-Website publiziert.

```text
┌────────────────────┐     CI/CD      ┌──────────────────────────┐
│  Produkt-Repo      │ ──────────────→│  Compliance-Portal       │
│                    │                │                          │
│  .compliance/      │   Validierung  │  /products/{name}/       │
│    cra-statement.  │   + Publish    │    → HTML-Darstellung    │
│    json            │                │    → PDF-Download        │
└────────────────────┘                └──────────────────────────┘
        ↑                                       ↑
   Entwickler                          Kunden, Behörden,
   pflegen hier                        Öffentlichkeit
```

## 9.2.2 Vorteile

| Aspekt | Vorteil |
|--------|---------|
| **Versionierung** | Statement ist mit dem Produktcode versioniert |
| **Review** | Änderungen durchlaufen denselben Review-Prozess wie Code |
| **Automatisierung** | Publikation erfolgt automatisch bei Release |
| **Konsistenz** | JSON-Schema erzwingt einheitliches Format über alle Produkte |
| **Audit-Trail** | Git-History dokumentiert jede Änderung |

## 9.2.3 Repository-Struktur

Jedes Produkt-Repository enthält ein `.compliance/`-Verzeichnis:

```text
produkt-repo/
├── .compliance/
│   ├── cra-statement.json          # Maschinenlesbares CRA Statement
│   └── README.md                   # Kurzhinweis zur Compliance-Struktur
├── SECURITY.md                     # Vulnerability Disclosure Policy
├── docs/
│   └── compliance/
│       ├── eu-declaration.pdf      # EU-Konformitätserklärung (Annex V)
│       └── user-info.md            # Nutzerinformation (Annex II)
└── ...
```

### Dateien im Detail

| Datei | Pflicht | Beschreibung |
|-------|---------|-------------|
| `.compliance/cra-statement.json` | ✅ Ja | Maschinenlesbares CRA Compliance Statement (→ [9.3](/de/product-compliance/machine-readable)) |
| `.compliance/README.md` | Empfohlen | Erklärt die Compliance-Struktur für Entwickler |
| `SECURITY.md` | ✅ Ja | Vulnerability Disclosure Policy (→ [4.2](/de/incident-response/disclosure-policy)) |
| `docs/compliance/eu-declaration.pdf` | ✅ Ja | Rechtsverbindliche EU-Konformitätserklärung |
| `docs/compliance/user-info.md` | ✅ Ja | Nutzerinformation gemäß Annex II |

## 9.2.4 Website-URL-Schema

Das zentrale Compliance-Portal folgt einer einheitlichen URL-Struktur:

```text
https://cra.docs.bauer-group.com/
├── /products/                      # Produktverzeichnis
│   ├── /products/{name}/           # Produkt-Compliance-Seite
│   │   ├── /cra                    # CRA Compliance Statement
│   │   ├── /doc                    # EU-Konformitätserklärung
│   │   └── /sbom                   # SBOM-Download
│   └── ...
└── /api/                           # (Optional) API-Zugang für Behörden
    └── /api/products/{name}.json   # Maschinenlesbarer Zugang
```

## 9.2.5 Zugänglichkeit

| Information | Öffentlich | Intern | CRA-Referenz |
|-------------|:----------:|:------:|-------------|
| CRA Compliance Statement | ✅ | ✅ | Art. 13 |
| EU-Konformitätserklärung | ✅ | ✅ | Art. 28 |
| Vereinfachte DoC | ✅ | ✅ | Annex VI |
| Nutzerinformation (Annex II) | ✅ | ✅ | Art. 13 |
| SBOM | Auf Anfrage | ✅ | Annex I, Teil II |
| Technische Dokumentation (Annex VII) | ❌ | ✅ | Art. 31 |
| Konformitätsbewertungsunterlagen | ❌ | ✅ | Art. 28 |

::: warning BEACHTEN
Die vollständige technische Dokumentation (Annex VII) ist **nicht öffentlich** bereitzustellen, muss aber auf Anfrage den Marktaufsichtsbehörden innerhalb von 10 Tagen vorgelegt werden (Art. 31 CRA).
:::

## 9.2.6 CI/CD-Integration

Die Publikation wird in die bestehende CI/CD-Pipeline integriert:

```text
Release-Tag erstellt
    │
    ├── 1. JSON-Schema-Validierung (.compliance/cra-statement.json)
    │       → Fehler = Release blockiert
    │
    ├── 2. Vollständigkeitsprüfung
    │       → Sind alle Pflichtfelder ausgefüllt?
    │       → Existieren referenzierte Dokumente (DoC, SBOM)?
    │
    ├── 3. Publikation auf Compliance-Portal
    │       → HTML generieren
    │       → PDF generieren (optional)
    │
    └── 4. Benachrichtigung
            → Slack/Teams: "Compliance Statement für {Produkt} v{Version} publiziert"
```

## 9.2.7 Querverweise

| Thema | Link |
|-------|------|
| JSON-Schema-Definition | [9.3 Maschinenlesbares Format](/de/product-compliance/machine-readable) |
| Aktualisierungsprozess | [9.4 Pflege & Aktualisierung](/de/product-compliance/maintenance) |
| SBOM-Archivierung | [2.3 Archivierung & Retention](/de/sbom-signing/storage) |
| Ausfüllbare Vorlage | [A.9 CRA Compliance Statement](/de/templates/cra-compliance-statement) |
