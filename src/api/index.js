import ajax from "./ajax";
import {getStore} from "../config/utils";
//获取用户信息
export const getUser = () => ajax('https://elm.cangdu.org/v1/user',{user_id: getStore('user_id')})
//获取首页默认地址
export const cityGuess = () => ajax('https://elm.cangdu.org/v1/cities',{type: 'guess'})
//获取热门城市
export const hotcity = () => ajax('https://elm.cangdu.org/v1/cities',{type: 'hot'})
//获取所以城市列表
export const groupcity = () => ajax('https://elm.cangdu.org/v1/cities',{type: 'group'})
//获取图片验证码
export const getcaptchas = () => ajax('https://elm.cangdu.org/v1/captchas',{},'POST')
//账号密码登录
export const accountLogin = (username,password,captcha_code) => ajax('https://elm.cangdu.org/v2/login',{username, password, captcha_code},'POST')
//重置密码
export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captcha_code) => ajax('https://elm.cangdu.org/v2/changepassword',{username, oldpassWord, newpassword, confirmpassword, captcha_code},'POST')
//获取当前所在城市
export const currentcity = number => ajax('https://elm.cangdu.org/v1/cities/' + number)
//获取搜索地址
export const searchplace = (cityid,value) => ajax('https://elm.cangdu.org/v1/pois',{type: 'search', city_id: cityid, keyword: value})
//获取msite页面食品分类列表
export const msiteFoodTypes = () => ajax('https://elm.cangdu.org/v2/index_entry',{})
//获取msite页面的地址信息
export const msiteAddress = geohash => ajax('https://elm.cangdu.org/v2/pois/' + geohash)

