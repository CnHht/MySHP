import Detail from "@/pages/Detail";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import AddCartSuccess from "@/pages/AddCartSuccess"
export default [
    {
        name: 'addcartsuccess',  // 是当前路由的标识名称
        path: '/addcartsuccess/',
        component: AddCartSuccess,
        meta:{isShowFooter:true},
    },
    {
        name: 'detail',  // 是当前路由的标识名称
        path: '/detail/:skuId',
        component: Detail,
    },
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