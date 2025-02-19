<template>
  <div class="relative bg-stone-100 rounded-lg p-3 border border-stone-200 mb-2">
    <h3 class="font-bold text-xl text-center mb-2">Feedback:</h3>
    <div class="flex justify-between items-center gap-1">
        <textarea ref="textareaRef" v-model="feedback" rows="1" type="text" class="border-stone-200 bg-white w-full rounded-md p-2" />
        <button :disabled="isDisabled" @click="sendFeedback" class="bg-red-100">Submit</button>
    </div>
    <div v-if="loading" class="absolute flex justify-center items-center bottom-0 top-0 right-0 left-0">
        <loading-spinner />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LoadingSpinner from './LoadingSpinner.vue'
import { useFetchData } from "../composables/useFetchData"

const { data, error, loading, load } = useFetchData()
const feedback = ref('')
const userId = ref(localStorage.getItem("userId"))

const textareaRef = ref('')
const isDisabled = ref(false)

async function sendFeedback(){
    console.log('hello....')
    await load('/feedbacks/', "POST", {
        message: feedback.value,
        user: userId.value
    });
    feedback.value = "";
}
onMounted(()=>{
    if (textareaRef.value) {
        textareaRef.value.addEventListener("keyup", function(event) {
            if (this.value.toLowerCase().includes("fuck")) {
                if(event.key === "Backspace"){
                    this.value = ""
                    this.style.background = "white";
                    return 
                }
                this.style.background = "red";
                isDisabled.value = true;
                this.value += "YOU CANNOT SEND THIS"
            } else {
                this.style.background = "";
                isDisabled.value = false;
            }
        });
    }
})
</script>

<style scoped>
   
</style>