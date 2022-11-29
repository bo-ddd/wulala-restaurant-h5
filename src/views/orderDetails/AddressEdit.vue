<template>
    <main>
        <van-nav-bar title="地址编辑" left-text="返回" left-arrow @click-left="onClickLeft" />
        <!-- 定位 -->
        <div class="nav" @click="tomap">选择收货地址></div>
        <van-address-edit save-button-text="保存地址" delete-button-text="删除地址" :area-list="areaList" show-postal
            show-delete show-set-default show-search-result :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete"
            @change-detail="onChangeDetail" @change-area='onCode' />
    </main>
</template>

<script lang="ts" setup>
import { areaList } from '@vant/area-data';
import { addDeliveryApi, deleteDeliveryApi, getDeliveryListApi } from '@/api/api'
import { Dialog } from 'vant'
import { ref } from 'vue';
import { Toast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
let router = useRouter();
let route = useRoute();
let provinceCode = ref('')  //省的code编码
let cityCode = ref('') //市编码
let areaCode = ref('')  //区编码
const searchResult: any = ref([]);

let provinceList: any = areaList.province_list; // 省
let cityList: any = areaList.city_list;//市
let countyList: any = areaList.county_list;//区
const onClickLeft = () => history.back();
let list: any = ref([])
const onSave = (value: any) => {
    addDeliveryApi({
        "provinceCode": provinceCode.value, //省编码
        "cityCode": cityCode.value, //市编码
        "areaCode": String(areaCode.value), //区编码
        "address": value.addressDetail, //详情地址
        "townCode": '043500', //街编码
        "isDefaultActive": value.isDefault ? 1 : 0, //是否默认收货地址1：是 0：否如果不传则是0
        "phoneNumber": value.tel, //收货人手机号
        "receiver": value.name //收货人姓名
    })
    router.push('orderDetails');
    getDeliveryListApi({}).then(res => {
        console.log('------------地址列表1----------');
        console.log(res.data.data);

        res.data.data.forEach((el: any, index: number) => {
            list.value.push({
                id: el.id,
                name: el.receiver,
                tel: el.phoneNumber,
                address: provinceList[el.provinceCode] + cityList[el.cityCode] + countyList[el.areaCode] + el.address,
                isDefault: el.isDefaultActive ? true : false,
            })
        })
        // list.value.forEach((item: any) => {
        //     if (item.isDefault) {
        //         defaultAddress.value = item
        //         chosenAddressId.value = item.id
        //     }
        // })

    })
};
let id = route.query.id
const onDelete = () => {
    Dialog.confirm({
        message: '地址删除后无法恢复是否删除地址',
    })
        .then(() => {
            deleteDeliveryApi({
                id: id
            })
            Toast('删除成功')
            history.back()
        })
        .catch(() => {
            Toast('取消成功')
        });

};

const tomap = () => {
    router.push('map')
};

const onChangeDetail = (val: any) => {
    if (val) {
        searchResult.value = [{
            // name:''
            address: val,
        }];
    } else {
        searchResult.value = [];
    }
};

let name = route.query.name;
let tel = route.query.tel
console.log(name);
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
</style>