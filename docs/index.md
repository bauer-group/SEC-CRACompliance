---
layout: page
title: CRA Compliance
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const lang = navigator.language || navigator.userLanguage || 'en'
  if (lang.startsWith('de')) {
    window.location.href = '/de/'
  } else {
    window.location.href = '/en/'
  }
})
</script>

<div style="display: flex; justify-content: center; align-items: center; min-height: 60vh; gap: 2rem;">
  <a href="/de/" style="display: flex; flex-direction: column; align-items: center; padding: 2rem 3rem; border: 2px solid var(--vp-c-brand-1); border-radius: 12px; text-decoration: none; transition: all 0.2s;">
    <span style="font-size: 2.5rem;">🇩🇪</span>
    <span style="font-size: 1.2rem; font-weight: 600; margin-top: 0.5rem; color: var(--vp-c-brand-1);">Deutsch</span>
  </a>
  <a href="/en/" style="display: flex; flex-direction: column; align-items: center; padding: 2rem 3rem; border: 2px solid var(--vp-c-brand-1); border-radius: 12px; text-decoration: none; transition: all 0.2s;">
    <span style="font-size: 2.5rem;">🇬🇧</span>
    <span style="font-size: 1.2rem; font-weight: 600; margin-top: 0.5rem; color: var(--vp-c-brand-1);">English</span>
  </a>
</div>
