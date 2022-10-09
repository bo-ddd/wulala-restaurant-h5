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
    /* display:inline-block; */
    text-align: center;
    color: v-bind(color);
    border-radius: 2.5rem;
    background: v-bind(bjcolor);
    font-size: 1.4rem;
    border: v-bind(border);
}
</style>