<template>
  <section>
    <div class="carousel">
        <div class="image">
            <img :src="images[count]" alt="">
        </div>
        <span  class="prev" @click="prevSlide">‹</span>
        <span  class="next" @click="nextSlide">›</span>
    </div>
    <ImageIndication :len="images.length - 1" v-model="count" />
  </section>


</template>

<script setup>
import { ref } from 'vue'
import ImageIndication from './ImageIndication.vue';
let count = ref(0);
const images = ref([
    "/images/ayoub.png",
    "/images/f1.png",
    "/images/f2.png",
    "/images/f3.png",
    "/images/f4.png",

])
function prevSlide(){
    if(count.value > 0){
        count.value -= 1;
    }else {
        count.value = images.value.length - 1
    }
}
function nextSlide(){
    if(count.value < images.value.length - 1){
        count.value += 1;
    }else {
        count.value = 0;
    }
}
</script>

<style scoped>
section {
    max-width: 500px;
    margin: auto;
}
.carousel {
    position: relative;
    max-width: 500px;
    max-height: 300px;
    margin: 24px auto 12px;
    overflow: hidden;
    border-radius: 12px;
    z-index: 1;
}
.image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: cover;
    display: block;
}
.prev, .next {
    position: absolute;
    top: 50%;
    z-index: 10;
    font-size: 32px;
    cursor: pointer;
    color: #fff;
    transform: translateY(-50%);
    transition: all .5s ease-in-out;
}
.prev {
    left: 12px; 
}
.next {
    right: 12px; 
}
.prev:hover, .next:hover {
    color: #fff;
    font-size: 48px;
}
</style>

