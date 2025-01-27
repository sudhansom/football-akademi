<template>
  <div class="about card">
    <h3 class="text-xl font-bold">Skills:</h3>
    <ol>
        <li class="hover:bg-gray-300">
            <span class="p-1">1. good running (fast )</span>
            <span>
                <span class="text-gray-100 hover:text-red-500 cursor-pointer inline-block ml-10"><i class="fa-solid fa-trash hover:text-red-500"></i></span> <span @click="toggleEdit($event, id, event.day)" class="text-gray-100 hover:text-green-500 cursor-pointer inline-block ml-6"><i class="fa-solid fa-pen-to-square hover:text-green-500"></i></span>
            </span>
        </li>
        <li>2. very interested and motivated</li>
        <li>3. he is not good at dribbling</li>
        <li>4. not good shoot</li>
        <li>5. slow with ball</li>
        <li>6. week left leg</li>
    </ol>
     <div class="flex justify-between px-4">
        <div v-if="add">
            <input type="text" class="bg-white mt-1">
        </div>
        <div>
            <span v-if="!add" title="Add a new price" @click="add=true" class="cursor-pointer"><i class="fa-solid fa-plus text-green-400 hover:text-green-500"></i></span>
        <span v-else>
            <span title="Save the changes" @click="add=false" class="cursor-pointer"><i class="fa-solid fa-floppy-disk text-green-800 hover:text-green-500"></i></span>
            <span title="Cancel adding new" @click="add=false" class="cursor-pointer ml-2"> <i class="fa-solid fa-xmark text-gray-400 hover:text-gray-700"></i></span>
        </span>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const add = ref(false)

</script>

<style>

</style>