import Vue from "vue"
import VueRouter from "vue-router"


const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../pages/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../pages/msite/msite')), 'msite')
const search = r => require.ensure([], () => r(require('../pages/search/search')), 'search')
const shop = r => require.ensure([], () => r(require('../pages/shop/shop')), 'shop')
const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login')
const profile = r => require.ensure([], () => r(require('../pages/profile/profile')), 'profile')
const forget = r => require.ensure([], () => r(require('../pages/forget/forget')), 'forget')
const order = r => require.ensure([], () => r(require('../pages/order/order')), 'order')
const food = r => require.ensure([], () => r(require('../pages/food/food')), 'food')

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: home
    },
    {
      path: "/login",
      component: login
    },
    {
      path: "/forget",
      component: forget
    },
    {
      path: "/city/:cityid",
      component: city
    },
    {
      path: "/msite",
      component: msite,
      meta: {keepAlive: true}
    },
    {
      path: "/search/:geohash",
      component: search
    },
    {
      path: "/order",
      component: order
    },
    {
      path: "/profile",
      component: profile
    },
    {
      path: "/food",
      component: food
    },
    {
      path: "/shop",
      component: shop
    }

  ],
  mode: "history"
})