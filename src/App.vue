<!--
 * @Author: gongz
 * @Date: 2024-02-19 10:03:40
 * @LastEditors: gongz
 * @LastEditTime: 2024-02-19 15:21:36
 * @Description: 文件头的一些描述
-->
<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <router-view></router-view>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
