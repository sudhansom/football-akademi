<template>
  <div class="info">
    <div class="links">
        <router-link class="each-tab" to="/info">General</router-link>
        <router-link class="each-tab" to="/info/all-players" >Players</router-link>
        <router-link class="each-tab" to="/info/all-players" >Something else</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>
.info {
    min-height: 84dvh;
    max-width: 500px;
    margin: auto;
}
.links {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 24px auto;
}
.each-tab {
    border-radius: 6px;
    padding: 6px;
    background: rgb(230, 228, 228);
    height: 24px;
}
</style>