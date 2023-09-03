// pages/goods/detail/detail.js
import {reqGoodsDetail,reqAddCart} from '../../../api/index'
Page({
  data: {
    goodsId:0,
    goodsDetail:{},
    count:1,
    isShowDialog:false,
    isShowCount:false,
    blessing:''
  },
  onLoad(options) {
    // console.log(options);
    this.setData({
      goodsId: options.goodsId
    })
    this.getGoodDetail(this.data.goodsId)
  },
  async getGoodDetail(goodsId){
    try {
     const res = await reqGoodsDetail(goodsId)
     this.setData({
       goodsDetail:res.data
     })
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '获取详情失败',
        icon:'error'
      })
    }
  },
  cart(){
    this.showDialogAndCount(true,true)
  },
  buy(){
    this.showDialogAndCount(true,false)
  },
  onClose(){
    this.showDialogAndCount(false,false)
  },
  showDialogAndCount(isShowDialog,isShowCount){
    this.setData({
      isShowDialog,
      isShowCount
    })
  },
  test(){},
  confirmHandle(){
    // 点击确认时要先验证是否登录
    if (!wx.getStorageSync('token')) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    const {isShowCount,blessing} = this.data
    if(isShowCount){
      // 加入购物车
      this.getAddCart()
    }else{
      if(blessing){
        wx.navigateTo({
          url: `/pages/order/detail/detail?goodsId=${this.data.goodsId}&blessing=${this.data.blessing}`
        })
         // 关闭弹窗 清空祝福语
         this.setData({
          isShowDialog: false,
          blessing: ''
        })
      }else{
        wx.showToast({
          title: '祝福语不能为空',
          icon:'error'
        })
      }
    }
    
  },
  async getAddCart(){
    try {
      await reqAddCart(this.data.goodsId,this.data.count,this.data.blessing)
      // 关闭弹框清除数据
      this.setData({
        isShowDialog:false,
        blessing:'',
        count: 1
      })
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '加入购物车失败',
        icon:'error'
      })
    }
  },
  changeNum(e) {
    this.setData({
      count: e.detail * 1
    })
    // console.log(e.detail);
  }

})