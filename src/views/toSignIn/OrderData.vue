<template>
    <main>
        <div class="loading" v-show="pageLoading">
            <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading" />
        </div>
        <Head color="black" imgcolor="0"></Head>
        <div class="box wrap scroll">
          <p class="title" v-if='orderLists.orderStatus == 0'>订单待付款</p>
         

              <orderDetails.Wrapper >
               <orderDetails.Item :list = orderLists >
                 <van-button
                   round
                   type="success"
                   color="#000000"
                   plain
                   size="small"
                   @click="CommodityDetails"
                   >去付款</van-button
                 >
               </orderDetails.Item>
             </orderDetails.Wrapper>
             <div class="OrderItem">
              <van-cell-group>
    <van-cell title="期望时间" value="立即配送" />
    <van-cell title="配送地址" :value=orderLists.address />
    <van-cell title="买家信息" :value=orderLists.receiver />
    <van-cell title="配送服务" value="呜啦啦专送" />
    <van-cell title="配送骑手" value="周将军" />
    <van-cell title="订单号" :value=orderLists.orderSn />
    <van-cell title="下单时间" :value=date(orderLists.createdAt) />
    <van-cell title="支付方式" value="在线支付" />
    <van-cell title="餐具数量" value="商家按餐量提供" />
  </van-cell-group>
            </div>
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
let userId = localStorage.getItem('userId')

let orderId = route.query.orderId
console.log(orderId);

let pageLoading = ref(true);
setTimeout(function () {
    pageLoading.value = false;
}, 500)
let orderLists:any = ref({})
orderList({
  userId: userId,
}).then(res =>{
  res.data.data.list.forEach(el => {
    // console.log(el);
    
    if(el.id == orderId ){
  // console.log(el);
  
      orderLists.value = el
    }
  });

    // console.log(orderLists.value);
});
let date=(d:any)=>{
       let date=new Date(d);
       return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+":"+date.getMinutes()
    }
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
::v-deep .van-col--6 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.OrderItem {
    border-radius: 1rem;
    background-color: white;
    padding: 1rem;
    margin-bottom: 1rem;
}
.scroll{
  
  overflow-y: scroll;
  height: calc(100vh - 5rem);
}

</style>