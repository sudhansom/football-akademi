<template>
  <h2>General Information</h2>
 <our-events :events="events" />
  <hr>
  <div class="prices">
    <h3>Prices</h3>
    <table>
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
.programs {
    background: rgb(234, 232, 232);
    border-radius: 12px;
    text-align: center;
    padding: 12px;
}
h3 {
    margin: 0 12px;
}
h2 {
    text-align: center;
}
</style>