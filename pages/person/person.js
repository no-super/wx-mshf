// pages/personal/personal.js
import {
  reqUserInfo
} from '../../api/index'
Page({

  data: {
    userInfo: {}
  },
  goLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  onShow() {
    this.getUserInfo()
  },
  async getUserInfo() {
    try {
      const res = await reqUserInfo()
      this.setData({
        userInfo: res.data
      })
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '登录失败',
        icon: 'error'
      })
    }
  }

})