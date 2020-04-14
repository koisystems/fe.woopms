import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './vuex/store.js'
import axios from 'axios'
import '@/assets/css/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem('user')
    if(userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)

      axios.interceptors.response.use(
          response => response,
          error => {
            if( error.response.status === 401 ) {
              this.$store.dispatch('logout')
            }
            return Promise.reject(error)
          }
      )
    }
  },
  render: h => h(App),
}).$mount('#app')
