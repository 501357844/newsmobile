import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Vant from 'vant'
import router from './router'
import 'amfe-flexible/index.min.js'
import 'vant/lib/index.css'
// import store from './store'

Vue.use(Vuex)
Vue.use(Vant)
const store = new Vuex.Store({
  // 声明数据
  state: {

  },
  mutations: {

  },
  actions: {

  }

})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
