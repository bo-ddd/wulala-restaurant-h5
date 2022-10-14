<template>
    <main>
      <div class="whole">
        <!-- 登录 -->
        <Title class="wrap mt-24" level="1" color="white">注册账号</Title>
        <form class="wrap center from">
            <div class="user-box mb-18">
                <input v-model="userNameIptValue" type="text" required>
                <label>电子邮件/手机号</label>
            </div>
            <div class="user-box mb-18">
                <input type="password" required autocomplete="off">
                <label>密码</label>
            </div>
            <div class="user-box mb-18">
                <input type="text" onfocus="this.type='password'" required>
                <label>确认密码</label>
            </div>
            <div class="verification-code">
                <div class="user-box mb-18 width-70">
                    <input type="text" required>
                    <label>验证码 </label>  
                </div>
                <div class="send">发送验证码</div>
            </div>
        </form>
        <!-- 继续使用Facebook -->
        <Button  @click="lastPage" class="wrap btn pd-18" color="white" bjcolor="#f77120">注册账号</Button>
        <!-- 我稍后再登录(报名) -->
      </div>
    </main>
</template>

<script lang="ts" setup>
import useJumpInfo from './composables/JumpInfo';
import { ref, type Ref } from 'vue';
import { signUp } from '@/api/api';
let { toForgotPasswrod,toSignUp } = useJumpInfo();

let userNameIptValue = ref(null);
const lastPage = function () {
  // window.history.back();
  console.log(userNameIptValue.value);
  // console.log(userNameIptValue.value.length)
}

if(userNameIptValue.value == null){
  
}

// signUp({
//   username:'xiaoming4',
//   password:'999999',
//   avatarName:'小飞侠',
//   phoneNumber :'14413321321'
// }).then(res => {
//   console.log('----res ---');
//   console.log(res);
  
// }).catch(err => {
//   console.log(err);
  
// })

</script>

<style scoped>
.pd-18{
  padding: 1.8rem 0;
}
.width-70{
    width: 70%;
}


.whole{
  min-height: 100vh;
  overflow: hidden;
  backdrop-filter: blur(.4rem);
}
main{
  min-height: 100vh;
  overflow: hidden;
  background-image: url("@/assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}


.btn{
  transform: translateY(200%);
  opacity: .8;
}
.send{
    font-size: 1.2rem;
    color: #2d5b73;
    border-radius: 2rem;
    background: #eddda9;
    padding: .5rem 1rem;
}
.from{
  transform: translateY(30%);
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
  color: #ebd79a;
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
  color:#ebd79a;
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
.verification-code{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>