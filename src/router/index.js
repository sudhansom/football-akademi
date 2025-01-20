import HomePage from "../views/HomePage.vue"
import InformationPage from "../views/InformationPage.vue"
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/info',
            component: InformationPage
        }
    ]
})