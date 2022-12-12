<template>
  <main>
    <MenuConten.Wrapper>
      <MenuConten.Item
        v-for="(item, index) in foodLists"
        :key="index"
        :src="item.bannerUrl"
        :content="item.foodName"
        :price="item.price"
        :description="item.defineProps"
      ></MenuConten.Item>
    </MenuConten.Wrapper>
  </main>
</template>

<script setup lang="ts">
import { getFoodListApi } from "@/api/api";
import MenuConten from "@/components/menuContent";
import { ref } from "vue";
import userUtil from "@/assets/ulit";
let { parsrAsssetFile } = userUtil();
let foodLists: any = ref({});
(async function () {
  let foodlist = await getFoodListApi({});
  foodLists.value = foodlist.data.data.list;
})();
// console.log(foodLists.value);
</script>

<style scoped>
main {
  height: calc(100vh - 15rem);
  overflow-y: scroll;
}
</style>