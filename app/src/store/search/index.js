import {reqGetSearchInfo} from "@/api";
//state 存储数据的地方
const state = {
    searchList:{},
};

//mutations 修改state的唯一手段
const mutations = {
    GETSEARCHINFO(state,value){
        state.searchList = value
    }
};

//action 处理action
const actions = {
    //获取search模块数据
    async GetSearchInfo(context,value = {}){
         const result = await reqGetSearchInfo(value)
        if (result.code === 200) context.commit('GETSEARCHINFO',result.data)
        else alert(result)
    }
};

//getters :理解为vuex的计算属性
//getters主要的作用是简化数据而生
const getters = {
    goodsList(state){
        return state.searchList.goodsList || []
    },
    attrsList(state){
        return state.searchList.attrsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    }

};

export default {
    state,
    mutations,
    actions,
    getters
}