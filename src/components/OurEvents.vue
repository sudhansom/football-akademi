<template>
    <div class="relative bg-stone-100 rounded-lg p-3 border border-stone-200">
        <h3 class="font-bold text-xl text-center mb-1">Our Programs</h3>
        <div>
            <div v-if="events.events?.length" class="flex flex-col">
                <span class="hover:bg-gray-300 p-1 flex justify-center" v-for="(event,index) in events.events" :key="event">{{event.day}} - {{event.slot}}
                <span v-if="role==='admin'">
                    <span class="text-gray-100 hover:text-red-500 cursor-pointer inline-block ml-10">
                        <i class="fa-solid fa-trash hover:text-red-500"></i>
                    </span> 
                    <span @click="toggleEdit($event, id, event.day)" class="text-gray-100 hover:text-green-500 cursor-pointer inline-block ml-6">
                        <i class="fa-solid fa-pen-to-square hover:text-green-500"></i>
                    </span>
                </span>
                 <span @click="showParticipants(event.participate)" v-if="role && !sameUser && totalParticipate(event)" :title="totalParticipate(event) + ' player participating'" class="text-green-700 ml-12 cursor-pointer hover:text-green-500">
                        {{ totalParticipate(event) }}
                    </span>
                <span :title="isParticipating(event, index)?'partipating':'not participating'" @click="attendEvent(event)" v-if="token" class="cursor-pointer inline-block ml-10" :class="isParticipating(event, index)?'text-green-500 hover:text-green-700':'text-red-500 hover:text-red-700'">
                    <i class="fa-solid fa-person-running"></i>
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
                <div v-if="role==='admin'" class="flex flex-end gap-2 w-full">
                    <span @click="addNewEvent" class="block font-bold cursor-pointer text-center mt-2 shadow-sm bg-gray-200 hover:bg-gray-300 p-2 rounded-lg" :class="addNew ? 'w-[50%]':'w-full'"> {{addNew?'Save':'Add new schedule'}}</span>
                    <span v-if="addNew" @click="addNew=false" class="block font-bold cursor-pointer text-center mt-2 shadow-sm bg-gray-200 hover:bg-gray-300 p-2 rounded-lg w-[50%]"> Cancel</span>
                </div>
            </div>
            <div v-else class="flex justify-center items-center">
                <loading-spinner />
            </div>
        </div>
        <div v-if="editModal" class="absolute bg-gray-100  p-10 bottom-0 left-0 top-0 right-0">
            <div class="flex flex-col  bg-gray-200 shadow-md rounded-lg  p-10 absolute bottom-8 left-8 top-8 right-8">
                <div  class="flex justify-center border-1 border-gray-300 rounded-lg p-2 gap-6">
                    <select v-model="newday"  class="border-1 rounded-lg border-gray-300">
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
                <div class="flex justify-end gap-1 mt-5">
                    <button @click="editModal=!editModal">Save</button>
                    <button @click="editModal=!editModal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="loading" class="absolute flex justify-center items-center bottom-0 top-0 right-0 left-0">
        <loading-spinner />
    </div>
    <div v-if="showPopup" class="absolute bottom-0 top-0 right-0 left-0 flex justify-center items-center bg-gray-100 opacity-90">
        <PopupModal :participants="participants" />
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { useEventStore } from '../stores/EventStore'
import { useFetchData } from '../composables/useFetchData'
import { useUserStore } from "../stores/UserStore"
import PopupModal from "./PopupModal.vue"
import eventBus from "../../eventBus.js"

const props = defineProps({
    id: String,
    sameUser: Boolean,
})

const { data, error, loading, load } = useFetchData()

const users = useUserStore()
const participants = ref([])
const showPopup = ref(false)


let editModal = ref(false)
let addNew = ref(false)
let day = ref("Sunday")
let newday = ref("")
let time = ref("15:00 - 17:00")

const events = useEventStore()

const role = ref(localStorage.getItem("userRole"))
const token = ref(localStorage.getItem("token"))


function toggleEdit(event, id, d){
    newday.value = d
    console.log(id);
    editModal.value = !editModal.value
}
function addNewEvent(){
    addNew.value = !addNew.value
    console.log(day.value);
}
onMounted(()=>{
   events.fill();
   eventBus.on('reloadEvents', events.fill)
   eventBus.on('closeDialog', ()=>{
    showPopup.value = false;
   })
})

async function attendEvent(event){
    // updates the participation[] in the schedule 
    let totalSchedule = 0;
    let going = false;
    events.events.forEach(e => {
        if(e.participate.includes(props.id)){
            totalSchedule += 1;
        }
    })
    if(totalSchedule < schedule.value && !event.participate.includes(props.id)){
        going = true; // just to update the add or remove the userId in participation[]
    }
    try{
        await load('/schedules/'+event.id , "PATCH", {userId:props.id, going});
    }catch(err){
        console.log(err, error);
    }
    events.fill(); 
}


function isParticipating(event, index){
    return event.participate.includes(props.id);
}

function totalParticipate(event){
    return event.participate.length
}

const schedule = computed(()=>{
    if(props.sameUser){
        return users.currentUser?.schedule.count || 1;
    }else{
        return users.selectedUser?.schedule.count || 1;
    }
})

function showParticipants(p){
    showPopup.value = true;
    participants.value = users.users.filter(u => p.includes(u.id) )
}
</script>

<style scoped>

</style>