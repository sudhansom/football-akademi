<template>
  <h2 class="font-bold text-2xl text-center mb-2">{{info ?? 'General Information'}}</h2>
  <our-events :id="userId" :sameUser="route.params.id ? true: false " />
  <hr class="m-3 text-gray-200">
  <our-prices :id="userId" :sameUser="route.params.id ? true: false "></our-prices>
  <hr v-if="userId && !info" class="m-3 text-gray-200">
  <feed-back v-if="userId && !info" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import OurEvents from "../components/OurEvents.vue"
import OurPrices from '../components/OurPrices.vue'
import FeedBack from '../components/FeedBack.vue'
import { useRoute } from 'vue-router';
import { useUserStore } from "../stores/UserStore"
import { useFetchData } from "../composables/useFetchData"
import FeedBackVue from '../components/FeedBack.vue'

defineProps({
  info: String,
})

const route = useRoute();
const users = useUserStore();

const { data, error, loading, load } = useFetchData()


const userId = ref(route.params.id || localStorage.getItem("userId"))

onMounted(()=>{
  fillData();
})
async function fillData(){
  await load('users/'+ userId.value)
  if(route.params.id){
    users.fillCurrentUser(data.value)
  }else{
    users.fillSelectedUser(data.value)
  }
}

</script>

<style scoped>
</style>