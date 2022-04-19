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
    async DelShopCart(context, value) {
        const result = await reqDelShopCart(value)
        if (result.code == 200) return "it's ok"
        else return Promise.reject(new Error('fail'))
    },
    async UpdateCheck(context, {skuId, isChecked}) {
        const result = await reqCheckCart(skuId, isChecked)
        if (result.code == 200) return "it's ok"
        else return Promise.reject(new Error('fail'))
    },
    //删除全部勾选的产品
    DeleteAllCheckedCart(context) {
        //context:小仓库，commit【提交mutations修改state】 getters【计算属性】 dispatch【派发action】 state【当前仓库数据】
        //获取购物车中全部的产品（是一个数组）
        let promises = []
        context.getters.cartList.cartInfoList.forEach((item) => {
            let promise = item.isChecked == 1 ? context.dispatch('DelShopCart', item.skuId) : ''
            //将每一次返回的Promise添加到数组当中
            promises.push(promise)
        })
        //只要全部的p1|p2....都成功，返回结果即为成功
        //如果有一个失败，返回即为失败结果
        return Promise.all(promises)
    },
    UpdateCheckAll(context, value) {
        let promises = []
        context.state.CartList[0].cartInfoList.forEach((item) => {
            let promise = context.dispatch('UpdateCheck', {skuId: item.skuId, isChecked: value})
            promises.push(promise)
        })
        return Promise.all(promises)
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