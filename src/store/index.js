import vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

vue.use(Vuex)

const state = {
    latitude: '', //当前位置纬度
    longitude: '', //当前位置经度
    userInfo: null, //用户信息
    geohash: '31.22299,121.36025',//地址geohash值
    imgPath: null,  //头像地址,
    cartList: {}   //加入购物车的商品列表
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})