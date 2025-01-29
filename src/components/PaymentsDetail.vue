<template>
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
                <span class="py-1 px-2 bg-gray-200 border-1 rounded-md cursor-pointer hover:bg-gray-100" @click="saveApproval(user.id)">Approve</span>
                <span class="py-1 px-2 bg-gray-200 border-1 rounded-md cursor-pointer hover:bg-gray-100" @click="approve=null">Cancel</span>
            </div>
        </div>
    </div>
    <div v-if="loading" class="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
    <loading-spinner ></loading-spinner>
  </div>
  </div>
</template>

<script setup>
import LoadingSpinner from "../components/LoadingSpinner.vue"
import eventBus from "../../eventBus.js"
import { ref } from 'vue'
defineProps({
    user: Object
})
const approve = ref(null)
const payment = ref("")
const loading = ref(false);

function updatePayment(key, value, obj){
    approve.value = {
        key,
        value
    }
}
function saveApproval(id){
    loading.value = true;
    fetch('https://football-backend-dbpassword.up.railway.app/api/users/payments/'+id, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        month: approve.value.key,
        value: payment.value
    })
}).then(response => response.json()).then(data => {
    approve.value = null;
    payment.value = "";
    loading.value = false;
    eventBus.emit("userData")
})
}
</script>

<style>

</style>