<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { provide, toRefs, watch, } from "vue";
import {useRoute} from 'vue-router'
const props = defineProps<{
    modelValue: string
}>();
const emit = defineEmits(['update:modelValue', 'tap'])
let { modelValue } = toRefs(props)

const models = function (name: string): any {
    emit("update:modelValue", name)
    emit("tap", name)
}
let route=useRoute();
provide('models', models)
provide('selected', modelValue)


</script>
<style scoped>
.tabbar {
    display: flex;
    justify-content: space-around;
    background-color: #fafafa;
    height: 5rem;
}
</style>