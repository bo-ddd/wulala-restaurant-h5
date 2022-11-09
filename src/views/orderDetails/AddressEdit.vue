<template>
    <main>
    <van-nav-bar title="地址编辑" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- 定位 -->
    <div  v-if="item == undefined" class="nav">选择收货地址></div>
    <div class="address" v-else>
        <div class="address-content">
            <p>张三</p>
            <p>xxxxxxxccc</p>
        </div>
        <div class="address-btn">修改地址</div>
    </div>
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        />
    </main>
</template>

<script lang="ts" setup>
import { areaList } from '@vant/area-data';
import { ref } from 'vue';
import { Toast } from 'vant';
import {useRoute} from 'vue-router';
let route = useRoute();
const searchResult :any = ref([]);

const onClickLeft = () => history.back();
const onSave = () => Toast('save');
const onDelete = () => Toast('delete');

const onChangeDetail = (val: any) => {
      if (val) {
        searchResult.value = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区',
        }];
      } else {
        searchResult.value = [];
    }
    };
let item = route.query.item;
console.log(item);


</script>

<style scoped>
main{
    background: #f4f4f4;
    min-height: 100vh;
}
.nav{
    text-align: center;
    padding: 1rem 0;
    border-radius: 1rem;
    border: .1rem solid sandybrown;
    color: sandybrown;
    background-color: #fff;
    font-size:1.4rem;
    margin: 2rem 2rem 0 2rem;
}
.address{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 1rem;
    font-size:1.6rem;
    margin: 2rem 2rem 0 2rem;
    padding: 1rem;
}
.address-btn{
    border-radius: .5rem;
    border: .1rem solid sandybrown;
    font-size:1.2rem;
    padding: .5rem 1rem;
    color: sandybrown;
}
</style>