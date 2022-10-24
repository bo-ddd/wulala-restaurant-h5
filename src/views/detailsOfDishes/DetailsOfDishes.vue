<template>
    <main>

        <FoodInformation.Wrapper>
            <FoodInformation.Item></FoodInformation.Item>
        </FoodInformation.Wrapper>


        <van-tabs v-model:active="active" class="mt-14">
            <van-tab title="详情">
                <FoodDetails.Wrappar>
                    <FoodDetails.Item :data="foodList"></FoodDetails.Item>
                </FoodDetails.Wrappar>
            </van-tab>
            <van-tab title="评价">
                <div class="line-top pt-10">
                    <div class="box-evaluate wrap" v-for="(item) in userInfo">
                        <div class="user-avatar" >
                            <img class="oo" :src="item.avatarImg" alt="">
                        </div>
                        <div class="user-name">{{item.avatarName}}</div>
                    </div>
                    <div class=" box-text wrap">
                        <span class="text" v-for="(el) in comment">{{ el.content }}</span>
                    </div>
                </div>
            </van-tab>

        </van-tabs>
    </main>
</template>
<script setup lang="ts">
import FoodInformation from '@/components/foodInformation'
import FoodDetails from '@/components/foodDetails'
import { getComment } from '@/api/api'
import { ref } from "vue";
import { useRouter } from 'vue-router'

const active = ref(0);
let router = useRouter()

const foodList = ref({})
const comment: any = ref({})
const userInfo:any = ref({})
// 路由传参
let search = window.location.search
let foodId = search.split('=');
let id = foodId[1]

getComment({ foodId: id  }).then(res => {
    comment.value = res.data.data.list
    res.data.data.list.forEach((item: any) => {
        userInfo.value = item.users
        console.log(userInfo.value);
    });

})

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
    width: 4rem;
    height: 4rem;
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