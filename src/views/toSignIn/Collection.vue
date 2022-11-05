<template>
    <main>
        <div class="loading" v-show="pageLoading">
            <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading"/>
        </div> 
        <Head class="head" color="black" imgcolor="0">收藏</Head>
            <!-- <van-empty
            image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
            image-size="80"
            description="什么都没有哦，快去添加吧"
            /> -->
            <van-empty description="什么都没有哦，快去添加吧" />
    </main>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
let pageLoading = ref(true);
setTimeout(function () {
    pageLoading.value = false;
},1000)
</script>

<style scoped>
main{
    background-color: #f4f4f4;
    min-height: 100vh;
    overflow: hidden;
}
.head{
    background: #fff;
}
</style>