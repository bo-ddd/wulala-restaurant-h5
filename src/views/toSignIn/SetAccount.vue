<template>
    <Head class="head" color="black" imgcolor="0">账户设置</Head>
    <Button @click="signOut" class="wrap btn mt-24" color="white" bjcolor="#ccc">退出登录</Button>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router';
let router = useRouter();

const signOut = function(){
    router.push({name:'mine'});
    localStorage.setItem('token','')
}
</script>

<style scoped>
.btn{
    padding: 1rem 0;
}
</style>