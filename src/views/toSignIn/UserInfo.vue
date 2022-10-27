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
                        <van-uploader v-model="fileList" :preview-image="true" multiple :max-count="2"
                        :after-read="afterRead" />
                        <!-- <van-uploader v-model="fileList" multiple :max-count="2" /> -->
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
                    <p class="payment"> {{ username }} </p>
                </template>
                <!-- <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template> -->
            </ExpressInfoItem>
        </div>
        <div class="upload wrap mt-20">
            <ExpressInfoItem class="order-info border-bottom">
                <template #left>
                    <span class="mode">生日</span>
                </template>
                <template #middle>
                    <p class="payment" @click="toBirthday" v-if="birthday == null">
                        yyy-mmm-n
                    </p>
                    <p class="payment" @click="toBirthday" v-else>
                        {{ birthday }}
                    </p>
                </template>
                <template #right>
                    <img @click="toBirthday" class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
            <ExpressInfoItem class="order-info">
                <template #left>
                    <span class="mode">手机号</span>
                </template>
                <template #middle>
                    <p class="payment"> {{ cellPhoneNumber }} </p>
                </template>
            </ExpressInfoItem>
            <ExpressInfoItem class="order-info">
                <template #left>
                    <span class="mode">性别</span>
                </template>
                <template #middle>
                    <p class="payment"> {{ sex }} </p>
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
const fileList = ref([]);
setTimeout(() => {
    userInfoApi({}).then(res => {
    console.log(res);
    username.value = res.data.data.avatarName;
    userId.value = res.data.data.userId;
    cellPhoneNumber.value = res.data.data.phoneNumber;
    birthday.value = res.data.data.birthday.slice(0, 10);
    sex.value = res.data.data.sex == 0 ? '女' : '男';
}).catch(err => {
    console.log(err);
})
pageLoading.value = false;
}, 400);
// let date = route.query.date; //生日
let afterRead = (file: any) => {
    // 此时可以自行将文件上传至服务器
    //   console.log(file.file);
    uploadAvatarApi({
        file: file.file,
    }).then(res => {
        // console.log('-------res UserInfo------');
        // console.log(res);
        if (res.data.status == 1) {
            (async function () {
                let userupdate = await userUpdateApi({
                    userId: userId,
                    avatarImg: res.data.data.url,
                })
                // console.log('-----------------userupdate----------------');
                // console.log(userupdate);
                if (userupdate.data.msg == '成功') {
                    Notify({ type: 'success', message: '上传头像成功' });
                    router.push({ name: 'mine' })
                }
            })()
        }
    })
};
const lastPage = function () {
    router.push({ name: 'mine' })
}
const toBirthday = function () {
    router.push({ name: 'birthday' })
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
</style>