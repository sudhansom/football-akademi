<template>
  <div class="info">
    <div class="links">
        <router-link v-if="role" class="each-tab" to="/info">General</router-link>
        <router-link v-if="role" class="each-tab" to="/info/all-players" >Players</router-link>
        <router-link v-if="role==='admin'" class="each-tab" to="/info/important-message" >Message</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const role = ref(localStorage.getItem("userRole"))

</script>

<style scoped>
.info {
    min-height: 84dvh;
    max-width: 500px;
    margin: auto;
}
.links {
    display: flex;
    justify-content: space-around;
    gap: 12px;
    margin: 24px auto;
}
</style>