# Identifizierung der Wirtschaftsakteure (Art. 21)

## Übersicht

Art. 21 CRA verpflichtet alle Wirtschaftsakteure, ihre Lieferanten und Abnehmer in der Lieferkette identifizieren zu können. Auf Anfrage der Marktüberwachungsbehörden müssen diese Informationen bereitgestellt werden. Ziel ist die lückenlose Rückverfolgbarkeit von Produkten mit digitalen Elementen über die gesamte Lieferkette.

::: info RECHTSGRUNDLAGE
**Art. 21 CRA:** *„Die Wirtschaftsakteure benennen den Marktüberwachungsbehörden auf Verlangen die folgenden Angaben:*

- *jeden Wirtschaftsakteur, der ihnen ein Produkt geliefert hat;*
- *jeden Wirtschaftsakteur, dem sie ein Produkt geliefert haben.*

*Die Wirtschaftsakteure müssen diese Informationen für einen Zeitraum von **10 Jahren** nach der Lieferung vorlegen können."*
:::

## Betroffene Wirtschaftsakteure

Die Identifizierungspflicht gilt für alle Rollen in der Lieferkette:

| Wirtschaftsakteur | Identifizierungspflicht | Referenz |
|-------------------|------------------------|----------|
| Hersteller | Abnehmer (Importeure, Händler) | Art. 10, Art. 21 |
| Importeur | Hersteller (Lieferant) + Händler (Abnehmer) | Art. 15, Art. 21 |
| Händler | Importeur/Hersteller (Lieferant) + Kunden (Abnehmer) | Art. 17, Art. 21 |
| Bevollmächtigter | Hersteller (Auftraggeber) + Abnehmer | Art. 16, Art. 21 |

## Anforderungen an die Dokumentation

### Mindestinhalte der Aufzeichnungen

Für jeden CRA-relevanten Geschäftsvorgang müssen folgende Daten vorgehalten werden:

- **Identität** des Lieferanten bzw. Abnehmers (Firma, Anschrift, Kontaktdaten)
- **Produktbezeichnung** (Typ, Version, Seriennummer oder eindeutige Kennung)
- **Datum** der Lieferung bzw. des Erhalts
- **Menge** und Art der gelieferten Produkte

### Aufbewahrungsfrist

::: warning AUFBEWAHRUNGSPFLICHT
Alle Identifizierungsdaten müssen für mindestens **10 Jahre** nach dem Zeitpunkt der Lieferung aufbewahrt und auf Anfrage der Marktüberwachungsbehörden vorgelegt werden können.
:::

## Umsetzung bei BAUER GROUP

### Eingangsseite (Lieferanten)

| Maßnahme | System | Status |
|----------|--------|--------|
| Lieferantenstammdaten | ERP / Beschaffungssystem | ✅ |
| Wareneingangserfassung mit Produktzuordnung | ERP | ✅ |
| Archivierung von Beschaffungsdokumenten | DMS | ✅ |
| Aufbewahrungsfrist ≥ 10 Jahre konfiguriert | DMS / ERP | ⚠️ Zu prüfen |

### Ausgangsseite (Abnehmer)

| Maßnahme | System | Status |
|----------|--------|--------|
| Kundenstammdaten | ERP / CRM | ✅ |
| Auftragserfassung und Lieferdokumentation | ERP | ✅ |
| Archivierung von Vertriebsdokumenten | DMS | ✅ |
| Aufbewahrungsfrist ≥ 10 Jahre konfiguriert | DMS / ERP | ⚠️ Zu prüfen |

### Prozess bei Behördenanfrage

1. Anfrage der Marktüberwachungsbehörde geht ein
2. Weiterleitung an ISB und zuständige Fachabteilung
3. Identifizierung des betroffenen Produkts und der relevanten Geschäftsvorgänge
4. Zusammenstellung der Lieferanten- und Abnehmerdaten aus ERP/DMS
5. Übermittlung an die Behörde innerhalb der gesetzten Frist

## Checkliste

- [ ] ERP-Aufbewahrungsfristen für Lieferanten- und Kundendaten auf ≥ 10 Jahre geprüft
- [ ] DMS-Archivierungsrichtlinien für Beschaffungs- und Vertriebsdokumente aktualisiert
- [ ] Prozess für Behördenanfragen zur Wirtschaftsakteur-Identifizierung dokumentiert
- [ ] Zuständigkeiten für die Beantwortung von Anfragen nach Art. 21 definiert
- [ ] Regelmäßige Prüfung der Datenqualität in den Stammdatensystemen

## Querverweise

- [Supply-Chain-Sicherheit](/de/supply-chain/) -- Gesamtüberblick über die Lieferkettensicherheit
- [Marktüberwachung](/de/overview/market-surveillance) -- Kooperation mit Behörden und Reaktionsprozesse
- [Pflichten der Importeure](/de/overview/importer-obligations) -- Spezifische Pflichten bei Nicht-EU-Lieferanten
- [Pflichten der Händler](/de/overview/distributor-obligations) -- Sorgfaltspflichten bei der Weiterverteilung
