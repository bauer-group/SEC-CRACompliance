# 欧盟委员会 CRA 指南 (Art. 26)

**2026 年 7 月 27 日**，欧盟委员会批准了其**关于适用 (EU) 2024/2847 法规（网络弹性法案）的指南**内容。这是迄今为止对 CRA 最为详尽的解释：它厘清了法规本身未予明确的若干问题——适用范围、开源软件、实质性修改、支持期、产品分类以及远程数据处理。

本页记录**该文件是什么、具有何种法律效力，以及其内容被纳入本手册的位置**。实质内容不在此重复——它们已被纳入各操作章节，见下方的对应表。

## 源文件

| 字段 | 内容 |
|------|------|
| **文号** | C(2026) 5252 final（致委员会的通报）+ C(2026) 5252 final ANNEX（指南本体） |
| **标题** | Commission guidance on the application of Regulation (EU) 2024/2847 (Cyber Resilience Act) |
| **日期** | 布鲁塞尔，2026 年 7 月 27 日 |
| **法律依据** | Art. 26(1) CRA —— 委员会须发布指南以协助经济经营者，并特别关注微型企业及中小企业 |
| **篇幅** | 9 章、257 个编号段落、67 个具体示例、10 张图 |
| **筹备过程** | 含数字元素产品网络安全专家组；2026 年 3 月 3 日至 4 月 13 日的公众咨询 |
| **前身** | 委员会于 2025 年 12 月 3 日发布的 CRA 常见问答（FAQ） |

Art. 26(2) CRA 规定了指南必须涵盖的最低事项，四项均已覆盖：(i) CRA 的适用范围，尤其是远程数据处理解决方案与自由及开源软件；(ii)「支持期」的概念；(iii) CRA 与其他欧盟法规的相互关系；(iv)「实质性修改」的概念。

## 法律地位 —— 引用前务必阅读

::: danger 内容已批准，正式通过尚待完成
2026 年 7 月 27 日的通报批准的是指南草案的**内容**。附件中的指南 *"will be formally adopted by the Commission at a later date, when all language versions are available. It is only from that moment that it will apply."*

截至 **2026 年 8 月**，该正式通过**尚未完成**。内容已趋稳定，可用于规划；但在技术文档、符合性声明或与市场监管机构的往来函件中引用时，应注明撰写时正式通过程序仍未完成。
:::

委员会自身另外声明了三项限制：

| 限制 | 指南原文 |
|------|----------|
| **不具约束力** | 指南 *"is not binding for economic operators or other actors subject to the CRA."* 它阐明的是委员会的解释，旨在支持合规并促进统一执法。 |
| **不具权威解释效力** | *"An authoritative interpretation of the CRA may only be given by the Court of Justice of the European Union."* |
| **示例是说明，而非替代** | 67 个示例 *"are not intended to replace a case-by-case assessment, which will always be necessary to account for the specifics of each individual case."* |

::: tip BAUER GROUP 的使用方式
本指南被视为**关于 CRA 将如何被执行的最佳现有依据**，而非法律本身。凡本手册采纳指南中的某项解释之处，其决定与理由均记入产品档案，以便在最终通过的文本或后续判例出现分歧时，推理过程仍可被审计。
:::

指南同时面向市场监管机构、通报机构与公告机构。因此，其实际重要性高于「不具约束力」这一表述所暗示的程度：它正是执法机构预计将采用的解释。

## 指南结构

| 章 | 标题 | 所回答的核心问题 |
|----|------|------------------|
| 1 | 导言 | 目的、法律地位、与 FAQ 的关系 |
| 2 | 适用范围 | 软件何时算作*投放市场*？何为含数字元素的产品？ |
| 3 | 自由与开源软件 | FOSS 何时属于*在商业活动过程中*提供？谁是管理者？ |
| 4 | 实质性修改与备件 | 何种变更——物理的或软件的——会产生一个新产品？ |
| 5 | 支持期 | 多长、按版本如何计、实质性修改后如何处理？ |
| 6 | 重要产品与关键产品 | 何为*核心功能*，由此适用哪条合规路径？ |
| 7 | 风险评估与集成 | 剩余风险、尽职调查、产品族 |
| 8 | 远程数据处理 | 哪些云端与后端要素属于产品的一部分？ |
| 9 | 其他事项 | 报告义务、漏洞处理、与其他欧盟法规的关系 |

## 指南在本手册中的落点

| 指南章节 | 纳入位置 |
|----------|----------|
| 2.1–2.5 投放市场、软件、计算机代码、软硬件组合、数据连接 | [1.1 适用范围](/zh/overview/scope) |
| 2.6 复杂系统 | [1.1 适用范围](/zh/overview/scope) · [3.4 风险评估](/zh/vulnerability-management/risk-assessment) |
| 2.7 在 CRA 适用前设计的产品 | [1.1 适用范围](/zh/overview/scope) |
| 3 自由与开源软件（全部小节） | [1.7 开源软件管理者](/zh/overview/open-source-steward) |
| 4.1–4.2 物理维修、备件 | [1.8 实质性修改](/zh/overview/substantial-modifications) |
| 4.3 作为实质性修改的软件更新 | [1.8 实质性修改](/zh/overview/substantial-modifications) |
| 4.4 实质性修改的后果 | [1.8 实质性修改](/zh/overview/substantial-modifications) |
| 5 支持期，5.1 与实质性修改 | [6.4 支持与生命周期](/zh/technical-documentation/support-period) |
| 6.1 核心功能 | [7.1 产品分类](/zh/conformity/product-classification) |
| 6.2 重要产品与关键产品的合规评估 | [7.2 内部控制（模块 A）](/zh/conformity/self-assessment) |
| 6.3 对合规推定的影响 | [1.12 协调标准](/zh/overview/harmonised-standards) |
| 7.1–7.2 网络安全风险的评价与处理 | [3.4 风险评估](/zh/vulnerability-management/risk-assessment) |
| 7.3 外部依赖与集成组件的尽职调查 | [5.3 第三方评估](/zh/supply-chain/third-party-assessment) |
| 7.4 产品族的复用 | [3.4 风险评估](/zh/vulnerability-management/risk-assessment) |
| 8 远程数据处理（全部小节） | [1.15 远程数据处理](/zh/overview/remote-data-processing) |
| 9.1 报告义务 | [4.3 ENISA 报告流程](/zh/incident-response/enisa-reporting) |
| 9.2.1 向上游报告与共享安全修复 | [3.5 漏洞处理要求](/zh/vulnerability-management/handling-requirements) |
| 9.2.2 已知可利用漏洞 | [3.5 漏洞处理要求](/zh/vulnerability-management/handling-requirements) |
| 9.2.3 有效且定期的测试与审查 | [3.5 漏洞处理要求](/zh/vulnerability-management/handling-requirements) |
| 9.3 与其他法规的关系 | [行业法规与既有证书](/zh/clarifications/sectoral-law-and-certificates) |

## 本手册的变更

指南不仅补充了细节——在若干处，它**纠正**了本手册此前采用的解释。运营影响最大的变更如下：

| # | 变更 | 意义 |
|---|------|------|
| 1 | **实质性修改**的判定标准替换为 Art. 3(30) 的双要件测试及指南的风险导向准则 | 此前的三条件测试比法律更严格，会把应当报告的变更误判为非实质性 |
| 2 | **五年是下限，而非默认值** | 预期使用时长更长的产品需要更长的支持期；一律声明「5 年」是合规缺口 |
| 3 | 每个**经实质性修改的软件版本**都属于重新投放市场，须各自声明支持期 | 影响迭代式软件的发布规划 |
| 4 | 在投入工程资源的情形下，**开源管理者必须报告**被主动利用的漏洞（Art. 24(3)）——这并非自愿行为 | 此前在本手册中被描述为自愿报告 |
| 5 | **仅通过浏览器访问的 Web 应用不是含数字元素的产品** | 明确了产品目录的范围边界 |
| 6 | 第三方组件中的漏洞，仅在**于本方产品中被主动利用**时才须报告 | 避免自 2026 年 9 月 11 日起的过度报告与漏报 |
| 7 | 对 2026 年 9 月 11 日前已知悉的主动利用**无需追溯报告** | 消除了此前假定存在的义务 |
| 8 | 一个产品**只能有一个核心功能** | 解决了多功能产品的分类问题 |
| 9 | 合规推定**仅覆盖协调标准实际涵盖的风险** | 即便允许使用模块 A，附属功能仍可能不在推定范围内 |
| 10 | **第三方云服务商**所做的变更不构成产品的实质性修改 | 厘清了制造商责任的边界 |

## 指南未涵盖的内容

指南明确**不是** CRA 的完整注释。委员会自身指出两处空白，可能成为 Art. 26 项下后续指南的对象：

- CRA 与 **(EU) 2024/1689 法规（人工智能法案）** 的相互关系
- CRA 与 **(EU) 2022/2554 法规（DORA）** 的相互关系

因此，含 AI 组件的产品以及金融行业产品，仍需就重叠部分进行个案法律评估。已记录的接口参见 [NIS2 整合](/zh/overview/nis2-integration)。

## 相关章节

- [澄清与常见误解](/zh/clarifications/) —— 本节概览
- [行业法规与既有证书](/zh/clarifications/sectoral-law-and-certificates) —— Art. 69(1)、RED、机械法规、车辆
- [1.3 时间表与截止日期](/zh/overview/timeline) —— 指南所解释的 CRA 适用日期
