import api from "../../api/api";
Component({
    options:{

    },
    properties: {

    },
    data: {
        node:{
            html:""
        }
    },
    methods: {

    },
    lifetimes:{
        attached() {
        }
    },
    pageLifetimes:{
        show() {
            api.getHtmlById(this.options.id,data=>{
                data.html = data.html.replace(/http:\/\/222.186.36.75:8888/g,"https://www.summerman.top:7777")
                console.error(data.html)
                this.setData({
                    node:data
                })
            })
        }
    }
});
