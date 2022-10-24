<template>
    <BackToLastVue class="mt-14" text="发表评价"></BackToLastVue>
    <div class="box">
        <div class="wrap mt-14">
            <div class="title-ecaluate">您对菜品满意吗？</div>
            <div class="mt-14">
                <span class="population-ecaluate">总体</span>
                <van-rate v-model="value" :size="22" color="#ffd21e" void-icon="star" void-color="#eee"
                    @change="onChange" />
                <span class="text-population">{{ population }}</span>
            </div>
            <div class="mt-14">
                <span class="population-ecaluate">口味
                    <van-rate v-model="val" :size="22" color="#ffd21e" void-icon="star" void-color="#eee"
                        @change="Change" />
                </span>
                <span class="text-population">{{ flavor }}</span>
            </div>
            <div class="comment mt-14">
                <textarea name="" class="text-content" placeholder="请输入内容" v-model="commentText"></textarea>
            </div>
            <span class="fa" @click="tofa">发送</span>
        </div>

    </div>

</template>
<script setup lang="ts">
import BackToLastVue from '@/components/BackToLast.vue';
import emoji from '@/assets/emoji/emoji' //表情包
import { userInfoApi, updatecomment, getComment } from '@/api/api'; //获取id

import { ref } from 'vue'
import { useRoute } from 'vue-router'
let route = useRoute()
// let foodId = route.query.foodList
// let value = route.query.value
// console.log(value);
const value = ref(0);
const val = ref(0)
const commentText = ref('')
const tofa = () => {
    (async function () {
        let userInfoRes = await userInfoApi({});
        userId.value = userInfoRes.data.data.userId;
        console.log(userId.value);
        let comment = await updatecomment({
            userId: userId.value, //用户id
            foodId: 23, //菜品id
            content: commentText.value, //评价内容
            star: value.value, //如不填默认是5, 代表的是几颗星,最高5颗
            isRealName: 0 //是否实名评价
        }).then(res => {
            console.log(res);
        })
    })()
}

let rateScoreDesc = ['非常差', '差', '一般', '满意', '非常满意']
let rate = ['非常差', '差', '一般', '满意', '非常满意']
let population = ref()
let flavor = ref()
let userId = ref(); //用户id

const onChange = (value: number) => {
    population.value = rateScoreDesc[value - 1]
}
const Change = (value: number) => {
    flavor.value = rate[value - 1]
}




</script>

<style scoped>
.title-ecaluate {
    font-size: 2rem;
    font-weight: bold;
}

.population-ecaluate {
    font-size: 1.8rem;
    font-weight: 550;
    margin-right: 1rem;
}

.text-population {
    font-size: 1.8rem;
    margin-left: 1rem;
    font-weight: bold;
}

.text-content {
    resize: none;
    width: 98%;
    height: 10rem;
    font-size: 1.4rem;
    text-indent: 4rem;
    border: none;
    background-color: #f2f2f2;
    border-radius: 1rem;
}

.comment {
    position: relative;
}

.icon-comment {
    width: 2rem;
    position: absolute;
    left: 2rem;
    top: .2rem;
}

.fa {
    display: inline-block;
    font-size: 1.2rem;
    padding: .5rem 1rem;
    background-color: pink;
    border-radius: 1rem;
}
</style>