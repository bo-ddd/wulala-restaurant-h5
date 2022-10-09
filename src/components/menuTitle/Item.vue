<template>
    <div class="item" @click="to">
        <div class="text">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { inject, computed, type Ref } from 'vue';
import { useRouter } from "vue-router"
let router = useRouter();
const props = defineProps<{
    src?: string;
    activeUrl?: string;
    name: string;
}>();

let { src, activeUrl, name } = props

const models = inject('models') as (name: string) => void
let selected = inject('selected') as Ref<string>
const to = function () {
    models(name)
}

let url = computed(() => selected.value == name ? activeUrl : src)
// const color = computed(() => selected.value == name ? '#fb7b2c' : '#bcbcb9')
</script>
<style scoped>
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .8rem;
}

.tabbar-item_icon {
    width: 2.2rem;
    height: 2.2rem;
}

.text {
    font-size: 1.6rem;
    color: #bcbcb9;
    /* color: v-bind(color); */
}
</style>