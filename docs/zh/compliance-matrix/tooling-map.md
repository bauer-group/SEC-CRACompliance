# 8.1 工具映射

## 8.1.1 工具 -> CRA 合规矩阵

本映射展示了每个工具覆盖了哪些 CRA 要求。

## 8.1.2 GitHub 生态系统

### Dependabot

| CRA 要求 | 覆盖范围 |
|-----------------|-----------|
| Art. 10(6) -- 识别漏洞 | 自动对依赖项发出 CVE 警报 |
| Art. 10(7) -- 安全更新 | 当更新可用时自动创建 PR |
| Annex I, 第II部分, 编号 2 -- 及时修复 | 补丁更新的自动合并 |
| Annex I, 第II部分, 编号 5 -- 监控第三方组件 | 持续依赖项监控 |

### GitHub Security Advisories

| CRA 要求 | 覆盖范围 |
|-----------------|-----------|
| Art. 10(9) -- 协调披露 | 私密公告, CVE 分配 |
| Art. 14(8) -- 用户通知 | 包含建议措施的公开公告 |
| Annex I, 第II部分, 编号 4 -- 已修复 CVE 的披露 | 发布安全公告 |

### GitHub Actions（自动化模板）

| 工作流 | CRA 要求 | 功能 |
|----------|-----------------|----------|
| `automatic-release.yml` | Art. 10(7) | 自动化发布流水线 |
| `modules-security-scan.yml` | Art. 10(6) | 多引擎安全扫描 |
| `modules-license-compliance.yml` | Art. 10(4), Art. 13(23) | 许可证检查 + SBOM |
| `docker-build.yml` | Art. 10(12) | 镜像构建 + 签名 |
| `docker-maintenance-dependabot.yml` | Annex I, 第II部分, 编号 2 | 自动合并依赖更新 |
| `modules-docker-base-image-monitor.yml` | Annex I, 第II部分, 编号 5 | 基础镜像更新 |
| `security-management.yml` | Art. 13(8) | SECURITY.md 自动生成 |
| `teams-notifications.yml` | Art. 14（辅助） | 事件通信 |

## 8.1.3 安全扫描

### Trivy (Aqua Security)

| CRA 要求 | 覆盖范围 |
|-----------------|-----------|
| Art. 10(6) | 容器镜像漏洞扫描 |
| Art. 10(8) | 检测已知可利用漏洞 |
| Art. 13(23) | SBOM 生成 (CycloneDX, SPDX) |
| Annex I, 第II部分, 编号 1 | SBOM 组件检测 |
| Annex I, 第II部分, 编号 3 | 定期安全测试 (CI/CD) |

### Grype (Anchore)

| CRA 要求 | 覆盖范围 |
|-----------------|-----------|
| Art. 10(6) | 漏洞扫描（与 Trivy 互补） |
| Annex I, 第II部分, 编号 1 | 针对 SBOM 的 CVE 匹配 |

### OSV-Scanner (Google)

| CRA 要求 | 覆盖范围 |
|-----------------|-----------|
| Art. 10(6) | 基于 OSV 数据库的漏洞扫描 |
| Art. 10(8) | 检测已知漏洞（聚合 NVD, GitHub, PyPI, npm, Go 等） |
| Annex I, 第II部分, 编号 2 | 针对 lockfiles 和 SBOM 的 CVE 匹配 |

### Snyk

| CRA 要求 | 覆盖范围 |
|-----------------|-----------|
| Art. 10(6) | 应用安全扫描 |
| Annex I, 第II部分, 编号 3 | 代码级漏洞检测 |

### Gitleaks + GitGuardian

| CRA 要求 | 覆盖范围 |
|-----------------|-----------|
| Art. 10(1) | 防止敏感信息泄露 |
| Annex I, 第I部分, 编号 5 | 防止未授权访问（机密信息） |

## 8.1.4 SBOM 与合规

### Syft (Anchore)

| CRA 要求 | 覆盖范围 |
|-----------------|-----------|
| Art. 13(23) | SBOM 生成 (CycloneDX JSON) |
| Annex I, 第II部分, 编号 1 | 组件检测与文档记录 |
| Annex VII 编号 1 | 产品描述（依赖项） |

### FOSSA / 许可证合规 (License Compliance)

| CRA 要求 | 覆盖范围 |
|-----------------|-----------|
| Art. 10(4) | 对第三方组件的尽职调查（许可证） |
| Annex I, 第II部分, 编号 1 | 作为 SBOM 一部分的许可证清单 |

## 8.1.5 签名与完整性

### Cosign (Sigstore)

| CRA 要求 | 覆盖范围 |
|-----------------|-----------|
| Art. 10(12) | 更新的完整性保护 |
| Annex I, 第I部分, 编号 3.2 | 完整性保护（数据/制品） |
| Annex I, 第II部分, 编号 6 | 安全提供更新 |

## 8.1.6 CRA 合规工作流（本仓库）

除了自动化模板之外，本仓库还提供了专用的 CRA 工作流，可在每个源代码仓库中复用。

### 组合操作 (Composite Actions)

| 操作 | CRA 要求 | 功能 |
|--------|-----------------|----------|
| `cra-sbom-generate` | Art. 13(23) | 生成 CycloneDX SBOM (Trivy, 自动检测) |
| `cra-sbom-sign` | Art. 10(12) | 签名 SBOM (Cosign, 无密钥 OIDC) |
| `cra-vulnerability-scan` | Art. 10(6), (8) | 多引擎漏洞扫描 (Trivy + Grype + OSV-Scanner) |
| `cra-hub-report` | Art. 10, Art. 13 | 向软件安全中心 API 发送合规数据 |

### 可复用工作流 (Reusable Workflows)

| 工作流 | 类型 | CRA 要求 | 功能 |
|----------|-----|-----------------|----------|
| `cra-release.yml` | 仓库本地 | Art. 10(12), Art. 13(23) | SBOM + 签名 + 扫描作为发布资产 |
| `cra-scan.yml` | 仓库本地 | Art. 10(6), (8) | 计划 CVE 扫描并创建 issue |
| `cra-report.yml` | API 报告 | Art. 10, Art. 13, Annex VII | 所有 CRA 数据发送至 CRA 合规中心 |

## 8.1.7 计划扩展

| 工具/工作流 | CRA 要求 | 状态 |
|----------------|-----------------|--------|
| **CodeQL** (SAST) | Annex I, 第II部分, 编号 3 | 🔧 可选 |
| **CRA 合规中心** (Web 应用) | 集中评估 | 🔧 计划中 |

## 8.1.8 总结：通过工具实现的 CRA 覆盖

```
                         CRA 要求
                    ┌─────────────────────────┐
                    │  Art. 10（制造商）        │
                    │  ├── (1) 安全性          │──→ Trivy, Gitleaks, 代码审查
                    │  ├── (2) 风险            │──→ 手动 + 模板
                    │  ├── (4) 第三方          │──→ FOSSA, 许可证合规
                    │  ├── (6) 漏洞            │──→ CVE-Monitor, Dependabot
                    │  ├── (7) 更新            │──→ Dependabot, CI/CD
                    │  ├── (8) 无 CVE          │──→ CVE-Monitor, Trivy
                    │  ├── (9) CVD             │──→ GitHub Advisories
                    │  ├── (12) 完整性         │──→ Cosign
                    │  └── (16) 支持           │──→ SECURITY.md
                    ├─────────────────────────┤
                    │  Art. 13（信息）          │
                    │  ├── (6) CVD 政策        │──→ SECURITY.md
                    │  └── (23) SBOM           │──→ Trivy/Syft
                    ├─────────────────────────┤
                    │  Art. 14（报告）          │
                    │  ├── 24小时预警           │──→ ENISA SRP + Teams
                    │  ├── 72小时通知           │──→ ENISA SRP
                    │  └── 用户信息            │──→ GitHub Advisory
                    └─────────────────────────┘
```
