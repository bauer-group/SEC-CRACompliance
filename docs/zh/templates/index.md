# 附录：表单与模板

## 概述

本附录包含根据 CRA 监管义务可直接使用的模板。模板涵盖三个领域：

1. **ENISA 报告义务** (Art. 14 CRA) -- 向 ENISA / CSIRT 发送有时限要求的通知
2. **事件文档** -- 内部和外部事件报告 (Incident Report)
3. **合规文档** -- 风险评估 (Risk Assessment)、合规声明 (Declaration of Conformity)、产品安全信息

::: warning 使用说明
所有模板必须按**产品**逐一填写。方括号 `[...]` 中的占位符应替换为实际值。填写完成的模板归档在相应的事件工单或产品目录（`docs/products/<product-name>/`）中。

ENISA 通知模板自 **2026年9月11日** 起投入运营使用（-> [5.3 ENISA 报告流程](/zh/incident-response/enisa-reporting)）。
:::

## ENISA 通知模板 (Art. 14 CRA)

| 模板 | 截止期限 | CRA 参考 | 用途 |
|----------|----------|---------------|-------|
| [ENISA 预警](/zh/templates/enisa-early-warning) | **24小时** | Art. 14(2)(a) | 主动利用漏洞/严重事件的初始通知 |
| [ENISA 通知](/zh/templates/enisa-notification) | **72小时** | Art. 14(2)(b) | 包含技术细节的详细漏洞通知 |
| [ENISA 最终报告](/zh/templates/enisa-final-report) | **14天** | Art. 14(2)(c) | 最终分析、根本原因、经验教训 |

## 事件模板

| 模板 | 用途 | 触发条件 |
|----------|-------|---------|
| [事件报告（内部）](/zh/templates/incident-report) | 安全事件的内部文档记录 | 每个 SEV-1 至 SEV-4 事件 |
| [漏洞报告（外部）](/zh/templates/vulnerability-report) | 向用户通报漏洞 | Art. 14(8)：对于需报告 ENISA 的事件，应无不当延迟地通知 |

## 合规模板

| 模板 | CRA 参考 | 用途 | 频率 |
|----------|---------------|-------|-----------|
| [风险评估](/zh/templates/risk-assessment) | Art. 10(2), Annex VII 编号 2 | 每个产品的网络安全风险评估 | 投放市场前 + 发生重大变更时 |
| [欧盟合规声明](/zh/templates/eu-declaration-of-conformity) | Art. 28, Annex V | 每个产品的正式合规声明 | 投放市场前 + 发布新版本时 |
| [产品安全信息](/zh/templates/product-security-info) | Annex II | 面向最终用户的安全信息 | 每个产品，版本变更时更新 |

## 技术文档中的模板

除此处列出的模板外，[7.1 产品描述（模板）](/zh/technical-documentation/product-description) 作为根据 Annex VII CRA 编制产品特定技术文档的模板。
