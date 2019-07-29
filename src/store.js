import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // token中取出的值
    user: auth.getUser()
  },
  mutations: {
    // 修改state中的值
    setUser (state, data) {
      state.user = data
      auth.setUser(state.user)
    }
  },
  actions: {

  }
})

export default store
