<template>
  <div class="registration">
    <h3>Login Page</h3>
    <form action="" @submit.prevent="submitForm">
        <label >Email
            <input type="text" v-model="email">
        </label>
        <label >Password
            <input type="password" v-model="password">
        </label>
        <button>Submit</button>
    </form>
    <div class="sign-up">
        <p>Need to Create new?</p>
        <router-link class="link" to="/register">
            Sign Up
        </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router';
import { useFetchData } from '../composables/useFetchData'
import axios from 'axios'

import { useUserStore } from "../stores/UserStore"

const users = useUserStore();

const { data, error, loading, load } = useFetchData()

const email = ref("ayoub@gmail.com")
const password = ref("password")

const router = useRouter();

async function submitForm(){
     await load(`/users/login/`, "POST",
        {
            email:email.value,
            password:password.value
        })
    if(data.value) {
        console.log(data.value.user)
        users.fillCurrentUser(data.value.user);
        users.setToken(data.value.token);
        localStorage.setItem('user', JSON.stringify(data.value.user));
        localStorage.setItem("userId", data.value.user.id);
        localStorage.setItem("userRole", data.value.user.role);
        localStorage.setItem('token', data.value.token)
        localStorage.setItem('schedule', JSON.stringify(data.value.user.schedule))
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.value.token}`;
        await users.fill();
        // router.push(`/info/detail/${data.value.result.id}`);
        router.push(`/`);
    }
}

</script>

<style scoped>
.registration {
    min-height: 76dvh;
    max-width: 350px;
    margin: 48px auto;
}
form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    border: 1px solid gray;
    border-radius: 12px;
    padding: 12px 24px;
    margin: 24px auto;
}
label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
}
input {
    padding: 6px;
    border-radius: 6px;
    border: 1px solid gray;
}
h3 {
    text-align: center;
    font-size: 28px;
}
.sign-up {
    display:flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
}
.link {
    color: #646cff;
}
</style>