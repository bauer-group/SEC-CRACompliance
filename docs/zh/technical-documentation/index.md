# 第七章：技术文档 (Technical Documentation)

## 7.1 概述

根据 CRA 附录 VII (Annex VII) 编制的技术文档是证明含数字元素产品 (Product with Digital Elements) 合规性的核心证据文件。技术文档必须在产品投放市场前编制完成，并保留至少10年。

::: info 法律依据
**Art. 31 CRA：** *"技术文档应在含数字元素产品投放市场前编制，并在预期产品生命周期内或产品投放市场后五年内（以较短者为准）持续更新。"*

**Annex VII CRA** 规定了技术文档的最低内容要求。
:::

## 章节结构

| 章节 | 主题 | Annex VII 参考 |
|------|------|----------------|
| **7.1** | [产品描述（模板）](/zh/technical-documentation/product-description) | 第1项：一般描述 |
| **7.2** | [安全架构](/zh/technical-documentation/security-architecture) | 第3项：架构与设计 |
| **7.3** | [更新机制](/zh/technical-documentation/update-mechanism) | 第4项：更新提供 |
| **7.4** | [支持与生命周期策略](/zh/technical-documentation/support-period) | Art. 13(8)，Annex II 第5项 |
| **7.5** | [安全要求（Annex I）](/zh/technical-documentation/security-requirements) | Annex I 第I部分：13项基本要求 |
| **7.6** | [Annex VII — 指南](/zh/technical-documentation/annex-vii-guide) | Annex VII：完整文档指南 |

## 附加强制性内容（跨章节）

| Annex VII 要求 | 文档位置 | 章节 |
|----------------|----------|------|
| SBOM（机器可读） | [SBOM与签名](/zh/sbom-signing/) | 第2章 |
| 网络安全风险评估 (Cybersecurity Risk Assessment) | [风险评估](/zh/vulnerability-management/risk-assessment) | 第3章 |
| 漏洞处理 (Vulnerability Handling) | [漏洞管理](/zh/vulnerability-management/) | 第3章 |
| 协调披露 (Coordinated Disclosure) | [披露策略](/zh/incident-response/disclosure-policy) | 第5章 |
| 合规评估结果 (Conformity Assessment) | [合规评估](/zh/conformity/) | 第8章 |
| EU 符合性声明 (EU Declaration of Conformity) | [EU DoC](/zh/conformity/eu-declaration) | 第8章 |
| 用户信息（Annex II） | [用户信息](/zh/templates/product-security-info) | 附录 |

## 保留义务

**Art. 10(13) CRA：** 技术文档应在产品投放市场后保留**10年**，或在支持期限 (Support Period) 内——以较长者为准。

| 文档类型 | 存储位置 | 保留期限 |
|----------|----------|----------|
| 技术文档 | 本仓库 (Git) | 10年 |
| 每个版本的 SBOM | 发布资产 + sbom/ | 10年 |
| 符合性声明 | 本仓库 | 10年 |
| 风险评估 | 本仓库 | 10年 |
| 测试结果 | GitHub Actions Artifacts / 归档 | 10年 |

## 产品特定文档

::: warning 需采取行动
对于每个与 CRA 相关的产品，必须编制单独的技术文档。本章提供的模板（特别是7.1产品描述）作为模板使用。

产品特定文档保存在 `docs/products/<productname>/` 下的单独目录中。
:::
