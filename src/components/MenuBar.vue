<template>
  <div class="menu-bar">
    <div class="bar-line"></div>
    <div class="bar-line"></div>
    <div class="bar-line"></div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.menu-bar {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 24px;
    padding: 3px;
    cursor: pointer;
}
.menu-bar:hover .bar-line{
    background: rgb(198, 196, 196);
}
.bar-line {
    height: 2px;
    background: black;
}
</style>