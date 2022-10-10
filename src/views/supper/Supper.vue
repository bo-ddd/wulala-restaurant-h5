<template>
    <main>
        <MenuConten.Wrapper>
            <MenuConten.Item :src="parsrAsssetFile('cg.png')" content="菜狗" price="20"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('yrc.png')" content="羊肉串" price="3"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('gbjd.png')" content="宫保鸡丁" price="30"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('gbjd.png')" content="宫保鸡丁" price="30"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('gbjd.png')" content="宫保鸡丁" price="30"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('gbjd.png')" content="宫保鸡丁" price="30"></MenuConten.Item>
        </MenuConten.Wrapper>
    </main>
</template>

<script setup lang="ts">
import MenuConten from '@/components/menuContent'
import userUtil from '@/assets/ulit'
let { parsrAsssetFile } = userUtil();
</script>

<style scoped>

</style>