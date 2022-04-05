//当前模块：API进行统一管理
import requests from "@/api/request";



//三级联动的接口：/api/product/getBaseCategoryList
export const reqCategoryList = ()=>{
    //axios返回的对象结果是Promise对象
    return requests({url:'/product/getBaseCategoryList',methods:'get'})
}