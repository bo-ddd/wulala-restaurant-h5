<template>
    <main>
        <div class="ipt">
            <van-cell-group inset>
                <van-field v-model="tel" type="tel" label="手机号" />
            </van-cell-group>
        </div>
        <!-- 提示 -->
        <!-- <p class="tips">用户名长度必须在6-20位之间切不能存在特殊字符</p> -->
        <Button  @click="confirm" class="wrap btn mt-58" color="white" bjcolor="#f77120">确认</Button>
    </main>
</template>

<script lang="ts" setup>
import {userInfoApi,userUpdateApi} from '@/api/api';
import { useRouter } from "vue-router";
import { ref } from 'vue';
import { Notify } from 'vant';
let router = useRouter();
let reg = /^\d{1,}$/; //判断是否为数子;
let regs=/\s/; //判断是否有空格
const tel = ref('');
userInfoApi({}).then(res => {tel.value = res.data.data.phoneNumber;});

const confirm = function (){
    if(reg.test(tel.value) != true){
        Notify({ type: 'danger', message: '您输入的手机号不合法，请重新输入' })
    }else if (tel.value.length != 11) {
        Notify({ type: 'danger', message: '您输入的手机号不合法，请重新输入' })
    }else if(regs.test(tel.value) == true){
        Notify({ type: 'danger', message: '您输入的手机号不合法，请重新输入' })
    }else {
        userInfoApi({}).then(res => {
            if (tel.value == '') {
                tel.value = res.data.data.avatarName;
            }else{
                userUpdateApi({
                    avatarName:res.data.data.avatarName,
                    userId:  res.data.data.userId,
                    sex:res.data.data.sex,
                    birthday:res.data.data.birthday,
                    personalSignature:res.data.data.personalSignature,
                    hobby:res.data.data.hobby,
                    phoneNumber:tel.value
                }).then(res => {
                    console.log(res);
                    Notify({ type: 'success', message: '修改成功' })
                    router.push({name:'userinfo'})
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
</style>