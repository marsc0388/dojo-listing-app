<template>
    <div>
        <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
    <template #header>Hi {{this.$auth.user.full_name}}</template>

    <template #lead>
      {{this.$auth.user.email}}
    </template>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>
  </b-jumbotron>
        <b-card
        title="Profile"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
    <b-card-body>
        <h4></h4>
        <h4></h4>
        <nuxt-link to="/user/logout">Logout</nuxt-link>
    </b-card-body>
        <b-card-text>
        </b-card-text>
    </b-card>
    </div>
</template>

<script>
export default {
    middleware: 'auth'
}
</script>