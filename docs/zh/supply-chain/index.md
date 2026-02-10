# 第六章：供应链安全 (Supply Chain Security)

## 6.1 概述

保障软件供应链安全是 CRA 的核心要求。制造商在集成第三方组件时必须履行尽职调查 (Due Diligence) 义务，并确保整个供应链的完整性。

::: info 法律依据
**Art. 10(4) CRA:** *"The manufacturer shall exercise due diligence when integrating components sourced from third parties, to ensure that those components do not compromise the security of the product."*

**Annex I, Part II, No. 1:** *"The manufacturer shall identify and document the vulnerabilities and components contained in the product, including by drawing up a software bill of materials."*
:::

## 6.2 安全措施

### 已实施的措施

| 措施 | 工具 | 工作流 | 状态 |
|------|------|--------|------|
| 依赖项漏洞扫描 | Trivy, Grype, Snyk | `modules-security-scan.yml` | ✅ |
| 自动化依赖更新 | Dependabot | `docker-maintenance-dependabot.yml` | ✅ |
| 许可证合规 (License Compliance) | FOSSA / 自定义 | `modules-license-compliance.yml` | ✅ |
| 密钥扫描 (Secret Scanning) | Gitleaks, GitGuardian | `modules-security-scan.yml` | ✅ |
| Docker 基础镜像监控 | 自定义工作流 | `modules-docker-base-image-monitor.yml` | ✅ |
| 容器镜像签名 | Cosign | `docker-build.yml` | ✅ |
| SBOM 生成 | Trivy / Syft | `modules-license-compliance.yml` | ✅ |

## 6.3 章节结构

| 章节 | 主题 | 描述 |
|------|------|------|
| **6.1** | [依赖政策](/zh/supply-chain/dependency-policy) | 依赖项管理策略 |
| **6.2** | [基础镜像政策](/zh/supply-chain/base-image-policy) | Docker 基础镜像管理 |
| **6.3** | [第三方评估](/zh/supply-chain/third-party-assessment) | 第三方组件评估 |
| **6.4** | [经济运营者识别 (Art. 21)](/zh/supply-chain/economic-operator-identification) | 供应链可追溯性 |
