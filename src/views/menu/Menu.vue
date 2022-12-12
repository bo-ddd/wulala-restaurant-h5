<template>
  <main>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <div class="wrap">
      <Title color="#000">菜单</Title>
    </div>

    <van-tabs v-model:active="active" class="wrap">
      <van-tab title="全部菜单">
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <MenuConten.Wrapper>
          <MenuConten.Item v-for="(item, index) in foodlists.data" :key="index" :src="item.bannerUrl"
            :content="item.foodName" :price="item.price" :description="item.description" :foodId="item.foodId">
          </MenuConten.Item>
        </MenuConten.Wrapper>
      </van-list>
      </van-tab>

      <van-tab :title="item" v-for="(item, index) in menus">
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div v-for="(el, index) in foodlists.data">
          <div v-if="(el.categoryName == item)">
            <MenuConten.Wrapper>
              <MenuConten.Item :src="el.bannerUrl" :content="el.foodName" :price="el.price"
                :description="el.description" :foodId="el.foodId">
              </MenuConten.Item>
            </MenuConten.Wrapper>
          </div>
        </div>
      </van-list>
      </van-tab>
    </van-tabs>
  </van-pull-refresh>
  </main>
</template>

<script setup lang="ts">
import { Toast } from 'vant';
import { ref, reactive } from "vue";
import { getFoodListApi } from "@/api/api";
import MenuTitle from "@/components/menuTitle";
import MenuConten from "@/components/menuContent";
import useTabbar from "@/views/menu/useTabbar";
let { imgarr, selected, menuNav } = useTabbar();
const loading = ref(false);
const refreshing = ref(false);
const list: any = ref([]);
const finished = ref(false);


const active = ref(0);

let pageNum = ref();
let menu: any = [];
let menus = ref();

let jiachang: any = [];

let foodlists: any = reactive({ data: [] });
(async function () {
  let foodlist = await getFoodListApi({});


  foodlists.data = foodlist.data.data.list;
  console.log(foodlists.data);
  foodlists.data.forEach((item: any) => {
    menu.push(item.categoryName);
    menus.value = [...new Set(menu)];
  });
})();


const onLoad = () => {
    getFoodListApi({}).then(res => {
      foodlists.data.value = res.data.data.list
        })
    setTimeout(() => {
        if (refreshing.value) {
            list.value = [];
            refreshing.value = false;
        }

        for (let i = 0; i < 10; i++) {
            list.value.push(list.value.length + 1);
        }
        loading.value = false;

        if (list.value.length >= 40) {
            finished.value = true;
        }
    }, 500);
};

const onRefresh = () => {
    finished.value = false;
    setTimeout(() => {
        Toast('刷新成功');
        loading.value = false;
    }, 1000);
    onLoad();
};
</script>

<style scoped>
::v-deep .van-tabs__line {
  background: #2d2823;
}
</style>