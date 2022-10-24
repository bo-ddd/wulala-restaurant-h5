<template>
    <div class="box">
        <div class="box-search">
            <div>
                <van-icon name="arrow-left" @click="backtoLast" color="#FFFFFF" />
            </div>
            <div class="item">
                <van-search v-model="searchValue" shape="round" placeholder="麻辣香锅" >
                </van-search>
            </div>
        </div>
        <div class="box-text">
            <div class="content-wrapper wrap" v-for="(item) in data.tableDataTwo">
                <div class="content-item" @click="showPopup">
                    <div class="img">
                        <img :src="item.bannerUrl" alt="" />
                    </div>
                    <div class="content">
                        <span>{{ item.foodName }}</span><br />
                        <p class="description">{{ item.description }}</p>
                    </div>
                    <div class="price">
                        <span class="prices">￥{{ item.price }}</span>
                    </div>
                </div>
            </div>
            <van-popup v-model:show="show" closeable round position="bottom" :style="{ height: '40%' }">
                <div class="layer" v-for="(item) in data.tableDataTwo">
                    <img :src="item.bannerUrl" alt="" />
                    <div class="contents">
                        <span class="balck">{{  item.foodName }}</span>
                        <span class="descriptions">{{item.description}}</span>
                        <span class="red">￥{{ item.price }}</span>
                    </div>
                </div>
                <div class="sum">
                    <span>数量</span>
                    <van-stepper v-model="value" />
                </div>
                <div class="button">
                    <van-button round type="success" size="large">选好了</van-button>
                </div>
            </van-popup>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import { useRouter } from 'vue-router'
import { getFoodListApi } from '@/api/api'
const show = ref(false);
const showPopup = () => {
    show.value = true;
};
const value = ref(1);

let router = useRouter()
const searchValue = ref('');//搜索框数据绑定
watch(searchValue, (a, b) => {
    if (a == '') {
        data.tableDataTwo = []
    } else {
        getFoodListApi({}).then(res => {
            data.bestSellers = res.data.data.list //数据

            let sea = searchValue.value
            if (sea) {
                data.tableDataTwo = data.bestSellers.filter((item) => {
                    return Object.keys(item).some(function () {
                        return String(item['foodName']).toLowerCase().indexOf(sea) > -1
                    })
                })
            }
        })
    }

})
let data = reactive({
    bestSellers: [],
    tableDataTwo: [],
})
const backtoLast = function () {
    router.go(-1)
}

</script>
<style scoped>
.box {
    background-image: url('@/assets/images/bj.png');
    background-repeat: no-repeat;
    background-size: 100% 75%;
    min-height: 100%;
}

.box-search {
    display: flex;
    align-items: center;
    padding-top: 1.8rem;
}

.item {
    width: 80%;
    margin-left: 2rem;
}

.box-text {
    margin-top: 1.4rem;
    height: 10rem;
    background-color: #fff;
    padding-top: .5rem;
}

.content-item {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    justify-content: space-between;
    font-size: 1.8rem;
    font-weight: 600;
    border-bottom: 0.2rem solid #ececec;
}

.img img {
    width: 10.5rem;
    height: 8.5rem;
    border-radius: 1rem;
}

.content {
    margin-right: 5rem;
}

.description {
    font-size: 1.2rem;
    font-weight: 500;
    color: #bcbcb9;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 10rem;
    margin-top: 2rem;
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
.prices{
    display: inline-block;
    margin-top: 3.7rem;
}

</style>