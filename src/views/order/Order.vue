<template>
   <main class="mine-order">
   
    <MenuTitle.Wrapper v-model="selected" @tap="orderNav">
                <MenuTitle.Item v-for="(el,index) in NavList" :name="el.name" :key="index">
                {{ el.text }}</MenuTitle.Item>
            </MenuTitle.Wrapper>
    <RouterView />
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
   .Paid{
       background: #fff;
       border-radius: 1.2rem;
       overflow: hidden;
   }
   .payment-time{
       display: flex;
       justify-content: space-between;
       padding: 1.2rem 1.2rem 0 1.2rem;
   }
   .order{
    font-size: 1.5rem;
    font-weight: 600;
       padding: 1.8rem 1.5rem 1rem 1.5rem;
   }
   .time{
       color: #b3bbc6;
   }
   .payment-state{
       color: #6970bb;
   }

   .total{
       padding: 1.2rem;
       float: right;
       font-size: 1.4rem;
   }
   .price{
       color: #6970bb;
       font-size: 1.6rem;
   }
   .cancel-order_btn{
       padding: .6rem 1rem;
       font-size: 1.2rem;
       border: .1rem solid #eeefef;
       float: right;
       border-radius: 2rem;
       color: #a6a7a9;
   }
</style>