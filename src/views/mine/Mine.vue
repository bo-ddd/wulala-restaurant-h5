<template>
  <main>
    <Title class="wrap mt-24" level="1" color="block">吃了么</Title>
    <div class="sign-up wrap mt-20 mb-20">
      <!-- 头像 -->
      <div class="head-portrait">
        <img src="@/assets/images/end-sign_in.png" alt="">
        <Title class="pl-10" lever="3" color="block" @click="toSignIn">立即登录</Title>
      </div>
      <!-- 账户设置 -->
      <div class="account-settings">账户设置</div>
    </div> 
    <Nav.Wrapper class="nav-list wrap">
      <Nav.Item class="order" v-for="item in MineOrderList" 
      :size="'3'" 
      :icon="parsrAsssetFile(item.orderUrl)" 
      :text="item.text"></Nav.Item>
    </Nav.Wrapper>
  </main>
</template>

<script lang="ts" setup>
import useRecommendSignUp from "./composables/RecommendSignUp";
import Nav from '@/components/nav';
import useUtil from "@/assets/ulit";
let { parsrAsssetFile } = useUtil();
let { toSignIn,MineOrderList } = useRecommendSignUp();
</script>

<style scoped>
.pl-10{
  padding-left: 1rem;
}
.mt-20{
  margin-top: 1rem;
}
.mb-20{
  margin-bottom: 1rem;
}



main{
  background: #f5f5f5;
  height: calc(100vh - 5rem);
  overflow: hidden;
}
.sign-up{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head-portrait{
  display: flex;
  align-items: center;
}
.account-settings{
  font-size: 1.2rem;
  border-radius: 2rem;
  border: .1rem solid #e8e8e8;
  padding: .4rem .8rem;
}
.nav-list{
  background-color: #fff;
  border-radius: .4rem;
  padding: 1.2rem 0;
}
</style>