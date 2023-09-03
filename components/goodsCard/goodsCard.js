// components/goodsCard/goodsCard.js
import {reqAddCart} from  '../../api/index'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type:Object,
      value:{}
    }
  },

  data: {

  },

  methods: {
    addCart(e){
      const goodsId = e.target.dataset.id
      this.getAddCart(goodsId,1)
    },
    async getAddCart(goodsId,count){
      try {
        await reqAddCart(goodsId,count)
        wx.showToast({
          title: '添加成功',
          icon:'success'
        })
      } catch (error) {
        console.log(error);
        wx.showToast({
          title: '添加失败',
          icon:'error'
        })
      }
    }
  }
})
