<template>
    <div>
        <van-nav-bar title="提交订单" left-text="返回" left-arrow @click-left="onClickLeft" />

        this is 支付成功页面
    </div>
</template>
<script setup lang="ts">
const onClickLeft = () => history.back();

</script>