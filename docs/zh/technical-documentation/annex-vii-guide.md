# Annex VII — 技术文档指南

## 概述

CRA 的 Annex VII 定义了每个制造商必须创建并保留10年的技术文档的完整内容。本指南详细说明每项要求，并引用相应的文档位置。

::: info 法律依据
**Art. 31 CRA：** 技术文档应在产品投放市场前编制，并持续保持更新。

**Annex VII CRA：** 技术文档的内容。
:::

## 要求1 — 产品一般描述

**Annex VII 第1项：** 含数字元素产品的一般描述，包括：

| 要素 | 描述 | 文档位置 |
|------|------|----------|
| 预期用途 | 目的、目标受众、使用场景 | [产品描述](/zh/technical-documentation/product-description) |
| 版本 | 受影响的软件/固件版本 | 发布说明、SBOM |
| 硬件要求 | 如适用：硬件要求 | 产品描述 |
| 基本特性 | 功能范围、核心功能 | 产品描述 |

**实施方式：** 按照[产品描述模板](/zh/technical-documentation/product-description)为每个产品编制一份文档。

---

## 要求2 — 设计与开发描述

**Annex VII 第2项：** 设计和开发流程的描述，包括：

| 要素 | 描述 | 文档位置 |
|------|------|----------|
| 安全架构 | 安全措施概述 | [安全架构](/zh/technical-documentation/security-architecture) |
| 数据处理 | 处理哪些数据、数据流 | 安全架构 |
| 威胁模型 | 已识别的威胁和对策 | 风险评估 |
| 设计决策 | 安全相关的架构决策 | 安全架构 |

---

## 要求3 — 网络安全风险评估

**Annex VII 第3项：** 根据 Art. 10(2) 进行的网络安全风险评估 (Cybersecurity Risk Assessment)，包括：

| 要素 | 描述 | 文档位置 |
|------|------|----------|
| 方法论 | 采用的风险评估方法 | [风险评估模板](/zh/templates/risk-assessment) |
| 已识别风险 | 网络安全风险清单 | 风险评估 |
| 评价 | 可能性 x 影响 | 风险评估 |
| 措施 | 风险缓解措施 | 风险评估 |
| 残余风险 | 已接受的残余风险及其理由 | 风险评估 |

---

## 要求4 — 漏洞处理 (Vulnerability Handling)

**Annex VII 第4项：** 漏洞处理流程的描述：

| 要素 | 描述 | 文档位置 |
|------|------|----------|
| 监控 | 如何识别漏洞 | [CVE 监控](/zh/vulnerability-management/cve-monitoring) |
| 评估 | 如何评估漏洞 | [风险评估](/zh/vulnerability-management/risk-assessment) |
| 修复 | 如何修复漏洞 | [补丁管理](/zh/vulnerability-management/patch-management) |
| 披露 | 如何披露漏洞 | [披露策略](/zh/incident-response/disclosure-policy) |
| SBOM | 机器可读的 SBOM | [SBOM与签名](/zh/sbom-signing/) |

---

## 要求5 — 适用的标准和规范

**Annex VII 第5项：** 已适用的协调标准 (Harmonised Standards)、通用规范或网络安全认证方案清单：

| 标准 | 范围 | 状态 |
|------|------|------|
| ISO/IEC 27001 | 信息安全管理体系 | 参考 |
| ISO/IEC 29147 | 漏洞披露 | 已适用 |
| ISO/IEC 30111 | 漏洞处理 | 已适用 |
| CycloneDX v1.6 | SBOM 格式 | 已适用 |
| Sigstore/Cosign | 制品签名 | 已适用 |
| OWASP ASVS | 应用安全验证 | 参考 |
| IEC 62443 | 工业网络安全 | 如涉及工业产品 |

*注：CRA 特定的协调标准正在制定中。一旦发布，此列表将更新。*

::: tip 协调标准
一旦 CRA 的协调标准发布，这些标准将实现合规推定 (Presumption of Conformity)。协调标准的适用对于[使用 Module A 的 Class I 产品](/zh/conformity/self-assessment)尤为关键。
:::

---

## 要求6 — 测试结果

**Annex VII 第6项：** 已执行的测试和检查结果：

| 测试类型 | 描述 | 工具 |
|----------|------|------|
| 静态分析 (SAST) | 源代码漏洞分析 | SonarQube、Semgrep |
| 动态分析 (DAST) | 运行时漏洞测试 | OWASP ZAP、Burp |
| 依赖项扫描 | 依赖项验证 | Trivy、Grype、Snyk |
| 容器扫描 | 容器镜像验证 | Trivy |
| 密钥扫描 | 在代码中搜索密钥 | Gitleaks、GitGuardian |
| 渗透测试 (Penetration Testing) | 手动安全测试 | 外部（用于 Class I+） |
| 模糊测试 (Fuzzing) | 健壮性测试 | AFL、libFuzzer |

**保留：** 测试结果作为 CI/CD 制品归档，可通过仓库访问。

---

## 要求7 — 合规评估结果

**Annex VII 第7项：** 合规评估 (Conformity Assessment) 的结果：

| 程序 | 文档 | 文档位置 |
|------|------|----------|
| Module A | 自我评估报告 | [内部控制](/zh/conformity/self-assessment) |
| Module B+C | EU 型式检验证书 | [Module B+C](/zh/conformity/module-bc) |
| Module H | QMS 证书 | [Module H](/zh/conformity/module-h) |
| EUCC | 网络安全证书 | [EUCC](/zh/conformity/eucc) |

---

## 要求8 — EU 符合性声明

**Annex VII 第8项：** EU 符合性声明 (EU Declaration of Conformity) 的副本：

> [EU 符合性声明](/zh/conformity/eu-declaration)
> [模板](/zh/templates/eu-declaration-of-conformity)

---

## 要求9 — 支持期限

**Annex VII 第9项：** 支持期限 (Support Period) 的确定：

> [支持与生命周期](/zh/technical-documentation/support-period)

---

## 完整性检查清单

- [ ] 第1项：产品描述已创建
- [ ] 第2项：设计和开发流程已文档化
- [ ] 第3项：网络安全风险评估已执行
- [ ] 第4项：漏洞处理已文档化
- [ ] 第4项：SBOM 已生成并归档
- [ ] 第5项：已适用标准已列出
- [ ] 第6项：测试结果已文档化并归档
- [ ] 第7项：合规评估结果已文档化
- [ ] 第8项：EU 符合性声明已创建
- [ ] 第9项：支持期限已确定
- [ ] 所有文档已归档（10年保留）
- [ ] 所有文档已版本化（Git）
