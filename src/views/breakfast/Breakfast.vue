<template>
    <main>
        <MenuConten.Wrapper>
            <MenuConten.Item :src="parsrAsssetFile('dfn.png')" content="豆腐脑" price="4"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('hlt.png')" content="胡辣汤" price="4"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('xmz.png')" content="小米粥" price="4"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('dmz.png')" content="大米粥" price="4"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('yt.png')" content="油条" price="1"></MenuConten.Item>
            <MenuConten.Item :src="parsrAsssetFile('bz.png')" content="包子" price="0.5"></MenuConten.Item>
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