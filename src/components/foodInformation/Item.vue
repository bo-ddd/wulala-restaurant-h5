<template>
    <img class="food-details-png" :src='foodList.bannerUrl' alt="">
    <img class="icon-left" src="@/assets/images/icon-left.png" alt="" @click="backToPrevious">
    <div class="wrap">
        <div>
            <span class="text-details_food">{{ foodList.foodName }}</span>
            <div>
                <span class="details-food">约{{ foodList.price }}克</span>
                <span class="details-food">{{ foodList.price }}</span>
                <span class="details-food">有{{ foodList.price }}</span>
            </div>
            <div class="box-price">
                <span class="price—details_food"><span class="symbol">￥</span>{{ foodList.price }}</span>
                <span class="specifications-select" @click="showPopup">+选规格</span>
            </div>
        </div>
    </div>

    <van-popup v-model:show="show" closeable round position="bottom" :style="{ height: '40%' }">
        <div class="layer">
            <img :src="foodList.bannerUrl" alt="" />
            <div class="contents">
                <span class="balck">{{ foodList.foodName }}</span>
                <span class="red">￥{{ foodList.price }}</span>
            </div>
        </div>
        <div class="sum">
            <span>数量</span>
            <van-stepper v-model="value" />
        </div>
        <div class="button">
            <van-button round type="success" size="large" @click="toOrder">选好了</van-button>
        </div>
    </van-popup>
</template>
<script setup lang="ts">
import { getFoodListApi, cartAddApi } from '@/api/api'
import { ref } from "vue";
import { useRouter } from 'vue-router'
let router = useRouter()
const foodList: any = ref({})
let search = window.location.search
let foodId = search.split('=');
let id = foodId[1]
const show = ref(false);
const showPopup = () => { //弹出层
    show.value = true;
};

const value = ref(1);
let sessionStorageNull = sessionStorage.getItem('token')  //登录状态
let getCartAdd  = JSON.parse(localStorage.getItem('cartAdd')) //本地存储的数据
let getUserId = localStorage.getItem('userId')
let data: any = ref([])
const toOrder = () => {
    if (sessionStorageNull == null) { //没登录
        if (getCartAdd == null) { //没数据
            data.value.push({
                localId: data.value.length + 1,
                productId: id,
                quantity: value.value,
                isCheckeds: false
            })
            localStorage.setItem('cartAdd', JSON.stringify(data.value))
        } else {
            data.value.push({
                localId: data.value.length + 2,
                productId: id,
                quantity: value.value,
                isCheckeds: false
            })
            let datas = [...data.value, ...getCartAdd]
            localStorage.setItem('cartAdd', JSON.stringify(datas))
        }
    } else {
        cartAddApi({
            productId: id,
            quantity: value.value
        }).then(res => {
            console.log(res);
        })
    }
    show.value = false;
}


if (sessionStorageNull != null) {
    data.value.push({
        userId: getUserId
    })
}
// console.log(data.vlaue);
getFoodListApi({ //接口

}).then(res => {
    res.data.data.list.find((el: any) => {
        if (el.foodId == id) {
            foodList.value = el
        }
    });
})

const backToPrevious = function () {
    router.go(-1)
}
</script>

<style scoped>
.food-details-png {
    width: 100%;
    height: 25.1rem;
    position: relative;
}

.text-details_food {
    font-size: 1.7rem;
    font-weight: bold;
}

.details-food {
    font-size: 1.2rem;
    color: #868686;
    background-color: #f6f6f6;
    padding: .3rem .5rem;
    margin-right: .7rem;
    border-radius: .5rem;
}

.symbol {
    font-size: 1.7rem;
}

.price—details_food {
    color: #f4554e;
    font-weight: bold;
}

.box-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .7rem;

}

.specifications-select {
    font-size: 1.5rem;
    background-color: #ffd263;
    padding: .3rem .7rem;
    border-radius: .5rem;
    font-weight: 500;
}

.layer {
    display: flex;
    margin: 2rem;
}

.layer img {
    width: 10rem;
    height: 10rem;
}

.contents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 2rem;
}

.balck {
    font-size: 1.8rem;
    font-weight: 600;
}

.red {
    color: red;
    font-weight: 600;
}

.sum {
    display: flex;
    margin: 2rem;
    justify-content: space-between;
    font-size: 1.8rem;
    font-weight: 600;
}

.button {
    margin: 2rem;
}

.van-button--success {
    background-image: url(/src/assets/images/bj.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border: var(--van-button-border-width) solid var(--van-button-success-border-color);
}

.descriptions {
    font-size: 1.3rem;
    margin-top: -1rem;
    color: #bcbcb9;
}

.icon-left {
    position: absolute;
    top: 0;
    left: 0;
}
</style>