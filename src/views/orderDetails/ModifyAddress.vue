<template>
    <main>
        <van-nav-bar title="编辑收获地址" left-text="返回" left-arrow @click-left="onClickLeft" />
        <!-- 定位 -->
        <div class="nav">地图</div>
        <div class="address">
            <div class="address-content">
                <p>{{ name }}</p>
                <p>{{ tel }}</p>
            </div>
            <div class="address-btn">修改地址</div>
        </div>

        <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result
            :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave"
            @delete="onDelete" @change-detail="onChangeDetail" @change-area='onCode' />
    </main>
</template>

<script lang="ts" setup>
import { areaList } from '@vant/area-data';
import { deleteDeliveryApi, updateDeliveryApi } from '@/api/api'
import { Dialog } from 'vant'
import { ref } from 'vue';
import { Toast } from 'vant';
import { useRoute } from 'vue-router';
let route = useRoute();
let provinceCode = ref('')  //省的code编码
let cityCode = ref('') //市编码
let areaCode = ref('')  //区编码
const searchResult: any = ref([]);
let id = route.query.id
let name = route.query.name;
let tel = route.query.tel
const onClickLeft = () => history.back();
const onSave = (value: any) => {
    updateDeliveryApi({
        "id": id,
        "provinceCode": provinceCode.value,
        "cityCode": cityCode.value,
        "areaCode": areaCode.value,
        "address": value.addressDetail,
        "townCode": value.postalCode,
        "isDefaultActive": value.isDefault ? 1 : 0,
        "phoneNumber": value.tel ? value.tel : tel,
        "receiver": value.name ? value.name : name
    }).then(res => {
        console.log(res);
    })
};
const onDelete = () => {
    Dialog.confirm({
        message: '地址删除后无法恢复是否删除地址',
    })
        .then(() => {
            deleteDeliveryApi({
                id: id
            }).then(res => {
                console.log(res);
            })
            Toast('删除成功')
            history.back()
            // on confirm
        })
        .catch(() => {
            Toast('取消成功')
        });
};


const onChangeDetail = (val: any) => {
    if (val) {
        searchResult.value = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区',
        }];
    } else {
        searchResult.value = [];
    }
};
const onCode = function (val: { code: string; }[]) {
    provinceCode.value = val[0].code //省的code编码
    cityCode.value = val[1].code //市编码
    areaCode.value = val[2].code //区编码
}
</script>

<style scoped>
main {
    background: #f4f4f4;
    min-height: 100vh;
}

.nav {
    text-align: center;
    padding: 1rem 0;
    border-radius: 1rem;
    border: .1rem solid sandybrown;
    color: sandybrown;
    background-color: #fff;
    font-size: 1.4rem;
    margin: 2rem 2rem 0 2rem;
}

.address {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 1rem;
    font-size: 1.6rem;
    margin: 2rem 2rem 0 2rem;
    padding: 1rem;
}

.address-btn {
    border-radius: .5rem;
    border: .1rem solid sandybrown;
    font-size: 1.2rem;
    padding: .5rem 1rem;
    color: sandybrown;
}

.box {
    background-color: #fff;
    height: 6rem;
}
</style>