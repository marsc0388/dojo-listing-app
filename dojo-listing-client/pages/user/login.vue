<template>
  <div>
    <Notification :message="errors" v-if="errors" />
    <form class="mt-1" @submit.prevent="login">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email address</FormLabel>
          <FormControl>
            <Input type="email" v-bind="componentField" id="email" placeholder="Enter email" required />
          </FormControl>
          <FormDescription>We'll never share your email with anyone else.</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <!-- <FormControl id="input-email" label="Email address:" label-for="email"
        description="We'll never share your email with anyone else.">
        <b-form-input id="email" v-model="email" type="email" placeholder="Enter email" required>
        </b-form-input>
      </FormControl> -->
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type="password" v-bind="componentField" id="text-password" aria-describedby="password-help-block" />
          </FormControl>
          <FormDescription id="password-help-block">
            Your password must be 8-20 characters long, contain letters and numbers, and must not
            contain spaces, special characters, or emoji.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <!-- <FormControl id="input-password" label="Password:" label-for="text-password">
        <b-form-input type="password" id="text-password" aria-describedby="password-help-block"
          v-model="password"></b-form-input>
        <b-form-text id="password-help-block">
          Your password must be 8-20 characters long, contain letters and numbers, and must not
          contain spaces, special characters, or emoji.
        </b-form-text>
      </FormControl> -->
      <Button type="submit">Submit</Button>
    </form>
    <p>
      Don't have an account? <nuxt-link to="/users/register">Register</nuxt-link>
    </p>

  </div>
</template>

<script setup lang="ts">
import { FormControl, FormDescription, FormField, FormLabel, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Notification from '@/components/Notification.vue'
const errors = ref(null)
const email = ref(null)
const password = ref(null)
// const login_error = ref(null)
// const status = ref(false)

const login = async () => {
  console.log("Login attempted!")
}
// import Notification from '../../components/Notification.vue'
// export default {
//     middleware: 'auth',
//     auth: 'guest',
//     components: {
//         Notification,
//     },
//     data() {
//         return {
//             errors:null,
//             login_error: null,
//             email: null,
//             password: null,
//             status: false,
//         }
//     },
//     methods: {
//         async login(){
//             try {
//                 console.log("Login attempted!")
//                 await this.$auth.loginWith('local', {
//                 data: {
//                     email: this.email,
//                     password: this.password
//                 }
//             })

//             this.$router.push('/')
//             }
//             catch(err) {
//                 console.log(err);
//                 if(err.response.data.message) {
//                     this.login_error = err.response.data.message
//                 }
//             }
//         }
//     }
// }
</script>
<style scoped>
body {
  background: red;
}
</style>
