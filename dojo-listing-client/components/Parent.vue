<script setup lang="ts">
</script>

<template>
  <div>
    <h1>Parent Component</h1>
    <Child>
      <!-- item is defined inside the child component -->
      <!-- We can use the Child components item ref, even though we are in the parent -->
      <template #default="{ item }">
        <p>Name: {{ item.name }}</p>
        <p>Age: {{ item.age }}</p>
      </template>
    </Child>
  </div>
</template>
