<template>
  <div class="bg-stone-100 rounded-lg p-3 text-center">
    <h3 class="font-bold text-xl">Prices</h3>
    <table class="">
        <thead>
            <tr>
                <th>Times / week</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1800 dkk</td>
                <td><span>delete </span>|<span> edit</span></td>
            </tr>
            <tr>
                <td>2</td>
                <td>2000 dkk</td>
                <td><span>delete </span>|<span> edit</span></td>
            </tr>
            <tr>
                <td>3/full</td>
                <td>2500 dkk</td>
                <td><span>delete </span>|<span> edit</span></td>
            </tr>
           
            <tr v-if="add">
                <td><input v-model="times" type="text" class="bg-white text-center"></td>
                <td><input v-model="rate" type="text" class="bg-white text-center"></td>
            </tr>
        </tbody>
    </table>
    <div class="flex justify-end">
        <span @click="addPrice" class="cursor-pointer hover:text-green-300">{{add?'Save':'add'}}</span>
        <span v-if="add" @click="add=false" class="cursor-pointer hover:text-green-300 ml-2">Cancel</span>
    </div>
    <p><b>Specific training: 5000 dkk / package</b></p>
    <p>5 trainings(1 hour each) in each package.</p>
  </div>
</template>

<script setup>
import { ref } from "vue"

let add = ref(false)
const times = ref(null)
const rate = ref(null)

function addPrice(){
    add.value = !add.value
}
</script>

<style>

</style>