import {Http} from "../utils/http";

/**
 * 六宫格的业务实现类:
 * 所有的业务逻辑都应该写在model文件里:
 *
 * */
export class Category {
    static async getHomeLocationGridCategoryC() {
        return await Http.request({
            url: `category/grid/all`
        });
    }
}

