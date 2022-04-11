import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import router from '../src/router'
//注册全局组件三级联动组件（全局组件）
import typeNav from '../src/components/tpyeNav'
Vue.component(typeNav.name,typeNav)
//注册全局组件轮播图carousel
import Carousel from '../src/components/Carousel'
Vue.component(Carousel.name,Carousel)
//测试axios请求api
// import {reqCategoryList} from "@/api";
// reqCategoryList()
//注册vuex仓库
import store from '@/store'
//执行mockjs

import '../src/mock/mockServe'

//引入swiper样式，css
import "swiper/css/swiper.css"

new Vue({
  render: h => h(App),
  //注册路由组件
  router,
  //配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
  },
  store
}).$mount('#app')
