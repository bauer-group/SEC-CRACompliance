# 2.2 格式规范

## 2.2.1 CycloneDX JSON

我们使用 **CycloneDX** 作为主要的 SBOM 格式。CycloneDX 是一项 OWASP 标准，满足 CRA 对"常用的、机器可读的格式"的要求 (Art. 13(23))。

### 为什么选择 CycloneDX

| 标准 | CycloneDX | SPDX |
|------|-----------|------|
| 主要关注点 | 安全与合规 | 许可证与知识产权 |
| 漏洞追踪 | 原生支持 (VEX) | 通过扩展 |
| 工具支持 | Trivy, Syft, Grype | Trivy, Syft |
| OWASP 标准 | 是 | 否（Linux 基金会） |
| CRA 合规 | 是 | 是 |
| 复杂度 | 较低 | 较高 |

### 结构

CycloneDX SBOM 包含以下主要元素：

```json
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.5",
  "serialNumber": "urn:uuid:<unique-id>",
  "version": 1,
  "metadata": {
    "timestamp": "2026-02-08T12:00:00Z",
    "tools": {
      "components": [
        {
          "type": "application",
          "name": "trivy",
          "version": "0.58.0"
        }
      ]
    },
    "component": {
      "type": "application",
      "name": "product-name",
      "version": "1.2.3",
      "supplier": {
        "name": "BAUER GROUP"
      }
    }
  },
  "components": [
    {
      "type": "library",
      "name": "example-package",
      "version": "4.1.0",
      "purl": "pkg:npm/example-package@4.1.0",
      "licenses": [
        {
          "license": {
            "id": "MIT"
          }
        }
      ],
      "hashes": [
        {
          "alg": "SHA-256",
          "content": "abc123..."
        }
      ]
    }
  ],
  "dependencies": [
    {
      "ref": "product-name",
      "dependsOn": ["example-package"]
    }
  ]
}
```

### 必填字段

| 字段 | CRA 相关性 | 描述 |
|------|-----------|------|
| `bomFormat` | 格式标识 | 必须为 `CycloneDX` |
| `specVersion` | 标准符合性 | 至少为 `1.5` |
| `serialNumber` | 唯一性 | 每个 SBOM 实例的 UUID |
| `metadata.timestamp` | 可追溯性 | 生成时间戳 |
| `metadata.component` | 产品标识 | 产品名称和版本 |
| `metadata.component.supplier` | 制造商标识 | BAUER GROUP |
| `components[].name` | 组件标识 | 软件包/库名称 |
| `components[].version` | 版本追踪 | 精确版本 |
| `components[].purl` | 唯一引用 | 软件包 URL（推荐） |

### 文件命名约定

```
sbom-<product>-<version>.cdx.json

示例：
sbom-api-gateway-v2.1.0.cdx.json
sbom-firmware-esp32-v1.3.2.cdx.json
sbom-web-frontend-v4.0.1.cdx.json
```

### SBOM 版本控制

产品的每个新版本都有其独立的 SBOM。当针对同一产品版本重新生成 SBOM 时（例如，修正 SBOM 本身时），SBOM 版本（`version` 字段）会递增。

## 2.2.2 SPDX（次要格式）

SPDX 作为次要格式受到支持，主要用于业务合作伙伴或监管机构明确要求 SPDX 的场景。

```bash
# SPDX 生成
trivy image --format spdx-json --output sbom.spdx.json <image>:<tag>
```
