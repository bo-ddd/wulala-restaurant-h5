<template>
  <main>
    <div class="wrap">
      <Title color="#000">菜单</Title>
    </div>

    <van-tabs v-model:active="active" class="wrap">
      <van-tab :title="item.title" v-for="(item, index) in aa" :key="index">
      </van-tab>
      
    <MenuConten.Wrapper>
      <MenuConten.Item
        v-for="(item, index) in foodlists.data"
        :key="index"
        :src="item.bannerUrl"
        :content="item.foodName"
        :price="item.price"
        :description="item.description"
      >
    </MenuConten.Item>
    </MenuConten.Wrapper>
  </van-tabs>

    <van-pagination v-model="currentPage" :total-items="total" :items-per-page="pageSize" @change="page" />
  </main>
</template>

<script setup lang="ts">
import { ref,reactive } from "vue";
import { getFoodListApi } from "@/api/api";
import MenuTitle from "@/components/menuTitle";
import MenuConten from "@/components/menuContent";
import useTabbar from "@/views/menu/useTabbar";
let { imgarr, selected, menuNav } = useTabbar();
const currentPage = ref(1);


let aa = ref([{ title: "早餐" }, { title: "午餐" }, { title: "晚餐" }]);
const active = ref(0);

let pageSize = ref();
let total = ref();
let pageNum = ref();

let foodlists:any = reactive({data:[]});
(async function () {
  let foodlist = await getFoodListApi({
    pageSize: pageSize.value,
    pageNum: pageNum.value
  });

  // console.log(foodlist.data.data);
  // pageSize.value = foodlist.data.data.pageSize;
  total.value = foodlist.data.data.total;
  // pageNum.value = foodlist.data.data.pageNum;
  
  foodlists.data = foodlist.data.data.list;
  console.log(foodlists);
})();
let page =async function () {
  pageNum.value = currentPage.value;
  // (async function () {
    let foodlist = await getFoodListApi({
      pageSize: pageSize.value,
      pageNum: pageNum.value
    });
    foodlists.data = foodlist.data.data.list;
    console.log(foodlist.data.data.list);
    
  // console.log(pageSize.value);
  // console.log(pageNum.value);
  // console.log(currentPage);
  console.log(foodlists.data);
  total.value = foodlist.data.data.total;
  // pageNum.value = foodlist.data.data.pageNum;
  
  // console.log(foodlists);
// })();
}
</script>

<style scoped>
::v-deep .van-tabs__line {
  background: #2d2823;
}
</style>