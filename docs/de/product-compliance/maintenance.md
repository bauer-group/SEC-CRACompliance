# 9.4 Pflege & Aktualisierung

## 9.4.1 Aktualisierungsauslöser

Das CRA Compliance Statement muss bei folgenden Ereignissen aktualisiert werden:

| Auslöser | Betroffene Felder | Frist | Priorität |
|----------|-------------------|-------|:---------:|
| Neues Major/Minor Release | `product.version`, `conformity.*`, `sbom_url` | Vor Inverkehrbringen | 🔴 Hoch |
| Änderung der CRA-Produktkategorie | `cra_classification.*` | Sofort | 🔴 Hoch |
| Neue/geänderte harmonisierte Normen | `harmonised_standards[]` | Innerhalb 30 Tage | 🟡 Mittel |
| Neue CRA Delegated/Implementing Acts | Abhängig vom Inhalt | Innerhalb 30 Tage | 🟡 Mittel |
| Änderung des Support-Zeitraums | `support_period.*` | Sofort | 🔴 Hoch |
| Wechsel des Konformitätsmoduls | `cra_classification.conformity_module` | Vor nächstem Release | 🟡 Mittel |
| Änderung der Herstellerdaten | `manufacturer.*` | Innerhalb 14 Tage | 🟢 Niedrig |
| Neue Vulnerability Disclosure Policy | `security_documentation.*` | Innerhalb 14 Tage | 🟡 Mittel |

::: info RECHTSGRUNDLAGE
**Art. 10 Abs. 12 CRA:** *„Der Hersteller stellt sicher, dass das Produkt [...] während des gesamten Support-Zeitraums den wesentlichen Anforderungen entspricht."*

Daraus ergibt sich die Pflicht, auch die öffentliche Compliance-Darstellung aktuell zu halten.
:::

## 9.4.2 Review-Zyklus

### Reguläre Reviews

| Zyklus | Umfang | Verantwortlich |
|--------|--------|----------------|
| **Bei jedem Release** | Vollständige Prüfung aller Felder | Product Owner |
| **Halbjährlich** | Proaktive Prüfung auch ohne Release | Security Lead |
| **Jährlich** | Abgleich mit aktuellem CRA-Stand (Delegated Acts) | Compliance-Beauftragter |

### Review-Checkliste

- [ ] Alle Pflichtfelder ausgefüllt und aktuell?
- [ ] Referenzierte URLs erreichbar?
- [ ] Support-Zeitraum noch gültig?
- [ ] DoC-Datum aktuell (bei neuem Release)?
- [ ] SBOM-Link zeigt auf aktuelle Version?
- [ ] Harmonisierte Normen noch zutreffend?
- [ ] Produktkategorie noch korrekt?

## 9.4.3 Versionierung

CRA Compliance Statements werden zusammen mit dem Produktcode versioniert:

| Aspekt | Regel |
|--------|-------|
| **Speicherort** | `.compliance/cra-statement.json` im Produkt-Repository |
| **Versionierung** | Git-History = Audit-Trail |
| **Änderungsprotokoll** | `metadata.statement_version` wird bei jeder inhaltlichen Änderung hochgezählt |
| **Release-Kopplung** | Statement wird mit dem Release-Tag eingefroren |

### Beispiel-Workflow

```text
1. Entwickler aktualisiert .compliance/cra-statement.json
2. Pull Request / Code Review
3. CI validiert JSON-Schema (→ 9.3)
4. Merge in main
5. Release-Tag → Statement wird automatisch publiziert (→ 9.2)
```

## 9.4.4 Verantwortlichkeiten

| Rolle | Aufgabe | Wann |
|-------|---------|------|
| **Product Owner** | Inhaltliche Korrektheit, Auslöser erkennen | Bei jedem Release |
| **Security Lead** | Security-relevante Felder verifizieren (SBOM, CVD, Normen) | Halbjährlich + bei Incidents |
| **DevOps** | CI/CD-Pipeline pflegen, Schema-Validierung sicherstellen | Bei Pipeline-Änderungen |
| **Compliance-Beauftragter** | Regulatorische Änderungen erkennen, Schema-Updates anstoßen | Jährlich + ad hoc |

## 9.4.5 Automatisierung

### CI/CD-Checks

| Check | Wann | Aktion bei Fehler |
|-------|------|-------------------|
| JSON-Schema-Validierung | Jeder PR/Push | Build blockieren |
| Pflichtfeld-Vollständigkeit | Jeder PR/Push | Build blockieren |
| URL-Erreichbarkeit | Wöchentlich (Scheduled) | Warning in Slack/Teams |
| Support-Ablauf-Warnung | Täglich | Alert 90/30/7 Tage vor Ablauf |
| Statement-Alter-Warnung | Monatlich | Alert wenn >6 Monate ohne Update |

### Automatische Publikation

```text
Release-Tag → CI/CD → Compliance-Portal aktualisiert
```

Details: [9.2.6 CI/CD-Integration](/de/product-compliance/publication-strategy#_9-2-6-ci-cd-integration)

### Benachrichtigungen

| Ereignis | Kanal | Empfänger |
|----------|-------|-----------|
| Statement publiziert | Slack/Teams | Product Owner, Security Lead |
| Validierung fehlgeschlagen | CI/CD | Entwickler |
| Support läuft ab | E-Mail + Slack | Product Owner, Management |
| Statement veraltet (>6 Monate) | Slack | Product Owner |

## 9.4.6 Sonderfälle

### Produkt-End-of-Life

Wenn ein Produkt das Support-Ende erreicht:

1. `support_period.phase` auf `eol` setzen
2. Compliance Statement bleibt publiziert (10-Jahres-Aufbewahrungspflicht, Art. 10 Abs. 13)
3. Hinweis auf Nachfolgeprodukt (falls vorhanden)
4. Keine weiteren Security-Updates — klar kommunizieren

### Wesentliche Änderung (Art. 20)

Bei einer wesentlichen Änderung (Substantial Modification):

1. Neue Konformitätsbewertung durchführen (→ [1.8 Wesentliche Änderungen](/de/overview/substantial-modifications))
2. Neue EU-Konformitätserklärung ausstellen
3. CRA Compliance Statement vollständig aktualisieren
4. Auf dem Portal als neue Version publizieren

## 9.4.7 Querverweise

| Thema | Link |
|-------|------|
| JSON-Schema und Validierung | [9.3 Maschinenlesbares Format](/de/product-compliance/machine-readable) |
| Publikationspipeline | [9.2 Publikationsstrategie](/de/product-compliance/publication-strategy) |
| Support & Lifecycle | [6.4 Support & Lifecycle](/de/technical-documentation/support-period) |
| Wesentliche Änderungen | [1.8 Wesentliche Änderungen](/de/overview/substantial-modifications) |
| SBOM-Aufbewahrung | [2.3 Archivierung & Retention](/de/sbom-signing/storage) |
