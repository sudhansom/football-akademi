<template>
  <h2 class="font-bold text-2xl text-center mb-2">General Information</h2>
  <our-events />
  <hr class="m-3 text-gray-200">
  <our-prices></our-prices>
</template>

<script setup>
import LoadingSpinner from '../components/LoadingSpinner.vue'
import OurEvents from "../components/OurEvents.vue"
import OurPrices from '../components/OurPrices.vue'

</script>

<style scoped>
</style>