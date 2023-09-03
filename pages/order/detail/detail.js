// pages/order/detail/detail.js
import {reqDetailByNow} from '../../../api/index'
import moment from 'moment'
Page({
  data: {
    goodsId:0,
    blessing:'',
    totalAmount:0,
    cartVoList:[],
    isShowDate:false,
    minDate:Date.now(),
    arriveDate:''
  },
  onLoad(options) {
    this.setData({
      goodsId:options.goodsId,
      blessing:options.blessing
    })
    // 根据是否存在blessing区分哪种进入方式
    if(this.data.blessing){
      // 从商品详细内进入的
      this.getDetailByNow()
    }else{
      // 从商品购物车进入
    }
  },
  async getDetailByNow(){
    try {
     const res = await reqDetailByNow(this.data.goodsId,this.data.blessing)
    //  console.log(res);
    this.setData({
      cartVoList:res.data.cartVoList,
      totalAmount:res.data.totalAmount
    })
    } catch (error) {
      
    }
  },
  handleShowPopup(){
    this.setData({
      isShowDate:true
    })
  },
  cancel(){
    this.setData({
      isShowDate:false
    })
  },
  confirm(e){
    this.setData({
      arriveDate:moment(e.detail).format('YYYY/MM/DD'),
      isShowDate:false
    })
  }
})