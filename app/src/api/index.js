//当前模块：API进行统一管理
import requests from "@/api/request";
import mockRequests from "@/api/mockRequest";


//三级联动的接口：/api/product/getBaseCategoryList
export const reqCategoryList = ()=>{
    //axios返回的对象结果是Promise对象
    return requests({url:'/product/getBaseCategoryList',methods:'get'})
}

//banner获取轮播图的接口 /mock/banner
export const reqGetBannerList = ()=>{
    return mockRequests.get('/banner')
}

//floor获取floor组件数据接口 /mock/floor
export const reqFloorList = ()=>{
    return mockRequests.get('/floor')
}

//search获取搜素模块的数据接口 /api/list
export const reqGetSearchInfo= (params)=>requests({
    url:"/list",
    method:"post",
    data:params
})