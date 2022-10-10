<template>
    <main>
        <div class="wrap">
            <Title color="#000">菜单</Title>
        </div>

        <div class="main wrap">
            <MenuTitle.Wrapper v-model="selected" @tap="nav">
                <MenuTitle.Item v-for="(el,index) in imgarr" :name="el.name" :key="index">
                {{ el.text }}</MenuTitle.Item>
            </MenuTitle.Wrapper>
            <RouterView />
        </div>
    </main>
</template>

<script setup lang="ts">
import MenuTitle from "@/components/menuTitle"
import useTabbar from "@/views/menu/useTabbar"
let { imgarr, selected, nav } = useTabbar()
</script>

<style scoped>
</style>