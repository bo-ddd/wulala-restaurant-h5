<template>
   <main class="mine-order">
   
    <MenuTitle.Wrapper v-model="selected" @tap="orderNav">
        <MenuTitle.Item v-for="(el,index) in NavList" :name="el.name" :key="index">
            {{ el.text }}</MenuTitle.Item>
        </MenuTitle.Wrapper>
    <RouterView />
    <div class="order-info wrap mt-15">
        <div class="order-name">
            <p class="timer">2022 10.10 12:30</p>
        </div>
        <div class="order-price">
            <img src="@/assets/images/xmz.png" alt="">
            <div class="price">
                <p class="name">小米粥,喝完迷糊的汤,清糖下火，非常good</p>
                <span class="money">￥21</span>
                <span class="piece">共一件</span>
            </div>
        </div>
        <Button class="btn" color="deepskyblue" bjcolor="#fff" border=".1rem solid deepskyblue">再来一单</Button>
    </div>
   </main>
  
</template>

<script lang="ts" setup>
import MenuTitle from "@/components/menuTitle"
   import useUtil from "@/assets/ulit";
   import { useRoute } from 'vue-router';
   import Nav from '@/components/nav'
   import useRecommendOrder from "./composables/MyofMsgList";
   let route = useRoute();
   let goodsName = '您访问的商品是：' + '商品' + route.query.text;

   let { NavList ,orderNav, selected } = useRecommendOrder();
   let { parsrAsssetFile } = useUtil();
   
</script>

<style scoped>
   .mt-15{
      margin-top: 1.5rem;
   }
   
   
   .mb-15{
      margin-bottom: 1.5rem;
   }

.nav-list{
    display: flex;
    justify-content: flex-start;
}


   .mine-order{
    min-height: 100%;
       background: #f8f8f8;
       overflow: hidden;
   }



   .order-info{
    background: #fff;
    border-radius: 1rem;
    overflow: hidden;
   }
   .order-name{
    display: flex;
    font-size: 1.4rem;
    align-items: center;
    padding: 2rem 1rem;
   }
   .timer{
    color: #ccc;
    font-size: 1.2rem;
   }
   .name{
        width:21rem;
        overflow: hidden; 
        white-space: nowrap; 
        text-overflow: ellipsis;
   }
   .order-price img{
    width: 10rem;
    border-radius: 1rem;
   }
   .order-price{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
   }
   .order-price p{
    text-align: right;
    font-size: 1.6rem;
   }
   .order-price span{
    font-size: 1.2rem;
    color: #bbb;
   }
   .btn{
    display: inline-block;
    padding: .4rem 1.8rem;
    float: right;
    margin: 1rem;
   }
   .money{
    font-size: 1.6rem !important;
    color: black !important;
   }
</style>