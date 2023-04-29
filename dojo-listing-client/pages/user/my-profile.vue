<template>
    <div>
        <b-container>
        <b-card
        title="Your profile"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 50%;"
        class="mt-3 text-center"
    >
    <b-card-body>
        <h4>{{this.$auth.user.full_name}}</h4>
        
    </b-card-body>
        <b-card-text>
            {{this.$auth.user.email}}
        </b-card-text>
        <nuxt-link to="/user/logout">Logout</nuxt-link>
    </b-card>
    </b-container>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
}
</script>