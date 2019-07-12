//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    baseUrl:'https://cnodejs.org/api/v1',
    data:""
  },
    onLoad: function () {
      var that = this;
      wx.request({
        url: that.data.baseUrl+'/topics?tab=all&&limit=100', //请求地址
        data: {
        
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          // console.log(res.data.data);
          that.setData({
            data:res.data.data
          })
        }
      })
  }
})
