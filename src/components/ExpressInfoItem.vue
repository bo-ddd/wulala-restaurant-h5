<template>
    <div class="order-info">
        <div class="left"><slot name="left"></slot></div>
        <div><slot name="middle"></slot></div>
        <slot name="right"></slot>
    </div>
</template>

<style scoped>
.order-info{
    font-size: 1.2rem;
}
.left{
    width: 10rem;
}
</style>