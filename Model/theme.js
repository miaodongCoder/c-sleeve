//业务对象:
// 要定义好一个一个的业务对象;
// theme , banner , spu(商品) , sku(单品) , address , user等 , 这些都是最基本的业务对象;
import {Http} from "../utils/http";

// ctrl + option + 字母O 自动删除无效的引用
/**
 *  主题业务对象类:
 *  顶部图片的业务对象类:
 *
 */
class Theme {
    // 封装一个静态方法 , 返回一个await修饰的变量 , 所以方法也要用async修饰 , async与await是成对出现的!
    static async getHomeLocationThemeA() {
        // 这是一个async方法 , 这里调用的时候一定要用await接收修饰:
        const res = await Http.request({
            url: `theme/by/names`,
            method: 'GET',
            data: {
                names: 't-1',
            }
        });
        return res.data;
    }
}

export {
    Theme,
}