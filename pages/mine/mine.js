Page({
  data: {
    userInfo: {}
  },
  onLoad: function() {
    let userInfo = wx.getStorageSync("userInfo");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      this.setData({
        userInfo: userInfo
      })
    } else {
      wx.getUserInfo({
        withCredentials: false,
        lang: 'zh_CN',
        success: function(res) {
          userInfo = res.userInfo;
          wx.setStorageSync("userInfo", res.rawData)
          this.setData({
            userInfo: userInfo
          })
        }.bind(this),
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  onClickMyLicense: function(e) {
    wx.navigateTo({
      url: '../myLicense/my_license',
    })
  },
  onClickMyOrder: function(e) {
    console.log("onClickMyOrder", e)
  },
  onClickMyAccount: function(e) {
    console.log("onClickMyAccount", e)
  },
  onClickAboutUs: function(e) {
    wx.navigateTo({
      url: '../about/about',
    })
  },
  onClickHelp: function(e) {
    wx.navigateTo({
      url: '../help/help'
    });
  },
  onClickFeedback: function(e) {
    wx.navigateTo({
      url: '../feedback/feedback'
    });
  }
});