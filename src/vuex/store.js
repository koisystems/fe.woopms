import Vue from 'vue'
import Vuex from 'vuex'
import axios from  'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        SET_USER_DATA (state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
        },
        LOGOUT () {
            localStorage.removeItem('user')
            location.reload()
        }

    },
    actions: {
        login ({ commit }, credentials) {
            return axios
                .post('//localhost:8001/api/v1/auth/login', credentials)
                .then(({ data }) => {
                    commit('SET_USER_DATA', data)
                })
        },
        logout ({ commit }) {
            commit('LOGOUT')
        }
    },
    getters: {
        loggedIn (state) {
            return !!state.user
        }
    }
})
