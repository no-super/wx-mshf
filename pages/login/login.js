// pages/login/login.js
import {reqToken} from '../../api/index'
Page({
  data: {
    
  },
  getUserProfile(){
    wx.login({
      success: (res) => {
        // console.log(res)
        this.getToken(res.code)
      },
    })
  },
  async getToken(code){
    try {
      const res = await reqToken(code)
      console.log(res);
      wx.setStorageSync('token', res.data.token)
      wx.navigateBack()
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '获取登录授权失败',
        icon:'error'
      })
    }
  }
})