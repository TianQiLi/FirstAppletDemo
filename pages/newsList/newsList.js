Page({

  /**
   * 页面的初始数据
   */
  data: {
    "newTitle":"最近基金大涨啊",
    "newsContent": "从今年九月底开始进入基金大涨阶段，截止到双十一后涨幅出现回落, 你怎么看待今年媒体吹      捧的慢牛呢" ,
    "newsCount":20,
    "newsDate":"2017-11-20"
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newsListArray = [
          {
                "newTitle": "最近基金大涨啊",
                "newsContent": "从今年九月底开始进入基金大涨阶段，截止到双十一后涨幅出现回落, 你怎么                                 看待今年媒体吹捧的慢牛呢",
                "newsCount": 20,
                "newsDate": "2017-11-20"
          },
          {
            "newTitle": "A股不停波动",
            "newsContent": "不错哦，a股大涨了额，港深股也不错",
            "newsCount": 20,
            "newsDate": "2017-10-10",
          },{
            "newTitle": "B股波动",
            "newsContent": "b股大涨了额，港深股也不错",
            "newsCount": 10,
            "newsDate": "2017-09-10",

          }, {
            "newTitle": "B股波动",
            "newsContent": "b股大涨了额，港深股也不错",
            "newsCount": 10,
            "newsDate": "2017-09-10",
          }

    ]
    this.setData({ "newsList_key": newsListArray});

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