import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from '../src/router'
//注册全局组件三级联动组件（全局组件）
import typeNav from '../src/components/tpyeNav'

Vue.component(typeNav.name, typeNav)
//注册全局组件轮播图carousel
import Carousel from '../src/components/Carousel'

Vue.component(Carousel.name, Carousel)
//注册全局组件分页器
import Pagination from '../src/components/Pagination'

Vue.component(Pagination.name, Pagination)
//测试axios请求api
// import {reqCategoryList} from "@/api";
// reqCategoryList()
//注册vuex仓库
import store from '@/store'
//执行mockjs
//引入全部请求req 供全局使用 原理和全局事件总线
import * as API from '@/api'
import '../src/mock/mockServe'

//引入swiper样式，css
import "swiper/css/swiper.css"

//引入element样式组件库
import {Input, Button, Icon, MessageBox, Message, Table, TableColumn} from 'element-ui';

Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);
Vue.component(Table.name, Table);
Vue.use(TableColumn)
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;


//使用图片懒加载vue插件
import VueLazyload from 'vue-lazyload'
import defaultImg from '@/assets/1.gif'
Vue.use(VueLazyload,{
    //懒加载默认图片
    loading:defaultImg
})
new Vue({
    render: h => h(App),
    //注册路由组件
    router,
    //配置全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
        Vue.prototype.$API = API //原理和全局事件总线相似
    },
    store
}).$mount('#app')
