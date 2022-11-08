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

.van-tab__panel {
  background-color: #ffffff;
}

.van-search {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 !important;
  background: var(--van-search-background-color);
  border-radius: 3rem !important;
}
.van-nav-bar__text {
    color: black !important;
}
</style>
