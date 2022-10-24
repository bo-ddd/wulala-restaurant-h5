<template>
    <div>
        <van-tabs v-model:active="active">
            <van-tab title="全部订单">内容 1</van-tab>
            <van-tab title="订单">内容 2</van-tab>
            <van-tab title="评价">内容 3</van-tab>
            <van-tab title="待付款">内容 4</van-tab>
        </van-tabs>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const active = ref(0);
</script>