<template>
    <main>
        <div class="loading" v-show="pageLoading">
            <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading" />
        </div>
        <Head color="black" imgcolor="0"></Head>
        <div class="box">
            <h3>订单{{aa}}</h3>
        </div>
    </main>
</template>
<script setup lang="ts">
import { ref } from 'vue';
let aa = "已完成"
let pageLoading = ref(true);
setTimeout(function () {
    pageLoading.value = false;
}, 500)
</script>
<style>
main {
    background-color: #f5f5f5;
    min-height: 100vh;
    overflow: hidden;
}
</style>