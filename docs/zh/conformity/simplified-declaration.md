# 7.9 简化 DoC（Annex VI）

## 7.9.1 概述

除了完整的 EU 符合性声明（Annex V）外，CRA 还允许根据 Annex VI 使用**简化版本 (Simplified EU Declaration of Conformity)**。前提是完整版本可在线获取时，简化版本可随产品提供。

::: info 法律依据
**Art. 28(3) CRA：** 制造商可根据 Annex VI 随产品提供简化的 EU 符合性声明，前提是完整版本可在线获取。

**Annex VI CRA：** 简化 EU 符合性声明的内容。
:::

## 7.9.2 何时使用简化版本？

| 场景 | 版本 |
|------|------|
| 产品包装、README、用户界面 | 简化版（Annex VI） |
| 正式文档、当局要求 | 完整版（Annex V） |
| 在线提供 | 完整版（Annex V） |
| 发布说明 | 简化版（Annex VI）附完整版 URL |

## 7.9.3 强制性内容（Annex VI）

简化 EU 符合性声明至少应包含：

### 1. 制造商信息

```
[制造商名称]
声明以下含数字元素的产品
```

### 2. 产品标识

```
[产品名称、型号、版本]
```

### 3. 合规声明

```
符合 Regulation (EU) 2024/2847
（Cyber Resilience Act）的规定。
```

### 4. 完整声明的 URL

```
完整的 EU 符合性声明请见：
[URL]
```

## 7.9.4 模板：简化 EU 符合性声明

```markdown
## EU 符合性声明（简化版）

**BAUER GROUP** 特此声明，产品

**[产品名称] v[版本]**

符合 Regulation (EU) 2024/2847
（Cyber Resilience Act）的规定。

完整的 EU 符合性声明请见：
> [完整 DoC 的 URL]

支持期限：[日期] 至 [日期]
联系方式：[电子邮件]
```

## 7.9.5 放置位置

### 软件产品

- 仓库中的 **README.md**
- 应用程序中的**关于对话框**或页脚
- 每个版本的**发布说明**
- **产品网站**
- **容器镜像标签**（OCI Annotations）

### 固件/硬件

- **包装**（印刷或附页）
- **快速入门指南**
- **产品标签**（带 URL 的二维码）

## 7.9.6 容器镜像标签示例

```dockerfile
LABEL eu.cra.doc.url="https://go.bauer-group.com/cra/doc/[product]"
LABEL eu.cra.doc.version="1.0"
LABEL eu.cra.support.end="2031-12-31"
```

## 7.9.7 与 Annex V 的关系

| 方面 | Annex V（完整版） | Annex VI（简化版） |
|------|-------------------|-------------------|
| **强制性** | 是，始终需要 | 可选（附 Annex V 的 URL） |
| **范围** | 10项强制内容 | 4项强制内容 |
| **保留** | 10年 | 产品生命周期 |
| **当局要求** | 必须提交 | 不充分 |
| **语言** | 当局所用语言 | 目标市场语言 |

> 完整版：[EU 符合性声明（Annex V）](/zh/conformity/eu-declaration)
>
> 可填写模板：[EU 符合性声明模板](/zh/templates/eu-declaration-of-conformity)
