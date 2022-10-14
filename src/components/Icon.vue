<template>
    <img :src="src" type alt="" class="icon">
    <slot></slot>
</template>
<style scoped>
img {
    width: v-bind(iconsize);
    height: v-bind(iconsize);
    border-radius: v-bind(borderRadius);
}
</style>
<script setup lang="ts">
import { computed } from 'vue'
let props = defineProps<{
    size?: 'mini' | 'middle' | 'large';
    src: string;
    type?: 'circular' | 'rect'
}>();
const { size = 'middle', src, type = 'rect' } = props;
console.log(src);

enum IconSize {
    mini = '1.6rem',
    middle = '2.4rem',
    large = '3.2rem'
}

let iconsize = IconSize[size]

let borderRadius = computed(() => {
    return type == 'rect' ? 0 : '1.2rem'
})
</script>