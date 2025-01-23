<template>
    <div class="relative bg-stone-100 rounded-lg p-3">
        <h3 class="font-bold text-xl text-center">Our Programs</h3>
        <div>
            <div v-if="events?.length" class="flex flex-col">
                <span class="hover:bg-gray-300 p-1 flex justify-center" v-for="event in events" :key="event">{{event.day}} - {{event.time}}
                <span>
                    <span class="text-gray-100 hover:text-red-500 cursor-pointer inline-block ml-10">delete</span> <span @click="toggleEdit($event, id)" class="text-gray-100 hover:text-green-500 cursor-pointer inline-block ml-6">edit</span>
                </span>
                </span>
                <div v-if="addNew"  class="flex justify-center border-1 border-gray-300 rounded-lg p-2 gap-6">
                    <select v-model="day"  class="border-1 rounded-lg border-gray-300">
                        <option value="Sunday">Sunday</option>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>
                    <input type="text" v-model="time" class="bg-white py-1 px-2 text-center rounded-lg">
                </div>
                <span @click="addNewEvent" class="block font-bold cursor-pointer text-center mt-2 shadow-sm bg-gray-200 hover:bg-gray-300 p-2 rounded-lg"> {{addNew?'Save':'Add new schedule'}}</span>
            </div>
            <div v-else class="flex justify-center items-center">
                <loading-spinner />
            </div>
        </div>
        <div v-if="editModal" class="absolute bg-gray-100  p-10 bottom-0 left-0 top-0 right-0">
            <div class="flex flex-col  bg-gray-200 shadow-md rounded-lg  p-10 absolute bottom-8 left-8 top-8 right-8">
                <div>
                    <p>edit modal</p>
                </div>
                <div class="flex justify-end gap-1">
                    <button @click="editModal=!editModal">Save</button>
                    <button @click="editModal=!editModal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
let editModal = ref(false)
let addNew = ref(false)
let day = ref("Sunday")
let time = ref("15:00 - 17:00")
defineProps({
    events: Array
})
function toggleEdit(event, id){
    console.log(id);
    editModal.value = !editModal.value
}
function addNewEvent(){
    addNew.value = !addNew.value
    console.log(day.value);
}
</script>

<style scoped>

</style>