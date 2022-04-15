//请求api，向服务器发请求

//state 存储数据的地方
import {reqAddOrUpdateShopCart, reqGoodsInfo} from "@/api";

const state = {
    goodInfo: {},
};

//mutations 修改state的唯一手段
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    },

};

//action 处理action
const actions = {
    //获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit("GETGOODINFO", result.data);
        }else alert('商品信息请求失败！')
    },
    async AddToShopCart(context,{skuId,skuNum}) {
        const result = await reqAddOrUpdateShopCart(skuId, skuNum)
        if(result.code == 200) return "it's ok"
        else return Promise.reject(new Error('fail'))

    }
};

//getters :理解为vuex的计算属性
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}