<template>
    <div class="best-sellers">
        <slot></slot>
    </div>
</template>

<style scoped>
    .best-sellers{
        column-count: 2;
        column-gap: 1.2rem;
        background-image: url("@/assets/images/bj.png");
        padding: 0 1rem;
        border-radius: 1rem 1rem 0 0;
        padding-bottom: 1rem;
    }
</style>