// components/second/second.js
import api from "../../api/api";
Component({
    properties: {

    },
    data: {
        node:[]
    },
    methods: {
        getApi(e){
            let id = Number.parseInt(e.currentTarget.dataset.id)
            api.getBaikeData(function (res){
                console.log("getApi",res)
            })
            let key = "node["+id+"].open"
            this.setData({
                [key] :!this.data.node[id].open
            })
            if(this.data.node[id].open){
                this.randomData(id)
            }
            console.error(this.data.node)
        },
        randomData(id){
            switch (id%5){
                case 0:
                    if(this.data.node[id].node!=undefined){
                        break
                    }
                    let key = "node["+id+"].node"
                    let value = []
                    for(let i=0;i<5;i++){
                        value.push({
                            id:id*100+i,
                            parentid:"1",
                            title:"副标题",
                            html:"htmlhtmlhtmlhtml",
                            open:false
                        })
                    }
                    this.setData({
                        [key]:value
                    })
                    break
            }
        }
    },
    lifetimes:{
       attached() {
           let list = []
           for(let i=0;i<20;i++){
               list.push({
                   id:i,
                   parentid:"1",
                   title:"标题",
                   html:"htmlhtmlhtmlhtml",
                   open:false
               })
           }
           this.setData({
               node:list
           })
       }
    }
})
