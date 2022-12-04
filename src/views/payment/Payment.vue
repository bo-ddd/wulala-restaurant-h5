<template>
    <div class="payment">
        <van-nav-bar title="提交订单" left-text="返回" left-arrow @click='onClickLeft'/>
        <div class="wrap">
            <div class="order-info">
                <div class="remaining-time-trade">
                    <div>交易剩余时间：</div>
                    <van-count-down :time="time" />
                </div>
                <div class="price"><span class="shift4">￥</span>{{ price }}.00</div>
            </div>
            <div class="payment-way">支付方式</div>
            <div>
                <div class="wechat-payment-way">
                    <div>
                        <img src="@/assets/images/WeChat-payment.png">
                        <span class="wechat-text">微信支付</span>
                    </div>  
                    <div>
                        <img src="@/assets/images/orderok_checked_false.png" class="payment-way-tf" v-show="isActiveOrderOk" @click="isActiveOrder">
                        <img src="@/assets/images/orderok_checked_true.png" class="payment-way-tf" v-show="isActiveOrderNoOk">
                    </div>
                </div>
                <div class="zfb-payment-way">
                    <div>
                        <img src="@/assets/images/zfb-way.png">
                        <span class="wechat-text">支付宝支付</span>
                    </div>
                    <img src="@/assets/images/orderok_checked_true.png" class="payment-way-tf" v-show="isActiveOrderOk" @click="isActiveOrder">
                    <img src="@/assets/images/orderok_checked_false.png" class="payment-way-tf" v-show="isActiveOrderNoOk">
                </div>
            </div>  
            <div class="wrap payment-btn">确认支付</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
//qina=23
const onClickLeft = () => history.back();
let route = useRoute();
let price = route.query.qina;//具体价格
const time = ref(1 * 60 * 60 * 1000);//倒计时
let isActiveOrderOk = ref(true);//选择
let isActiveOrderNoOk = ref(false);//未选择
const isActiveOrder = () => {
    if (isActiveOrderOk.value == true) {
        isActiveOrderOk.value = false;
        isActiveOrderNoOk.value = true;
    } else {
        isActiveOrderOk.value = true;
        isActiveOrderNoOk.value = false;
    }
}
</script>
<style scoped>
.payment {
    height: 100vh;
    box-sizing: border-box;
}

.order-info {
    height: 30vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.remaining-time-trade {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem
}

.payment-way {
    color: rgb(102, 102, 102);
    font-size: 1.6rem;
}

.wechat-payment-way {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 2rem;
}

.zfb-payment-way {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 2rem;
}

.WeChat-way {
    width: .1.8rem;
    height: 1.8rem;
}

.wechat-text {
    font-size: 1.6rem;
    margin-left: 1rem;
}

.payment-btn {
    background: rgb(255, 209, 1);
    color: black;
    font-size: 1.6rem;
    text-align: center;
    padding: 1rem 0;
    font-weight: 600;
    border-radius: 1rem;
    position: fixed;
    bottom: 20px;
}

.payment-way-tf {
    width: 2rem;
    height: 2rem;
}

.price {
    font-size: 5rem;
    font-weight: 900;
}

.shift4 {
    font-size: 2.6rem;
}

.van-count-down {
    font-size: 1.5rem;
}
</style>