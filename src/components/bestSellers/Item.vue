<template>
    <div class="best-sellers_item">
        <slot name="image"></slot>
        <slot name="description"></slot>
        <slot name="evaluate"></slot>
    </div>
</template>

<style scoped>
    .best-sellers_item{
        background:#f5f5f5;
        display: inline-block;
        border-radius: 1rem ;
    }
</style>