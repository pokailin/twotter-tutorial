import { createStore } from 'vuex';

export default createStore({
    state: {
        user: null
    },

    // Mutations change the state
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },

    // Actions call mutations
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    },

    modules: {

    },
})