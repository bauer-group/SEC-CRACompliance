# Nutzerinformation (Produkt-Sicherheitsinformation)

## Vorlage: Sicherheitsinformationen für Nutzer gemäß Annex II CRA

---

## Sicherheitsinformationen: [Produktname]

**Version:** [X.Y.Z]
**Datum:** [YYYY-MM-DD]
**Hersteller:** BAUER GROUP

---

### 1. Hersteller-Kontaktinformationen

| Feld | Wert |
|------|------|
| **Unternehmen** | BAUER GROUP |
| **Anschrift** | [Vollständige Postanschrift] |
| **E-Mail (allgemein)** | [E-Mail-Adresse] |
| **E-Mail (Sicherheit)** | <disclosure@cra.docs.bauer-group.com> |
| **Webseite** | [URL] |

### 2. Produktidentifikation

| Feld | Wert |
|------|------|
| **Produktname** | [Name] |
| **Version** | [X.Y.Z] |
| **Produkttyp** | [Software / Firmware / Container Image] |
| **Bestimmungsgemäße Verwendung** | [Kurzbeschreibung] |
| **Sicherheitsumgebung** | [Vorgesehene Einsatzumgebung, z.B. Intranet, Cloud, industrielle Umgebung] |

### 3. Sicherheitsrelevante Eigenschaften

**Dieses Produkt bietet folgende Sicherheitsfunktionen:**

- [ ] Verschlüsselung der Kommunikation (TLS)
- [ ] Benutzerauthentifizierung
- [ ] Rollenbasierte Zugriffskontrolle
- [ ] Automatische Sicherheitsupdates
- [ ] Secure Boot (Firmware)
- [ ] Integritätsschutz (digitale Signatur)

### 4. Vorhersehbare Umstände mit Cybersicherheitsrisiken (Annex II Nr. 5)

[Bekannte oder vernünftigerweise vorhersehbare Umstände im Zusammenhang mit der Nutzung des Produkts, die zu erheblichen Cybersicherheitsrisiken führen können:]

- [z.B. Betrieb ohne Firewall in öffentlichen Netzen]
- [z.B. Verwendung veralteter TLS-Versionen durch den Nutzer]
- [z.B. Betrieb in nicht segmentierten OT-Netzwerken]

### 5. EU-Konformitätserklärung (Annex II Nr. 6)

| Feld | Wert |
|------|------|
| **Internet-Adresse der EU-Konformitätserklärung** | [URL zur DoC, falls elektronisch bereitgestellt] |

### 6. Sichere Installation und Konfiguration

[Schritt-für-Schritt-Anleitung für die sichere Ersteinrichtung]

**Empfohlene Sicherheitseinstellungen:**

1. [z.B. Standardpasswort ändern]
2. [z.B. TLS aktivieren]
3. [z.B. Minimale Berechtigungen konfigurieren]
4. [z.B. Automatische Updates aktivieren]

### 7. Auswirkungen von Änderungen auf die Datensicherheit (Annex II Nr. 8 lit. b)

[Beschreibung, wie Änderungen am Produkt (z.B. Konfigurationsanpassungen, Erweiterungen, Integration von Drittkomponenten) die Sicherheit gespeicherter oder verarbeiteter Daten beeinflussen können]

### 8. Sicherheitsupdates

| Feld | Wert |
|------|------|
| **Automatische Updates** | [Ja / Nein / Konfigurierbar] |
| **Update-Kanal** | [z.B. GitHub Releases, Container Registry, OTA] |
| **Update-Prüfung** | [z.B. Cosign Signatur, SHA256] |
| **Update-Benachrichtigung** | [z.B. GitHub Watch, E-Mail-Newsletter] |

| **Deaktivierung automatischer Updates** | [Beschreibung, wie automatische Sicherheitsupdates deaktiviert werden können, inkl. Auswirkungen auf die Sicherheit] |

**So aktualisieren Sie:**
[Anleitung zur Durchführung von Updates]

### 9. Support-Zeitraum

| Feld | Wert |
|------|------|
| **Support bis** | [Datum – mindestens 5 Jahre] |
| **Sicherheitsupdates bis** | [Datum] |
| **End-of-Life geplant** | [Datum oder „Noch nicht festgelegt"] |

Nach Ablauf des Support-Zeitraums werden keine weiteren Sicherheitsupdates bereitgestellt. Nutzer werden rechtzeitig über das End-of-Life informiert.

### 10. Schwachstellen melden

Wenn Sie eine Sicherheitslücke in diesem Produkt entdecken:

1. **Bevorzugt:** GitHub Security Advisory im entsprechenden Repository
2. **E-Mail:** <disclosure@cra.docs.bauer-group.com>
3. **Details:** Siehe [Vulnerability Disclosure Policy](/de/incident-response/disclosure-policy)

**Bitte melden Sie Schwachstellen nicht öffentlich**, bevor ein Fix bereitsteht.

### 11. Sichere Außerbetriebnahme (Annex II Nr. 8 lit. d)

**So deinstallieren/dekommissionieren Sie dieses Produkt sicher:**

1. [z.B. Alle gespeicherten Daten über die Funktion „Daten zurücksetzen" löschen]
2. [z.B. Kryptographische Schlüssel widerrufen / rotieren]
3. [z.B. Registrierungen bei Cloud-Diensten aufheben]
4. [z.B. Container-Images aus privater Registry entfernen]

::: warning HINWEIS
Stellen Sie sicher, dass alle personenbezogenen und geschäftskritischen Daten vor der Außerbetriebnahme gesichert und anschließend vollständig gelöscht werden.
:::

### 12. Datenverarbeitung durch das Produkt (Annex II)

| Datenkategorie | Beschreibung | Personenbezogen |
|----------------|-------------|:---------------:|
| [z.B. Telemetriedaten] | [Beschreibung] | [Ja / Nein] |
| [z.B. Authentifizierungsdaten] | [Beschreibung] | [Ja] |
| [z.B. Konfigurationsdaten] | [Beschreibung] | [Nein] |
| [z.B. Log-Daten] | [Beschreibung] | [Ja / Nein] |

### 13. Integration mit anderen Produkten (Annex II Nr. 8 lit. f)

[Informationen zur sicheren Integration dieses Produkts mit anderen Produkten mit digitalen Elementen, einschließlich:]

- [z.B. Unterstützte APIs und Schnittstellen]
- [z.B. Empfohlene Netzwerksegmentierung]
- [z.B. Erforderliche Firewall-Regeln]
- [z.B. Abhängigkeiten von externen Diensten]

### 14. Bekannte Einschränkungen

[Liste bekannter sicherheitsrelevanter Einschränkungen, z.B.:]

- [z.B. Produkt ist nicht für den Einsatz in sicherheitskritischer Infrastruktur vorgesehen]
- [z.B. Verschlüsselung erfordert aktive Konfiguration durch den Nutzer]

### 15. Weitere Dokumentation

| Dokument | Link |
|----------|------|
| Produktdokumentation | [Link] |
| SBOM (Software Bill of Materials) | [Link zum Release Asset] |
| Security Advisory Feed | [Link] |
| Changelog | [Link] |
