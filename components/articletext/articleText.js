Component({
    options:{
    },
    properties: {
        node:{
            type:Object,
            value:{
                title:"标题",
                time:"2020-12-12",
                preview:"请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。",
                images:[
                    "https://www.summerman.top:7777/blog/1597386168098.jpg",
                    "https://www.summerman.top:7777/blog/1597245023051.png",
                    "https://www.summerman.top:7777/blog/1597245925633.jpg"
                ]
            }
        }
    },
    data: {

    },
    methods: {

    },
    lifetimes:{
        attached() {

        }
    }
});
