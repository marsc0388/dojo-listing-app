<script setup lang="ts">
import type { IDojo } from '~/types/dojo'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import DojoCard from '~/components/DojoCard.vue'

const dojos = ref<IDojo[]>([])
// import Dojo from "../../components/Dojo.vue"
// export default {
//     components: {
//         Dojo,
//     },
//     async asyncData({$axios}) {
//             // this.$store.dispatch("loadDojos")
//             const dojos = await $axios.$get("/api/dojos")
//             return {dojos};
//         }
// }
definePageMeta({
  middleware: ['authenticated'],
})
</script>

<template>
  <div>
    <h1> Dojo listing</h1>
    <NuxtLink to="dojos/upload" class="btn">
      Add a new dojo
    </NuxtLink>
    <DojoCard v-for="dojo in dojos" :key="dojo.id" :dojo="dojo" />
    <Alert v-if="dojos.length === 0">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        No dojos found. Please add a dojo to get started.
      </AlertDescription>
    </Alert>
  </div>
</template>
