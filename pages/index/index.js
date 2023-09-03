// pages/index/index.js
import {reqBanners,reqCategoryList,reqLikeList,reqRecommendList} from '../../api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    categoryList:[],
    likeList:[],
    recommendList:[]
  },

  onLoad(options) {
    this.getBanners(),
    this.getCategoryList(),
    this.getLikeList(),
    this.getRecommendList()
  },
  async getBanners(){
    try {
      const res = await reqBanners()
      this.setData({
        banners:res.data
      })
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '获取轮播图失败',
        icon:'error'
      })
    }
  },
  async getCategoryList(){
    try {
      const res = await reqCategoryList()
      this.setData({
        categoryList:res.data
      })
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '获取分类失败',
        icon:'error'
      })
    }
  },
  async getLikeList(){
    try {
      const res = await reqLikeList()
      this.setData({
        likeList:res.data
      })
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '获取猜你喜欢失败',
        icon:'error'
      })
    }
  },
  async getRecommendList(){
    try {
      const res = await reqRecommendList()
      this.setData({
        recommendList:res.data
      })
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '获取人气推荐失败',
        icon:'error'
      })
    }
  },


  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})