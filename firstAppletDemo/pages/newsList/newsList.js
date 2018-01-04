//引用其他文件只能用相对路径
var postData = require("../../data/post-data.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "newTitle": "最近基金大涨啊"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //alt+shift +f 可以格式化代码
    // var newsListArray = [
    //   {
    //     "newTitle": "最近基金大涨啊",
    //     "newsContent": "从今年九月底开始进入基金大涨阶段，截止到双十一后涨幅出现回落!
    //     "newsCount": 20,
    //     "newsDate": "2017-11-20"
    //   }
    // ]
    // // this.setData({ "newsList_key": newsListArray });
    this.setData({ "newsList_key": postData.postList })
    // this.data.newsList_key = postData.postList
  },
  newCellClickEvent: function (event) {
    //注意这里的对象key 是小写
    var postTitle = event.currentTarget.dataset.postid
    console.log("newCellClickEvent")
    console.log(postTitle)
    wx.navigateTo({
      url: "../newsListDetail/newsListDetail"
      


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