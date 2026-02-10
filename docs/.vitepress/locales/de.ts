import type { LocaleSpecificConfig } from 'vitepress'
import type { ThemeConfig } from '../theme/types'

export const de: LocaleSpecificConfig<ThemeConfig> & { label: string; link: string } = {
  label: 'Deutsch',
  lang: 'de-DE',
  link: '/de/',
  description: 'Cyber Resilience Act – Compliance-Dokumentation | BAUER GROUP',

  themeConfig: {
    // -----------------------------------------------------------------
    // Announcement Banner
    // -----------------------------------------------------------------

    announcement: {
      text: 'Dieses Dokument befindet sich in aktiver Entwicklung und ist noch nicht finalisiert.',
      type: 'warning',
      dismissible: true,
    },

    // -----------------------------------------------------------------
    // Navigation
    // -----------------------------------------------------------------

    nav: [
      { text: 'Einführung', link: '/de/overview/' },
      {
        text: 'Dokumentation',
        items: [
          {
            text: 'Artefakte & Sicherheit',
            items: [
              { text: 'SBOM & Signierung', link: '/de/sbom-signing/' },
              { text: 'Schwachstellenmanagement', link: '/de/vulnerability-management/' },
              { text: 'Supply-Chain-Sicherheit', link: '/de/supply-chain/' },
            ]
          },
          {
            text: 'Prozesse',
            items: [
              { text: 'Incident Response', link: '/de/incident-response/' },
              { text: 'Technische Dokumentation', link: '/de/technical-documentation/' },
            ]
          },
        ]
      },
      { text: 'Konformität', link: '/de/conformity/' },
      {
        text: 'Referenz',
        items: [
          { text: 'Compliance-Matrix', link: '/de/compliance-matrix/' },
          { text: 'Vorlagen', link: '/de/templates/' },
        ]
      },
    ],

    // -----------------------------------------------------------------
    // Sidebar
    // -----------------------------------------------------------------

    sidebar: {
      '/de/overview/': [
        {
          text: 'Einführung',
          items: [
            { text: 'CRA-Übersicht', link: '/de/overview/' },
            { text: 'Geltungsbereich', link: '/de/overview/scope' },
            { text: 'Rollen & Verantwortlichkeiten', link: '/de/overview/responsibilities' },
            { text: 'Fristen & Deadlines', link: '/de/overview/timeline' },
          ]
        },
        {
          text: 'Wirtschaftsakteure',
          items: [
            { text: 'Importeur-Pflichten (Art. 15)', link: '/de/overview/importer-obligations' },
            { text: 'Bevollmächtigter (Art. 16)', link: '/de/overview/authorised-representative' },
            { text: 'Händler-Pflichten (Art. 17)', link: '/de/overview/distributor-obligations' },
            { text: 'Open-Source-Steward (Art. 18–19)', link: '/de/overview/open-source-steward' },
            { text: 'Wesentliche Änderungen (Art. 20)', link: '/de/overview/substantial-modifications' },
          ]
        },
        {
          text: 'Durchsetzung',
          items: [
            { text: 'Nichtkonformität (Art. 22–23)', link: '/de/overview/non-conformity' },
            { text: 'Marktüberwachung (Art. 52–58)', link: '/de/overview/market-surveillance' },
            { text: 'Sanktionen (Art. 64)', link: '/de/overview/penalties' },
          ]
        },
        {
          text: 'Regulatorischer Kontext',
          items: [
            { text: 'Harmonisierte Normen (Art. 5–6)', link: '/de/overview/harmonised-standards' },
            { text: 'Allgemeine Produktsicherheit (Art. 9)', link: '/de/overview/product-safety' },
            { text: 'NIS2-Integration', link: '/de/overview/nis2-integration' },
          ]
        },
      ],
      '/de/sbom-signing/': [
        {
          text: 'SBOM & Signierung',
          items: [
            { text: 'Übersicht', link: '/de/sbom-signing/' },
            { text: 'Generierung', link: '/de/sbom-signing/generation' },
            { text: 'Format-Spezifikation', link: '/de/sbom-signing/format' },
            { text: 'Archivierung & Retention', link: '/de/sbom-signing/storage' },
            { text: 'Signierung', link: '/de/sbom-signing/signing' },
            { text: 'Key Management', link: '/de/sbom-signing/key-management' },
            { text: 'Verifikation', link: '/de/sbom-signing/verification' },
          ]
        }
      ],
      '/de/vulnerability-management/': [
        {
          text: 'Schwachstellenmanagement',
          items: [
            { text: 'Übersicht', link: '/de/vulnerability-management/' },
            { text: 'CVE-Monitoring', link: '/de/vulnerability-management/cve-monitoring' },
            { text: 'Dependency Monitoring', link: '/de/vulnerability-management/dependency-monitoring' },
            { text: 'Patch Management', link: '/de/vulnerability-management/patch-management' },
            { text: 'Risikobewertung', link: '/de/vulnerability-management/risk-assessment' },
          ]
        },
        {
          text: 'CRA-Anforderungen',
          items: [
            { text: 'Schwachstellenbehandlung (Annex I Teil II)', link: '/de/vulnerability-management/handling-requirements' },
          ]
        }
      ],
      '/de/incident-response/': [
        {
          text: 'Incident Response & Disclosure',
          items: [
            { text: 'Übersicht', link: '/de/incident-response/' },
            { text: 'Incident-Response-Playbook', link: '/de/incident-response/playbook' },
            { text: 'Vulnerability Disclosure Policy', link: '/de/incident-response/disclosure-policy' },
            { text: 'ENISA-Meldeprozess', link: '/de/incident-response/enisa-reporting' },
            { text: 'Kommunikationsplan', link: '/de/incident-response/communication' },
          ]
        }
      ],
      '/de/supply-chain/': [
        {
          text: 'Supply-Chain-Sicherheit',
          items: [
            { text: 'Übersicht', link: '/de/supply-chain/' },
            { text: 'Dependency Policy', link: '/de/supply-chain/dependency-policy' },
            { text: 'Base Image Policy', link: '/de/supply-chain/base-image-policy' },
            { text: 'Third-Party Assessment', link: '/de/supply-chain/third-party-assessment' },
            { text: 'Wirtschaftsakteur-Identifizierung (Art. 21)', link: '/de/supply-chain/economic-operator-identification' },
          ]
        }
      ],
      '/de/technical-documentation/': [
        {
          text: 'Technische Dokumentation',
          items: [
            { text: 'Übersicht', link: '/de/technical-documentation/' },
            { text: 'Produktbeschreibung', link: '/de/technical-documentation/product-description' },
            { text: 'Sicherheitsarchitektur', link: '/de/technical-documentation/security-architecture' },
            { text: 'Update-Mechanismus', link: '/de/technical-documentation/update-mechanism' },
            { text: 'Support & Lifecycle', link: '/de/technical-documentation/support-period' },
          ]
        },
        {
          text: 'CRA-Anforderungen',
          items: [
            { text: 'Sicherheitsanforderungen (Annex I)', link: '/de/technical-documentation/security-requirements' },
            { text: 'Annex VII – Leitfaden', link: '/de/technical-documentation/annex-vii-guide' },
          ]
        },
      ],
      '/de/conformity/': [
        {
          text: 'Konformitätsbewertung',
          items: [
            { text: 'Übersicht', link: '/de/conformity/' },
            { text: 'Produktklassifizierung', link: '/de/conformity/product-classification' },
            { text: 'Interne Kontrolle (Modul A)', link: '/de/conformity/self-assessment' },
            { text: 'EU-Baumusterprüfung (Modul B+C)', link: '/de/conformity/module-bc' },
            { text: 'Qualitätssicherung (Modul H)', link: '/de/conformity/module-h' },
            { text: 'EUCC-Zertifizierung', link: '/de/conformity/eucc' },
          ]
        },
        {
          text: 'Produkteinstufung',
          items: [
            { text: 'Produktlisten (Annex III & IV)', link: '/de/conformity/product-lists' },
            { text: 'CE-Kennzeichnung (Art. 29–30)', link: '/de/conformity/ce-marking' },
          ]
        },
        {
          text: 'Erklärungen & Informationen',
          items: [
            { text: 'EU-Konformitätserklärung', link: '/de/conformity/eu-declaration' },
            { text: 'Vereinfachte DoC (Annex VI)', link: '/de/conformity/simplified-declaration' },
            { text: 'Nutzerinformation (Annex II)', link: '/de/conformity/annex-ii-user-info' },
          ]
        },
      ],
      '/de/compliance-matrix/': [
        {
          text: 'Compliance-Matrix',
          items: [
            { text: 'CRA-Anforderungsmatrix', link: '/de/compliance-matrix/' },
            { text: 'Tooling-Zuordnung', link: '/de/compliance-matrix/tooling-map' },
          ]
        }
      ],
      '/de/templates/': [
        {
          text: 'Vorlagen',
          items: [
            { text: 'Übersicht', link: '/de/templates/' },
            { text: 'Incident Report', link: '/de/templates/incident-report' },
            { text: 'Vulnerability Report', link: '/de/templates/vulnerability-report' },
            { text: 'ENISA Frühwarnung', link: '/de/templates/enisa-early-warning' },
            { text: 'ENISA Meldung (72h)', link: '/de/templates/enisa-notification' },
            { text: 'ENISA Abschlussbericht', link: '/de/templates/enisa-final-report' },
            { text: 'Risikobewertung', link: '/de/templates/risk-assessment' },
            { text: 'EU-Konformitätserklärung', link: '/de/templates/eu-declaration-of-conformity' },
            { text: 'Nutzerinformation', link: '/de/templates/product-security-info' },
          ]
        }
      ],
    },

    // -----------------------------------------------------------------
    // UI Translations
    // -----------------------------------------------------------------

    editLink: {
      pattern: 'https://github.com/bauer-group/SEC-CRACompliance/edit/main/docs/:path',
      text: 'Diese Seite bearbeiten'
    },
    lastUpdated: {
      text: 'Zuletzt aktualisiert',
      formatOptions: { dateStyle: 'long', timeStyle: 'short' }
    },
    outline: { label: 'Auf dieser Seite', level: [2, 3] },
    docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
    returnToTopLabel: 'Zurück nach oben',
    sidebarMenuLabel: 'Menü',
    darkModeSwitchLabel: 'Erscheinungsbild',
    langMenuLabel: 'Sprache',

    footer: {
      message: 'Dokumentation lizenziert unter <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a> · Code lizenziert unter <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>',
      copyright: `© ${new Date().getFullYear()} BAUER GROUP. Kommerzielle Nutzung der Dokumentation nicht gestattet.`
    },
  }
}
