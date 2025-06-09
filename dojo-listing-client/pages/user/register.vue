<template>
  <div>
    <Notification :message="errors" v-if="errors" />
    <form class="mt-3" @submit.prevent="submitForm()" @reset="onReset">
      <!-- <b-form-group label="Full Name" label-for="fullName" description="First Name and Last name">
        <b-form-input id="fullName" v-model="full_name" type="text" placeholder="Enter your full name">
        </b-form-input>
      </b-form-group> -->
      <FormField v-slot="{ componentField }" name="fullName">
        <FormItem>
          <FormLabel>Full Name</FormLabel>
          <FormControl>
            <Input type="text" v-bind="componentField" id="fullName" placeholder="Enter your full name" />
          </FormControl>
          <FormDescription>First Name and Last name</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- <b-form-group label="Email" label-for="email" description="User email">
          <b-form-input type="email" v-model="email"></b-form-input>
        </b-form-group> -->

      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" v-bind="componentField" id="email" placeholder="Enter your email" />
          </FormControl>
          <FormDescription>User email</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- <b-form-group label="Password" label-for="password" description="User password">
          <b-form-input id="password" type="password" v-model="password"></b-form-input>
        </b-form-group> -->
      <Button type="submit">Submit</Button>
    </form>
    <div class="has-text-centered" style="margin-top: 20px">
      Already got an account? <nuxt-link to="/users/login">Login</nuxt-link>
    </div>


  </div>
</template>
<script setup lang="ts">
import { FormControl, FormDescription, FormField, FormLabel, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const errors = ref(null)
const full_name = ref(null)
const email = ref(null)
const password = ref(null)
// const status = ref(false)

const submitForm = () => {
  console.log('submitting form', full_name.value, email.value, password.value)
}

const onReset = (event: Event) => {
  event.preventDefault()

  full_name.value = null
  email.value = null
  password.value = null
}

// export default {
//   middleware: 'auth',
//   auth: 'guest',
//   components: {
//     Notification
//   },
//   data() {
//     return {
//       errors: null,
//       full_name: null,
//       email: null,
//       password: null,
//       status: false,
//     }
//   },
//   methods: {
//     submitForm() {
//       // Post to register method
//       console.log(this.full_name, this.email, this.password);
//       this.$axios.post('/api/users/register', {
//         full_name: this.full_name,
//         email: this.email,
//         password: this.password
//       })
//         .then((res) => {
//           console.log(res)

//           if (res.data._id) {
//             this.$router.push({ name: 'user-login', params: { registered: 'yes' } })
//             this.$auth.loginWith('local', {
//               data: {
//                 email: this.email,
//                 password: this.password
//               }
//             })
//               .catch((error) => {
//                 console.log(error)
//               })
//           }
//         }).catch((error) => {
//           console.log(error);
//           if (error.response.data.error) {
//             this.errors = error.response.data.errors
//           }
//         })
//     },
//     onReset(event) {
//       event.preventDefault()

//       this.full_name = null
//       this.email = null
//       this.password = null
//     }
//   }
// }
</script>
