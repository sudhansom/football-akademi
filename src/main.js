import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import { router } from './router'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const pinia = createPinia()
const app = createApp(App)

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      router.push({ path: '/login' })
    }

    return Promise.reject(error)
  }
)

app.use(VueAxios, axios)
app.use(router)
app.use(pinia)
app.mount('#app')
