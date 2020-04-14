/*
通过mutations间接更新state的多个方法的对象
* */
import {
  GET_USERINFO
} from "./mutations-types";
import {
  getUser
} from "../api";

export default{
  async getUserInfo({commit}) {
    let res = await getUser()
    commit(GET_USERINFO,res)
  }
}