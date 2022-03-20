import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import HomeVue from "@/views/HomeView.vue";
import UserProfileVue from "@/views/UserProfile.vue";
import AdminVue from "@/views/AdminView.vue";

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
    },
    {
        path: '/admin',
        name: 'AdminView',
        component: AdminVue,
        meta: {
            requiresAdmin: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    const user = store.state.user;

    const isAdmin = user?.isAdmin ?? false;
    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

    if (requiresAdmin && !isAdmin) {
        next({ name: 'Home' });
    } else {
        next();
    }
})

export default router;