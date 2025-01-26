<template>
  <div v-if="user" class="person">
    <div class="flex justify-between card">
    <div >
        <h2 class="font-bold text-2xl mb-3">{{ user.name }}</h2>
        <p><b>Started on: {{user.joined}}</b></p>
    </div>
    <div class="border-gray-300 h-32 w-32">
        <img src="../assets/hrithm.png" alt="">
    </div>
  </div>
  <div class="height-weight card">
        <p style="font-weight:bold;margin:0;"><span>Age: {{ 7.4 }} yrs</span> | <span title="Updated on jan-2025">Height: {{ user.personal.height}}cm</span> | <span title="Updated on jan-2025">Weight: {{user.personal.weight}}kg</span></p>
  </div>
  <div class="payment card">
    <table>
        <h3 class="text-xl font-bold">Payments:</h3>
        <thead>
            <tr>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mar</th>
                <th>Apr</th>
                <th>Jun</th>
                <th>Jul</th>
                <th>Aug</th>
                <th>Sep</th>
                <th>Oct</th>
                <th>Nov</th>
                <th>Dec</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th><i class="fa-solid fa-check text-green-500 hover:text-green-300 cursor-pointer"></i></th>
                <th><i class="fa-solid fa-xmark text-red-500 hover:text-red-300 cursor-pointer"></i></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </tbody>
    </table>
  </div>
  <div class="about card">
    <h3 class="text-xl font-bold">Skills:</h3>
    <ol>
        <li>1. good running (fast )</li>
        <li>2. very interested and motivated</li>
        <li>3. he is not good at dribbling</li>
        <li>4. not good shoot</li>
        <li>5. slow with ball</li>
        <li>6. week left leg</li>
    </ol>
  </div>
    <div class="s-training card">
    <h3 class="text-xl font-bold">Specific Training</h3>
    <p>Not taken yet.</p>
    </div>
  </div>
  <div v-else class="person flex justify-center items-center">
    <loading-spinner></loading-spinner>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

const user = ref(null)

onMounted(()=>{
    fetch('http://localhost:3002/users/1')
    .then(response => response.json())
    .then(data => {
        user.value = data
    })
})
</script>

<style scoped>
.image {
    padding: 2px;
    border: 1px solid gray;
    border-radius: 6px;
    height: 100px;
    width: 100px;
}
img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    border-radius: 6px;
}

.person {
    border: 1px solid gray;
    padding: 12px;
    border-radius: 12px;
    margin: 24px;
}
ol {
    padding:0;
    margin: 0;
}
li {
    margin-left: 24px;
}
.card {
    background: rgb(235, 235, 235);
    padding: 12px;
    margin: 12px 0;
    border-radius: 12px;
}
</style>