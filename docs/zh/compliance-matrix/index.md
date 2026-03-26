# 第8章：CRA 合规矩阵

## 完整映射：CRA 条款 -> 文档 -> 工具

本矩阵将每项相关的 CRA 要求映射到对应的文档和已实施的工具。它是审计和合规性评估 (Conformity Assessment) 的核心参考。

::: tip 状态概览

| 类别 | ✅ 已实施 | ⚠️ 产品相关 | ❌ 未完成 | 总计 |
|-----------|:----------------:|:--------------------:|:--------:|:------:|
| Art. 10 -- 制造商义务 | 8 | 4 | 0 | 12 |
| Art. 13 -- 信息义务 | 3 | 1 | 0 | 4 |
| Art. 14 -- 报告义务 | 1 | 3 | 0 | 4 |
| Art. 16 -- 授权代表 | 1 | 2 | 0 | 3 |
| Art. 28/29 -- 合规性与 CE | 0 | 2 | 0 | 2 |
| Annex I 第I部分 -- 安全性 | 6 | 1 | 0 | 7 |
| Annex I 第II部分 -- 漏洞 | 8 | 0 | 0 | 8 |
| Annex II -- 用户信息 | 4 | 4 | 0 | 8 |
| Annex VII -- 技术文档 | 3 | 4 | 0 | 7 |
| **总计** | **34** | **21** | **0** | **55** |

:::

详细映射：[8.1 工具映射](/zh/compliance-matrix/tooling-map)（工具 -> CRA 要求）

## 按经济运营者角色划分的义务

| CRA 领域 | <span class="badge-manufacturer">制造商</span> | <span class="badge-importer">进口商</span> | <span class="badge-distributor">分销商</span> |
|----------|:---:|:---:|:---:|
| 设计安全 (Art. 10) | ✅ 全部 | — | — |
| 合规性评估 (Art. 10(5)) | ✅ 全部 | — | — |
| SBOM 生成 (Art. 13(23)) | ✅ 全部 | — | — |
| 漏洞处理 (Annex I 第II部分) | ✅ 全部 | — | — |
| 安全更新 (Art. 10(7)) | ✅ 全部 | — | — |
| 向 ENISA 报告事件 (Art. 14) | ✅ 全部 | — | — |
| CE 标志与 EU DoC (Art. 28–29) | ✅ 全部 | ✅ 验证 | ✅ 验证 |
| 用户信息 (Annex II) | ✅ 全部 | ✅ 验证 | ✅ 验证 |
| 技术文档 (Annex VII) | ✅ 全部 | ✅ 保存可用 | — |
| 上市前验证合规性 | — | ✅ 全部 (Art. 15) | ✅ 全部 (Art. 17) |
| 不合规时通知制造商 | — | ✅ 全部 | ✅ 全部 |
| 配合市场监督 | ✅ 全部 | ✅ 全部 | ✅ 全部 |
| 产品/包装上标注名称和地址 | ✅ 全部 | ✅ 全部 | ✅ 全部 |

::: tip 角色说明
**制造商** — 承担主要合规责任。设计、开发和生产产品。
**进口商** — 必须在将产品投放欧盟市场前验证制造商的合规性。
**分销商** — 必须验证 CE 标志和声明的存在。不对内容负责。
:::

## 按产品类别估算工作量

| 要求领域 | <span class="badge-default">标准</span> | <span class="badge-class-i">I 类</span> | <span class="badge-class-ii">II 类</span> | <span class="badge-critical">关键</span> | 自动化程度 |
|---|---|---|---|---|---|
| 安全风险评估 | 20–40h | 20–40h | 30–60h | 40–80h | 手动 |
| SBOM 与签名 | 8–16h | 8–16h | 8–16h | 8–16h | 自动化 |
| 漏洞处理 | 20–40h | 20–40h | 20–40h | 20–40h | 自动化 |
| 事件报告机制 | 16–32h | 16–32h | 16–32h | 16–32h | 半自动 |
| 技术文档 | 40–80h | 40–80h | 60–120h | 80–160h | 手动 |
| CE 标志与 EU DoC | 8–16h | 8–16h | 8–16h | 8–16h | 手动 |
| 合规性评估 | 自评 (0h) | 自评或 40–80h\* | 40–80h | 80–160h | 手动 |
| **一次性总计** | **112–224h** | **112–304h** | **182–364h** | **252–504h** | |
| **年度总计** | **60–120h** | **60–160h** | **90–200h** | **130–260h** | |

\* I 类：完全采用协调标准时可自评；否则需第三方评估。

::: tip BAUER GROUP 方案
自动化工具链（Trivy、Grype、CycloneDX、Cosign、GitHub Actions）大幅降低了标准和 I 类产品的实际工作量。详见[适用性检查](/zh/overview/scope-checker)获取决策指导。
:::

---

## Art. 10 -- 制造商义务 (Obligations of Manufacturers)

| CRA 参考 | 要求 | 文档 | 工具 | 状态 |
|-------------|-------------|---------------|---------|:------:|
| Art. 10(1) | 在设计、开发、生产中达到适当的网络安全水平 | [安全架构](/zh/technical-documentation/security-architecture) | 安全扫描 (Trivy, Grype, Snyk), 代码审查 | ✅ |
| Art. 10(2) | 进行网络安全风险评估 | [风险评估](/zh/vulnerability-management/risk-assessment) | --（手动流程 + 模板） | ⚠️ |
| Art. 10(3) | 在文档中包含风险评估 | [技术文档](/zh/technical-documentation/) | Git 版本控制 | ⚠️ |
| Art. 10(4) | 对第三方组件进行尽职调查 | [供应链](/zh/supply-chain/) | 许可证合规、依赖项扫描 | ✅ |
| Art. 10(5) | 进行合规性评估 | [合规性评估](/zh/conformity/) | --（手动流程 + 模板） | ⚠️ |
| Art. 10(6) | 有效识别漏洞 | [漏洞管理](/zh/vulnerability-management/) | CVE-Monitor, Dependabot, Trivy | ✅ |
| Art. 10(7) | 免费提供安全更新 | [补丁管理](/zh/vulnerability-management/patch-management) | Dependabot, Auto-Merge, 发布流水线 | ✅ |
| Art. 10(8) | 无已知可利用漏洞 | [CVE 监控](/zh/vulnerability-management/cve-monitoring) | CVE-Monitor（每日）, Trivy | ✅ |
| Art. 10(9) | 协调漏洞披露 | [披露政策](/zh/incident-response/disclosure-policy) | SECURITY.md, GitHub Advisories | ✅ |
| Art. 10(10) | 漏洞报告联络点 | [披露政策](/zh/incident-response/disclosure-policy) | 每个仓库中的 SECURITY.md | ✅ |
| Art. 10(12) | 安全更新的完整性 | [SBOM 与签名](/zh/sbom-signing/) | Cosign, SHA256 | ✅ |
| Art. 10(13) | 保留文档 10 年 | [技术文档](/zh/technical-documentation/) | Git 仓库（10 年保留期） | ✅ |
| Art. 10(16) | 定义并发布支持期限 | [支持与生命周期](/zh/technical-documentation/support-period) | SECURITY.md, 产品页面 | ⚠️ |

## Art. 13 -- 信息义务 (Information Obligations)

| CRA 参考 | 要求 | 文档 | 工具 | 状态 |
|-------------|-------------|---------------|---------|:------:|
| Art. 13(6) | 发布 CVD 政策 | [披露政策](/zh/incident-response/disclosure-policy) | SECURITY.md | ✅ |
| Art. 13(8) | 漏洞报告的联系方式 | [SECURITY.md](/zh/SECURITY) | 仓库 SECURITY.md | ✅ |
| Art. 13(16) | 告知支持期限 | [支持与生命周期](/zh/technical-documentation/support-period) | -- | ⚠️ |
| Art. 13(23) | 生成 SBOM（机器可读） | [SBOM 与签名](/zh/sbom-signing/) | Trivy/Syft -> CycloneDX JSON | ✅ |

## Art. 14 -- 报告义务 (Reporting Obligations)

| CRA 参考 | 要求 | 文档 | 工具 | 状态 |
|-------------|-------------|---------------|---------|:------:|
| Art. 14(1) | 主动利用漏洞的预警（24小时） | [ENISA 报告流程](/zh/incident-response/enisa-reporting) | ENISA SRP（自 2026年9月起） | ⚠️ |
| Art. 14(2) | 漏洞通知（72小时） | [ENISA 报告流程](/zh/incident-response/enisa-reporting) | ENISA SRP | ⚠️ |
| Art. 14(3) | 最终报告（14天） | [ENISA 报告流程](/zh/incident-response/enisa-reporting) | ENISA SRP | ⚠️ |
| Art. 14(8) | 用户通知 | [通信计划](/zh/incident-response/communication) | GitHub Advisories, 电子邮件 | ✅ |

## Art. 16 -- 授权代表 (Authorised Representative)

| CRA 参考 | 要求 | 文档 | 工具 | 状态 |
|-------------|-------------|---------------|---------|:------:|
| Art. 16(1) | 通过书面授权指定授权代表（非欧盟制造商） | [角色与职责](/zh/overview/responsibilities) | --（合同流程） | ⚠️ |
| Art. 16(2) | 保留合规性文档 10 年 | [角色与职责](/zh/overview/responsibilities) | Git 仓库（10 年保留期） | ✅ |
| Art. 16(2) | 与市场监督机构合作 | [角色与职责](/zh/overview/responsibilities) | -- | ⚠️ |

## Art. 28 -- 合规声明与 CE (Declaration of Conformity & CE)

| CRA 参考 | 要求 | 文档 | 工具 | 状态 |
|-------------|-------------|---------------|---------|:------:|
| Art. 28, Annex V | 签发欧盟合规声明 | [欧盟合规声明](/zh/conformity/eu-declaration) | 模板 | ⚠️ |
| Art. 29 | 加贴 CE 标志 | [欧盟合规声明](/zh/conformity/eu-declaration) | -- | ⚠️ |

## Annex I, 第I部分 -- 安全要求 (Security Requirements)

| 编号 | 要求 | 文档 | 工具 | 状态 |
|----|-------------|---------------|---------|:------:|
| 1 | 适当的网络安全水平 | [安全架构](/zh/technical-documentation/security-architecture) | 多引擎安全扫描 | ✅ |
| 2 | 无已知可利用漏洞 | [CVE 监控](/zh/vulnerability-management/cve-monitoring) | CVE-Monitor, Trivy, Dependabot | ✅ |
| 3.1 | 保密性保护（数据） | [安全架构](/zh/technical-documentation/security-architecture) | TLS, AES-256 | ✅ |
| 3.2 | 完整性保护（数据） | [SBOM 与签名](/zh/sbom-signing/) | Cosign, SHA256 | ✅ |
| 3.3 | 可用性保护 | [安全架构](/zh/technical-documentation/security-architecture) | 产品相关 | ⚠️ |
| 4 | 安全默认配置 | [安全架构](/zh/technical-documentation/security-architecture) | 默认安全 (Security-by-Default) | ✅ |
| 5 | 防止未授权访问 | [安全架构](/zh/technical-documentation/security-architecture) | 认证/授权 (Auth/Authz) | ✅ |
| 6 | 最小攻击面 | [安全架构](/zh/technical-documentation/security-architecture) | Alpine/Distroless, 最小化服务 | ✅ |

## Annex I, 第II部分 -- 漏洞处理 (Vulnerability Handling)

| 编号 | 要求 | 文档 | 工具 | 状态 |
|----|-------------|---------------|---------|:------:|
| 1 | 识别和记录漏洞 (SBOM) | [SBOM 与签名](/zh/sbom-signing/) | Trivy/Syft, CycloneDX | ✅ |
| 2 | 及时修复漏洞 | [补丁管理](/zh/vulnerability-management/patch-management) | Dependabot, CI/CD | ✅ |
| 3 | 定期测试和审查 | [安全架构](/zh/technical-documentation/security-architecture) | CI/CD 安全扫描 | ✅ |
| 4 | 披露已修复的漏洞 | [披露政策](/zh/incident-response/disclosure-policy) | GitHub Security Advisories | ✅ |
| 5 | 协调漏洞披露 | [披露政策](/zh/incident-response/disclosure-policy) | SECURITY.md, CVD 流程 | ✅ |
| 6 | 提供安全更新 | [更新机制](/zh/technical-documentation/update-mechanism) | 发布流水线, OTA | ✅ |
| 7 | 及时提供 | [补丁管理](/zh/vulnerability-management/patch-management) | 基于 SLA（P0-P4） | ✅ |
| 8 | 指定联络点 | [SECURITY.md](/zh/SECURITY) | SECURITY.md, CVD 政策 | ✅ |

## Annex II -- 用户信息 (User Information)

| 编号 | 要求 | 文档 | 状态 |
|----|-------------|---------------|:------:|
| 1 | 制造商名称及联系方式 | 产品页面, SECURITY.md | ✅ |
| 2 | 产品标识 | 发布说明, 仓库 | ✅ |
| 3 | 预期用途 | [产品描述](/zh/technical-documentation/product-description) | ⚠️ |
| 4 | 安全相关属性 | [用户信息模板](/zh/templates/product-security-info) | ⚠️ |
| 5 | 支持期限 | [支持与生命周期](/zh/technical-documentation/support-period) | ⚠️ |
| 6 | 安装说明 | README, 产品文档 | ⚠️ |
| 7 | 漏洞报告联系方式 | SECURITY.md | ✅ |
| 8 | 重大变更的变更日志 | 变更日志, 发布说明 | ✅ |

## Annex VII -- 技术文档 (Technical Documentation)

| 编号 | 要求 | 文档 | 状态 |
|----|-------------|---------------|:------:|
| 1 | 一般产品描述 | [产品描述](/zh/technical-documentation/product-description) | ⚠️ |
| 2 | 安全风险评估 | [风险评估](/zh/vulnerability-management/risk-assessment) | ⚠️ |
| 3 | 架构和设计 | [安全架构](/zh/technical-documentation/security-architecture) | ✅ |
| 4 | 漏洞处理程序 | [漏洞管理](/zh/vulnerability-management/) | ✅ |
| 5 | 适用标准 | [合规矩阵](/zh/compliance-matrix/) | ✅ |
| 6 | 合规性评估 | [合规性评估](/zh/conformity/) | ⚠️ |
| 7 | 欧盟合规声明 | [欧盟合规声明](/zh/conformity/eu-declaration) | ⚠️ |

## 图例

| 符号 | 含义 |
|--------|-----------|
| ✅ | 已实施并记录 |
| ⚠️ | 文档可用，需要产品相关的具体实施 |
| ❌ | 尚未实施 |
