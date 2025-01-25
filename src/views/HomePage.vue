<template>
  <div class="home-page">
    <display-info :message="'Coming program : 21-January-25, Tuesday'" />
    <ImageCaraousal />
  </div>
</template>

<script setup>
import ImageCaraousal from "../components/ImageCaraousal.vue";
import DisplayInfo from "../components/DisplayInfo.vue"

</script>

<style scoped>
.home-page {
    min-height: 88dvh;
}
</style>