# CRA Scope-Checker

Verwenden Sie diesen Entscheidungsbaum, um festzustellen, ob der Cyber Resilience Act auf Ihr Produkt anwendbar ist und welcher Konformitätsweg einzuschlagen ist.

::: danger BAUER GROUP Regel
**Jedes Produkt mit digitalen Elementen durchläuft diese Bewertung vor der EU-Markteinführung.** Klassifizierungsentscheidungen müssen mit dem [Produktklassifizierungs-Protokoll](/de/templates/product-classification-record) dokumentiert werden.
:::

## Entscheidungsbaum

### Gate 1: Produkt mit digitalen Elementen?

```
┌───────────────────────────────────────────────┐
│ Enthält das Produkt digitale Elemente?        │
│ (Software, Firmware oder Hardware mit         │
│ logischer Datenverbindung — Art. 3(1) CRA)    │
│                                               │
│   NEIN → CRA nicht anwendbar → STOP          │
│   JA   ↓                                     │
└───────────────────────────────────────────────┘
```

**„Produkt mit digitalen Elementen"** bezeichnet jedes Software- oder Hardwareprodukt und seine Lösungen zur Ferndatenverarbeitung, einschließlich separat in Verkehr gebrachter Software- oder Hardwarekomponenten (Art. 3(1) CRA).

### Gate 2: Ausnahmen (Art. 2(2))

```
┌───────────────────────────────────────────────┐
│ Trifft eine der folgenden Ausnahmen zu?       │
│                                               │
│ ☐ Medizinprodukt (VO 2017/745, 2017/746)     │
│ ☐ Kraftfahrzeug (VO 2019/2144)               │
│ ☐ Luftfahrt (VO 2018/1139)                   │
│ ☐ Schiffsausrüstung (RL 2014/90/EU)          │
│ ☐ Nationale Sicherheit / Militärprodukt      │
│ ☐ Reines SaaS ohne Produktkomponente         │
│                                               │
│   JA   → CRA nicht anwendbar (sektorale      │
│           Regulierung gilt) → STOP            │
│   NEIN ↓                                     │
└───────────────────────────────────────────────┘
```

::: tip NIS2-Synergie
Reine SaaS-Dienste fallen unter NIS2, nicht unter den CRA — es sei denn, die Ferndatenverarbeitung ist integraler Bestandteil eines physischen oder installierbaren Produkts.
:::

### Gate 3: Open-Source-Bewertung (Art. 18–19)

```
┌───────────────────────────────────────────────┐
│ Handelt es sich um Open-Source-Software?      │
│                                               │
│   NEIN → Weiter zu Gate 4 ↓                  │
│   JA   → Liegt eine kommerzielle Aktivität    │
│           vor? (Verkauf, bezahlter Support,    │
│           monetarisierte Integration, SaaS)    │
│                                               │
│     NEIN → CRA nicht anwendbar → STOP         │
│     JA   → Open-Source-Steward-Pflichten      │
│             gelten (Art. 18–19) → Weiter ↓   │
└───────────────────────────────────────────────┘
```

::: warning Hinweis
„Kommerzielle Aktivität" wird weit ausgelegt. Spenden allein begründen **keine** kommerzielle Aktivität. Die Bereitstellung der Software als Teil eines kostenpflichtigen Produkts oder Dienstes hingegen **schon**.
:::

### Gate 4: Produktklassifizierung (Art. 6–7, Annex III & IV)

```
┌───────────────────────────────────────────────┐
│ Ist das Produkt in Annex IV gelistet?         │
│                                               │
│   JA   → KRITISCH                             │
│          → EUCC-Zertifizierung erforderlich   │
│          → Siehe: Konformität / EUCC           │
│   NEIN ↓                                     │
├───────────────────────────────────────────────┤
│ Ist das Produkt in Annex III gelistet?        │
│                                               │
│   JA   → Welche Klasse?                       │
│     Klasse II → Modul B+C oder Modul H        │
│                 → Siehe: Konformität / Modul B+C│
│     Klasse I  → Modul A (mit hEN) oder B+C    │
│                 → Siehe: Konformität / Modul A  │
│   NEIN ↓                                     │
├───────────────────────────────────────────────┤
│ STANDARD (Standardkategorie)                  │
│ → Modul A (Selbstbewertung)                   │
│ → Siehe: Konformität / Selbstbewertung         │
└───────────────────────────────────────────────┘
```

## Ergebnisübersicht

| Ergebnis | Produktklasse | Konformitätsweg | Aufwandsniveau |
|----------|--------------|-----------------|----------------|
| <span class="badge-default">Standard</span> | Standard | [Modul A (Selbstbewertung)](/de/conformity/self-assessment) | Gering |
| <span class="badge-class-i">Klasse I</span> | Wichtig (Klasse I) | [Modul A mit hEN](/de/conformity/self-assessment) oder [Modul B+C](/de/conformity/module-bc) | Mittel |
| <span class="badge-class-ii">Klasse II</span> | Wichtig (Klasse II) | [Modul B+C](/de/conformity/module-bc) oder [Modul H](/de/conformity/module-h) | Hoch |
| <span class="badge-critical">Kritisch</span> | Kritisch (Annex IV) | [EUCC-Zertifizierung](/de/conformity/eucc) | Sehr hoch |

## Geschätzter Compliance-Aufwand

| Anforderung | Einmalig | Jährlich | Gilt für |
|---|---|---|---|
| Sicherheitsrisikobewertung (Annex I) | 20–40h | 10–20h | Alle Klassen |
| SBOM-Generierung & -Pflege | 8–16h | 8–16h | Alle Klassen |
| Schwachstellenbehandlungsprozess | 20–40h | 20–40h | Alle Klassen |
| Incident-Reporting-Aufbau (Art. 14) | 16–32h | 8–16h | Alle Klassen |
| Technische Dokumentation (Annex VII) | 40–80h | 10–20h | Alle Klassen |
| CE-Kennzeichnung & EU-DoC | 8–16h | 4–8h | Alle Klassen |
| Drittbewertung (Modul B+C) | 40–80h | 20–40h | Klasse I\* / II |
| QMS-Aufbau (Modul H) | 60–120h | 30–60h | Klasse II (Alt.) |
| EUCC-Zertifizierungsprozess | 80–160h | 40–80h | Kritisch |
| **Gesamt Standard** | **112–224h** | **60–120h** | |
| **Gesamt Klasse I (mit hEN)** | **112–224h** | **60–120h** | |
| **Gesamt Klasse I (ohne hEN)** | **152–304h** | **80–160h** | |
| **Gesamt Klasse II** | **212–424h** | **110–220h** | |
| **Gesamt Kritisch** | **252–504h** | **130–260h** | |

\* Klasse I erfordert nur dann eine Drittbewertung, wenn harmonisierte Normen **nicht** vollständig angewendet werden.

::: tip BAUER GROUP Ansatz
BAUER GROUP setzt auf eine **vollautomatisierte Toolchain** (Trivy, Grype, CycloneDX, Cosign, GitHub Actions), um den manuellen Aufwand für Standard- und Klasse-I-Produkte zu minimieren. Details in der [Tooling-Zuordnung](/de/compliance-matrix/tooling-map).
:::

## Nächste Schritte

Basierend auf Ihrem Klassifizierungsergebnis:

1. **Entscheidung dokumentieren** → [Produktklassifizierungs-Protokoll](/de/templates/product-classification-record)
2. **Konformitätsverfahren starten** → [Konformitätsbewertung Übersicht](/de/conformity/)
3. **Dokumentation vorbereiten** → [Technische Dokumentation](/de/technical-documentation/)
4. **Meldewesen einrichten** → [ENISA-Meldeprozess](/de/incident-response/enisa-reporting)
