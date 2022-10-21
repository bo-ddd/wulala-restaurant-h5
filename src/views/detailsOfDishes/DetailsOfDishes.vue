<template>
    <main>

        <FoodInformation.Wrapper>
            <FoodInformation.Item ></FoodInformation.Item>
        </FoodInformation.Wrapper>


        <van-tabs v-model:active="active" class="mt-14">
            <van-tab title="详情">
                <FoodDetails.Wrappar>
                    <FoodDetails.Item :data="foodList"></FoodDetails.Item>
                </FoodDetails.Wrappar>
            </van-tab>
            <van-tab title="评价">
                <div class="line-top pt-10">
                    <div class="box-evaluate wrap">
                        <div class="user-avatar">
                            <img class="oo" src="@/assets/images/zaocan.png" alt="">
                        </div>
                        <div class="user-name">飞腿女将军</div>
                    </div>
                    <div class=" box-text wrap">
                        <span class="text">量挺多的,味道也不错,值得推荐</span>
                    </div>
                </div>
            </van-tab>

        </van-tabs>
    </main>
</template>
<script setup lang="ts">
import FoodInformation from '@/components/foodInformation'
import FoodDetails from '@/components/foodDetails'
import { getFoodListApi } from '@/api/api'
import { ref } from "vue";
import { useRouter } from 'vue-router'

const active = ref(0);
let router = useRouter()

const foodList = ref({})
//  [
// {
//     goodsId: '1',
//     imgUrl: 'yxrs.png',
//     title: '鱼香肉丝盖饭',
//     price: '13',
//     kg: '1500',
//     taste: '咸味',
//     garlic: '蒜苔',
//     mainMaterials: '猪肉',
//     meatAndVegetable: '荤',
// }, {
//     goodsId: '2',
//     imgUrl: 'jjrs.png',
//     title: '尖椒肉丝盖饭',
//     price: '12',
//     kg: '1500',
//     taste: '辣味',
//     garlic: '蒜',
//     mainMaterials: '猪肉',
//     meatAndVegetable: '荤',


// }, {
//     goodsId: '3',
//     imgUrl: 'gbjd.png',
//     title: '宫保鸡丁盖饭',
//     price: '13',
//     kg: '1500',
//     taste: '咸味',
//     garlic: '蒜',
//     mainMaterials: '鸡肉',
//     meatAndVegetable: '荤',


// }, {
//     goodsId: '4',
//     imgUrl: 'hsqe(1).png',
//     title: '红烧茄子盖饭',
//     price: '11',
//     kg: '1500',
//     taste: '咸味',
//     garlic: '蒜',
//     mainMaterials: '茄子',
//     meatAndVegetable: '素',
// }, {
//     goodsId: '5',
//     imgUrl: 'rpm.png',
//     title: '油泼面',
//     price: '16',
//     kg: '1500',
//     taste: '咸味',
//     garlic: '蒜',
//     mainMaterials: '面',
//     meatAndVegetable: '素',
// }, {
//     goodsId: '6',
//     imgUrl: 'huimian.png',
//     title: '烩面',
//     price: '18',
//     kg: '1500',
//     taste: '咸味',
//     garlic: '蒜',
//     mainMaterials: '面',
//     meatAndVegetable: '素',
// }
// ]

// -------------------


// -------------------
// 路由传参
let search = window.location.search
let foodId = search.split('=');
let id = foodId[1]

</script>

<style scoped>
main {
    background-color: #f6f6f6;
    height: 100vh;
    overflow-y: scroll;
}

.line-top {
    border-top: .1rem solid #f2f2f2;
}

.pt-10 {
    padding-bottom: 1rem;
}

.box-evaluate {
    display: flex;
    align-items: center;
    margin-top: 1.4rem;
}

.user-avatar {
    width: 3rem;
    height: 3rem;
    background-color: pink;
    border-radius: 50%;
    margin-right: 1.2rem;
}

.user-name {
    font-size: 1.6rem;
    font-weight: bold;
}

.oo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.text {
    font-size: 1.4rem;
    margin-left: 4.2rem;
}

.box-text {
    border-bottom: .1rem #f2f2f2 solid;
    padding-bottom: 1rem;
}
</style>