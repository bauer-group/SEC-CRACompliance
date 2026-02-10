# Kapitel 6: Technische Dokumentation

## Übersicht

Die technische Dokumentation gemäß Annex VII CRA ist die zentrale Nachweisdokumentation für die Konformität eines Produkts mit digitalen Elementen. Sie muss vor dem Inverkehrbringen erstellt und mindestens 10 Jahre aufbewahrt werden.

::: info RECHTSGRUNDLAGE
**Art. 31 CRA:** *„Die technische Dokumentation wird erstellt, bevor das Produkt mit digitalen Elementen in Verkehr gebracht wird, und wird während des erwarteten Nutzungszeitraums des Produkts oder während eines Zeitraums von fünf Jahren nach dem Inverkehrbringen kontinuierlich aktualisiert, je nachdem, welcher Zeitraum kürzer ist."*

**Annex VII CRA** definiert den Mindestinhalt der technischen Dokumentation.
:::

## Kapitelstruktur

| Sektion | Thema | Annex VII Bezug |
|---------|-------|-----------------|
| **7.1** | [Produktbeschreibung (Template)](/de/technical-documentation/product-description) | Nr. 1: Allgemeine Beschreibung |
| **7.2** | [Sicherheitsarchitektur](/de/technical-documentation/security-architecture) | Nr. 3: Architektur und Design |
| **7.3** | [Update-Mechanismus](/de/technical-documentation/update-mechanism) | Nr. 4: Update-Bereitstellung |
| **7.4** | [Support & Lifecycle Policy](/de/technical-documentation/support-period) | Art. 13 Abs. 8, Annex II Nr. 5 |
| **7.5** | [Sicherheitsanforderungen (Annex I)](/de/technical-documentation/security-requirements) | Annex I Teil I: 13 wesentliche Anforderungen |
| **7.6** | [Annex VII – Leitfaden](/de/technical-documentation/annex-vii-guide) | Annex VII: Vollständiger Dokumentationsleitfaden |

## Weitere Pflichtinhalte (in übergreifenden Kapiteln)

| Annex VII Anforderung | Dokumentationsort | Kapitel |
|----------------------|-------------------|---------|
| SBOM (maschinenlesbar) | [SBOM & Signierung](/de/sbom-signing/) | Kap. 2 |
| Cybersecurity-Risikobewertung | [Risikobewertung](/de/vulnerability-management/risk-assessment) | Kap. 3 |
| Schwachstellenbehandlung | [Vulnerability Management](/de/vulnerability-management/) | Kap. 3 |
| Koordinierte Offenlegung | [Disclosure Policy](/de/incident-response/disclosure-policy) | Kap. 5 |
| Konformitätsbewertungsergebnisse | [Conformity Assessment](/de/conformity/) | Kap. 8 |
| EU-Konformitätserklärung | [EU DoC](/de/conformity/eu-declaration) | Kap. 8 |
| Nutzerinformationen (Annex II) | [Nutzerinformation](/de/templates/product-security-info) | Anhang |

## Aufbewahrungspflicht

**Art. 10 Abs. 13 CRA:** Die technische Dokumentation ist **10 Jahre** nach dem Inverkehrbringen des Produkts oder für die Dauer des Support-Zeitraums aufzubewahren – je nachdem, welcher Zeitraum länger ist.

| Dokumentationsart | Aufbewahrungsort | Aufbewahrungsdauer |
|-------------------|-----------------|-------------------|
| Technische Dokumentation | Dieses Repository (Git) | 10 Jahre |
| SBOM pro Version | Release-Assets + sbom/ | 10 Jahre |
| Konformitätserklärung | Dieses Repository | 10 Jahre |
| Risikobewertungen | Dieses Repository | 10 Jahre |
| Testergebnisse | GitHub Actions Artifacts / Archiv | 10 Jahre |

## Produktspezifische Dokumentation

::: warning HANDLUNGSBEDARF
Für jedes CRA-relevante Produkt muss eine individuelle technische Dokumentation erstellt werden. Die in diesem Kapitel bereitgestellten Templates (insbesondere 7.1 Produktbeschreibung) dienen als Vorlage.

Produkt-spezifische Dokumentation wird in separaten Verzeichnissen unter `docs/products/<produktname>/` gepflegt.
:::
