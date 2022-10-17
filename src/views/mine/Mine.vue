<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <main>
    <Title class="wrap mt-24" level="1" color="block">吃了么</Title>
    <!-- 个人 personal 信息 info -->
    <AccountInfo.Wrapper class="wrap mt-20 mb-20"  @click="toSignIn">
      <AccountInfo.Item :icon="parsrAsssetFile('end-sign_in.png')" :text="'立即登录'">
        <template #accountSettings>
          <div class="account-settings">账户设置</div>
        </template>
      </AccountInfo.Item>
    </AccountInfo.Wrapper>
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
import AccountInfo from '@/components/accountInfo';
import useUtil from "@/assets/ulit";
let { parsrAsssetFile } = useUtil();
let { toSignIn,MineOrderList } = useRecommendSignUp();
</script>

<style scoped>

main{
  background: #f5f5f5;
  height: calc(100vh - 5rem);
  overflow: hidden;
}
.nav-list{
  background-color: #fff;
  border-radius: .4rem;
  padding: 1.2rem 0;
}
.account-settings{
  font-size: 1.2rem;
  border-radius: 2rem;
  border: .1rem solid #e8e8e8;
  padding: .4rem .8rem;
}
</style>