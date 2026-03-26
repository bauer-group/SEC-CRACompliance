import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import './style.css'
import './print.css'

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme
