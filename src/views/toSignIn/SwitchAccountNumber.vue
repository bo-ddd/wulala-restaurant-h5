<template>
    <main>
        <div class="loading" v-show="pageLoading">
            <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading"/>
        </div> 
        <Head class="head" color="black" imgcolor="0">切换账号</Head>
        <p class="title-nav">点击头像切换账号</p>
        <div class="content">
            <div class="upload pd-10 wrap mt-20" @click="toMine">
                <div class="head-info df-al">
                    <img :src="avatarImg" alt="">
                    <div class="info">
                        <span class="mode">
                            {{cellPhoneNumber}}
                            <p class="details pt-5">{{username}}</p>
                        </span>
                    </div>
                </div>
                <div class="state">
                    <div class="spot"></div>
                    当前登录
                </div>
            </div>
        </div>
        <div class="content">
            <div class="upload pd-10 wrap mt-20" @click="toSignIp">
                <div class="head-info df-al">
                    <img class="add-to_icon" src="@/assets/images/add-to.png" alt="">
                    <div class="info">
                        <p class="tips">添加账号</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router';
import { userInfoApi } from '@/api/api';
import {ref} from 'vue';
let router = useRouter();
let pageLoading = ref(true);

let avatarImg = ref("");//头像
let username = ref();
let cellPhoneNumber = ref();//手机号
userInfoApi({}).then(res => {
    // console.log(res);
    avatarImg.value=res.data.data.avatarImg;
    username.value = res.data.data.avatarName;
    cellPhoneNumber.value = mobileStr(res.data.data.phoneNumber);
}).catch(err => {
    console.log(err);
})

const toSignIp = function(){
    router.push({name:'signin'})
}

const mobileStr=function(str:string) {
  if(str.length>7){
    return  str.substring(0,3)+'****'+str.substring(7,str.length);
  }else {
    return str.substring(0,str.length-1)+'****';
  }
}

const toMine=function(){
    router.push({name:'mine'})
}
setTimeout(function () {
    pageLoading.value = false;
},1000)
</script>

<style scoped>
main{
    background: #eee;
    overflow: hidden;
    min-height: 100vh;
}
.head{
    background: #fff;
}
.title-nav{
    text-align: center;
    margin: 3rem 0;
    font-size: 2rem;
}
.mode {
    font-size: 1.6rem;
}
.upload {
    background: #fff;
    border-radius: .5rem;
}
.details{
    font-size: 1.2rem;
    color: #ccc;
}
.upload{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.state{
    font-size: 1.6rem; 
    width: 16rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.info{
    padding-left: 1rem;
}
img{
    width: 17%;
    border-radius: 3rem;
}
.spot{
    width: 1rem;
    height: 1rem;
    background: green;
    border-radius: 2rem;
}
.tips{
    font-size: 2rem;
    color: #ccc;
}
.add-to_icon{
    width: 4.5rem;
}
</style>