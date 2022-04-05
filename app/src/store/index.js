import Vue from 'vue';
import Vuex from 'vuex'
//需要使用插件一次
Vue.use(Vuex);
//引入小仓库，home search等
import home from './home'
import search from './search'
export default new Vuex.Store({
    modules:{
        home,
        search
    }
})