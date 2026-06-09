/**
 * CRA Regulatory Status — Single Source of Truth
 *
 * Sprachneutrale Fakten zum Stand der CRA-Implementierung. Wird von Vue-
 * Komponenten in `theme/components/` zur Build-Zeit eingelesen und in allen
 * Sprachvarianten (de/en/zh) konsistent gerendert.
 *
 * Pflege: Bei regulatorischen Änderungen NUR diese Datei anpassen — die
 * lokalisierten Labels stehen in `locales/{de,en,zh}.ts` unter
 * `themeConfig.regulatoryStatus`.
 */

export interface RegulatoryStatus {
  /** Stichtag des aktuellen Snapshots (ISO YYYY-MM) */
  asOf: string

  /** Standardisierungsauftrag M/606 (CEN/CENELEC/ETSI) */
  m606: {
    requestId: string
    accepted: string // YYYY-MM
    standardCount: number
    horizontalCount: number
    verticalCount: number
    firstHorizontalDelivery: string // free-form, e.g. "Q3 2026"
    fullDelivery: string // YYYY-MM-DD
    ojeuExpected: string // YYYY
    additionalDeliverables: string // free-form
    leadCommittee: string
  }

  /** Implementing Act zu Art. 7/8 (technische Beschreibung wichtiger/kritischer Produkte) */
  implementingActProducts: {
    adopted: string // YYYY-MM-DD
    regulation: string // amtliche OJ-Fundstelle
    inForce: string // YYYY-MM-DD
    articles: string
  }

  /** Delegated Act zu Art. 14 (CSIRT-Verzögerung der Meldungsweiterleitung) */
  delegatedActCsirt: {
    adopted: string // YYYY-MM-DD
    regulation: string // amtliche OJ-Fundstelle
    published: string // YYYY-MM-DD (Veröffentlichung im Amtsblatt)
    articles: string
  }

  /** Delegated Act EUCC-Konformitätsvermutung */
  delegatedActEucc: {
    expected: string // free-form, e.g. "Q4 2026"
  }

  /** ENISA Single Reporting Platform */
  enisaSrp: {
    operationalFrom: string // YYYY-MM-DD
    sourceUrl: string
  }
}

export const regulatoryStatus: RegulatoryStatus = {
  asOf: '2026-06',

  m606: {
    requestId: 'M/606',
    accepted: '2025-04',
    standardCount: 41,
    horizontalCount: 15,
    verticalCount: 26,
    firstHorizontalDelivery: 'Q3 2026',
    fullDelivery: '2026-10-30',
    ojeuExpected: '2027',
    additionalDeliverables: '2027',
    leadCommittee: 'CEN-CLC/JTC 13/WG 9',
  },

  implementingActProducts: {
    adopted: '2025-11-28',
    regulation: '(EU) 2025/2392',
    inForce: '2025-12-21',
    articles: 'Art. 7, 8 CRA',
  },

  delegatedActCsirt: {
    adopted: '2025-12-11',
    regulation: '(EU) 2026/881',
    published: '2026-04-20',
    articles: 'Art. 14 CRA',
  },

  delegatedActEucc: {
    expected: 'Q4 2026',
  },

  enisaSrp: {
    operationalFrom: '2026-09-11',
    sourceUrl:
      'https://www.enisa.europa.eu/topics/product-security-and-certification/single-reporting-platform-srp',
  },
}
