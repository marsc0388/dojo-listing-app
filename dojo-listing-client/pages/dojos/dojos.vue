<template>
  <div>
    <h1> Dojo listing</h1>
    <NuxtLink to="./uploadDojo" class="btn">Add a new dojo</NuxtLink>
    <DojoCard v-for="dojo in dojos" :key="dojo.id" :dojo="dojo" />
    <Alert v-if="dojos.length === 0">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        No dojos found. Please add a dojo to get started.
      </AlertDescription>
    </Alert>
  </div>
</template>
<script setup lang="ts">
import DojoCard from '~/components/DojoCard.vue';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import type { Dojo } from '~/types/dojo';


const dojos = ref<Dojo[]>([])
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
</script>
