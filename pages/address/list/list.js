import {reqAddressList} from '../../../api/index'
Page({

  data: {
    addressList:[]
  },
  onShow() {
    this.getAddressLsit()
  },
  async getAddressLsit(){
    try {
     const res =  await reqAddressList()
     this.setData({
       addressList:res.data
     })
    } catch (error) {
      
    }
  }
})