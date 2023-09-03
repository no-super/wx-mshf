// 将所有封装请求接口函数统一管理
import request from '../utils/request'
// 封装轮播图接口函数
export const reqBanners = ()=>request({
  url:'/mall-api/index/findBanner'
})
// 分类接口函数
export const reqCategoryList = ()=>request({
  url:'/mall-api/index/findCategory1'
})

// 猜你喜欢
export const reqLikeList = ()=>request({
  url:'/mall-api/index/findListGoods'
})

// 分类接口函数
export const reqRecommendList = ()=>request({
  url:'/mall-api/index/findRecommendGoods'
})

// 1级分类接口函数
export const reqCategory1 = ()=>request({
  url:'/mall-api/index/findCategoryTree'
})

// 商品列表接口函数
export const reqGoodsPageList = (page,limit,options)=>request({
  url:`/mall-api/goods/list/${page}/${limit}`,
  data:options
})

// 获取token
export const reqToken = (code)=>request({
  url:`/mall-api/weixin/wxLogin/${code}`
})

// 用户信息
export const reqUserInfo = ()=>request({
  url:`/mall-api/weixin/getuserInfo`
})

// 添加到购物车
export const reqAddCart = (goodsId,count,blessing)=>request({
  url:`/mall-api/cart/addToCart/${goodsId}/${count}`,
  data:{
    blessing
  }
})

// 获取购物车列表
export const reqCartList = ()=>request({
  url:`/mall-api/cart/getCartList`
})

// 选中或取消某一商品
export const reqChangeCheck = (goodsId,isChecked)=>request({
  url:`/mall-api/cart/checkCart/${goodsId}/${isChecked}`
})

// 删除某一商品
export const reqDeleteOne = (goodsId)=>request({
  url:`/mall-api/cart/delete/${goodsId}`
})

// 全选或全不选
export const reqCheckAll = (isChecked)=>request({
  url:`/mall-api/cart/checkAllCart/${isChecked}`
})

// 获取商品详细
export const reqGoodsDetail = (goodsId)=>request({
  url:`/mall-api/goods/${goodsId}`
})

export const reqDetailByNow = (goodsId,blessing)=>request({
  url:`/mall-api/order/buy/${goodsId}`,
  data:{
    blessing
  }
})

export const reqAddressList = ()=>request({
  url:`/mall-api/userAddress/findUserAddress`
})
