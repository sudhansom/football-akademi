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
  <div class="payment card relative overflow-x-auto">
    <h3 class="text-xl font-bold">Payments:</h3>
    <table>
        <thead>
            <tr>
                <th class="p-1" v-for="m in Object.keys(user.payments)" :key="m" >{{m}}</th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td v-for="[m,v] in Object.entries(user.payments)" :key="m" @click="updatePayment(m,v, user.payments)" class="hover:bg-gray-100 cursor-pointer">
                    <span title="paid" v-if="v==='paid'"><i class="fa-solid fa-check text-green-500 hover:text-green-300 cursor-pointer"></i></span>
                    <span title="request for approval" v-if="v==='pending'"><i class="fa-solid fa-check text-yellow-500 hover:text-yellow-300 cursor-pointer"></i></span>
                    <span title="not-paid" v-if="v==='not-paid'"><i class="fa-solid fa-xmark text-red-500 hover:text-red-300 cursor-pointer"></i></span>
                    <span v-else></span>
                </td>
            </tr>
        </tbody>
    </table>
    <div v-if="approve" class="absolute left-0 right-0 top-0 bottom-0">
        <div class="absolute left-1 right-1 top-1 bottom-1 bg-gray-100 flex flex-col justify-center items-center p-1 shadow-lg rounded-lg">
            <div class="flex gap-2">
                <p class="font-bold mb-2 p-0">Payment for {{ approve.key }}</p>
                <label class="mr-2">
                    <input type="radio" name="payment" value="paid" v-model="payment"> Paid
                </label>
                <label for="">
                    <input type="radio" name="payment" value="not-paid" v-model="payment"> Not paid
                </label>
            </div>
            <div class="flex justify-center gap-2 mt-1">
                <span class="py-1 px-2 bg-gray-200 border-1 rounded-md cursor-pointer hover:bg-gray-100" @click="saveApproval">Approve</span>
                <span class="py-1 px-2 bg-gray-200 border-1 rounded-md cursor-pointer hover:bg-gray-100" @click="approve=null">Cancel</span>
            </div>
        </div>
    </div>
  </div>
  <skills-detail></skills-detail>
  <specific-training></specific-training>
  </div>
  <div v-else class="person flex justify-center items-center">
    <loading-spinner></loading-spinner>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import SkillsDetail from "../components/SkillsDetail.vue"
import SpecificTraining from "../components/SpecificTraining.vue";

const user = ref(null)
const approve = ref(null)
const payment = ref(null)

onMounted(()=>{
    fetch('http://localhost:3002/users/1')
    .then(response => response.json())
    .then(data => {
        user.value = data
    })
})
function updatePayment(key, value, obj){
    approve.value = {
        key,
        value 
    }
}
function saveApproval(){
    //fetch update database
    console.log(`Change payment of ${approve.value.key} from ${approve.value.value} to ${payment.value}`)
}
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