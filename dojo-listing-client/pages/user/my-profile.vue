<template>
    <div>
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
        <h4>{{this.$auth.user.full_name}}</h4>
        <h4>{{this.$auth.user.email}}</h4>
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