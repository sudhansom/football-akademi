<template>
  <div class="about card relative">
    <h3 class="text-xl font-bold">Skills:</h3>
    <ol>
        <li class="hover:bg-gray-300" v-for="(skill,ind) in user.skills" :key="skill">
            <span class="p-1">
                <span>{{ ind + 1 }}. </span>
                <span v-if="edit && index === ind">
                    <input type="text" v-model="user.skills[ind]" class="bg-white px-1 rounded-md">
                </span>
                <span v-if="index != ind"><span> {{ skill }}</span></span>
            </span>
            <span>
                <span @click="deleteSkill(user.id, ind)" v-if="!edit" class="text-gray-100 hover:text-red-500 cursor-pointer inline-block ml-10"><i class="fa-solid fa-trash hover:text-red-500"></i></span> <span v-if="!edit" @click="edit=true;index=ind;" class="text-gray-100 hover:text-green-500 cursor-pointer inline-block ml-6"><i class="fa-solid fa-pen-to-square hover:text-green-500"></i></span>
                <span v-if="edit && index === ind">
                    <span title="Save the changes" @click="updateSkills(user.id)" class="cursor-pointer"><i class="fa-solid fa-floppy-disk text-green-800 hover:text-green-500"></i></span>
                    <span title="Cancel adding new" @click="edit=false" class="cursor-pointer ml-2"> <i class="fa-solid fa-xmark text-gray-400 hover:text-red-700"></i></span>
                </span>
            </span>
        </li>
    </ol>
     <div class="flex justify-between px-4">
        <div v-if="add">
            <input type="text" class="bg-white mt-1 rounded-md px-1" v-model="skill">
        </div>
        <div>
            <span v-if="!add" title="Add a new price" @click="add=true;index=null;" class="cursor-pointer"><i class="fa-solid fa-plus text-green-400 hover:text-green-500"></i></span>
        <span v-else>
            <span title="Save the changes" @click="updateSkills(user.id)" class="cursor-pointer"><i class="fa-solid fa-floppy-disk text-green-800 hover:text-green-500"></i></span>
            <span title="Cancel adding new" @click="add=false" class="cursor-pointer ml-2"> <i class="fa-solid fa-xmark text-gray-400 hover:text-gray-700"></i></span>
        </span>
        </div>
    </div>
    <div v-if="loading" class="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
        <loading-spinner ></loading-spinner>
    </div>
  </div>

</template>

<script setup>
import LoadingSpinner from "../components/LoadingSpinner.vue"
import eventBus from "../../eventBus.js"
import { ref } from 'vue'
import { useFetchData } from "../composables/useFetchData"

const { data, error, loading, load } = useFetchData()

const add = ref(false)
const edit = ref(false)
const skill = ref("")
const index = ref(null)

const props = defineProps({
    user: Object
})

async function updateSkills(id){
    await load('/users/skills/'+id, 'PATCH', {
        skill: index.value!=null? props.user.skills[index.value]: skill.value,
        index: index.value
    })
    edit.value = false;
    add.value = false;
    skill.value = "";
    index.value = null;
    eventBus.emit("userData")
}

async function deleteSkill(id, ind){
    await load('/users/skills/delete/'+id, 'PATCH', {index: ind});
    eventBus.emit("userData");
}

</script>

<style>

</style>