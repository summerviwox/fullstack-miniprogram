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
                this.setData({
                    node:data
                })
            })
        }
    }
});
