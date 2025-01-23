<template>
  <h2>General Information</h2>
  <div class="programs">
    <h3>Our Programs</h3>
    <div>
        <div v-if="events?.length" class="schedule">
        <span v-for="event in events" :key="event">{{event.day}} - {{event.time}}</span>
        </div>
        <loading-spinner v-else />
    </div>
  </div>
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
import LoadingSpinnerVue from '../components/LoadingSpinner.vue'

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
.schedule {
    display: flex;
    flex-direction: column;
}
h3 {
    margin: 0 12px;
}
h2 {
    text-align: center;
}
</style>