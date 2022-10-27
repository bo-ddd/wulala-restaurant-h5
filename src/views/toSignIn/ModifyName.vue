<template>
    <main>
        <Head class="head" color="black" imgcolor="0">用户名</Head>
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
import {userInfoApi,userUpdateApi} from '@/api/api';
import {ref} from 'vue';
import { Notify } from 'vant';
import router from '@/router';
const value = ref('');
userInfoApi({}).then(res => {value.value = res.data.data.avatarName;})
let regs=/\s/; //判断是否有空格



const confirm = function(){
    if(value.value == ''){
        Notify({ type: 'danger', message: '用户名错误' })
    }else if(value.value.length <= 5 || value.value.length >=20){
        // 用户名长度必须是在6-20之间
        Notify({ type: 'danger', message: '用户名长度必须是在6-20之间' })
    }else if(regs.test(value.value) == true){
        Notify({ type: 'danger', message: '用户名存在特殊字符' })
    }else if(value.value != ''){ 
        userInfoApi({}).then(res => {
            if (value.value == '') {
                value.value = res.data.data.avatarName;
            }else{
                userUpdateApi({
                    avatarName:value.value,
                    userId:  res.data.data.userId,
                    sex:res.data.data.sex,
                    birthday:res.data.data.birthday,
                    personalSignature:res.data.data.personalSignature,
                    hobby:res.data.data.hobby
                }).then(res => {
                    console.log(res);
                    Notify({ type: 'success', message: '修改成功' })
                    router.push({name:'mine'})
                }).catch(err => {
                    console.log(err);
                })
            }
        }).catch(err => {
            console.log(err);
        })
    }
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
.head{
    background: #fff;
}
</style>