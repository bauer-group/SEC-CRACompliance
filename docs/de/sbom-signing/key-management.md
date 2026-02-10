# 4.2 Key Management

## Schlüsselverwaltung

Die sichere Verwaltung kryptographischer Schlüssel ist essenziell für die Integrität der Signierungsprozesse.

## Schlüsseltypen

| Schlüssel | Typ | Speicherort | Zweck |
|-----------|-----|-------------|-------|
| Cosign Private Key | Ed25519 / ECDSA P-256 | GitHub Secrets | Signierung von Artefakten |
| Cosign Password | Passwort | GitHub Secrets | Schutz des Private Keys |
| Cosign Public Key | Ed25519 / ECDSA P-256 | Repository (`cosign.pub`) | Verifikation durch Nutzer |

## Schlüsselerzeugung

```bash
# Neues Schlüsselpaar generieren
cosign generate-key-pair

# Ergebnis:
# cosign.key  → Private Key (passwortgeschützt)
# cosign.pub  → Public Key
```

## Schlüsselspeicherung

### Private Key

Der Private Key wird **ausschließlich** in GitHub Secrets gespeichert:

- **Secret Name:** `COSIGN_PRIVATE_KEY`
- **Zugriff:** Nur GitHub Actions Workflows
- **Schutz:** GitHub Secrets Encryption (Libsodium sealed box)
- **Sichtbarkeit:** Nie in Logs, nie im Code

### Passwort

- **Secret Name:** `COSIGN_PASSWORD`
- **Zugriff:** Nur in Kombination mit `COSIGN_PRIVATE_KEY`

### Public Key

- **Speicherort:** Repository-Root (`cosign.pub`)
- **Verfügbarkeit:** Öffentlich
- **Zweck:** Verifikation durch Nutzer und Systeme

## Schlüsselrotation

| Auslöser | Aktion | Frist |
|----------|--------|-------|
| **Jährlich** | Routinemäßige Rotation | Alle 12 Monate |
| **Kompromittierungsverdacht** | Sofortige Rotation | Unverzüglich |
| **Personalwechsel** | Prüfung und ggf. Rotation | Innerhalb 7 Tagen |
| **Sicherheitsvorfall** | Rotation im Rahmen des Incident Response | Gem. Playbook |

### Rotationsprozess

```
1. Neues Schlüsselpaar generieren
   └── cosign generate-key-pair

2. GitHub Secrets aktualisieren
   ├── COSIGN_PRIVATE_KEY → Neuer Private Key
   └── COSIGN_PASSWORD → Neues Passwort

3. Public Key im Repository aktualisieren
   └── cosign.pub → Neuer Public Key

4. Alten Public Key archivieren
   └── keys/cosign-<datum>.pub.archived

5. Dokumentation aktualisieren
   ├── Rotationsdatum
   ├── Key Fingerprint
   └── Grund der Rotation

6. Verifizierung
   └── Test-Signierung und -Verifikation durchführen
```

## Notfallverfahren bei Schlüsselkompromittierung

1. **Sofort:** GitHub Secrets rotieren (neues Schlüsselpaar)
2. **Innerhalb 1h:** Alle seit Kompromittierung signierten Releases identifizieren
3. **Innerhalb 4h:** Betroffene Releases mit neuem Schlüssel re-signieren
4. **Innerhalb 24h:** Nutzer informieren über Schlüsselwechsel
5. **Dokumentation:** Vorfall im Incident-Report dokumentieren

## Zugriffsberechtigungen

| Rolle | Private Key | Public Key | Key-Rotation |
|-------|:-----------:|:----------:|:------------:|
| Security Lead | Verwaltung (GitHub Secrets) | Lesen | Durchführung |
| DevOps Lead | Kein direkter Zugriff (nur via Workflow) | Lesen | Unterstützung |
| Development Team | Kein Zugriff | Lesen | Kein Zugriff |
| GitHub Actions | Lesen (Runtime) | Lesen | Kein Zugriff |
