Component({
    properties: {},
    data: {
        selected:0,
        list:[
            {
                tabBarIcon:"/images/home1.png",
                selectIcon:"/images/home2.png",
                page:"/pages/main/main"
            },
            {
                tabBarIcon:"/images/second1.png",
                selectIcon:"/images/second2.png",
                page:"/pages/second/second"
            },
            {
                tabBarIcon:"/images/mine1.png",
                selectIcon:"/images/mine2.png",
                page:"/pages/mine/mine"
            }
        ]
    },
    methods: {
        switchTab(e){
            // for(let i=0;i<this.data.list.length;i++){
            //     this.setData({
            //         ['list['+i+'].select']:i==e.currentTarget.dataset.index
            //     })
            // }
            this.data.selected =  e.currentTarget.dataset.index
            getApp().globalData.currentTab =  this.data.selected
            console.error(this.data.list)
            wx.switchTab({
              url: e.currentTarget.dataset.page,
            })
        }
    }
});
