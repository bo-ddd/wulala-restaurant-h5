<template>
    <main>
        <Head class="head" color="black" imgcolor="0">个人信息</Head>
        <div class="upload wrap mt-20">
            <ExpressInfoItem class="order-info">
                <template #left>
                    <span class="mode">头像</span>
                </template>
                <template #middle>
                    <span class="payment">
                        <van-uploader :after-read="afterRead" />
                    </span>
                </template>
                <template #right>
                    <img class="icon-right" src="@/assets/images/right.png" alt="">
                </template>
            </ExpressInfoItem>
        </div>
    </main>
</template>

<script lang="ts" setup>
const afterRead = (file:object) => {
  // 此时可以自行将文件上传至服务器
  console.log(file);
};
</script>

<style scoped>
main{
    background: #f5f5f5;
    min-height: 100vh;
}
.head{
    background-color: #fff;
}
.upload{
    background: #fff;
    border-radius: 1rem;
    padding: 1rem 1.5rem;
}
.order-info{
    display: grid;
    grid-template-columns: auto 8fr 1.8fr;
    align-items: center;
    justify-items: end;
}
.payment{
    color: #9d9d9d;
}
.mode{
    font-size: 1.4rem;
    font-weight: 550;
}
.icon-right{
    width: 1.6rem;
    filter: invert(67%);
}
</style>