<template>
    <main>
        <div class="loading" v-show="pageLoading">
            <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading"/>
        </div> 
        <Head class="head" color="black" imgcolor="0">账户设置</Head>
        <div class="content">
            <div class="upload mt-20">
                <ExpressInfoItem class="order-info" @click="toPersonalInfo">
                    <template #left>
                        <span class="mode">
                            个人信息
                            <p class="details pt-5">头像、昵称、收货地址</p>
                        </span>
                    </template>
                    <template #right>
                        <img class="icon-right" src="@/assets/images/right.png" alt="">
                    </template>
                </ExpressInfoItem>
                <ExpressInfoItem class="order-info" @click="toSafeCenter">
                    <template #left>
                        <span class="mode">
                            账号与安全
                            <p class="details pt-5">修改密码、修改手机号码、账号绑定管理</p>
                        </span>
                    </template>
                    <template #right>
                        <img class="icon-right" src="@/assets/images/right.png" alt="">
                    </template>
                </ExpressInfoItem>
            </div>
            <div class="upload mt-20">
                <ExpressInfoItem class="order-info" @click="toFeedback">
                    <template #left>
                        <span class="mode">
                            意见反馈
                            <!-- <p class="details pt-5">修改密码、修改手机号码、账号绑定管理</p> -->
                        </span>
                    </template>
                    <template #right>
                        <img class="icon-right" src="@/assets/images/right.png" alt="">
                    </template>
                </ExpressInfoItem>
            </div>
            <Button @click="toSwitchAccountNumber" class="wrap btn mt-24" color="black" bjcolor="#f7d347">切换账号</Button>
            <Button @click="signOut" class="wrap btn mt-24" color="black" bjcolor="#e8e8e8">退出登录</Button>
        </div>
    </main>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {ref} from 'vue';
let router = useRouter();
let pageLoading = ref(true);
const signOut = function(){
    router.push({name:'mine'});
    sessionStorage.clear();
}
const toPersonalInfo = function(){
    router.push({name:'userinfo'})
}
const toSafeCenter = function(){
    router.push({name:'safcenter'})
}
const toSwitchAccountNumber = function(){
    router.push({name:'switchaccountnumber'})
}
const toFeedback = function(){
    router.push({name:'feedback'})
}
setTimeout(function () {
    pageLoading.value = false;
},1000)
</script>

<style scoped>
main{
    background: #f4f4f4;
    overflow: hidden;
}
.btn{
    padding: 1.5rem 0;
}
.head{
    background: #fff;
}
.content{
    min-height: calc(100vh - 5.8rem);
}
.order-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}
.icon-right {
    width: 1.6rem;
    filter: invert(67%);
}
.mode {
    font-size: 1.6rem;
}
.upload {
    background: #fff;
}
.details{
    font-size: 1.2rem;
    color: #ccc;
}
</style>