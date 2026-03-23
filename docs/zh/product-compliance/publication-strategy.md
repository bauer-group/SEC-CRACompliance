# 9.2 发布策略

## 9.2.1 双重发布概念

::: info 原则
**唯一事实来源** = 产品的 Git 仓库
**公开展示** = 中央合规网站
:::

合规数据只在一个地方维护——各产品的仓库中。从那里自动发布到中央合规网站。

```text
┌────────────────────┐     CI/CD      ┌──────────────────────────┐
│  产品仓库           │ ──────────────→│  合规门户                 │
│                    │                │                          │
│  .compliance/      │   验证         │  /products/{name}/       │
│    cra-statement.  │   + 发布       │    → HTML 渲染            │
│    json            │                │    → PDF 下载             │
└────────────────────┘                └──────────────────────────┘
        ↑                                       ↑
   开发人员                             客户、当局、
   在此维护                             公众
```

## 9.2.2 优势

| 方面 | 优势 |
|------|------|
| **版本控制** | 声明与产品代码一起版本化 |
| **审查** | 更改经过与代码相同的审查流程 |
| **自动化** | 发布时自动发布 |
| **一致性** | JSON Schema 在所有产品中强制统一格式 |
| **审计跟踪** | Git 历史记录每次更改 |

## 9.2.3 仓库结构

每个产品仓库包含一个 `.compliance/` 目录：

```text
product-repo/
├── .compliance/
│   ├── cra-statement.json          # 机器可读的 CRA 声明
│   └── README.md                   # 合规结构简要说明
├── SECURITY.md                     # 漏洞披露政策
├── docs/
│   └── compliance/
│       ├── eu-declaration.pdf      # 欧盟符合性声明 (Annex V)
│       └── user-info.md            # 用户信息 (Annex II)
└── ...
```

### 文件详情

| 文件 | 必需 | 描述 |
|------|------|------|
| `.compliance/cra-statement.json` | ✅ 是 | 机器可读的 CRA 合规声明（→ [9.3](/zh/product-compliance/machine-readable)） |
| `.compliance/README.md` | 推荐 | 向开发人员解释合规结构 |
| `SECURITY.md` | ✅ 是 | 漏洞披露政策（→ [4.2](/zh/incident-response/disclosure-policy)） |
| `docs/compliance/eu-declaration.pdf` | ✅ 是 | 具有法律约束力的欧盟符合性声明 |
| `docs/compliance/user-info.md` | ✅ 是 | 根据 Annex II 的用户信息 |

## 9.2.4 网站 URL 方案

中央合规门户遵循统一的 URL 结构：

```text
https://cra.app.bauer-group.com/
├── /products/                      # 产品目录
│   ├── /products/{name}/           # 产品合规页面
│   │   ├── /cra                    # CRA 合规声明
│   │   ├── /doc                    # 欧盟符合性声明
│   │   └── /sbom                   # SBOM 下载
│   └── ...
└── /api/                           # （可选）当局 API 访问
    └── /api/products/{name}.json   # 机器可读访问
```

## 9.2.5 可访问性

| 信息 | 公开 | 内部 | CRA 参考 |
|------|:----:|:----:|----------|
| CRA 合规声明 | ✅ | ✅ | Art. 13 |
| 欧盟符合性声明 | ✅ | ✅ | Art. 28 |
| 简化 DoC | ✅ | ✅ | Annex VI |
| 用户信息 (Annex II) | ✅ | ✅ | Art. 13 |
| SBOM | 应要求提供 | ✅ | Annex I, 第二部分 |
| 技术文档 (Annex VII) | ❌ | ✅ | Art. 31 |
| 合规评估记录 | ❌ | ✅ | Art. 28 |

::: warning 注意
完整的技术文档 (Annex VII) **不**需要公开提供，但必须在市场监督当局要求后 10 天内提交（Art. 31 CRA）。
:::

## 9.2.6 CI/CD 集成

发布集成到现有的 CI/CD 管道中：

```text
创建发布标签
    │
    ├── 1. JSON Schema 验证 (.compliance/cra-statement.json)
    │       → 失败 = 阻止发布
    │
    ├── 2. 完整性检查
    │       → 所有必填字段是否已填写？
    │       → 引用的文档（DoC、SBOM）是否存在？
    │
    ├── 3. 发布到合规门户
    │       → 生成 HTML
    │       → 生成 PDF（可选）
    │
    └── 4. 通知
            → Slack/Teams："产品 {product} v{version} 的合规声明已发布"
```

## 9.2.7 交叉引用

| 主题 | 链接 |
|------|------|
| JSON Schema 定义 | [9.3 机器可读格式](/zh/product-compliance/machine-readable) |
| 更新流程 | [9.4 维护与更新](/zh/product-compliance/maintenance) |
| SBOM 归档 | [2.3 归档与保留](/zh/sbom-signing/storage) |
| 可填写模板 | [A.9 CRA 合规声明](/zh/templates/cra-compliance-statement) |
