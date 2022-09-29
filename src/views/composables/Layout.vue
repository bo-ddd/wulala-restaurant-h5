<template>
    <div class="container">
        <RouterView></RouterView>
    </div>

    <!-- 子组件调用父组件的事件 -->
    <Tabbar.Wrapper v-model="selected" @tap="nav">
        <Tabbar.Item v-for="(el,index) in imgarr" :src="el.url" :active-url="el.urls" :name="el.name">
            {{el.text}}
        </Tabbar.Item>
    </Tabbar.Wrapper>

</template>

<script setup lang="ts">

import Tabbar from "@/components/tabbar";
import { RouterView } from "vue-router"
import useTabbar from '@/views/composables/useTabbar'
let { imgarr, selected, nav } = useTabbar()

</script>
<style scoped>
.container {
    height: calc(100vh - 5rem);
    overflow-y: scroll;
    box-sizing: border-box;
}
</style>