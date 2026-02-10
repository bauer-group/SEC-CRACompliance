# 2.1 SBOM 生成

## 2.1.1 生成流程

SBOM 随每次发布自动生成。该流程已集成到现有的 CI/CD 流水线中。

### 触发器

SBOM 生成由以下事件触发：

- 推送发布标签 (`v*.*.*`)
- 手动工作流触发 (workflow dispatch)
- PR 合并到主分支（作为预发布版本）

### 生成步骤

**1. 创建构建制品**

发布制品（容器镜像、二进制文件、软件包）按常规方式构建。

**2. 生成 SBOM**

```bash
# 容器镜像 SBOM
trivy image --format cyclonedx --output sbom.cdx.json <image>:<tag>

# 文件系统/源代码 SBOM
syft packages dir:. --output cyclonedx-json=sbom.cdx.json

# 替代方案：Trivy 文件系统
trivy fs --format cyclonedx --output sbom.cdx.json .
```

**3. 验证 SBOM**

```bash
# 结构验证
trivy sbom sbom.cdx.json --exit-code 0

# 检查完整性（组件数 > 0）
jq '.components | length' sbom.cdx.json
```

**4. 丰富元数据**

SBOM 将被丰富以下元数据：

- 产品名称和版本
- 构建时间戳
- 构建环境（GitHub Actions 运行器）
- 提交 SHA
- 制造商信息 (BAUER GROUP)

## 2.1.2 特定类型的生成

### Docker/容器镜像

```yaml
# 在 docker-build.yml 中
inputs:
  generate-sbom:
    default: true
  sbom-format:
    default: 'cyclonedx-json'
```

Trivy 扫描已构建的容器镜像并捕获：

- 操作系统软件包 (apt, apk, yum)
- 语言特定软件包 (npm, pip, go modules 等)
- 二进制依赖项

### .NET 项目

```bash
# NuGet 依赖项
syft packages dir:. --output cyclonedx-json=sbom.cdx.json
# 或：CycloneDX .NET 工具
dotnet tool install --global CycloneDX
dotnet CycloneDX <project>.csproj --output sbom.cdx.json --json
```

### Node.js 项目

```bash
# NPM 依赖项
syft packages dir:. --output cyclonedx-json=sbom.cdx.json
# 或：CycloneDX Node 模块
npx @cyclonedx/cyclonedx-npm --output-file sbom.cdx.json
```

### Python 项目

```bash
# pip/poetry 依赖项
syft packages dir:. --output cyclonedx-json=sbom.cdx.json
# 或：CycloneDX Python
pip install cyclonedx-bom
cyclonedx-py environment --output-format json > sbom.cdx.json
```

### 固件 / 嵌入式 (ESP32, STM32, Zephyr)

```bash
# PlatformIO 项目
syft packages dir:. --output cyclonedx-json=sbom.cdx.json

# Zephyr (west manifest)
# 用于提取 west.yml 依赖项的自定义脚本
```

::: warning 嵌入式注意事项
对于固件项目，自动 SBOM 生成通常是不完整的。需要对 SBOM 进行手动审查，并在必要时进行补充，特别是针对：

- 厂商 SDK (ESP-IDF, STM32 HAL)
- 静态链接库
- 引导加载程序组件
:::

## 2.1.3 质量标准

生成的 SBOM 必须满足以下最低要求：

| 标准 | 要求 |
|------|------|
| 格式 | CycloneDX JSON（版本 1.5+） |
| 规范版本 | `1.5` 或更高 |
| 元数据 | 产品名称、版本、时间戳、制造商 |
| 组件 | 至少包含顶层依赖项 |
| 许可证 | 每个组件的许可证 ID（如有） |
| 哈希值 | 每个组件的 SHA256 哈希（如有） |
| 验证 | 符合架构、可解析、非空 |
