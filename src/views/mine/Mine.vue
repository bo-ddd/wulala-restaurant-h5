<template>
  <div class="loading" v-show="pageLoading">
    <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading"/>
  </div>  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <!-- <input type="file" name="" id=""> -->
  <main>
    <Title class="wrap mt-24" level="1" color="block">吃了么</Title>
    <!-- 个人 personal 信息 info -->
    <AccountInfo.Wrapper v-if="userName  != '' && tokens!=null" class="wrap mt-20 mb-20">
      <AccountInfo.Item :icon="(image as string) || parsrAsssetFile('end-sign_in.png')">
        <template #text>
          <p class="account-info_name" @click="toUserInfo">{{userName}}</p>
        </template>
        <template #accountSettings>
          <div class="account-settings" @click="setaccount">账户设置</div>
        </template>
      </AccountInfo.Item>
    </AccountInfo.Wrapper>

    <AccountInfo.Wrapper v-else="tokens == null" class="wrap mt-20 mb-20">
      <AccountInfo.Item text="立即登录">
        <template #icon>
          <img @click="toSignIn" :src="parsrAsssetFile('end-sign_in.png')" alt="">
        </template>
        <template #text>
          <span class="titles" @click="toSignIn">立即登录</span>
        </template>
        <template #accountSettings>
          <div class="account-settings">账户设置</div>
        </template>
      </AccountInfo.Item>
    </AccountInfo.Wrapper>
    <van-notice-bar
      left-icon="volume-o"
      text="温馨提示 : 当前疫情较为严重，请大家做好防护，尽量减少外出，保护自己保护他人;"
    />
    <Nav.Wrapper class="nav-list wrap mt-20">
      <Nav.Item class="order"  :size="'3'" :icon="parsrAsssetFile('icon-shopcar.png')"
        text="订单" @click="toOrder"></Nav.Item>
        <Nav.Item class="order"  :size="'3'" :icon="parsrAsssetFile('icon-collection.png')"
        text="收藏" @click="toCollection"></Nav.Item>
        <Nav.Item class="order"  :size="'3'" :icon="parsrAsssetFile('icon-evaluate.png')"
        text="评价" @click="topinjia"></Nav.Item>
        <Nav.Item class="order"  :size="'3'" :icon="parsrAsssetFile('icon-feedback.png')"
        text="反馈" @click="toFeedback"></Nav.Item>
    </Nav.Wrapper>
    <div class="upload wrap mt-20">
    
      <ExpressInfoItem class="order-info border-bottom" @click="toWholeOrder">
          <template #left>
              <span class="mode">我的订单</span>
          </template>
          <template #middle>
              <p class="payment">
                  全部订单
              </p>
          </template>
          <template #right>
              <img @click="" class="icon-right" src="@/assets/images/right.png" alt="">
          </template>
      </ExpressInfoItem>
      <Nav.Wrapper class="nav-list wrap">
        <Nav.Item class="order" :size="'2.8'" gap=".6rem" :icon="parsrAsssetFile('to-be_paid.png')"
          text="待付款" @click=""></Nav.Item>
          <Nav.Item class="order"  :size="'2.8'" gap=".6rem" :icon="parsrAsssetFile('to-be_received.png')"
          text="待收货" @click=""></Nav.Item>
          <Nav.Item class="order"  :size="'2.8'" gap=".6rem" :icon="parsrAsssetFile('to -be_use.png')"
          text="待使用" @click=""></Nav.Item>
          <Nav.Item class="order"  :size="'2.8'" gap=".6rem" :icon="parsrAsssetFile('icon-feedback.png')"
          text="待评价" @click=""></Nav.Item>
          <Nav.Item class="order"  :size="'2.8'" gap=".6rem" :icon="parsrAsssetFile('refund.png')"
          text="退款" @click=""></Nav.Item>
      </Nav.Wrapper>
    </div>
    <Nav.Wrapper class="nav-list wrap mt-20">
      <!-- <Nav.Item class="order" v-for="item in game" :size="'2.8'" :icon="parsrAsssetFile(item.orderUrl)" :text="item.text">
      </Nav.Item> -->
      <Nav.Item class="order"  :size="'2.8'" gap=".6rem" :icon="parsrAsssetFile('icon-lucky_turntable.png')"
      text="转盘" @click="toTurntable"></Nav.Item>
      <Nav.Item class="order"  :size="'2.8'" gap=".6rem" :icon="parsrAsssetFile('xiaoxiaole.png')"
      text="消消乐" @click=""></Nav.Item>
    </Nav.Wrapper>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useRecommendSignUp from "./composables/RecommendSignUp";
import Nav from '@/components/nav';
import AccountInfo from '@/components/accountInfo';
import useUtil from "@/assets/ulit";
import { userInfoApi, uploadAvatarApi } from '@/api/api';
import { useRouter } from 'vue-router';
let router = useRouter();
let pageLoading = ref(true);//loading
let { parsrAsssetFile } = useUtil();
let { toSignIn, MineOrderList, game } = useRecommendSignUp();
let userName = ref('');
let userId = ref(); //传id获取图片
let tokens = sessionStorage.getItem('token');
let image = ref(); //拿到图像图片，在上面渲染
(async function () {
  let userInfoRes = await userInfoApi({});
  // console.log('-----userInfoRes----');
  // console.log(userInfoRes);
  console.log(userInfoRes.data.data.userId);
  if (userInfoRes.data.status == 1) {
    image.value = userInfoRes.data.data.avatarImg; //后端返回的头像，进行赋值
    userName.value= userInfoRes.data.data.avatarName;
  }else{
    userName.value = '立即登录';
  }
  if (userInfoRes.data.data.userId == Number) {
    userId.value = userInfoRes.data.data.userId;
  }
})()
setTimeout(() => {
  pageLoading.value = false;
}, 500);
const toUserInfo = function (){
  router.push({name:'userinfo'})
}

const setaccount = function () {
  router.push({ name: 'setaccount', query: {} })
}

const topinjia = function(){
        router.push('evaluate')     
    }

const toFeedback = function(){
router.push({name:'feedback'})
}
const toCollection = function(){
  router.push({name:'collection'})
}
const toOrder = function(){
  router.push({name:'order'})
}
const toTurntable = function(){
  router.push({name:'turntable'})
}
const toWholeOrder = function(){
  router.push({name:'wholeorder'})
}
</script>

<style scoped>
main {
  background: #f5f5f5;
  height: calc(100vh - 5rem);
  overflow: hidden;
}

.nav-list {
  background-color: #fff;
  border-radius: .4rem;
  padding: 1.2rem 0;
}

.account-settings {
  font-size: 1.2rem;
  border-radius: 2rem;
  border: .1rem solid #e8e8e8;
  padding: .4rem .8rem;
}
.account-info_name{
  font-weight: 550;
  padding-left: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 18rem;
  font-size: 1.6rem;
}
.loading{
    background-color: #fff;
    min-height: calc(100vh - 5rem);
    display: flex;
    align-items: center;
    justify-content: center;
}
.titles{
  padding: 0 1rem;
  font-size: 2rem;
  font-weight: 550;
}


.upload {
    background: #fff;
    border-radius: .4rem;
}
.order-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 0 1rem;
}

.payment {
    color: #9d9d9d;
    font-size: 1.2rem;
    width: 12rem;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.mode {
    font-size: 1.6rem;
    font-weight: 560;
}

.icon-right {
    width: 1.6rem;
    filter: invert(67%);
}

.border-bottom {
    border-bottom: .1rem solid red 51%;
}

</style>