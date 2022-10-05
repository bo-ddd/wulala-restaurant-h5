<template>
    <div class="btn">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
    let props = defineProps<{
        color:string;
        bjcolor:string;
        border?:string;
    }>();
    let { color, bjcolor, border } = props;
</script>

<style scoped>
.btn{
    text-align: center;
    color: v-bind(color);
    padding: 1.8rem 0;
    border-radius: 2.5rem;
    background: v-bind(bjcolor);
    font-size: 1.4rem;
    border: v-bind(border);
}
</style>