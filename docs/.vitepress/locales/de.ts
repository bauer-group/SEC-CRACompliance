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
          text: 'Kapitel 1: Einführung',
          items: [
            { text: 'CRA-Übersicht', link: '/de/overview/' },
            { text: '1.1 Geltungsbereich', link: '/de/overview/scope' },
            { text: '1.2 Rollen & Verantwortlichkeiten', link: '/de/overview/responsibilities' },
            { text: '1.3 Fristen & Zeitplan', link: '/de/overview/timeline' },
          ]
        },
        {
          text: 'Wirtschaftsakteure',
          items: [
            { text: '1.4 Importeur-Pflichten (Art. 15)', link: '/de/overview/importer-obligations' },
            { text: '1.5 Bevollmächtigter (Art. 16)', link: '/de/overview/authorised-representative' },
            { text: '1.6 Händler-Pflichten (Art. 17)', link: '/de/overview/distributor-obligations' },
            { text: '1.7 Open-Source-Steward (Art. 18–19)', link: '/de/overview/open-source-steward' },
            { text: '1.8 Wesentliche Änderungen (Art. 20)', link: '/de/overview/substantial-modifications' },
          ]
        },
        {
          text: 'Durchsetzung',
          items: [
            { text: '1.9 Nichtkonformität (Art. 22–23)', link: '/de/overview/non-conformity' },
            { text: '1.10 Marktüberwachung (Art. 52–58)', link: '/de/overview/market-surveillance' },
            { text: '1.11 Sanktionen (Art. 64)', link: '/de/overview/penalties' },
          ]
        },
        {
          text: 'Regulatorischer Kontext',
          items: [
            { text: '1.12 Harmonisierte Normen (Art. 5–6)', link: '/de/overview/harmonised-standards' },
            { text: '1.13 Allgemeine Produktsicherheit (Art. 9)', link: '/de/overview/product-safety' },
            { text: '1.14 NIS2-Integration', link: '/de/overview/nis2-integration' },
          ]
        },
      ],
      '/de/sbom-signing/': [
        {
          text: 'Kapitel 2: SBOM & Signierung',
          items: [
            { text: 'Übersicht', link: '/de/sbom-signing/' },
            { text: '2.1 Generierung', link: '/de/sbom-signing/generation' },
            { text: '2.2 Format-Spezifikation', link: '/de/sbom-signing/format' },
            { text: '2.3 Archivierung & Retention', link: '/de/sbom-signing/storage' },
            { text: '2.4 Signierung', link: '/de/sbom-signing/signing' },
            { text: '2.5 Key Management', link: '/de/sbom-signing/key-management' },
            { text: '2.6 Verifikation', link: '/de/sbom-signing/verification' },
          ]
        }
      ],
      '/de/vulnerability-management/': [
        {
          text: 'Kapitel 3: Schwachstellenmanagement',
          items: [
            { text: 'Übersicht', link: '/de/vulnerability-management/' },
            { text: '3.1 CVE-Monitoring', link: '/de/vulnerability-management/cve-monitoring' },
            { text: '3.2 Dependency Monitoring', link: '/de/vulnerability-management/dependency-monitoring' },
            { text: '3.3 Patch Management', link: '/de/vulnerability-management/patch-management' },
            { text: '3.4 Risikobewertung', link: '/de/vulnerability-management/risk-assessment' },
          ]
        },
        {
          text: 'CRA-Anforderungen',
          items: [
            { text: '3.5 Schwachstellenbehandlung (Annex I Teil II)', link: '/de/vulnerability-management/handling-requirements' },
          ]
        }
      ],
      '/de/incident-response/': [
        {
          text: 'Kapitel 4: Incident Response & Disclosure',
          items: [
            { text: 'Übersicht', link: '/de/incident-response/' },
            { text: '4.1 Incident-Response-Playbook', link: '/de/incident-response/playbook' },
            { text: '4.2 Vulnerability Disclosure Policy', link: '/de/incident-response/disclosure-policy' },
            { text: '4.3 ENISA-Meldeprozess', link: '/de/incident-response/enisa-reporting' },
            { text: '4.4 Kommunikationsplan', link: '/de/incident-response/communication' },
          ]
        }
      ],
      '/de/supply-chain/': [
        {
          text: 'Kapitel 5: Supply-Chain-Sicherheit',
          items: [
            { text: 'Übersicht', link: '/de/supply-chain/' },
            { text: '5.1 Dependency Policy', link: '/de/supply-chain/dependency-policy' },
            { text: '5.2 Base Image Policy', link: '/de/supply-chain/base-image-policy' },
            { text: '5.3 Third-Party Assessment', link: '/de/supply-chain/third-party-assessment' },
            { text: '5.4 Wirtschaftsakteur-Identifizierung (Art. 21)', link: '/de/supply-chain/economic-operator-identification' },
          ]
        }
      ],
      '/de/technical-documentation/': [
        {
          text: 'Kapitel 6: Technische Dokumentation',
          items: [
            { text: 'Übersicht', link: '/de/technical-documentation/' },
            { text: '6.1 Produktbeschreibung', link: '/de/technical-documentation/product-description' },
            { text: '6.2 Sicherheitsarchitektur', link: '/de/technical-documentation/security-architecture' },
            { text: '6.3 Update-Mechanismus', link: '/de/technical-documentation/update-mechanism' },
            { text: '6.4 Support & Lifecycle', link: '/de/technical-documentation/support-period' },
          ]
        },
        {
          text: 'CRA-Anforderungen',
          items: [
            { text: '6.5 Sicherheitsanforderungen (Annex I)', link: '/de/technical-documentation/security-requirements' },
            { text: '6.6 Annex VII – Leitfaden', link: '/de/technical-documentation/annex-vii-guide' },
          ]
        },
      ],
      '/de/conformity/': [
        {
          text: 'Kapitel 7: Konformitätsbewertung',
          items: [
            { text: 'Übersicht', link: '/de/conformity/' },
            { text: '7.1 Produktklassifizierung', link: '/de/conformity/product-classification' },
            { text: '7.2 Interne Kontrolle (Modul A)', link: '/de/conformity/self-assessment' },
            { text: '7.3 EU-Baumusterprüfung (Modul B+C)', link: '/de/conformity/module-bc' },
            { text: '7.4 Qualitätssicherung (Modul H)', link: '/de/conformity/module-h' },
            { text: '7.5 EUCC-Zertifizierung', link: '/de/conformity/eucc' },
          ]
        },
        {
          text: 'Produkteinstufung',
          items: [
            { text: '7.6 Produktlisten (Annex III & IV)', link: '/de/conformity/product-lists' },
            { text: '7.7 CE-Kennzeichnung (Art. 29–30)', link: '/de/conformity/ce-marking' },
          ]
        },
        {
          text: 'Erklärungen & Informationen',
          items: [
            { text: '7.8 EU-Konformitätserklärung', link: '/de/conformity/eu-declaration' },
            { text: '7.9 Vereinfachte DoC (Annex VI)', link: '/de/conformity/simplified-declaration' },
            { text: '7.10 Nutzerinformation (Annex II)', link: '/de/conformity/annex-ii-user-info' },
          ]
        },
      ],
      '/de/compliance-matrix/': [
        {
          text: 'Kapitel 8: Compliance-Matrix',
          items: [
            { text: 'CRA-Anforderungsmatrix', link: '/de/compliance-matrix/' },
            { text: '8.1 Tooling-Zuordnung', link: '/de/compliance-matrix/tooling-map' },
          ]
        }
      ],
      '/de/templates/': [
        {
          text: 'Anhang A: Vorlagen',
          items: [
            { text: 'Übersicht', link: '/de/templates/' },
            { text: 'A.1 Incident Report', link: '/de/templates/incident-report' },
            { text: 'A.2 Vulnerability Report', link: '/de/templates/vulnerability-report' },
            { text: 'A.3 ENISA Frühwarnung', link: '/de/templates/enisa-early-warning' },
            { text: 'A.4 ENISA Meldung (72h)', link: '/de/templates/enisa-notification' },
            { text: 'A.5 ENISA Abschlussbericht', link: '/de/templates/enisa-final-report' },
            { text: 'A.6 Risikobewertung', link: '/de/templates/risk-assessment' },
            { text: 'A.7 EU-Konformitätserklärung', link: '/de/templates/eu-declaration-of-conformity' },
            { text: 'A.8 Nutzerinformation', link: '/de/templates/product-security-info' },
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
