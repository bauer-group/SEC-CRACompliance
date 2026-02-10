<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()
const dismissed = ref(false)
const bannerRef = ref<HTMLElement | null>(null)
let observer: ResizeObserver | null = null

const announcement = computed(() => theme.value.announcement as {
  text?: string
  type?: 'warning' | 'info' | 'danger'
  dismissible?: boolean
  link?: { url: string; text: string }
} | undefined)

const typeStyles: Record<string, Record<string, string>> = {
  warning: {
    background: '#FFF7ED',
    color: '#9A4509',
    borderBottom: '2px solid #FDBA74',
  },
  info: {
    background: '#eff6ff',
    color: '#1e40af',
    borderBottom: '2px solid #93c5fd',
  },
  danger: {
    background: '#fef2f2',
    color: '#991b1b',
    borderBottom: '2px solid #fca5a5',
  },
}

const colors = computed(() => {
  const bannerType = announcement.value?.type || 'warning'
  return typeStyles[bannerType] || typeStyles.warning
})

function updateHeight() {
  const height = bannerRef.value?.offsetHeight || 0
  document.documentElement.style.setProperty(
    '--vp-layout-top-height',
    `${height}px`
  )
}

onMounted(() => {
  nextTick(() => {
    if (bannerRef.value) {
      observer = new ResizeObserver(updateHeight)
      observer.observe(bannerRef.value)
      updateHeight()
    }
  })
})

watch(dismissed, (val) => {
  if (val) {
    document.documentElement.style.setProperty('--vp-layout-top-height', '0px')
  }
})

onUnmounted(() => {
  observer?.disconnect()
  document.documentElement.style.setProperty('--vp-layout-top-height', '0px')
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="announcement?.text && !dismissed"
      ref="bannerRef"
      :style="{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        maxWidth: '100vw',
        zIndex: 100,
        boxSizing: 'border-box',
        padding: '10px 16px',
        margin: '0',
        fontSize: '14px',
        fontWeight: '500',
        textAlign: 'center',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        overflow: 'hidden',
        lineHeight: '1.5',
        ...colors,
      }"
    >
      {{ announcement.text }}
      <a
        v-if="announcement.link"
        :href="announcement.link.url"
        :style="{
          fontWeight: '600',
          textDecoration: 'underline',
          marginLeft: '4px',
          color: 'inherit',
        }"
      >{{ announcement.link.text }}</a>
      <button
        v-if="announcement.dismissible"
        aria-label="Close"
        :style="{
          background: 'none',
          border: 'none',
          fontSize: '1em',
          cursor: 'pointer',
          paddingLeft: '6px',
          opacity: '0.7',
          color: 'inherit',
        }"
        @click="dismissed = true"
      >&times;</button>
    </div>
  </Teleport>
</template>
