# A.4 ENISA Meldung (72h)

::: warning FRIST
Diese Meldung muss innerhalb von **72 Stunden** nach Kenntnisnahme an ENISA / die zuständige nationale CSIRT gesendet werden. Sie ergänzt die Frühwarnung (24h).
:::

## A.4.1 Vorlage: Schwachstellenmeldung gemäß Art. 14 Abs. 2 lit. b CRA

---

### 1. Bezug zur Frühwarnung

| Feld | Wert |
|------|------|
| **Frühwarnung-Referenz** | [EW-YYYY-NNN] |
| **Datum der Frühwarnung** | [YYYY-MM-DD HH:MM UTC] |
| **Melde-Referenz** | [VN-YYYY-NNN] |
| **Meldedatum** | [YYYY-MM-DD HH:MM UTC] |

### 2. Hersteller-Identifikation

| Feld | Wert |
|------|------|
| **Unternehmen** | BAUER GROUP |
| **Kontaktperson** | [Name, Funktion] |
| **E-Mail** | <disclosure@bauer-group.com> |
| **Telefon** | [Telefonnummer] |

### 3. Betroffenes Produkt (aktualisiert)

| Feld | Wert |
|------|------|
| **Produktname** | [Name] |
| **Produkttyp** | [Software / Firmware / Container Image] |
| **Alle betroffenen Versionen** | [Vollständige Versionsliste] |
| **Nicht betroffene Versionen** | [Versionen, die nicht betroffen sind] |
| **Behobene Version** | [Version mit Fix, falls bereits verfügbar] |
| **Geschätzte Nutzer-/Gerätezahl** | [Aktualisierte Schätzung] |
| **Betroffene Plattformen** | [OS, Architektur, Deployment-Typ] |

### 4. Detaillierte Schwachstellenbeschreibung

| Feld | Wert |
|------|------|
| **CVE-ID** | [CVE-YYYY-XXXXX] |
| **CWE-Klassifikation** | [CWE-XXX: Beschreibung] |
| **CVSS v3.1 Vector** | [z.B. AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H] |
| **CVSS Score** | [X.X] |
| **Schweregrad** | [CRITICAL / HIGH] |

**Technische Beschreibung:**

[Detaillierte technische Beschreibung der Schwachstelle, einschließlich:

- Betroffene Komponente / Funktion
- Art der Schwachstelle (Buffer Overflow, Injection, etc.)
- Angriffsvektor und Voraussetzungen
- Auswirkung bei erfolgreicher Ausnutzung]

**Ausnutzungsszenarien:**

[Beschreibung bekannter oder möglicher Ausnutzungsszenarien]

### 5. Aktive Ausnutzung

| Feld | Wert |
|------|------|
| **Aktive Ausnutzung bestätigt** | [Ja / Nein / Verdacht] |
| **Art der Ausnutzung** | [z.B. Targeted Attack, Mass Exploitation] |
| **Quelle der Information** | [Threat Intelligence, Kundenmeldung, etc.] |
| **Im KEV-Katalog** | [Ja / Nein] |
| **Bekannte Threat Actors** | [Falls bekannt] |

### 6. Auswirkungsanalyse (aktualisiert)

| Auswirkung | Bewertung | Details |
|-----------|-----------|---------|
| **Vertraulichkeit** | [Hoch / Mittel / Niedrig] | [Welche Daten sind betroffen] |
| **Integrität** | [Hoch / Mittel / Niedrig] | [Welche Manipulationen möglich] |
| **Verfügbarkeit** | [Hoch / Mittel / Niedrig] | [Welche Ausfälle möglich] |
| **Personenbezogene Daten** | [Ja / Nein] | [Art der Daten] |
| **Physische Sicherheit** | [Ja / Nein] | [Falls Firmware/IoT] |

### 7. Ergriffene Maßnahmen

| Maßnahme | Status | Datum |
|----------|--------|-------|
| Schwachstelle analysiert | ✅ Abgeschlossen | [Datum] |
| Workaround bereitgestellt | [✅/🔧/❌] | [Datum] |
| Patch entwickelt | [✅/🔧/❌] | [Datum] |
| Patch getestet | [✅/🔧/❌] | [Datum] |
| Patch veröffentlicht | [✅/🔧/❌] | [Datum] |
| Nutzer benachrichtigt | [✅/🔧/❌] | [Datum] |
| SBOM aktualisiert | [✅/🔧/❌] | [Datum] |

### 8. Empfohlene Maßnahmen für Nutzer

[Klare Handlungsanweisungen für betroffene Nutzer, z.B.:

- Update auf Version X.Y.Z
- Workaround bis zum Patch
- Konfigurationsänderung]

### 9. Nächste Schritte

- [ ] Abschlussbericht (≤ 14 Tage, [geplantes Datum])
- [ ] Weitere Patches (falls nötig)
- [ ] Monitoring der Ausnutzungslage

---

**Hinweis:** Diese Meldung wird innerhalb von 14 Tagen durch einen Abschlussbericht ergänzt.
