<template>
    <main>
        <div class="loading" v-show="pageLoading">
            <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading"/>
        </div> 
        <Head class="head" color="black" imgcolor="0">全部订单</Head>
        <van-tabs v-model:active="active">
            <van-tab class="content" v-for="item in  order" :title="item.name">
                <!-- {{ item.name }} -->
                <van-empty description="什么都没有哦，快去添加吧" />
            </van-tab>
        </van-tabs>
    </main>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const active = ref();
let pageLoading = ref(true);
setTimeout(function () {
    pageLoading.value = false;
},1000)

const order  = [
    {
        id:1,
        name:'全部'
    },{
        id:2,
        name:'待付款'
    },{
        id:3,
        name:'待收货'
    },{
        id:4,
        name:'待使用'
    },{
        id:5,
        name:'待评价'
    },{
        id:6,
        name:'退款'
    }
]
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
.content{
    height: calc(100vh - 9.2rem);
}
</style>