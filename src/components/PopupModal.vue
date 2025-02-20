<template>
  <div class="pop-up rounded-md bg-stone-500">
    <div class="flex justify-between items-center gap-2">
        <input v-model="name" type="text" placeholder="Search by name" class="bg-white mb-1 rounded-md px-2">
        <span title="Close" @click="closeDialog" class="cursor-pointer rounded-full bg-gray"> <i class="fa-solid fa-xmark text-xl text-gray-400 hover:text-gray-700"></i></span>
    </div>
    <table>
        <thead>
            <tr>
                <th>S.N.</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(participant,index) in filteredParticipants" :key=participant.id>
                <td>{{ index + 1 }}</td>
                <td>{{participant.name}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = ref('')

const emit = defineEmits(['closeDialog'])

const props = defineProps({
    participants: Array
})

function closeDialog(){
    emit('closeDialog')
}
const filteredParticipants = computed(()=>{
    return props.participants.filter(p => p.name.toLowerCase().includes(name.value.toLocaleLowerCase()))
})
</script>

<style scoped>
   .pop-up {
    overflow: auto;
    background: rgb(233, 232, 232);
    padding: 6px;
    max-height: 500px;
    max-width: 300px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   }
</style>