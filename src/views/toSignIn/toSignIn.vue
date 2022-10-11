<template>
  <main>
    <!-- 登录 -->
    <Title class="wrap mt-24" level="1" color="white">登录</Title>
    <form class="wrap center">
        <div class="user-box mb-18">
            <input type="text" required>
            <label>电子邮件或电话</label>
        </div>
        <div class="user-box">
            <input type="password" required autocomplete="off">
            <label>密码</label>
        </div>
        <!-- 忘记密码？ Forgot  -->
        <a class="forgot-text" @click="toForgotPasswrod">忘记密码?</a>
    </form>
    <Button class="wrap mt-58 pd-18" color="white" bjcolor="#f77120">登录</Button>
    <!-- sign up 注册 -->
    <!-- 没有帐户？ -->
    <div class="signup-go_text wrap">没有帐户? <a class="forgot-text" @click="toSignUp">注册</a></div>
    <!-- 继续使用Facebook -->
    <Button  @click="lastPage" class="wrap mt-24 pd-18" color="white" bjcolor="#f77120">我稍后再登录</Button>
    <!-- 我稍后再登录(报名) -->
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


main{
  min-height: 100vh;
  overflow: hidden;
  background-image: 
    radial-gradient(closest-side, rgba(235 , 105 , 78 , 1), rgba(235 , 105 , 78 , 0)),
    radial-gradient(closest-side, rgba(234 , 11 , 164 , 1), rgba(234 , 11 , 164 , 0)),
    radial-gradient(closest-side, rgba(254 , 234 , 131 , 1), rgba(254 , 234 , 131 , 0)),
    radial-gradient(closest-side, rgba(170 , 142 , 245 , 1), rgba(170 , 142 , 245 , 0)),
    radial-gradient(closest-side, rgba(248 , 192 , 147 , 1), rgba(248 , 192 , 147 , 0))
  ;
  background-size: 
    130vmax 130vmax,
    80vmax  80vmax,
    90vmax 90vmax,
    110vmax 110vmax,
    90vmax 90vmax
  ;
  background-position: 
    -80vmax -80vmax,
    60vmax -30vmax,
    10vmax 10vmax,
    -30vmax -10vmax,
    50vmax 50vmax
  ;
  background-repeat: no-repeat;
  animation: 5s movement linear infinite;
}
@keyframes movement {
  0%, 100%{
    background-size: 
    130vmax 130vmax,
    80vmax  80vmax,
    90vmax 90vmax,
    110vmax 110vmax,
    90vmax 90vmax
    ;
    background-position: 
      -80vmax -80vmax,
      60vmax -30vmax,
      10vmax 10vmax,
      -30vmax -10vmax,
      50vmax 50vmax
    ;
  }
  25% {
    background-size: 
      90vmax 90vmax,
      90vmax  90vmax,
      100vmax 100vmax,
      90vmax 90vmax,
      70vmax 70vmax
    ;
    background-position: 
      -50vmax -40vmax,
      50vmax -30vmax,
      20vmax -30vmax,
      -10vmax 10vmax,
      40vmax 60vmax
    ;
  }
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
    color: #f77120;
    font-size: 1.2rem;
    text-align: center;
}
</style>