import { createStore } from 'vuex';
import { UserModule } from './User';

export default createStore({
    state: {
    },

    // Mutations change the state
    mutations: {
    },

    // Actions call mutations
    actions: {
    },

    modules: {
        User: UserModule
    },
})