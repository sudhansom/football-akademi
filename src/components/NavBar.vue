<template>
  <nav class="flex justify-between items-center border-1 py-1 border-gray-300">
   <section class="flex space-x-4 items-center pl-2">
        <!-- <router-link to="/"><menu-bar /></router-link> -->
        <router-link to="/" class="cursor-pointer">
            <img class="block" src="../assets/logo.png" width="48px" alt="logo">
        </router-link>
        <router-link v-if="users.token" :to="`/info/detail/${users.currentUser.id}`" class="each-tab login">{{ users.currentUser.name }}</router-link>
   </section>
   <section class="ayoub">
    <h2 class="hidden md:block text-xl font-bold">Ayoub Sørensen, Fodbold Akademi</h2>
   </section>
   <section class="flex space-x-4 items-center">
    <router-link to="/info" class="each-tab">Information</router-link>
    <span v-if="users.token" @click="logoutUser" class="each-tab">LogOut</span>
    <router-link v-else  to="/login" class="each-tab">SignIn</router-link>

   </section>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import MenuBar from "./MenuBar.vue"
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/UserStore'

const users = useUserStore()

const router = useRouter()

function logoutUser(){
  localStorage.removeItem("userRole")
  localStorage.removeItem("userId")
  localStorage.removeItem("token")
  localStorage.removeItem("schedule")
  localStorage.removeItem("user")
  users.fillCurrentUser(null)
  users.fillSelectedUser(null)
  users.setToken();
  router.push("/");
}

</script>

<style scoped>

</style>