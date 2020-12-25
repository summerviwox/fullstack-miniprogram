const url = "https://www.summerman.top:9999/record-b/blog"
const api = {
    getBlogApi(id,go){
        wx.request({
            url:url+"/selectWithOutHtmlDataByParentId",
            data:{
                id: id,
                token:"summerviwox"
            },
            method:"GET",
            success(res) {
                typeof go =="function" &&go(res.data)
            },
            fail(res) {
                console.error(res)
            },
            complete(res) {

            }
        })
    },
    getHtmlById(id,go){
        console.error(url+"/selectHtmlById?id="+id)
        wx.request({
            url:url+"/selectHtmlById",
            data:{
                id:id
            },
            method:"POST",
            success(res) {
                typeof go =="function" &&go(res.data.data)
            },
            fail(res) {
                console.error(res)
            },
            complete(res) {

            }
        })
    }
}
export default api