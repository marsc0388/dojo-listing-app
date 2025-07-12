<script setup lang="ts">
// export default {
//     middleware: 'auth',
// }
</script>

<template>
  <div>
    <Card>
      <CardHeader>
        <CardTitle>My Profile</CardTitle>
        <CardDescription>Manage your profile information</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is your profile page where you can view and manage your account details.</p>
      </CardContent>
      <CardFooter>
        <nuxt-link to="/user/edit-profile" class="btn btn-primary">
          Edit Profile
        </nuxt-link>
        <nuxt-link to="/user/logout">
          Logout
        </nuxt-link>
      </CardFooter>
    </Card>
    <!-- <b-card
        title="Your profile"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 50%;"
        class="mt-3 text-center"
    >
    <b-card-body>
      This will be the user's full name pulled from the auth user object.
        <h4>{{this.$auth.user.full_name}}</h4> -->

    <!-- </b-card-body>
        <b-card-text>
          This will be the email pulled from the auth user object.
            {{this.$auth.user.email}}
        </b-card-text>
        <nuxt-link to="/user/logout">Logout</nuxt-link>
    </b-card> -->
  </div>
</template>
