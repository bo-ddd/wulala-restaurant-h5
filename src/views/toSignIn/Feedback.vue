<template>
    <main>
        <div class="loading" v-show="pageLoading">
            <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading" />
        </div>

        <Head class="head" color="black" imgcolor="0">意见反馈</Head>
        <div class="content">
            <div class="content-sup wrap mt-20">
                <p class="pb-10">问题类型</p>
                <div class="df-sp">
                    <div class="type" :class="{ border: isActive }" @click="hide">
                        功能异常
                        <p class="mt-10">内容报错、卡顿、错位等</p>
                    </div>
                    <div class="type" :class="{ border: isActives }" @click="hides">
                        产品改进
                        <p class="mt-10">反馈产品及服务化建议</p>
                    </div>
                </div>
            </div>
            <div class="content-sup wrap mt-20">
                <p class="pb-10">反馈描述</p>
                <van-cell-group inset>
                    <van-field v-model="message" rows="2" autosize label="" type="textarea" maxlength="150"
                        placeholder="说说您的建议或问题,我们会尽快改进,以便提供更好的服务(5字以上)" show-word-limit />
                </van-cell-group>
                <div class="tips" :class="{none:isTips}">
                    上传图片事情说的更明白
                    <!-- 三角形 -->
                </div>
                <div class="triangle" :class="{none:isTips}"></div>
                <van-uploader v-model="fileList" :deletable="false" />
            </div>
            <!-- 提示 -->
            <div class="content-sup wrap mt-20">
                <p class="pb-10">联系方式(选填)</p>
                <van-field v-model="tel" type="tel" label="手机号" />
            </div>
        </div>
        <div class="botton" v-if="message == ''">
            <Button class="wrap btn mt-20 mb-20" color="rgb(156, 156, 156)" bjcolor="#e8e8e8">提交反馈</Button>
        </div>
        <div class="botton" v-else>
            <Button @click="toUp" class="wrap btn mt-20 mb-20" color="black" bjcolor="#f7d347">提交反馈</Button>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Notify } from 'vant';
const fileList = ref([]);
const tel = ref('');
const toUp = function(){
    if(tel.value.length !== 11){
        Notify({ type: 'primary', message: '请输入正确的手机号' });
    }
}
let isTips = ref(true);
let pageLoading = ref(true);
let isActive = ref(false);
let isActives = ref(false);
let message = ref('');//反馈
    isTips.value = false;
    setTimeout(function () {
        isTips.value = true;
    },4000)
const hide = function () {
    isActive.value = true;
    isActives.value = false;
}
const hides = function () {
    isActives.value = true
    isActive.value = false;
}
setTimeout(function () {
    pageLoading.value = false;
}, 1000)
</script>

<style scoped>
main { 
    background: #f4f4f4;
    overflow: hidden;
    min-height: 100vh;
    color: rgb(156, 156, 156);
}

.botton {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.btn {
    padding: 1.5rem 0;
}

.content {
    height: calc(100vh - 11.5rem);
    overflow-y: scroll;
}

.content-sup {
    background-color: #fff;
    font-size: 1.6rem;
    border-radius: .5rem;
    color: black;
    font-weight: 600;
    padding: 1rem;
}

.type {
    display: inline-block;
    background-color: #f4f4f4;
    padding: 1rem;
    text-align: center;
    border-radius: .5rem;
    box-sizing: border-box;
    border: .1rem solid #f4f4f4;
}
.type p {
    color: #ccc;
    font-size: 1.2rem;
}

.border {
    border: .1rem solid #4f83e8;
    color: #4f83e8;
    background: #f5f8ff;
}
img{
    width: 100%;
    height: 100%;
}
.tips{
    font-size: 1.4rem;
    padding: .6rem;
    background: #4c4c4c;
    color: #fff;
    border-radius: .8rem;
    width: fit-content
}
.triangle{
    width: 0;
    height: 0;
    border-top: 1rem solid #4c4c4c;
    border-right: 1rem solid transparent;
    border-left: 1rem solid transparent;
    transform: translate(30px, -1px);
}
.none{
    display: none;
}
</style>