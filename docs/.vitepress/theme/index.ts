import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import HarmonisedStandardsStatus from './components/HarmonisedStandardsStatus.vue'
import EnisaSrpStatus from './components/EnisaSrpStatus.vue'
import RegulatoryStatusReferences from './components/RegulatoryStatusReferences.vue'
import './style.css'
import './print.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HarmonisedStandardsStatus', HarmonisedStandardsStatus)
    app.component('EnisaSrpStatus', EnisaSrpStatus)
    app.component('RegulatoryStatusReferences', RegulatoryStatusReferences)
  },
} satisfies Theme
