<template>
    <main>

        <Head class="head" color="black" imgcolor="0">账户设置</Head>
        <div class="choice mt-20" @click="choiceBirthday">请选择您的生日</div>
        <!-- 分类 classIfy 窗口 window -->
        <div class="classify-window" :class="{ active:isActive }">
            <div class="options">

                <!-- <p @click="outClassIfication">取消</p>
                <p>确定</p> -->

                <van-datetime-picker v-model="currentDate" type="date" title="选择年月日" :min-date="minDate"
                    :max-date="maxDate" cancel="outClassIfication" @cancel="cancel" @confirm="getEndTime" />
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import router from "@/router";
import { ref } from "vue";
let isActive = ref(false);
const currentDate = ref(new Date(2021, 0, 17));

let minDate = new Date(1111, 0, 1);
let maxDate = new Date(2025, 10, 1);
// let change = function(){
//     console.log(2);

// }
let cancel = function () {
    isActive.value = true;
    return isActive
};
let authInfo = ref()
const getEndTime = (value: any) => {
    let y = value.getFullYear()  //年
    let m = value.getMonth() + 1  //月
    m = m < 10 ? '0' + m : m
    var d = value.getDate()
    d = d < 10 ? '0' + d : d
    authInfo.value = value = y + '-' + m + '-' + d;

    router.push({name:'userinfo',query:{date:authInfo.value}})
}
const choiceBirthday = function () {
    isActive.value = false;
    return isActive
}

</script>

<style scoped>
main {
    background: #f5f5f5;
    min-height: 100vh;
}

.head {
    background: #fff;
}

.choice {
    text-align: center;
    padding: 1.5rem;
    background-color: #fff;
    font-size: 1.6rem;
}





.classify-window {
    position: absolute;
    bottom: 0;
    z-index: 2;
    width: 100%;
    transform: translateY(0);
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(.1rem);
    animation-name: example;
    animation-duration: 1s;
}

.options {
    background: #fff;
    border-radius: 3rem 3rem 0 0;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.active {
    display: none;
    transition: all 1s ease;
    transform: translateY(100vh);
}

@keyframes example {
    0% {
        bottom: -40rem;
    }

    100% {
        bottom: 0rem;
    }
}
</style>