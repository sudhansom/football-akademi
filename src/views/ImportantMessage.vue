<template>
 <div class="text-center">
     <h3 class="font-bold text-xl mb-4">Important messages</h3>
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
        <td>{{ index + 1 }}</td>
        <td :title="displayDate(message.createdAt, message.updatedAt)" :class="message.active?'font-bold text-green-500':''">{{ message.message }}</td>
        <td :class="message.active?'font-bold text-green-500':''">{{ message.active? "active" : "disabled" }}</td>
        <td>
          <span class="flex justify-center items-center gap-2">
              <span title="click to delete" @click="deleteMessage(message.id)" class="text-gray-500 hover:text-red-500 cursor-pointer inline-block flex justify-center items-center"><i class="fa-solid fa-trash hover:text-red-500"></i></span>
              <span title="click to edit" @click="editMessage(message.message, message.active, message.id)" class="text-gray-500 hover:text-green-500 cursor-pointer inline-block flex justify-center items-center"><i class="fa-solid fa-pen-to-square hover:text-green-500"></i></span>
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
 <hr class="my-6">
 <div class="feedback text-center mb-3">
    <h3 class="font-bold text-xl mb-4">Feedbacks from parent</h3>
    <div class="relative">
    <table>
    <thead>
      <tr>
        <th>S.N</th>
        <th>Message</th>
        <th>Player</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(message, index) in messages.feedbacks" :key="message">
        <td>{{ index + 1 }}</td>
        <td :title="displayDate(message.createdAt, message.updatedAt)" :class="message.active?'font-bold text-green-500':''">{{ message.message }}</td>
        <td :class="message.active?'font-bold text-green-500':''">{{ getUser(message.user) }}</td>
        <td>
          <span class="flex justify-center items-center gap-2">
              <span title="click to delete" @click="deleteFeedback(message.id)" class="text-gray-500 hover:text-red-500 cursor-pointer inline-block flex justify-center items-center"><i class="fa-solid fa-trash hover:text-red-500"></i></span>
              <span title="click to edit" @click="updateFeedback(message.message, message.active, message.id)" class="text-gray-500 hover:text-green-500 cursor-pointer inline-block flex justify-center items-center"><i class="fa-solid fa-pen-to-square hover:text-green-500"></i></span>
          </span>
        </td>
        <div v-if="editFeedback" class="absolute left-0 right-0 top-0 bottom-0 bg-gray-200 opacity-95">
    <div class="flex justify-center items-center gap-2 p-2">
      <label>
        Priority: 
      <input v-model="priority" type="number" class="bg-white rounded-md p-1 w-[50px]">
      </label>
      <button @click="updateFeedback(message.message, message.active, message.id)" class="p-1">Save</button>
      <button @click="editFeedback=false" class="p-1 ml-4">Cancel</button>
    </div>
  </div>
      </tr>
    </tbody>
  </table>
 
  <div v-if="loading" class="flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 bg-gray-200 opacity-70">
    <loading-spinner />
  </div>
  </div>
 </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue';
import LoadingSpinner from "../components/LoadingSpinner.vue"

import { useMessageStore } from "../stores/MessageStore"
import { useUserStore } from "../stores/UserStore"

import { useFetchData } from "../composables/useFetchData"

const { data, error, loading, load} = useFetchData();


const messages = useMessageStore()
const users = useUserStore()
const edit = ref(false);
const editFeedback = ref(false);
const currentMessage = ref({message:"",active:false, id:undefined});
const currentFeedback = ref({priority: 2});
const addNew = ref(false);
const closeWarning = ref(false);
const priority = ref(0);

onMounted(()=>{
  messages.fill();
  messages.fillFeedbacks();
})
function editMessage(message, active, id){
  edit.value = true;
  currentMessage.value = {
    message,
    active,
    id
  } 
}

async function updateFeedback(message, active, id){
  if(editFeedback.value){
    currentFeedback.value = {
      priority: priority.value,
    } 
    await load('/feedbacks/'+id, 'PATCH', currentFeedback.value)
    editFeedback.value = false;
  }else{
    editFeedback.value = true;
  }
}

async function deleteMessage(id){
    await load('/messages/'+id, 'DELETE')
    messages.fill();
}
async function deleteFeedback(id){
    await load('/feedbacks/'+id, 'DELETE')
    messages.fillFeedbacks();
}
async function addMessage(){
    await load('/messages/', "POST", {
    message: currentMessage.value.message,})
     
    currentMessage.value.message = "";
    addNew.value = false;
    messages.fill();
  }

async function updateMessage(){
      await load('/messages/'+ currentMessage.value.id,'patch', {
        message: currentMessage.value.message,
        active: currentMessage.value.active,
      })
   
      edit.value = false;
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

function getUser(id){
  users.fill()
  let user = users.users.find(u => u.id === id)
  return user.name;
}
</script>

<style>

</style>