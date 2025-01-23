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
    <router-link to="/login" class="each-tab">SignIn</router-link>
   </section>
  </nav>
</template>

<script setup>
import MenuBar from "./MenuBar.vue"
</script>

<style scoped>

</style>