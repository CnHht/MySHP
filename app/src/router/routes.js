import Detail from "@/pages/Detail";
import Home from "@/pages/Home";

import Search from "@/pages/Search";
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Trade from "@/pages/Trade"
import Pay from "@/pages/Pay"

export default [
    {
        name: 'pay',  // 是当前路由的标识名称
        path: '/pay',
        component: Pay,
        meta: {isShowFooter: true},
    },
    {
        name: 'trade',  // 是当前路由的标识名称
        path: '/trade',
        component: Trade,
        meta: {isShowFooter: true},
    },
    {
        name: 'login',  // 是当前路由的标识名称
        path: '/login',
        component: Login,
        meta: {isShowFooter: true},
    },
    {
        name: 'register',  // 是当前路由的标识名称
        path: '/register',
        component: Register,
        meta: {isShowFooter: true},
    },
    {
        name: 'shopcart',  // 是当前路由的标识名称
        path: '/shopcart',
        component: ShopCart,
        meta: {isShowFooter: true},
    },
    {
        name: 'addcartsuccess',  // 是当前路由的标识名称
        path: '/addcartsuccess/',
        component: AddCartSuccess,
        meta: {isShowFooter: true},
    },
    {
        name: 'detail',  // 是当前路由的标识名称
        path: '/detail/:skuId',
        component: Detail,
    },
    {
        path: '/home',
        component: Home,
        meta: {isShowFooter: true},
    },
    {
        path: '/login',
        component: Login,
        meta: {isShowFooter: false},
    },
    {
        name: 'search',
        //指定params参数可以传递或者不传递
        path: '/search/:keyword?',
        component: Search,
        meta: {isShowFooter: true},
    },
    {
        path: '/register',
        component: Register,
        meta: {isShowFooter: false},
    },
    //路由重定向，项目启动时的页面的默认页面
    {
        path: '/',
        redirect: '/home'
    }
]