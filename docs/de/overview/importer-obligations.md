# Pflichten der Importeure (Art. 15)

## Übersicht

Importeure sind Wirtschaftsakteure, die ein Produkt mit digitalen Elementen eines Drittlands-Herstellers (außerhalb der EU) auf dem Unionsmarkt in Verkehr bringen. Der CRA legt ihnen spezifische Sorgfaltspflichten auf, um sicherzustellen, dass nur konforme Produkte den EU-Markt erreichen.

::: info RECHTSGRUNDLAGE
**Art. 15 CRA:** Der Importeur bringt nur Produkte in Verkehr, die die wesentlichen Anforderungen aus Annex I erfüllen und deren Hersteller die Konformitätsbewertung ordnungsgemäß durchgeführt hat.

**Art. 3 Nr. 21 CRA:** *„Importeur" ist jede in der Union ansässige natürliche oder juristische Person, die ein Produkt mit digitalen Elementen, das den Namen oder die Handelsmarke einer außerhalb der Union ansässigen Person trägt, in Verkehr bringt.*
:::

## Wann ist BAUER GROUP Importeur?

BAUER GROUP agiert als Importeur, wenn:

- Software oder Hardware von einem **Nicht-EU-Hersteller** eingekauft und unter dessen Marke in der EU vertrieben wird
- Firmware-Komponenten von außerhalb der EU bezogen und in eigene Produkte integriert werden, wobei die Komponente eigenständig als Produkt qualifiziert
- Ein SaaS-Produkt eines Drittlands als On-Premise-Software in der EU vertrieben wird

::: warning ABGRENZUNG
Wenn BAUER GROUP ein Drittlands-Produkt unter **eigenem Namen oder Marke** in Verkehr bringt, gilt BAUER GROUP als **Hersteller** (nicht als Importeur) und unterliegt den vollen Herstellerpflichten nach Art. 10.
:::

## Pflichten im Detail

### 1. Konformitätsprüfung vor Inverkehrbringen (Art. 15 Abs. 1)

Vor dem Inverkehrbringen muss der Importeur sicherstellen:

- [ ] Hersteller hat die **Konformitätsbewertung** ordnungsgemäß durchgeführt
- [ ] Hersteller hat die **technische Dokumentation** gemäß Annex VII erstellt
- [ ] Produkt trägt die **CE-Kennzeichnung**
- [ ] Produkt wird von der **EU-Konformitätserklärung** begleitet (oder vereinfachte Version mit URL)
- [ ] Hersteller hat Kontaktdaten am Produkt / in der Dokumentation angegeben
- [ ] Produkt hat eine **eindeutige Identifikation** (Typ, Charge, Seriennummer)

### 2. Eigene Kennzeichnung (Art. 15 Abs. 2)

Der Importeur muss am Produkt oder der Verpackung angeben:

- Seinen **Namen / Handelsnamen / eingetragene Handelsmarke**
- Seine **Postanschrift und E-Mail**

Bei Software: In der Dokumentation, der Benutzeroberfläche oder dem Repository.

### 3. Lagerungs- und Transportbedingungen (Art. 15 Abs. 3)

Sicherstellen, dass Lagerung und Transport die Konformität nicht beeinträchtigen:

- Integritätsschutz von Software-Paketen (Checksummen, signierte Artefakte)
- Sichere Distributionskanäle (HTTPS, signierte Repositories)
- Keine Manipulation der Firmware/Software während der Logistikkette

### 4. Marktbeobachtung (Art. 15 Abs. 4)

Der Importeur muss:

- **Überwachen**, ob das Produkt weiterhin konform ist
- Bei Verdacht auf Nicht-Konformität: Korrekturmaßnahmen ergreifen oder Vertrieb einstellen
- Bei ernstem Risiko: Hersteller und Marktüberwachungsbehörden informieren

### 5. Dokumentation (Art. 15 Abs. 5)

- **EU-Konformitätserklärung** muss dem Importeur vorliegen (Kopie)
- **Technische Dokumentation** muss auf Anfrage den Behörden bereitgestellt werden können
- Aufbewahrungsfrist: **10 Jahre** nach Inverkehrbringen

### 6. Kooperation mit Behörden (Art. 15 Abs. 6)

Auf Anfrage der Marktüberwachungsbehörden muss der Importeur:

- Alle erforderlichen Informationen und Unterlagen bereitstellen
- In der Sprache der Behörde (oder einer von der Behörde akzeptierten Sprache)
- Bei der Beseitigung von Risiken kooperieren

### 7. Meldepflichten (Art. 15 Abs. 7)

Bei Kenntnis einer **aktiv ausgenutzten Schwachstelle** oder eines **schwerwiegenden Sicherheitsvorfalls**:

- Hersteller **unverzüglich** informieren
- Falls Hersteller nicht reagiert: Selbst bei ENISA und der nationalen CSIRT-Stelle melden

## Prüfcheckliste für Importeure

### Vor dem Inverkehrbringen

- [ ] Hersteller identifiziert und verifiziert (Nicht-EU)
- [ ] CE-Kennzeichnung vorhanden
- [ ] EU-Konformitätserklärung erhalten und geprüft
- [ ] Konformitätsbewertung des Herstellers plausibel (Modul je nach Kategorie)
- [ ] Technische Dokumentation verfügbar oder abrufbar
- [ ] Produktidentifikation vorhanden (Typ, Version, Seriennummer)
- [ ] Eigene Kontaktdaten am Produkt / in der Dokumentation angebracht
- [ ] SBOM vom Hersteller erhalten (Art. 13 Abs. 23)
- [ ] Support-Zeitraum definiert und kommuniziert

### Laufend

- [ ] Marktbeobachtung aktiv (Schwachstellenmeldungen des Herstellers verfolgen)
- [ ] Distributionskanäle integritätsgesichert
- [ ] Kooperationsbereitschaft mit Behörden sichergestellt
- [ ] Dokumentation archiviert (10 Jahre)

## Haftung und Sanktionen

| Verstoß | Sanktion |
|---------|---------|
| Nicht-konforme Produkte in Verkehr bringen | Bis zu 15 Mio. EUR oder 2,5% des weltweiten Jahresumsatzes |
| Fehlende Dokumentation / Kennzeichnung | Bis zu 10 Mio. EUR oder 2% des Jahresumsatzes |
| Falsche / unvollständige Angaben an Behörden | Bis zu 5 Mio. EUR oder 1% des Jahresumsatzes |

→ Details: [Sanktionen](/de/overview/penalties)
