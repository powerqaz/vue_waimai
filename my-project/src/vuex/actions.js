import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'



export default {
  //地址
  async getAddress({commit,state}){
const {longitude,latitude} =state
    const result= await reqAddress(longitude,latitude)
    if(result.code===0){
  const address=result.data
      commit(RECEIVE_ADDRESS,address)
    }
  },//分类
  async getCategorys({commit}){
    const {longitude,latitude} =state
    const result= await reqCategorys()
    if(result.code===0){
      const categorys=result.data
      commit(RECEIVE_CATEGORYS,categorys)
    }
  },
  //商家
  async getShops({commit,state}){
    const {longitude,latitude} =state
    const result= await reqShops(longitude,latitude)
    if(result.code===0){
      const shops=result.data
      commit(RECEIVE_SHOPS,shops)
    }
  },
}
