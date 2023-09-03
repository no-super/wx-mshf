import {showToast} from '../../../utils/tips';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyName: '', // 购买人名称
    buyPhone: null, // 购买人手机号
    deliveryDate: '请选择配送时间', // 期望送达日期
    remarks: '', // 客户备注
    totoalPrice: '', // 总价
    cartList: [], // 购物车列表
    isShowPopup: false, // 日期选项卡显示与隐藏
    minDate: new Date().getTime(), // 可选最小时间格式
    currentDate: new Date().getTime(), // 当期时间
  },



  handleShowPopup(){
    this.setData({
      isShowPopup: true
    })
  },

  
  /**
   * 点击日期timepicker取消按钮
   */
  hanleCancelTimePicker(){
    this.setData({
      isShowPopup: false
    })
  },
  /**
   * 关闭日期选项卡
   * 
   */

  onClose(){
    this.setData({
      isShowPopup: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

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