const api = {
    getBaikeData(go){
        console.error(123)
        wx.request({
            url:"https://baike.baidu.com/item/1/31661?fr=aladdin",
            data:"",
            method:"GET",
            success(res) {

            },
            fail(res) {

            },
            complete(res) {
                typeof go =="function" &&go(res)
            }
        })
    }
}
export default api