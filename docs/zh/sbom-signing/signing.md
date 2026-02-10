# 2.4 签名

## 2.4.1 概述

签名确保发布过程中产生的所有制品的完整性和真实性。包括 SBOM、容器镜像、发布二进制文件和固件。所有签名操作使用 **Cosign** (Sigstore)，它支持基于密钥的签名和无密钥签名 (Keyless Signing)。

::: info 法律依据
**Art. 10(12) CRA:** 制造商必须确保安全更新及相关信息（包括 SBOM）"以安全的方式提供，并保证完整性"。
:::

## 2.4.2 工具：Cosign (Sigstore)

Cosign 是 BAUER GROUP 生态系统中的主要签名工具。它是 Sigstore 项目的一部分，支持：

- **基于密钥的签名** —— 使用存储在 GitHub Secrets 中的私钥
- **无密钥签名** —— 通过 Sigstore/Fulcio 使用基于 OIDC 的身份验证（适用于公开项目）

Cosign 在整个 CI/CD 流水线中集成：容器镜像签名 (`docker-build.yml`)、SBOM 签名以及二进制文件/固件签名 (`cra-release.yml`)。

## 2.4.3 签名流程

### 1. 容器镜像签名

容器镜像在注册表中直接签名。这已在 `docker-build.yml` 工作流中实现。

```bash
# 签名镜像
cosign sign --key env://COSIGN_PRIVATE_KEY <registry>/<image>@<digest>

# 验证镜像
cosign verify --key cosign.pub <registry>/<image>@<digest>
```

**工作流集成（现有）：**

```yaml
# docker-build.yml
inputs:
  sign-image:
    description: 'Sign image with cosign'
    default: true
    type: boolean
```

### 2. SBOM 签名

签名 SBOM 可确保：

- SBOM 在事后未被更改（完整性）
- SBOM 来源于 BAUER GROUP（真实性）
- 与发布的关联可验证（不可否认性）

#### 基于密钥的签名

```bash
# 1. 签名 SBOM（分离签名）
cosign sign-blob \
  --key env://COSIGN_PRIVATE_KEY \
  --output-signature sbom.cdx.json.sig \
  --output-certificate sbom.cdx.json.cert \
  sbom.cdx.json

# 2. 生成 SHA256 哈希
sha256sum sbom.cdx.json > sbom.cdx.json.sha256

# 3. 验证签名
cosign verify-blob \
  --key cosign.pub \
  --signature sbom.cdx.json.sig \
  sbom.cdx.json
```

#### 无密钥签名 (Sigstore/Fulcio)

对于公开项目，可使用通过 Sigstore 的无密钥签名：

```bash
# 无密钥签名（基于 OIDC）
cosign sign-blob \
  --output-signature sbom.cdx.json.sig \
  --output-certificate sbom.cdx.json.cert \
  sbom.cdx.json

# 无密钥验证
cosign verify-blob \
  --certificate sbom.cdx.json.cert \
  --certificate-identity workflow@github.com \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com \
  --signature sbom.cdx.json.sig \
  sbom.cdx.json
```

### 3. 二进制文件/Blob 签名

Blob 签名用于发布二进制文件和其他非容器制品：

```bash
# 签名二进制文件
cosign sign-blob \
  --key env://COSIGN_PRIVATE_KEY \
  --output-signature artifact.sig \
  artifact.bin

# 验证二进制文件
cosign verify-blob \
  --key cosign.pub \
  --signature artifact.sig \
  artifact.bin
```

### 4. 固件签名

针对固件制品 (ESP32, STM32, Zephyr)：

```bash
# 签名固件
cosign sign-blob \
  --key env://COSIGN_PRIVATE_KEY \
  --output-signature firmware.bin.sig \
  firmware.bin

# 用于 OTA 验证的 SHA256
sha256sum firmware.bin > firmware.bin.sha256
```

## 2.4.4 OTA 安全

对于通过 OTA（空中下载，Over-The-Air）进行的固件更新，适用以下额外要求：

1. **设备上的签名验证** —— 设备在安装前验证 Cosign 签名
2. **哈希验证** —— 在传输前后验证 SHA256 哈希
3. **回滚保护** —— 防回滚计数器防止安装旧的（不安全的）版本
4. **安全启动链 (Secure Boot Chain)** —— 仅当签名链至信任根 (Root-of-Trust) 有效时才执行固件

## 2.4.5 供应链证明 (Supply Chain Attestation)

除签名外，还支持 SLSA 兼容的证明：

```bash
# 创建构建证明
cosign attest \
  --key env://COSIGN_PRIVATE_KEY \
  --predicate build-provenance.json \
  --type slsaprovenance \
  <registry>/<image>@<digest>
```

## 2.4.6 GitHub Actions 集成

```yaml
# 每个发布工作流中的签名步骤
steps:
  - name: Install Cosign
    uses: sigstore/cosign-installer@v3

  - name: Sign Container Image
    if: inputs.sign-image
    run: cosign sign --key env://COSIGN_PRIVATE_KEY ${{ env.IMAGE }}@${{ env.DIGEST }}

  - name: Sign SBOM
    env:
      COSIGN_PRIVATE_KEY: ${{ secrets.COSIGN_PRIVATE_KEY }}
      COSIGN_PASSWORD: ${{ secrets.COSIGN_PASSWORD }}
    run: |
      cosign sign-blob \
        --key env://COSIGN_PRIVATE_KEY \
        --output-signature sbom.cdx.json.sig \
        sbom.cdx.json

  - name: Sign Binary
    if: inputs.sign-binary
    run: cosign sign-blob --key env://COSIGN_PRIVATE_KEY --output-signature artifact.sig artifact.bin

  - name: Generate Checksums
    run: sha256sum artifact.bin sbom.cdx.json > SHA256SUMS.txt

  - name: Upload Release Assets
    uses: softprops/action-gh-release@v2
    with:
      files: |
        sbom.cdx.json
        sbom.cdx.json.sig
        sbom.cdx.json.sha256
```

## 2.4.7 密钥管理

所有签名操作的密钥均按照[密钥管理策略](/zh/sbom-signing/key-management)进行管理：

- 私钥：GitHub Secrets (`COSIGN_PRIVATE_KEY`)
- 密码：GitHub Secrets (`COSIGN_PASSWORD`)
- 公钥：在仓库中发布 (`cosign.pub`)
- 密钥轮换：每年一次或在怀疑泄露时

## 2.4.8 签名后的发布资产

```
Release v2.1.0
+-- product-v2.1.0.tar.gz                <- 构建制品
+-- product-v2.1.0.tar.gz.sig            <- 制品签名
+-- sbom-product-v2.1.0.cdx.json         <- SBOM
+-- sbom-product-v2.1.0.cdx.json.sig     <- SBOM 签名
+-- sbom-product-v2.1.0.cdx.json.sha256  <- SBOM 哈希
+-- cosign.pub                            <- 公钥
+-- SHA256SUMS.txt                        <- 所有哈希
```
