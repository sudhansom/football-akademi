<script setup>
import NavBar from "../src/components/NavBar.vue"
import LoadingSpinner from "./components/LoadingSpinner.vue"

</script>

<template>
 <nav-bar />
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
