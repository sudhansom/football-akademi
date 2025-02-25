<template>
  <div class="registration relative">
    <h3>Registration Form</h3>
    <form action="" @submit.prevent="submitForm">
        <label >Name
            <input type="text" v-model="name">
        </label>
        <label >Email
            <input type="email" v-model="email">
        </label>
        <div v-if="imagePreview" class="shadow-md rounded-md overflow-hidden">
            <img :src="imagePreview" alt="" class="block">
        </div>
        <button type="button" @click="openFilePicker">{{ image? 'Change Image' : 'Pick image' }}</button>
        <input type="file" ref="fileInput" @change="handleFileChange" class="hidden">
       <div class="age-type">
         <label class="age">Birth Date
            <input type="date" v-model="dob">
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
        <label >Password
            <input type="password" v-model="password">
        </label>
        <label >Confirm Password
            <input type="confirmPassword" v-model="confirmPassword">
        </label>
        <button>Submit</button>
    </form>
    <div v-if="loading">
        <loading-spinner></loading-spinner>
    </div>
    <div class="my-3 flex gap-4">
        <p>Already a user?</p>
        <router-link to="/login" class="link">
            Login
        </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { useRouter } from 'vue-router';
import { useFetchData } from '../composables/useFetchData'

const router = useRouter();
const { data, error, loading, load } = useFetchData();
const name = ref("")
const dob = ref(null)
const email = ref("")
const address = ref("")
const phone = ref(null)
const parentName = ref("")
const role = ref("player")
const fileInput = ref(null);
const image = ref(null);
const password = ref("")
const confirmPassword = ref("")

const imagePreview = ref(null);



async function submitForm(){
    loading.value = true;
    const form = new FormData();
    form.append("name", name.value);
    form.append("dob", dob.value);
    form.append("email", email.value);
    form.append("address", address.value);
    form.append("role", role.value);
    form.append("parentName", parentName.value);
    form.append("password", password.value);
    form.append("image", image.value, name.value);


    // Submit the form data to the server
    //   http://localhost:5000/api/users/
    // https://football-backend-dbpassword.up.railway.app/api/users
    try{
        console.log(form);
        await load("/users/", "POST", form)

    }catch(err){
        console.log('Not added from frontend...',err)
    }
    
    router.push('/login')

}

// Function to trigger the file input click event
function openFilePicker() {
  fileInput.value.click();
}

// Function to handle file selection
function handleFileChange(event) {
  const file = event.target.files[0];
  image.value = file;
  if (file) {
    console.log('Selected file:', file);
    // Handle the file (e.g., upload, preview, etc.)
    const reader = new FileReader();
    reader.onload = ()=>{
        imagePreview.value = reader.result;
    }
    reader.readAsDataURL(file);
  }
}
</script>

<style scoped>
.registration {
    min-height: 85dvh;
    max-width: 500px;
    margin: 24px auto;
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
    max-width: 120px;
    flex-grow: 1;
}
/* .type {
    flex-grow: 1;
} */
.link {
    color: #646cff;
}
</style>