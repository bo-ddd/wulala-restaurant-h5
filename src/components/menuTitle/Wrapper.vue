<template>
    <div class="tabbar">
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
provide('selected', modelValue)

</script>
<style scoped>
.tabbar {
    display: flex;
    justify-content: space-around;
    border-bottom: .2rem solid #ececec;
    padding: 1rem 0;
    /* background-color: #fafafa;
    height: 5rem; */
}
</style>