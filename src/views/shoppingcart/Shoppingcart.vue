<template>
    <div class="box-dir">
        <div class="wrap">
            <Title color="#000">购物车</Title>
        </div>
        <div class="wrap">
            <div class="box-shopping">
                <div class="box-food_png">
                    <img class="food-png" src="@/assets/images/dwx.png" alt="">
                </div>
                <div class="ml-10 box">
                    <div class="name">
                        <span class="text">大螃蟹</span>
                        <img class="icon-del" src="@/assets/images/icon-del.png" alt="">
                    </div>
                    <div class="specifications">
                        <span class="text"> 规格：</span>
                    </div>

                    <div class="box-price">
                        <div>
                            <span class="price"><span class="symbol">￥</span>199</span>
                        </div>
                        <div class="box-btn">
                            <img class="icon-btn" src="@/assets/images/icon-sub.png" alt="">
                            <span class="text">1</span>
                            <img class="icon-btn" src="@/assets/images/icon-add.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import Title from '@/components/Title.vue'
import useUlit from '@/assets/ulit/index'
import { getFoodListApi } from '@/api/api';
let { parsrAsssetFile } = useUlit()
getFoodListApi({

}).then(res => {
    console.log(res);

})

</script>
<style scoped>
.box-dir {
    background-color: #f5f5f5;
    height: calc(100vh - 5rem);
}

.box-shopping {
    display: flex;
    background-color: #fff;
    border-radius: 1rem;
}

.box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: .2rem 1rem;
}

.name {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.specifications {
    display: flex;
}

.box-price {
    display: flex;
    justify-content: space-between;
    align-items: center;

}



.text {
    font-size: 1.4rem;
}

.symbol {
    font-size: 1.4rem;
}

.price {
    font-size: 2rem;
    color: red;
}

.food-png {
    width: 9rem;
    height: 9rem;
    border-radius: 1rem;
}

.icon-del {
    width: 2rem;
    height: 2rem;

}

.box-btn {
    display: flex;
    flex-grow: .1;
    justify-content: space-between;
    align-items: center
}

.icon-btn {
    width: 2rem;
    height: 2rem;
}
</style>