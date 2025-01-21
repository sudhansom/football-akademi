<script setup>
import NavBar from "../src/components/NavBar.vue"
import DisplayInfoVue from "./components/DisplayInfo.vue"
import TheFooter from "./components/TheFooter.vue"


</script>

<template>
 <nav-bar />
 <router-view></router-view>
 <the-footer />
 
</template>

<style scoped>
.main-body {
  min-height: 90dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
