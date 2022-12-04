<template>
    <div class="whole-order">
        <slot name="icon">
            <img @click="lastPage" src="/src/assets/images/icon-left.png" alt="">
        </slot>
        <Title level="1" color="block">
            <slot></slot>
        </Title>
    </div>
</template>

<script lang="ts" setup>
    import { useRouter } from 'vue-router';
const props = defineProps<{
    color?:string;
    imgcolor?:string;
    isActive?:number;
}>();

let router = useRouter();
let { color,imgcolor,isActive} = props;
const lastPage = function () {
    if (isActive != null) {
        router.push({name:'mine'})
    }else{
        window.history.back();

    }
}
</script>

<style scoped>
    .whole-order{
        display: grid;
        grid-template-columns: 1fr 6fr 1fr;
        justify-items: center;
        align-items: center;
        color: v-bind(color);
    }
    img{
        filter: invert(v-bind(imgcolor));
    }
</style>