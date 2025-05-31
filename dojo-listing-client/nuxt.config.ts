import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // This is for enabling type checking in development or build time
  typescript: {
    typeCheck: true
  },
  modules: ['@pinia/nuxt']
})
