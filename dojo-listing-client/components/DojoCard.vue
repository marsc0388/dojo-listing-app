<script setup lang="ts">
import type { Dojo } from '~/types/dojo'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

defineProps<{
  dojo: Dojo
}>()
</script>

<template>
  <div>
    <Card
      :title="dojo.title"
      img-src="https://images.pexels.com/photos/1168940/pexels-photo-1168940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2"
    >
      <CardHeader>
        <CardTitle>{{ dojo.title }}</CardTitle>
        <CardDescription>Leader: {{ dojo.kanchou }}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Dojo description goes here. This is a placeholder for the dojo's description.</p>
      </CardContent>
      <CardFooter>
        <nuxt-link :to="`/dojos/${dojo.id}`" class="btn btn-primary">
          View Dojo
        </nuxt-link>
      </CardFooter>
    </Card>
  </div>
</template>

<style scoped></style>
