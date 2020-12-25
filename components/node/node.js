import api from "../../api/api";
Component({
    properties: {
        node:{
            type:Object,
            value:{
                id:0,
                parentid:0,
                title:"",
                html:"",
                markdown:"",
                type:0,
                open:false,
                level:0,
                node:[]
            }
        }
    },
    data: {
        level:0
    },
    methods: {
        onTap(e){
            if(!this.data.node.open){
                api.getBlogApi(this.data.node.id,data=> {
                    for(let i=0;i<data.length;i++){
                        data[i].open = false
                        data[i].level = this.data.node.level+1
                        data[i].preview = data[i].markdown.substring(data[i].title.length+2,data[i].title.length+52)
                    }
                    this.setData({
                        ["node.node"]:data,
                        ["node.open"]:!this.data.node.open
                    })
                })
            }else{
                this.setData({
                    ["node.open"]:false
                })
            }
        },
        gotopreview(e){
            wx.navigateTo({
                url:"/components/article/article?id="+this.data.node.id
            })
        }
    }
});
