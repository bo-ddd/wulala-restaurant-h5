<template>
    <!-- 登录 -->
    <Title class="wrap mt-24" level="1" color="block">Sign In</Title>
    <form class="wrap center">
        <div class="user-box mb-18">
            <input type="text" required>
            <label>Email or Phone</label>
        </div>
        <div class="user-box">
            <input type="password" required autocomplete="off">
            <label>Password</label>
        </div>
        <!-- 忘记密码？ -->
        <a class="forgot-text" href="#">Forgot your Password?</a>
    </form>
    <Button class="wrap mt-58" color="white" bjcolor="#f77120">Sign in</Button>
    <!-- sign up 注册 -->
    <!-- 没有帐户？ -->
    <div class="signup-go_text wrap">Don't have an Account? <a class="forgot-text" href="#" @click="toSignUp">Sign up</a></div>
    <!-- 继续使用Facebook -->
    <Button class="wrap mt-24" color="white" bjcolor="#f77120">Continue with Facebook</Button>
    <!-- 我稍后再登录(报名) -->
    <p class="later-signup">I'II sign up later</p>
</template>

<script lang="ts" setup>
import useRecommendSignUp from "./composables/RecommendSignUp";
let { toSignUp } = useRecommendSignUp();
</script>

<style scoped>
.signup-go_text{
    font-size: 1.2rem;
    color: rgb(140, 138, 138);
    padding: 2.4rem 0;
    text-align: center;
    border-bottom: .1rem solid #bbb;
}
.later-signup{
    text-align: center;
    font-size: 1.6rem;
    padding: 1.2rem 0;
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