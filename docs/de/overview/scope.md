# 1.1 Geltungsbereich

## 1.1.1 Anwendungsbereich

Gemäß Art. 2 CRA gilt diese Verordnung für Produkte mit digitalen Elementen, die auf dem EU-Markt bereitgestellt werden und deren bestimmungsgemäße oder vernünftigerweise vorhersehbare Verwendung eine direkte oder indirekte Datenverbindung umfasst.

## 1.1.2 Betroffene Produktkategorien

### Software-Produkte

| Kategorie | Beispiele | CRA-relevant |
|-----------|-----------|-------------|
| Web-Anwendungen | APIs, Frontends, Microservices | Ja |
| Container-Images | Docker-basierte Dienste | Ja |
| Desktop-Anwendungen | .NET WPF/WinForms, MAUI | Ja |
| NPM-Pakete | Öffentlich veröffentlichte Libraries | Ja |
| NuGet-Pakete | .NET Libraries | Ja |

### Firmware / Embedded

| Kategorie | Plattform | CRA-relevant |
|-----------|-----------|-------------|
| ESP32 Firmware | ESP-IDF, Arduino | Ja |
| STM32 Firmware | HAL, CMSIS | Ja |
| Zephyr RTOS | Zephyr OS | Ja |
| PlatformIO Builds | Cross-Platform | Ja |

### Infrastruktur

| Kategorie | Beispiele | CRA-relevant |
|-----------|-----------|-------------|
| Docker Compose Stacks | Multi-Container-Deployments | Ja (als Teil des Produkts) |
| CI/CD Pipelines | GitHub Actions Workflows | Nein (interne Tooling) |

## 1.1.3 Ausnahmen (Art. 2 Abs. 2 CRA)

Nicht unter den CRA fallen:

- Open-Source-Software, die nicht im Rahmen einer kommerziellen Tätigkeit bereitgestellt wird
- SaaS-Dienste (fallen unter NIS2, nicht CRA) – es sei denn, Remote-Datenverarbeitung ist integraler Bestandteil des Produkts
- Produkte, die unter sektorspezifische EU-Rechtsvorschriften fallen (z.B. Medizinprodukte, Kraftfahrzeuge, Luftfahrt)

## 1.1.4 Produktkatalog

::: warning HANDLUNGSBEDARF
Für jedes CRA-relevante Produkt muss eine individuelle Einstufung und Dokumentation erfolgen. Verwenden Sie das Template unter [Produktbeschreibung](/de/technical-documentation/product-description) als Vorlage.
:::

Der Produktkatalog wird produktspezifisch gepflegt. Jedes Produkt erhält:

1. **Eindeutige Kennung** (Produktname + Version)
2. **CRA-Produktklasse** (Standard / Klasse I / Klasse II / Kritisch)
3. **Support-Zeitraum** (mindestens 5 Jahre oder erwartete Lebensdauer)
4. **Verantwortlicher** (Product Owner / Security Lead)
5. **SBOM-Referenz** (Link zur aktuellen SBOM)
6. **Konformitätserklärung** (Link zur EU DoC)
