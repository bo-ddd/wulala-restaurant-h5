<template>
    <div class="box">
        <slot></slot>
        <slot name="button"></slot>
    </div>
</template>
<style scoped>
.box {
    /* height: 3rem; */
    display: flex;
    width: 100%;
    background: white;
    border-radius: 2rem;
    padding: .3rem 0;
}
</style>