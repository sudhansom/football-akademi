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

const email = ref("")
const password = ref("")

const data = ref([])

function submitForm(){
    fetch(`http://localhost:3002/users`)
    .then(response => response.json())
    .then(data => {
        data = data;
        let res = data.find(a => a.email === email.value && a.password === password.value)
        console.log(res)
        if(res){
            console.log('Logged in')
        }else {
            alert('Wrong credentials')
        }
    })
}

</script>

<style scoped>
.registration {
    min-height: 85dvh;
    max-width: 300px;
    margin: auto;
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