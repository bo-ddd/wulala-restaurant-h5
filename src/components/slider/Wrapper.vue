<template>
    <div class="silder">
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

import SilderConstructor from '@/assets/lib/silder'
let sliderr: SilderConstructor;
onMounted(() => {
    sliderr = new SilderConstructor('.silder', {duration:3000})
})
onUnmounted(() => {
    sliderr.remove()
})
</script>
<style scoped>
.silder {
    border-radius: 2rem;
    overflow: hidden;
}

.silder .container {
    border-radius: 1.2rem;
    white-space: nowrap;
}
</style>