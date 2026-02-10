# 5.2 漏洞披露政策 (Vulnerability Disclosure Policy)

## 协调漏洞披露 (Coordinated Vulnerability Disclosure, CVD)

本政策定义了根据 CRA Art. 13(6) 和 ISO/IEC 29147:2018 进行协调漏洞披露 (Coordinated Vulnerability Disclosure) 的流程。

::: info 法律依据
**Art. 13(6) CRA:** *"The manufacturer shall facilitate the coordinated disclosure of vulnerabilities by designating a contact point for the reporting of vulnerabilities and setting out its coordinated vulnerability disclosure policy."*
:::

## 适用范围

本政策适用于 BAUER GROUP 的所有含数字元素的产品 (Products with Digital Elements)，包括：

- 软件产品（Web 应用程序、API、库）
- 容器镜像
- 固件 (Firmware)（ESP32、STM32、Zephyr）
- 可公开访问的服务

## 报告渠道

### 1. GitHub Security Advisories（首选）

**每个代码仓库：** Security → Advisories → New Draft Advisory

优势：

- 机密通信
- 集成 CVE 分配
- 在私有分支中进行补丁协调
- 结构化记录

### 2. 电子邮件

**地址：** <disclosure@cra.docs.bauer-group.com>

- 加密：PGP 密钥在代码仓库中（`SECURITY.md`）
- 语言：德语或英语

### 3. SECURITY.md

每个代码仓库包含一个 `SECURITY.md`，其中包含：

- 报告渠道
- PGP 密钥（或链接）
- 支持的版本
- 响应时间

## 外部报告者流程

### 我们的期望

报告漏洞的安全研究人员应：

- 在修复方案可用之前不公开披露漏洞
- 不窃取或销毁任何数据
- 不进行拒绝服务攻击
- 给予合理的修复时间

### 我们的承诺

| 承诺 | 详情 |
|------|------|
| **确认收到** | **48 小时** 内 |
| **初步评估** | **7 天** 内 |
| **状态更新** | 至少每 **14 天** |
| **协调漏洞披露** | 共同约定的日期，默认为报告后 **90 天** |
| **致谢** | 在公告中署名致谢（应要求） |
| **不追究法律责任** | 对遵守本政策的报告者不采取法律行动 |

### 披露时间线

```
第 0 天：  漏洞报告
第 2 天：  确认收到
第 7 天：  初步评估和严重程度分类
第 14 天： 向报告者提供状态更新
第 28 天： 向报告者提供状态更新
第 60 天： 补丁应已开发完成
第 90 天： 协调漏洞披露（默认截止日期）
           ├── 发布安全公告
           ├── 分配 CVE-ID
           ├── 发布补丁版本
           └── 在公告中致谢报告者（应要求）
```

::: warning 例外情况
对于被积极利用的漏洞，披露时间线将被缩短。在此类情况下，补丁将立即提供，并触发 ENISA 报告义务（24 小时）。
:::

## 接收报告的内部流程

```
外部漏洞报告
    │
    ├── 1. 确认收到（≤ 48 小时）
    │   └── 自动或由安全负责人确认
    │
    ├── 2. 分类（≤ 7 天）
    │   ├── 复现漏洞
    │   ├── 评估严重程度 (CVSS)
    │   ├── 识别受影响产品
    │   └── 检查：是否正在被积极利用？
    │       └── 是 → ENISA 报告义务 + 加速修复
    │
    ├── 3. 补丁开发
    │   ├── 开发修复方案（如适用在私有分支中）
    │   ├── 进行测试
    │   └── 安全审查
    │
    ├── 4. 协调漏洞披露
    │   ├── 与报告者协商时间
    │   ├── 准备安全公告
    │   ├── 申请 CVE-ID（通过 GitHub 或 MITRE）
    │   └── 准备补丁版本
    │
    └── 5. 发布
        ├── 发布安全公告
        ├── 发布补丁版本
        ├── 更新 SBOM
        ├── 通知用户
        └── 感谢并致谢报告者
```

## 安全港 (Safe Harbor)

BAUER GROUP 不会对以下安全研究人员采取法律行动：

- 善意行事
- 遵守本披露政策
- 未经授权不访问、复制或销毁数据
- 不通过拒绝服务损害服务
- 不危及受影响的第三方

## 合规参考

| 标准 | 覆盖范围 |
|------|----------|
| CRA Art. 13(6) | 联系人 + CVD 政策 |
| ISO/IEC 29147:2018 | 漏洞披露 (Vulnerability Disclosure) |
| ISO/IEC 30111:2019 | 漏洞处理流程 (Vulnerability Handling Processes) |
