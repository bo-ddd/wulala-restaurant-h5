<template>
    <div class="box">
        <div class="box-search">
            <div>
                <van-icon name="arrow-left" @click="backtoLast" color="#FFFFFF" />
            </div>
            <div class="item">
                <van-search v-model="searchValue" shape="round"  placeholder="麻辣香锅" @search="onSearch">
                </van-search>
            </div>
        </div>
        <div class="box-text">
            <div class="content-wrapper wrap" v-for="(item) in data.tableDataTwo">
                <div class="content-item">
                    <div class="img">
                        <img :src="item.bannerUrl" alt="" />
                    </div>
                    <div class="content">
                        <span>{{ item.foodName }}</span><br />
                        <p class="description">{{ item.description }}</p>
                    </div>
                    <div class="price">
                        <span>￥{{ item.price }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <template>
	<div>
		<input type="text" v-model="search">
		<button @click="searchBtn">搜索</button>
	</div>
	<p v-for="(item) in tableDataTwo">{{item.name}}</p>
</template> -->



<script setup lang="ts">
import { ref, reactive ,watch} from 'vue';
import { useRouter } from 'vue-router'
import { getFoodListApi } from '@/api/api'
let router = useRouter()
const searchValue = ref('');//搜索框数据绑定
watch(searchValue,(a,b)=>{
if(a == ''){
    data.tableDataTwo = []
}else{
    getFoodListApi({}).then(res => {
            data.bestSellers = res.data.data.list //数据
            
            let sea = searchValue.value
            if (sea) {
                data.tableDataTwo = data.bestSellers.filter((item) => {
                    return Object.keys(item).some(function () {
                        return String(item['foodName']).toLowerCase().indexOf(sea) > -1
                    })
                })
            }
        })
}

})
let data = reactive({
    bestSellers: [],
    tableDataTwo: [],
})
const backtoLast = function () {
    router.go(-1)
}

const onCancel = function () {
    console.log(1); 
};
const onSearch = function () {
    // setTimeout(()=>{
        // getFoodListApi({}).then(res => {
        //     data.bestSellers = res.data.data.list //数据
            
        //     let sea = searchValue.value
        //     if (sea) {
        //         data.tableDataTwo = data.bestSellers.filter((item) => {
        //             return Object.keys(item).some(function () {
        //                 return String(item['foodName']).toLowerCase().indexOf(sea) > -1
        //             })
        //         })
        //     }
        // })
    // },1000)
}
</script>
<style scoped>
.box {
    background-image: url('@/assets/images/bj.png');
    background-repeat: no-repeat;
    background-size: 100% 75%;
    min-height: 100%;
}

.box-search {
    display: flex;
    align-items: center;
    padding-top: 1.8rem;
}

.item {
    width: 80%;
    margin-left: 2rem;
}

.box-text {
    margin-top: 1.4rem;
    height: 10rem;
    background-color: #fff;
    padding-top: .5rem;
}

.content-item {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    justify-content: space-between;
    font-size: 1.8rem;
    font-weight: 600;
    border-bottom: 0.2rem solid #ececec;
}

.img img {
    width: 10.5rem;
    height: 8.5rem;
    border-radius: 1rem;
}

.content {
    margin-right: 5rem;
}

.description {
    font-size: 1.2rem;
    font-weight: 500;
    color: #bcbcb9;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 10rem;
}
</style>