import type { LocaleSpecificConfig } from 'vitepress'
import type { ThemeConfig } from '../theme/types'

export const zh: LocaleSpecificConfig<ThemeConfig> & { label: string; link: string } = {
  label: '简体中文',
  lang: 'zh-CN',
  link: '/zh/',
  description: '网络弹性法案 (Cyber Resilience Act) – 合规文档 | BAUER GROUP',

  themeConfig: {
    // -----------------------------------------------------------------
    // Announcement Banner
    // -----------------------------------------------------------------

    announcement: {
      text: '本文档正在积极开发中，尚未最终定稿。',
      type: 'warning',
      dismissible: true,
    },

    // -----------------------------------------------------------------
    // Navigation
    // -----------------------------------------------------------------

    nav: [
      { text: '概述', link: '/zh/overview/' },
      { text: '澄清', link: '/zh/clarifications/' },
      {
        text: '文档',
        items: [
          {
            text: '制品与安全',
            items: [
              { text: 'SBOM 与签名', link: '/zh/sbom-signing/' },
              { text: '漏洞管理', link: '/zh/vulnerability-management/' },
              { text: '供应链安全', link: '/zh/supply-chain/' },
            ]
          },
          {
            text: '流程',
            items: [
              { text: '事件响应', link: '/zh/incident-response/' },
              { text: '技术文档', link: '/zh/technical-documentation/' },
            ]
          },
        ]
      },
      { text: '合规评估', link: '/zh/conformity/' },
      { text: '合规发布', link: '/zh/product-compliance/' },
      {
        text: '参考',
        items: [
          { text: '合规矩阵', link: '/zh/compliance-matrix/' },
          { text: '模板', link: '/zh/templates/' },
        ]
      },
    ],

    // -----------------------------------------------------------------
    // Sidebar
    // -----------------------------------------------------------------

    sidebar: {
      '/zh/clarifications/': [
        {
          text: '澄清与常见误解',
          items: [
            { text: '概述', link: '/zh/clarifications/' },
            { text: '证书 vs. CRA 全生命周期', link: '/zh/clarifications/certificate-vs-lifecycle' },
            { text: 'IEC 62443、ISO 与 CRA', link: '/zh/clarifications/iec-62443-vs-cra' },
          ]
        }
      ],
      '/zh/overview/': [
        {
          text: '第1章：概述',
          items: [
            { text: 'CRA 概览', link: '/zh/overview/' },
            { text: '🔍 适用性检查', link: '/zh/overview/scope-checker' },
            { text: '1.1 适用范围', link: '/zh/overview/scope' },
            { text: '1.2 角色与职责', link: '/zh/overview/responsibilities' },
            { text: '1.3 时间表与截止日期', link: '/zh/overview/timeline' },
          ]
        },
        {
          text: '经济运营者',
          collapsed: true,
          items: [
            { text: '1.4 进口商义务 (Art. 15)', link: '/zh/overview/importer-obligations' },
            { text: '1.5 授权代表 (Art. 16)', link: '/zh/overview/authorised-representative' },
            { text: '1.6 分销商义务 (Art. 17)', link: '/zh/overview/distributor-obligations' },
            { text: '1.7 开源管理者 (Art. 18–19)', link: '/zh/overview/open-source-steward' },
            { text: '1.8 实质性修改 (Art. 20)', link: '/zh/overview/substantial-modifications' },
          ]
        },
        {
          text: '执法',
          collapsed: true,
          items: [
            { text: '1.9 不合规 (Art. 22–23)', link: '/zh/overview/non-conformity' },
            { text: '1.10 市场监督 (Art. 52–58)', link: '/zh/overview/market-surveillance' },
            { text: '1.11 处罚 (Art. 64)', link: '/zh/overview/penalties' },
          ]
        },
        {
          text: '监管背景',
          collapsed: true,
          items: [
            { text: '1.12 协调标准 (Art. 5–6)', link: '/zh/overview/harmonised-standards' },
            { text: '1.13 一般产品安全 (Art. 9)', link: '/zh/overview/product-safety' },
            { text: '1.14 NIS2 整合', link: '/zh/overview/nis2-integration' },
          ]
        },
      ],
      '/zh/sbom-signing/': [
        {
          text: '第2章：SBOM 与签名',
          items: [
            { text: '概述', link: '/zh/sbom-signing/' },
            { text: '2.1 生成', link: '/zh/sbom-signing/generation' },
            { text: '2.2 格式规范', link: '/zh/sbom-signing/format' },
            { text: '2.3 归档与保留', link: '/zh/sbom-signing/storage' },
            { text: '2.4 签名', link: '/zh/sbom-signing/signing' },
            { text: '2.5 密钥管理', link: '/zh/sbom-signing/key-management' },
            { text: '2.6 验证', link: '/zh/sbom-signing/verification' },
          ]
        }
      ],
      '/zh/vulnerability-management/': [
        {
          text: '第3章：漏洞管理',
          items: [
            { text: '概述', link: '/zh/vulnerability-management/' },
            { text: '3.1 CVE 监控', link: '/zh/vulnerability-management/cve-monitoring' },
            { text: '3.2 依赖监控', link: '/zh/vulnerability-management/dependency-monitoring' },
            { text: '3.3 补丁管理', link: '/zh/vulnerability-management/patch-management' },
            { text: '3.4 风险评估', link: '/zh/vulnerability-management/risk-assessment' },
          ]
        },
        {
          text: 'CRA 要求',
          collapsed: true,
          items: [
            { text: '3.5 漏洞处理要求 (Annex I 第二部分)', link: '/zh/vulnerability-management/handling-requirements' },
          ]
        }
      ],
      '/zh/incident-response/': [
        {
          text: '第4章：事件响应与披露',
          items: [
            { text: '概述', link: '/zh/incident-response/' },
            { text: '4.1 事件响应手册', link: '/zh/incident-response/playbook' },
            { text: '4.2 漏洞披露政策', link: '/zh/incident-response/disclosure-policy' },
            { text: '4.3 ENISA 报告流程', link: '/zh/incident-response/enisa-reporting' },
            { text: '4.4 沟通计划', link: '/zh/incident-response/communication' },
          ]
        }
      ],
      '/zh/supply-chain/': [
        {
          text: '第5章：供应链安全',
          items: [
            { text: '概述', link: '/zh/supply-chain/' },
            { text: '5.1 依赖策略', link: '/zh/supply-chain/dependency-policy' },
            { text: '5.2 基础镜像策略', link: '/zh/supply-chain/base-image-policy' },
            { text: '5.3 第三方评估', link: '/zh/supply-chain/third-party-assessment' },
            { text: '5.4 经济运营者识别 (Art. 21)', link: '/zh/supply-chain/economic-operator-identification' },
          ]
        }
      ],
      '/zh/technical-documentation/': [
        {
          text: '第6章：技术文档',
          items: [
            { text: '概述', link: '/zh/technical-documentation/' },
            { text: '6.1 产品描述', link: '/zh/technical-documentation/product-description' },
            { text: '6.2 安全架构', link: '/zh/technical-documentation/security-architecture' },
            { text: '6.3 更新机制', link: '/zh/technical-documentation/update-mechanism' },
            { text: '6.4 支持与生命周期', link: '/zh/technical-documentation/support-period' },
          ]
        },
        {
          text: 'CRA 要求',
          collapsed: true,
          items: [
            { text: '6.5 安全要求 (Annex I)', link: '/zh/technical-documentation/security-requirements' },
            { text: '6.6 Annex VII – 指南', link: '/zh/technical-documentation/annex-vii-guide' },
          ]
        },
      ],
      '/zh/conformity/': [
        {
          text: '第7章：合规评估',
          items: [
            { text: '概述', link: '/zh/conformity/' },
            { text: '7.1 产品分类', link: '/zh/conformity/product-classification' },
            { text: '7.2 内部控制 (模块 A)', link: '/zh/conformity/self-assessment' },
            { text: '7.3 EU 型式检验 (模块 B+C)', link: '/zh/conformity/module-bc' },
            { text: '7.4 质量保证 (模块 H)', link: '/zh/conformity/module-h' },
            { text: '7.5 EUCC 认证', link: '/zh/conformity/eucc' },
          ]
        },
        {
          text: '产品分级',
          collapsed: true,
          items: [
            { text: '7.6 产品清单 (Annex III & IV)', link: '/zh/conformity/product-lists' },
            { text: '7.7 CE 标志 (Art. 29–30)', link: '/zh/conformity/ce-marking' },
          ]
        },
        {
          text: '声明与信息',
          collapsed: true,
          items: [
            { text: '7.8 EU 符合性声明', link: '/zh/conformity/eu-declaration' },
            { text: '7.9 简化 DoC (Annex VI)', link: '/zh/conformity/simplified-declaration' },
            { text: '7.10 用户信息 (Annex II)', link: '/zh/conformity/annex-ii-user-info' },
          ]
        },
      ],
      '/zh/product-compliance/': [
        {
          text: '第9章：产品合规发布',
          items: [
            { text: '概述', link: '/zh/product-compliance/' },
            { text: '9.1 CRA 合规声明', link: '/zh/product-compliance/cra-statement' },
            { text: '9.2 发布策略', link: '/zh/product-compliance/publication-strategy' },
            { text: '9.3 机器可读格式', link: '/zh/product-compliance/machine-readable' },
            { text: '9.4 维护与更新', link: '/zh/product-compliance/maintenance' },
          ]
        }
      ],
      '/zh/compliance-matrix/': [
        {
          text: '第8章：合规矩阵',
          items: [
            { text: 'CRA 要求矩阵', link: '/zh/compliance-matrix/' },
            { text: '8.1 工具映射', link: '/zh/compliance-matrix/tooling-map' },
            { text: '8.2 自动化工作流', link: '/zh/compliance-matrix/automation-workflows' },
            { text: '8.3 cra-check CLI', link: '/zh/compliance-matrix/cra-check' },
          ]
        }
      ],
      '/zh/templates/': [
        {
          text: '附录 A：模板',
          items: [
            { text: '概述', link: '/zh/templates/' },
            { text: 'A.1 事件报告', link: '/zh/templates/incident-report' },
            { text: 'A.2 漏洞报告', link: '/zh/templates/vulnerability-report' },
            { text: 'A.3 ENISA 早期预警', link: '/zh/templates/enisa-early-warning' },
            { text: 'A.4 ENISA 通知 (72小时)', link: '/zh/templates/enisa-notification' },
            { text: 'A.5 ENISA 最终报告', link: '/zh/templates/enisa-final-report' },
            { text: 'A.6 风险评估', link: '/zh/templates/risk-assessment' },
            { text: 'A.7 EU 符合性声明', link: '/zh/templates/eu-declaration-of-conformity' },
            { text: 'A.8 产品安全信息', link: '/zh/templates/product-security-info' },
            { text: 'A.9 CRA 合规声明', link: '/zh/templates/cra-compliance-statement' },
            { text: 'A.10 产品分类记录', link: '/zh/templates/product-classification-record' },
          ]
        }
      ],
    },

    // -----------------------------------------------------------------
    // UI Translations
    // -----------------------------------------------------------------

    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-CRACompliance/edit/main/docs/:path',
      text: '编辑此页面'
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' }
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一页', next: '下一页' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    langMenuLabel: '语言',

    // -----------------------------------------------------------------
    // Regulatory Status — 本地化标签
    // 数据: docs/.vitepress/regulatory-status.ts
    // -----------------------------------------------------------------

    regulatoryStatus: {
      asOfLabel: '截至',
      harmonisedStandards: {
        title: '当前状态',
        intro: '欧洲标准化组织 CEN、CENELEC 和 ETSI 已于 {accepted} 接受欧盟委员会的**标准化请求 {requestId}**。该请求要求为 CRA 制定 **{standardCount} 项协调标准**：{horizontalCount} 项水平标准（由 {leadCommittee} 主导，EN 40000 系列）和 {verticalCount} 项垂直产品特定交付物。',
        tableHeaders: { milestone: '里程碑', target: '目标', owner: '负责方' },
        rows: {
          firstHorizontal: '首批水平交付物',
          fullDelivery: '全部 {standardCount} 项交付物完成',
          ojeuPublication: 'OJEU 参考文献发布',
          additional: '其他交付物',
        },
        rowOwners: { esos: 'CEN、CENELEC、ETSI', commission: '欧盟委员会' },
        fallbackNote: '在 OJEU 发布前，**合规推定尚不适用**。BAUER GROUP 据此采用通用规范或 Module B+C 作为 I 类产品的备选方案。',
      },
      enisaSrp: {
        title: 'ENISA 统一报告平台 (Single Reporting Platform, SRP)',
        intro: '自 {operationalFrom} 起，ENISA 统一报告平台作为中央报告入口可用。该平台目前正在开发中；ENISA 已宣布在正式上线前将进行测试阶段。',
        rows: {
          status: '状态',
          operational: '运行起始日',
          url: 'URL',
          access: '访问',
          format: '格式',
          language: '语言',
          confirmation: '确认',
          source: '来源',
        },
        values: {
          status: '开发中——尚未运行，未发布注册 URL',
          urlPending: 'ENISA 将在截止日期前发布',
          access: '需根据 Art. 14(4) CRA 注册为制造商',
          format: '结构化在线表单 + API 接入（计划中）',
          language: '英语（欧盟范围），可能支持国家语言',
          confirmation: '平台自动发送接收确认',
          sourceLink: 'ENISA SRP',
        },
        monitoringTip: '安全主管自 2026 年第二季度起关注 ENISA 公告，以便在 {operationalFrom} 之前及时完成注册和接入。',
      },
      references: {
        title: '法规参考——动态法案',
        columns: { regulation: '法规', reference: '参考', relevance: '相关性' },
        rows: {
          implementingAct: {
            regulation: '实施法案',
            reference: '重要及关键产品的技术描述',
            relevance: '已于 {adopted} 通过、{inForce} 生效 — {regulation}（{articles}）',
          },
          delegatedActCsirt: {
            regulation: '授权法案',
            reference: 'CSIRT 延迟通知传播',
            relevance: '已于 {adopted} 通过，{published} 作为 {regulation} 公布（{articles}）；已生效',
          },
          delegatedActEucc: {
            regulation: 'EUCC 合规推定授权法案',
            reference: '通过 EUCC 方案的合规推定',
            relevance: '预计 {expected}',
          },
          m606: {
            regulation: '标准化请求 {requestId}',
            reference: '{standardCount} 项协调标准（{horizontalCount} 项水平 + {verticalCount} 项垂直）',
            relevance: '{accepted} 接受；{fullDelivery} 前交付',
          },
          enisaSrp: {
            regulation: 'ENISA 统一报告平台',
            reference: 'CRA 第 14 条',
            relevance: '中央报告平台；{operationalFrom} 起运行（开发中）',
          },
        },
      },
    },

    footer: {
      message: '文档基于 <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> 许可 · 代码基于 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a> 许可',
      copyright: `© ${new Date().getFullYear()} BAUER GROUP。禁止将文档用于商业用途。`
    },
  }
}
