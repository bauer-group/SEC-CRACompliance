# CRA und NIS2 – Integration und Abgrenzung

## Übersicht

Der Cyber Resilience Act (CRA) und die NIS2-Richtlinie (Richtlinie (EU) 2022/2555) sind komplementäre EU-Regulierungen zur Cybersicherheit. Während der CRA **Produkte** reguliert, betrifft NIS2 **Betreiber** (wesentliche und wichtige Einrichtungen). Unternehmen wie BAUER GROUP können beiden Regulierungen gleichzeitig unterliegen.

::: info RECHTSGRUNDLAGE
**CRA Erwägungsgrund 20:** Der CRA ergänzt die NIS2-Richtlinie und ist kohärent mit deren Anforderungen. Produkte, die den CRA-Anforderungen entsprechen, tragen zur Einhaltung der NIS2-Anforderungen durch deren Betreiber bei.

**NIS2 Art. 21:** Cybersicherheitsmaßnahmen für wesentliche und wichtige Einrichtungen, einschließlich Lieferkettensicherheit.
:::

## Abgrenzung CRA vs. NIS2

| Kriterium | CRA | NIS2 |
|-----------|-----|------|
| **Regulierungsgegenstand** | Produkte mit digitalen Elementen | Betreiber (Einrichtungen) |
| **Adressat** | Hersteller, Importeure, Händler | Wesentliche und wichtige Einrichtungen |
| **Fokus** | Produktsicherheit (Security by Design) | Betriebssicherheit (Risikomanagement) |
| **Rechtsform** | Verordnung (direkt anwendbar) | Richtlinie (nationale Umsetzung) |
| **Geltung ab** | 11.12.2027 (vollständig) | 18.10.2024 (Umsetzungsfrist) |
| **Sanktionen** | Bis zu 15 Mio. EUR / 2,5% | Bis zu 10 Mio. EUR / 2% |
| **Meldepflicht** | ENISA (24h/72h/14d) | CSIRT (24h/72h/1 Monat) |

## Entscheidungsbaum: Welche Regulierung gilt?

```
Stellt BAUER GROUP Produkte mit digitalen Elementen her?
├── Ja → CRA gilt (als Hersteller)
│   └── Sind die Produkte SaaS (rein cloudbasiert)?
│       ├── Ja → CRA gilt NICHT für SaaS
│       │   └── NIS2 prüfen (als Betreiber)
│       └── Nein → CRA gilt
└── Nein → CRA gilt nicht als Hersteller

Ist BAUER GROUP eine wesentliche oder wichtige Einrichtung?
├── Ja → NIS2 gilt (als Betreiber)
│   └── Branche prüfen (Annex I/II der NIS2)
└── Nein → NIS2 gilt nicht
```

## Überlappende Anforderungen

### Schwachstellenmanagement

| Anforderung | CRA | NIS2 |
|-------------|-----|------|
| Schwachstellen identifizieren | Art. 10 Abs. 6, Annex I Teil II | Art. 21 Abs. 2 (e) |
| Schwachstellen beheben | Art. 10 Abs. 6-7 | Art. 21 Abs. 2 (e) |
| Koordinierte Offenlegung | Art. 10 Abs. 9, Art. 13 Abs. 6 | Art. 12 |
| SBOM führen | Art. 13 Abs. 23 | Nicht explizit (Lieferkette) |

→ **Synergie:** CRA-konforme Schwachstellenbehandlung erfüllt weitgehend auch NIS2 Art. 21 Abs. 2 (e).

### Meldepflichten

| Aspekt | CRA (Art. 14) | NIS2 (Art. 23) |
|--------|-------------|----------------|
| **Auslöser** | Aktiv ausgenutzte Schwachstelle oder schwerwiegender Vorfall | Erheblicher Sicherheitsvorfall |
| **Frühwarnung** | 24 Stunden | 24 Stunden |
| **Meldung** | 72 Stunden | 72 Stunden |
| **Abschluss** | 14 Tage | 1 Monat |
| **Meldestelle** | ENISA + nationale CSIRT | Nationale CSIRT/Behörde |
| **Plattform** | ENISA Single Reporting Platform | Nationale Meldeplattform |

::: warning DOPPELMELDUNG
Wenn BAUER GROUP sowohl als CRA-Hersteller als auch als NIS2-Einrichtung betroffen ist, können **zwei separate Meldepflichten** ausgelöst werden. Die EU arbeitet an einer vereinfachten Meldeplattform (ENISA SRP), die beide Meldungen zusammenführen soll.
:::

→ CRA-Meldeprozess: [ENISA-Meldeprozess](/de/incident-response/enisa-reporting)

### Supply-Chain-Sicherheit

| Anforderung | CRA | NIS2 |
|-------------|-----|------|
| Lieferkettensicherheit | Art. 10 Abs. 4, Annex I Teil II Nr. 1 | Art. 21 Abs. 2 (d) |
| Due Diligence Lieferanten | Annex I Teil II Nr. 1 | Art. 21 Abs. 2 (d) |
| Drittanbieter-Bewertung | [Third-Party Assessment](/de/supply-chain/third-party-assessment) | Lieferantenbewertung |

→ **Synergie:** CRA-konforme Supply-Chain-Prozesse erfüllen auch NIS2 Art. 21 Abs. 2 (d) Lieferkettenanforderungen.

### Incident Response

| Anforderung | CRA | NIS2 |
|-------------|-----|------|
| Incident-Response-Plan | Implizit (Art. 10) | Art. 21 Abs. 2 (b) |
| Business Continuity | Nicht explizit | Art. 21 Abs. 2 (c) |
| Krisenmanagement | Nicht explizit | Art. 21 Abs. 2 (c) |

→ **Gap:** NIS2 fordert explizit Business Continuity und Krisenmanagement, der CRA fokussiert auf Produktsicherheit.

## Kombinierte Compliance-Strategie

### Schritt 1: Geltungsbereich bestimmen

| Frage | Ergebnis |
|-------|----------|
| Stellen wir Produkte mit digitalen Elementen her? | → CRA-Pflichten |
| Sind wir eine wesentliche/wichtige Einrichtung (NIS2 Annex I/II)? | → NIS2-Pflichten |
| Betreiben wir SaaS-Produkte? | → NIS2 (nicht CRA) |
| Importieren wir Nicht-EU-Produkte? | → CRA Importeur-Pflichten |

### Schritt 2: Synergien nutzen

Folgende Prozesse decken **beide** Regulierungen ab:

1. **Schwachstellenmanagement** → [Vulnerability Management](/de/vulnerability-management/)
2. **Incident Response** → [Incident Response](/de/incident-response/)
3. **Supply-Chain-Sicherheit** → [Supply Chain](/de/supply-chain/)
4. **SBOM-Management** → [SBOM & Signierung](/de/sbom-signing/)

### Schritt 3: NIS2-spezifische Ergänzungen

Über den CRA hinausgehende NIS2-Anforderungen:

| NIS2-Anforderung | Beschreibung | CRA-Abdeckung |
|------------------|-------------|---------------|
| Art. 21(2)(a) | Risikomanagementpolitik | Teilweise (produktbezogen) |
| Art. 21(2)(b) | Incident Response | ✅ |
| Art. 21(2)(c) | Business Continuity | ❌ Separat erforderlich |
| Art. 21(2)(d) | Supply Chain Security | ✅ |
| Art. 21(2)(e) | Vulnerability Handling | ✅ |
| Art. 21(2)(f) | Cyberhygiene & Training | ❌ Separat erforderlich |
| Art. 21(2)(g) | Kryptografie | Teilweise |
| Art. 21(2)(h) | HR-Sicherheit | ❌ Separat erforderlich |
| Art. 21(2)(i) | MFA, sichere Kommunikation | Teilweise |
| Art. 21(2)(j) | Asset Management | Teilweise (SBOM) |

### Schritt 4: Einheitliche Meldeprozesse

Für Unternehmen, die beiden Regulierungen unterliegen:

1. **Gemeinsamer Erstbewertungsprozess** für Vorfälle
2. **Parallele Meldung** an CRA- und NIS2-Stellen (bis einheitliche Plattform verfügbar)
3. **Einheitliche Templates** ([ENISA Frühwarnung](/de/templates/enisa-early-warning))
4. **Dokumentierte Entscheidungslogik:** Welcher Vorfall löst welche Meldepflicht aus

## Zeitstrahl

| Datum | Ereignis |
|-------|---------|
| **18.10.2024** | NIS2 Umsetzungsfrist für Mitgliedstaaten |
| **11.09.2026** | CRA Meldepflichten aktiv (Art. 14) |
| **11.12.2027** | CRA vollständig anwendbar |

::: tip EMPFEHLUNG
Beginnen Sie mit der NIS2-Compliance (bereits anwendbar) und nutzen Sie die implementierten Prozesse als Grundlage für die CRA-Compliance (ab 2027). So vermeiden Sie Doppelarbeit und schaffen ein integriertes Compliance-Framework.
:::
