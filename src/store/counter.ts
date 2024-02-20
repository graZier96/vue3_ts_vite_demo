/*
 * @Author: gongz
 * @Date: 2024-02-19 13:54:18
 * @LastEditors: gongz
 * @LastEditTime: 2024-02-19 13:54:23
 * @Description: 文件头的一些描述
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  const increment= () => {
    count.value++
  }
  
  const decrement= () => {
    count.value--
  }

  return { count, doubleCount, increment, decrement }
})
