import {
    RECORD_ADDRESS,
    RECORD_USERINFO,
    GET_USERINFO,
    SAVE_GEOHASH,
    SAVE_AVANDER,
    ADD_CART,
    REDUCE_CART
} from "./mutations-types";

import {setStore} from "../config/utils";

export default {
    //记录当前经纬度
    [RECORD_ADDRESS](state,{latitude,longitude}) {
        state.latitude = latitude
        state.longitude = longitude
    },

    //记录用户信息
    [RECORD_USERINFO](state,info) {
        state.userInfo = info
        state.login = true
        setStore('user_id', info.user_id)
    },
    //获取用户信息存入vuex
    [GET_USERINFO](state,info) {
        if(state.userInfo && (state.userInfo.username != info.username)) {
            return
        }
        if(!state.login) {
            return
        }
        if(!state.message) {
            state.userInfo = {...info}
        }else {
            state.userInfo = null
        }
    },
    //保存geohash
    [SAVE_GEOHASH](state,geohash) {
        state.geohash = geohash
    },
    //保存图片
    [SAVE_AVANDER](state,imgPath) {
        state.imgPath = imgPath
    },
    //加入购物车
    [ADD_CART](state, {}) {

    },
    //移除购物车
    [REDUCE_CART](state,{}) {

    }
}

