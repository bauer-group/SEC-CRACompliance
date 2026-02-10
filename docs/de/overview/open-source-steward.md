# Open-Source-Software-Steward (Art. 18-19)

## Übersicht

Der CRA führt die neue Rolle des **Open-Source-Software-Stewards** ein. Dies betrifft juristische Personen (z.B. Stiftungen, Unternehmen), die die Entwicklung von Open-Source-Software systematisch unterstützen, welche für kommerzielle Aktivitäten bestimmt ist.

::: info RECHTSGRUNDLAGE
**Art. 3 Nr. 16 CRA:** *„Open-Source-Software-Steward" ist jede juristische Person, die keine Hersteller ist und die systematisch und dauerhaft die Entwicklung bestimmter Produkte mit digitalen Elementen, die als freie und quelloffene Software gelten und für kommerzielle Aktivitäten bestimmt sind, unterstützt und eine entscheidende Rolle bei der Gewährleistung der Marktfähigkeit dieser Produkte spielt.*

**Art. 18 CRA:** Pflichten des Open-Source-Software-Stewards.

**Art. 19 CRA:** Sicherheitsattestierung für freie und quelloffene Software.
:::

## Wann gilt die OSS-Steward-Rolle?

### Voraussetzungen (kumulativ)

1. **Juristische Person** (keine natürliche Person)
2. **Kein Hersteller** des betreffenden Produkts
3. **Systematische und dauerhafte Unterstützung** der Entwicklung
4. Das OSS-Produkt ist **für kommerzielle Aktivitäten bestimmt**
5. **Entscheidende Rolle** bei der Marktfähigkeit

### Typische OSS-Stewards

- Open-Source-Stiftungen (Apache, Linux Foundation, Eclipse)
- Unternehmen, die OSS-Projekte sponsern und pflegen, ohne selbst Hersteller zu sein
- Organisationen, die OSS-Projekte hosten und deren Release-Infrastruktur bereitstellen

### Wann ist BAUER GROUP KEIN OSS-Steward?

- Bei der Nutzung von Open-Source-Bibliotheken als **Abhängigkeiten** → Nur Herstellerpflichten für das eigene Produkt
- Bei Beiträgen zu OSS-Projekten als **Contributor** → Keine Steward-Rolle
- Bei der Veröffentlichung von eigenem Code als Open Source → BAUER GROUP ist dann **Hersteller**, nicht Steward

### Wann KÖNNTE BAUER GROUP OSS-Steward sein?

- Wenn BAUER GROUP ein OSS-Projekt einer externen Community **systematisch fördert und pflegt** (z.B. eigene Mitarbeiter als Maintainer, Infrastruktur-Sponsoring)
- Wenn BAUER GROUP eine **eigene Stiftung** gründet, die OSS-Projekte verwaltet

::: tip AKTUELLE EINSCHÄTZUNG
Nach derzeitigem Kenntnisstand agiert BAUER GROUP primär als **Hersteller** (eigener Code) und **Nutzer** (OSS-Abhängigkeiten). Die OSS-Steward-Rolle ist derzeit **nicht einschlägig**, muss aber bei neuen OSS-Engagements geprüft werden.
:::

## Pflichten des OSS-Stewards (Art. 18)

Auch wenn die Steward-Rolle weniger umfassend ist als die des Herstellers, bestehen folgende Pflichten:

### 1. Cybersicherheitspolitik (Art. 18 Abs. 1)

- Dokumentierte Cybersicherheitspolitik erstellen und umsetzen
- Kooperation mit Marktüberwachungsbehörden fördern
- Sichere Entwicklung der Software unterstützen

### 2. Schwachstellenbehandlung (Art. 18 Abs. 1)

- Freiwillige Meldung aktiv ausgenutzter Schwachstellen an ENISA und nationale CSIRTs
- Koordinierte Schwachstellenoffenlegung (CVD) erleichtern
- Kontaktstelle für Schwachstellenmeldungen bereitstellen (SECURITY.md o.Ä.)

### 3. Kooperation mit Behörden (Art. 18 Abs. 2)

- Auf Anfrage: Dokumentation bereitstellen
- Bei der Beseitigung von Sicherheitsrisiken mitwirken
- Informationen über Schwachstellen teilen

### 4. Sicherheitsattestierung (Art. 19)

Open-Source-Software-Stewards können eine **freiwillige Sicherheitsattestierung** initiieren:

- Dokumentation der angewandten Cybersicherheitspraktiken
- Nachweis der Schwachstellenbehandlungsprozesse
- Attestierung durch Dritte (optional)

## Abgrenzung der Rollen bei Open Source

| Rolle | CRA-Status | Pflichten |
|-------|-----------|-----------|
| **OSS-Nutzer** (als Abhängigkeit) | Hersteller des eigenen Produkts | Volle Herstellerpflichten für das Gesamtprodukt |
| **OSS-Contributor** | Keine CRA-Rolle | Keine direkten CRA-Pflichten |
| **OSS-Maintainer** (natürliche Person) | Kein Steward (jurist. Person nötig) | Keine direkten CRA-Pflichten |
| **OSS-Steward** (Organisation) | Art. 18-19 Pflichten | Eingeschränkte Pflichten (s. oben) |
| **Hersteller von OSS** (kommerziell) | Voller Hersteller (Art. 10) | Volle Herstellerpflichten |

## Auswirkungen auf die Supply Chain

### Für BAUER GROUP als Hersteller

Auch wenn BAUER GROUP kein OSS-Steward ist, hat die OSS-Steward-Regelung Auswirkungen:

1. **OSS-Abhängigkeiten prüfen:** Gibt es einen OSS-Steward für kritische Abhängigkeiten?
2. **Schwachstellenmeldungen:** OSS-Stewards melden Schwachstellen freiwillig – diese Meldungen aktiv verfolgen
3. **Sicherheitsattestierungen:** Bei der Bewertung von OSS-Komponenten bevorzugt attestierte Software verwenden
4. **Risikobewertung:** OSS ohne Steward oder aktive Community = höheres Risiko

→ Siehe: [Supply-Chain-Sicherheit](/de/supply-chain/) und [Third-Party Assessment](/de/supply-chain/third-party-assessment)

## Sanktionen

OSS-Stewards unterliegen **reduzierten Sanktionen** im Vergleich zu Herstellern:

| Verstoß | Maximale Sanktion |
|---------|------------------|
| Nicht-Erfüllung der Art. 18 Pflichten | Bis zu 5 Mio. EUR oder 1% des Jahresumsatzes |

*Die Kommission berücksichtigt bei der Festlegung die besondere Rolle und den nicht-kommerziellen Charakter der Steward-Tätigkeit.*

## Relevante Entwicklungen

- Die EU-Kommission wird **Implementing Acts** erlassen, die die Sicherheitsattestierung (Art. 19) näher spezifizieren
- Harmonisierte Normen für OSS-Stewards sind in Entwicklung
- Die genaue Abgrenzung wird sich durch Praxis und Rechtsprechung weiter klären
