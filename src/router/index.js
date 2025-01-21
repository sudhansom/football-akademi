import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "../views/HomePage.vue"
import InformationPage from "../views/InformationPage.vue"
import LoginPage from "../views/LoginPage.vue"
import RegistrationPage from "../views/RegistrationPage.vue"

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
        },
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/register',
            component: RegistrationPage
        }
    ]
})