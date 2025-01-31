<template>
    <div class="flex justify-between card">
    <div >
        <h2 class="font-bold text-2xl mb-3">{{ user.name }}</h2>
        <p><b>Started on: {{user.joined.slice(0,10)}}</b></p>
    </div>
    <div class="border-gray-300 h-32 w-32">
        <img :src="user.imagePath" :alt="user.name" class="h-full w-full object-cover shadow-lg rounded-md">
    </div>
  </div>
</template>

<script setup>
defineProps({
    user: Object
})
</script>

<style>

</style>