<template>
    <div class="wrap">
        <div v-for="item in productAttribute">
            <span class="main-materials">{{ item.attrName + '：' }}</span>
            <span class="text-main_materials">{{ item.attrValue }}</span>
        </div>

    </div>
</template>
<script setup lang="ts">
import { getFoodDetail } from '@/api/api'
import { ref } from 'vue'
let productAttribute = ref()
let search = window.location.search
let foodId = search.split('=');
let id = foodId[1]
console.log(id);

getFoodDetail({ foodId: id }).then(res => {
    productAttribute.value = res.data.data.attrs
    console.log(res.data.data.attrs);

})

</script>

<style scoped>
.main-materials {
    color: #969696;
    font-size: 1.2rem;
}


.text-main_materials {
    font-size: 1.2rem;
    margin-left: 1rem;
}
</style>