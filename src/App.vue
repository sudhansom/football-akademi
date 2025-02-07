<script setup>
import NavBar from "../src/components/NavBar.vue"
import TheFooter from "./components/TheFooter.vue"


</script>

<template>
 <nav-bar />
<div class="mx-2">
  <router-view></router-view>
</div>
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
