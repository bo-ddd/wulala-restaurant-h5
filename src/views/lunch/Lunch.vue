<template>
    <main>
        <MenuConten.Wrapper>
            <MenuConten.Item :src="parsrAsssetFile('gbjd.png')" content="宫保鸡丁" price="13"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('cg.png')" content="菜狗" price="20"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('yxrs.png')" content="鱼香肉丝" price="13"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('rpm.png')" content="油泼面" price="16"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('huimian.png')" content="烩面" price="18"></MenuConten.Item>
        </MenuConten.Wrapper>
    </main>
</template>

<script setup lang="ts">
import MenuConten from '@/components/menuContent'
import userUtil from '@/assets/ulit'
let { parsrAsssetFile } = userUtil();
</script>

<style scoped>
main {
  height: calc(100vh - 15rem);
  overflow-y: scroll;
}
</style>