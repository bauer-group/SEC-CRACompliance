import type { DefaultTheme } from 'vitepress'

export interface AnnouncementConfig {
  text?: string
  type?: 'warning' | 'info' | 'danger'
  dismissible?: boolean
  link?: { url: string; text: string }
}

export type ThemeConfig = DefaultTheme.Config & {
  announcement?: AnnouncementConfig
}
