// pages/collection/item/item.js
Page({
  data:{
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // console.log(options);
    var that = this;

    try {
      var collection = wx.getStorageSync('collection');
      collection.forEach(function(i) {
        if(i.userId === options.userId) {
          that.setData({
            userData: i
          });
        }
      });
    }catch(e) {
      console.log(e);
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})