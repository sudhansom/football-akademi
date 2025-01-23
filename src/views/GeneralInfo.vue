<template>
  <h2 class="font-bold text-2xl text-center">General Information</h2>
 <our-events :events="events" />
  <hr class="m-3 text-gray-200">
  <div class="bg-stone-100 rounded-lg p-3 text-center">
    <h3 class="font-bold text-xl">Prices</h3>
    <table class="mb-6">
        <thead>
            <tr>
                <th>Times / week</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1800 dkk</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2000 dkk</td>
            </tr>
            <tr>
                <td>3/full</td>
                <td>2500 dkk</td>
            </tr>
        </tbody>
    </table>
    <p><b>Specific training: 5000 dkk / package</b></p>
    <p>5 trainings(1 hour each) in each package.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import OurEvents from "../components/OurEvents.vue"

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