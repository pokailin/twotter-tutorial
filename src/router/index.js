import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import { users } from "@/assets/users";
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
    let user = store.state.User.user;

    if (!user) {
        await store.dispatch('User/setUser', users[0]);
        user = store.state.User.user;
    }

    const isAdmin = user?.isAdmin ?? false;
    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

    if (requiresAdmin && !isAdmin) {
        next({ name: 'Home' });
    } else {
        next();
    }
})

export default router;