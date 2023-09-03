// 暴露出一个request对象
const BASE_URL = 'https://gmall-prod.atguigu.cn'
export default function(arg){
  const token = wx.getStorageSync('token')
  const header = {}
  if(token){
    header.token = token
  }
  return new Promise((reslove,reject)=>{
    wx.showLoading({
      title: '正在加载中...',
    })
    wx.request({
      url: BASE_URL + arg.url,
      method:arg.method || 'GET',
      data:arg.data || {},
      header,
      success(res){
        reslove(res.data)
      },
      fail(error){
        reject(error)
      },
      complete(){
        wx.hideLoading()
      }
    })
  })
}