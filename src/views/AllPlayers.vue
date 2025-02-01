<template>
    <div class="flex justify-between border-1 border-gray-200 rounded-lg mb-2 p-1">
        <input class="border-1 border-gray-200 rounded-lg py-1 px-2" type="text" placeholder="Search by Name">
        <select class="border-1 border-gray-200 rounded-lg py-1 px-2 w-24" >
            <option value="">Type</option>
            <option value="">players</option>
            <option value="">helpers</option>
        </select>
        <input class="border-1 border-gray-200 rounded-lg py-1 px-2 w-24" type="number" placeholder="Age">
    </div>
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Address</th>
                <th>Dob</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user,index) in users" :key="user.id">
                <td>{{ index + 1 }}</td>
                <td title="click to see detail"><router-link :to="'/info/detail/' + user.id"><span class="font-bold hover:text-gray-500">{{ user.name }}</span></router-link></td>
                <td>{{user.address}}</td>
                <td>{{ user.dob.slice(0, 10)}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const users = ref([])
const token = ref(localStorage.getItem("token"))

//  http://localhost:5000/api/users/
// https://football-backend-dbpassword.up.railway.app/api/users
function getData(){
    fetch('https://football-backend-dbpassword.up.railway.app/api/users/', {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " +token.value
        },
    })
    .then(response => response.json())
    .then(data => {
        users.value = data
    })
}
onMounted(()=>{
    getData();
})
</script>

<style scoped>
   
</style>