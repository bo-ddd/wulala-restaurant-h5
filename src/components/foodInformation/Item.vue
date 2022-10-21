<template>
    <img class="food-details-png" :src='foodList.bannerUrl' alt="">
    <div class="wrap">
        <div>
            <span class="text-details_food">{{foodList.foodName}}</span>
            <div>
                <span class="details-food">约{{foodList.price}}克</span>
                <span class="details-food">{{foodList.price}}</span>
                <span class="details-food">有{{foodList.price}}</span>
            </div>
            <div class="box-price">
                <span class="price—details_food"><span class="symbol">￥</span>{{foodList.price}}</span>
                <span class="specifications-select">+选规格</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import useUlit from '@/assets/ulit/index'
import { getFoodListApi } from '@/api/api'
import { ref } from "vue";
const foodList: any = ref({})
let search = window.location.search
let foodId = search.split('=');
let id = foodId[1]
getFoodListApi({

}).then(res => {
    res.data.data.list.find((el: any) => {
        if (el.foodId == id) {
            foodList.value = el
            console.log(foodList.value);
        }
    });
})
</script>

<style scoped>
.food-details-png {
    width: 100%;
    height: 25.1rem;
}

.text-details_food {
    font-size: 1.7rem;
    font-weight: bold;
}

.details-food {
    font-size: 1.2rem;
    color: #868686;
    background-color: #f6f6f6;
    padding: .3rem .5rem;
    margin-right: .7rem;
    border-radius: .5rem;
}

.symbol {
    font-size: 1.7rem;
}

.price—details_food {
    color: #f4554e;
    font-weight: bold;
}

.box-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .7rem;

}

.specifications-select {
    font-size: 1.5rem;
    background-color: #ffd263;
    padding: .3rem .7rem;
    border-radius: .5rem;
    font-weight: 500;
}
</style>