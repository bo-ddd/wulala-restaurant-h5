<template>
    <div class="order-info">
        <div class="left"><slot name="left"></slot></div>
        <div class="content">

            <div class="middle"><slot name="middle"></slot></div>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style scoped>
.order-info{
    font-size: 1.2rem;
}
.middle{
    /* width: 12rem; */
}
.content{
    display: flex;
    align-items: center;
}
</style>