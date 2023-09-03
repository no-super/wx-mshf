// pages/order/result/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  /**
   * 返回首页
   */
  gotoHome() {
    // 注意跳转到tabBar页面注意事项
    wx.switchTab({
      url: '/pages/index/index',
    });
  },
});
