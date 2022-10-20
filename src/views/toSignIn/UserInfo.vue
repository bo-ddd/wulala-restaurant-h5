<template>
    <main>
        <Head class="head" color="black" imgcolor="0">个人信息</Head>
        <div class="upload wrap mt-20">
            <ExpressInfoItem class="order-info">
                <template #left>
                    <span class="mode">头像</span>
                </template>
                <template #middle>
                    <span class="payment" >
                        <van-uploader :preview-image="false" :after-read="afterRead" />
                    </span>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
        </div>
    </main>
</template>

<script lang="ts" setup> 
import { uploadAvatar } from '@/api/api';
import { Notify } from 'vant';
import { useRouter } from 'vue-router';
let router = useRouter();
let afterRead = (file : any) => {
  // 此时可以自行将文件上传至服务器
  console.log(file.file);
  uploadAvatar({
    file:file.file,
  }).then(res => {
    console.log('-------res UserInfo------');
    console.log(res);
    console.log(res.data.data.url);
    if (res.data.status == 1) {
        Notify({ type: 'success', message: '上传头像成功' });
        router.push({name:'mine',query:{imgage:res.data.data.url}})
    }
  })
};
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
    padding: 1rem;
}
.payment{
    color: #9d9d9d;
}
.mode{
    font-size: 1.6rem;
    font-weight: 550;
}
.icon-right{
    width: 1.6rem;
    filter: invert(67%);
}
</style>