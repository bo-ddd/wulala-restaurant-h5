<template>
    <main>
        <div class="ipt">
            <Head class="head" color="black" imgcolor="0">账户设置</Head>
            <div class="choice mt-20" @click="choiceBirthday">请选择您的生日</div>
        </div>
        <div class="classify-window" :class="{ active:isActive }">
            <div class="options">
                <van-picker
                    title="标题"
                    :columns="columns"
                    @confirm="onConfirm"
                    @cancel="onCancel"
                    @change="onChange"
                />
            </div>
        </div>
        <!-- <Button  @click="confirm" class="wrap btn mt-58" color="white" bjcolor="#f77120">确认</Button> -->
    </main>
</template>

<script lang="ts" setup>
import {userUpdateApi, userInfoApi} from '@/api/api';
import {ref} from 'vue';
import { Notify } from 'vant';
import { useRouter } from "vue-router";
let router = useRouter();
const columns = ['女','男'];

let isActive = ref(false);
const choiceBirthday = function () {
    isActive.value = false;
    return isActive
}
const onConfirm = (value: any, index: any) => {
    console.log(value);
    console.log(1);
    userInfoApi({}).then(res => {
        // console.log(res);
        userUpdateApi({
            userId:  res.data.data.userId,
            sex:index,
            birthday:res.data.data.birthday,
            personalSignature:res.data.data.personalSignature,
            hobby:res.data.data.hobby
        }).then(res => {
            // console.log(res);
            Notify({ type: 'success', message: '修改成功' });
            router.push({name:'userinfo'})
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
};
const onChange = (value: any, index: any) => {
    // Toast(`当前值: ${value}, 当前索引: ${index}`);
    console.log(value);
};
const onCancel = function(){
    isActive.value = true;
    return isActive
}
</script>

<style scoped>
.head {
    background: #fff;
}

.choice {
    text-align: center;
    padding: 1.5rem;
    background-color: #fff;
    font-size: 1.6rem;
}
main {
    background: #f5f5f5;
    min-height: 100vh;
    overflow: hidden;
}
.tips{
    color: #ccc;
    font-size: 1.4rem;
    text-align: center;
}
.btn{
    padding: 1.4rem 0;
}

.classify-window {
    position: absolute;
    bottom: 0;
    z-index: 2;
    width: 100%;
    transform: translateY(0);
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(.1rem);
    animation-name: example;
    animation-duration: 1s;
}

.options {
    background: #fff;
    border-radius: 3rem 3rem 0 0;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.active {
    display: none;
    transition: all 1s ease;
    transform: translateY(100vh);
}

@keyframes example {
    0% {
        bottom: -40rem;
    }

    100% {
        bottom: 0rem;
    }
}
</style>