# SBOM 与签名

## 概述

软件物料清单 (Software Bill of Materials, SBOM) 和软件制品的签名是 CRA 合规的核心支柱。SBOM 提供了产品中包含的所有组件的透明清单，而签名则确保 SBOM 本身及所有交付制品的完整性 (Integrity) 和真实性 (Authenticity)。

::: info 法律依据
**Art. 13(23) CRA:** *"制造商应识别和记录含有数字元素的产品中的漏洞和组件，包括以常用的、机器可读的格式编制软件物料清单，至少涵盖产品的顶层依赖项。"*

**Art. 10(12) CRA:** *"制造商应确保向用户提供的安全更新以安全的方式分发，并在安装此类安全更新时确保产品的完整性。"*

**Annex I, Part I, No. 3:** *"含有数字元素的产品 [...] 应确保对存储、传输或以其他方式处理的数据 [...] 的完整性保护，防止篡改或更改。"*
:::

## SBOM 生命周期

根据 Art. 13(23) CRA，制造商必须创建至少涵盖产品顶层依赖项的 SBOM。SBOM 随每次发布自动生成，并经历以下生命周期：

```
发布触发器 (Git Tag)
    |
    v
构建制品
    |
    v
生成 SBOM (Trivy/Syft -> CycloneDX JSON)
    |
    |-->  将 SBOM 作为发布资产附加
    |-->  签名 SBOM (Cosign)
    |-->  生成 SHA256 哈希
    |-->  将哈希 + 签名作为发布资产附加
    +-->  归档 SBOM (合规仓库)
```

## 签名架构

发布过程中产生的所有制品均经过签名，以保证完整性和真实性。签名架构覆盖每个交付物：

```
构建流水线
    |
    +-- 构建制品 (二进制文件、镜像、固件)
    |   +-- 生成 SHA256 哈希
    |   +-- 使用 Cosign 签名
    |
    +-- SBOM (CycloneDX JSON)
    |   +-- 生成 SHA256 哈希
    |   +-- 使用 Cosign 签名
    |
    +-- 发布
        +-- 制品 + 签名 + 哈希
        +-- SBOM + 签名 + 哈希
        +-- 公钥 (cosign.pub)
        +-- SHA256SUMS.txt
```

## 要求

| 要求 | 实现方式 | CRA 条款 |
|------|----------|----------|
| 机器可读的 SBOM 格式 | CycloneDX JSON | Art. 13(23) |
| 顶层依赖项 | 通过 Syft/Trivy 自动检测 | Art. 13(23) |
| 每次发布的 SBOM | 每个发布标签生成 SBOM | 最佳实践 |
| 完整性保护 | 使用 Cosign 签名（所有制品和 SBOM） | Art. 10(12) |
| 可追溯性 | Git 历史 + 发布资产 | Annex VII |
| 可用性 | 归档至合规仓库 + 发布资产 | Art. 13(23) |

## 签名制品类型

| 制品 | 签名方式 | 工具 | 状态 |
|------|----------|------|------|
| Docker/容器镜像 | Cosign（镜像签名） | `docker-build.yml` | 已实现 |
| 发布二进制文件 | Cosign（Blob 签名） | `cra-release.yml` | 已实现 |
| SBOM | Cosign（Blob 签名，无密钥 OIDC） | `cra-release.yml` / `cra-sbom-sign` | 已实现 |
| 固件二进制文件 | Cosign（Blob 签名） | 构建工作流 | 计划中 |

## 工具

| 工具 | 功能 | 格式 |
|------|------|------|
| **Trivy** | 从容器镜像和文件系统生成 SBOM | CycloneDX, SPDX |
| **Syft** | 从源代码和二进制文件生成 SBOM | CycloneDX, SPDX |
| **Cosign** | 制品和 SBOM 的签名与验证 | Sigstore |
| **GitHub Actions** | 生成、签名和归档的自动化 | - |

## 工作流集成

SBOM 生成和签名通过两种路径执行：

**1. 自动化模板（现有）：**
SBOM 生成通过 `modules-license-compliance.yml` 模块集成到现有的发布工作流 (`automatic-release.yml`) 中。

```yaml
# 在工作流调用中激活
license-compliance:
  generate-sbom: true
  sbom-format: cyclonedx-json
```

**2. CRA 合规工作流（新增）：**
专用的 CRA 发布工作流负责 SBOM 的生成、签名和归档为发布资产——独立于现有的发布工作流。

```yaml
# 在任何仓库中使用（零配置）
jobs:
  cra-release:
    uses: bauer-group/SEC-CRACompliance/.github/workflows/cra-release.yml@main
    permissions:
      contents: write
      id-token: write
      security-events: write
```

该工作流使用组合动作 `cra-sbom-generate`（Trivy，自动检测）和 `cra-sbom-sign`（Cosign，无密钥 OIDC）。

## 章节结构

| 章节 | 主题 | 描述 |
|------|------|------|
| **1** | [SBOM 生成](/zh/sbom-signing/generation) | 生成流程、触发器和特定类型的工具 |
| **2** | [格式规范](/zh/sbom-signing/format) | CycloneDX JSON 格式、必填字段和命名约定 |
| **3** | [归档与保留](/zh/sbom-signing/storage) | 存储位置、保留策略和访问 |
| **4** | [签名](/zh/sbom-signing/signing) | SBOM 签名、制品签名和 Cosign 流程 |
| **5** | [密钥管理](/zh/sbom-signing/key-management) | 密钥生成、存储、轮换和应急流程 |
| **6** | [验证](/zh/sbom-signing/verification) | 面向最终用户、系统和监管机构的验证流程 |
