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
      <tr v-for="(message, index) in messages.messages" :key="message">
        <td>{{ index }}</td>
        <td :title="displayDate(message.createdAt, message.updatedAt)">{{ message.message }}</td>
        <td>{{ message.active? "active" : "disabled" }}</td>
        <td>
          <span>
              <span title="click to delete" @click="deleteMessage(message.id)" class="text-gray-500 hover:text-red-500 cursor-pointer inline-block ml-10"><i class="fa-solid fa-trash hover:text-red-500"></i></span>
              <span title="click to edit" @click="editMessage(message.message, message.active, message.id)" class="text-gray-500 hover:text-green-500 cursor-pointer inline-block ml-6"><i class="fa-solid fa-pen-to-square hover:text-green-500"></i></span>
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
  <div v-if="addNew" class="absolute left-0 right-0 top-0 bottom-0 bg-gray-200 opacity-95 flex flex-col justify-around items-center">
    <div class="flex justify-center items-center gap-2 p-2 w-full">
      <input v-model="currentMessage.message" type="text" class="bg-white rounded-md p-1 border-blue-500 w-full">
    </div>
    <div>
      <button @click="addMessage" class="p-1">Save</button>
      <button @click="addNew=false" class="p-1 ml-4">Cancel</button>
    </div>
  </div>
  <button class="mt-2" @click="addNew=!addNew">{{ addNew? "Cancel" : "Add New"}}</button>
  <div v-if="loading" class="flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 bg-gray-200 opacity-70">
    <loading-spinner />
  </div>
  <div v-if="warning & !closeWarning" class="flex justify-center flex-col items-center absolute left-0 right-0 top-0 bottom-0 bg-gray-200 opacity-95">
    <p class="font-bold text-xl text-red-700">You should have only one active message!!</p>
    <button @click="closeWarning=true" class="mt-2">OK</button>
  </div>
  </div>
 </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue';
import LoadingSpinner from "../components/LoadingSpinner.vue"

import { useMessageStore } from "../stores/MessageStore"


const messages = useMessageStore()
const edit = ref(false);
const loading = ref(false);
const currentMessage = ref({message:"",active:false, id:undefined});
const addNew = ref(false);
const closeWarning = ref(false);

onMounted(()=>{
  messages.fill();
})
function editMessage(message, active, id){
  edit.value = true;
  currentMessage.value = {
    message,
    active,
    id
  }
  
}
async function deleteMessage(id){
   loading.value = true;
    await axios.delete('https://football-backend-dbpassword.up.railway.app/api/messages/'+id)
    loading.value = false;
    messages.fill();
}
async function addMessage(){
  loading.value = true;
    try{
          await axios.post('https://football-backend-dbpassword.up.railway.app/api/messages/', {
          message: currentMessage.value.message,
        })
      }catch(err){
        console.log('Could not post message: ', err)
      }
    loading.value = false;
    currentMessage.value.message = "";
    addNew.value = false;
    messages.fill();
  }

async function updateMessage(){
    loading.value = true;
    try{
      await axios.patch('https://football-backend-dbpassword.up.railway.app/api/messages/'+ currentMessage.value.id, {
        message: currentMessage.value.message,
        active: currentMessage.value.active,
      })
    }catch(error){
      console.log(error)
    }
      edit.value = false;
      loading.value = false;
      currentMessage.value = {
        message:"",
        active:false, 
        id:undefined
      }
      closeWarning.value = false;
      messages.fill();
  }
function displayDate(created, updated){
  return `Created at: ${created.slice(0, 10)}, Updated at: ${updated.slice(0, 10)}`
}

const warning = computed(()=>{
  return messages.messages.filter(m => m.active).length > 1
})
</script>

<style>

</style>