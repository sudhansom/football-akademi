<template>
    <div class="programs">
        <h3>Our Programs</h3>
        <div>
            <div v-if="events?.length" class="schedule">
            <span v-for="event in events" :key="event">{{event.day}} - {{event.time}}</span>
            </div>
            <loading-spinner v-else />
        </div>
    </div>
</template>

<script setup>
import LoadingSpinner from '../components/LoadingSpinner.vue'

defineProps({
    events: Array
})
</script>

<style scoped>
.schedule {
    display: flex;
    flex-direction: column;
}
</style>