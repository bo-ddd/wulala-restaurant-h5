<template>
  <main class="box">
    <Head isActive="1" color="black" imgcolor="0">全部订单</Head>
    <van-tabs v-model:active="active" swipeable @click-tab="onClickTab">
      <van-tab
        class="content"
        v-for="(item, i) in order"
        :key="i"
        :title="item.name"
      >
      <div v-if="pageLoading">
        <van-loading size="24px" vertical>加载中...</van-loading>
      </div>
      <div v-else>
  <van-empty
        v-show="(orderLists.length == 0 || token==null)"
          description="什么都没有哦，快去添加吧"
        />
        <div class="box-item" v-show="(orderLists.length != 0)">
          <orderDetails.Wrapper v-for="(item,i) in orderLists" :key="i">
             
            <orderDetails.Item :list = item >
              <van-button round type="success" color="#7232dd" plain size="small" @click="CommodityDetails">去付款</van-button>
            </orderDetails.Item>
          </orderDetails.Wrapper>
     
        </div>
      </div>
      
      </van-tab>
    </van-tabs>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import orderDetails from "@/components/orderDetails";
import {orderList} from "@/api/api";
let route = useRoute();
let a:any = JSON.parse(route.query.info);
let token = sessionStorage.getItem('token')
// let aa = String(route.query.name)
// console.log(a);

let active = ref(a.name);
let orderLists:any = ref({})
let userId = localStorage.getItem('userId')
let router = useRouter();
let pageLoading = ref(true);
const order = [
  {
    id: 1,
    name: "全部",
    src:"to-be_paid.png"
  },
  {
    id: 2,
    name: "待付款",
    src:"to-be_received.png"
  },
  {
    id: 3,
    name: "待收货",
    src:"to -be_use.png"
  },
  {
    id: 4,
    name: "已付款",
    src:"icon-feedback.png"
  },
  {
    id: 5,
    name: "待评价",
    src:"icon-feedback.png"
  },
  {
    id: 6,
    name: "退款",
    src:"refund.png"
  },
];

const CommodityDetails = function () {
  router.push({ name: "menu",  });
};
const onClickTab = (name: any) => {
  if(token){

    pageLoading.value = true;
    console.log(name);
    router.push({ query: {info:JSON.stringify(name)} });
    orderLists.value =[]
    if (name.name == 0) {
      orderList({
    userId: userId
  }).then(res =>{
    orderLists.value = res.data.data.list
    
    pageLoading.value = false;
  });
    }else{
      orderList({
      userId: userId
    }).then(res =>{
      res.data.data.list.forEach(el => {
        if (el.orderStatus == name.name-1) {
        console.log(el);
        orderLists.value.push(el)
        }
      });
    pageLoading.value = false;
      
      console.log(orderLists.value);
    });
    }
  }else{
    pageLoading.value = false;
  }
  // pageLoading.value = false;
};

onClickTab(a)

</script>

<style scoped>
::v-deep .van-tabs__nav {
  background-color: #f5f5f5;
}

::v-deep .van-tab__panel {
  background-color: #f5f5f5;
}

::v-deep .van-col--6 {
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  background-color: #f5f5f5;
  min-height: 100vh;
  overflow: hidden;
}
.box-item {
  overflow-y: scroll;
  height: calc(100vh - 9.2rem);
}
.content {
  height: calc(100vh - 9.2rem);
  padding: 1rem;
}
</style>