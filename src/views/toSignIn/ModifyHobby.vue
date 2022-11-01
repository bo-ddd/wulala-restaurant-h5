<template>
    <main> 
        <Head class="head" color="black" imgcolor="0">爱好</Head>
        <van-checkbox-group v-model="checked" class="mt-20">
            <van-cell-group inset>
                <van-cell v-for="(item, index) in list" clickable :key="item" :title="`${item}`"
                    @click="toggle(index)">
                    <template #right-icon>
                        <van-checkbox :name="item" :ref="el => checkboxRefs[index] = el" @click.stop />
                    </template>
                </van-cell>
            </van-cell-group>
        </van-checkbox-group>
        <Button @click="confirm" class="wrap btn mt-20" color="white" bjcolor="#f77120">确认</Button>
    </main>
</template>

<script lang="ts">
import { ref, onBeforeUpdate } from 'vue';
import {userInfoApi,userUpdateApi} from '@/api/api';
import { useRouter } from "vue-router";
import { Notify } from 'vant';
export default {
    setup() {
        let arr = ref([]);
        let router = useRouter();
        const checked = ref([]);
        const checkboxRefs = ref([]);
        const toggle = (index) => {
            checkboxRefs.value[index].toggle();
        };
        const confirm =function(){
            let hobby = checked.value;
            let hobbys = ref('');
            // console.log(hobby);
            // console.log(hobbys);
            hobby.forEach(e => {
                // console.log(e);
                hobbys.value += e+',';
                // console.log(e);
                
                userInfoApi({}).then(res => {
                    console.log(res.data.data.hobby);
                    arr.value = res.data.data.hobby;
                    userUpdateApi({
                        avatarName:res.data.data.avatarName,
                        userId:  res.data.data.userId,
                        sex:res.data.data.sex,
                        birthday:res.data.data.birthday,
                        personalSignature:res.data.data.personalSignature,
                        hobby:hobbys.value,
                        phoneNumber:res.data.data.phoneNumber,
                    }).then(res => {
                        Notify({ type: 'success', message: '修改成功' })
                        router.push({name:'userinfo'})
                    }).catch(err => {
                        console.log(err);
                    })
                }).catch(err => {
                    console.log(err);
                })
            });            
        }
        onBeforeUpdate(() => {
            checkboxRefs.value = [];
        });

        return {
            list: ['洗澡', '游泳','健身','打篮球','跑步','打游戏','羽毛球','听音乐','写小说','弹吉他','看电影','跳绳','学Web'],
            toggle,
            checked,
            checkboxRefs,
            confirm,
            arr
        };
    },
};
</script>

<style scoped>
main {
    background: #f5f5f5;
    min-height: 100vh;
    overflow: hidden;
}

.btn {
    padding: 1.4rem 0;
}
.head{
    background: #fff;
}
</style>