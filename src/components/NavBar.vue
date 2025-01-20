<template>
  <nav class="navbar">
   <section class="navbar-1">
        <menu-bar />
        <div class="logo">
            <img src="../assets/logo.png" width="48px" alt="logo">
        </div>
   </section>
   <section class="ayoub">
    <h2>Ayoub Sørensen, Fodbold Akademi</h2>
   </section>
   <section class="navbar-2">
    <span class="nav-item">Information</span>
    <button>SignIn</button>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar-1 {
    display: flex;
    gap: 12px;
    align-items: center;
}
.navbar-2 {
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
.nav-item:hover {
    color: rgb(112, 109, 109);
    cursor: pointer;
}
h2 {
    margin:0;
    font-size: 18px;
}
</style>