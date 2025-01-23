<template>
    <div class="bg-stone-100 rounded-lg p-3">
        <h3 class="font-bold text-xl text-center">Our Programs</h3>
        <div>
            <div v-if="events?.length" class="flex flex-col">
            <span class="hover:bg-gray-300 p-1 flex justify-center" v-for="event in events" :key="event">{{event.day}} - {{event.time}}
            <span>
                <span class="text-gray-100 hover:text-red-500 cursor-pointer inline-block ml-10">delete</span> <span class="text-gray-100 hover:text-green-500 cursor-pointer inline-block ml-6">edit</span>
            </span>
            </span>
            <span class="block cursor-pointer each-tab text-center mt-2"> Add new schedule</span>
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

</style>