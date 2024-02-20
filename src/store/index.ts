/*
 * @Author: gongz
 * @Date: 2024-02-19 13:55:09
 * @LastEditors: gongz
 * @LastEditTime: 2024-02-19 14:04:41
 * @Description: 文件头的一些描述
 */
import { useCounterStore } from './counter';
import { initResetFun } from '@/utils/storeTools'
//其它模块...

export interface IAppStore {
    useCounter: ReturnType<typeof useCounterStore>;
}

const appStore: IAppStore = {} as IAppStore;

/**
 * 注册app状态库
 */
export const registerStore = () => {
    appStore.useCounter = useCounterStore();
    // 其他store...

    //重写reset方法
    initResetFun(appStore);
};

export default appStore;
