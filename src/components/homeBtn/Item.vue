<template>
    <img class="btn-order" :src="src" alt="" @click="tomenu">
</template>
<script setup lang="ts">
import { useRouter } from "vue-router"

let props = defineProps<{
    src: string
}>()
let { src } = props

let router = useRouter();
const tomenu = function () {
    router.push('menu');
}
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