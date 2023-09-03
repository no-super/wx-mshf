// pages/category/category.js
import {reqCategory1} from '../../api/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category1List:[], // 初始化分类树列表数组
    currentIndex:0, // 记录当前的选中的一级目录的下标
    currentTree:{} // 存储当前选中的一级目录对应的数据对象
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getcategory1List()
  },
  async getcategory1List(){
    try {
      const res = await reqCategory1()
      this.setData({
        category1List:res.data,
        currentTree:res.data[0]
      })
    } catch (error) {
      console.log(error);
      wx.showToast({
        title: '一级分类失败',
        icon:'error'
      })
    }
  },
  // 一级分类的点击事件
  selectTree(e){
    // 收集通过自定义属性传递的当前下标
    const index = e.target.dataset.index
    // 将data中定义的一级下标改为当前下标
    // 将data中定义的一级分类对象改为当前对象
    this.setData({
      currentIndex:index,
      currentTree:this.data.category1List[index]
    })
  },


  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})