<template>
    <main>
        <Head class="head" color="black" imgcolor="0">账户设置</Head>
        <div class="choice mt-20" @click="choiceBirthday">请选择您的生日</div>
      
    </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let isActive = ref(true);

const choiceBirthday = function(){
    isActive.value = false;
}

</script>

<style scoped>
main{
    background: #f5f5f5;
    min-height: 100vh;
}
.head{
    background: #fff;
}
.choice{
    text-align: center;
    padding: 1.5rem;
    background-color: #fff;
    font-size: 1.6rem;
}
.choiceDate{
    display: none;
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>