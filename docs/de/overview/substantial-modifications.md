# Wesentliche Änderungen (Art. 20)

## Übersicht

Eine **wesentliche Änderung** (substantial modification) an einem Produkt mit digitalen Elementen kann dazu führen, dass die Person, die die Änderung vornimmt, als neuer **Hersteller** gilt und damit die vollen Herstellerpflichten nach Art. 10 übernehmen muss. Art. 20 CRA definiert, wann eine Änderung als „wesentlich" gilt und welche Konsequenzen daraus folgen.

::: info RECHTSGRUNDLAGE
**Art. 20 CRA:** *Jede natürliche oder juristische Person, die eine wesentliche Änderung an einem bereits in Verkehr gebrachten Produkt mit digitalen Elementen vornimmt, gilt als Hersteller im Sinne dieser Verordnung.*

**Art. 3 Nr. 31 CRA:** Definition der wesentlichen Änderung.
:::

## Definition: Wesentliche Änderung

Eine Änderung gilt als **wesentlich**, wenn alle folgenden Bedingungen erfüllt sind:

1. Die Änderung betrifft die **Cybersicherheit** des Produkts
2. Die Änderung geht über die vom **ursprünglichen Hersteller** vorgesehenen Wartungs- und Sicherheitsupdates hinaus
3. Die Änderung führt dazu, dass die vorhandene **Konformitätsbewertung** nicht mehr gültig ist

## Entscheidungsbaum

```
Wurde das Produkt nach dem Inverkehrbringen verändert?
├── Nein → Keine Auswirkung
└── Ja → Betrifft die Änderung die Cybersicherheit?
    ├── Nein → Keine wesentliche Änderung
    └── Ja → Geht die Änderung über vorgesehene Updates hinaus?
        ├── Nein → Keine wesentliche Änderung (reguläres Update)
        └── Ja → Ist die bestehende Konformitätsbewertung dadurch ungültig?
            ├── Nein → Keine wesentliche Änderung
            └── Ja → WESENTLICHE ÄNDERUNG
                → Person, die die Änderung vornimmt, wird zum Hersteller
```

## Beispiele

### Keine wesentliche Änderung

- Sicherheitspatches und Bugfixes des Herstellers
- Konfigurationsänderungen im Rahmen der vorgesehenen Einstellungen
- Update einer Abhängigkeit auf eine Patch-Version (z.B. 1.2.3 → 1.2.4)
- Anpassung von Deployment-Parametern
- Sprachpakete oder Lokalisierung

### Wesentliche Änderung (potenziell)

- **Änderung des Authentifizierungsmechanismus** (z.B. Passwort → OAuth → eigene Implementierung)
- **Entfernung von Sicherheitsfunktionen** (z.B. Deaktivierung der Verschlüsselung)
- **Änderung der Netzwerkarchitektur**, die neue Angriffsvektoren eröffnet
- **Integration neuer sicherheitsrelevanter Komponenten** (z.B. eigener Crypto-Stack)
- **Portierung auf neue Plattform** mit anderem Sicherheitsmodell
- **Major-Version-Upgrade einer Kernabhängigkeit** mit geänderten Sicherheitseigenschaften

## Konsequenzen einer wesentlichen Änderung

Wer eine wesentliche Änderung vornimmt, muss:

### 1. Herstellerpflichten übernehmen (Art. 10)

- Cybersecurity-Risikobewertung durchführen (für den geänderten Teil)
- Technische Dokumentation erstellen/aktualisieren (Annex VII)
- Schwachstellenbehandlung sicherstellen (Annex I Teil II)
- Support-Zeitraum definieren

### 2. Neue Konformitätsbewertung durchführen

- [Produktklassifizierung](/de/conformity/product-classification) durchführen (auch für den geänderten Teil)
- Entsprechendes Konformitätsbewertungsverfahren wählen
  - [Modul A](/de/conformity/self-assessment) für Standard
  - [Modul B+C](/de/conformity/module-bc) für Klasse I/II
  - [Modul H](/de/conformity/module-h) für Klasse II
  - [EUCC](/de/conformity/eucc) für Kritisch

### 3. Neue EU-Konformitätserklärung

- [EU-Konformitätserklärung](/de/conformity/eu-declaration) für das geänderte Produkt ausstellen
- CE-Kennzeichnung anbringen (unter eigenem Namen)

### 4. ENISA-Meldepflichten

- Schwachstellen im geänderten Produkt melden (Art. 14)
- 24h/72h/14d Fristen einhalten

## Prozess bei BAUER GROUP

### Prüfung vor jeder Änderung an Drittprodukt

| Schritt | Aktion | Verantwortlich |
|---------|--------|---------------|
| 1 | Änderung dokumentieren (Was wird geändert?) | Entwicklungsteam |
| 2 | Cybersecurity-Relevanz prüfen | ISB |
| 3 | Prüfen, ob Änderung vom Hersteller vorgesehen | Produktmanagement |
| 4 | Prüfen, ob Konformitätsbewertung noch gültig | ISB |
| 5 | Entscheidung: Wesentliche Änderung ja/nein | ISB + Geschäftsleitung |
| 6 | Dokumentation der Entscheidung (mit Begründung) | ISB |

### Bei „Ja – wesentliche Änderung"

| Schritt | Aktion |
|---------|--------|
| 7 | Risikobewertung durchführen ([Template](/de/templates/risk-assessment)) |
| 8 | Produktklassifizierung durchführen |
| 9 | Konformitätsbewertung durchführen |
| 10 | Technische Dokumentation erstellen |
| 11 | EU-Konformitätserklärung ausstellen |
| 12 | Support-Zeitraum festlegen |

## Dokumentation

Jede Änderungsentscheidung wird dokumentiert:

1. **Beschreibung der Änderung** – Was wurde geändert, warum
2. **Cybersecurity-Analyse** – Welche Auswirkungen auf die Sicherheit
3. **Wesentlichkeitsbewertung** – Entscheidung mit Begründung
4. **Maßnahmen** – Welche Schritte wurden eingeleitet (oder warum keine nötig)
5. **Verantwortlicher und Datum**

::: warning DOKUMENTATIONSPFLICHT
Auch die Entscheidung, dass eine Änderung **nicht** wesentlich ist, muss dokumentiert werden. Im Streitfall muss BAUER GROUP nachweisen können, dass die Prüfung stattgefunden hat.
:::
