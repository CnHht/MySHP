//游客uuid模块函数
import {v4 as uuidv4} from 'uuid'

export const getUUID = () => {
    //生成一个随机字符串并不可多次生成
    let uuid_token = localStorage.getItem('UUID_TOKEN')
    //如果没有uuid便生成一个
    if (!uuid_token) {
        uuid_token = uuidv4();
        localStorage.setItem('UUID_TOKEN', uuid_token)
    }
    return uuid_token;
}