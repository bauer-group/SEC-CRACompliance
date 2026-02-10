# 4.3 ENISA 报告流程

## 4.3.1 法律依据

根据 Art. 14 CRA，制造商须向 ENISA 或相关国家 CSIRT 主管机构报告特定安全事件。报告义务自 **2026 年 9 月 11 日** 起适用。

::: info 法律依据
**Art. 14(1) CRA:** *"The manufacturer shall notify any actively exploited vulnerability contained in the product with digital elements simultaneously to the designated CSIRT and to ENISA. The manufacturer shall submit an early warning within 24 hours of becoming aware of it."*

**Art. 14(2) CRA:** *"The manufacturer shall submit within 72 hours of becoming aware a vulnerability notification containing a general description of the vulnerability, an initial assessment of the severity and impact, as well as information on corrective measures taken."*

**Art. 14(3) CRA:** *"The manufacturer shall submit within 14 days of becoming aware a final report containing a detailed description of the vulnerability, information on corrective or mitigating measures taken, and, where applicable, indicators of compromise."*
:::

::: danger 关键期限

| 通知类型 | 期限 | 期限起算 |
|----------|------|----------|
| 预警 (Early Warning) | **24 小时** | 知悉被积极利用的漏洞/严重事件 |
| 漏洞通知 (Vulnerability Notification) | **72 小时** | 知悉 |
| 最终报告 (Final Report) | **14 天** | 知悉 |

:::

## 4.3.2 须报告的事件

### 被积极利用的漏洞 (Actively Exploited Vulnerability)（Art. 14(1)）

BAUER GROUP 产品中的漏洞正在被积极利用。根据 Art. 3(42) CRA，当有可靠证据表明漏洞已被恶意行为者在未经系统所有者许可的情况下利用时，即构成积极利用。

**积极利用的指标：**

- 被纳入 **KEV 目录**（CISA 已知被利用漏洞目录）
- **威胁情报源 (Threat Intelligence Feeds)** 报告利用活动
- **客户或安全研究人员的报告** 提供利用证据
- 在日志、监控或事件响应流程中 **自行检测** 到
- **公开报告**（厂商公告、博客、论坛）中关于攻击的信息

### 严重安全事件 (Severe Security Incident)（Art. 14(3)）

严重影响产品或其用户安全的事件（Art. 3(43) CRA）。

**归类为严重事件的标准：**

| 标准 | 描述 | 示例 |
|------|------|------|
| 完整性受损 | 产品或其供应链的完整性被破坏 | 源代码被篡改、构建流水线被入侵 |
| 未经授权的数据访问 | 未经授权访问用户数据 | 数据泄露、API 滥用、配置错误 |
| 可用性丧失 | 安全相关功能受损 | 认证绕过、更新机制中断 |
| 更新被篡改 | 分发了被篡改的更新 | 供应链攻击、签名密钥泄露 |

## 4.3.3 角色与职责

| 角色 | 报告流程中的职责 |
|------|-----------------|
| **安全负责人 (Security Lead)** | 评估报告义务、提交 ENISA 通知、整体协调 |
| **DevOps 负责人 (DevOps Lead)** | 技术分析、补丁协调、基础设施措施 |
| **产品负责人 (Product Owner)** | 用户通知、影响评估、发布决策 |
| **管理层 (Management)** | SEV-1/SEV-2 的审批、资源分配、升级 |
| **开发人员 (Developer)** | 根因分析、补丁开发、安全审查 |

## 4.3.4 报告平台

### ENISA 统一报告平台 (Single Reporting Platform, SRP)

自 2026 年 9 月 11 日起，ENISA 统一报告平台作为中央报告入口可用：

| 属性 | 详情 |
|------|------|
| **URL** | 由 ENISA 提供（预计：`https://reporting.enisa.europa.eu`） |
| **访问** | 需根据 Art. 14(4) CRA 注册为制造商 |
| **格式** | 结构化在线表单 + API 接入（计划中） |
| **语言** | 英语（欧盟范围），可能支持国家语言 |
| **确认** | 平台自动发送接收确认 |

### 欧盟成员国国家 CSIRT

如 ENISA SRP 暂时不可用，通知应提交至相关国家 CSIRT。以下是全部 27 个欧盟成员国的完整目录：

| 国家 | CSIRT | 网站 | 电子邮件 |
|------|-------|------|----------|
| **奥地利** | CERT.at | [www.cert.at](https://www.cert.at) | `reports@cert.at` |
| **比利时** | CERT.be (CCB) | [ccb.belgium.be/cert](https://ccb.belgium.be/cert) | `cert@cert.be` |
| **保加利亚** | CERT Bulgaria | [www.govcert.bg](https://www.govcert.bg) | `cert@govcert.bg` |
| **克罗地亚** | National CERT (CERT.hr) | [www.cert.hr](https://www.cert.hr) | `ncert@cert.hr` |
| **塞浦路斯** | CSIRT-CY (DMRID) | [csirt.cy](https://csirt.cy) | `info@csirt.cy` |
| **捷克** | NUKIB / GovCERT.CZ | [www.nukib.cz](https://www.nukib.cz) | `cert@nukib.cz` |
| **丹麦** | CFCS | [www.cfcs.dk](https://www.cfcs.dk) | `cfcs@cfcs.dk` |
| **爱沙尼亚** | CERT-EE (RIA) | [www.cert.ee](https://www.cert.ee) | `cert@cert.ee` |
| **芬兰** | NCSC-FI (Traficom) | [www.kyberturvallisuuskeskus.fi](https://www.kyberturvallisuuskeskus.fi) | `cert@traficom.fi` |
| **法国** | CERT-FR (ANSSI) | [www.cert.ssi.gouv.fr](https://www.cert.ssi.gouv.fr) | `cert-fr@ssi.gouv.fr` |
| **德国** | CERT-Bund (BSI) | [www.bsi.bund.de](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Cyber-Sicherheitslage/Reaktion/CERT-Bund/cert-bund_node.html) | `certbund@bsi.bund.de` |
| **希腊** | National CERT-GR | [www.cert.gr](https://www.cert.gr) | `cert@cert.gr` |
| **匈牙利** | NCSC Hungary (NBSZ NKI) | [nki.gov.hu](https://nki.gov.hu) | `cert@nki.gov.hu` |
| **爱尔兰** | NCSC-IE | [www.ncsc.gov.ie](https://www.ncsc.gov.ie) | `certreport@ncsc.gov.ie` |
| **意大利** | CSIRT Italia (ACN) | [www.csirt.gov.it](https://www.csirt.gov.it) | `csirt@pec.acn.gov.it` |
| **拉脱维亚** | CERT.LV | [cert.lv](https://cert.lv) | `cert@cert.lv` |
| **立陶宛** | NKSC | [www.nksc.lt](https://www.nksc.lt) | `cert@nksc.lt` |
| **卢森堡** | CIRCL / GovCERT.lu | [www.circl.lu](https://www.circl.lu) | `info@circl.lu` |
| **马耳他** | CSIRTMalta | [www.mca.org.mt](https://www.mca.org.mt) | `csirtmalta@gov.mt` |
| **荷兰** | NCSC-NL | [www.ncsc.nl](https://www.ncsc.nl) | `cert@ncsc.nl` |
| **波兰** | CERT Polska (NASK) | [cert.pl](https://cert.pl) | `cert@cert.pl` |
| **葡萄牙** | CERT.PT (CNCS) | [www.cncs.gov.pt](https://www.cncs.gov.pt) | `cert@cert.pt` |
| **罗马尼亚** | CERT-RO | [www.cert.ro](https://www.cert.ro) | `cert@cert.ro` |
| **斯洛伐克** | SK-CERT (NASES) | [www.sk-cert.sk](https://www.sk-cert.sk) | `incident@sk-cert.sk` |
| **斯洛文尼亚** | SI-CERT | [www.cert.si](https://www.cert.si) | `cert@cert.si` |
| **西班牙** | CCN-CERT / INCIBE-CERT | [www.incibe.es](https://www.incibe.es) | `incidencias@incibe-cert.es` |
| **瑞典** | CERT-SE (MSB) | [www.cert.se](https://www.cert.se) | `cert@cert.se` |

*来源：[ENISA CSIRTs Network](https://csirtsnetwork.eu/) / [ENISA CSIRT Inventory](https://www.enisa.europa.eu/tools/csirts-by-country-interactive-map)。截至：2026-02。首次通知前请核实最新联系方式。*

::: warning 重复通知
当使用国家 CSIRT 作为备选渠道时，一旦 ENISA SRP 重新可用，须立即重新提交通知。
:::

## 4.3.5 报告流程

### 第 1 阶段：预警（≤ 24 小时）

**负责人：** 安全负责人

```
检测到被积极利用的漏洞/严重事件
    │
    ├── 1. 立即通知
    │   ├── 通知安全负责人（立即，全天候）
    │   └── 创建事件工单（GitHub Issue，标签：incident + enisa）
    │
    ├── 2. 初步评估（≤ 2 小时）
    │   ├── 确认漏洞/事件
    │   ├── 识别受影响的产品和版本
    │   ├── 验证是否存在积极利用（KEV、威胁情报）
    │   ├── 确定严重程度 (CVSS)
    │   └── 确认 ENISA 报告义务
    │
    ├── 3. 提交 ENISA 预警（≤ 24 小时）
    │   ├── 模板：/templates/enisa-early-warning
    │   ├── 平台：ENISA SRP（首选）或 CSIRT（备选）
    │   └── 根据 Art. 14(1) 的最低内容要求：
    │       ├── 制造商身份信息
    │       ├── 受影响产品/受影响版本
    │       ├── 漏洞/事件的性质
    │       ├── 严重程度（CVSS 评分 + 向量）
    │       ├── 确认存在积极利用
    │       ├── 影响的初步评估
    │       └── 计划的紧急措施
    │
    └── 4. 并行措施
        ├── 启动沟通计划（→ 5.4）
        ├── 通知管理层（针对 SEV-1/SEV-2）
        └── 启动紧急措施（临时解决方案、隔离）
```

**证据：** 通知确认截图 + 事件工单中的时间戳

### 第 2 阶段：漏洞通知（≤ 72 小时）

**负责人：** 安全负责人 + DevOps 负责人

```
详细评估进行中/已完成
    │
    ├── 1. 深入技术分析
    │   ├── 完成受影响产品的版本列表
    │   ├── 分配 CWE 分类
    │   ├── 计算完整的 CVSS v3.1 向量
    │   ├── 记录攻击向量和前提条件
    │   └── 描述利用场景
    │
    ├── 2. 记录措施
    │   ├── 已采取的缓解措施
    │   ├── 补丁开发状态
    │   ├── 可用的临时解决方案
    │   └── 建议的用户措施
    │
    └── 3. 提交 ENISA 通知（≤ 72 小时）
        ├── 模板：/templates/enisa-notification
        ├── 平台：ENISA SRP
        └── 根据 Art. 14(2) 的最低内容要求：
            ├── 预警参考编号
            ├── 详细的漏洞描述
            ├── CVE-ID（如已分配）
            ├── 所有受影响的产品版本
            ├── CWE 分类 + CVSS 向量
            ├── 技术细节（攻击向量、影响）
            ├── 已采取缓解措施的状态
            ├── 可用的补丁/临时解决方案
            ├── 建议的用户措施
            └── 受影响用户/设备的估计数量
```

**证据：** 通知确认 + 事件工单中的完整副本

### 第 3 阶段：最终报告（≤ 14 天）

**负责人：** 安全负责人

```
修复已完成或进展良好
    │
    ├── 1. 准备最终文档
    │   ├── 完成根因分析
    │   ├── 创建完整的事件时间线
    │   ├── 列出所有已采取的措施
    │   ├── 识别已提供的补丁/更新
    │   ├── 评估残余风险
    │   └── 总结经验教训
    │
    └── 2. 提交 ENISA 最终报告（≤ 14 天）
        ├── 模板：/templates/enisa-final-report
        ├── 平台：ENISA SRP
        └── 根据 Art. 14(3) 的最低内容要求：
            ├── 预警和通知的参考编号
            ├── 详细的漏洞描述
            ├── 根因分析
            ├── 完整的事件时间线
            ├── 所有已采取的纠正措施
            ├── 已提供的补丁/更新（含版本号）
            ├── 残余风险及其缓解
            ├── 妥协指标 (IoC)（如有）
            ├── 经验教训
            └── 预防未来事件的措施
```

**证据：** 通知确认 + 事件工单中的完整副本 + 归档

## 4.3.6 用户通知（Art. 14(8)）

在 ENISA 通知的同时，须 **立即** 通知受影响用户有关漏洞及可用的纠正措施。

| 方面 | 详情 |
|------|------|
| **触发条件** | 任何被积极利用的漏洞或严重事件 |
| **期限** | 立即（Art. 14(8)） |
| **主要渠道** | GitHub Security Advisory |
| **次要渠道** | 向已知客户发送电子邮件（针对 SEV-1/SEV-2） |
| **内容** | 漏洞描述、影响、建议措施、可用补丁 |
| **模板** | [漏洞报告](/zh/templates/vulnerability-report) |
| **负责人** | 安全负责人 + 产品负责人 |

::: warning 与 ENISA 的协调
在补丁可用之前，用户通知不得包含可能促进漏洞利用的细节。可与 ENISA 协调延迟披露（Art. 14(7)）。
:::

## 4.3.7 文档记录与存档

每份 ENISA 通知均须完整记录。该文档作为面向市场监管机构 (Market Surveillance Authorities) 的 **合规证据**（Art. 52 CRA）。

### 每份通知的强制性文档

| 文档组成部分 | 存储位置 | 保留期限 |
|-------------|----------|----------|
| 每份 ENISA 通知的完整副本 | 事件工单（GitHub Issue） | 10 年 |
| 所有通知和操作的时间戳 | 事件工单 + Git 日志 | 10 年 |
| ENISA / CSIRT 的接收确认 | 事件工单（附件） | 10 年 |
| 沟通日志（内部 + 外部） | 事件工单 | 10 年 |
| 用户通知（公告 + 电子邮件） | GitHub Advisory + 电子邮件存档 | 10 年 |
| 事后分析/经验教训 | 事件工单 | 10 年 |

### 参考编号方案

所有通知使用统一的参考编号方案：

| 通知类型 | 格式 | 示例 |
|----------|------|------|
| 预警 | `EW-YYYY-NNN` | EW-2026-001 |
| 漏洞通知 | `VN-YYYY-NNN` | VN-2026-001 |
| 最终报告 | `FR-YYYY-NNN` | FR-2026-001 |
| 内部事件 | `INC-YYYY-NNN` | INC-2026-001 |

## 4.3.8 准备措施（2026 年 9 月 11 日前）

报告义务生效前须完成以下措施：

| 编号 | 措施 | 负责人 | 截止日期 | 状态 |
|------|------|--------|----------|------|
| 1 | 完成 ENISA SRP 注册 | 安全负责人 | 平台可用后立即 | 待办 |
| 2 | 核实国家 CSIRT 联系方式 | 安全负责人 | 2026 年第二季度 | 待办 |
| 3 | 准备并内部测试报告模板 | 安全负责人 | 2026 年第二季度 | 已完成 |
| 4 | 培训事件响应团队的报告流程 | 安全负责人 | 2026 年第二季度 | 待办 |
| 5 | 通过 ENISA SRP 进行测试通知 | 安全负责人 | 2026 年第三季度 | 待办 |
| 6 | 更新升级路径和联系人列表 | 安全负责人 | 2026 年第二季度 | 待办 |
| 7 | 安全存储 ENISA 访问凭证 | 安全负责人 | 2026 年第三季度 | 待办 |
| 8 | 在桌面演练中测试报告流程 | 安全负责人 | 2026 年第三季度 | 待办 |

## 4.3.9 决策树：报告义务

```
检测到安全事件
    │
    ├── 我们产品中的漏洞是否受到影响？
    │   ├── 否 → 无 CRA 报告义务（如适用请检查 NIS2）
    │   └── 是 ↓
    │
    ├── 漏洞是否正在被积极利用？
    │   ├── 是 → 须报告 (Art. 14(1))
    │   │         → 24 小时预警 + 72 小时通知 + 14 天最终报告
    │   └── 否 ↓
    │
    ├── 是否属于严重安全事件？
    │   ├── 是 → 须报告 (Art. 14(3))
    │   │         → 24 小时预警 + 72 小时通知 + 14 天最终报告
    │   └── 否 ↓
    │
    └── 常规漏洞处理
        → 漏洞管理（→ 第 3 章）
        → 根据 SLA 进行补丁管理
        → 无 ENISA 报告义务
```
