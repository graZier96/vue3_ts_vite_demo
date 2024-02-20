/*
 * @Author: gongz
 * @Date: 2024-02-19 15:03:00
 * @LastEditors: gongz
 * @LastEditTime: 2024-02-20 10:48:03
 * @Description: 文件头的一些描述
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
    //路由模式根据需求选择
    history: createWebHashHistory(),
    routes: routes,
    //滚动行为
    scrollBehavior() {
        return {
            left: 0,
            top: 0,
        }
    },
})
export default router