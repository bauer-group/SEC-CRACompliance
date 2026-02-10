import { defineConfig } from 'vitepress'
import { de } from './locales/de'
import { en } from './locales/en'
import { zh } from './locales/zh'

export default defineConfig({
  title: 'CRA Compliance',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#FF8500' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'CRA Compliance – BAUER GROUP' }],
    ['meta', { name: 'og:description', content: 'Cyber Resilience Act Compliance Documentation' }],
  ],

  // ---------------------------------------------------------------------------
  // Locales (see ./locales/ for nav, sidebar, translations)
  // ---------------------------------------------------------------------------

  locales: { de, en, zh },

  // ---------------------------------------------------------------------------
  // Shared Theme Config
  // ---------------------------------------------------------------------------

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'CRA Compliance',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bauer-group/SEC-CRACompliance' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>' }, link: 'https://go.bauer-group.com/cra-compliance', ariaLabel: 'Homepage' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          de: {
            translations: {
              button: { buttonText: 'Suchen', buttonAriaLabel: 'Suchen' },
              modal: {
                noResultsText: 'Keine Ergebnisse für',
                resetButtonTitle: 'Suche zurücksetzen',
                footer: { selectText: 'Auswählen', navigateText: 'Navigieren', closeText: 'Schließen' }
              }
            }
          },
          en: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' }
              }
            }
          },
          zh: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                noResultsText: '未找到相关结果',
                resetButtonTitle: '重置搜索',
                footer: { selectText: '选择', navigateText: '导航', closeText: '关闭' }
              }
            }
          }
        }
      }
    },
  }
})
