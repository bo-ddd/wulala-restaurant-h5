<template>
    <div class="wrap">
        <div><span class="main-materials">主料:</span><span class="text-main_materials">{{data.mainMaterials}}</span>
        </div>
        <div><span class="main-materials">辅料:</span><span class="text-main_materials">{{data.garlic}}</span>
        </div>
        <div><span class="main-materials">荤素:</span><span class="text-main_materials">{{data.meatAndVegetable}}</span>
        </div>
        <div><span class="main-materials">份量:</span><span class="text-main_materials">约{{data.kg}}克</span>
        </div>
        <div><span class="main-materials">口味:</span><span class="text-main_materials">{{data.taste}}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
let props = defineProps<{
    data: any
}>()
let { data } = props
</script>

<style scoped>
.main-materials {
    color: #969696;
    font-size: 1.2rem;
}


.text-main_materials {
    font-size: 1.2rem;
    margin-left: 3rem;
}
</style>