<template>
    <div class="home">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">

            <div class=" box-search wrap pt-18">
                <van-search v-model="value" shape="round" placeholder="麻辣香锅" @click="toSearch">
                </van-search>
            </div>
            <Silder.Wrapper class="wrap mt-14">
                <Silder.Banner :src="parsrAsssetFile('banaer-1.png')"></Silder.Banner>
                <Silder.Banner :src="parsrAsssetFile('banaer-2.png')"></Silder.Banner>
                <Silder.Banner :src="parsrAsssetFile('banaer-3.png')"></Silder.Banner>
                <Silder.Banner :src="parsrAsssetFile('banaer-4.png')"></Silder.Banner>
                <Silder.Banner :src="parsrAsssetFile('banaer-5.png')"></Silder.Banner>
            </Silder.Wrapper>

            <!-- 开启点餐之旅 -->
            <HomeBtn.Wrapper class="mt-14">
                <HomeBtn.Item :src="parsrAsssetFile('btn-order.png')"></HomeBtn.Item>
            </HomeBtn.Wrapper>


            <div class=" wrap box-ranking mt-14">
                <div>
                    <div class="ranking breakfast-bj">
                        <img class="icon-ranking" src="@/assets/images/icon-ranking.png" alt="">
                        <span class="=text-ranking">早餐排名</span>
                    </div>
                    <div class="ranking wan mt-14 ">
                        <img class="icon-ranking" src="@/assets/images/icon-ranking.png" alt="">
                        <span class="=text-ranking">晚餐排名</span>
                    </div>
                </div>
                <div class="ranking  lunch-bj ">
                    <img class="icon-ranking" src="@/assets/images/icon-ranking.png" alt="">
                    <span class="pd-tb_43">午餐排名</span>
                </div>
            </div>
            <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">

                <BestSellers.Wrapper class="wrap mt-14">
                    <Title class="mt-14" level="2" color="#f6e6dd">今日推荐</Title>
                    <p class="commodity">12件商品</p>
                    <BestSellers.Item class="mt-14" v-for="item in bestSellers"
                        @click="toevaluate('detailsOfDishes', item.foodId)">
                        <template #image>
                            <img class="best-sellers_png" v-lazy="item.bannerUrl" alt="" />
                        </template>
                        <template #description>
                            <div class="description">
                                <div class="title-best_sellers">{{ item.foodName }}</div>
                                <div class="box-evaluate">
                                    <div class="price">
                                        ￥{{ item.price }}
                                    </div>
                                </div>
                            </div>
                        </template>
                    </BestSellers.Item>
                </BestSellers.Wrapper>
            </van-list>
        </van-pull-refresh>


    </div>

</template>
<script setup lang="ts">
import Silder from '@/components/slider'
import BestSellers from '@/components/bestSellers'
import Title from '@/components/Title.vue'
import useUlit from '@/assets/ulit/index'
import HomeBtn from '@/components/homeBtn'
import { Toast } from 'vant';
import { getFoodListApi, userInfoApi } from '@/api/api'
import { ref } from 'vue';
import { useRouter } from 'vue-router'
let { parsrAsssetFile } = useUlit()
let bestSellers: any = ref({})
let router = useRouter()
const value = ref('');
const toevaluate = function (name: string, foodId: number) {
    window.location.href = `/detailsOfDishes?foodId=${foodId}`
}
const toSearch = function () {
    router.push('search')
}

userInfoApi({}).then(res => {
    localStorage.setItem('userId', res.data.data.userId)
})

const list: any = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = () => {
    getFoodListApi({}).then(res => {
        bestSellers.value = res.data.data.list
        })
    setTimeout(() => {
        if (refreshing.value) {
            list.value = [];
            refreshing.value = false;
        }

        for (let i = 0; i < 10; i++) {
            list.value.push(list.value.length + 1);
        }
        loading.value = false;

        if (list.value.length >= 40) {
            finished.value = true;
        }
    }, 500);
};

const onRefresh = () => {
    finished.value = false;
    setTimeout(() => {
        Toast('刷新成功');
        loading.value = false;
    }, 1000);
    onLoad();
};
</script>
<style scoped>
.box-evaluate {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box-evaluate span {
    font-size: 1.4rem;
    color: #f88d4c;
    font-weight: bold;
}

.icon-evaluate {
    width: 2rem;
    vertical-align: middle;
}

.home {
    background-image: url('@/assets/images/bj.png');
    background-size: 100% 12%;
    background-repeat: no-repeat;
    min-height: 100%;
    background-color: #f5f5f5;
}

.btn-order {
    width: 75%;
    display: inline-block;
    padding: 0 1.5rem;
    background-color: #212111;
    border-radius: 2rem;
}

.box-ranking {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 1rem 1rem;
    border-radius: 1rem;
}

.ranking {
    display: flex;
    width: 16rem;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    font-size: 1.8rem;
    padding: 2.3rem 0;
    color: #f6e6dd;
    font-weight: bold;
}

.breakfast-bj {
    background-image: url('@/assets/images/bj.png');
    background-size: 100%;
}

.lunch-bj {
    background-image: url('@/assets/images/bj.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.wan {
    background-image: url('@/assets/images/bj.png');
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
    background-color: #f5f5f5;
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
    width: 16.2rem;
    height: 12rem;
    display: inline-block;
    border-radius: 1rem 1rem 0 0;
}

.search-btn {
    background-color: #2d2823;
    width: 3rem;
    padding: .5rem 1.2rem;
    font-size: 1.4rem;
    border-radius: 2rem;
    display: inline-block;
    text-align: center;
    color: white;
    font-weight: 550;
}

.box-search {
    position: relative;
}
</style>