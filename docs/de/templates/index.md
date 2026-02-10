# Anhang A: Vorlagen & Templates

## Übersicht

Dieser Anhang enthält einsatzbereite Vorlagen für die regulatorischen Pflichten unter dem CRA. Die Vorlagen decken drei Bereiche ab:

1. **ENISA-Meldepflichten** (Art. 14 CRA) – Fristgebundene Meldungen an ENISA / CSIRT
2. **Incident-Dokumentation** – Interne und externe Vorfallberichte
3. **Compliance-Dokumentation** – Risikobewertung, Konformitätserklärung, Nutzerinformation

::: warning ANWENDUNGSHINWEIS
Alle Vorlagen müssen **produktspezifisch** ausgefüllt werden. Platzhalter in eckigen Klammern `[...]` sind durch die tatsächlichen Werte zu ersetzen. Ausgefüllte Vorlagen werden im jeweiligen Incident-Ticket bzw. im Produktverzeichnis (`docs/products/<produktname>/`) archiviert.

Die ENISA-Meldevorlagen sind ab dem **11. September 2026** operativ einzusetzen (→ [5.3 ENISA-Meldeprozess](/de/incident-response/enisa-reporting)).
:::

## ENISA-Meldevorlagen (Art. 14 CRA)

| Vorlage | Frist | CRA-Referenz | Verwendung |
|---------|-------|-------------|------------|
| [ENISA Frühwarnung](/de/templates/enisa-early-warning) | **24 Stunden** | Art. 14 Abs. 2 lit. a | Erstmeldung bei aktiv ausgenutzter Schwachstelle / schwerem Vorfall |
| [ENISA Schwachstellenmeldung](/de/templates/enisa-notification) | **72 Stunden** | Art. 14 Abs. 2 lit. b | Detaillierte Schwachstellenmeldung mit technischen Details |
| [ENISA Abschlussbericht](/de/templates/enisa-final-report) | **14 Tage** | Art. 14 Abs. 2 lit. c | Abschließende Analyse, Root Cause, Lessons Learned |

## Incident-Vorlagen

| Vorlage | Verwendung | Auslöser |
|---------|------------|----------|
| [Incident Report (Intern)](/de/templates/incident-report) | Interne Dokumentation eines Sicherheitsvorfalls | Jeder SEV-1 bis SEV-4 Vorfall |
| [Vulnerability Report (Extern)](/de/templates/vulnerability-report) | Nutzerbenachrichtigung über Schwachstelle | Art. 14 Abs. 8: Unverzüglich bei ENISA-pflichtigen Ereignissen |

## Compliance-Vorlagen

| Vorlage | CRA-Referenz | Verwendung | Frequenz |
|---------|-------------|------------|----------|
| [Risikobewertung](/de/templates/risk-assessment) | Art. 10 Abs. 2, Annex VII Nr. 2 | Cybersecurity-Risikobewertung pro Produkt | Vor Inverkehrbringen + bei wesentlichen Änderungen |
| [EU-Konformitätserklärung](/de/templates/eu-declaration-of-conformity) | Art. 28, Annex V | Formale Konformitätserklärung pro Produkt | Vor Inverkehrbringen + bei neuen Versionen |
| [Nutzerinformation](/de/templates/product-security-info) | Annex II | Sicherheitshinweise für Endnutzer | Pro Produkt, aktualisiert bei Versionsänderungen |

## Vorlagen in der Technischen Dokumentation

Zusätzlich zu den hier aufgeführten Vorlagen dient die [7.1 Produktbeschreibung (Template)](/de/technical-documentation/product-description) als Vorlage für die produktspezifische technische Dokumentation gemäß Annex VII CRA.
