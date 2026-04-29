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

function renderMarkdownBold(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

const intro = computed(() =>
  labels.value
    ? renderMarkdownBold(
        interpolate(labels.value.harmonisedStandards.intro, {
          requestId: data.m606.requestId,
          accepted: data.m606.accepted,
          standardCount: data.m606.standardCount,
          horizontalCount: data.m606.horizontalCount,
          verticalCount: data.m606.verticalCount,
          leadCommittee: data.m606.leadCommittee,
        }),
      )
    : '',
)

const fullDeliveryRow = computed(() =>
  labels.value
    ? interpolate(labels.value.harmonisedStandards.rows.fullDelivery, {
        standardCount: data.m606.standardCount,
      })
    : '',
)

const fallbackNote = computed(() =>
  labels.value ? renderMarkdownBold(labels.value.harmonisedStandards.fallbackNote) : '',
)

const blockTitle = computed(() =>
  labels.value
    ? `${labels.value.harmonisedStandards.title} (${labels.value.asOfLabel} ${data.asOf})`
    : '',
)
</script>

<template>
  <div v-if="labels" class="custom-block warning regulatory-status-block">
    <p class="custom-block-title">{{ blockTitle }}</p>
    <p v-html="intro" />

    <table>
      <thead>
        <tr>
          <th>{{ labels.harmonisedStandards.tableHeaders.milestone }}</th>
          <th>{{ labels.harmonisedStandards.tableHeaders.target }}</th>
          <th>{{ labels.harmonisedStandards.tableHeaders.owner }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ labels.harmonisedStandards.rows.firstHorizontal }}</td>
          <td>{{ data.m606.firstHorizontalDelivery }}</td>
          <td>{{ data.m606.leadCommittee }}</td>
        </tr>
        <tr>
          <td>{{ fullDeliveryRow }}</td>
          <td><strong>{{ data.m606.fullDelivery }}</strong></td>
          <td>{{ labels.harmonisedStandards.rowOwners.esos }}</td>
        </tr>
        <tr>
          <td>{{ labels.harmonisedStandards.rows.ojeuPublication }}</td>
          <td>{{ data.m606.ojeuExpected }}</td>
          <td>{{ labels.harmonisedStandards.rowOwners.commission }}</td>
        </tr>
        <tr>
          <td>{{ labels.harmonisedStandards.rows.additional }}</td>
          <td>{{ data.m606.additionalDeliverables }}</td>
          <td>{{ labels.harmonisedStandards.rowOwners.esos }}</td>
        </tr>
      </tbody>
    </table>

    <p v-html="fallbackNote" />
  </div>
</template>

<style scoped>
.regulatory-status-block table {
  margin: 1rem 0;
}
</style>
