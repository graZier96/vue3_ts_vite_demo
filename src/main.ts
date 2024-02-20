/*
 * @Author: gongz
 * @Date: 2024-02-19 10:03:40
 * @LastEditors: gongz
 * @LastEditTime: 2024-02-19 15:08:33
 * @Description: 文件头的一些描述
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './style.css'
import { createPinia } from 'pinia'
import { registerStore } from './store/index'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
// 注册pinia状态管理库
registerStore();

app.mount('#app')
