/*
 * @Author: gongz
 * @Date: 2024-02-19 15:03:09
 * @LastEditors: gongz
 * @LastEditTime: 2024-02-19 15:05:16
 * @Description: 文件头的一些描述
 */
export const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/pages/login.vue'), // 注意这里要带上 文件后缀.vue
        meta:{}
    },
]
