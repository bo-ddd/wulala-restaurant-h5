<template>
    <!-- 头像 -->
    <div class="head-portrait">
        <slot name="icon">
            <img class="icon" :src="icon" alt="">
        </slot>
        <slot name="text">
            <Title class="title" lever="3" color="block">{{text}}</Title>
        </slot>
    </div>
      <!-- 账户设置 -->
      <slot name="accountSettings">
          <div class="account-settings">设置</div>
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
.icon{
    width: 5rem;
    height: 5rem;
    border-radius: 4rem;
}
img{
    width: 100%;
    height: 100%;
}
</style>