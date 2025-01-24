<template>
  <h2 class="font-bold text-2xl text-center mb-2">General Information</h2>
 <our-events :events="events" />
  <hr class="m-3 text-gray-200">
  <our-prices></our-prices>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import OurEvents from "../components/OurEvents.vue"
import OurPrices from '../components/OurPrices.vue'

let events = ref([])

onMounted(()=>{
    fetch('http://localhost:3002/events')
    .then(response => response.json())
    .then(data => {
        events.value = data
    })
})
</script>

<style scoped>
</style>