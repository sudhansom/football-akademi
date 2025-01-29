<template>
  <div v-if="user" class="person">
    <personal-detail :user="user"></personal-detail>
    <personal-measurement :user="user"></personal-measurement>
    <payments-detail :user="user"></payments-detail>
    <skills-detail :user="user"></skills-detail>
    <specific-training></specific-training>
  </div>
  <div v-else class="person flex justify-center items-center">
    <loading-spinner></loading-spinner>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
import SkillsDetail from "../components/SkillsDetail.vue"
import SpecificTraining from "../components/SpecificTraining.vue";
import PaymentsDetail from "../components/PaymentsDetail.vue"
import PersonalDetail from "../components/PersonalDetail.vue"
import PersonalMeasurement from "../components/PersonalMeasurement.vue"
import eventBus from "../../eventBus.js"


const user = ref(null)

function getData(){
    fetch('https://football-backend-dbpassword.up.railway.app/api/users/67995b06e7dfabaa2fa58189')
    .then(response => response.json())
    .then(data => {
        user.value = data
    })
}
onMounted(()=>{
    getData();
    eventBus.on("userData", getData);
})
</script>

<style scoped>
.image {
    padding: 2px;
    border: 1px solid gray;
    border-radius: 6px;
    height: 100px;
    width: 100px;
}
img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    border-radius: 6px;
}

.person {
    border: 1px solid gray;
    padding: 12px;
    border-radius: 12px;
    margin: 24px;
}
ol {
    padding:0;
    margin: 0;
}
li {
    margin-left: 24px;
}
.card {
    background: rgb(235, 235, 235);
    padding: 12px;
    margin: 12px 0;
    border-radius: 12px;
}
</style>