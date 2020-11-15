// pages/TaskInit/TaskInit.js
var api = require('../../utils/api');
var AllTaskCommon = api.getAllTaskCommon();

// 声明任务对象
var taskObj;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 评论集合
    commList: [],

    // 任务对象
    TskObj: {}


  },

  // 初始化数据
  Start(taskId){
    var that = this;

    // 传输任务对象
    that.setData({
      TskObj: taskObj
    })

    wx.request({
      url: AllTaskCommon,
      data: {
        task_id: taskId
      },
      success: res=>{
        console.log(res.data.data);
        that.setData({
          commList: res.data.data
        })
        
      }
    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载..',
    }).then(res=>{
      // 将接受到的参数解析编码并解析JSON字符串
      taskObj = JSON.parse(decodeURIComponent(options.obj));
      
    }).then(res=>{
      this.Start(taskObj.id);
      wx.hideLoading({ })
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