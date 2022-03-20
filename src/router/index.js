import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/HomeView.vue";
import UserProfileVue from "@/views/UserProfile.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeVue
    },
    {
        path: '/user/:userId',
        name: 'UserProfile',
        component: UserProfileVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;