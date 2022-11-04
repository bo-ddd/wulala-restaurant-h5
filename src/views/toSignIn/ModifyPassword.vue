<template>
    <main>
        <div class="loading" v-show="pageLoading">
            <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading"/>
        </div> 
        <Head class="head" color="black" imgcolor="0">修改密码</Head>
        <div class="content mt-25 wrap">
            <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            :placeholder="placeholderss"
            :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
            class="mt-20"
            v-model="passwordComfirm"
            type="password"
            name="确认密码"
            label="确认密码"
            :placeholder="placeholders"
            :rules="[{ required: true, message: '请确认密码' }]"
            />
            <p class="tips">密码长度必须是在6-20之间、且不能存在特殊字符</p>

            <div v-if="password == '' || passwordComfirm==''">
                <Button class="btn mt-20" color="black" bjcolor="#fdf3d0">确认</Button>
            </div>
            <div v-else>
                <Button @click="modifyPassword" class="btn mt-20" color="black" bjcolor="#f7d347">确认</Button>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Notify } from 'vant';
import {userPasswordUpdataApi} from '@/api/api';
import {useRouter} from "vue-router";
let router = useRouter();
let pageLoading = ref(true); 
let placeholders = ref('确认密码');
let placeholderss = ref('请输入密码');
let regs=/\s/; //判断是否有空格
const password = ref('');
const passwordComfirm = ref('');//确认密码

let isActives = ref(false);
let isActive = ref(false)

const modifyPassword = function(){
    if (password.value == '') {
    placeholderss.value = '密码不能为空';
    Notify({ type: 'danger', message: '密码不能为空' });
    }else if (password.value.length <= 5 || password.value.length >= 20) {
    placeholderss.value = '密码长度必须是在6-20之间';
    Notify({ type: 'danger', message: '密码长度必须是在6-20之间' });
    }else if(/\W/.test(password.value)){
    placeholderss.value = '密码不符合规范';
    Notify({ type: 'danger', message: '密码不符合规范' });
    }else if(regs.test(password.value) == true){
    placeholderss.value = '密码存在特殊字符';
    Notify({ type: 'danger', message: '密码存在特殊字符' });
    } else if(password.value != ''){
    placeholderss.value = '密码'
    isActives.value = true
    }
    // 确认密码
    if (passwordComfirm.value == '') {
    placeholders.value = '确认密码不能为空';
    Notify({ type: 'danger', message: '确认密码不能为空' });
    }else if(passwordComfirm.value != password.value){
    placeholders.value = '密码不一致';
    Notify({ type: 'danger', message: '密码不一致' });
    }else{
    placeholders.value = '确认密码';
    isActive.value = true;
    }

    if (isActive.value == true && isActives.value == true) {
        userPasswordUpdataApi({password:passwordComfirm.value}).then(res => {
            console.log(res);
            if (res.data.msg == '成功') {
                Notify({ type: 'success', message: '修改成功' });
                router.push({name:'setaccount'})
                sessionStorage.setItem('password',passwordComfirm.value)
            }else{
                Notify({ type: 'danger', message: res.data.msg });
            }
        }).catch(err => {
            console.log(err);
            
        })
    }
}

setTimeout(function () {
    pageLoading.value = false;
},1000)
</script>

<style scoped>
::v-deep .van-cell{
    border-bottom: .1rem solid #979797;
    font-size: 1.6rem;
}
.tips{
    font-size: 1.4rem;
    color: #767676;
    padding: 2rem 0;
}
.content{
    width: 75%;
}
.btn{
    padding: 1.5rem 0;
}
</style>