# A.6 Risikobewertung

## A.6.1 Vorlage: Cybersecurity-Risikobewertung gemäß Art. 13 Abs. 3 CRA

---

### 1. Produktidentifikation

| Feld | Wert |
|------|------|
| **Produktname** | [Name] |
| **Version** | [Version] |
| **CRA-Kategorie** | [Standard / Klasse I / Klasse II / Kritisch] |
| **Bewertungsdatum** | [YYYY-MM-DD] |
| **Bewerter** | [Name, Funktion] |
| **Nächste Überprüfung** | [YYYY-MM-DD] |

### 2. Produktbeschreibung

**Zweck:** [Kurzbeschreibung]

**Technologie-Stack:** [Auflistung]

**Datenverarbeitung:**

- [ ] Personenbezogene Daten
- [ ] Geschäftskritische Daten
- [ ] Authentifizierungsdaten
- [ ] Keine sensiblen Daten

**Netzwerkverbindung:**

- [ ] Internet-facing
- [ ] Internes Netzwerk
- [ ] Isoliert
- [ ] IoT/OT-Netzwerk

### 3. Bedrohungsanalyse

| Bedrohung | Wahrscheinlichkeit | Auswirkung | Risiko |
|-----------|:------------------:|:----------:|:------:|
| Unbefugter Netzwerkzugriff | [H/M/N] | [K/E/M/G] | [K/H/M/N] |
| Injection-Angriffe (SQL, XSS, etc.) | [H/M/N] | [K/E/M/G] | [K/H/M/N] |
| Dependency-Schwachstelle (CVE) | [H/M/N] | [K/E/M/G] | [K/H/M/N] |
| Supply-Chain-Angriff | [H/M/N] | [K/E/M/G] | [K/H/M/N] |
| Denial of Service | [H/M/N] | [K/E/M/G] | [K/H/M/N] |
| Datenexfiltration | [H/M/N] | [K/E/M/G] | [K/H/M/N] |
| Firmware-Manipulation | [H/M/N] | [K/E/M/G] | [K/H/M/N] |
| Physischer Zugriff | [H/M/N] | [K/E/M/G] | [K/H/M/N] |
| Insider-Bedrohung | [H/M/N] | [K/E/M/G] | [K/H/M/N] |

*H=Hoch, M=Mittel, N=Niedrig, K=Kritisch, E=Erheblich, G=Gering*

### 4. Sicherheitsmaßnahmen

| Risiko | Maßnahme | Umsetzungsstatus |
|--------|----------|:----------------:|
| Unbefugter Zugriff | [z.B. OAuth2, mTLS] | [✅/🔧/❌] |
| Injection | [z.B. Input Validation, Prepared Statements] | [✅/🔧/❌] |
| CVE in Dependencies | [Trivy Scan, Dependabot, CVE-Monitor] | ✅ |
| Supply Chain | [License Compliance, SBOM, Base Image Monitor] | ✅ |
| DoS | [z.B. Rate Limiting, Resource Limits] | [✅/🔧/❌] |
| Datenexfiltration | [z.B. Verschlüsselung, Zugriffskontrolle] | [✅/🔧/❌] |
| Firmware-Manipulation | [Cosign, Secure Boot, Anti-Rollback] | [✅/🔧/❌] |

### 5. Verbleibende Risiken

| Restrisiko | Bewertung | Akzeptanzentscheidung |
|------------|-----------|----------------------|
| [Beschreibung] | [Niedrig/Mittel] | [Akzeptiert / Weitere Maßnahmen geplant] |

### 6. Annex I Konformitätsprüfung

| Nr. | Annex I Teil I Anforderung | Konform | Nachweis |
|:---:|----------------------------|:-------:|---------|
| | Angemessenes Cybersicherheitsniveau basierend auf Risiken | [✅/❌] | [Verweis] |
| (a) | Keine bekannten ausnutzbaren Schwachstellen bei Auslieferung | [✅/❌] | [Trivy Report Datum] |
| (b) | Sichere Standardkonfiguration mit Rücksetzmöglichkeit | [✅/❌] | [Verweis] |
| (c) | Sicherheitsupdates automatisch bereitstellbar (mit Opt-out) | [✅/❌] | [Verweis] |
| (d) | Schutz vor unbefugtem Zugriff (Zugriffskontrollmechanismen) | [✅/❌] | [Verweis] |
| (e) | Schutz der Vertraulichkeit (Verschlüsselung at rest / in transit) | [✅/❌] | [Verweis] |
| (f) | Schutz der Integrität vor unerlaubter Manipulation | [✅/❌] | [Verweis] |
| (g) | Datenminimierung | [✅/❌] | [Verweis] |
| (h) | Schutz der Verfügbarkeit (Resilienz, DoS-Mitigation) | [✅/❌] | [Verweis] |
| (i) | Minimierung negativer Auswirkungen auf andere Dienste/Geräte | [✅/❌] | [Verweis] |
| (j) | Minimale Angriffsfläche einschließlich externer Schnittstellen | [✅/❌] | [Verweis] |
| (k) | Exploit-Minderung (Kompartmentalisierung, Least Privilege) | [✅/❌] | [Verweis] |
| (l) | Protokollierung und Überwachung relevanter Aktivitäten (mit Opt-out) | [✅/❌] | [Verweis] |
| (m) | Sichere und vollständige Löschung von Daten und Einstellungen | [✅/❌] | [Verweis] |

### 7. Ergebnis

**Gesamt-Risikobewertung:** [Niedrig / Mittel / Hoch / Kritisch]

**Empfehlung:**

- [ ] Produkt kann in aktueller Form freigegeben werden
- [ ] Freigabe nach Umsetzung der identifizierten Maßnahmen
- [ ] Weitere Analyse erforderlich

### 8. Unterschrift

| Feld | Wert |
|------|------|
| **Bewerter** | [Name] |
| **Datum** | [YYYY-MM-DD] |
| **Freigabe durch** | [Name, Funktion] |
| **Freigabedatum** | [YYYY-MM-DD] |
