# 5.2 Base Image Policy

## 5.2.1 Docker Base Image Management

The security of container-based products begins with the base image. This policy defines the requirements for base images and their continuous updating.

## 5.2.2 Requirements

### Permitted Base Images

| Category | Permitted Images | Rationale |
|----------|-----------------|-----------|
| **Preferred** | `alpine`, `distroless`, `scratch` | Minimal attack surface |
| **Permitted** | `debian-slim`, `ubuntu` (LTS) | Broad compatibility |
| **Restricted** | `node`, `python`, `dotnet` (official) | Official images only |
| **Prohibited** | Unknown / unofficial images | Not verifiable |

### Quality Criteria

- **Official Source:** Only Docker Official Images or Verified Publisher
- **Current Version:** Latest LTS or stable version
- **Minimal Size:** Prefer slim/Alpine variants
- **Known Vulnerabilities:** No unpatched CRITICAL CVEs

## 5.2.3 Automated Base Image Monitoring

The existing workflow `modules-docker-base-image-monitor.yml` continuously monitors the base images of all container projects.

### How It Works

```
Scheduled (weekly/daily)
    │
    ├── Check Docker Hub API / GHCR
    │   └── New version of the base image available?
    │
    ├── New version detected
    │   ├── Create PR with update
    │   ├── Trigger CI/CD pipeline
    │   │   ├── Build with new base image
    │   │   ├── Trivy scan of the new image
    │   │   └── Tests
    │   │
    │   └── On success:
    │       ├── Auto-merge (if configured)
    │       └── Or: Review by DevOps
    │
    └── No new version
        └── Next scan cycle
```

### Dependabot Docker Monitoring

In addition to the base image monitor, Dependabot monitors Docker ecosystems:

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

## 5.2.4 Multi-Stage Builds

For production images, we use multi-stage builds:

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Stage 2: Production (minimal image)
FROM gcr.io/distroless/nodejs20-debian12
COPY --from=builder /app/dist /app
CMD ["app/server.js"]
```

**Benefits:**

- Build tools are not included in the production image
- Minimal attack surface
- Smaller image size
- Fewer potential vulnerabilities

## 5.2.5 Patch Process for Base Images

| CVE Severity in Base Image | Action | Deadline |
|----------------------------|--------|----------|
| CRITICAL | Immediate update + rebuild + release | 48h |
| HIGH | Update in next patch release | 7 days |
| MEDIUM | Update in next minor release | 30 days |
| LOW | Update in regular cycle | Next release |
