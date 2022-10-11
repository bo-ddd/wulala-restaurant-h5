<template>
  <main>
    <!-- 登录 -->
    <Title class="wrap mt-24" level="1" color="white">找回密码</Title>
    <form class="wrap from center">
        <div class="user-box mb-18">
            <input type="text" required>
            <label>账号的手机号/邮箱</label>
        </div>
        <div class="verification-code">
          <div class="user-box mb-18 width-70">
              <input type="text" required>
              <label>请输入验证码</label>
          </div>
          <div class="send">发送验证码</div>
        </div>
    </form>
    <Button  @click="lastPage" class="wrap mt-24 pd-18" color="white" bjcolor="#f77120">去登录</Button>
    <!-- 我稍后去登录(报名) -->
  </main>
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
.width-70{
    width: 70%;
}



.send{
    font-size: 1.2rem;
    color: #2d5b73;
    border-radius: 2rem;
    background: #eddda9;
    padding: .5rem 1rem;
}
.verification-code{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: blue;
    font-size: 1.2rem;
    text-align: center;
}
.from{
  transform: translateY(60%);
}
.btn{
  transform: translateY(100%);
  opacity: .8;
}
</style>