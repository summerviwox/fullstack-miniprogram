// components/second/second.js
import api from "../../api/api";
Component({
    properties: {

    },
    data: {
        node:[]
    },
    methods: {

    },
    lifetimes:{
       attached() {
           api.getBlogApi(0,data=>{
               for(let i=0;i<data.length;i++){
                   data[i].open = false
                   data[i].level = 1
               }
               this.setData({
                   node:data
               })
           })
       }
    }
})
