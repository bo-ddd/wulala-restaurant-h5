<template>
    <div class="box">
        <slot></slot>
        <slot name="button"></slot>
    </div>
</template>
<style scoped>
    .box{
        display:flex;
    }
</style>