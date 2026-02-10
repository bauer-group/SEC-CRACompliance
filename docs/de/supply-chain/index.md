# Kapitel 6: Supply-Chain-Sicherheit

## 6.1 Übersicht

Die Absicherung der Software-Lieferkette ist eine zentrale CRA-Anforderung. Hersteller müssen Sorgfaltspflichten bei der Integration von Drittkomponenten erfüllen und die Integrität der gesamten Lieferkette gewährleisten.

::: info RECHTSGRUNDLAGE
**Art. 10 Abs. 4 CRA:** *„Der Hersteller übt bei der Integration von Komponenten, die von Dritten stammen, die gebotene Sorgfalt aus, um sicherzustellen, dass diese Komponenten die Sicherheit des Produkts nicht beeinträchtigen."*

**Annex I, Teil II, Nr. 1:** *„Der Hersteller ermittelt und dokumentiert die Schwachstellen und Komponenten, die in dem Produkt enthalten sind, unter anderem durch Erstellung einer Software-Stückliste."*
:::

## 6.2 Sicherheitsmaßnahmen

### Implementierte Maßnahmen

| Maßnahme | Tool | Workflow | Status |
|----------|------|----------|--------|
| Dependency Vulnerability Scanning | Trivy, Grype, Snyk | `modules-security-scan.yml` | ✅ |
| Automated Dependency Updates | Dependabot | `docker-maintenance-dependabot.yml` | ✅ |
| License Compliance | FOSSA / Custom | `modules-license-compliance.yml` | ✅ |
| Secret Scanning | Gitleaks, GitGuardian | `modules-security-scan.yml` | ✅ |
| Docker Base Image Monitoring | Custom Workflow | `modules-docker-base-image-monitor.yml` | ✅ |
| Container Image Signing | Cosign | `docker-build.yml` | ✅ |
| SBOM Generation | Trivy / Syft | `modules-license-compliance.yml` | ✅ |

## 6.3 Kapitelstruktur

| Sektion | Thema | Beschreibung |
|---------|-------|-------------|
| **6.1** | [Dependency Policy](/de/supply-chain/dependency-policy) | Richtlinien für Abhängigkeiten |
| **6.2** | [Base Image Policy](/de/supply-chain/base-image-policy) | Docker Base-Image-Verwaltung |
| **6.3** | [Third-Party Assessment](/de/supply-chain/third-party-assessment) | Bewertung von Drittkomponenten |
| **6.4** | [Wirtschaftsakteur-Identifizierung (Art. 21)](/de/supply-chain/economic-operator-identification) | Rückverfolgbarkeit in der Lieferkette |
