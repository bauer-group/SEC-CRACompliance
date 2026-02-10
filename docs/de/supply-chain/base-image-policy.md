# 6.2 Base Image Policy

## Docker Base-Image-Verwaltung

Die Sicherheit von Container-basierten Produkten beginnt beim Base Image. Diese Policy definiert die Anforderungen an Base Images und deren kontinuierliche Aktualisierung.

## Anforderungen

### Erlaubte Base Images

| Kategorie | Erlaubte Images | Begründung |
|-----------|----------------|------------|
| **Bevorzugt** | `alpine`, `distroless`, `scratch` | Minimale Angriffsfläche |
| **Erlaubt** | `debian-slim`, `ubuntu` (LTS) | Breite Kompatibilität |
| **Eingeschränkt** | `node`, `python`, `dotnet` (offizielle) | Nur offizielle Images |
| **Verboten** | Unbekannte / nicht-offizielle Images | Nicht verifizierbar |

### Qualitätskriterien

- **Offizielle Quelle:** Nur Docker Official Images oder Verified Publisher
- **Aktuelle Version:** Letzte LTS- oder Stable-Version
- **Minimale Größe:** Slim/Alpine-Varianten bevorzugen
- **Bekannte Schwachstellen:** Keine unpatched CRITICAL CVEs

## Automatisiertes Base-Image-Monitoring

Der bestehende Workflow `modules-docker-base-image-monitor.yml` überwacht kontinuierlich die Base Images aller Container-Projekte.

### Funktionsweise

```
Scheduled (wöchentlich/täglich)
    │
    ├── Docker Hub API / GHCR prüfen
    │   └── Neue Version des Base Images verfügbar?
    │
    ├── Neue Version erkannt
    │   ├── PR erstellen mit Update
    │   ├── CI/CD Pipeline triggern
    │   │   ├── Build mit neuem Base Image
    │   │   ├── Trivy Scan des neuen Images
    │   │   └── Tests
    │   │
    │   └── Bei Erfolg:
    │       ├── Auto-Merge (wenn konfiguriert)
    │       └── Oder: Review durch DevOps
    │
    └── Keine neue Version
        └── Nächster Scan-Zyklus
```

### Dependabot Docker-Monitoring

Ergänzend zum Base-Image-Monitor überwacht Dependabot Docker-Ökosysteme:

```yaml
# .github/dependabot.yml
updates:
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    labels:
      - "dependencies"
      - "docker"
      - "security"
```

## Multi-Stage Builds

Für Produktions-Images verwenden wir Multi-Stage Builds:

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Stage 2: Production (minimales Image)
FROM gcr.io/distroless/nodejs20-debian12
COPY --from=builder /app/dist /app
CMD ["app/server.js"]
```

**Vorteile:**

- Build-Tools sind nicht im Produktions-Image
- Minimale Angriffsfläche
- Kleinere Image-Größe
- Weniger potenzielle Schwachstellen

## Patch-Prozess für Base Images

| Schwere der CVE im Base Image | Maßnahme | Frist |
|-------------------------------|----------|-------|
| CRITICAL | Sofortiges Update + Rebuild + Release | 48h |
| HIGH | Update im nächsten Patch-Release | 7 Tage |
| MEDIUM | Update im nächsten Minor-Release | 30 Tage |
| LOW | Update im regulären Zyklus | Nächster Release |
