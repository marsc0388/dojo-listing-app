<script setup lang="ts">
const item = ref({
  name: 'John Doe',
  age: '30',
})
</script>

<template>
  <div>
    <h1>My Component</h1>
    <!-- The slot allows the parent to pass content into the Child -->
    <!-- The slotProp is item -->
    <slot :item="item" />
  </div>
</template>
