<template>
    <main>
        <div class="box-details_food">
            <img class="food-details-png" :src=parsrAsssetFile(data.imgUrl) alt="">
            <div class="wrap">
                <span class="text-details_food">{{data.title}}</span>
                <div>
                    <span class="details-food">约{{data.kg}}克</span>
                    <span class="details-food">{{data.taste}}</span>
                    <span class="details-food">{{data.garlic}}</span>
                </div>
                <div class="box-price">
                    <span class="price—details_food"><span class="symbol">￥</span>{{data.price}}</span>
                    <span class="specifications-select">+选规格</span>
                </div>
            </div>
        </div>

        <!-- top切换 -->
        
    </main>
</template>
<script setup lang="ts">
import BackToLast from "@/components/BackToLast.vue";

import { ref } from "vue";
import { useRouter } from 'vue-router'
import useUlit from '@/assets/ulit/index'
let { parsrAsssetFile } = useUlit()

let router = useRouter()
const foodList = [
    {
        goodsId: '1',
        imgUrl: 'yxrs.png',
        title: '鱼香肉丝盖饭',
        price: '13',
        kg: '1500',
        taste: '咸味',
        garlic: '有蒜'
    }, {
        goodsId: '2',
        imgUrl: 'jjrs.png',
        title: '尖椒肉丝盖饭',
        price: '12',
        kg: '1500',
        taste: '辣味',
        garlic: '有蒜'
    }, {
        goodsId: '3',
        imgUrl: 'gbjd.png',
        title: '宫保鸡丁盖饭',
        price: '13',
        kg: '1500',
        taste: '咸味',
        garlic: '有蒜'
    }, {
        goodsId: '4',
        imgUrl: 'hsqe(1).png',
        title: '红烧茄子盖饭',
        price: '11',
        kg: '1500',
        taste: '咸味',
        garlic: '有蒜'
    }, {
        goodsId: '5',
        imgUrl: 'rpm.png',
        title: '油泼面',
        price: '16',
        kg: '1500',
        taste: '咸味',
        garlic: '有蒜'
    }, {
        goodsId: '6',
        imgUrl: 'huimian.png',
        title: '烩面',
        price: '18',
        kg: '1500',
        taste: '咸味',
        garlic: '有蒜'
    }
]


// 路由传参
let search = window.location.search
let foodId = search.split('=');
let id = foodId[1]
const data: any = foodList.find(goods => goods.goodsId == id)
console.log(data);

let listData = ref([
    { title: '详情' },
    { title: '评价' }
])

let defaultIndex = ref(0)
</script>

<style scoped>
main {
    background-color: #f6f6f6;
    height: 100vh;
}

.box-details_food {
    background-color: #ffffff;
    padding-bottom: 1rem;
}

.food-details-png {
    width: 100%;
    height: 25.1rem;
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




/* ---------------------- */

</style>