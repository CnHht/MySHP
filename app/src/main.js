import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from '../src/router'
//注册三级联动组件（全局组件）
import typeNav from '../src/components/tpyeNav'
Vue.component(typeNav.name,typeNav)
//测试axios请求api
// import {reqCategoryList} from "@/api";
// reqCategoryList()
//注册vuex仓库
import store from '@/store'
//执行mockjs

import '../src/mock/mockServe'

new Vue({
  render: h => h(App),
  //注册路由组件
  router,
  store
}).$mount('#app')
