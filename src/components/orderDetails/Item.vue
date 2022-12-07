<template>
    <div class="time-box">
        <div class="item-time">下单时间:{{list.createdAt}}</div>
        <div class="state" v-if="(list.orderStatus == 0)">待付款</div>
    </div>
    <hr/>
    <van-row @click="toOrderData">
        <van-col span="18">
            <div class="item-data" v-for="(item,i) in list.rows" :key="i">
                <img class="item-img" :src="item.bannerUrl" alt="">
                <span class="item-name">{{item.productName}}</span>
            </div>
        </van-col>
        <van-col span="6">
            <div class="total">共计{{list.rows.length}}件</div>
        </van-col>
    </van-row>
    <div class="box-total_price">
        <div><span class="total-price">合计</span><span class="price">￥{{list.amount}}</span></div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
    import { useRouter } from 'vue-router';
    let router = useRouter()
   const toOrderData = function (){
router.push({name:'orderdata', query: { orderid: list.orderStatus } })
   }

   const props = defineProps<{
    list:any
   }>()
   let { list } = props
//    console.log(list);
   
</script>
<style scoped>
.item-img {
    width: 8.5rem;
    height: 6rem;
}

.item-time {
    font-size: 1.5rem;
    font-weight: 600;

}

.item-data {
    margin-bottom: 1rem;
}

.item-name {
    font-size: 1.4rem;
    margin-left: .5rem;
}

.total {
    font-size: 1.4rem;
}

.state {
    font-size: 1.2rem;
    color: rgb(48, 48, 48);
}

.time-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.total-price {
    font-size: 1.2rem;
    color: rgb(48, 48, 48);

}

.price {
    font-size: 1.6rem;
    font-weight: 600;
    color: rgb(10, 8, 8);
}

.box-total_price {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>