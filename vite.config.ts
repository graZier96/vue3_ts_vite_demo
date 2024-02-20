/*
 * @Author: gongz
 * @Date: 2024-02-19 10:03:40
 * @LastEditors: gongz
 * @LastEditTime: 2024-02-19 15:59:58
 * @Description: 文件头的一些描述
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//Gzip文件压缩
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
		//开启Gzip压缩
		viteCompression({
			verbose: true, // 是否在控制台中输出压缩结果
			disable: false,
			threshold: 1024, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
			algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
			ext: '.gz',
			deleteOriginFile: true // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
		})
	],
    resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	base: './',
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					// 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
					if (id.includes(resolve(__dirname, '/src/store/index.ts'))) {
						return 'vendor'
					}
				}
			}
		}
	},
	css:{
		preprocessorOptions:{
			scss:{
				additionalData:'@import "@/assets/style/main.scss";'
			}
		}
	},
})
