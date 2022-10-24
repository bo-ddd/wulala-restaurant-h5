<template>
    <div class="last-to_back ">
        <van-icon name="arrow-left" @click="backtoLast"/>
        <!-- <img src="@/assets/images/icon-left.png" alt="" > -->
        <span class="last-text">{{text}}</span>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
let props = defineProps<{
    text?: string,
    color?: string
}>()
let { text, color } = props

let router = useRouter()
const backtoLast = function () {
    router.go(-1)
}
</script>
<style scoped>
.last-to_back {
   display: grid;
  grid-template-columns: auto 22rem;
  align-items: center;
}

 img {
    vertical-align: middle;
}

.last-text {
    font-size: 1.7rem;
    font-weight: bold;

    color: v-bind(color);
}
</style>