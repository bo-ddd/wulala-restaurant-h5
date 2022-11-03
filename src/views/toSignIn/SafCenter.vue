<template>
    <main>
        <div class="loading" v-show="pageLoading">
            <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading"/>
        </div> 
        <Head class="head" color="black" imgcolor="0">安全中心</Head>
        <p class="title mt-10 wrap">账号</p>
        <div class="upload wrap mt-20">
            <ExpressInfoItem class="order-info" @click="">
                <template #left>
                    <span class="mode">修改登录密码</span>
                </template>
                <template #middle>
                    <p class="payment"> 安全等级：{{'中'}} </p>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
            <ExpressInfoItem class="order-info" @click="toModifyphoneNumber">
                <template #left>
                    <span class="mode">修改手机号码</span>
                </template>
                <template #middle>
                    <p class="payment"> {{ cellPhoneNumber }} </p>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
        </div>
        <p class="title mt-10 wrap">安全</p>
        <div class="upload wrap mt-20">
            <ExpressInfoItem class="order-info" @click="">
                <template #left>
                    <span class="mode">注销账号</span>
                </template>
                <template #middle>
                    <p class="payment"> 注销后无法恢复，请谨慎操作 </p>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { userInfoApi } from '@/api/api';
import { ref } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
let pageLoading = ref(true);
let cellPhoneNumber = ref();//手机号

userInfoApi({}).then(res => {
    cellPhoneNumber.value = mobileStr(res.data.data.phoneNumber);
}).catch(err => {
    console.log(err);
})

setTimeout(function () {
    pageLoading.value = false;
},1000)
const toModifyphoneNumber = function(){
    router.push({name:'modifyphonenumber'})
}
const mobileStr=function(str:string) {
  if(str.length>7){
    return  str.substring(0,3)+'****'+str.substring(7,str.length);
  }else {
    return str.substring(0,str.length-1)+'****';
  }
}
</script>

<style scoped>
main{
    background-color: #eee;
    min-height: 100vh;
    overflow: hidden;
}
.head{
    background: #fff;
}
.title{
    font-size: 1.4rem;
    color: rgb(107, 105, 105);
    padding-top: 1.5rem;
    text-indent: 1rem;
}
.order-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}
.mode {
    font-size: 1.6rem;
}
.upload {
    background: #fff;
    border-radius: .5rem;
}
.icon-right {
    width: 1.6rem;
    filter: invert(67%);
}
.payment {
    color: #9d9d9d;
    font-size: 1.6rem;
    width: 12rem;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 1rem;
}
</style>