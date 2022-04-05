import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from '../src/router'
//注册三级联动组件（全局组件）
import typeNav from '../src/pages/Home/tpyeNav'
Vue.component(typeNav.name,typeNav)
import {reqCategoryList} from "@/api";
reqCategoryList()
new Vue({
  render: h => h(App),
  //注册路由组件
  router,
}).$mount('#app')
