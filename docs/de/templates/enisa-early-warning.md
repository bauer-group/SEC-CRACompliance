# A.3 ENISA Frühwarnung (24h)

::: danger ZEITKRITISCH
Diese Meldung muss innerhalb von **24 Stunden** nach Kenntnisnahme einer aktiv ausgenutzten Schwachstelle oder eines schweren Sicherheitsvorfalls an ENISA / die zuständige nationale CSIRT gesendet werden.
:::

## A.3.1 Vorlage: Frühwarnung gemäß Art. 14 Abs. 2 lit. a CRA

---

### 1. Hersteller-Identifikation

| Feld | Wert |
|------|------|
| **Unternehmen** | BAUER GROUP |
| **Anschrift** | [Vollständige Postanschrift] |
| **Kontaktperson** | [Name, Funktion] |
| **E-Mail** | <disclosure@cra.docs.bauer-group.com> |
| **Telefon** | [Telefonnummer] |
| **Meldedatum** | [YYYY-MM-DD HH:MM UTC] |
| **Melde-Referenz** | [EW-YYYY-NNN] |

### 2. Art der Meldung

- [ ] Aktiv ausgenutzte Schwachstelle (Art. 14 Abs. 1)
- [ ] Schwerer Sicherheitsvorfall (Art. 14 Abs. 3)

### 3. Betroffenes Produkt

| Feld | Wert |
|------|------|
| **Produktname** | [Name] |
| **Produkttyp** | [Software / Firmware / Container Image] |
| **Betroffene Versionen** | [v1.0.0 – v1.3.2] |
| **CRA-Produktkategorie** | [Standard / Klasse I / Klasse II / Kritisch] |
| **Geschätzte Nutzerzahl** | [Anzahl / Schätzung] |
| **Mitgliedstaaten der Bereitstellung** | [Auflistung der EU-Mitgliedstaaten, in denen das Produkt bereitgestellt wurde] |

### 4. Schwachstelle / Vorfall

| Feld | Wert |
|------|------|
| **CVE-ID** | [CVE-YYYY-XXXXX oder „noch nicht zugewiesen"] |
| **CVSS Score** | [X.X] |
| **Schweregrad** | [CRITICAL / HIGH] |
| **Beschreibung** | [Kurzbeschreibung der Schwachstelle/des Vorfalls] |
| **Angriffsvektor** | [Netzwerk / Lokal / Physisch] |
| **Aktive Ausnutzung bestätigt** | [Ja / Verdacht / Unbekannt] |
| **Quelle der Erkennung** | [Eigene Erkennung / Externe Meldung / Threat Intelligence / CVE-DB] |

### 5. Erste Einschätzung der Auswirkung

| Feld | Wert |
|------|------|
| **Vertraulichkeit** | [Hoch / Mittel / Niedrig / Keine] |
| **Integrität** | [Hoch / Mittel / Niedrig / Keine] |
| **Verfügbarkeit** | [Hoch / Mittel / Niedrig / Keine] |
| **Personenbezogene Daten betroffen** | [Ja / Nein / Unklar] |

### 6. Sofortmaßnahmen

| Maßnahme | Status | Zeitrahmen |
|----------|--------|------------|
| [z.B. Workaround veröffentlicht] | [Umgesetzt / Geplant] | [Zeitpunkt] |
| [z.B. Patch in Entwicklung] | [Umgesetzt / Geplant] | [ETA] |
| [z.B. Nutzerbenachrichtigung] | [Umgesetzt / Geplant] | [Zeitpunkt] |

### 7. Nächste Schritte

- [ ] Detaillierte Analyse (innerhalb 72h)
- [ ] Patch-Entwicklung (ETA: [Datum])
- [ ] Nutzerbenachrichtigung (ETA: [Datum])
- [ ] Folgemeldung an ENISA (≤ 72h)

---

**Hinweis:** Diese Frühwarnung wird innerhalb von 72 Stunden durch eine detaillierte Schwachstellenmeldung ergänzt.
