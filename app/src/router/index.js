//配置路由文件
import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);
//备份VueRouter的push方法
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
//重写push方法实现消除多次push报错的问题
//参数一：跳转的位置
//参数二：函数调用成功的回调
//参数三：函数调用失败的回调

VueRouter.prototype.push = function (location,resolve,reject) {
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else {
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = ( function (location,resolve,reject) {
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else {
        originReplace.call(this,location,()=>{},()=>{})
    }
})
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