# 7.3 EU-Baumusterprüfung (Modul B+C)

## 7.3.1 Übersicht

Die EU-Baumusterprüfung nach Modul B in Kombination mit der Konformität mit der Bauart nach Modul C ist das Konformitätsbewertungsverfahren für **Klasse I** (ohne harmonisierte Normen) und **Klasse II** Produkte.

::: info RECHTSGRUNDLAGE
**Art. 24 Abs. 2 CRA:** Für Produkte der Klasse I, die nicht unter vollständiger Anwendung harmonisierter Normen hergestellt wurden, und für Produkte der Klasse II ist eine EU-Baumusterprüfung (Modul B) in Kombination mit einer Konformität mit der Bauart (Modul C) durchzuführen.

**Annex VIII, Modul B und C** des CRA beschreiben die Verfahrensanforderungen.
:::

## 7.3.2 Anwendbarkeit

| Kategorie | Modul B+C erforderlich? |
|-----------|------------------------|
| Standard | Nein – Modul A ausreichend |
| Klasse I (mit harm. Normen) | Nein – Modul A* ausreichend |
| **Klasse I (ohne harm. Normen)** | **Ja** |
| **Klasse II** | **Ja** (Alternative: Modul H) |
| Kritisch | Nein – EUCC erforderlich |

## 7.3.3 Verfahrensablauf

### Modul B – EU-Baumusterprüfung

Die EU-Baumusterprüfung ist der Teil des Konformitätsbewertungsverfahrens, bei dem eine **notifizierte Stelle** das technische Design eines Produkts prüft und bestätigt, dass es die wesentlichen Anforderungen erfüllt.

#### 1. Notifizierte Stelle auswählen

- Suche über die [NANDO-Datenbank](https://ec.europa.eu/growth/tools-databases/nando/) der EU-Kommission
- Stelle muss für den CRA (Verordnung (EU) 2024/2847) notifiziert sein
- Auf relevante Produktkategorien und Prüfkompetenzen achten
- Vertrag über Prüfumfang, Zeitrahmen und Kosten abschließen

#### 2. Technische Dokumentation einreichen

Folgende Unterlagen gemäß Annex VII sind einzureichen:

- [ ] Vollständige Produktbeschreibung ([Referenz](/de/technical-documentation/product-description))
- [ ] Sicherheitsarchitektur ([Referenz](/de/technical-documentation/security-architecture))
- [ ] Cybersecurity-Risikobewertung ([Template](/de/templates/risk-assessment))
- [ ] SBOM (maschinenlesbar, CycloneDX JSON)
- [ ] Beschreibung der Schwachstellenbehandlung
- [ ] Testergebnisse (Penetrationstests, Sicherheitsscans)
- [ ] Beschreibung des Update-Mechanismus ([Referenz](/de/technical-documentation/update-mechanism))
- [ ] Quellcode oder Zugang zum Quellcode (falls gefordert)

#### 3. Prüfung durch die notifizierte Stelle

Die notifizierte Stelle prüft:

1. **Design-Prüfung** – Ob das Design die Anforderungen aus Annex I Teil I erfüllt
2. **Schwachstellenbehandlung** – Ob die Prozesse aus Annex I Teil II implementiert sind
3. **Testergebnisse** – Ob die durchgeführten Tests ausreichend und korrekt sind
4. **Dokumentation** – Ob die technische Dokumentation vollständig ist

#### 4. EU-Baumusterprüfbescheinigung

Nach erfolgreicher Prüfung stellt die notifizierte Stelle eine **EU-Baumusterprüfbescheinigung** aus. Diese enthält:

- Name und Kennnummer der notifizierten Stelle
- Produktidentifikation (Name, Typ, Version)
- Ergebnis der Prüfung
- Bedingungen für die Gültigkeit (falls vorhanden)
- Kennnummer der Bescheinigung

::: warning GÜLTIGKEIT
Die EU-Baumusterprüfbescheinigung hat eine **begrenzte Gültigkeit**. Bei wesentlichen Änderungen am Produkt oder an den Anforderungen muss eine erneute Prüfung durchgeführt werden.
:::

### Modul C – Konformität mit der Bauart

Modul C stellt sicher, dass die **produzierten Exemplare** dem geprüften Baumuster entsprechen.

#### Pflichten des Herstellers

1. **Herstellungsprozess überwachen** – Sicherstellen, dass jedes Exemplar dem geprüften Baumuster entspricht
2. **Konfigurationsmanagement** – Versionskontrolle und Build-Reproduzierbarkeit
3. **Release-Prozess** – Signierte Builds, Integritätsprüfung
4. **Änderungsmanagement** – Bei Änderungen prüfen, ob die Baumusterprüfbescheinigung noch gilt

#### Für Software-Produkte bedeutet das:

- Reproduzierbare Builds (CI/CD Pipeline)
- Signierte Artefakte ([Cosign-Signierung](/de/sbom-signing/signing))
- Versionskontrolle (Git)
- Automatisierte Tests bei jedem Release
- SBOM pro Release generieren und archivieren ([SBOM Lifecycle](/de/sbom-signing/))

## 7.3.4 Zeitplanung

| Phase | Geschätzter Zeitaufwand |
|-------|------------------------|
| Vorbereitung der Unterlagen | 4-8 Wochen |
| Auswahl der notifizierten Stelle | 2-4 Wochen |
| Prüfung durch die Stelle | 8-16 Wochen |
| Nachbesserungen (falls nötig) | 2-8 Wochen |
| Bescheinigung | 1-2 Wochen |
| **Gesamt** | **ca. 4-9 Monate** |

::: tip FRÜHZEITIG BEGINNEN
Die Verfügbarkeit notifizierter Stellen für CRA-Prüfungen wird anfangs begrenzt sein. Beginnen Sie frühzeitig mit der Identifikation und Kontaktaufnahme geeigneter Stellen.
:::

## 7.3.5 Kosten

Die Kosten variieren je nach Produktkomplexität und notifizierter Stelle:

| Kostenfaktor | Geschätzter Bereich |
|-------------|---------------------|
| Initialprüfung (Modul B) | 10.000 - 50.000 EUR |
| Jährliche Überwachung | 2.000 - 10.000 EUR |
| Nachprüfung bei Änderungen | 5.000 - 25.000 EUR |

*Hinweis: Aktuelle Marktpreise für CRA-Prüfungen sind noch nicht etabliert. Die Werte dienen als Orientierung basierend auf vergleichbaren Richtlinien.*

## 7.3.6 Checkliste: Modul B+C

- [ ] Produktklassifizierung abgeschlossen (Klasse I ohne harm. Normen oder Klasse II)
- [ ] Technische Dokumentation vollständig (Annex VII)
- [ ] Cybersecurity-Risikobewertung durchgeführt
- [ ] Penetrationstests durchgeführt und dokumentiert
- [ ] Notifizierte Stelle identifiziert und kontaktiert (NANDO)
- [ ] Vertrag mit notifizierter Stelle geschlossen
- [ ] Unterlagen eingereicht
- [ ] Prüfung bestanden / Nachbesserungen umgesetzt
- [ ] EU-Baumusterprüfbescheinigung erhalten
- [ ] Modul C Maßnahmen implementiert (reproduzierbare Builds, Signierung)
- [ ] EU-Konformitätserklärung erstellt ([Template](/de/templates/eu-declaration-of-conformity))
- [ ] CE-Kennzeichnung mit Kennnummer der notifizierten Stelle
