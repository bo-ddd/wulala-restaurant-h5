<template>
    <!-- 登录 -->
    <h4 class="sign-in_title wrap mt-24">Sign In</h4>
    <form class="wrap center">
        <div class="user-box mb-18">
            <input type="text" name="" required>
            <label>Email or Phone</label>
        </div>
        <div class="user-box">
            <input type="password" name="" required>
            <label>Password</label>
        </div>
        <!-- 忘记密码？ -->
        <a class="forgot-text" href="#">Forgot your Password?</a>
    </form>
    <div class="sign-in wrap mt-58">Sign in</div>
    <!-- sign up 注册 -->
    <!-- 没有帐户？ -->
    <div class="signup-go_text wrap">Don't have an Account? <a class="forgot-text" href="#">Sign up</a></div>
    <!-- 继续使用Facebook -->
    <div class="sign-in wrap mt-24">Continue with Facebook</div>
    <!-- 我稍后再登录(报名) -->
    <p class="later-signup">I'II sign up later</p>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.sign-in_title{
    padding: 1.5rem 0;
}
.sign-in{
    text-align: center;
    color: #fff;
    padding: 1.8rem 0;
    border-radius: 2.5rem;
    background: #f77120;
    font-size: 1.4rem;
}
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
.login-box .user-box input:valid ~ label {
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