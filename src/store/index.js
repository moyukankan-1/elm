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
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})