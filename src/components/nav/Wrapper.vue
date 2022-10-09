<template>
    <div class="nav-wrap">
        <slot></slot>
    </div>
</template>

<style scoped>
    .nav-wrap{
        font-size: 1.2rem;
        /* display: grid;
        grid-template-columns: repeat(auto-fit,minmax(4.2rem,1fr)); */
        display: flex;
        justify-content: space-around;
    }
</style>