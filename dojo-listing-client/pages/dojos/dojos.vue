<template>
    <div>
        <h1> Dojo listing</h1>
        <nuxt-link to="./uploadDojo" class="btn">Add a new dojo</nuxt-link>
        <b-card-group deck v-if="dojos">
        <Dojo
        v-for="dojo in dojos"
        :key="dojo._id"
        :dojo="dojo"/>
        </b-card-group>
        <b-alert show dismissible v-else>
            No dojos found <b>&rArr;</b>
        </b-alert>
    </div>
</template>
<script>
import Dojo from "../../components/Dojo.vue"
export default {
    components: {
        Dojo,
    },
    async asyncData({$axios}) {
            // this.$store.dispatch("loadDojos")
            const dojos = await $axios.$get("/api/dojos")
            return {dojos};
        }
}
</script>