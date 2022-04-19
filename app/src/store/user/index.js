//state 存储数据的地方
import {reqGetRegisterCode, reqLoginUser, reqRegisterUser, reqUserInfo, reqUserLogout, reqUserRegister,} from "@/api";
import {getToken, removeToken, setToken} from "@/utils/token";

const state = {
    code:"",
    //持久化存储token
    token:getToken(),
    userData:{},
    userName:""
};

//mutations 修改state的唯一手段
const mutations = {
    GETUSERREGCODE(state,value){
        state.code = value
    },
    GETUSERTOKEN(state,value){
        state.token = value
    },
    GETUSERINFO(state,value){
        state.userData = value
    },
    //清除本地数据
    CLEARALL(state){
        state.token = "";
        state.userData = {};
        removeToken();
    },
    GETUSERNAME(state){
        state.userName = state.userData.name
    }

};

//action 处理action
const actions = {
    async GetUserGegCode(context,value){
        let result = await reqGetRegisterCode(value)
        if (result.code == 200) {
            context.commit('GETUSERREGCODE',result.data)
            return "ok"
        }
        else return Promise.reject(new Error('fail'))
    },
    async UserRegister({ commit }, user) {
        let result = await reqRegisterUser(user);
        if (result.code == 200) {
            console.log(result)
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    async UserLogin({ commit }, user) {
        let result = await reqLoginUser(user);
        if (result.code == 200) {
            commit('GETUSERTOKEN',result.data.token)
            setToken(result.data.token)
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    //获取用户信息
    async userInfo({commit}){
        let result = await reqUserInfo()
        if(result.code == 200){
            commit('GETUSERINFO',result.data)
            commit('GETUSERNAME')
            return "ok"
        }else return Promise.reject(new Error("faile"));
    },
    async UserLogOut({commit}){
        let result = await reqUserLogout()
        if(result.code == 200){
            commit('CLEARALL')
            return "ok"
        }else return Promise.reject(new Error("faile"));
    }
};

//getters :理解为vuex的计算属性
//getters主要的作用是简化数据而生
const getters = {


};

export default {
    state,
    mutations,
    actions,
    getters
}