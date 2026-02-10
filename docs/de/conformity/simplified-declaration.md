# Vereinfachte EU-Konformitätserklärung (Annex VI)

## Übersicht

Neben der vollständigen EU-Konformitätserklärung (Annex V) erlaubt der CRA eine **vereinfachte Fassung** gemäß Annex VI. Diese darf dem Produkt beigefügt werden, sofern die vollständige Version online abrufbar ist.

::: info RECHTSGRUNDLAGE
**Art. 28 Abs. 3 CRA:** Der Hersteller kann dem Produkt eine vereinfachte EU-Konformitätserklärung gemäß Annex VI beifügen, sofern eine vollständige Fassung online bereitgestellt wird.

**Annex VI CRA:** Inhalt der vereinfachten EU-Konformitätserklärung.
:::

## Wann die vereinfachte Version nutzen?

| Situation | Version |
|-----------|---------|
| Produktverpackung, README, UI | Vereinfacht (Annex VI) |
| Offizielle Dokumentation, Behördenanfrage | Vollständig (Annex V) |
| Online abrufbar | Vollständig (Annex V) |
| Release Notes | Vereinfacht (Annex VI) mit URL zur vollständigen |

## Pflichtinhalt (Annex VI)

Die vereinfachte EU-Konformitätserklärung muss mindestens enthalten:

### 1. Herstellerangaben

```
[Name des Herstellers]
erklärt, dass das Produkt mit digitalen Elementen
```

### 2. Produktidentifikation

```
[Produktname, Typ, Version]
```

### 3. Konformitätsaussage

```
den Bestimmungen der Verordnung (EU) 2024/2847
(Cyber Resilience Act) entspricht.
```

### 4. URL zur vollständigen Erklärung

```
Die vollständige EU-Konformitätserklärung ist abrufbar unter:
[URL]
```

## Template: Vereinfachte EU-Konformitätserklärung

```markdown
## EU-Konformitätserklärung (vereinfacht)

Die **BAUER GROUP** erklärt hiermit, dass das Produkt

**[Produktname] v[Version]**

den Bestimmungen der Verordnung (EU) 2024/2847
(Cyber Resilience Act) entspricht.

Die vollständige EU-Konformitätserklärung ist abrufbar unter:
→ [URL zur vollständigen DoC]

Support-Zeitraum: [Datum] bis [Datum]
Kontakt: [E-Mail]
```

## Platzierung

### Für Software-Produkte

- **README.md** im Repository
- **About-Dialog** oder Footer in der Anwendung
- **Release Notes** pro Version
- **Produktwebseite**
- **Container-Image Labels** (OCI Annotations)

### Für Firmware / Hardware

- **Verpackung** (Aufdruck oder Beilage)
- **Quick Start Guide**
- **Produktetikett** (QR-Code mit URL)

## Beispiel für Container-Image Label

```dockerfile
LABEL eu.cra.doc.url="https://go.bauer-group.com/cra/doc/[produkt]"
LABEL eu.cra.doc.version="1.0"
LABEL eu.cra.support.end="2031-12-31"
```

## Verhältnis zu Annex V

| Aspekt | Annex V (vollständig) | Annex VI (vereinfacht) |
|--------|----------------------|------------------------|
| **Pflicht** | Ja, immer | Optional (mit URL zu Annex V) |
| **Umfang** | 10 Pflichtangaben | 4 Pflichtangaben |
| **Aufbewahrung** | 10 Jahre | Lebensdauer des Produkts |
| **Behördenanfrage** | Muss vorgelegt werden | Nicht ausreichend |
| **Sprache** | Sprache der Behörde | Sprache des Zielmarkts |

→ Vollständige Version: [EU-Konformitätserklärung (Annex V)](/de/conformity/eu-declaration)

→ Ausfüllbares Template: [EU-Konformitätserklärung Template](/de/templates/eu-declaration-of-conformity)
