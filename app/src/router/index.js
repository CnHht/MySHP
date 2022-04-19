//配置路由文件
import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "@/router/routes";
import store from "@/store"
import {removeToken} from "@/utils/token";
Vue.use(VueRouter);
//备份VueRouter的push方法
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
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
let router =  new VueRouter({
    //配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})
router.beforeEach(async (to, from, next)=>{
    let token = store.state.user.token
    let userInfo = store.state.user.userName
    console.log(userInfo)
    if(token ){
        if(to.path == '/login'){
            next('/')
        }
        else {
            if(userInfo){
                next()
            }else {
                //即每次刷新页面重新请求服务器
                //没有用户信息，重新向发请求 //async放在最近的函数
                try {
                   await store.dispatch('userInfo')
                    next()
                }catch (e) {
                    //拉取用户信息失败，token失效了
                    alert('用户身份信息过期，请重新登录！')
                    await store.dispatch('UserLogOut')
                    next('/login')
                }

            }
        }
    }else {
        next()
    }
})
export  default  router