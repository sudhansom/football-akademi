<template>
  <div class="carousel">
    <div class="image">
        <img :src="images[count]" alt="">
    </div>
    <span v-if="count>1" class="prev" @click="prevSlide">‹</span>
    <span v-if="count < images.length-1" class="next" @click="nextSlide">›</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let count = ref(0);
const images = ref([
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
])
function prevSlide(){
    if(count.value > 0){
        count.value -= 1;
    }
}
function nextSlide(){
    if(count.value < images.value.length - 1){
        count.value += 1;
    }
}
</script>

<style scoped>
.carousel {
    position: relative;
    max-width: 600px;
    max-height: 400px;
    margin: 24px auto;
    overflow: hidden;
    border-radius: 12px;
    z-index: 1;
}
.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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

