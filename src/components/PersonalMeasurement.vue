<template>
  <div class="height-weight card relative">
        <p style="font-weight:bold;margin:0;">
            <span>Age:{{ 7.4 }} yrs</span> | 
            <span title="Updated on jan-2025">
              Height: <input v-if="edit" v-model="height" type="number" class="w-14 mx-1 bg-white p-1 rounded-md"> 
              <span class="ml-1" v-else>{{ user.height}} cm</span>
            </span> | 
            <span title="Updated on jan-2025">Weight: 
              <input v-if="edit" v-model="weight" type="number" class="w-12 mx-1 bg-white p-1 rounded-md">
              <span v-else>{{user.weight}} kg</span>
            </span>
            <span v-if="!edit" @click="edit=true;height=user.height;weight=user.weight;">
              <i class="fa-solid fa-pen-to-square text-green-600 hover:text-green-500 cursor-pointer ml-4"></i>
            </span>
            <span v-else>
              <span @click="saveHeightWeight(user.id)">
                <i class="fa-solid fa-floppy-disk text-green-800 hover:text-green-500 cursor-pointer mx-2"></i>  
              </span>
              <span @click="edit=false">
                <i class="fa-solid fa-xmark text-gray-400 text-gray-700 hover:text-red-700 cursor-pointer"></i>
              </span>
            </span>
        </p>
        <div v-if="loading" class="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
          <loading-spinner ></loading-spinner>
        </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import LoadingSpinner from "../components/LoadingSpinner.vue"
import eventBus from "../../eventBus.js"

import { useFetchData } from "../composables/useFetchData"

const { data, error, loading, load } = useFetchData()

defineProps({
    user: Object
})
const edit = ref(false)
const height = ref(0)
const weight = ref(0)

async function saveHeightWeight(id){
    await load('/users/measures/'+id, "PATCH", {
      height: height.value,
      weight: weight.value
    })
    edit.value = false;
    eventBus.emit("userData")
}

</script>

<style>

</style>