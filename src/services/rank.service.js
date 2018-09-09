import {HttpService} from './http.service'
import {Observable} from 'rxjs'

// 使用单例模式
let __instance = (function () {
    let instance;
    return (newInstance) => {
        if (newInstance) instance = newInstance;
        return instance;
    }
}());

export class RankService extends HttpService {
    constructor(props) {
        super();
        if (__instance()) return __instance();
        //按自己需求实例化
        __instance(this);
    }

    query(page = 1) {
        let cnpApi = `https://cnodejs.org/api/v1/topics?page=${page}&limit=10&tab=all&mdrender=true`;

        return Observable.fromPromise(super.get(cnpApi))
            .map(res => res.data)
    }
}