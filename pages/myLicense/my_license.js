// pages/myLicense/my_license.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    return {
      path: "/pages/about/about?a=1&b=2"
    }
  },
  chooseImage: function() {

    let self = this;

    wx.chooseImage({
      count: 1,
      sizeType: ["original"],
      success: function(res) {
        // console.log(wx.canIUse("chooseImage.success.tempFiles"));
        let filePath = res.tempFilePaths[0];
        if (filePath) {
          wx.uploadFile({
            url: 'http://upload.qiniu.com/',
            filePath: filePath,
            name: 'file',
            formData: {
              "key": "key_from_miniprogram",
              "x:id": "MyId",
              "token": "FBQj_xl-RpNrpPuEjBixOFVwBTA2UpioPNttVh5I:OAd2Ywp-Oj_FkpPo5-709nD01kw=:eyJzY29wZSI6IjIyYWdlbnQiLCJkZWFkbGluZSI6MTUxNDIwMzUwOCwicmV0dXJuQm9keSI6IntcImtleVwiOlwiJChrZXkpXCIsXCJoYXNoXCI6XCIkKGV0YWcpXCIsXCJmc2l6ZVwiOiQoZnNpemUpLFwiYnVja2V0XCI6XCIkKGJ1Y2tldClcIixcImlkXCI6XCIkKHg6aWQpXCJ9In0="
            },
            success: function(res) {
              if (res.statusCode === 200) {
                let qiniuResult = JSON.parse(res.data);
                if (qiniuResult) {
                  self.setData({
                    imageSrc: filePath
                  })
                }
              }
            }
          })
        }
      }
    });
  }
})