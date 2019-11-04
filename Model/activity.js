/**
 * 获取优惠券的图片接口:
 *
 * */
import {Http} from "../utils/http";

export class Activity {
    static locationActivityD = 'a-2';
    static async getHomeLocationActivityD () {
        return await Http.request({
            url: `activity/name/${Activity.locationActivityD}`,
        })
    }
}