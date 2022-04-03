import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from '../src/router'
new Vue({
  render: h => h(App),
  //注册路由组件
  router
}).$mount('#app')
