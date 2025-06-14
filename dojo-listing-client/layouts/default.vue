<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'

// export default { components: { Navbar }}
</script>

<template>
  <!-- TODO, this is not using Nuxt 3 structure -->
  <div>
    <Navbar />
    <slot />
  </div>
</template>
