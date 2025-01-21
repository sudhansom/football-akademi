<template>
  <div class="home-page">
    <display-info />
    <ImageCaraousal />
        <!-- <div class="main-body">
    <loading-spinner />
    </div> -->
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