<template>
  <main class="box">
    <div class="loading" v-show="pageLoading">
      <!-- <van-loading
        class="loading-bg"
        type="spinner"
        color="#303030"
        size="24px"
        v-show="pageLoading"
      /> -->
    </div>

    <Head isActive="1" color="black" imgcolor="0">全部订单</Head>
    <van-tabs v-model:active="active" swipeable @click-tab="onClickTab">
      <van-tab
        class="content"
        v-for="(item, i) in order"
        :key="i"
        :title="item.name"
      >
        <van-empty
          v-show="item.name != '全部'"
          description="什么都没有哦，快去添加吧"
        />
        <div class="box-item" v-show="item.name == '全部'">
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
let router = useRouter();
const CommodityDetails = function () {
  router.push({ name: "menu",  });
};
let a = Number(route.query.id);
let active = ref(a);
const onClickTab = (name: any) => {
  console.log(name.name);
  router.push({ query: { id: name.name } });
};
let orderLists:any = ref({})
orderList({
  userId: 158,
}).then(res =>{
    orderLists.value = res.data.data.list
    console.log(orderLists.value);
});


let pageLoading = ref(true);
setTimeout(function () {
  pageLoading.value = false;
}, 1000);

const order = [
  {
    id: 1,
    name: "全部",
  },
  {
    id: 2,
    name: "待付款",
  },
  {
    id: 3,
    name: "待收货",
  },
  {
    id: 4,
    name: "已付款",
  },
  {
    id: 5,
    name: "待评价",
  },
  {
    id: 6,
    name: "退款",
  },
];
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