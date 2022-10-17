<template>
    <div class="box-button">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { provide, toRefs } from "vue";
const props = defineProps<{
    modelValue: string
}>();
const emit = defineEmits(['update:modelValue', 'tap'])
let { modelValue } = toRefs(props)


const models = function (name: string): any {
    emit("update:modelValue", name)
    emit("tap", name)
}

provide('models', models)
provide('sect', modelValue)
</script>
<style scoped>
.box-button {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>