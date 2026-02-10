# 7.10 Nutzerinformation (Annex II)

## 7.10.1 Übersicht

Annex II des CRA definiert die Pflichtinformationen, die der Hersteller den Nutzern des Produkts bereitstellen muss. Diese Informationen müssen klar, verständlich und in einer für den Nutzer leicht zugänglichen Weise bereitgestellt werden.

::: info RECHTSGRUNDLAGE
**Annex II CRA:** Informationen und Anweisungen für den Nutzer. Die folgenden Informationen werden dem Produkt mit digitalen Elementen beigefügt.
:::

## 7.10.2 Pflichtinhalte

### Nr. 1 – Herstellerinformationen

**Anforderung:** Name, eingetragener Handelsname oder eingetragene Handelsmarke und Anschrift des Herstellers.

**Umsetzung:**

- In jedem Produkt-Repository: README.md mit Herstellerangaben
- Auf der Produktwebseite: Impressum
- In der Software: About-Dialog oder Footer
- In der Dokumentation: Titelseite

**Template-Vorgabe:**

```
Hersteller: BAUER GROUP
Anschrift:  [Firmenadresse]
E-Mail:     [Kontakt-E-Mail]
Web:        [Produkt-URL]
```

---

### Nr. 2 – Kontaktstelle

**Anforderung:** Einzelne Kontaktstelle, über die Schwachstellen gemeldet werden können, und die Schwachstellenbehandlungspolitik des Herstellers.

**Umsetzung:**

- SECURITY.md in jedem Repository ([Vorlage](/de/SECURITY))
- Kontakt: `disclosure@cra.docs.bauer-group.com`
- GitHub Security Advisories aktiviert
- Verweis auf [Disclosure Policy](/de/incident-response/disclosure-policy)

---

### Nr. 3 – Produktidentifikation

**Anforderung:** Eindeutige Identifikation des Produkts: Name, Typ, Version, Charge/Seriennummer.

**Umsetzung:**

- Semantische Versionierung (SemVer) für alle Software
- Container-Image-Tags mit SHA-Digest
- Release Notes mit Version, Datum und Changelog
- SBOM enthält eindeutige Produktidentifikation (CPE/PURL)

---

### Nr. 4 – Bestimmungsgemäße Verwendung

**Anforderung:** Bestimmungsgemäße Verwendung des Produkts, einschließlich der Sicherheitsumgebung.

**Umsetzung:**

- **Produktbeschreibung** ([Referenz](/de/technical-documentation/product-description)): Zweck, Zielgruppe, Einsatzumgebung
- **Einsatzbedingungen:** Betriebssystem, Netzwerk, Hardware-Anforderungen
- **Sicherheitsumgebung:** Voraussetzungen (Firewall, VPN, Netzwerksegmentierung)
- **Einschränkungen:** Explizit dokumentieren, wofür das Produkt NICHT gedacht ist

**Beispiel:**

```
Bestimmungsgemäße Verwendung: Interne Unternehmensanwendung zur
Verwaltung von [Funktion]. Ausgelegt für den Betrieb hinter einer
Unternehmens-Firewall mit authentifiziertem Zugang.

NICHT bestimmungsgemäß: Öffentlich zugänglicher Betrieb ohne
Netzwerkschutz, Einsatz in kritischer Infrastruktur (KRITIS).
```

---

### Nr. 5 – Vorhersehbarer Fehlgebrauch

**Anforderung:** Beschreibung vorhersehbarer Fehlgebrauchsszenarien.

**Umsetzung:**

- Identifikation typischer Fehlgebrauchsszenarien pro Produkttyp
- Warnhinweise in der Dokumentation
- Technische Schutzmaßnahmen gegen Fehlgebrauch

**Typische Fehlgebrauchsszenarien:**

| Szenario | Maßnahme |
|----------|----------|
| Standard-Passwörter im Produktivbetrieb | Erzwungene Passwortänderung bei Ersteinrichtung |
| Betrieb ohne Updates über längere Zeit | Automatische Update-Benachrichtigung |
| Exponierung interner APIs im Internet | Warnung in der Dokumentation, Netzwerk-Checks |
| Verwendung veralteter TLS-Versionen | Nur TLS 1.2+ unterstützen, alte Versionen ablehnen |
| Deaktivierung von Sicherheitsfunktionen | Warnung bei Deaktivierung, Audit-Log |

---

### Nr. 6 – SBOM-Verweis

**Anforderung:** Hinweis auf die Verfügbarkeit des SBOM (oder URL zum Abruf).

**Umsetzung:**

- SBOM als Release-Asset veröffentlichen
- URL zum SBOM in der Produktdokumentation
- SBOM in maschinenlesbarem Format (CycloneDX JSON)

**Template-Vorgabe:**

```
SBOM: Verfügbar unter [Release-URL]/sbom.cdx.json
Format: CycloneDX JSON v1.6
Signiert: Ja (Cosign)
```

→ Details: [SBOM & Signierung](/de/sbom-signing/)

---

### Nr. 7 – Support-Zeitraum

**Anforderung:** Zeitraum, in dem Sicherheitsupdates bereitgestellt werden, mindestens 5 Jahre oder die erwartete Produktlebensdauer.

**Umsetzung:**

- Support-Zeitraum in der Produktdokumentation dokumentiert
- In SECURITY.md pro Repository
- Auf der Produktwebseite
- In den Release Notes

→ Details: [Support & Lifecycle](/de/technical-documentation/support-period)

---

### Nr. 8 – Installationsanleitung und sichere Konfiguration

**Anforderung:** Anweisungen zur sicheren Installation, Konfiguration, Inbetriebnahme und Nutzung des Produkts.

**Umsetzung:**

- **Installationsanleitung:** Schritt-für-Schritt mit Sicherheitshinweisen
- **Härtungsguide:** Empfohlene Sicherheitskonfiguration
- **Checkliste:** Post-Installation Security Checklist
- **Mindestanforderungen:** Dokumentierte Systemvoraussetzungen

**Inhalte der Installationsanleitung:**

1. Systemvoraussetzungen (inkl. Sicherheitsanforderungen)
2. Installationsschritte mit Integritätsprüfung
3. Ersteinrichtung (Passwort, MFA, Netzwerk)
4. Empfohlene Sicherheitskonfiguration (Härtung)
5. Update-Konfiguration (automatisch/manuell)
6. Backup-Einrichtung

---

### Nr. 9 – EU-Konformitätserklärung

**Anforderung:** Verweis auf die EU-Konformitätserklärung oder vereinfachte Version mit URL.

**Umsetzung:**

- URL zur EU-Konformitätserklärung in der Produktdokumentation
- Vereinfachte Version gemäß Annex VI (→ [Vereinfachte DoC](/de/conformity/simplified-declaration))

---

### Nr. 10 – Update-Informationen

**Anforderung:** Informationen über Art und Ort der Sicherheitsupdates.

**Umsetzung:**

- Release-Kanal dokumentiert (GitHub Releases, Container Registry, OTA)
- Benachrichtigungskanal (GitHub Watch, E-Mail, RSS)
- Update-Anleitung in der Dokumentation

## 7.10.3 Template: Nutzerinformation

→ Ausfüllbares Template: [Nutzerinformation / Product Security Info](/de/templates/product-security-info)

## 7.10.4 Checkliste: Annex II

- [ ] Herstellerangaben im Produkt und der Dokumentation
- [ ] SECURITY.md mit Kontaktstelle und CVD-Policy
- [ ] Eindeutige Produktidentifikation (SemVer, Digest)
- [ ] Bestimmungsgemäße Verwendung dokumentiert
- [ ] Vorhersehbare Fehlgebrauchsszenarien identifiziert und adressiert
- [ ] SBOM-Verweis in der Produktdokumentation
- [ ] Support-Zeitraum definiert und kommuniziert
- [ ] Installationsanleitung mit Sicherheitshinweisen
- [ ] Verweis auf EU-Konformitätserklärung
- [ ] Update-Informationen (Kanal, Benachrichtigung, Anleitung)
