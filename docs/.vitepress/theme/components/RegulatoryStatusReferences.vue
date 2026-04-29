<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { regulatoryStatus } from '../../regulatory-status'
import type { RegulatoryStatusLabels } from '../types'
import { interpolate } from './interpolate'

const { theme } = useData()

const labels = computed(
  () => (theme.value as { regulatoryStatus?: RegulatoryStatusLabels }).regulatoryStatus,
)
const data = regulatoryStatus

interface Row {
  regulation: string
  reference: string
  relevance: string
}

const rows = computed<Row[]>(() => {
  if (!labels.value) return []
  const r = labels.value.references.rows
  return [
    {
      regulation: r.implementingAct.regulation,
      reference: r.implementingAct.reference,
      relevance: interpolate(r.implementingAct.relevance, {
        adopted: data.implementingActProducts.adopted,
        articles: data.implementingActProducts.articles,
      }),
    },
    {
      regulation: r.delegatedActCsirt.regulation,
      reference: r.delegatedActCsirt.reference,
      relevance: interpolate(r.delegatedActCsirt.relevance, {
        adopted: data.delegatedActCsirt.adopted,
        articles: data.delegatedActCsirt.articles,
      }),
    },
    {
      regulation: r.delegatedActEucc.regulation,
      reference: r.delegatedActEucc.reference,
      relevance: interpolate(r.delegatedActEucc.relevance, {
        expected: data.delegatedActEucc.expected,
      }),
    },
    {
      regulation: interpolate(r.m606.regulation, { requestId: data.m606.requestId }),
      reference: interpolate(r.m606.reference, {
        standardCount: data.m606.standardCount,
        horizontalCount: data.m606.horizontalCount,
        verticalCount: data.m606.verticalCount,
      }),
      relevance: interpolate(r.m606.relevance, {
        accepted: data.m606.accepted,
        fullDelivery: data.m606.fullDelivery,
      }),
    },
    {
      regulation: r.enisaSrp.regulation,
      reference: r.enisaSrp.reference,
      relevance: interpolate(r.enisaSrp.relevance, {
        operationalFrom: data.enisaSrp.operationalFrom,
      }),
    },
  ]
})
</script>

<template>
  <table v-if="labels" class="regulatory-status-references">
    <thead>
      <tr>
        <th>{{ labels.references.columns.regulation }}</th>
        <th>{{ labels.references.columns.reference }}</th>
        <th>{{ labels.references.columns.relevance }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, idx) in rows" :key="idx">
        <td><strong>{{ row.regulation }}</strong></td>
        <td>{{ row.reference }}</td>
        <td>{{ row.relevance }}</td>
      </tr>
    </tbody>
  </table>
</template>
