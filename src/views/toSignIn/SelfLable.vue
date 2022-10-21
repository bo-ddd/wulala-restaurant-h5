<template>
    <main>
        <Head class="head" color="black" imgcolor="0">个性标签</Head>
        <textarea class="textarea" v-model="textareaValue" name="text" id="" cols="40" rows="5"  required>
        {{textareaValue}}
        </textarea>
        <Button @click="complete" class="btn mt-24" color="white" bjcolor="#ccc">完成</Button>
    </main>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import { useRouter } from 'vue-router';
let router = useRouter();
let textareaValue = ref();

const complete = function(){
    if (textareaValue.value != undefined) {
        router.push({name:'userinfo'})
    }
}

</script>

<style scoped>
.textarea{
    font-size: 1.4rem;
    resize: none;
    border-radius: 1rem;
    padding: 1rem;
    display: block;
    margin: 2rem auto;
}
.btn{
    margin: 3rem;
    padding: 1.5rem 0;
}
</style>