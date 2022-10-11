<template>
   <main class="mine-order">
       <Title color="black" class="order">全部订单</Title>
       <!-- 已付款商品 -->
       <div class="Paid wrap mt-15 mb-15">
           <!-- 付款payment时间time-->
           <div class="payment-time">
               <p class="time">2019-06-30 11:50</p>
               <p class="payment-state">买家已付款</p>
           </div>
           <List :icon="parsrAsssetFile('icon-nav_1.png')">
               这是商品名称这是商品名称这是商品名称这是商品名称
               <template #price>
                   ￥300.00
               </template>
               <template #quantity>
                   1
               </template>
               <template #model>
                   款式，型号
               </template>
           </List>
           <List :icon="parsrAsssetFile('icon-nav_1.png')">
               这是商品名称这是商品名称这是商品名称这是商品名称
               <template #price>
                   ￥300.00
               </template>
               <template #quantity>
                   1
               </template>
               <template #model>
                   款式，型号
               </template>
           </List>
           <List :icon="parsrAsssetFile('icon-nav_1.png')">
               这是商品名称这是商品名称这是商品名称这是商品名称
               <template #price>
                   ￥300.00
               </template>
               <template #quantity>
                   1
               </template>
               <template #model>
                   款式，型号
               </template>
           </List>
           <!-- 共计商品 total-goods 取消订单 cancel-order -->
           <div class="total">
               <p>共计{{3}}件产品 共计 : <span class="price">￥900.00</span></p>
               <div class="cancel-order_btn mt-15">取消订单</div>
           </div>
       </div>
       <div class="Paid wrap mt-15 mb-15">
           <!-- 付款payment时间time-->
           <div class="payment-time">
               <p class="time">2019-06-30 11:50</p>
               <p class="payment-state">交易成功</p>
           </div>
           <List :icon="parsrAsssetFile('icon-nav_1.png')">
               这是商品名称这是商品名称这是商品名称这是商品名称
               <template #price>
                   ￥300.00
               </template>
               <template #quantity>
                   1
               </template>
           </List>
           <List :icon="parsrAsssetFile('icon-nav_1.png')">
               这是商品名称这是商品名称这是商品名称这是商品名称
               <template #price>
                   ￥300.00
               </template>
               <template #quantity>
                   1
               </template>
           </List>
           <List :icon="parsrAsssetFile('icon-nav_1.png')">
               这是商品名称这是商品名称这是商品名称这是商品名称
               <template #price>
                   ￥300.00
               </template>
               <template #quantity>
                   1
               </template>
           </List>
           <!-- 共计商品 total-goods 取消订单 cancel-order -->
           <div class="total">
               <p>共计{{3}}件产品 共计 : <span class="price">￥900.00</span></p>
               <div class="cancel-order_btn mt-15">取消订单</div>
           </div>
       </div>
   </main>
</template>

<script lang="ts" setup>
   import useUtil from "@/assets/ulit";
   import { useRoute } from 'vue-router';
import Title from '../../components/Title.vue';
   let route = useRoute();
   let goodsName = '您访问的商品是：' + '商品' + route.query.text;

   let { parsrAsssetFile } = useUtil();
</script>

<style scoped>
   .mt-15{
      margin-top: 1.5rem;
   }
   
   
   .mb-15{
      margin-bottom: 1.5rem;
   }




   .mine-order{
       background: #f5f8ff;
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
       background-color: #fff;
       padding: 1.2rem 1.5rem;
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