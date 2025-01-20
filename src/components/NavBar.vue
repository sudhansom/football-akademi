<template>
  <nav class="navbar">
   <section class="navbar-1">
        <menu-bar />
        <div class="logo">
            <img src="../assets/logo.png" width="48px" alt="logo">
        </div>
   </section>
  </nav>
</template>

<script setup>
import MenuBar from "./MenuBar.vue"
</script>

<style scoped>
.navbar {
    border-bottom: 1px solid rgb(213, 210, 210);
    padding: 6px 12px;
}
.navbar-1 {
    display: flex;
    gap: 12px;
    align-items: center;
}
.logo {
    cursor: pointer;
}
img {
    display: block;
}

</style>