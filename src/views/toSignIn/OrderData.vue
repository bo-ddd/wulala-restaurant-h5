<template>
    <main>
        <div class="loading" v-show="pageLoading">
            <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading" />
        </div>
        <Head color="black" imgcolor="0"></Head>
        <div class="box wrap">
            <p class="title" v-if='orderLists.orderStatus == 0'>订单待付款</p>
            <orderDetails.Wrapper v-for="(item,i) in orderLists" :key="i">
             
             <orderDetails.Item :list = item >
               <van-button
                 round
                 type="success"
                 color="#7232dd"
                 plain
                 size="small"
                 @click="CommodityDetails"
                 >再来一单</van-button
               >
             </orderDetails.Item>
           </orderDetails.Wrapper>
        </div>
    </main>
</template>
<script setup lang="ts">

import orderDetails from "@/components/orderDetails";
import { ref } from 'vue';
import {orderList} from "@/api/api";
import { useRoute, useRouter } from "vue-router";
let route = useRoute();
let router = useRouter();
console.log(route.query);


let pageLoading = ref(true);
setTimeout(function () {
    pageLoading.value = false;
}, 500)
let orderLists:any = ref({})
orderList({
  userId: 157,
}).then(res =>{
    orderLists.value = res.data.data.list
    console.log(orderLists.value);
});
const CommodityDetails = function () {
  router.push({ name: "menu"});
};
</script>
<style>
main {
    background-color: #f5f5f5;
    min-height: 100vh;
    overflow: hidden;
}
.title{
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 700;
}
</style>