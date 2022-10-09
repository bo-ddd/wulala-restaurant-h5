<template>
    <Title>
        <slot></slot>
    </Title>
</template>

<script setup lang="ts">
import { h, useCssModule } from 'vue';
let props = defineProps<{
    level: "1" | "2" | "3" | "4" | "5" | "6";
    color: string;
}>();
let style = useCssModule();
let { level = '1', color = "white" } = props;
let Title = h('h' + level, { class: style.title });
let fontSize = (12 + 2 * (6 - Number(level))) / 10 + 'rem';
</script>

<style module>
.title {
    font-size: v-bind(fontSize);
    padding: 1.5rem 0;
    color: v-bind(color);
}
</style>