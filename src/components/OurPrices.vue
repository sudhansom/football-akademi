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
            <tr v-for="p in prices" :key="p.id">
                <td>
                    <input v-if="editId==p.id" type="text" :placeholder="p.times" class="bg-white text-center">
                    <span v-else>{{p.times}}</span>
                </td>
                <td>
                    <input v-if="editId==p.id" type="text" :placeholder="p.price" class="bg-white text-center">
                    <span v-else>{{ p.price }} dkk</span>
                </td>
                <td>
                    <div v-if="editId!=p.id">
                        <span class="cursor-pointer">delete </span>|<span @click="editPrice(p.id)" class="cursor-pointer"> edit</span>
                    </div>
                    <div v-else>
                        <span @click="savePrice" class="cursor-pointer">Save </span>|<span @click="editId=false" class="cursor-pointer"> Cancel</span>
                    </div>
                    
                </td>
            </tr>
           
            <tr v-if="add">
                <td><input v-model="times" type="text" class="bg-white text-center"></td>
                <td><input v-model="rate" type="text" class="bg-white text-center"></td>
            </tr>
        </tbody>
    </table>
    <div v-if="!editId" class="flex justify-end">
        <span @click="addPrice" class="cursor-pointer hover:text-green-300">{{add?'Save':'add'}}</span>
        <span v-if="add" @click="add=false" class="cursor-pointer hover:text-green-300 ml-2">Cancel</span>
    </div>
    <p><b>Specific training: 5000 dkk / package</b></p>
    <p>5 trainings(1 hour each) in each package.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const prices = ref([])

let add = ref(false)
const times = ref(null)
const rate = ref(null)
const editId = ref(null)

function addPrice(){
    editId.value = null
    add.value = !add.value
}
function editPrice(id){
    editId.value = id
    console.log(id)
}
function savePrice(){
    editId.value = null
}
onMounted(()=>{
    fetch('http://localhost:3002/prices')
    .then(response => response.json())
    .then(data => 
        {
            prices.value = data
        }
        )
})
</script>

<style>

</style>