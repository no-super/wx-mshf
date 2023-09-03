// pages/goods/list/list.js
import {reqGoodsPageList} from '../../../api/index'
Page({
  data: {
    goodsPageList:[], // 初始化商品列表
    page:1, // 初始化当前页为第一页
    limit:10, // 一页十条数据
    options:{}, // 初始化页面跳转时传递的参数
    status:'more' // 定义个状态，more,nomore,loading,error。只有more的时候才能发送请求
  },

  onLoad(options) {
    // 将获取的页面跳转参数保存在data中
    this.setData({
      options
    })
    // 调用封装的函数，获取商品列表
    this.getGoodsPagelist()
  },
  
  async getGoodsPagelist(){
    let {page,limit,options,goodsPageList} = this.data
    try {
      this.setData({
        status:'loading'
      })
      const res = await reqGoodsPageList(page,limit,options)
      // 根据res.data.rescords的长度来判断是否还能继续发送数据
      if(res.data.records.length > 0 ){
        if(res.data.records.length < 10){
          this.setData({
            status:'nomore'
          })
        }else{
          this.setData({
            status:'more'
          })
        }
        goodsPageList.push(...res.data.records)
      }else{
        this.setData({
          status:'nomore'
        })
      }
      this.setData({
        goodsPageList,
        page:++page
      })
    } catch (error) {
      this.setData({
        status:'error'
      })
      console.log(error);
      wx.showToast({
        title: '获取列表失败',
        icon:'error'
      })
    }
  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.status === 'more'){
      // 调用封装的函数，获取商品列表
      this.getGoodsPagelist()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})