<template>
    <!-- 登录 -->
    <Title class="wrap mt-24" level="1" color="block">找回密码</Title>
    <form class="wrap center  mt-24">
        <div class="user-box mb-18">
            <input type="text" required>
            <label>账号的手机号/邮箱</label>
        </div>
        <div class="user-box mb-18">
            <input type="text" required>
            <label>请输入验证码</label>
        </div>
    </form>
    <Button class="wrap mt-58 pd-18" color="white" bjcolor="#f77120">发送验证码</Button>

   
    <Button  @click="lastPage" class="wrap mt-24 pd-18" color="white" bjcolor="#f77120">去登录</Button>
    <!-- 我稍后去登录(报名) -->
</template>

<script lang="ts" setup>
import useJumpInfo from './composables/JumpInfo';

let { toForgotPasswrod,toSignUp } = useJumpInfo();

const lastPage = function () {
    window.history.back();
}
</script>

<style scoped>
.pd-18{
  padding: 1.8rem 0;
}




.signup-go_text{
    font-size: 1.2rem;
    color: rgb(140, 138, 138);
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
  color:#c4c7ce;
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
  color: #c4c7ce;
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
    color: blue;
    font-size: 1.2rem;
    text-align: center;
}
</style>