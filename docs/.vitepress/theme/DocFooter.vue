<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()

const footer = computed(() => theme.value.footer as {
  message?: string
  copyright?: string
} | undefined)
</script>

<template>
  <div v-if="footer" class="doc-footer-license">
    <p v-if="footer.message" class="license-line" v-html="footer.message" />
    <p v-if="footer.copyright" class="copyright-line">{{ footer.copyright }}</p>
  </div>
</template>

<style scoped>
.doc-footer-license {
  margin-top: 48px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.8em;
  color: var(--vp-c-text-3);
  line-height: 1.6;
}

.doc-footer-license :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.doc-footer-license :deep(a:hover) {
  text-decoration: underline;
}

.doc-footer-license .copyright-line {
  margin-top: 4px;
  font-weight: 600;
}
</style>
