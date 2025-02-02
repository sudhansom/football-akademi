<template>
 <div class="text-center">
     <h3 class="font-bold text-3xl mb-4">Important messages</h3>
  <div class="relative">
    <table>
    <thead>
      <tr>
        <th>S.N</th>
        <th>Message</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(message, index) in messages" :key="message">
        <td>{{ index }}</td>
        <td>{{ message.message }}</td>
        <td>{{ message.active? "active" : "disabled" }}</td>
        <td>
          <span>
              <span @click="deleteMessage" class="text-gray-500 hover:text-red-500 cursor-pointer inline-block ml-10"><i class="fa-solid fa-trash hover:text-red-500"></i></span>
              <span @click="editMessage(message.message, message.active, message.id)" class="text-gray-500 hover:text-green-500 cursor-pointer inline-block ml-6"><i class="fa-solid fa-pen-to-square hover:text-green-500"></i></span>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-if="edit" class="absolute left-0 right-0 top-0 bottom-0 bg-gray-200 opacity-95">
    <div class="flex justify-center items-center gap-2 p-2">
      <input v-model="currentMessage.message" type="text" class="bg-white rounded-md p-1 border-blue-500">
      <input v-model="currentMessage.active" type="checkbox" class="bg-white rounded-md p-1">Active
    </div>
    <button @click="updateMessage" class="p-1">Save</button>
    <button @click="edit=false" class="p-1 ml-4">Cancel</button>
  </div>
  </div>
 </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const messages = ref([])
const edit = ref(false);
const loading = ref(false);
const currentMessage = ref(null);

function getMessages(){
  fetch('https://football-backend-dbpassword.up.railway.app/api/messages/')
  .then(response => response.json())
  .then(data => {
    messages.value = data;
  }).catch(err => {
    console.log(err);   
  })
}
onMounted(()=>{
  getMessages();
})
function editMessage(message, active, id){
  edit.value = true;
  currentMessage.value = {
    message,
    active,
    id
  }
  
}
function deleteMessage(){
  console.log('delete message')
}
function addMessage(){
  console.log('add message')
}
function updateMessage(){
    loading.value = true;
    fetch('https://football-backend-dbpassword.up.railway.app/api/messages/'+ currentMessage.value.id, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        message: currentMessage.value.message,
        active: currentMessage.value.active,
    })
}).then(response => response.json()).then(data => {
    edit.value = false;
    loading.value = false;
    getMessages();
})
}
</script>

<style>

</style>