<template>
    <main>
        <MenuConten.Wrapper>
            <MenuConten.Item :src="parsrAsssetFile('gbjd.png')" content="宫保鸡丁" price="0" description="这是宫保鸡丁"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('yxrs.png')" content="鱼香肉丝" price="0" description="这是鱼香肉丝"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('rpm.png')" content="油泼面" price="0" description="这是油泼面"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('cg.png')" content="菜狗" price="0" description="这是菜狗"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('huimian.png')" content="烩面" price="0" description="这是烩面"></MenuConten.Item>
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