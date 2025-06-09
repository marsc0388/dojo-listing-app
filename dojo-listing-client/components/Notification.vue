<template>
  <Alert variant="destructive">
    <AlertCircle class="w-4 h-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      {{ message }}
      <br />
      Please try again later or contact support if the issue persists.
      <br />
      <NuxtLink to="/contact" class="text-blue-500 hover:underline">Contact Support</NuxtLink>
    </AlertDescription>
  </Alert>
</template>

<script setup lang="ts">
import { AlertCircle } from 'lucide-vue-next';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
defineProps<{
  message: string
}>()
</script>
