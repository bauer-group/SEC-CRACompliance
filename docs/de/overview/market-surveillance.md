# 1.10 Marktüberwachung (Art. 52–58)

## 1.10.1 Übersicht

Die Marktüberwachung stellt sicher, dass auf dem EU-Markt befindliche Produkte die CRA-Anforderungen erfüllen. Die Verordnung (EU) 2019/1020 (Marktüberwachungsverordnung) findet Anwendung. Hersteller müssen auf Anfragen der Marktüberwachungsbehörden reagieren und bei Korrekturmaßnahmen kooperieren.

::: info RECHTSGRUNDLAGE
**Art. 52 CRA:** Die Verordnung (EU) 2019/1020 gilt für Produkte mit digitalen Elementen, die unter den CRA fallen.

**Art. 53-58 CRA:** Spezifische Verfahren für Korrekturmaßnahmen, Schutzklausel, formale Nicht-Konformität und Unionsschutzklausel.
:::

## 1.10.2 Zuständige Behörden

| Land | Zuständige Marktüberwachungsbehörde |
|------|-------------------------------------|
| Deutschland | Bundesnetzagentur (BNetzA) / BSI |
| Österreich | Fernmeldebüro / RTR |
| EU-weit | Koordination durch die EU-Kommission |

*Die genaue Zuständigkeitsverteilung wird von den Mitgliedstaaten bis zum 11.06.2026 festgelegt.*

## 1.10.3 Befugnisse der Marktüberwachungsbehörden

### Informationsanfragen (Art. 52)

Behörden können vom Hersteller verlangen:

- Technische Dokumentation (Annex VII) – typische Frist: **10 Arbeitstage**
- EU-Konformitätserklärung
- SBOM
- Ergebnisse der Konformitätsbewertung
- Quellcode oder Zugang zum Quellcode (in begründeten Fällen)

### Produktprüfung

Behörden können:

- Produkte vom Markt erwerben und testen
- Labortests und Sicherheitsprüfungen anordnen
- Penetrationstests veranlassen
- SBOM gegen bekannte Schwachstellen prüfen

### Korrekturmaßnahmen anordnen

- Warnung an Nutzer
- Rückruf des Produkts vom Markt
- Vertriebsstopp
- Vernichtung des Produkts (in schweren Fällen)

## 1.10.4 Verfahren

### Art. 53 – Korrekturmaßnahmen auf nationaler Ebene

```
Behörde stellt Nicht-Konformität fest
    │
    ├── Hersteller informiert (mit Fristsetzung)
    │
    ├── Hersteller hat [angemessene Frist] für Korrektur
    │   ├── Korrektur erfolgt → Verfahren beendet
    │   └── Korrektur nicht erfolgt → Maßnahme angeordnet
    │       ├── Vertriebsstopp
    │       ├── Rückruf
    │       └── EU-Kommission + andere Mitgliedstaaten informiert
    │
    └── Bei ernster Gefahr → Sofortmaßnahmen (ohne Frist)
```

### Art. 54 – Schutzklauselverfahren (EU-weit)

Wenn ein Mitgliedstaat Maßnahmen ergreift und andere Mitgliedstaaten betroffen sind:

1. Mitgliedstaat informiert EU-Kommission
2. Kommission prüft, ob die Maßnahme gerechtfertigt ist
3. Bei Bestätigung: Alle Mitgliedstaaten ergreifen gleiche Maßnahmen
4. Bei Ablehnung: Mitgliedstaat muss Maßnahme aufheben

### Art. 55 – Konforme Produkte mit Risiko

Auch ein **konformes** Produkt kann ein Risiko darstellen (z.B. neue Bedrohungslage). In diesem Fall:

- Behörde kann vorläufige Maßnahmen anordnen
- Hersteller muss Abhilfe schaffen (Patch, Warnung, Rückruf)
- Kommission kann Implementing Acts erlassen

### Art. 56 – Formale Nicht-Konformität

Formale Verstöße (ohne inhaltliches Risiko):

- Fehlende CE-Kennzeichnung
- CE falsch angebracht
- EU-Konformitätserklärung nicht erstellt oder fehlerhaft
- Technische Dokumentation nicht verfügbar

→ Hersteller muss **formale Konformität** herstellen
→ Bei Nichtbefolgung: Vertriebsstopp oder Rückruf

## 1.10.5 Pflichten von BAUER GROUP

### Vorbereitung auf Marktüberwachung

| Maßnahme | Beschreibung | Status |
|----------|-------------|--------|
| Dokumentationsarchiv | Alle technischen Dokumentationen abrufbar (10 Jahre) | ✅ Dieses Repository |
| SBOM-Archiv | SBOMs pro Release archiviert und signiert | ✅ [SBOM & Signierung](/de/sbom-signing/) |
| Ansprechpartner | Benannte Person für Behördenanfragen | ⚠️ Zu benennen |
| EU-Konformitätserklärungen | Für alle Produkte vorhanden | ⚠️ Produktspezifisch |
| Rückrufprozess | Dokumentierter Prozess für Produktrückrufe | ⚠️ Zu erstellen |

### Reaktionsprozess bei Behördenanfrage

| Schritt | Frist | Aktion |
|---------|-------|--------|
| 1 | Sofort | Anfrage an ISB und Geschäftsleitung weiterleiten |
| 2 | 2 Arbeitstage | Anfrage inhaltlich bewerten, zuständiges Team identifizieren |
| 3 | 5 Arbeitstage | Angeforderte Dokumentation zusammenstellen |
| 4 | 10 Arbeitstage | Dokumentation an Behörde übermitteln |
| 5 | Nach Fristsetzung | Korrekturmaßnahmen umsetzen (falls gefordert) |
| 6 | Laufend | Maßnahmen dokumentieren und Behörde informieren |

### Rückrufprozess

Falls ein Rückruf angeordnet oder freiwillig durchgeführt wird:

1. **Risikobewertung** – Schwere und Umfang des Problems
2. **Kundenbenachrichtigung** – Über alle bekannten Kanäle
3. **Patch bereitstellen** – Sicherheitsupdate veröffentlichen
4. **Behörde informieren** – Maßnahmen und Zeitplan mitteilen
5. **Dokumentation** – Alle Schritte lückenlos festhalten
6. **Nachverfolgung** – Patch-Adoption überwachen

→ Siehe auch: [Kommunikationsplan](/de/incident-response/communication)

## 1.10.6 Checkliste: Bereitschaft für Marktüberwachung

- [ ] Technische Dokumentation aller Produkte aktuell und abrufbar
- [ ] EU-Konformitätserklärungen für alle Produkte vorhanden
- [ ] SBOMs für alle aktiven Produktversionen archiviert
- [ ] Ansprechpartner für Behördenanfragen benannt
- [ ] Reaktionsprozess dokumentiert und bekannt
- [ ] Rückrufprozess dokumentiert
- [ ] Alle Dokumente in Englisch verfügbar (Behördensprache)
- [ ] Quellcode-Zugang technisch möglich (für begründete Anfragen)
