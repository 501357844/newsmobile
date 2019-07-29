import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Vant from 'vant'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import 'amfe-flexible/index.min.js'
import 'vant/lib/index.css'

Vue.use(Vuex)
Vue.use(Vant)
Vue.use(VeeValidate)
Validator.localize('zh_CN', zh_CN)

Validator.extend('mobile', {
  getMessage: field => '请输入正确的手机号',
  validate: value => value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
