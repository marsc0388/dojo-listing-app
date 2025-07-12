<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field } from 'vee-validate'
import z from 'zod'
import Notification from '@/components/Notification.vue'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const { fetch: refreshSession } = useUserSession()
const credentials = reactive({
  email: '',
  password: '',
})

async function login() {
  $fetch('/api/login', {
    method: 'POST',
    body: credentials,
  })
    .then(async () => {
    // Refresh the session on client-side and redirect to the home page
      await refreshSession()
      await navigateTo('/')
    })
    .catch(() => console.log('Bad credentials'))
}

const errors = ref(null)

const formSchema = toTypedSchema(z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
}))
</script>

<template>
  <div>
    <Notification v-if="errors" :message="errors" />
    <Form class="w-2/3 space-y-6" :validation-schema="formSchema" @submit="login">
      <FormField name="email">
        <FormItem>
          <FormLabel for="email">
            Email address
          </FormLabel>
          <FormControl class="border border-gray-300 rounded-sm">
            <Field v-model="credentials.email" name="email" type="email" placeholder="Enter email" required />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField name="password">
        <FormItem>
          <FormLabel for="text-password">
            Password
          </FormLabel>
          <FormControl class="border border-gray-300 rounded-sm">
            <Field v-model="credentials.password" name="password" type="password" aria-describedby="password-help-block" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <!-- TODO: Disable on invalid inputs -->
      <Button type="submit">
        Submit
      </Button>
    </Form>
    <p class="mt-4 text-center">
      Don't have an account? <nuxt-link to="/register">
        Register
      </nuxt-link>
    </p>
  </div>
</template>

<style scoped>
body {
  background: red;
}
</style>
