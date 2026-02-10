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
          text: '概述',
          items: [
            { text: 'CRA 概览', link: '/zh/overview/' },
            { text: '适用范围', link: '/zh/overview/scope' },
            { text: '角色与职责', link: '/zh/overview/responsibilities' },
            { text: '时间表与截止日期', link: '/zh/overview/timeline' },
          ]
        },
        {
          text: '经济运营者',
          items: [
            { text: '进口商义务 (Art. 15)', link: '/zh/overview/importer-obligations' },
            { text: '授权代表 (Art. 16)', link: '/zh/overview/authorised-representative' },
            { text: '分销商义务 (Art. 17)', link: '/zh/overview/distributor-obligations' },
            { text: '开源管理者 (Art. 18–19)', link: '/zh/overview/open-source-steward' },
            { text: '实质性修改 (Art. 20)', link: '/zh/overview/substantial-modifications' },
          ]
        },
        {
          text: '执法',
          items: [
            { text: '不合规 (Art. 22–23)', link: '/zh/overview/non-conformity' },
            { text: '市场监督 (Art. 52–58)', link: '/zh/overview/market-surveillance' },
            { text: '处罚 (Art. 64)', link: '/zh/overview/penalties' },
          ]
        },
        {
          text: '监管背景',
          items: [
            { text: '协调标准 (Art. 5–6)', link: '/zh/overview/harmonised-standards' },
            { text: '一般产品安全 (Art. 9)', link: '/zh/overview/product-safety' },
            { text: 'NIS2 整合', link: '/zh/overview/nis2-integration' },
          ]
        },
      ],
      '/zh/sbom-signing/': [
        {
          text: 'SBOM 与签名',
          items: [
            { text: '概述', link: '/zh/sbom-signing/' },
            { text: '生成', link: '/zh/sbom-signing/generation' },
            { text: '格式规范', link: '/zh/sbom-signing/format' },
            { text: '归档与保留', link: '/zh/sbom-signing/storage' },
            { text: '签名', link: '/zh/sbom-signing/signing' },
            { text: '密钥管理', link: '/zh/sbom-signing/key-management' },
            { text: '验证', link: '/zh/sbom-signing/verification' },
          ]
        }
      ],
      '/zh/vulnerability-management/': [
        {
          text: '漏洞管理',
          items: [
            { text: '概述', link: '/zh/vulnerability-management/' },
            { text: 'CVE 监控', link: '/zh/vulnerability-management/cve-monitoring' },
            { text: '依赖监控', link: '/zh/vulnerability-management/dependency-monitoring' },
            { text: '补丁管理', link: '/zh/vulnerability-management/patch-management' },
            { text: '风险评估', link: '/zh/vulnerability-management/risk-assessment' },
          ]
        },
        {
          text: 'CRA 要求',
          items: [
            { text: '漏洞处理要求 (Annex I 第二部分)', link: '/zh/vulnerability-management/handling-requirements' },
          ]
        }
      ],
      '/zh/incident-response/': [
        {
          text: '事件响应与披露',
          items: [
            { text: '概述', link: '/zh/incident-response/' },
            { text: '事件响应手册', link: '/zh/incident-response/playbook' },
            { text: '漏洞披露政策', link: '/zh/incident-response/disclosure-policy' },
            { text: 'ENISA 报告流程', link: '/zh/incident-response/enisa-reporting' },
            { text: '沟通计划', link: '/zh/incident-response/communication' },
          ]
        }
      ],
      '/zh/supply-chain/': [
        {
          text: '供应链安全',
          items: [
            { text: '概述', link: '/zh/supply-chain/' },
            { text: '依赖策略', link: '/zh/supply-chain/dependency-policy' },
            { text: '基础镜像策略', link: '/zh/supply-chain/base-image-policy' },
            { text: '第三方评估', link: '/zh/supply-chain/third-party-assessment' },
            { text: '经济运营者识别 (Art. 21)', link: '/zh/supply-chain/economic-operator-identification' },
          ]
        }
      ],
      '/zh/technical-documentation/': [
        {
          text: '技术文档',
          items: [
            { text: '概述', link: '/zh/technical-documentation/' },
            { text: '产品描述', link: '/zh/technical-documentation/product-description' },
            { text: '安全架构', link: '/zh/technical-documentation/security-architecture' },
            { text: '更新机制', link: '/zh/technical-documentation/update-mechanism' },
            { text: '支持与生命周期', link: '/zh/technical-documentation/support-period' },
          ]
        },
        {
          text: 'CRA 要求',
          items: [
            { text: '安全要求 (Annex I)', link: '/zh/technical-documentation/security-requirements' },
            { text: 'Annex VII – 指南', link: '/zh/technical-documentation/annex-vii-guide' },
          ]
        },
      ],
      '/zh/conformity/': [
        {
          text: '合规评估',
          items: [
            { text: '概述', link: '/zh/conformity/' },
            { text: '产品分类', link: '/zh/conformity/product-classification' },
            { text: '内部控制 (模块 A)', link: '/zh/conformity/self-assessment' },
            { text: 'EU 型式检验 (模块 B+C)', link: '/zh/conformity/module-bc' },
            { text: '质量保证 (模块 H)', link: '/zh/conformity/module-h' },
            { text: 'EUCC 认证', link: '/zh/conformity/eucc' },
          ]
        },
        {
          text: '产品分级',
          items: [
            { text: '产品清单 (Annex III & IV)', link: '/zh/conformity/product-lists' },
            { text: 'CE 标志 (Art. 29–30)', link: '/zh/conformity/ce-marking' },
          ]
        },
        {
          text: '声明与信息',
          items: [
            { text: 'EU 符合性声明', link: '/zh/conformity/eu-declaration' },
            { text: '简化 DoC (Annex VI)', link: '/zh/conformity/simplified-declaration' },
            { text: '用户信息 (Annex II)', link: '/zh/conformity/annex-ii-user-info' },
          ]
        },
      ],
      '/zh/compliance-matrix/': [
        {
          text: '合规矩阵',
          items: [
            { text: 'CRA 要求矩阵', link: '/zh/compliance-matrix/' },
            { text: '工具映射', link: '/zh/compliance-matrix/tooling-map' },
          ]
        }
      ],
      '/zh/templates/': [
        {
          text: '模板',
          items: [
            { text: '概述', link: '/zh/templates/' },
            { text: '事件报告', link: '/zh/templates/incident-report' },
            { text: '漏洞报告', link: '/zh/templates/vulnerability-report' },
            { text: 'ENISA 早期预警', link: '/zh/templates/enisa-early-warning' },
            { text: 'ENISA 通知 (72小时)', link: '/zh/templates/enisa-notification' },
            { text: 'ENISA 最终报告', link: '/zh/templates/enisa-final-report' },
            { text: '风险评估', link: '/zh/templates/risk-assessment' },
            { text: 'EU 符合性声明', link: '/zh/templates/eu-declaration-of-conformity' },
            { text: '产品安全信息', link: '/zh/templates/product-security-info' },
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
