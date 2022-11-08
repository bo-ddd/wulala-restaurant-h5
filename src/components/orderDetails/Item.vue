<template>
    <div class="time-box">
        <div class="item-time">下单时间: 2022-10-24 16:00</div>
        <div class="state">已完成</div>
    </div>
    <hr />
    <van-row>
        <van-col span="18">
            <div class="item-data">
                <img class="item-img" src="@/assets/images/banaer-1.png" alt="">
                <span class="item-name">经典珍珠奶茶</span>
            </div>
        </van-col>
        <van-col span="6">
            <div class="total">共计两件</div>
        </van-col>
    </van-row>
    <div class="box-total_price">
        <div><span class="total-price">合计</span><span class="price">￥12</span></div>
        <van-button round type="success" color="#7232dd" plain size="small">再来一单</van-button>
    </div>
</template>
<style scoped>
.item-img {
    width: 8.5rem;
    height: 6rem;
}

.item-time {
    font-size: 1.5rem;
    font-weight: 600;

}

.item-data {
    margin-bottom: 1rem;
}

.item-name {
    font-size: 1.4rem;
    margin-left: .5rem;
}

.total {
    font-size: 1.4rem;
}

.state {
    font-size: 1.2rem;
    color: rgb(48, 48, 48);
}

.time-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.total-price {
    font-size: 1.2rem;
    color: rgb(48, 48, 48);

}

.price {
    font-size: 1.6rem;
    font-weight: 600;
    color: rgb(10, 8, 8);
}

.box-total_price {
    display: flex;
    justify-content: space-between;
}
</style>