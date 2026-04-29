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

const intro = computed(() =>
  labels.value
    ? interpolate(labels.value.enisaSrp.intro, {
        operationalFrom: data.enisaSrp.operationalFrom,
      })
    : '',
)

const monitoringTip = computed(() =>
  labels.value
    ? interpolate(labels.value.enisaSrp.monitoringTip, {
        operationalFrom: data.enisaSrp.operationalFrom,
      })
    : '',
)

const statusValue = computed(() =>
  labels.value
    ? `${labels.value.enisaSrp.values.status} (${labels.value.asOfLabel} ${data.asOf})`
    : '',
)
</script>

<template>
  <div v-if="labels" class="enisa-srp-block">
    <h3>{{ labels.enisaSrp.title }}</h3>
    <p>{{ intro }}</p>

    <table>
      <tbody>
        <tr>
          <td><strong>{{ labels.enisaSrp.rows.status }}</strong></td>
          <td>{{ statusValue }}</td>
        </tr>
        <tr>
          <td><strong>{{ labels.enisaSrp.rows.operational }}</strong></td>
          <td>{{ data.enisaSrp.operationalFrom }}</td>
        </tr>
        <tr>
          <td><strong>{{ labels.enisaSrp.rows.url }}</strong></td>
          <td>{{ labels.enisaSrp.values.urlPending }}</td>
        </tr>
        <tr>
          <td><strong>{{ labels.enisaSrp.rows.access }}</strong></td>
          <td>{{ labels.enisaSrp.values.access }}</td>
        </tr>
        <tr>
          <td><strong>{{ labels.enisaSrp.rows.format }}</strong></td>
          <td>{{ labels.enisaSrp.values.format }}</td>
        </tr>
        <tr>
          <td><strong>{{ labels.enisaSrp.rows.language }}</strong></td>
          <td>{{ labels.enisaSrp.values.language }}</td>
        </tr>
        <tr>
          <td><strong>{{ labels.enisaSrp.rows.confirmation }}</strong></td>
          <td>{{ labels.enisaSrp.values.confirmation }}</td>
        </tr>
        <tr>
          <td><strong>{{ labels.enisaSrp.rows.source }}</strong></td>
          <td>
            <a :href="data.enisaSrp.sourceUrl" target="_blank" rel="noopener">
              {{ labels.enisaSrp.values.sourceLink }}
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="custom-block tip">
      <p class="custom-block-title">MONITORING</p>
      <p>{{ monitoringTip }}</p>
    </div>
  </div>
</template>

<style scoped>
.enisa-srp-block table {
  margin: 1rem 0;
}
</style>
