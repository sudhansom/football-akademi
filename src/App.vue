<script setup>
import { ref } from 'vue'
import NavBar from "../src/components/NavBar.vue"
import TheFooter from "./components/TheFooter.vue"
import { useUserStore } from "./stores/UserStore"
import { useFetchData } from "./composables/useFetchData"

const { data, error, loading, load } = useFetchData()
const users = useUserStore();

const userId = ref(localStorage.getItem('userId'))
const token = ref(localStorage.getItem("token"));
if(userId.value){
  setUser();
}
async function setUser(){
  await load('/users/'+ userId.value)
  users.fillCurrentUser(data.value);
  users.setToken(token.value);
}

</script>

<template>
 <nav-bar />
<div class="mx-2">
  <router-view></router-view>
</div>
 <the-footer />
</template>

<style scoped>
.main-body {
  min-height: 90dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
