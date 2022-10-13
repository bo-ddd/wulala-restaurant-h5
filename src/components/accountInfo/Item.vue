<template>
    <!-- 头像 -->
    <div class="head-portrait">
        <img :src="icon" alt="">
        <slot name="text">
            <Title class="title" lever="3" color="block">{{text}}</Title>
        </slot>
      </div>
      <!-- 账户设置 -->
      <slot name="accountSettings">
          <!-- <div class="account-settings">还没有传accountSettings</div> -->
      </slot>
</template>

<script lang="ts" setup>
const props = defineProps<{
    icon?:string;
    text?:string;
}>();
let { icon, text } = props;
</script>

<style scoped>
.title{
    padding: 0 1rem;
}
.head-portrait{
  display: flex;
  align-items: center;
}
</style>