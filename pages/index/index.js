//Page Object
import { request } from "../../request/index.js"
Page({
  data: {
    //轮播图数组
    swiperList:[],
    //导航栏数组
    catesList:[],
    //楼层数组
    floorList:[]
  },
  //options(Object)
  onLoad: function(options){
    //获取轮播图
    this.getSwiperList();
    //获取分类导航
    this.getCateList();
    //获取楼层数据
    this.getFloorList();
  },
  //获取轮播图数据
  getSwiperList(){
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata', //开发者服务器接口地址",
    //   success: res => {
    //     // [{image_src: "https://api-hmugo-web.itheima.net/pyg/banner1.png", open_type: "navigate", goods_id: 129, navigator_url: "/pages/goods_detail/main?goods_id=129"},
    //     // {image_src: "https://api-hmugo-web.itheima.net/pyg/banner2.png", open_type: "navigate", goods_id: 395, navigator_url: "/pages/goods_detail/main?goods_id=395"},
    //     // {image_src: "https://api-hmugo-web.itheima.net/pyg/banner3.png", open_type: "navigate", goods_id: 38, navigator_url: "/pages/goods_detail/main?goods_id=38"}]
    //     this.setData({
    //       swiperList:res.data.message
    //     })
    //   }
    // });
    request({url:'/home/swiperdata'}).then(res=>{
      this.setData({
              swiperList:res
            })
    })
  },
  //获取分类导航数据
  getCateList(){
    request({url:'/home/catitems'}).then(res=>{
      this.setData({
             catesList:res
            })
    })
  },
  //获取楼层数据
  getFloorList(){
    request({url:'/home/floordata'}).then(res=>{
      this.setData({
             floorList:res
            })
    })
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});