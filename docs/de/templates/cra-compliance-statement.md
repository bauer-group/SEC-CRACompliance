# A.9 CRA Compliance Statement

## A.9.1 Vorlage: Öffentliches CRA Compliance Statement

Diese Vorlage dient als Basis für das produktspezifische öffentliche CRA Compliance Statement. Es bündelt alle CRA-relevanten Informationen auf einer Seite und verweist auf die zugehörigen Detaildokumente.

::: warning ANWENDUNGSHINWEIS
Dieses Statement ist eine **ergänzende öffentliche Darstellung**. Es ersetzt nicht die rechtsverbindliche EU-Konformitätserklärung gemäß Annex V (→ [A.7 EU-Konformitätserklärung](/de/templates/eu-declaration-of-conformity)).

Platzhalter in eckigen Klammern `[...]` sind durch die tatsächlichen Werte zu ersetzen.
:::

---

## A.9.2 CRA COMPLIANCE STATEMENT

### [Produktname] — Version [X.Y.Z]

**Datum:** [YYYY-MM-DD] | **Hersteller:** BAUER GROUP

---

**1. Produktidentifikation**

| Feld | Wert |
|------|------|
| Produktname | [Vollständiger Produktname] |
| Version | [X.Y.Z] |
| Produkttyp | [Software / Container Image / Firmware / Embedded System] |
| CRA-Produktkategorie | [Standard / Klasse I / Klasse II / Kritisch] |
| Eindeutige Kennung | [Package-URL, Container-Image-Referenz oder sonstige ID] |
| Kurzbeschreibung | [Einzeilige Beschreibung des Produktzwecks] |

**2. Hersteller**

| Feld | Wert |
|------|------|
| Unternehmen | BAUER GROUP |
| Anschrift | [Vollständige Postanschrift] |
| Sicherheitskontakt | <disclosure@bauer-group.com> |
| Webseite | [URL] |
| Bevollmächtigter (falls zutreffend) | [Name, Anschrift] oder „Entfällt" |

**3. Konformitätsstatus**

| Feld | Wert |
|------|------|
| Konformitätsbewertungsverfahren | [Modul A / Modul B+C / Modul H / EUCC] |
| EU-Konformitätserklärung (Annex V) | [URL zur vollständigen DoC] |
| CE-Kennzeichnung | [Ja — angebracht in: About-Dialog / Dokumentation / Website / Container-Label] |
| Notifizierte Stelle (falls zutreffend) | [Name, Kennnummer] oder „Entfällt (Modul A)" |
| Datum der letzten Bewertung | [YYYY-MM-DD] |

**4. Sicherheitsdokumentation**

| Dokument | Verfügbar | Link |
|----------|:---------:|------|
| SBOM (CycloneDX JSON) | [Ja / Nein] | [URL zum SBOM im GitHub Release] |
| Vulnerability Disclosure Policy | [Ja] | [URL zur SECURITY.md] |
| Nutzerinformation (Annex II) | [Ja] | [URL] |
| Technische Dokumentation (Annex VII) | Auf Anfrage | [Kontakt-E-Mail] |

**5. Support-Zeitraum**

| Feld | Wert |
|------|------|
| Support-Beginn | [YYYY-MM-DD] |
| Support-Ende | [YYYY-MM-DD — mindestens 5 Jahre] |
| Aktuelle Phase | [Active Support / Security Support / End of Life] |
| Update-Mechanismus | [Automatisch / Manuell / Benachrichtigung] |

**6. Harmonisierte Normen und technische Spezifikationen**

| Norm / Spezifikation | Beschreibung |
|----------------------|-------------|
| [z.B. EN XXXXX:YYYY] | [Beschreibung] |
| CycloneDX v1.5 | SBOM-Format (OWASP) |
| ISO/IEC 29147:2018 | Vulnerability Disclosure |
| [Weitere] | [Beschreibung] |

**7. Schwachstellenmanagement**

| Feld | Wert |
|------|------|
| Vulnerability Disclosure Policy | [URL zur SECURITY.md] |
| Meldekontakt | <disclosure@bauer-group.com> |
| CVE-Monitoring | [Automatisiert (täglich) / Manuell] |
| Patch-SLAs | [Kritisch: 48h / Hoch: 7d / Mittel: 30d / Niedrig: 90d] |
| ENISA-Meldepflicht | [Ja, gemäß Art. 14 CRA] |

---

::: info RECHTSVERBINDLICHKEIT
Dieses CRA Compliance Statement ist eine zusammenfassende Darstellung für Transparenzzwecke. Die rechtsverbindliche EU-Konformitätserklärung gemäß Annex V der Verordnung (EU) 2024/2847 ist unter dem oben genannten Link abrufbar.

Falsche Angaben in der EU-Konformitätserklärung können zu Sanktionen führen (Art. 64 CRA: bis zu 15 Mio. EUR oder 2,5% des weltweiten Jahresumsatzes).
:::

## A.9.3 Maschinenlesbares Format

Parallel zur menschenlesbaren Fassung wird dieses Statement als `cra-statement.json` im Produkt-Repository gepflegt:

→ [9.3 Maschinenlesbares Format](/de/product-compliance/machine-readable)

→ [9.2 Publikationsstrategie](/de/product-compliance/publication-strategy)

## A.9.4 Aktualisierung

Dieses Statement wird aktualisiert bei:

- Neuem Major/Minor Release
- Änderung der CRA-Produktkategorie
- Änderung harmonisierter Normen
- Änderung des Support-Zeitraums

Detaillierter Pflegeprozess: → [9.4 Pflege & Aktualisierung](/de/product-compliance/maintenance)
