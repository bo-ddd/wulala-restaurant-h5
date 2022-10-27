<template>
    <main>
        <div class="ipt">
            <van-cell-group inset>
                <van-field v-model="value" label="用户名" placeholder="请输入用户名" />
            </van-cell-group>
        </div>
        <!-- 提示 -->
        <p class="tips">用户名长度必须在6-20位之间切不能存在特殊字符</p>
        <Button  @click="confirm" class="wrap btn mt-58" color="white" bjcolor="#f77120">确认</Button>
    </main>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
const value = ref('');

const confirm = function(){
    console.log(1);
    
}
</script>

<style scoped>
main {
    background: #f5f5f5;
    min-height: 100vh;
    overflow: hidden;
}
.ipt{
    margin: 2rem 0;
}
.tips{
    color: #ccc;
    font-size: 1.4rem;
    text-align: center;
}
.btn{
    padding: 1.4rem 0;
}
</style>