<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <main>
    <div class="whole">
      <!-- 登录 -->
      <Title class="wrap mt-24" level="1" color="white">注册账号</Title>
      <form class="wrap center from">
          <div class="user-box mb-18">
              <input v-model="userNameIptValue" type="text" required>
              <label :class="{ setcolor:isusernameActive }">{{userNameLabel}}</label>
          </div>
          <div class="user-box mb-18">
              <input v-model="avatarNameIptValue" type="text" required>
              <label :class="{ setcolor:isavatarNameActive }">{{avatarNameLable}}</label>
          </div>
          <div class="user-box mb-18">
              <input v-model="passwordIptValue" onfocus="'password'" type="password" required autocomplete="off">
              <label :class="{setcolor:ispasswordActive}">{{passwordLable}}</label>
          </div>
          <div class="user-box mb-18">
              <input v-model="confirmIptValue" type="text" onfocus="this.type='password'" required>
              <label :class="{ setcolor:isconfirmActive }">{{confirmLable}}</label>
          </div>
          <div class="verification-code">
              <div class="user-box mb-18 width-70">
                  <input v-model="phoneNumberIptValue" type="text" required>
                  <label :class="{ setcolor:isphoneNumberActive }">{{phoneNumberLable}} </label>  
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
import { useRouter } from "vue-router";
import useJumpInfo from './composables/JumpInfo';
import { ref, type Ref } from 'vue';
// import { signUp } from '@/api/api';
import { signUp } from '@/api/api';
let { toForgotPasswrod,toSignUp } = useJumpInfo();

let router = useRouter();
let reg = /^\d{1,}$/; //判断是否为数子;

let isusernameActive = ref(false); //class的显示隐藏 用户名
let ispasswordActive = ref(false); //class的显示隐藏 密码
let isconfirmActive = ref(false); //class的显示隐藏  确认密码
let isphoneNumberActive = ref(false); //class的显示隐藏 手机号
let isavatarNameActive = ref(false); //class的显示隐藏 昵称


let userNameLabel = ref('用户名');
let passwordLable = ref('密码');
let confirmLable = ref('确认密码');
let phoneNumberLable = ref('手机号');
let avatarNameLable = ref('昵称');

let userNameIptValue:Ref<string> = ref(''); //获取input框的值
let passwordIptValue:Ref<string> = ref('');
let phoneNumberIptValue:Ref<string> = ref('');
let confirmIptValue:Ref<string> = ref('');
let avatarNameIptValue:Ref<string> = ref('');
const lastPage = function () {
// window.history.back();

//  判断用户名
if(userNameIptValue.value == ''){
  isusernameActive.value = true; 
  userNameLabel.value = '请输入用户名'
}else if(userNameIptValue.value.length <= 5 || userNameIptValue.value.length >=20){
  userNameLabel.value = '用户名长度必须是在6-20之间';
  isusernameActive.value = true; 
}else if(userNameIptValue.value != ''){
  isusernameActive.value = false;    
  userNameLabel.value = '用户名'
}

// 判断，密码
if (passwordIptValue.value == '') {
  passwordLable.value = '密码不能为空';
  ispasswordActive.value = true
}else if (passwordIptValue.value.length <= 5 || passwordIptValue.value.length >= 20) {
  passwordLable.value = '密码长度必须是在6-20之间';
  ispasswordActive.value = true
} else if(passwordIptValue.value != ''){
  passwordLable.value = '密码'
  ispasswordActive.value = false
}
// 确认密码
if (confirmIptValue.value == '') {
  confirmLable.value = '确认密码不能为空';
  isconfirmActive.value = true;
}else if(confirmIptValue.value != passwordIptValue.value){
  confirmLable.value = '密码不一致，请重新输入';
}else{
  confirmLable.value = '确认密码';
  isconfirmActive.value = false;
}
// 手机号
if (phoneNumberIptValue.value == '') {
  phoneNumberLable.value = '请输入手机号'
  isphoneNumberActive.value = true;
}else if(reg.test(phoneNumberIptValue.value) != true){
  phoneNumberLable.value = '您输入的手机号不合法，请重新输入'
  isphoneNumberActive.value = true;
}else if (phoneNumberIptValue.value.length == 10) {
  phoneNumberLable.value = '您输入的手机号不合法，请重新输入'
  isphoneNumberActive.value = true;
}else {
  phoneNumberLable.value = '手机号'
  isphoneNumberActive.value = false;
}

if (avatarNameIptValue.value != '') {
  if (avatarNameIptValue.value.length >= 12) {
    avatarNameLable.value = '昵称字符长度必须是在1-12';
    isavatarNameActive.value = true;
  }else{
    avatarNameLable.value = '昵称';
    isavatarNameActive.value = false;
  }
}

if(isusernameActive.value == false && ispasswordActive.value==false && isconfirmActive.value == false && isphoneNumberActive.value == false && isavatarNameActive.value == false){
  signUp({
    username:userNameIptValue.value,
    password:passwordIptValue.value,
    avatarName:avatarNameLable.value,
    phoneNumber:phoneNumberIptValue.value
  }).then(res=>{
    console.log('----------res----------');
    console.log(res);
    console.log(res.data.msg);
    if (res.data.msg == '用户名已存在') {
      alert('您已注册过此账号');
      router.push({name:'signin'});
    }else{
      router.push({name:'mine'});
    }
  }).catch(err => {
    console.log('-------------err-----------');
    console.log(err);
  })
}
}

</script>

<style scoped>
.pd-18{
padding: 1.8rem 0;
}
.width-70{
  width: 70%;
}


.setcolor{
color: red !important;
}
.whole{
min-height: 100vh;
overflow: hidden;
backdrop-filter: blur(.4rem);
-webkit-backdrop-filter: blur(.4rem);
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