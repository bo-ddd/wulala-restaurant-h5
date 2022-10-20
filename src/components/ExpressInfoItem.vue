<template>
    <div class="order-info">
        <div><slot name="left"></slot></div>
        <div><slot name="middle"></slot></div>
        <div><slot name="right"></slot></div>
    </div>
</template>

<style scoped>
.order-info{
    font-size: 1.2rem;
}
</style>