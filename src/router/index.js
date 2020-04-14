import Vue from "vue"
import VueRouter from "vue-router"

const home = () => import("../pages/home/home")
const login = () => import("../pages/login/login")
const forget = () => import("../pages/forget/forget")
const city = () => import("../pages/city/city")
const msite = () => import("../pages/msite/msite")
const search = () => import("../pages/search/search")
const order = () => import("../pages/order/order")
const profile = () => import("../pages/profile/profile")
const food = () => import("../pages/food/food")

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
    }
  ],
  mode: "history"
})