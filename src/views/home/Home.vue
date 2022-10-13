<template>
    <div class="home">
        <Search.Wrapper class=" wrap pt-18">
            <Search.Iptup placeholder="麻辣香锅"> </Search.Iptup>
        </Search.Wrapper>

        <Silder.Wrapper class="wrap mt-16">
            <Silder.Banner :src="parsrAsssetFile('banaer-1.png')"></Silder.Banner>
            <Silder.Banner :src="parsrAsssetFile('banaer-2.png')"></Silder.Banner>
            <Silder.Banner :src="parsrAsssetFile('banaer-3.png')"></Silder.Banner>
            <Silder.Banner :src="parsrAsssetFile('banaer-4.png')"></Silder.Banner>
            <Silder.Banner :src="parsrAsssetFile('banaer-5.png')"></Silder.Banner>
        </Silder.Wrapper>

        <div class="box-button mt-16 wrap">
            <Button class="btn-pd" color="#ffffff" bjcolor="#fb7b2c" @click="onOrder">开启点餐之旅===></Button>
        </div>

        <div class=" wrap box-ranking mt-16 ">
            <div>
                <div class="ranking breakfast-bj">
                    <img class="icon-ranking" src="@/assets/images/icon-ranking.png" alt="">
                    <span>早餐排名</span>
                </div>
                <div class="ranking wan mt-16 ">
                    <img class="icon-ranking" src="@/assets/images/icon-ranking.png" alt="">
                    <span>晚餐排名</span>
                </div>
            </div>
            <div class="ranking  lunch-bj ">
                <img class="icon-ranking" src="@/assets/images/icon-ranking.png" alt="">
                <span class="pd-tb_50">午餐排名</span>
            </div>
        </div>
        
        
        <div class="ok wrap mt-16">
            <BestSellers.Wrapper class="wrap">
                <Title class="mt-16" level="2" color="block">今日推荐</Title>
                <p class="commodity">12件商品</p>
                <BestSellers.Item class="mt-16" v-for="item in bestSellers">
                    <template #image>
                        <img class="best-sellers_png" :src="parsrAsssetFile(item.imgUrl)" alt="" />
                    </template>
                    <template #description>
                        <div class="description">
                            <div class="title-best_sellers">{{item.title}}</div>
                            <div class="price">￥{{item.price}}</div>
                        </div>
                    </template>
                </BestSellers.Item>
            </BestSellers.Wrapper>
        </div>


    </div>
</template>
<script setup lang="ts">
import Search from '@/components/search'
import Silder from '@/components/slider'
import Button from "@/components/Button.vue";
import BestSellers from '@/components/bestSellers'
import Title from '@/components/Title.vue'

import useUlit from '@/assets/ulit/index'
import { useRouter } from 'vue-router'
let router = useRouter()
let { parsrAsssetFile } = useUlit()
const onOrder = function () {
    router.push('menu')
}

const bestSellers = [
    {
        goodsId: 1,
        imgUrl: 'yxrs.png',
        title: '鱼香肉丝盖饭',
        price: '13',
    },
    {
        goodsId: 2,
        imgUrl: 'jjrs.png',
        title: '尖椒肉丝盖饭',
        price: '12',
    },
    {
        goodsId: 3,
        imgUrl: 'gbjd.png',
        title: '宫保鸡丁盖饭',
        price: '13',
        quantity: '20111'
    },
    {
        goodsId: 4,
        imgUrl: 'hsqe(1).png',
        title: '红烧茄子盖饭',
        price: '11',
    },
    {
        goodsId: 5,
        imgUrl: 'rpm.png',
        title: '油泼面',
        price: '16',
    },
    {
        goodsId: 6,
        imgUrl: 'huimian.png',
        title: '烩面',
        price: '18',
    }
]
</script>
<style scoped>
.home {
    background-image: url('@/assets/images/bj.jpg');
    background-size: 100% 14%;
    background-repeat: no-repeat;
    min-height: 100%;
}
.ok{
    background-color: #f5f5f5;
    border-radius: 1rem;
}
.box-button {
    display: flex;
    justify-content: center;
    align-items: center
}

.box-ranking {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ranking {
    width: 17rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    font-size: 1.8rem;
    padding: 3rem 0;
    color: white;
    font-weight: bold;
}

.breakfast-bj {
    background-image: url('@/assets/images/zaocan.png');
    background-size: 100%;
}

.lunch-bj {
    background-image: url('@/assets/images/icon-lunch_bj.webp');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.wan {
    background-image: url('@/assets/images/wan.webp');
    background-size: 100%;
    background-repeat: no-repeat;
}

.icon-ranking {
    width: 2rem;
}

.box-best_sellers {
    width: 100%;
    background-color: #f6f7ff;
    border-radius: 3rem 3rem 0 0;

}

.description {
    padding: 1rem;
    background-color: #fff;
    font-size: 1.6rem;
    border-radius: 0 0 1rem 1rem;
}

.title-best_sellers {
    font-weight: bold;
}

.description .price {
    font-weight: bold;
    padding: 1rem 0;
}

.description .quantity-best_sellers {
    font-size: 1.2rem;
    color: #aeaeae;
    font-weight: 100;
}

.commodity {
    font-size: 1.2rem;
    color: #aeaeae;
    font-weight: 100;
}

.best-sellers_png {
    width: 100%;
    height: 12rem;
    display: inline-block;
    border-radius: 1rem 1rem 0 0;
}
</style>