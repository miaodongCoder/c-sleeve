// pages/home/home.js


import {Theme} from "../../Model/theme";
import {Banner} from "../../Model/banner";
import {Category} from "../../Model/catrgory";
import {Activity} from "../../Model/activity";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: [],
        activity: null,
    },

    /**
     * 生命周期函数--监听页面加载
     * http://biuaxia.cn是全新域名 , 替换7月的域名
     * appkey=hZtsXytAkyNVrg4j
     */
    // ES6的写法:
    async onLoad(options) {
        this.initAllData();
    },

    // 初始化banner的数据:
    async initAllData() {
        const themeA = await Theme.getHomeLocationThemeA();
        const bannerB = await Banner.getHomeLocationBannerB();
        const gridC = await Category.getHomeLocationGridCategoryC();
        const activityD = await Activity.getHomeLocationActivityD();
        this.setData({
            themeA: themeA[0],
            // 这边一定要看清拿的数据是谁, 这里还是拿的是bannerB.data:
            bannerB: bannerB.data,
            grid: gridC.data,
            activity: activityD.data,
        })
    },

    onPullDownRefresh: function () {

    },

    onReachBottom: function () {

    },

    onShareAppMessage: function () {

    }
    
})