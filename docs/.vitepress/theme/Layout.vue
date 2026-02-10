<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import AnnouncementBanner from './AnnouncementBanner.vue'
import DocFooter from './DocFooter.vue'
</script>

<template>
  <AnnouncementBanner />
  <DefaultTheme.Layout>
    <template #doc-after>
      <DocFooter />
    </template>
  </DefaultTheme.Layout>
</template>
