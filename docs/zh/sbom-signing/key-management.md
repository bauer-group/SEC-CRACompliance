# 4.2 密钥管理

## 密钥管理

加密密钥的安全管理对于签名流程的完整性至关重要。

## 密钥类型

| 密钥 | 类型 | 存储位置 | 用途 |
|------|------|----------|------|
| Cosign 私钥 | Ed25519 / ECDSA P-256 | GitHub Secrets | 制品签名 |
| Cosign 密码 | 密码 | GitHub Secrets | 保护私钥 |
| Cosign 公钥 | Ed25519 / ECDSA P-256 | 仓库 (`cosign.pub`) | 用户验证 |

## 密钥生成

```bash
# 生成新的密钥对
cosign generate-key-pair

# 结果：
# cosign.key  → 私钥（密码保护）
# cosign.pub  → 公钥
```

## 密钥存储

### 私钥

私钥 **仅** 存储在 GitHub Secrets 中：

- **Secret 名称：** `COSIGN_PRIVATE_KEY`
- **访问权限：** 仅限 GitHub Actions 工作流
- **保护方式：** GitHub Secrets 加密（Libsodium sealed box）
- **可见性：** 永不出现在日志中，永不出现在代码中

### 密码

- **Secret 名称：** `COSIGN_PASSWORD`
- **访问权限：** 仅与 `COSIGN_PRIVATE_KEY` 配合使用

### 公钥

- **存储位置：** 仓库根目录 (`cosign.pub`)
- **可用性：** 公开
- **用途：** 供用户和系统进行验证

## 密钥轮换

| 触发条件 | 操作 | 期限 |
|----------|------|------|
| **每年** | 例行轮换 | 每 12 个月 |
| **怀疑泄露** | 立即轮换 | 不得延迟 |
| **人员变动** | 审查并在必要时轮换 | 7 天内 |
| **安全事件** | 作为事件响应 (Incident Response) 的一部分进行轮换 | 按应急手册执行 |

### 轮换流程

```
1. 生成新的密钥对
   └── cosign generate-key-pair

2. 更新 GitHub Secrets
   ├── COSIGN_PRIVATE_KEY → 新私钥
   └── COSIGN_PASSWORD → 新密码

3. 更新仓库中的公钥
   └── cosign.pub → 新公钥

4. 归档旧公钥
   └── keys/cosign-<date>.pub.archived

5. 更新文档
   ├── 轮换日期
   ├── 密钥指纹
   └── 轮换原因

6. 验证
   └── 执行测试签名和验证
```

## 密钥泄露时的应急流程

1. **立即：** 轮换 GitHub Secrets（新密钥对）
2. **1 小时内：** 识别自泄露以来签名的所有发布
3. **4 小时内：** 使用新密钥重新签名受影响的发布
4. **24 小时内：** 通知用户密钥变更
5. **文档记录：** 在事件报告 (Incident Report) 中记录该事件

## 访问权限

| 角色 | 私钥 | 公钥 | 密钥轮换 |
|------|:----:|:----:|:--------:|
| 安全负责人 (Security Lead) | 管理（GitHub Secrets） | 读取 | 执行 |
| DevOps 负责人 | 无直接访问（仅通过工作流） | 读取 | 支持 |
| 开发团队 | 无访问权限 | 读取 | 无访问权限 |
| GitHub Actions | 读取（运行时） | 读取 | 无访问权限 |
