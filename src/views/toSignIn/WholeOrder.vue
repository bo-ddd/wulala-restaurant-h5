<template>
    <main class="box">
        <div class="loading" v-show="pageLoading">
            <van-loading class="loading-bg" type="spinner" color="#303030" size="24px" v-show="pageLoading" />
        </div>

        <Head color="black" imgcolor="0">全部订单</Head>
        <van-tabs v-model:active="active" swipeable>
            <van-tab class="content"  v-for="(item,i) in  order" :title="item.name" @click-tab="onClickTab(i)">
                
                <van-empty v-show="item.name != '全部'" description="什么都没有哦，快去添加吧" />
                <div class="box-item">

                    <orderDetails.Wrapper v-show="item.name == '全部'">
                        <orderDetails.Item>
                            <van-button round type="success" color="#7232dd" plain size="small" @click="CommodityDetails">再来一单</van-button>
                        </orderDetails.Item>
                    </orderDetails.Wrapper>
                    <orderDetails.Wrapper v-show="item.name == '全部'">
                        <orderDetails.Item>
                            <van-button round type="success" color="#7232dd" plain size="small" @click="CommodityDetails">再来一单</van-button>
                        </orderDetails.Item>
                    </orderDetails.Wrapper>
                    <orderDetails.Wrapper v-show="item.name == '全部'">
                        <orderDetails.Item>
                            <van-button round type="success" color="#7232dd" plain size="small" @click="CommodityDetails">再来一单</van-button>
                        </orderDetails.Item>
                    </orderDetails.Wrapper>
                    <orderDetails.Wrapper v-show="item.name == '全部'">
                        <orderDetails.Item>
                            <van-button round type="success" color="#7232dd" plain size="small" @click="CommodityDetails">再来一单</van-button>
                        </orderDetails.Item>
                    </orderDetails.Wrapper>
                    <orderDetails.Wrapper v-show="item.name == '全部'">
                        <orderDetails.Item>
                            <van-button round type="success" color="#7232dd" plain size="small" @click="CommodityDetails">再来一单</van-button>
                        </orderDetails.Item>
                    </orderDetails.Wrapper>
                    <orderDetails.Wrapper v-show="item.name == '全部'">
                        <orderDetails.Item>
                            <van-button round type="success" color="#7232dd" plain size="small" @click="CommodityDetails">再来一单</van-button>
                        </orderDetails.Item>
                    </orderDetails.Wrapper>
                    <orderDetails.Wrapper v-show="item.name == '全部'">
                        <orderDetails.Item>
                            <van-button round type="success" color="#7232dd" plain size="small" @click="CommodityDetails">再来一单</van-button>
                        </orderDetails.Item>
                    </orderDetails.Wrapper>
    
                    <orderDetails.Wrapper v-show="item.name == '全部'">
                        <orderDetails.Item>
                            <van-button round type="success" color="#7232dd" plain size="small" @click="CommodityDetails">再来一单</van-button>
                        </orderDetails.Item>
                    </orderDetails.Wrapper>
                </div>
             
            </van-tab>
        </van-tabs>
    </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { useRoute,useRouter } from 'vue-router';
import orderDetails from "@/components/orderDetails"
let route = useRoute()
let router = useRouter();
const CommodityDetails = function(){
router.push({name:'detailsOfDishes',query:{foodId:61}})
}
let a = Number (route.query.id) 
let active = ref(a);
let onClickTab = function (i:number) {
    console.log(i);
    
}
let pageLoading = ref(true);
setTimeout(function () {
    pageLoading.value = false;
}, 1000)

const order = [
    {
        id: 1,
        name: '全部'
    }, {
        id: 2,
        name: '待付款'
    }, {
        id: 3,
        name: '待收货'
    }, {
        id: 4,
        name: '待使用'
    }, {
        id: 5,
        name: '待评价'
    }, {
        id: 6,
        name: '退款'
    }
]
</script>

<style scoped>
::v-deep .van-tabs__nav {
    background-color: #f5f5f5;
}

::v-deep .van-tab__panel {
    background-color: #f5f5f5;
}

::v-deep .van-col--6 {
    display: flex;
    align-items: center;
    justify-content: center;
}

main {
    background-color: #f5f5f5;
    min-height: 100vh;
    overflow: hidden;
}
.box-item{
    overflow-y: scroll;
     height: calc(100vh - 9.2rem);
}
.content {
    height: calc(100vh - 9.2rem);
    padding: 1rem;
}
</style>