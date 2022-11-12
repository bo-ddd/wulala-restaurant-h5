<template>
    <van-nav-bar title="提交订单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="box-1">
        <div class="wrap box-item mt-20">
            <van-cell is-link @click="showPopup">
                <div>小顶创业 城管局后小鹿韩餐</div>
                <div>
                    <span>{{ useinfo.name }}</span>
                    <span>18888888888</span>
                </div>
            </van-cell>
            <van-popup class="popup" v-model:show="show" position="bottom" :style="{ height: '90%' }">
                <div class="wrap">
                    <p class="title">选择收货地址</p>
                    <van-address-list v-model="chosenAddressId" :list="list" :disabled-list="disabledList"
                        disabled-text="以下地址超出配送范围" default="你好" default-tag-text="默认" @add="onAdd" @edit="onEdit"
                        @select='onSelect' />
                    <!-- <van-button class="btn wrap" type="default">新增收货地址</van-button> -->
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
import { Toast } from 'vant';
import { useRoute, useRouter } from 'vue-router'
import { getDeliveryListApi } from '@/api/api'
import { areaList } from '@vant/area-data';

let route = useRoute();
let router = useRouter();

const onAdd = function () {
    router.push({ name: 'addressedit' })
};
const onEdit = function (item: any, index: string) {
    router.push({ name: 'modifyAddress', query: { 'name': item.name, 'id': item.id, 'tel': item.tel } })
};
let useinfo = ref({})
const onSelect = (item: any, index: number) => {   //选中的数据
    console.log(item.name);
    useinfo.value = item
};
const chosenAddressId = ref('');

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
let aa = []
let provinceList = areaList.province_list; // 省
let cityList = areaList.city_list;//市
let countyList = areaList.county_list;//区
const list: any = ref([])
getDeliveryListApi({}).then(res => {
    res.data.data.forEach((el: any) => {
        list.value.push({
            id: el.id,
            name: el.receiver,
            tel: el.phoneNumber,
            address: provinceList[el.provinceCode] + cityList[el.cityCode] + countyList[el.areaCode] + el.address,
            isDefault: el.isDefaultActive ? true : false,
        })

    })
    console.log(list.value);
    list.value.forEach((el: any ,index) => {
        if (el.isDefault) {
            chosenAddressId.value = el.id
         aa = el
         console.log(aa);
onSelect(el,index)

        }
    })
})


const disabledList = [
    {
        id: '3',
        name: '王五',
        tel: '1320000000',
        address: '浙江省杭州市滨江区江南大道 15 号',
    },
];

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

.title {
    font-size: 1.4rem;
    color: black;
    text-align: center;
    padding: 1rem 0;
}

::v-deep .van-popup--bottom {
    border-radius: 2rem 2rem 0 0;
}
</style>