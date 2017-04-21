// pages/collection/collection.js
Page({
  data:{
    collection: [
      {
        userId: '2',
        name: '张玮玮',
        title: '手风琴',
        organization: '野孩子乐队',
        contact: 'zhangweiwei@gmail.com',
        avatarUrl: 'http://wx.qlogo.cn/mmopen/vi_32/9ojTbBQgPHicB2pznedKTFvLic2xYl9huU5VnxgicrDNvkRZJnwlHzMcNDFM7IgZibwtkl8TcqknUbkCNkApoRqh4g/0'
      },
      {
        userId: '3',
        name: '张佺',
        title: '主唱',
        organization: '野孩子乐队',
        contact: 'zhangquan@gmail.com',
        avatarUrl: 'http://wx.qlogo.cn/mmopen/vi_32/9ojTbBQgPHicB2pznedKTFvLic2xYl9huU5VnxgicrDNvkRZJnwlHzMcNDFM7IgZibwtkl8TcqknUbkCNkApoRqh4g/0'
      },
      {
        userId: '4',
        name: '郭龙',
        title: '鼓手',
        organization: '野孩子乐队',
        contact: 'guolong@gmail.com',
        avatarUrl: 'http://wx.qlogo.cn/mmopen/vi_32/9ojTbBQgPHicB2pznedKTFvLic2xYl9huU5VnxgicrDNvkRZJnwlHzMcNDFM7IgZibwtkl8TcqknUbkCNkApoRqh4g/0'
      },
    ]
  },

  showCard: function(e) {
    var userId = e.currentTarget.dataset.userId;
    
    wx.navigateTo({
      url: 'item/item?userId=' + userId
    });
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    try{
      wx.setStorageSync('collection', this.data.collection );
    } catch(e) {
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