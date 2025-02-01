import { createRouter, createWebHistory } from 'vue-router'

import HomePage from "../views/HomePage.vue"
import InformationPage from "../views/InformationPage.vue"
import LoginPage from "../views/LoginPage.vue"
import RegistrationPage from "../views/RegistrationPage.vue"
import AllPlayers from "../views/AllPlayers.vue"
import GeneralInfo from "../views/GeneralInfo.vue"
import PlayersDetail from "../views/PlayersDetail.vue"
import ImportantMessage from "../views/ImportantMessage.vue"

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/info',
        component: InformationPage,
        children: [
            {
                path: '',
                component: GeneralInfo
            },
            {
                path: 'all-players',
                component: AllPlayers
            },
            {
                path: 'important-message',
                component: ImportantMessage
            },
            {
                path: 'detail/:id',
                component: PlayersDetail
            },
        ]
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

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})