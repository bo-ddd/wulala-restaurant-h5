<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
.van-tabs__line {
    position: absolute;
    bottom: 15px;
    left: 0;
    z-index: 1;
    width: var(--van-tabs-bottom-bar-width);
    height: var(--van-tabs-bottom-bar-height);
    background-color: black !important;
    border-radius: var(--van-tabs-bottom-bar-height);
}
</style>
