# 1.11 Sanktionen (Art. 64)

## 1.11.1 Übersicht

Der CRA sieht erhebliche Sanktionen für Verstöße vor. Die Bußgelder orientieren sich an der DSGVO-Systematik und sind nach Schwere des Verstoßes gestaffelt. Die Festlegung und Verhängung obliegt den nationalen Marktüberwachungsbehörden der Mitgliedstaaten.

::: info RECHTSGRUNDLAGE
**Art. 64 CRA:** Die Mitgliedstaaten erlassen Vorschriften über Sanktionen und ergreifen alle erforderlichen Maßnahmen, um deren Durchsetzung zu gewährleisten. Die Sanktionen müssen wirksam, verhältnismäßig und abschreckend sein.
:::

## 1.11.2 Bußgeldrahmen

### Stufe 1 – Schwerwiegende Verstöße (Art. 64 Abs. 2)

**Bis zu 15.000.000 EUR oder 2,5% des weltweiten Jahresumsatzes** (der höhere Betrag gilt)

Verstöße gegen:

- **Art. 10** – Herstellerpflichten (wesentliche Anforderungen, Konformitätsbewertung, technische Dokumentation)
- **Art. 13** – Informationspflichten (SBOM, Support-Zeitraum, Kontaktdaten)
- **Art. 14** – Meldepflichten (ENISA 24h/72h/14d)
- **Annex I** – Wesentliche Cybersicherheitsanforderungen
- **Annex VII** – Technische Dokumentation

### Stufe 2 – Sonstige Verstöße (Art. 64 Abs. 3)

**Bis zu 10.000.000 EUR oder 2% des weltweiten Jahresumsatzes**

Verstöße gegen:

- **Art. 15** – [Importeur-Pflichten](/de/overview/importer-obligations)
- **Art. 17** – [Händler-Pflichten](/de/overview/distributor-obligations)
- **Art. 20** – [Wesentliche Änderungen](/de/overview/substantial-modifications) (ohne Herstellerpflichten zu übernehmen)
- **Art. 24-28** – Konformitätsbewertung (formal nicht durchgeführt)

### Stufe 3 – Falsche Angaben (Art. 64 Abs. 4)

**Bis zu 5.000.000 EUR oder 1% des weltweiten Jahresumsatzes**

- Falsche, unvollständige oder irreführende Angaben an Behörden
- Verweigerung der Kooperation mit Marktüberwachungsbehörden
- Behinderung von Inspektionen

### Sonderregelung: OSS-Stewards (Art. 64 Abs. 5)

**Bis zu 5.000.000 EUR oder 1% des weltweiten Jahresumsatzes**

- Geringere Sanktionen für [Open-Source-Software-Stewards](/de/overview/open-source-steward)
- Berücksichtigung des nicht-kommerziellen Charakters

## 1.11.3 Übersichtstabelle

| Verstoß-Kategorie | Maximum | Typische Auslöser |
|-------------------|---------|-------------------|
| **Stufe 1** | 15 Mio. EUR / 2,5% | Kein SBOM, keine Konformitätsbewertung, keine ENISA-Meldung, bekannte Schwachstellen nicht behoben |
| **Stufe 2** | 10 Mio. EUR / 2% | Fehlende CE-Kennzeichnung, Importeur ohne Prüfung, keine DoC |
| **Stufe 3** | 5 Mio. EUR / 1% | Falsche Angaben an Behörden, Kooperationsverweigerung |

## 1.11.4 Bemessungskriterien

Bei der Festlegung der Bußgeldhöhe berücksichtigen die Behörden:

### Verschärfende Faktoren

- **Schwere des Verstoßes** – Wie gravierend waren die Auswirkungen?
- **Dauer** – Wie lange bestand der Verstoß?
- **Vorsatz** – War der Verstoß absichtlich?
- **Wiederholung** – Gab es frühere Verstöße?
- **Betroffene Nutzer** – Wie viele Nutzer waren betroffen?
- **Schaden** – Welcher tatsächliche Schaden ist eingetreten?

### Mildernde Faktoren

- **Kooperation** – Aktive Zusammenarbeit mit Behörden
- **Selbstanzeige** – Freiwillige Meldung des Verstoßes
- **Korrekturmaßnahmen** – Schnelle Behebung des Problems
- **Compliance-Programm** – Nachweisbares Compliance-Management
- **Erstverstoß** – Keine vorherigen Verstöße
- **Unternehmensgröße** – Verhältnismäßigkeit für KMU

## 1.11.5 Vergleich mit anderen Regulierungen

| Regulierung | Maximales Bußgeld | Berechnung |
|-------------|-------------------|------------|
| **CRA** | 15 Mio. EUR / 2,5% | Pro Verstoß |
| **DSGVO** | 20 Mio. EUR / 4% | Pro Verstoß |
| **NIS2** | 10 Mio. EUR / 2% | Pro Verstoß |
| **AI Act** | 35 Mio. EUR / 7% | Pro Verstoß |

## 1.11.6 Risikominimierung

### Compliance als Schutz

Ein dokumentiertes und gelebtes Compliance-Programm reduziert das Bußgeldrisiko erheblich. Die folgenden Maßnahmen dienen als mildernde Faktoren:

1. **Vollständige Dokumentation** – Dieses Handbuch und alle referenzierten Prozesse
2. **Proaktive Meldung** – ENISA-Fristen einhalten ([Meldeprozess](/de/incident-response/enisa-reporting))
3. **Aktives Schwachstellenmanagement** – CVE-Monitoring, schnelle Patches ([Vulnerability Management](/de/vulnerability-management/))
4. **Regelmäßige Audits** – Interne Überprüfung der Compliance
5. **Schulungen** – Mitarbeiter kennen die CRA-Anforderungen
6. **Kooperationsbereitschaft** – Dokumentierter Prozess für Behördenanfragen ([Marktüberwachung](/de/overview/market-surveillance))

### Prioritäre Compliance-Bereiche

Die höchsten Bußgeldrisiken bestehen bei:

| Priorität | Bereich | Risiko |
|-----------|---------|--------|
| **1** | Keine ENISA-Meldung bei aktiv ausgenutzter Schwachstelle | Stufe 1 |
| **2** | Bekannte ausnutzbare Schwachstellen nicht behoben | Stufe 1 |
| **3** | Kein SBOM erstellt (Art. 13 Abs. 23) | Stufe 1 |
| **4** | Keine Konformitätsbewertung durchgeführt | Stufe 1 |
| **5** | Keine technische Dokumentation (Annex VII) | Stufe 1 |
| **6** | Keine Kooperation mit Behörden | Stufe 3 |

::: warning ZEITRAHMEN
Die Sanktionsvorschriften gelten ab dem **11.12.2027** (vollständige Anwendbarkeit). Die Meldepflichten nach Art. 14 gelten bereits ab dem **11.09.2026**.
:::
