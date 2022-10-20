<template>
  <main>
    <div class="wrap">
      <Title color="#000">菜单</Title>
    </div>

    <van-tabs v-model:active="active" class="wrap">
      <van-tab :title="item.title" v-for="(item, index) in aa" :key="index">
        <!-- {{index}} -->
        <MenuConten.Wrapper>
          <menuConten.Item
            v-for="(item, index) in foodlists"
            :key="index"
            :src="item.bannerUrl"
            :content="item.foodName"
            :price="item.price"
            :description="item.description"
          ></menuConten.Item>
        </MenuConten.Wrapper>
      </van-tab>
    </van-tabs>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getFoodListApi } from "@/api/api";
import MenuTitle from "@/components/menuTitle";
import MenuConten from "@/components/menuContent";
import useTabbar from "@/views/menu/useTabbar";
let { imgarr, selected, menuNav } = useTabbar();

let aa = ref([{ title: "早餐" }, { title: "午餐" }, { title: "晚餐" }]);
const active = ref(0);

let foodlists = ref({});
(async function () {
  let foodlist = await getFoodListApi({});
  console.log(foodlist);

  foodlists.value = foodlist.data.data.list;
  console.log(foodlists.value);
})();
</script>

<style scoped>
::v-deep .van-tabs__line {
  background: #2d2823;
}
</style>