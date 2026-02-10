# 7.3 更新机制 (Update Mechanism)

## 概述

更新机制确保安全更新以安全、真实且及时的方式交付给用户。

::: info 法律依据
**Annex I，第II部分，第7项：** *"制造商应确保安全更新及时且免费地提供给用户。"*

**Art. 10(12) CRA：** 必须确保安全更新的完整性，特别是在自动安装的情况下。
:::

## 更新渠道

### 基于容器的产品

```
补丁可用
    │
    ├── 构建新的容器镜像
    │   ├── CI/CD 流水线（自动）
    │   ├── Trivy 扫描（无新 CVE）
    │   ├── 生成 SBOM
    │   └── Cosign 签名
    │
    ├── 发布镜像
    │   ├── GitHub Container Registry (GHCR)
    │   └── Docker Hub（如已配置）
    │
    ├── 用户通知
    │   ├── GitHub Release 含变更日志
    │   └── Security Advisory（修复 CVE 时）
    │
    └── 用户执行更新
        ├── docker pull <image>:<new-tag>
        ├── 验证签名：cosign verify
        └── 重启容器
```

### 固件更新 (OTA)

```
补丁可用
    │
    ├── 构建固件
    │   ├── 构建工作流（ESP32/STM32/Zephyr）
    │   ├── 生成 SBOM
    │   └── Cosign 签名
    │
    ├── 发布固件
    │   ├── GitHub Release Asset
    │   └── OTA 服务器（已签名）
    │
    ├── OTA 分发
    │   ├── 设备检查 OTA 服务器
    │   ├── 验证签名
    │   ├── 校验哈希值
    │   ├── 安装固件
    │   └── 防回滚检查
    │
    └── 回退方案
        └── 手动更新方式（USB/串口）
```

### 软件包 (NuGet, NPM)

```
补丁可用
    │
    ├── 构建 + 发布软件包
    │   ├── 注册中心（NuGet.org、npmjs.com）
    │   └── SBOM 作为发布资产
    │
    └── 用户执行更新
        └── npm update / dotnet update
```

## 完整性保护

每个更新通过以下机制进行保护：

| 机制 | 容器 | 固件 | 软件包 |
|------|:----:|:----:|:------:|
| Cosign 签名 | ✅ | ✅ | 🔧 计划中 |
| SHA256 哈希 | ✅ | ✅ | ✅（注册中心） |
| TLS 传输 | ✅ | ✅ | ✅ |
| 防回滚 (Anti-Rollback) | 不适用 | ✅ | 不适用 |
| 安全启动链 (Secure Boot Chain) | 不适用 | ✅（如支持） | 不适用 |

## 免费提供

根据 Art. 10(7) CRA，所有安全更新均**免费提供**：

- 容器镜像通过公共注册中心 (GHCR) 提供
- 固件通过 GitHub Releases（公开下载）提供
- 软件包通过公共注册中心提供

## 更新频率

| 产品类型 | 常规更新 | 安全更新 |
|----------|----------|----------|
| 容器镜像 | 按需 / 每月 | CRITICAL/HIGH 立即更新 |
| 固件 | 每季度 | CRITICAL/HIGH 立即更新 |
| 软件包 | 按需 | CRITICAL/HIGH 立即更新 |
