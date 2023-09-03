// pages/cart/cart.js
import {
  reqCartList,
  reqChangeCheck,
  reqDeleteOne,
  reqCheckAll,
  reqAddCart
} from '../../api/index'
Page({
  data: {
    cartList: [],
    isAllCheck: false, // 全选的初始值
    totalPrice: 0, // 总价的初始值
    totalCount: 0, // 总选中数的初始值
  },
  onShow() {
    // 先做登录判断
    if (!wx.getStorageSync('token')) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } else {
      this.getCartList()
    }
  },
  // 获取购物车列表函数
  async getCartList() {
    try {
      const res = await reqCartList()
      this.setData({
        cartList: res.data
      })
      this.computeAllCheck()
      this.computePriceAndCount()
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '购物列表失败',
        icon: 'error'
      })
    }
  },

  // 修改单个商品的选中
  changeCheck(e) {
    // 获取到当前点击的商品id
    const goodsId = e.target.dataset.goodsid
    // 根据旧的选中状态，得到需要的状态
    const isChecked = e.target.dataset.ischecked ? 0 : 1

    this.getChangeCheck(goodsId, isChecked)
  },
  async getChangeCheck(goodsId, isChecked) {
    try {
      await reqChangeCheck(goodsId, isChecked)
      // 请求成功后，更新购物车列表
      this.getCartList()
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '修改选中失败',
        icon: 'error'
      })
    }
  },

  // 删除某个商品
  deleteOne(e) {
    const goodsId = e.target.dataset.goodsid
    this.getDeleteOne(goodsId)
  },
  async getDeleteOne(goodsId) {
    try {
      await reqDeleteOne(goodsId)
      // 删除更改后，重新获取购物车列表
      this.getCartList()
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '删除失败',
        icon: 'error'
      })
    }
  },

  // 计算出全选
  computeAllCheck() {
    const isAllCheck = this.data.cartList.every((item) => item.isChecked)
    this.setData({
      isAllCheck
    })
  },
  // 计算出总价与总数
  computePriceAndCount() {
    const {
      price,
      count
    } = this.data.cartList.reduce((pre, item) => {
      if (item.isChecked) {
        pre.price += item.price
        pre.count += item.count
      }
      return pre
    }, {
      price: 0,
      count: 0
    })
    this.setData({
      totalPrice: price,
      totalCount: count
    })
  },

  // 全选点击
  checkAllHandle() {
    const isChecked = this.data.isAllCheck ? 0 : 1
    this.getCheckAll(isChecked)
  },
  async getCheckAll(isChecked) {
    try {
      await reqCheckAll(isChecked)
      // 请求成功，重写获取购物车列表
      this.getCartList()
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '全选失败',
        icon:'error'
      })
    }
  },
  
  // 改变商品选择的数量
  changCount(e){
    const goodsId = e.target.dataset.goodsid
    const oldCount = e.target.dataset.count
    const newCount = e.detail * 1

    // 当输入的不是数字时，计算出来的结果是0
    const count = newCount - oldCount
    if(!count) return
    this.getAddCart(goodsId,count)
  },
  async getAddCart(goodsId,count){
    try {
      await reqAddCart(goodsId,count)
      this.getCartList()
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '修改数量失败',
        icon: 'error'
      })
    }
  }
})