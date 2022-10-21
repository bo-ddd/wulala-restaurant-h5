<template>
    <main>
        <Head class="head" color="black" imgcolor="0">个人信息</Head>
        <div class="upload wrap mt-20">
            <ExpressInfoItem class="order-info border-bottom">
                <template #left>
                    <span class="mode">头像</span>
                </template>
                <template #middle>
                    <span class="payment">
                        <van-uploader :preview-image="false" :after-read="afterRead" />
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
                    <p class="payment"> {{username}} </p>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
        </div>
        <div class="upload wrap mt-20">
            <ExpressInfoItem class="order-info border-bottom">
                <template #left>
                    <span class="mode">生日</span>
                </template>
                <template #middle>
                    <p class="payment" @click="toBirthday">
                        yyy-m-r
                    </p>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
            <ExpressInfoItem class="order-info">
                <template #left>
                    <span class="mode">个性标签</span>
                </template>
                <template #middle>
                    <p class="payment" @click="toSelfLable"> 个性标签 </p>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="" @click="toSelfLable">
                </template>
            </ExpressInfoItem>
        </div>
    </main>
</template>

<script lang="ts" setup> 
import { uploadAvatar , userUpdate} from '@/api/api';
import { Notify } from 'vant';
import { useRouter, useRoute } from 'vue-router';
let router = useRouter();
let route = useRoute();
let username = route.query.name;
// let label = route.query.iptValue;
let afterRead = (file : any) => {
  // 此时可以自行将文件上传至服务器
//   console.log(file.file);
  uploadAvatar({
    file:file.file,
  }).then(res => {
    console.log('-------res UserInfo------');
    console.log(res);
    if (res.data.status == 1) {
        (async function(){
            let userupdate = await userUpdate({
                userId:res.data.status,
                avatarImg:res.data.data.url,
            })
            console.log('-----------------userupdate----------------');
            console.log(userupdate);
            if(userupdate.data.msg=='成功'){
                Notify({ type: 'success', message: '上传头像成功' });
                router.push({name:'mine'})
            }
        })()
    }
  })
};
const toBirthday = function (){
    router.push({name:'birthday'})
}
const toSelfLable = function (){
    router.push({name:'selflable'})
}
</script>

<style scoped>
main{
    background: #f5f5f5;
    min-height: 100vh;
}
.head{
    background-color: #fff;
}
.upload{
    background: #fff;
    border-radius: 1rem;
}
.order-info{
    display: grid;
    grid-template-columns: auto 8fr 1.8fr;
    align-items: center;
    justify-items: end;
    padding: 2rem;
}
.payment{
    color: #9d9d9d;
    font-size: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 8rem;
    white-space: nowrap;    
}
.mode{
    font-size: 1.6rem;
    font-weight: 550;
}
.icon-right{
    width: 1.6rem;
    filter: invert(67%);
}
.border-bottom{
    border-bottom: .1rem solid red 51%;
}
</style>