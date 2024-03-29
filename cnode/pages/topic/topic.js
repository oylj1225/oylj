// pages/topic/topic.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: 'https://cnodejs.org/api/v1',
    title:'',
    loginname:'',
    avatar_url:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;

    var that = this;
    wx.request({
      url: that.data.baseUrl + '/topic/'+id, //请求地址
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data);
        that.setData({
         title: res.data.data.title,
          avatar_url: res.data.data.author.avatar_url,
          loginname: res.data.data.author.loginname
        })
        var article = res.data.data.content;
        WxParse.wxParse('article', 'html', article, that, 5);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})