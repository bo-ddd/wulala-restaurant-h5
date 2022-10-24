<template>
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

    <AccountInfo.Wrapper v-else="tokens == null" class="wrap mt-20 mb-20" @click="toSignIn">
      <AccountInfo.Item :icon="parsrAsssetFile('end-sign_in.png')" text="立即登录">
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
        text="订单"></Nav.Item>
        <Nav.Item class="order"  :size="'3'" :icon="parsrAsssetFile('icon-collection.png')"
        text="收藏"></Nav.Item>
        <Nav.Item class="order"  :size="'3'" :icon="parsrAsssetFile('icon-evaluate.png')"
        text="评价" @click="topinjia"></Nav.Item>
        <Nav.Item class="order"  :size="'3'" :icon="parsrAsssetFile('icon-feedback.png')"
        text="反馈"></Nav.Item>
    </Nav.Wrapper>
    <Nav.Wrapper class="nav-list wrap mt-20">
      <Nav.Item class="order" v-for="item in game" :size="'3'" :icon="parsrAsssetFile(item.orderUrl)" :text="item.text">
      </Nav.Item>
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

let { parsrAsssetFile } = useUtil();
let { toSignIn, MineOrderList, game } = useRecommendSignUp();
let userName = ref('');
let userId = ref(); //传id获取图片
let tokens = localStorage.getItem('token');
let image = ref(); //拿到图像图片，在上面渲染
(async function () {
  let userInfoRes = await userInfoApi({});
  // console.log('-----userInfoRes----');
  // console.log(userInfoRes);
  // console.log(userInfoRes.data.data.userId);
  userId.value = userInfoRes.data.data.userId;
  if (userInfoRes.data.status == 1) {
    image.value = userInfoRes.data.data.avatarImg; //后端返回的头像，进行赋值
    userName.value= userInfoRes.data.data.avatarName;
  }else{
    userName.value = '立即登录';
  }
})()

const toUserInfo = function (){
  router.push({name:'userinfo',query:{name:userName.value as any,userId:userId.value}})
}

const setaccount = function () {
  router.push({ name: 'setaccount', query: {} })
}

const topinjia = function(){
        router.push('evaluate')     
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
}
</style>