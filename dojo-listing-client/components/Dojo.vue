<template>
    <div>
  <b-card
    :title="dojo.title"
    img-src="https://images.pexels.com/photos/1168940/pexels-photo-1168940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{dojo.kanchou}}
    </b-card-text>
  </b-card>
</div>
</template>
<script>
export default {
    props: {
        dojo: {
            type: Object,
            required: true,
        }
    },
}
</script>
<style scoped>

</style>