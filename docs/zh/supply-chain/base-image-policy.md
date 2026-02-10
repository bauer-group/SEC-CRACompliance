# 5.2 基础镜像策略

## 5.2.1 Docker 基础镜像管理

基于容器的产品安全始于基础镜像。本政策定义了基础镜像的要求及其持续更新。

## 5.2.2 要求

### 允许的基础镜像

| 类别 | 允许的镜像 | 理由 |
|------|-----------|------|
| **首选** | `alpine`, `distroless`, `scratch` | 最小攻击面 |
| **允许** | `debian-slim`, `ubuntu` (LTS) | 广泛兼容性 |
| **受限** | `node`, `python`, `dotnet`（官方） | 仅限官方镜像 |
| **禁止** | 未知/非官方镜像 | 不可验证 |

### 质量标准

- **官方来源：** 仅限 Docker Official Images 或 Verified Publisher
- **当前版本：** 最新的 LTS 或稳定版本
- **最小体积：** 优先使用 slim/Alpine 变体
- **已知漏洞：** 无未修补的 CRITICAL CVE

## 5.2.3 自动化基础镜像监控

现有工作流 `modules-docker-base-image-monitor.yml` 持续监控所有容器项目的基础镜像。

### 工作原理

```
定时任务（每周/每天）
    │
    ├── 检查 Docker Hub API / GHCR
    │   └── 基础镜像是否有新版本？
    │
    ├── 检测到新版本
    │   ├── 创建包含更新的 PR
    │   ├── 触发 CI/CD 流水线
    │   │   ├── 使用新基础镜像构建
    │   │   ├── 对新镜像进行 Trivy 扫描
    │   │   └── 测试
    │   │
    │   └── 成功后：
    │       ├── 自动合并（如已配置）
    │       └── 或：DevOps 审查
    │
    └── 无新版本
        └── 下一个扫描周期
```

### Dependabot Docker 监控

除基础镜像监控外，Dependabot 还监控 Docker 生态系统：

```yaml
# .github/dependabot.yml
updates:
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    labels:
      - "dependencies"
      - "docker"
      - "security"
```

## 5.2.4 多阶段构建 (Multi-Stage Builds)

对于生产镜像，我们使用多阶段构建：

```dockerfile
# 阶段 1：构建
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# 阶段 2：生产（最小镜像）
FROM gcr.io/distroless/nodejs20-debian12
COPY --from=builder /app/dist /app
CMD ["app/server.js"]
```

**优势：**

- 构建工具不包含在生产镜像中
- 最小攻击面
- 更小的镜像体积
- 更少的潜在漏洞

## 5.2.5 基础镜像补丁流程

| 基础镜像中的 CVE 严重程度 | 操作 | 期限 |
|--------------------------|------|------|
| CRITICAL | 立即更新 + 重新构建 + 发布 | 48 小时 |
| HIGH | 在下一个补丁版本中更新 | 7 天 |
| MEDIUM | 在下一个次要版本中更新 | 30 天 |
| LOW | 在常规周期中更新 | 下一次发布 |
