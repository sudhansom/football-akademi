<template>
  <div class="registration">
    <h3>Registration Form</h3>
    <form action="" @submit.prevent="submitForm">
        <label >First Name
            <input type="text" v-model="firstName">
        </label>
        <label >Last Name
            <input type="text" v-model="lastName">
        </label>
       <div class="age-type">
         <label class="age">Age
            <input type="number" v-model="age">
        </label>
         <label class="type">Role
            <select v-model="role">
                <option value="helper">Helper</option>
                <option value="player">Player</option>
            </select>
        </label>
       </div>
        <label >Address
            <input type="text" v-model="address">
        </label>
        <label >Phone
            <input type="text" v-model="phone">
        </label>
        <label >Parent's Name
            <input type="text" v-model="parentName">
        </label>
        <button>Submit</button>
    </form>
    <div class="login">
        <p>Already a user?</p>
        <router-link to="/login" class="link">
            Login
        </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const firstName = ref("")
const lastName = ref("")
const age = ref(0)
const email = ref("")
const address = ref("")
const phone = ref(null)
const parentName = ref("")
const role = ref("player")

function submitForm(){
    console.log(role.value)
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
input, select {
    padding: 6px;
    border: 1px solid gray;
    border-radius: 6px;
}
h3 {
    text-align: center;
    font-size: 28px;
}
.login {
    display:flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
}
.age-type {
    display: flex;
    justify-content: space-between;
    gap: 12px;
}
.age {
    max-width: 100px;
}
.type {
    flex-grow: 1;
}
.link {
    color: #646cff;
}
</style>