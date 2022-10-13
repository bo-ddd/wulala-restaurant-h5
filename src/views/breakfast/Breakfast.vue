<template>
  <main>
    <MenuConten.Wrapper>
      <MenuConten.Item
        :src="parsrAsssetFile('dfn.png')"
        content="豆腐脑"
        price="0"
        description="这是豆腐脑"
      ></MenuConten.Item>
      <MenuConten.Item
        :src="parsrAsssetFile('hlt.png')"
        content="胡辣汤"
        price="0"
        description="这是胡辣汤"
      ></MenuConten.Item>
      <MenuConten.Item
        :src="parsrAsssetFile('xmz.png')"
        content="小米粥"
        price="0"
        description="这是小米粥"
      ></MenuConten.Item>
      <MenuConten.Item
        :src="parsrAsssetFile('dmz.png')"
        content="大米粥"
        price="0"
        description="这是大米粥"
      ></MenuConten.Item>
      <MenuConten.Item
        :src="parsrAsssetFile('yt.png')"
        content="油条"
        price="0"
        description="这是油条"
      ></MenuConten.Item>
      <MenuConten.Item
        :src="parsrAsssetFile('bz.png')"
        content="包子"
        price="0"
        description="这是包子"
      ></MenuConten.Item>
    </MenuConten.Wrapper>
  </main>
</template>

<script setup lang="ts">
import MenuConten from "@/components/menuContent";
import userUtil from "@/assets/ulit";
let { parsrAsssetFile } = userUtil();
</script>

<style scoped>
main {
  height: calc(100vh - 15rem);
  overflow-y: scroll;
}
</style>