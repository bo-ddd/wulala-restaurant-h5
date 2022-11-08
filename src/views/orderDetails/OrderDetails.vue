<template>
    <van-nav-bar title="提交订单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="box-1">
        <div class="wrap box-item mt-20">
            <van-cell is-link @click="showPopup">
                <div>小顶创业 城管局后小鹿韩餐</div>
                <div>
                    <span>周 先生</span>
                    <span>18888888888</span>
                </div>
            </van-cell>
            <van-popup v-model:show="show" position="bottom" :style="{ height: '40%' }">
                <div class="wrap">
                    <van-button class="btn wrap" type="default">新增收货地址</van-button>
                </div>
            </van-popup>
            <div class="box-shopping mt-20" v-for="item in foodList">
                <div class="box-food_png">
                    <img class="food-png" :src="item.bannerUrl" alt="" />
                </div>
                <div class="ml-10 box">
                    <div class="name">
                        <span class="text">{{ item.productName }}</span>
                    </div>
                    <div class="specifications">
                        <span class="text"> 规格：</span>
                    </div>

                    <div class="box-price">
                        <div>
                            <span class="price"><span class="symbol">￥</span>{{ item.originalPrice }}</span>
                        </div>
                        <div class="box-btn">
                            <span class="text">{{ '数量：' + item.quantity }}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="pp wrap">
        <span class="payment">支付金额：<span class="price"><span class="symbol">￥</span>{{ qina }}</span> </span>
        <span class="to-payment">立即支付</span>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
let route = useRoute()
const onClickLeft = () => history.back();
const show = ref(false);
const showPopup = () => {
    show.value = true;
};
let foodList = JSON.parse(localStorage.getItem('item'))
let qina = ref(0)
foodList.forEach((item: any) => {
    qina.value += item.quantity * item.originalPrice
})

</script>
<style scoped>
.box-1 {
    background-color: #f5f5f5;
    height: calc(100vh - 10rem);
    overflow-y: scroll;
}

::v-deep.van-nav-bar .van-icon {
    color: black;
}

::v-deep.van-popup--bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    position: relative;
}

.btn {
    width: 100%;
    background-color: #f5f5f5f5;
    /* position: absolute;
    bottom: 0;
    right: 0; */
}


.icon-ip {
    width: 2rem;
    height: 2rem;
    vertical-align: middle;
}

::v-deep.van-button--normal {
    padding: var(--van-button-normal-padding);
    font-size: var(--van-button-normal-font-size);
    vertical-align: middle;
}

::v-deep.van-cell {
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem .5rem;
    overflow: hidden;
    color: var(--van-cell-text-color);
    font-size: var(--van-cell-font-size);
    line-height: var(--van-cell-line-height);
    background: var(--van-cell-background-color);
    border-radius: .5rem;
}

.box-shopping {
    display: flex;
    background-color: #fff;
    border-radius: 1rem;
    padding: 1rem .5rem;
}

.box {
    /* width: 100%;*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.2rem 1rem;
    flex-grow: 1;
}

.name {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.specifications {
    display: flex;
}

.box-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 1.4rem;
}

.symbol {
    font-size: 1.4rem;
}

.price {
    font-size: 2rem;
    color: red;
}

.food-png {
    width: 9rem;
    height: 9rem;
    border-radius: 1rem;
}

.pp {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5.4rem;
}

.payment {
    font-size: 1.4rem;
}

.to-payment {
    display: inline-block;
    font-size: 1.8rem;
    background-color: pink;
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    font-weight: bold;
}
</style>