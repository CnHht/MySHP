//当前模块：API进行统一管理
import requests from "@/api/request";
import mockRequests from "@/api/mockRequest";


//三级联动的接口：/api/product/getBaseCategoryList
export const reqCategoryList = () => {
    //axios返回的对象结果是Promise对象
    return requests({url: '/product/getBaseCategoryList', method: 'get'})
}

//banner获取轮播图的接口 /mock/banner
export const reqGetBannerList = () => {
    return mockRequests.get('/banner')
}

//floor获取floor组件数据接口 /mock/floor
export const reqFloorList = () => {
    return mockRequests.get('/floor')
}

//search获取搜素模块的数据接口 /api/list
export const reqGetSearchInfo = (params) => requests(
    {url: "/list", method: "post", data: params}
);

//获取商品详细信息的接口 /api/item/{ skuId }
export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`, method: "get"
});
//添加商品到购物车的接口 /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post"
})
//获取购物车列表接口 /api/cart/cartList
export const reqGetShopCartList = () => requests({
    url: '/cart/cartList',
    method: "get"
})
//删除购物车的接口 /api/cart/deleteCart/{skuId}
export const reqDelShopCart = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
})
//切换商品选择状态的接口 /api/cart/checkCart/{skuID}/{isChecked}
export const reqCheckCart = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
})
//获取注册验证码的接口 /api/user/passport/sendCode/{phone}
export const reqGetRegisterCode = (phone) => requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
})
//用户注册接口 /api/user/passport/register
export const reqRegisterUser = (data) => requests({
    url: '/user/passport/register',
    data,
    method: 'post'
})

//用户登录接口 /api/user/passport/login
export const reqLoginUser = (data) => requests({
    url: '/user/passport/login',
    data,
    method: 'post'
})

//通过用户token获取用户信息 http://182.92.128.115/api/user/passport/auth/getUserInfo
export const reqUserInfo = () => requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
})

//获取用户退出的接口 /api/user/passport/logout
export const reqUserLogout = () => requests({
    url: '/user/passport/logout',
    method: 'get'
})

//获取用户信息的接口 /api/user/userAddress/auth/findUserAddressList
export const reqAddressInfo = () => requests({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get'
})
//获取用户商品清单 /api/order/auth/trade
export const reqOrderInfo = () => requests({
    url: '/order/auth/trade',
    method: 'get'
})

//提交订单的接口 /api/order/auth/submitOrder?tradeNo={tradeNo}
//第二个参数data是要传递的数据，可以是对象{}
export const reqSubmitOrder = (tradeNo, data) => requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: 'post'
})
//获取支付信息
//URL:/api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});

//获取订单详细信息 /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) => requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'get'
})

//获取我的订单列表 /api/order/auth/{page}/{limit}
export const reqCenterOrder = (page, limit) => requests({
    url: `/order/auth/${page}/${limit}`,
    method: 'get'
})
