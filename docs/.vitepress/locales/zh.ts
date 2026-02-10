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
      '/zh/overview/': [
        {
          text: '第1章：概述',
          items: [
            { text: 'CRA 概览', link: '/zh/overview/' },
            { text: '1.1 适用范围', link: '/zh/overview/scope' },
            { text: '1.2 角色与职责', link: '/zh/overview/responsibilities' },
            { text: '1.3 时间表与截止日期', link: '/zh/overview/timeline' },
          ]
        },
        {
          text: '经济运营者',
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
          items: [
            { text: '1.9 不合规 (Art. 22–23)', link: '/zh/overview/non-conformity' },
            { text: '1.10 市场监督 (Art. 52–58)', link: '/zh/overview/market-surveillance' },
            { text: '1.11 处罚 (Art. 64)', link: '/zh/overview/penalties' },
          ]
        },
        {
          text: '监管背景',
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
          items: [
            { text: '7.6 产品清单 (Annex III & IV)', link: '/zh/conformity/product-lists' },
            { text: '7.7 CE 标志 (Art. 29–30)', link: '/zh/conformity/ce-marking' },
          ]
        },
        {
          text: '声明与信息',
          items: [
            { text: '7.8 EU 符合性声明', link: '/zh/conformity/eu-declaration' },
            { text: '7.9 简化 DoC (Annex VI)', link: '/zh/conformity/simplified-declaration' },
            { text: '7.10 用户信息 (Annex II)', link: '/zh/conformity/annex-ii-user-info' },
          ]
        },
      ],
      '/zh/compliance-matrix/': [
        {
          text: '第8章：合规矩阵',
          items: [
            { text: 'CRA 要求矩阵', link: '/zh/compliance-matrix/' },
            { text: '8.1 工具映射', link: '/zh/compliance-matrix/tooling-map' },
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

    footer: {
      message: '文档基于 <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> 许可 · 代码基于 <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a> 许可',
      copyright: `© ${new Date().getFullYear()} BAUER GROUP。禁止将文档用于商业用途。`
    },
  }
}
