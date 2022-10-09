<template>
    <div class="box">
        <slot></slot>
        <slot name="button"></slot>
    </div>
</template>
<style scoped>
    .box{
        display:flex;
        /* grid-template-columns: auto;
        gap: 0 2rem;
        align-items: center; */
    }
</style>