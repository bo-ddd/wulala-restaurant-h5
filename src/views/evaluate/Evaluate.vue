<template>
    <main>
        <div class="box-details_food">
            <img class="food-details-png" :src=parsrAsssetFile(data.imgUrl) alt="">
            <div class="wrap">
                <span class="text-details_food">{{data.title}}</span>
                <div>
                    <span class="details-food">约{{data.kg}}克</span>
                    <span class="details-food">{{data.taste}}</span>
                    <span class="details-food">有{{data.garlic}}</span>
                </div>
                <div class="box-price">
                    <span class="price—details_food"><span class="symbol">￥</span>{{data.price}}</span>
                    <span class="specifications-select">+选规格</span>
                </div>
            </div>
        </div>

        <div class="box-information_food mt-14">
            <van-tabs v-model:active="active">
                <van-tab title="详情">
                    <div class="wrap">
                        <div><span class="main-materials">主料:</span><span
                                class="text-main_materials">{{data.mainMaterials}}</span></div>
                        <div><span class="main-materials">辅料:</span><span
                                class="text-main_materials">{{data.garlic}}</span>
                        </div>
                        <div><span class="main-materials">荤素:</span><span
                                class="text-main_materials">{{data.meatAndVegetable}}</span></div>
                        <div><span class="main-materials">份量:</span><span
                                class="text-main_materials">约{{data.kg}}克</span>
                        </div>
                        <div><span class="main-materials">口味:</span><span
                                class="text-main_materials">{{data.taste}}</span>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="评价">
                    <div class="wrap">
                        <span>这个面面超好吃</span>
                        <span>这个面面超好吃</span>
                        <span>这个面面超好吃</span>
                        <span>这个面面超好吃</span>
                        <span>这个面面超好吃</span>
                        <span>这个面面超好吃</span>
                        <span>这个面面超好吃</span>
                        <span>这个面面超好吃</span>
                    </div>
                </van-tab>


            </van-tabs>

            <div class="box-text wrap">
                <!-- <span class="details">详情</span>
                <span class="text">评价</span>
                <div class="lien"></div> -->
            </div>
            <div class="line-top mt-10">
                <!-- <div class="wrap">
                    <div><span class="main-materials">主料:</span><span
                            class="text-main_materials">{{data.mainMaterials}}</span></div>
                    <div><span class="main-materials">辅料:</span><span class="text-main_materials">{{data.garlic}}</span>
                    </div>
                    <div><span class="main-materials">荤素:</span><span
                            class="text-main_materials">{{data.meatAndVegetable}}</span></div>
                    <div><span class="main-materials">份量:</span><span class="text-main_materials">约{{data.kg}}克</span>
                    </div>
                    <div><span class="main-materials">口味:</span><span class="text-main_materials">{{data.taste}}</span>
                    </div>
                </div> -->
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import BackToLast from "@/components/BackToLast.vue";

import { nextTick, ref } from "vue";
import { useRouter } from 'vue-router'
import useUlit from '@/assets/ulit/index'
let { parsrAsssetFile } = useUlit()
const active = ref(0);
let router = useRouter()
const foodList = [
    {
        goodsId: '1',
        imgUrl: 'yxrs.png',
        title: '鱼香肉丝盖饭',
        price: '13',
        kg: '1500',
        taste: '咸味',
        garlic: '蒜苔',
        mainMaterials: '猪肉',
        meatAndVegetable: '荤',
    }, {
        goodsId: '2',
        imgUrl: 'jjrs.png',
        title: '尖椒肉丝盖饭',
        price: '12',
        kg: '1500',
        taste: '辣味',
        garlic: '蒜',
        mainMaterials: '猪肉',
        meatAndVegetable: '荤',


    }, {
        goodsId: '3',
        imgUrl: 'gbjd.png',
        title: '宫保鸡丁盖饭',
        price: '13',
        kg: '1500',
        taste: '咸味',
        garlic: '蒜',
        mainMaterials: '鸡肉',
        meatAndVegetable: '荤',


    }, {
        goodsId: '4',
        imgUrl: 'hsqe(1).png',
        title: '红烧茄子盖饭',
        price: '11',
        kg: '1500',
        taste: '咸味',
        garlic: '蒜',
        mainMaterials: '茄子',
        meatAndVegetable: '素',
    }, {
        goodsId: '5',
        imgUrl: 'rpm.png',
        title: '油泼面',
        price: '16',
        kg: '1500',
        taste: '咸味',
        garlic: '蒜',
        mainMaterials: '面',
        meatAndVegetable: '素',
    }, {
        goodsId: '6',
        imgUrl: 'huimian.png',
        title: '烩面',
        price: '18',
        kg: '1500',
        taste: '咸味',
        garlic: '蒜',
        mainMaterials: '面',
        meatAndVegetable: '素',
    }
]

// 路由传参
let search = window.location.search
let foodId = search.split('=');
let id = foodId[1]
const data: any = foodList.find(goods => goods.goodsId == id)
console.log(data);

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
.box-information_food {
    background-color: #ffffff;
}

.box-text {
    position: relative;
}

.text {
    font-size: 1.6rem;
    margin-right: 1.5rem;
    color: #888888;
}

.details {
    font-size: 1.6rem;
    margin-right: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

.main-materials {
    color: #969696;
    font-size: 1.2rem;
}

.line-top {
    border-top: .1rem solid #f2f2f2;
}

/* .top-switch {
    display: flex;
    justify-content: flex-start;
}


.lh {
    color: red;
}*/

.lien {
    width: 2.5rem;
    height: .3rem;
    transition: all 1ms;
    background-color: #ffd263;
    position: absolute;
    left: -6.8rem;
    bottom: -.5rem;
    transform: translateX(7rem);
    border-radius: 1rem;
}

.text-main_materials {
    font-size: 1.2rem;
    margin-left: 3rem;
}
</style>