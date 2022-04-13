//配置路由文件
import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "@/router/routes";
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
export default new VueRouter({
    //配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})