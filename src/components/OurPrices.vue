<template>
  <div class="bg-stone-100 rounded-lg p-3 text-center border border-stone-200">
    <h3 class="font-bold text-xl mb-1">Prices</h3>
    <table v-if="prices.prices.length" class="">
        <thead>
            <tr>
                <th>Times / week</th>
                <th>Price</th>
                <th v-if="role==='admin'">
                    <span class="m-1">Actions</span>
                </th>
                <th v-if="role">
                    <span>Joined</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p in prices.prices" :key="p.id">
                <td>
                    <input v-if="editId==p.id" type="text" :placeholder="p.times" class="bg-white text-center w-12">
                    <span v-else>{{p.times}}</span>
                </td>
                <td>
                    <input v-if="editId==p.id" type="text" :placeholder="p.price" class="bg-white text-center">
                    <span v-else>{{ p.price }} dkk</span>
                </td>
                <td v-if="role==='admin'">
                    <div v-if="editId!=p.id">
                        <span title="Delete this price tag" class="cursor-pointer mr-2"><i class="fa-solid fa-trash text-red-300 hover:text-red-500"></i> </span><span title="Edit this price" @click="editPrice(p.id)" class="cursor-pointer"> <i class="fa-solid fa-pen-to-square text-green-300 hover:text-green-500"></i></span>
                    </div>
                    <div v-else>
                        <span title="Save the changes" @click="savePrice" class="cursor-pointer mr-2"><i class="fa-solid fa-floppy-disk text-green-300 hover:text-green-600"></i> </span><span title="Cancel editing" @click="editId=false" class="cursor-pointer"> <i class="fa-solid fa-xmark text-gray-400 hover:text-gray-700"></i></span>
                    </div>
                    
                </td>
                <td v-if="role" @click="updateSchedule(p.times)" class="relative">
                    <span v-if="p.times===schedule"  title="paid" >
                        <i class="fa-solid fa-check text-green-500 hover:text-green-300 cursor-pointer"></i>
                        <div v-if="loading" class="absolute bottom-0 right-0 left-0 top-0">
                            <loading-spinner></loading-spinner>
                        </div>
                    </span>
                </td>
            </tr>
           
            <tr v-if="add">
                <td><input v-model="times" type="text" class="bg-white text-center"></td>
                <td><input v-model="rate" type="text" class="bg-white text-center"></td>
                <td>
                     <span v-if="add">
                        <span title="Save the changes" @click="add=false" class="cursor-pointer"><i class="fa-solid fa-floppy-disk text-green-300 hover:text-green-600"></i></span>
                        <span title="Cancel adding new" @click="add=false" class="cursor-pointer ml-2"> <i class="fa-solid fa-xmark text-gray-400 hover:text-gray-700"></i></span>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    <div v-else>
        <loading-spinner></loading-spinner>
    </div>
    <div v-if="!editId && role==='admin'" class="flex justify-end">
        <span v-if="!add" title="Add a new price" @click="add=true" class="cursor-pointer"><i class="fa-solid fa-plus text-green-800 hover:text-green-500"></i></span>
    </div>
    <p class="mt-2"><b>Specific training: 5000 dkk / package</b></p>
    <p>5 trainings(1 hour each) in each package.</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import LoadingSpinner from "./LoadingSpinner.vue"
import { usePriceStore } from "../stores/PriceStore"
import { useUserStore } from "../stores/UserStore"

import { useFetchData } from "../composables/useFetchData"

const { data, error, loading, load } = useFetchData()

const role = ref(localStorage.getItem("userRole"))
const id = ref(localStorage.getItem("userId"))


const prices = usePriceStore()
const users = useUserStore()


let add = ref(false)
const times = ref(null)
const rate = ref(null)
const editId = ref(null)

function addPrice(){
    editId.value = null
    add.value = !add.value
}
function editPrice(id){
    add.value = false
    editId.value = id
}
function savePrice(){
    editId.value = null
}
async function updateSchedule(times){
    console.log('I am here....', id.value);
    
    if(times === schedule.value){
        console.log('already same times', times, users.currentUser?.schedule)
        return
    }
    await load('/users/schedule/'+ id.value, "PATCH", {schedule: times})
    users.fillCurrentUser(data.value.user);
}
onMounted(()=>{
   prices.fill() 
})
const schedule = computed(()=>{
    return users.currentUser?.schedule || 1;
})
</script>

<style>

</style>