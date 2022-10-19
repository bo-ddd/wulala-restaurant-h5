<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <main>
    <div class="whole">
      <!-- 登录 -->
      <Title class="wrap mt-24" level="1" color="white">登录</Title>
      <form class="wrap from center">
          <div class="user-box mb-18">
              <input v-model="username" type="text" required>
              <label :class="{ setcolor:isUserName }">{{userNameLabel}}</label>
          </div>
          <div class="user-box">
              <input v-model="password" type="password" required autocomplete="off">
              <label :class="{ setcolor:ispassword }">{{passwordLable}}</label>
          </div>
          <!-- 忘记密码？ Forgot  -->
          <a class="forgot-text" @click="toForgotPasswrod">忘记密码?</a>
          <Button class="wrap pd-18 mt-20" @click="signInBtn" color="white" bjcolor="#f77120">登录</Button>
          <!-- sign up 注册 -->
          <!-- 没有帐户？ -->
          <div class="signup-go_text wrap">没有帐户? <a class="forgot-text" @click="toSignUp">注册</a></div>
          <!-- 继续使用Facebook -->
          <Button  @click="lastPage" class="wrap mt-24 pd-18" color="white" bjcolor="#f77120">我稍后再登录</Button>
          <!-- 我稍后再登录(报名) -->
        </form>
    </div>
  </main>
</template>

<script lang="ts" setup>
import useJumpInfo from './composables/JumpInfo';
import { useRouter } from "vue-router";
import {ref} from 'vue';
import { loginApi } from '@/api/api';
import { Notify } from 'vant';
let { toForgotPasswrod,toSignUp } = useJumpInfo();
let username = ref(''); //获取input框的值
let password = ref('');
let router = useRouter();

let userNameLabel = ref('用户名或电话');
let passwordLable = ref('密码');

let isUserName = ref(false);//class 显示 隐藏
let ispassword = ref(false);
const signInBtn = function(){
  if (username.value == '' && password.value == '') {
    userNameLabel.value = '请输入用户名';
    passwordLable.value = '密码不能为空';
    isUserName.value = true;
    ispassword.value = true;
  }else if (username.value != '' && password.value != '') {
    userNameLabel.value = '用户名';
    passwordLable.value = '密码';
    isUserName.value = false;
    ispassword.value = false;
  }
  if(isUserName.value == false && ispassword.value == false){
    (async function () {
      await loginApi({
        username:username.value,
        password:password.value,
      }).then(res => {
        console.log('------res----');
        console.log(res)
        if (res.data.msg == '用户名或者密码错误') {
          Notify({ type: 'danger', message: '用户名密码错误' })
        }else if(res.data.msg == '成功'){
          Notify({ type: 'success', message: '登录成功' });
            setTimeout(function (){
            router.push({name:'/'});
            let token = res.data.data.token;
            localStorage.setItem('token',token);
          },1500)
        }
      }).catch(err => {
        console.log(err);
      })
    })()
  }
};


const lastPage = function () {
    window.history.back();
}
</script>

<style scoped>
.pd-18{
  padding: 1.8rem 0;
}


.setcolor{
  color: red !important;
}
.whole{
  min-height: 100vh;
  overflow: hidden;
  backdrop-filter: blur(.4rem);
  -webkit-backdrop-filter: blur(.4rem);
  position: relative;
}
main{
  min-height: 100vh;
  overflow: hidden;
  background-image: url("@/assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.signup-go_text{
    font-size: 1.2rem;
    color: #ccc;
    padding: 2.4rem 0;
    text-align: center;
    border-bottom: .1rem solid #bbb;
}
.user-box {
  position: relative;
}
.user-box input {
  width: 100%;
  padding: 1.2rem 0;
  font-size: 1.4rem;
  color:#ebd79a;
  border: none;
  border-bottom: .1rem solid;
  outline: none;
  background: transparent;
}
.user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 1.2rem 0;
  font-size: 1.4rem;
  color: #ebd79a;
  pointer-events: none;
  transition: .5s;
}
.user-box input:focus ~ label,
.user-box input:valid ~ label {
  top: -2rem;
  left: 0;
  color: #f77120;
  font-size: 1.2rem;
}
.forgot-text{
    color: #ebd79a;
    font-size: 1.2rem;
    text-align: center;
}
.from{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
}
.btn{
  opacity: .8;
}
</style>