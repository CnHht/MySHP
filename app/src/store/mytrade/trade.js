//请求api，向服务器发请求

import {reqAddressInfo, reqOrderInfo} from "@/api";

const state = {
    addressInfo:[],
    orderInfo:{}
};

//mutations 修改state的唯一手段
const mutations = {
    GETUSERADDRESS(state,value){
        state.addressInfo = value
    },
    GETORDERINFO(state,value){
        state.orderInfo = value
    }

};

//action 处理action
const actions = {
    async GetUserAddress({commit}){
        let result = await reqAddressInfo()
        if(result.code == 200){
            commit('GETUSERADDRESS',result.data)
            return 'ok'
        }else return Promise.reject(new Error('fail'))
    },
    async GetOrderInfo({commit}){
       let result = await reqOrderInfo()
        if(result.code == 200){
            commit('GETORDERINFO',result.data)
            return 'ok'
        }else return Promise.reject(new Error('fail'))
    }

};

//getters :理解为vuex的计算属性
const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}