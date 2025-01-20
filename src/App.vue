<script setup>
import NavBar from "../src/components/NavBar.vue"
import DisplayInfoVue from "./components/DisplayInfo.vue"
import LoadingSpinner from "./components/LoadingSpinner.vue"
import DisplayInfo from "./components/DisplayInfo.vue"

</script>

<template>
 <nav-bar />
 <display-info />
 <div class="main-body">
  <loading-spinner />
 </div>
</template>

<style scoped>
.main-body {
  min-height: 90dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
