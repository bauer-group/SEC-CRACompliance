import type { DefaultTheme } from 'vitepress'

export interface AnnouncementConfig {
  text?: string
  type?: 'warning' | 'info' | 'danger'
  dismissible?: boolean
  link?: { url: string; text: string }
}

/**
 * Lokalisierte Labels für die zentrale Regulatory-Status-Datenschicht
 * (`docs/.vitepress/regulatory-status.ts`). Pro Sprache in
 * `locales/{de,en,zh}.ts` unter `themeConfig.regulatoryStatus` gepflegt.
 */
export interface RegulatoryStatusLabels {
  asOfLabel: string

  harmonisedStandards: {
    title: string
    intro: string
    tableHeaders: { milestone: string; target: string; owner: string }
    rows: {
      firstHorizontal: string
      fullDelivery: string
      ojeuPublication: string
      additional: string
    }
    rowOwners: {
      esos: string
      commission: string
    }
    fallbackNote: string
  }

  enisaSrp: {
    title: string
    intro: string
    rows: {
      status: string
      operational: string
      url: string
      access: string
      format: string
      language: string
      confirmation: string
      source: string
    }
    values: {
      status: string
      urlPending: string
      access: string
      format: string
      language: string
      confirmation: string
      sourceLink: string
    }
    monitoringTip: string
  }

  references: {
    title: string
    columns: { regulation: string; reference: string; relevance: string }
    rows: {
      implementingAct: { regulation: string; reference: string; relevance: string }
      delegatedActCsirt: { regulation: string; reference: string; relevance: string }
      delegatedActEucc: { regulation: string; reference: string; relevance: string }
      m606: { regulation: string; reference: string; relevance: string }
      enisaSrp: { regulation: string; reference: string; relevance: string }
    }
  }
}

export type ThemeConfig = DefaultTheme.Config & {
  announcement?: AnnouncementConfig
  regulatoryStatus?: RegulatoryStatusLabels
}
