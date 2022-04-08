//当前模块：API进行统一管理
import requests from "@/api/request";
import mockRequests from "@/api/mockRequest";


//三级联动的接口：/api/product/getBaseCategoryList
export const reqCategoryList = ()=>{
    //axios返回的对象结果是Promise对象
    return requests({url:'/product/getBaseCategoryList',methods:'get'})
}

//banner获取轮播图的接口
export const reqGetBannerList = ()=>{
    return mockRequests.get('/banner')
}