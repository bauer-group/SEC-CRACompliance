# Kapitel 9: Produkt-Compliance-Publikation

## Übersicht

Der CRA schreibt vor, dass Hersteller umfangreiche Compliance-Informationen öffentlich zugänglich machen. Die EU-Konformitätserklärung, Nutzerinformationen, der Support-Zeitraum und die Vulnerability Disclosure Policy müssen für Kunden, Behörden und die Öffentlichkeit abrufbar sein.

Dieses Kapitel beschreibt, wie jedes Softwareprodukt seine CRA-Compliance-Artefakte **gebündelt als öffentliches Compliance Statement** publiziert — und wie dieser Prozess über alle Produkte hinweg standardisiert und automatisiert wird.

::: info RECHTSGRUNDLAGE
**Art. 13 CRA:** *„Der Hersteller stellt sicher, dass dem Produkt [...] die in Annex II genannten Informationen beigefügt sind."*

**Art. 28 Abs. 3 CRA:** *„Der Hersteller kann dem Produkt eine vereinfachte EU-Konformitätserklärung beifügen, sofern eine vollständige Fassung online bereitgestellt wird."*

**Art. 29 CRA:** Die CE-Kennzeichnung wird vor dem Inverkehrbringen auf dem Produkt oder seinen Begleitunterlagen angebracht.
:::

## Warum eine öffentliche Compliance-Seite?

| Grund | Erläuterung |
|-------|-------------|
| **Regulatorische Pflicht** | Art. 13 und Art. 28 CRA fordern öffentlichen Zugang zu Konformitätserklärung und Nutzerinformation |
| **Marktaufsicht** | Behörden müssen Compliance-Informationen prüfen können (Art. 52–58 CRA) |
| **Kundenvertrauen** | B2B-Kunden erwarten nachweisbare Compliance-Dokumentation |
| **Marktvorteil** | Proaktive Compliance signalisiert Reife und Professionalität |
| **Standardisierung** | Ein einheitliches Format über alle Produkte vereinfacht Pflege und Audit |

## Abgrenzung zu Kapitel 7

| Aspekt | Kapitel 7: Konformitätsbewertung | Kapitel 9: Compliance-Publikation |
|--------|----------------------------------|-----------------------------------|
| **Fokus** | Wie wird die Konformität bewertet? | Wie wird sie öffentlich dargestellt? |
| **Ergebnis** | EU-Konformitätserklärung (Annex V) | Öffentliche Produkt-Compliance-Seite |
| **Zielgruppe** | Hersteller, Prüfstellen | Kunden, Behörden, Öffentlichkeit |
| **Zeitpunkt** | Vor Inverkehrbringen | Während gesamter Lebensdauer |

## Weitere regulatorische Hinweise

::: tip HINWEIS FÜR AI-PRODUKTE
Produkte, die AI-Komponenten enthalten, unterliegen zusätzlich dem **EU AI Act** (Verordnung (EU) 2024/1689). Die AI-Act-Compliance wird in einer separaten Dokumentation behandelt. Das CRA Compliance Statement (→ [9.1](/de/product-compliance/cra-statement)) deckt ausschließlich die CRA-Anforderungen ab.
:::

## Kapitelstruktur

| Sektion | Thema | Beschreibung |
|---------|-------|-------------|
| **9.1** | [CRA Compliance Statement](/de/product-compliance/cra-statement) | Pflichtinhalte, Struktur und Beispiel eines produktspezifischen Compliance Statements |
| **9.2** | [Publikationsstrategie](/de/product-compliance/publication-strategy) | Dual-Konzept: Repository als Source of Truth, Website als öffentliche Darstellung |
| **9.3** | [Maschinenlesbares Format](/de/product-compliance/machine-readable) | JSON-Schema für `cra-statement.json` und CI/CD-Validierung |
| **9.4** | [Pflege & Aktualisierung](/de/product-compliance/maintenance) | Update-Auslöser, Review-Zyklus, Verantwortlichkeiten |

→ Ausfüllbare Vorlage: [A.9 CRA Compliance Statement](/de/templates/cra-compliance-statement)
