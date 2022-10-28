<template> 
    <main>
        <div class="loading" v-show="pageLoading">
            <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading"/>
        </div>  
        <Head class="head" color="black" imgcolor="0">
            <template #icon>
                <img @click="lastPage" src="/src/assets/images/icon-left.png" alt="">
            </template>
            个人信息
        </Head>
        <div class="upload wrap mt-20">
            <ExpressInfoItem class="order-info border-bottom">
                <template #left>
                    <span class="mode">头像</span>
                </template>
                <template #middle>
                    <span class="payment">
                        <van-uploader :preview-image="true" multiple v-model="fileList" :max-count="1" :upload-icon="avatarImg"
                        :after-read="afterRead" />
                    </span>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
            <ExpressInfoItem class="order-info">
                <template #left>
                    <span class="mode">昵称</span>
                </template>
                <template #middle>
                    <!-- modify : 修改 name  -->
                    <p class="payment" @click="toModifyName"> {{ username }} </p>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
        </div>
        <div class="upload wrap mt-20">
            <ExpressInfoItem class="order-info border-bottom" @click="toBirthday">
                <template #left>
                    <span class="mode">生日</span>
                </template>
                <template #middle>
                    <p class="payment" v-if="birthday == null">
                        yyy-mmm-n
                    </p>
                    <p class="payment" v-else>
                        {{ birthday }}
                    </p>
                </template>
                <template #right>
                    <img @click="toBirthday" class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
            <ExpressInfoItem class="order-info" @click="toModifyphoneNumber">
                <template #left>
                    <span class="mode">手机号</span>
                </template>
                <template #middle>
                    <p class="payment"> {{ cellPhoneNumber }} </p>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
            <ExpressInfoItem class="order-info" @click="toSex">
                <template #left>
                    <span class="mode">性别</span>
                </template>
                <template #middle>
                    <p class="payment"> {{ sex }} </p>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
            <ExpressInfoItem class="order-info" @click="toModifyAutograph">
                <template #left>
                    <span class="mode">个性签名</span>
                </template>
                <template #middle>
                    <p class="payment"> {{ personalSignature }} </p>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
            <ExpressInfoItem class="order-info" @click="toModifyHobby">
                <template #left>
                    <span class="mode">爱好</span>
                </template>
                <template #middle>
                    <p class="payment"> {{ hobby }} </p>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { uploadAvatarApi, userUpdateApi, userInfoApi } from '@/api/api';
import { Notify } from 'vant';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';

let pageLoading = ref(true);

let router = useRouter();
let route = useRoute();
let username = ref();
let userId = ref();
let cellPhoneNumber = ref();//手机号
let birthday = ref('');//生日
let sex = ref();
let personalSignature = ref();//个性签名
let hobby = ref();//爱好
// console.log(hobby.value);

let avatarImg = ref("");
const fileList = ref([]);
setTimeout(() => {
    userInfoApi({}).then(res => {
    // console.log(res);
    avatarImg.value=res.data.data.avatarImg;
    username.value = res.data.data.avatarName;
    userId.value = res.data.data.userId;
    cellPhoneNumber.value = res.data.data.phoneNumber;
    birthday.value = res.data.data.birthday.slice(0, 10);
    sex.value = res.data.data.sex == 0 ? '女' : '男';
    personalSignature.value = res.data.data.personalSignature == '' ? '去设置' :res.data.data.personalSignature ;
    hobby.value = res.data.data.hobby == '' ? '去设置':res.data.data.hobby;
    hobby.value = hobby.value.substring(0, hobby.value.lastIndexOf(','));//去除最后小数点
}).catch(err => {
    console.log(err);
})
pageLoading.value = false;
}, 400);

let afterRead = (file: any) => {
    // 此时可以自行将文件上传至服务器
    //   console.log(file.file);
    uploadAvatarApi({
     file: file.file,
    }).then(ress => {
    //  console.log('-------res UserInfo------');
    //  console.log(ress);
     if (ress.data.status == 1) {
          userInfoApi({}).then(res => {
               (async function () {
                let userupdate = await userUpdateApi({
                   userId: res.data.data.userId,
                   sex:res.data.data.sex,
                   birthday:res.data.data.birthday,
                   personalSignature:res.data.data.personalSignature,
                   hobby:res.data.data.hobby,
                   avatarImg: ress.data.data.url,
                })
                // console.log('-----------------userupdate----------------');
                // console.log(userupdate);
                // console.log(res.data.data.avatarImg);
                
                if (userupdate.data.msg == '成功') {
                   Notify({ type: 'success', message: '上传头像成功' });
                   router.push({ name: 'mine' })
                }
               })()
          })
     }
     if(ress.data.msg == 9103){
          Notify({ type: 'success', message: ress.data.data.msg });
     }
    })
};
const lastPage = function () {
    router.push({ name: 'mine' })
}
const toBirthday = function () {
    router.push({ name: 'birthday' })
}
const toModifyName = function () {
    router.push({name:'modifyname'})
}
const toModifyphoneNumber = function(){
    router.push({name:'modifyphonenumber'})
}
const toModifyAutograph = function(){
    router.push({name:'modifyautograph'});
}
const toSex = function (){
    router.push({name:'modifysex'});
}
const toModifyHobby = function (){
    router.push({name:'modifyhobby'})
}
</script>

<style scoped>
main {
    background: #f5f5f5;
    min-height: 100vh;
}

.head {
    background-color: #fff;
}

.upload {
    background: #fff;
    border-radius: 1rem;
}

.order-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
}

.payment {
    color: #9d9d9d;
    font-size: 1.6rem;
    /* width: 12rem; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.mode {
    font-size: 1.6rem;
    font-weight: 550;
}

.icon-right {
    width: 1.6rem;
    filter: invert(67%);
}

.border-bottom {
    border-bottom: .1rem solid red 51%;
}
.loading{
    background-color: #fff;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

::v-deep .van-badge__wrapper{
    width: 8rem;
    height: 8rem;
}
::v-deep .van-uploader__upload-icon{
    font-size: 8rem;
    height: 100%;
}
::v-deep .van-uploader__upload{
    margin: 0;
    background:0;
}
</style>