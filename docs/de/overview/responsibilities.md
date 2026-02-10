# 1.2 Rollen & Verantwortlichkeiten

## 1.2.1 CRA-Rollen gemäß Verordnung

Der CRA definiert drei Wirtschaftsakteure mit jeweils eigenen Pflichten:

### Hersteller (Art. 10 CRA)

Der Hersteller trägt die Hauptverantwortung für die CRA-Konformität. Als Hersteller gilt, wer ein Produkt mit digitalen Elementen entwickelt oder entwickeln lässt und unter eigenem Namen oder eigener Marke vermarktet.

**Pflichten:**

- Konformität mit Annex I sicherstellen
- Cybersecurity-Risikobewertung durchführen
- Technische Dokumentation erstellen (Annex VII)
- Konformitätsbewertung durchführen
- EU-Konformitätserklärung ausstellen (Annex V)
- CE-Kennzeichnung anbringen
- Schwachstellen während des Support-Zeitraums behandeln
- Meldepflichten erfüllen (Art. 14)
- SBOM erstellen und bereithalten

### Importeur (Art. 13 CRA)

Importeure bringen Produkte von Herstellern außerhalb der EU auf den EU-Markt.

**Pflichten:**

- Sicherstellen, dass der Hersteller die Pflichten erfüllt hat
- Konformitätserklärung und technische Dokumentation prüfen
- CE-Kennzeichnung und Kontaktdaten des Herstellers prüfen

### Händler (Art. 14 CRA)

Händler machen Produkte auf dem Markt verfügbar, ohne sie herzustellen oder zu importieren.

**Pflichten:**

- Sorgfaltspflicht: CE-Kennzeichnung und Konformitätserklärung prüfen
- Bei Kenntnis von Nichtkonformität: Produkt nicht weiter bereitstellen

### Bevollmächtigter / EU Authorized Representative (Art. 16 CRA)

::: warning PFLICHT FÜR NICHT-EU-HERSTELLER
Hersteller mit Sitz **außerhalb der EU**, die Produkte mit digitalen Elementen auf dem EU-Markt bereitstellen, **müssen** einen Bevollmächtigten in der EU benennen. Ohne Bevollmächtigten darf das Produkt nicht auf dem EU-Markt bereitgestellt werden.
:::

**Rechtsgrundlage:**

> *„Der Hersteller kann mittels einer schriftlichen Vollmacht einen Bevollmächtigten benennen. Der Bevollmächtigte führt die Aufgaben aus, die in der mit dem Hersteller vereinbarten Vollmacht festgelegt sind."*
> — Art. 16 Abs. 1 CRA

**Wann ist ein Bevollmächtigter erforderlich?**

| Konstellation | Bevollmächtigter erforderlich? |
|---------------|:-----------------------------:|
| Hersteller mit Sitz in der EU | Nein |
| Hersteller mit Sitz außerhalb der EU, Verkauf in EU | **Ja** |
| Nicht-EU-Hersteller mit EU-Tochtergesellschaft als Importeur | Ja (oder Importeur übernimmt Pflichten) |
| Open-Source-Steward (Art. 24) | Sonderregelung |

**Pflichten des Bevollmächtigten (Art. 16 Abs. 2):**

1. **Konformitätsdokumentation bereithalten** – EU-Konformitätserklärung und technische Dokumentation mindestens 10 Jahre für Marktüberwachungsbehörden bereithalten
2. **Informationspflicht** – Auf begründetes Verlangen den zuständigen Behörden alle erforderlichen Informationen und Unterlagen zum Nachweis der Konformität vorlegen
3. **Kooperationspflicht** – Mit den Marktüberwachungsbehörden bei Maßnahmen zur Beseitigung von Risiken kooperieren
4. **Meldepflicht bei Nichtkonformität** – Den Hersteller unverzüglich informieren, wenn der Bevollmächtigte Grund zur Annahme hat, dass das Produkt nicht konform ist
5. **Beendigung der Vollmacht** – Bei Beendigung des Mandats verbleiben die Pflichten für bereits in Verkehr gebrachte Produkte bestehen

**Anforderungen an die schriftliche Vollmacht:**

Die Vollmacht muss mindestens folgende Aufgaben umfassen:

| Aufgabe | Beschreibung |
|---------|-------------|
| Dokumentationsverwahrung | Technische Dokumentation und EU-Konformitätserklärung 10 Jahre aufbewahren |
| Behördenkontakt | Als Ansprechpartner für Marktüberwachungsbehörden fungieren |
| Informationsbereitstellung | Kopie der Vollmacht auf Verlangen vorlegen |
| Kooperation | An Korrekturmaßnahmen und Rückrufen mitwirken |

**Relevanz für die BAUER GROUP:**

| Szenario | Handlungsbedarf |
|----------|----------------|
| BAUER GROUP als EU-Hersteller | Kein Bevollmächtigter nötig – Herstellerpflichten gelten direkt |
| BAUER GROUP beschafft von Nicht-EU-Herstellern | Prüfpflicht: Bevollmächtigter des Lieferanten vorhanden? → [6.3 Third-Party Assessment](/de/supply-chain/third-party-assessment) |
| Nicht-EU-Tochtergesellschaft verkauft in EU | Bevollmächtigter in der EU **muss** benannt werden |
| BAUER GROUP agiert als Importeur | Importeurspflichten nach Art. 13 gelten (CE + Doku prüfen) |

::: tip PRAXISHINWEIS
Bei der Beschaffung von Produkten mit digitalen Elementen von Nicht-EU-Herstellern ist im Rahmen des Third-Party Assessment (→ [6.3](/de/supply-chain/third-party-assessment)) zu prüfen, ob der Lieferant einen EU-Bevollmächtigten benannt hat. Dies ist eine **Voraussetzung** für das legale Inverkehrbringen auf dem EU-Markt.
:::

## 1.2.2 Interne Rollenverteilung

| Rolle | Verantwortung | CRA-Bezug |
|-------|---------------|-----------|
| **Security Lead** | Gesamtverantwortung CRA-Compliance, ENISA-Meldungen, Incident Response | Art. 10, Art. 14 |
| **Product Owner** | Produktklassifizierung, Support-Zeitraum, Nutzerinformation | Art. 10 Abs. 16, Annex II |
| **DevOps Lead** | SBOM-Generierung, Signing, CI/CD-Pipeline-Pflege | Art. 10 Abs. 12, Art. 13 Abs. 23 |
| **Development Team** | Security-by-Design, Schwachstellenbehebung, Code-Reviews | Art. 10 Abs. 1 |
| **QA / Release Manager** | Konformitätsbewertung, Release-Freigabe | Annex VII |
| **Management** | Ressourcenbereitstellung, Eskalationsentscheidungen | Art. 10 Abs. 2 |

## 1.2.3 RACI-Matrix

| Aktivität | Security Lead | Product Owner | DevOps | Dev Team | Management |
|-----------|:---:|:---:|:---:|:---:|:---:|
| CRA-Risikobewertung | **R** | C | I | C | **A** |
| SBOM-Generierung | I | I | **R** | C | **A** |
| CVE-Monitoring | **R** | I | C | I | **A** |
| Patch-Management | C | I | C | **R** | **A** |
| Incident Response | **R** | C | C | C | **A** |
| ENISA-Meldung | **R** | I | I | I | **A** |
| Technische Dokumentation | C | **R** | C | C | **A** |
| EU-Konformitätserklärung | C | **R** | I | I | **A** |
| Support-Period-Definition | C | **R** | I | I | **A** |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*
