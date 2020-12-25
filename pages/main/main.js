// pages/main.js
Page({
    data: {
        position:0,
        nbFrontColor: '#000000',
        nbBackgroundColor: '#ffffff',
        titles:[
            {title:"主页",index:0},
            {title:"附页",index:1},
            {title:"个人中心",index:2},
        ]
    },

    onTabSelect:function(e){
        this.setData({
            position:e.detail.position
        })
    },

    tabChange(e) {
        console.log('tab change', e)
    },
    onLoad: function (options) {
    },

    onReady: function () {

    },
    onShow: function () {
  
    },
    onHide: function () {

    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    }
})