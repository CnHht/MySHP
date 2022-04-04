//配置路由文件
import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{isShowFooter:true},
        },
        {
            path:'/login',
            component:Login,
            meta:{isShowFooter:false},
        },
        {
            name:'search',
            //指定params参数可以传递或者不传递
            path:'/search/:keyword?',
            component:Search,
            meta:{isShowFooter:true},
        },
        {
            path:'/register',
            component:Register,
            meta:{isShowFooter:false},
        },
        //路由重定向，项目启动时的页面的默认页面
        {
            path:'/',
            redirect:'/home'
        }
    ]
})