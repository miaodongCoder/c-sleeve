import {config} from "../Config/Config";
// import {promisic} from "../miniprogram_npm/lin-ui/utils/util";
import {promisic} from "../utils/util"


/**
 * http请求的基类:
 *
 * */
class Http {
    // 这边在request的参数外层用{}包裹 , 这样在方法的实现的时候就可以像写JS对象的方式一样去书写代码了~
    static async request({
                             url,
                             method = 'GET',
                             data
                         }) {
        return await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            method: method,
            data: data,
            header: {
                appkey: config.appkey,
            }
        });
    }

    /**
     // 这种形参不加大括弧的在外部调用的时候就只能用传参的形式 , 如果加上大括弧就可以像JS传递对象的形式一样!
     static request(url, method = 'GET', data, callBack) {
        wx.request({
            url: `${config.apiBaseUrl}${url}`,
            method: method,
            data: data,
            header: {
                appkey: config.appkey ,
            },
            success(res) {
                callBack(res.data);
            }
        })
    }

     */

    /**
     // 这边在request的参数外层用{}包裹 , 这样在方法的实现的时候就可以像写JS对象的方式一样去书写代码了~
     static request({url , method = 'GET' , data , callBack}) {
        wx.request({
            url: `${config.apiBaseUrl}${url}`,
            method: method,
            data: data,
            header: {
                appkey: config.appkey,
            },
            success(res) {
                // 把请求成功后获取的数据传递出去:
                callBack(res.data);
            }
        })
    }

     * */


}


export {
    Http,
}