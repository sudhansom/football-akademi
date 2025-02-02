<template>
  <nav class="flex justify-between items-center border-1 py-1 border-gray-300">
   <section class="flex space-x-4 items-center">
        <router-link to="/"><menu-bar /></router-link>
        <router-link to="/" class="cursor-pointer">
            <img class="block" src="../assets/logo.png" width="48px" alt="logo">
        </router-link>
   </section>
   <section class="ayoub">
    <h2 class="text-xl font-bold">Ayoub Sørensen, Fodbold Akademi</h2>
   </section>
   <section class="flex space-x-4 items-center">
    <router-link to="/info" class="each-tab">Information</router-link>
    <span v-if="loggedIn" @click="logoutUser" class="each-tab">LogOut</span>
    <router-link v-else  to="/login" class="each-tab">SignIn</router-link>

   </section>
  </nav>
</template>

<script setup>
import MenuBar from "./MenuBar.vue"
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loggedIn = ref(localStorage.getItem('userRole'))

const router = useRouter()

function logoutUser(){
  console.log('hellooooo')
  localStorage.removeItem("userRole")
  localStorage.removeItem("userId")
  localStorage.removeItem("token")
  loggedIn.value = undefined
  router.push("/");

}
</script>

<style scoped>

</style>