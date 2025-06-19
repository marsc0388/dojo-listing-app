<script setup lang="ts">
// toTypedSchema is used to convert Zod schema to a format compatible with VeeValidate
import { toTypedSchema } from '@vee-validate/zod'
// useForm is a composable from VeeValidate for form handling
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = toTypedSchema(z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  kanchou: z.string().min(1, 'Kanchou is required').max(50, 'Kanchou must be less than 50 characters'),
}))

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    title: '',
    kanchou: '',
  },
})

// const title = ref('')
// const kanchou = ref('')
// const file1 = ref<{ name: string } | null>(null)

const onSubmit = form.handleSubmit(async (values) => {
  console.log('Form submitted with values:', values)
  // Here you would typically send the data to your API
  // For example:
  // await axios.post('/api/dojos', values)
})

// function upload() {
//   console.log('upload attempted!')
// }
// export default {
//     middleware: 'auth',
//     data() {
//         return {
//             title: '',
//             kanchou: '',
//             file1: null
//         }
//     },
//     methods: {

//         async upload() {
//           try {
//             const dojo = await this.$axios.$post('/api/dojos', {
//             title: this.title,
//             kanchou: this.kanchou,
//             })

//             this.file1.metadata = await this.$axios.$get(`/api/dojos/${dojo._id}`)
//             await this.$axios.post('/api/upload', this.file1);
//             await this.$router.push("/dojos/dojos");
//           }
//           catch(error) {
//             console.log(error);
//           }
//           finally {
//             console.log(this.file1);
//           }
//         }
//     }
// }
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit">
      <!-- Title -->
      <FormField v-slot="{ componentField }" name="title">
        <FormItem>
          <FormLabel>Dojo Title</FormLabel>
          <FormControl>
            <Input v-bind="componentField" id="title" type="text" trim />
          </FormControl>
          <FormDescription>Let us know the dojo title.</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <!-- <b-form-group id="titleset" description="Let us know the dojo title." label="Enter the dojo title"
          label-for="title">
          <b-form-input id="title" v-model="title" trim></b-form-input>
        </b-form-group> -->
      <FormField v-slot="{ componentField }" name="kanchou">
        <FormItem>
          <FormLabel>Dojo Title</FormLabel>
          <FormControl>
            <Input v-bind="componentField" id="title" type="text" trim />
          </FormControl>
          <FormDescription>Let us know the dojo Kanchou.</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <!-- <b-form-group id="kanchouset" description="Let us know the dojo leader." label="Who is the kanchou?"
          label-for="kanchou">
          <b-form-input id="kanchou" v-model="kanchou" trim></b-form-input>
        </b-form-group> -->
      <!-- <b-form-file v-model="file1" :state="Boolean(file1)" placeholder="Choose a photo for your dojo"
          accept=".jpg, .png, .gif">
        </b-form-file>
        <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div> -->
      <Button type="submit">
        Submit
      </Button>
    </form>
  </div>
</template>
