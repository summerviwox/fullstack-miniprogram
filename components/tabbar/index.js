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
            this.setData({
                selected:e.currentTarget.dataset.index
            })
            getApp().globalData.currentTab =  this.data.selected
            this.triggerEvent("onTabSelect",{position:this.data.selected},{})
        }
    }
});
