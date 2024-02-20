
import { spread } from 'axios';
<!--
 * @Author: gongz
 * @Date: 2024-02-19 15:10:15
 * @LastEditors: gongz
 * @LastEditTime: 2024-02-19 15:48:01
 * @Description: 文件头的一些描述
-->
<script setup lang="ts">
import { ref } from 'vue'

const color1 = ref('#409EFF')
</script>

<template>
    <div class="container">
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>

        <div class="demo-color-block">
            <span class="demonstration">With default value</span>
            <el-color-picker v-model="color1" />
        </div>

        <div class="mydiv">121212</div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    .demo-color-block {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }
    .demo-color-block .demonstration {
        margin-right: 16px;
    }
    .mydiv {
        color: $test-color;
    }
}
</style>
