<script setup lang="ts">
import { useNav } from '@slidev/client/composables/useNav.ts'
import { computed } from 'vue'

const nav = useNav()
/** First slide: hero already carries full ThoughtPivot branding. */
const show = computed(() => nav.currentPage.value > 1)
</script>

<template>
  <div v-show="show" class="tp-deck-footermark">
    <a
      class="tp-deck-footermark__link"
      href="https://www.thoughtpivot.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="ThoughtPivot"
    >
      <img class="tp-deck-footermark__logo" src="/tp-white.svg" width="160" height="26" alt="">
    </a>
  </div>
</template>
