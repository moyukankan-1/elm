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
//获取msite商铺列表
export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
  let supportStr = ''
  support_ids.forEach(item => {
    if(item.status) {
      supportStr += '&support_ids[]=' + item.id
    }
  })
  let data = {
    latitude,
    longitude,
    offset,
    limit: '20',
    restaurant_category_id,
    'restaurant_category_ids[]': restaurant_category_ids,
    order_by,
    'delivery_mode[]': delivery_mode + supportStr
  }
  return ajax('https://elm.cangdu.org/shopping/restaurants', data)
}
//获取search页面的搜索结果
export const searchRestaurant = (geohash,keyword) => ajax('https://elm.cangdu.org/v4/restaurants',{geohash, keyword,})
//获取food页面的 category 种类列表
export const foodCategory = (latitude,longitude) => ajax('https://elm.cangdu.org/shopping/v2/restaurant/category',{latitude,longitude})
//获取food页面的配送方式
export const foodDelivery = (latitude, longitude) => ajax('https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes',{latitude, longitude})
//获取food页面的商家属性活动列表
export const foodActivity = (latitude, longitude) => ajax('https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes',{latitude, longitude})
//获取shop页面商铺详情
export const shopDetails = (shopid, latitude, longitude) => ajax('https://elm.cangdu.org/shopping/restaurant/' + shopid,{latitude, longitude})
//获取shop页面菜单列表
export const foodMenu = restaurant_id => ajax('https://elm.cangdu.org/shopping/v2/menu',{restaurant_id})
//获取商铺评论列表
export const getRatingList = (shopid, offset, tag_name = '') => ajax('https://elm.cangdu.org/ugc/v2/restaurants/' + shopid + '/ratings',{has_content: true, offset, limit: 10, tag_name})
//获取商铺评价分数
export const ratingScores = shopid => ajax('https://elm.cangdu.org/ugc/v2/restaurants/' + shopid + '/ratings/scores',{})
//获取商铺评价分类
export const ratingTags = shopid => ajax('https://elm.cangdu.org/ugc/v2/restaurants/' + shopid + '/ratings/tags')


