//请求api，向服务器发请求

import {reqCategoryList} from "@/api";
//state 存储数据的地方
import {reqGetBannerList} from "@/api";

import {reqFloorList} from "@/api";

const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
};

//mutations 修改state的唯一手段
const mutations = {
    CATEGORYLIST(state,value){
        state.categoryList = value
    },
    GETBANNERLIST(state,value){
        state.bannerList = value
    },
    GETFLOORLIST(state,value){
        state.floorList = value
    }
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
    },
    //获取首页轮播图的数据
    async getBannerList(context){
        let result = await reqGetBannerList()
        if(result.code === 200){
            context.commit("GETBANNERLIST",result.data)
        }else {
            alert('三级联动数据请求失败！')
        }
    },
    //获取首页floor的数据
    async getFloorList(context){
        let result = await reqFloorList()
        if(result.code === 200){
            context.commit("GETFLOORLIST",result.data)
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