<template>
    
        <input  type="text" :placeholder=placeholder>
        <!-- <Icon size="middle" :src="parsrAsssetFile('icon-search.png')"></Icon> -->
        <slot name="btn"></slot>
   
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

input {
    border: none;
    outline: none;
    width: 79%;
    text-indent: 1.2rem;
    margin-left: .8rem;
}
/* .search-input {
    background-color: white;
    border-radius:2rem;
    display: flex;
    height: 3rem;
    justify-content: flex-end;
    border: .1rem #f88d4c solid;
    width: 100%;
    box-sizing: border-box;
} */
.search-input{
    width: 100%;
    background: white;
  
}
</style>