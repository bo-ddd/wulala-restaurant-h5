<template>
    <div class="best-sellers_item">
        <slot name="image"></slot>
        <slot name="description"></slot>
    </div>
</template>

<style scoped>
    .best-sellers_item{
        width: 16.6rem;
        background:#fff;
        border-radius: 1rem;
        display: inline-block;
        border-radius: 1rem;
    }
</style>