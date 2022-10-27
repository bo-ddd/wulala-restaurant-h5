<template>
    <main>
        <div class="ipt">
            <van-cell-group inset>
                <van-field
                    v-model="iptvalue"
                    rows="2"
                    autosize
                    label="个性签名"
                    type="textarea"
                    maxlength="50"
                    placeholder="请输入签名"
                    show-word-limit
                />
            </van-cell-group>
        </div>
        <!-- 提示 -->
        <!-- <p class="tips">用户名长度必须在6-20位之间切不能存在特殊字符</p> -->
        <Button  @click="confirm" class="wrap btn mt-58" color="white" bjcolor="#f77120">确认</Button>
    </main>
</template>

<script lang="ts" setup>
import {userInfoApi,userUpdateApi} from '@/api/api';
import { useRouter } from "vue-router";
import { ref } from 'vue';
import { Notify } from 'vant';
let router = useRouter();
let iptvalue = ref();
userInfoApi({}).then(res => {iptvalue.value = res.data.data.personalSignature;});

const confirm = function(){
    userInfoApi({}).then(res => {
        if (iptvalue.value == '') {
            iptvalue.value = res.data.data.avatarName;
        }else{
            userUpdateApi({
                avatarName:res.data.data.avatarName,
                userId:  res.data.data.userId,
                sex:res.data.data.sex,
                birthday:res.data.data.birthday,
                personalSignature:iptvalue.value,
                hobby:res.data.data.hobby,
                phoneNumber:res.data.data.phoneNumber,
            }).then(res => {
                console.log(res);
                Notify({ type: 'success', message: '修改成功' })
                router.push({name:'userinfo'})
            }).catch(err => {
                console.log(err);
            })
        }
    }).catch(err => {
        console.log(err);
    })
}
</script>

<style scoped>
main {
    background: #f5f5f5;
    min-height: 100vh;
    overflow: hidden;
}
.ipt{
    margin: 2rem 0;
}
.tips{
    color: #ccc;
    font-size: 1.4rem;
    text-align: center;
}
.btn{
    padding: 1.4rem 0;
}
</style>