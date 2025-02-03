<template>
    <div class="flex justify-between items-center border-1 border-gray-200 rounded-lg mb-2 p-1">
        <input v-model="searchName" class="border-1 border-gray-200 rounded-lg py-1 px-2 w-36" type="text" placeholder="Search by Name">
        <label for="">Role:</label>
        <select v-model="type" class="border-1 border-gray-200 rounded-lg py-1 px-2 w-18" >
            <option value="">Type</option>
            <option value="admin">Admin</option>
            <option value="player">Player</option>
            <option value="helper">Helper</option>
        </select>
        <label for="">Rank:</label>
        <select  class="border-1 border-gray-200 rounded-lg py-1 px-2 w-10" >
            <option value="">A</option>
            <option value="admin">B</option>
            <option value="player">C</option>
            <option value="helper">D</option>
        </select>
        <label for="">Age:</label>
        <input v-model="age" class="border-1 border-gray-200 rounded-lg p-1 w-12" type="number" placeholder="Age">
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
            <tr v-for="(user,index) in filteredUsers" :key="user.id">
                <td>{{ index + 1 }}</td>
                <td :title="(role==='admin' || user.id === userId)?'click to see detail':'Need to be admin to see the detail'"><router-link :to="gotoLink(user.id)"><span class="font-bold hover:text-gray-500">{{ user.name }}</span></router-link></td>
                <td>{{user.address}}</td>
                <td>{{ user.dob.slice(0, 10)}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
const users = ref([])
const token = ref(localStorage.getItem("token"))
const role = ref(localStorage.getItem("userRole"));
const userId = ref(localStorage.getItem("userId"));
const searchName = ref("")
const type = ref(null)
const age = ref(0)




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

function gotoLink (id){
    if(role.value==='admin' || userId.value===id){
        return '/info/detail/' + id
    }else {
        return "/login"
    }
}
const filteredUsers = computed(()=>{
    if(searchName.value){
        return users.value.filter(u => u.name.toLowerCase().includes(searchName.value.toLowerCase()))
    }else if(type.value){
        return users.value.filter(u => u.role.includes(type.value))
    }else if(age.value){
        return users.value.filter(u => {
            let birthDate = new Date(u.dob);  
            let today = new Date();  

            let actualAge = today.getFullYear() - birthDate.getFullYear();  
            let monthDiff = today.getMonth() - birthDate.getMonth();  

            // Adjust if the birthday hasn't occurred yet this year
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            actualAge--;
            }
            return actualAge == age.value;
        })
    }else {
        return users.value
    }
})
</script>

<style scoped>
   
</style>