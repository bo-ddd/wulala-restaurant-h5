<template>
  <main>
    <MenuConten.Wrapper>
      <MenuConten.Item
        v-for="(item, index) in goodlists"
        :key="index"
        :src="item.bannerUrl"
        :content="item.foodName"
        :price="item.price"
        :description="item.description"
      ></MenuConten.Item>
    </MenuConten.Wrapper>
  </main>
</template>

<script setup lang="ts">
import { getFoodListApi } from "@/api/api";
import { ref } from "vue";
import MenuConten from "@/components/menuContent";
import userUtil from "@/assets/ulit";
let { parsrAsssetFile } = userUtil();

let goodlists = ref({});
(async function () {
  let foodlist = await getFoodListApi({});
  // console.log(foodlist.data.data.list);
  goodlists.value = foodlist.data.data.list;
})();
</script>

<style scoped>
main {
  height: calc(100vh - 15rem);
  overflow-y: scroll;
}
</style>