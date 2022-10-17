<template>
    <img class="btn-order" :src="src" alt="" @click="tomenu">
</template>
<script setup lang="ts">
import { inject, computed, type Ref } from 'vue';
import { useRouter } from "vue-router"
let props = defineProps<{
    src: string
    activeUrl?: string;
    name: string;
}>()

let { src, activeUrl, name } = props

let router = useRouter();

const models = inject('models') as (name: string) => void
let sect = inject('sect') as Ref<string>
const tomenu = function () {
    models(name)
}


let url = computed(() => sect.value == name ? activeUrl : src)
const color = computed(() => sect.value == name ? '#fb7b2c' : '#bcbcb9')
</script>
<style scoped>
.btn-order {
    width: 75%;
    display: inline-block;
    padding: 0 1.5rem;
    background-color: #212111;
    border-radius: 2rem;
}
</style>