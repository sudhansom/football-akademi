<template>
  <div class="home-page">
    <display-info v-if="msg" :message="msg.message" />
    <ImageCaraousal />
    <about-me />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import ImageCaraousal from "../components/ImageCaraousal.vue";
import DisplayInfo from "../components/DisplayInfo.vue";
import { useMessageStore } from "../stores/MessageStore"
import AboutMe from '../components/AboutMe.vue';

const messages = useMessageStore()

onMounted(()=>{
  messages.fill();
})

const msg = computed(()=>{
  return messages. messages.find(m => m.active)
})

</script>

<style scoped>
.home-page {
    min-height: 88dvh;
}
</style>