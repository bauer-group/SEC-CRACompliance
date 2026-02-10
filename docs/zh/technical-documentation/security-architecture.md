# 7.2 安全架构 (Security Architecture)

## 安全设计流程 (Security-by-Design)

安全架构文档说明了网络安全如何被集成到设计、开发和维护流程中。

::: info 法律依据
**Art. 10(1) CRA：** *"制造商应确保产品以确保适当网络安全水平的方式进行设计、开发和生产。"*

**Annex I，第I部分：** 产品的基本网络安全要求。
:::

## 安全开发生命周期 (Secure Development Lifecycle, SDLC)

```
规划 → 设计 → 开发 → 测试 → 发布 → 维护
   │         │          │           │         │         │
   │         │          │           │         │         └── CVE 监控
   │         │          │           │         │             补丁管理
   │         │          │           │         │             ENISA 报告
   │         │          │           │         │
   │         │          │           │         └── 生成 SBOM
   │         │          │           │             Cosign 签名
   │         │          │           │             发布说明
   │         │          │           │
   │         │          │           └── 安全扫描 (Trivy/Grype)
   │         │          │               许可证合规
   │         │          │               密钥扫描
   │         │          │
   │         │          └── 代码审查（四眼原则）
   │         │              依赖项检查
   │         │              分支保护
   │         │
   │         └── 威胁建模 (Threat Modeling)
   │             安全要求
   │             架构审查
   │
   └── 风险评估
       产品分类
       合规要求
```

## Annex I，第I部分 — 基本要求

以下来自 CRA Annex I 第I部分的要求在安全架构中得到了落实：

### (1) 默认安全 (Security by Default)

| 要求 | 实现方式 |
|------|----------|
| 安全的默认配置 | 默认采用限制性设置，无不必要的网络访问 |
| 最小攻击面 | Alpine/Distroless 基础镜像，仅开放必需的端口/服务 |
| 最小权限原则 | 容器以非root用户运行，最小权限 |

### (2) 未授权访问防护

| 要求 | 实现方式 |
|------|----------|
| 身份认证 | 产品特定（OAuth2、API Keys、mTLS） |
| 授权 | 基于角色的访问控制 (RBAC) |
| 暴力破解防护 | 速率限制、账户锁定 |

### (3) 机密性保护

| 要求 | 实现方式 |
|------|----------|
| 传输加密 | TLS 1.3（最低 TLS 1.2） |
| 数据加密 | 存储敏感数据采用 AES-256 |
| 密钥管理 (Secret Management) | GitHub Secrets，代码中不含明文密钥 |

### (4) 完整性保护

| 要求 | 实现方式 |
|------|----------|
| 制品签名 | 容器、二进制文件、SBOM 均采用 Cosign 签名 |
| 更新完整性 | 签名更新，SHA256 校验 |
| 代码完整性 | 分支保护、代码审查、签名提交 |

### (5) 可用性保护

| 要求 | 实现方式 |
|------|----------|
| 弹性 | 产品特定（冗余、故障转移） |
| DoS 防护 | 速率限制、资源限制 |
| 优雅降级 (Graceful Degradation) | 部分故障时的定义行为 |

### (6) 不利影响最小化

| 要求 | 实现方式 |
|------|----------|
| 日志记录 | 记录安全相关事件 |
| 监控 | 异常检测（产品特定） |
| 隔离 | 容器隔离、网络策略 |

## CI/CD 安全措施

| 措施 | 实现方式 | 工作流 |
|------|----------|--------|
| 分支保护 | 主分支受保护，需提交 PR | GitHub 设置 |
| 代码审查 | 至少1名审查者 | GitHub 设置 |
| 安全扫描 | 每次构建均运行 Trivy、Grype、Snyk | `modules-security-scan.yml` |
| 密钥扫描 | Gitleaks、GitGuardian | `modules-security-scan.yml` |
| 许可证合规 | 自动检查 | `modules-license-compliance.yml` |
| Dockerfile 检查 | Hadolint | `modules-validate-dockerfile.yml` |
| SBOM 生成 | 发布时自动生成 | `modules-license-compliance.yml` |
| 制品签名 | 发布时使用 Cosign | `docker-build.yml` |
| 依赖项更新 | Dependabot | `docker-maintenance-dependabot.yml` |

## 安全架构的证据

安全架构通过以下方式提供证据：

1. **自动化扫描** — CI/CD 流水线中的结果（归档的构建制品）
2. **代码审查** — 在 Pull Request 中记录（Git 历史）
3. **SBOM** — 机器可读的组件清单
4. **签名发布** — Cosign 签名可验证
5. **本文档** — 在 Git 仓库中进行版本控制
