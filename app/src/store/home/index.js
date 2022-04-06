//请求api，向服务器发请求

import {reqCategoryList} from "@/api";
//state 存储数据的地方

const state = {
    categoryList:[],
};

//mutations 修改state的唯一手段
const mutations = {
    CATEGORYLIST(state,value){
        state.categoryList = value
    },
};

//action 处理action
const actions = {
    //async/await 是ES7提出的基于Promise的解决异步的最终方案。
    //reqCategoryList返回的是一个Promise对象
    async categoryList(context){
        let result = await reqCategoryList();
        if(result.code === 200){
            context.commit("CATEGORYLIST",result.data)
        }else {
            alert('三级联动数据请求失败！')
        }
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