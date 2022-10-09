<template>
    <div class="home">
        <Search.Wrapper class=" wrap pt-18">
            <Search.Iptup placeholder="麻辣香锅"> </Search.Iptup>
        </Search.Wrapper>

        <Silder.Wrapper class="wrap mt-16">
            <Silder.Banner :src="parsrAsssetFile('banaer-1.png')"></Silder.Banner>
            <Silder.Banner :src="parsrAsssetFile('banaer-2.png')"></Silder.Banner>
            <Silder.Banner :src="parsrAsssetFile('banaer-3.png')"></Silder.Banner>
            <Silder.Banner :src="parsrAsssetFile('banaer-4.png')"></Silder.Banner>
            <Silder.Banner :src="parsrAsssetFile('banaer-5.png')"></Silder.Banner>
        </Silder.Wrapper>

        <div class="box-button mt-16 wrap">
            <Button class="btn-pd" color="#ffffff" bjcolor="#fb7b2c">开启点餐之旅===></Button>
        </div>

    </div>
</template>
<script setup lang="ts">
import Search from '@/components/search'
import Silder from '@/components/slider'
import Button from "@/components/Button.vue";
import useUlit from '@/assets/ulit/index'
let { parsrAsssetFile } = useUlit()

</script>
<style scoped>
.home{
    background-image: url('@/assets/images/bj.png');
    background-size: 100%;
    background-repeat: no-repeat;
    min-height: 100%;
    background-color:pink;
}
.box-button{
    display: flex;
    justify-content: center;
}

</style>