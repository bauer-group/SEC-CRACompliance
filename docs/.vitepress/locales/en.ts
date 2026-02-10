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
          text: 'Chapter 1: Introduction',
          items: [
            { text: 'CRA Overview', link: '/en/overview/' },
            { text: '1.1 Scope', link: '/en/overview/scope' },
            { text: '1.2 Roles & Responsibilities', link: '/en/overview/responsibilities' },
            { text: '1.3 Timelines & Deadlines', link: '/en/overview/timeline' },
          ]
        },
        {
          text: 'Economic Operators',
          items: [
            { text: '1.4 Importer Obligations (Art. 15)', link: '/en/overview/importer-obligations' },
            { text: '1.5 Authorised Representative (Art. 16)', link: '/en/overview/authorised-representative' },
            { text: '1.6 Distributor Obligations (Art. 17)', link: '/en/overview/distributor-obligations' },
            { text: '1.7 Open-Source Steward (Art. 18–19)', link: '/en/overview/open-source-steward' },
            { text: '1.8 Substantial Modifications (Art. 20)', link: '/en/overview/substantial-modifications' },
          ]
        },
        {
          text: 'Enforcement',
          items: [
            { text: '1.9 Non-Conformity (Art. 22–23)', link: '/en/overview/non-conformity' },
            { text: '1.10 Market Surveillance (Art. 52–58)', link: '/en/overview/market-surveillance' },
            { text: '1.11 Penalties (Art. 64)', link: '/en/overview/penalties' },
          ]
        },
        {
          text: 'Regulatory Context',
          items: [
            { text: '1.12 Harmonised Standards (Art. 5–6)', link: '/en/overview/harmonised-standards' },
            { text: '1.13 General Product Safety (Art. 9)', link: '/en/overview/product-safety' },
            { text: '1.14 NIS2 Integration', link: '/en/overview/nis2-integration' },
          ]
        },
      ],
      '/en/sbom-signing/': [
        {
          text: 'Chapter 2: SBOM & Signing',
          items: [
            { text: 'Overview', link: '/en/sbom-signing/' },
            { text: '2.1 Generation', link: '/en/sbom-signing/generation' },
            { text: '2.2 Format Specification', link: '/en/sbom-signing/format' },
            { text: '2.3 Archival & Retention', link: '/en/sbom-signing/storage' },
            { text: '2.4 Signing', link: '/en/sbom-signing/signing' },
            { text: '2.5 Key Management', link: '/en/sbom-signing/key-management' },
            { text: '2.6 Verification', link: '/en/sbom-signing/verification' },
          ]
        }
      ],
      '/en/vulnerability-management/': [
        {
          text: 'Chapter 3: Vulnerability Management',
          items: [
            { text: 'Overview', link: '/en/vulnerability-management/' },
            { text: '3.1 CVE Monitoring', link: '/en/vulnerability-management/cve-monitoring' },
            { text: '3.2 Dependency Monitoring', link: '/en/vulnerability-management/dependency-monitoring' },
            { text: '3.3 Patch Management', link: '/en/vulnerability-management/patch-management' },
            { text: '3.4 Risk Assessment', link: '/en/vulnerability-management/risk-assessment' },
          ]
        },
        {
          text: 'CRA Requirements',
          items: [
            { text: '3.5 Handling Requirements (Annex I Part II)', link: '/en/vulnerability-management/handling-requirements' },
          ]
        }
      ],
      '/en/incident-response/': [
        {
          text: 'Chapter 4: Incident Response & Disclosure',
          items: [
            { text: 'Overview', link: '/en/incident-response/' },
            { text: '4.1 Incident Response Playbook', link: '/en/incident-response/playbook' },
            { text: '4.2 Vulnerability Disclosure Policy', link: '/en/incident-response/disclosure-policy' },
            { text: '4.3 ENISA Reporting Process', link: '/en/incident-response/enisa-reporting' },
            { text: '4.4 Communication Plan', link: '/en/incident-response/communication' },
          ]
        }
      ],
      '/en/supply-chain/': [
        {
          text: 'Chapter 5: Supply Chain Security',
          items: [
            { text: 'Overview', link: '/en/supply-chain/' },
            { text: '5.1 Dependency Policy', link: '/en/supply-chain/dependency-policy' },
            { text: '5.2 Base Image Policy', link: '/en/supply-chain/base-image-policy' },
            { text: '5.3 Third-Party Assessment', link: '/en/supply-chain/third-party-assessment' },
            { text: '5.4 Economic Operator Identification (Art. 21)', link: '/en/supply-chain/economic-operator-identification' },
          ]
        }
      ],
      '/en/technical-documentation/': [
        {
          text: 'Chapter 6: Technical Documentation',
          items: [
            { text: 'Overview', link: '/en/technical-documentation/' },
            { text: '6.1 Product Description', link: '/en/technical-documentation/product-description' },
            { text: '6.2 Security Architecture', link: '/en/technical-documentation/security-architecture' },
            { text: '6.3 Update Mechanism', link: '/en/technical-documentation/update-mechanism' },
            { text: '6.4 Support & Lifecycle', link: '/en/technical-documentation/support-period' },
          ]
        },
        {
          text: 'CRA Requirements',
          items: [
            { text: '6.5 Security Requirements (Annex I)', link: '/en/technical-documentation/security-requirements' },
            { text: '6.6 Annex VII – Guide', link: '/en/technical-documentation/annex-vii-guide' },
          ]
        },
      ],
      '/en/conformity/': [
        {
          text: 'Chapter 7: Conformity Assessment',
          items: [
            { text: 'Overview', link: '/en/conformity/' },
            { text: '7.1 Product Classification', link: '/en/conformity/product-classification' },
            { text: '7.2 Internal Control (Module A)', link: '/en/conformity/self-assessment' },
            { text: '7.3 EU Type Examination (Module B+C)', link: '/en/conformity/module-bc' },
            { text: '7.4 Quality Assurance (Module H)', link: '/en/conformity/module-h' },
            { text: '7.5 EUCC Certification', link: '/en/conformity/eucc' },
          ]
        },
        {
          text: 'Product Classification',
          items: [
            { text: '7.6 Product Lists (Annex III & IV)', link: '/en/conformity/product-lists' },
            { text: '7.7 CE Marking (Art. 29–30)', link: '/en/conformity/ce-marking' },
          ]
        },
        {
          text: 'Declarations & Information',
          items: [
            { text: '7.8 EU Declaration of Conformity', link: '/en/conformity/eu-declaration' },
            { text: '7.9 Simplified DoC (Annex VI)', link: '/en/conformity/simplified-declaration' },
            { text: '7.10 User Information (Annex II)', link: '/en/conformity/annex-ii-user-info' },
          ]
        },
      ],
      '/en/compliance-matrix/': [
        {
          text: 'Chapter 8: Compliance Matrix',
          items: [
            { text: 'CRA Requirements Matrix', link: '/en/compliance-matrix/' },
            { text: '8.1 Tooling Map', link: '/en/compliance-matrix/tooling-map' },
          ]
        }
      ],
      '/en/templates/': [
        {
          text: 'Appendix A: Templates',
          items: [
            { text: 'Overview', link: '/en/templates/' },
            { text: 'A.1 Incident Report', link: '/en/templates/incident-report' },
            { text: 'A.2 Vulnerability Report', link: '/en/templates/vulnerability-report' },
            { text: 'A.3 ENISA Early Warning', link: '/en/templates/enisa-early-warning' },
            { text: 'A.4 ENISA Notification (72h)', link: '/en/templates/enisa-notification' },
            { text: 'A.5 ENISA Final Report', link: '/en/templates/enisa-final-report' },
            { text: 'A.6 Risk Assessment', link: '/en/templates/risk-assessment' },
            { text: 'A.7 EU Declaration of Conformity', link: '/en/templates/eu-declaration-of-conformity' },
            { text: 'A.8 Product Security Information', link: '/en/templates/product-security-info' },
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
