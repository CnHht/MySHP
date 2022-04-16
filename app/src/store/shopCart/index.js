//state 存储数据的地方
import {reqCheckCart, reqDelShopCart, reqGetShopCartList} from "@/api";

const state = {
    CartList: {},
};

//mutations 修改state的唯一手段
const mutations = {
    GETSHOPCARTLIST(state, value) {
        state.CartList = value
    }
};

//action 处理action
const actions = {
    //获取search模块数据
    async GetShopCartList(context) {
        const result = await reqGetShopCartList()
        if (result.code == 200) context.commit('GETSHOPCARTLIST', result.data)
        else alert(result)
    },
    async DelShopCart(context,value){
        const result = await reqDelShopCart(value)
        if (result.code == 200) return "it's ok"
        else return Promise.reject(new Error('fail'))
    },
    async UpdateCheck(context,{skuId,isChecked}){
        const result = await reqCheckCart(skuId,isChecked)
        if (result.code == 200) return "it's ok"
        else return Promise.reject(new Error('fail'))
    }
};

//getters :理解为vuex的计算属性
//getters主要的作用是简化数据而生
const getters = {
    cartList(state) {
        return state.CartList[0] || {}
    },

};

export default {
    state,
    mutations,
    actions,
    getters
}