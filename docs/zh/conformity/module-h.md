# 全面质量保证（Module H）

## 概述

Module H 下的全面质量保证 (Comprehensive Quality Assurance) 是 **Class II** 产品的替代合规评估程序。与 Module B+C 不同，此方法不检验单个型式样品，而是检验制造商的**整个质量管理体系 (Quality Management System, QMS)**。

::: info 法律依据
**Art. 24(2) CRA：** 对于 Class II 产品，作为 EU 型式检验（Module B+C）的替代方案，可采用全面质量保证（Module H）。

**CRA Annex VIII，Module H** 描述了对质量管理体系的要求。
:::

## 适用范围

| 类别 | Module H 是否适用？ |
|------|---------------------|
| 默认 | 否 — Module A 即可 |
| Class I | 否 — Module A* 或 B+C |
| **Class II** | **是**（作为 Module B+C 的替代方案） |
| 关键 | 否 — 需要 EUCC |

## Module H 与 Module B+C 比较

| 标准 | Module B+C | Module H |
|------|-----------|----------|
| **评估对象** | 单个型式样品 | 整个 QMS |
| **适合于** | 少量产品变体 | 多产品变体 |
| **前提条件** | 技术文档 | 认证的 QMS |
| **优势** | 针对单一产品更集中、更快速 | 覆盖 QMS 下的所有产品 |
| **劣势** | 每个新产品需单独检验 | 初始投入较高 |
| **建议适用** | 1-3个 Class II 产品 | 4个以上 Class II 产品 |

## 程序

### 1. 建立质量管理体系

QMS 必须涵盖以下领域：

#### 设计阶段（安全设计, Security by Design）

- 产品规格中的网络安全要求
- 威胁建模和风险评估
- 安全架构原则
- 设计流程中的安全审查

#### 开发阶段（安全开发, Secure Development）

- 安全开发指南（安全编码指南）
- 以安全为重点的代码审查
- 静态代码分析 (SAST)
- 依赖管理和漏洞扫描

#### 测试阶段（安全测试, Security Testing）

- 动态分析 (DAST)
- 渗透测试
- 模糊测试 (Fuzzing)
- 安全功能的集成测试

#### 生产阶段（安全构建与发布, Secure Build & Release）

- 可重现的构建
- 所有制品的签名（[Cosign](/zh/sbom-signing/signing)）
- 每个发布版本生成 SBOM（[SBOM 生命周期](/zh/sbom-signing/)）
- 供应链完整性验证

#### 运营阶段（上市后监督, Post-Market Surveillance）

- 漏洞监控（[CVE 监控](/zh/vulnerability-management/cve-monitoring)）
- 补丁管理（[参考](/zh/vulnerability-management/patch-management)）
- 事件响应（[应急手册](/zh/incident-response/playbook)）
- ENISA 报告流程（[参考](/zh/incident-response/enisa-reporting)）

### 2. QMS 评估的公告机构

- 通过 [NANDO 数据库](https://ec.europa.eu/growth/tools-databases/nando/)识别机构
- 机构必须获得 CRA QMS 评估的通知授权
- 签订涵盖审核范围和监督间隔的合同

### 3. QMS 审核

公告机构检验：

1. **QMS 文档** — 流程描述、策略、程序
2. **实施情况** — 记录的流程是否确实被执行
3. **有效性** — 流程是否达到了所需的网络安全水平
4. **Annex I 覆盖** — QMS 是否覆盖了所有基本要求

### 4. QMS 证书

审核成功通过后，公告机构签发 **QMS 证书**。在此 QMS 下制造的所有产品均被视为已通过合规评估。

### 5. 监督

- 公告机构的**定期审核**（通常每年一次）
- 可能进行**不预先通知的检查**
- QMS 发生重大变更时需**重新认证**

## 与现有标准的整合

Module H 与现有管理体系具有良好的整合性：

| 标准 | 与 Module H 的协同 |
|------|-------------------|
| **ISO 27001**（ISMS） | 与安全控制措施高度重叠 |
| **ISO 9001**（QMS） | 基础 QMS 结构可复用 |
| **IEC 62443**（工业安全） | 与工业 IoT 产品相关 |
| **ISO/SAE 21434**（汽车） | 与汽车软件相关 |

::: tip 利用协同效应
如果已有经认证的 ISO 27001 或 ISO 9001 管理体系，可将其作为 CRA QMS 的基础。需补充 Annex I 的网络安全特定要求。
:::

## 时间线

| 阶段 | 预估时间 |
|------|----------|
| QMS 建设/扩展 | 6-12个月 |
| 内部审核 | 2-4周 |
| 选择公告机构 | 2-4周 |
| 外部审核 | 4-8周 |
| 整改 | 2-8周 |
| 证书签发 | 1-2周 |
| **总计** | **约9-15个月** |

## 费用

| 费用项目 | 预估范围 |
|----------|----------|
| QMS 建设（内部/外部） | EUR 20,000 - 80,000 |
| 初次审核 | EUR 15,000 - 40,000 |
| 年度监督审核 | EUR 5,000 - 15,000 |
| 重新认证（每3年） | EUR 10,000 - 30,000 |

*注：数值仅供参考。如已有 ISO 27001/9001，投入将显著减少。*

## 检查清单：Module H

- [ ] 产品分类已完成（确认为 Class II）
- [ ] Module H 与 Module B+C 的选择已做出并论证
- [ ] QMS 已建设或现有 QMS 已扩展
- [ ] 所有阶段已覆盖（设计、开发、测试、生产、运营）
- [ ] Annex I 要求已嵌入 QMS
- [ ] 内部审核已执行
- [ ] 公告机构已识别并联系（NANDO）
- [ ] 与公告机构签订合同
- [ ] 外部审核通过/整改已实施
- [ ] QMS 证书已获得
- [ ] 监督计划已商定
- [ ] EU 符合性声明已签发（[模板](/zh/templates/eu-declaration-of-conformity)）
- [ ] 加贴公告机构识别编号的 CE 标志
