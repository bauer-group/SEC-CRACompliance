import type { LocaleSpecificConfig } from 'vitepress'
import type { ThemeConfig } from '../theme/types'

export const en: LocaleSpecificConfig<ThemeConfig> & { label: string; link: string } = {
  label: 'English',
  lang: 'en',
  link: '/en/',
  description: 'Cyber Resilience Act – Compliance Documentation | BAUER GROUP',

  themeConfig: {
    // -----------------------------------------------------------------
    // Announcement Banner
    // -----------------------------------------------------------------

    announcement: {
      text: 'This document is under active development and has not been finalised.',
      type: 'warning',
      dismissible: true,
    },

    // -----------------------------------------------------------------
    // Navigation
    // -----------------------------------------------------------------

    nav: [
      { text: 'Introduction', link: '/en/overview/' },
      {
        text: 'Documentation',
        items: [
          {
            text: 'Artefacts & Security',
            items: [
              { text: 'SBOM & Signing', link: '/en/sbom-signing/' },
              { text: 'Vulnerability Management', link: '/en/vulnerability-management/' },
              { text: 'Supply Chain Security', link: '/en/supply-chain/' },
            ]
          },
          {
            text: 'Processes',
            items: [
              { text: 'Incident Response', link: '/en/incident-response/' },
              { text: 'Technical Documentation', link: '/en/technical-documentation/' },
            ]
          },
        ]
      },
      { text: 'Conformity', link: '/en/conformity/' },
      {
        text: 'Reference',
        items: [
          { text: 'Compliance Matrix', link: '/en/compliance-matrix/' },
          { text: 'Templates', link: '/en/templates/' },
        ]
      },
    ],

    // -----------------------------------------------------------------
    // Sidebar
    // -----------------------------------------------------------------

    sidebar: {
      '/en/overview/': [
        {
          text: 'Introduction',
          items: [
            { text: 'CRA Overview', link: '/en/overview/' },
            { text: 'Scope', link: '/en/overview/scope' },
            { text: 'Roles & Responsibilities', link: '/en/overview/responsibilities' },
            { text: 'Timelines & Deadlines', link: '/en/overview/timeline' },
          ]
        },
        {
          text: 'Economic Operators',
          items: [
            { text: 'Importer Obligations (Art. 15)', link: '/en/overview/importer-obligations' },
            { text: 'Authorised Representative (Art. 16)', link: '/en/overview/authorised-representative' },
            { text: 'Distributor Obligations (Art. 17)', link: '/en/overview/distributor-obligations' },
            { text: 'Open-Source Steward (Art. 18–19)', link: '/en/overview/open-source-steward' },
            { text: 'Substantial Modifications (Art. 20)', link: '/en/overview/substantial-modifications' },
          ]
        },
        {
          text: 'Enforcement',
          items: [
            { text: 'Non-Conformity (Art. 22–23)', link: '/en/overview/non-conformity' },
            { text: 'Market Surveillance (Art. 52–58)', link: '/en/overview/market-surveillance' },
            { text: 'Penalties (Art. 64)', link: '/en/overview/penalties' },
          ]
        },
        {
          text: 'Regulatory Context',
          items: [
            { text: 'Harmonised Standards (Art. 5–6)', link: '/en/overview/harmonised-standards' },
            { text: 'General Product Safety (Art. 9)', link: '/en/overview/product-safety' },
            { text: 'NIS2 Integration', link: '/en/overview/nis2-integration' },
          ]
        },
      ],
      '/en/sbom-signing/': [
        {
          text: 'SBOM & Signing',
          items: [
            { text: 'Overview', link: '/en/sbom-signing/' },
            { text: 'Generation', link: '/en/sbom-signing/generation' },
            { text: 'Format Specification', link: '/en/sbom-signing/format' },
            { text: 'Archival & Retention', link: '/en/sbom-signing/storage' },
            { text: 'Signing', link: '/en/sbom-signing/signing' },
            { text: 'Key Management', link: '/en/sbom-signing/key-management' },
            { text: 'Verification', link: '/en/sbom-signing/verification' },
          ]
        }
      ],
      '/en/vulnerability-management/': [
        {
          text: 'Vulnerability Management',
          items: [
            { text: 'Overview', link: '/en/vulnerability-management/' },
            { text: 'CVE Monitoring', link: '/en/vulnerability-management/cve-monitoring' },
            { text: 'Dependency Monitoring', link: '/en/vulnerability-management/dependency-monitoring' },
            { text: 'Patch Management', link: '/en/vulnerability-management/patch-management' },
            { text: 'Risk Assessment', link: '/en/vulnerability-management/risk-assessment' },
          ]
        },
        {
          text: 'CRA Requirements',
          items: [
            { text: 'Handling Requirements (Annex I Part II)', link: '/en/vulnerability-management/handling-requirements' },
          ]
        }
      ],
      '/en/incident-response/': [
        {
          text: 'Incident Response & Disclosure',
          items: [
            { text: 'Overview', link: '/en/incident-response/' },
            { text: 'Incident Response Playbook', link: '/en/incident-response/playbook' },
            { text: 'Vulnerability Disclosure Policy', link: '/en/incident-response/disclosure-policy' },
            { text: 'ENISA Reporting Process', link: '/en/incident-response/enisa-reporting' },
            { text: 'Communication Plan', link: '/en/incident-response/communication' },
          ]
        }
      ],
      '/en/supply-chain/': [
        {
          text: 'Supply Chain Security',
          items: [
            { text: 'Overview', link: '/en/supply-chain/' },
            { text: 'Dependency Policy', link: '/en/supply-chain/dependency-policy' },
            { text: 'Base Image Policy', link: '/en/supply-chain/base-image-policy' },
            { text: 'Third-Party Assessment', link: '/en/supply-chain/third-party-assessment' },
            { text: 'Economic Operator Identification (Art. 21)', link: '/en/supply-chain/economic-operator-identification' },
          ]
        }
      ],
      '/en/technical-documentation/': [
        {
          text: 'Technical Documentation',
          items: [
            { text: 'Overview', link: '/en/technical-documentation/' },
            { text: 'Product Description', link: '/en/technical-documentation/product-description' },
            { text: 'Security Architecture', link: '/en/technical-documentation/security-architecture' },
            { text: 'Update Mechanism', link: '/en/technical-documentation/update-mechanism' },
            { text: 'Support & Lifecycle', link: '/en/technical-documentation/support-period' },
          ]
        },
        {
          text: 'CRA Requirements',
          items: [
            { text: 'Security Requirements (Annex I)', link: '/en/technical-documentation/security-requirements' },
            { text: 'Annex VII – Guide', link: '/en/technical-documentation/annex-vii-guide' },
          ]
        },
      ],
      '/en/conformity/': [
        {
          text: 'Conformity Assessment',
          items: [
            { text: 'Overview', link: '/en/conformity/' },
            { text: 'Product Classification', link: '/en/conformity/product-classification' },
            { text: 'Internal Control (Module A)', link: '/en/conformity/self-assessment' },
            { text: 'EU Type Examination (Module B+C)', link: '/en/conformity/module-bc' },
            { text: 'Quality Assurance (Module H)', link: '/en/conformity/module-h' },
            { text: 'EUCC Certification', link: '/en/conformity/eucc' },
          ]
        },
        {
          text: 'Product Classification',
          items: [
            { text: 'Product Lists (Annex III & IV)', link: '/en/conformity/product-lists' },
            { text: 'CE Marking (Art. 29–30)', link: '/en/conformity/ce-marking' },
          ]
        },
        {
          text: 'Declarations & Information',
          items: [
            { text: 'EU Declaration of Conformity', link: '/en/conformity/eu-declaration' },
            { text: 'Simplified DoC (Annex VI)', link: '/en/conformity/simplified-declaration' },
            { text: 'User Information (Annex II)', link: '/en/conformity/annex-ii-user-info' },
          ]
        },
      ],
      '/en/compliance-matrix/': [
        {
          text: 'Compliance Matrix',
          items: [
            { text: 'CRA Requirements Matrix', link: '/en/compliance-matrix/' },
            { text: 'Tooling Map', link: '/en/compliance-matrix/tooling-map' },
          ]
        }
      ],
      '/en/templates/': [
        {
          text: 'Templates',
          items: [
            { text: 'Overview', link: '/en/templates/' },
            { text: 'Incident Report', link: '/en/templates/incident-report' },
            { text: 'Vulnerability Report', link: '/en/templates/vulnerability-report' },
            { text: 'ENISA Early Warning', link: '/en/templates/enisa-early-warning' },
            { text: 'ENISA Notification (72h)', link: '/en/templates/enisa-notification' },
            { text: 'ENISA Final Report', link: '/en/templates/enisa-final-report' },
            { text: 'Risk Assessment', link: '/en/templates/risk-assessment' },
            { text: 'EU Declaration of Conformity', link: '/en/templates/eu-declaration-of-conformity' },
            { text: 'Product Security Information', link: '/en/templates/product-security-info' },
          ]
        }
      ],
    },

    // -----------------------------------------------------------------
    // UI Translations
    // -----------------------------------------------------------------

    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-CRACompliance/edit/main/docs/:path',
      text: 'Edit this page'
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' }
    },
    outline: { label: 'On this page', level: [2, 3] },
    docFooter: { prev: 'Previous', next: 'Next' },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    langMenuLabel: 'Language',

    footer: {
      message: 'Documentation licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> · Code licensed under <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>',
      copyright: `© ${new Date().getFullYear()} BAUER GROUP. Commercial use of the documentation is not permitted.`
    },
  }
}
