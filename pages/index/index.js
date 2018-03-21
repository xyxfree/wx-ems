Page({
  data: {
    loading:false,
    dataList:[],
    nu:null,
    flag:true,
    value:null
  },
  search(){
    this.setData({
      loading:true
    })
    wx.request({
      url: 'https://route.showapi.com/64-19?',
      data:{
        com:"auto",
        nu: this.data.nu,
        showapi_appid:"58998",
        showapi_sign:"e20fe91d87d94a8ea368e8d43dfe960d"
      },
      success: function (res) {
        console.log(res.data.showapi_res_body.flag)
        this.setData({
          dataList: res.data.showapi_res_body.data,
          flag: res.data.showapi_res_body.flag,
          value:null,
          loading: false
        })
      }.bind(this)
    })
  },
  expressinput (e){
    this.setData({
      nu:e.detail.value
    })
  }
})