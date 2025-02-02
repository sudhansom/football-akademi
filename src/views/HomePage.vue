<template>
  <div class="home-page">
    <display-info v-if="msg" :message="msg" />
    <ImageCaraousal />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ImageCaraousal from "../components/ImageCaraousal.vue";
import DisplayInfo from "../components/DisplayInfo.vue";

const msg = ref("")
function getMessage(){
  fetch('https://football-backend-dbpassword.up.railway.app/api/messages/')
  .then(response => response.json())
  .then(messages => {
    const message = messages.find(m => m.active)
    msg.value = message.message
  }).catch(err => {
  console.log(err);
      
  })
}
onMounted(()=>{
  getMessage();
})

</script>

<style scoped>
.home-page {
    min-height: 88dvh;
}
</style>