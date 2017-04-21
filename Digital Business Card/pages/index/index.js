// index.js
var app = getApp();
var QR = require('../../utils/qrcode.js');

Page({
  data: {
    userInfo: {},
    userData: {
      userId: 1,
      name: '绕穷一周',
      organization: '华盛顿大学',
      title: '学生',
      contact: 'jasper920011@gmail.com',
      avatarUrl: 'http://wx.qlogo.cn/mmopen/vi_32/9ojTbBQgPHicB2pznedKTFvLic2xYl9huU5VnxgicrDNvkRZJnwlHzMcNDFM7IgZibwtkl8TcqknUbkCNkApoRqh4g/0',
      collection: ['./collection/item?openId=1', './collection/item?openId=2', './collection/item?openId=3']
    },
    placeholder: 'mywali.co',
    maskHidden: true,
    imagePath: '',
  },

  // methods
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },

  setCanvasSize: function() {
    var size = {};
    try {
      var res = wx.getSystemInfoSync();
      var scale = 750/464;
      var width = res.windowWidth/scale;
      // console.log(res.windowWidth);
      var height = width;
      size.w = width;
      size.h = height;
    } catch(e) {
      console.log('Faild geting system info'+e);
    }
    return size;
  },

  createQrCode: function(url, canvasId, cavW, cavH) {
    // draw qr code
    QR.qrApi.draw(url, canvasId, cavW, cavH);
    var that = this;
    // wait 2s before geting img path
    var st = setTimeout(function() {
      // get temp image path and store it to data
      wx.canvasToTempFilePath({
        canvasId: canvasId,
        success: function(res) {
          var tempFilePath = res.tempFilePath;
          // console.log(tempFilePath);
          that.setData({
            imagePath: tempFilePath
          });
        },
        fail: function(res) {
          console.log(res);
        }
      });
      clearTimeout(st);
    }, 2000);
  },

  // tap to view image, hold to save and share image
  previewImg: function(e) {
    var img = this.data.imagePath;
    wx.previewImg({
      current: img,
      urls: [img]
    });
  },
  /*
  formSubmit: function(e) {
    var that = this;
    // TODO: url should contain quries
    var url = e.detail.value.url;
    url = (url == '') ? ('http://' + that.data.placeholder) : ('http://' + url);
    that.setData({
      maskHidden: false
    });
    wx.showToast({
      title: '生成中...',
      icon: 'loading',
      duration: 2000
    });
    var st = setTimeout(function() {
      wx.hideToast();
      var size = that.setCanvasSize();
      // draw qr code
      that.createQrCode(url, 'mycanvas', size.w, size.h);
      that.setData({
        maskHidden: true
      });
      clearTimeout(st);
    }, 2000);
  },
  */
  // Life Circle
  onLoad: function () {
    var that = this;

    // Draw Canvas
    var size = this.setCanvasSize();
    var initUrl = 'http://' + this.data.placeholder;
    this.createQrCode(initUrl, 'mycanvas', size.w, size.h);
    
    // Get Global Data
    app.getUserInfo(function(userInfo) {
      // Update Data
      that.setData({
        userInfo: userInfo
      });

    });
    
    /*wx.scanCode({
      success: function(res){
        console.log('scaning...', res);
      },
      fail: function(res) {
        // fail
        console.log(res);
      },
      complete: function(res) {
        // complete
      }
    })*/
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},

});
