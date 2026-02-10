# 2.6 验证

## 2.6.1 验证流程

验证确保交付的制品是真实的且未被篡改。用户和系统可以随时验证完整性。

## 2.6.2 验证容器镜像

```bash
# 1. 下载公钥（一次性操作）
curl -sL https://github.com/bauer-group/<repo>/raw/main/cosign.pub -o cosign.pub

# 2. 验证镜像签名
cosign verify --key cosign.pub ghcr.io/bauer-group/<image>:<tag>
```

**有效签名的预期输出：**

```
Verification for ghcr.io/bauer-group/<image>:<tag> --
The following checks were performed on each of these signatures:
  - The cosign claims were validated
  - The signatures were verified against the specified public key
```

## 2.6.3 验证二进制文件和固件

```bash
# 1. 下载制品、签名和公钥
curl -sLO https://github.com/bauer-group/<repo>/releases/download/v1.0.0/artifact.bin
curl -sLO https://github.com/bauer-group/<repo>/releases/download/v1.0.0/artifact.bin.sig
curl -sLO https://github.com/bauer-group/<repo>/raw/main/cosign.pub

# 2. 验证签名
cosign verify-blob --key cosign.pub --signature artifact.bin.sig artifact.bin

# 3. 验证 SHA256 哈希
sha256sum -c SHA256SUMS.txt
```

## 2.6.4 验证 SBOM

```bash
# 验证 SBOM 签名
cosign verify-blob \
  --key cosign.pub \
  --signature sbom.cdx.json.sig \
  sbom.cdx.json

# 验证 SBOM 哈希
sha256sum -c sbom.cdx.json.sha256
```

## 2.6.5 部署中的自动验证

### OTA 更新验证（固件）

OTA 服务器仅接受经过签名的制品：

```
OTA 服务器接收固件更新
    │
    ├── 1. 验证 SHA256 哈希
    │   └── 接收到的二进制文件的哈希 == 预期哈希？
    │
    ├── 2. 验证 Cosign 签名
    │   └── 使用存储的公钥执行 cosign verify-blob
    │
    ├── 两项检查均通过？
    │   ├── 是 → 批准更新进行分发
    │   └── 否 → 拒绝更新，触发告警
    │
    └── 日志记录：每次检查都被记录
```

### 容器部署验证

```yaml
# Kubernetes 准入控制器（示例）
# 仅允许经过签名的镜像
apiVersion: policy.sigstore.dev/v1alpha1
kind: ClusterImagePolicy
metadata:
  name: bauer-group-signed-images
spec:
  images:
    - glob: "ghcr.io/bauer-group/**"
  authorities:
    - key:
        data: |
          -----BEGIN PUBLIC KEY-----
          <cosign public key>
          -----END PUBLIC KEY-----
```

## 2.6.6 市场监督管理机构的验证

市场监督管理机构 (Market Surveillance Authorities) 可按以下方式验证所有制品的完整性：

1. **公钥** —— 从公开仓库获取
2. **发布资产** —— 下载（二进制文件、SBOM、签名、哈希）
3. **Cosign 验证** —— 执行验证
4. **SHA256 哈希** —— 进行比对

所有所需信息均可通过 GitHub Releases 公开访问。
