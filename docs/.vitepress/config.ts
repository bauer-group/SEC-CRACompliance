import { defineConfig } from 'vitepress'
import { RssPlugin } from 'vitepress-plugin-rss'
import { de } from './locales/de'
import { en } from './locales/en'
import { zh } from './locales/zh'

const baseUrl = 'https://cra.docs.bauer-group.com'

export default defineConfig({
  title: 'CRA Compliance',
  titleTemplate: ':title | BAUER GROUP',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    image: { lazyLoading: true },
  },
  sitemap: {
    hostname: baseUrl,
  },
  vite: {
    plugins: [
      RssPlugin({
        title: 'CRA Compliance – BAUER GROUP',
        baseUrl,
        copyright: `© ${new Date().getFullYear()} BAUER GROUP`,
        description: 'Cyber Resilience Act – Compliance Documentation Updates',
        language: 'en',
        author: { name: 'BAUER GROUP', link: baseUrl },
        icon: false,
        ignoreHome: true,
        ignorePublish: true,
        log: true,
        locales: {
          en: { filename: 'feed-en.xml', language: 'en' },
          de: { filename: 'feed-de.xml', language: 'de' },
          zh: { filename: 'feed-zh.xml', language: 'zh' },
        },
      }),
    ],
  },

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
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z"/></svg>' }, link: '/feed-en.xml', ariaLabel: 'RSS Feed' },
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
