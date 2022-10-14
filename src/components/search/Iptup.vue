<template>
    <div class="search-input">
        <!-- <Icon size="middle" :src="parsrAsssetFile('icon-search.png')"></Icon> -->
        <input class="wes" type="text" :placeholder=placeholder>
        <div class="box-btn_search">
           <p>搜索</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import useUlit from '@/assets/ulit/index'
let { parsrAsssetFile } = useUlit()

let props = defineProps<{
    placeholder?: string;
    size?: string
}>();
let { placeholder = '' } = props;
</script>
<style scoped>
.search-input {
    background-color: white;
    border-radius:2rem;
    display: flex;
    height: 3rem;
    align-items: center;
    padding-left:1.2rem;
    width: 100%;
}
.box-btn_search{
    padding: .5rem 1.5rem;
    font-size: 1.2rem;
    background-color: #fb7b2c;
    border-radius: 2rem;
}

input {
    border: none;
    outline: none;
    margin-right: 0.5rem;
    width: 80%;
}

.wes {
    font-size: 1.2rem;
}
</style>