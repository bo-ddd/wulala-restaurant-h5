<template>
  <div class="content-item" @click="showPopup">
    <div class="img">
      <img :src="src" alt="" />
    </div>
    <div class="content">
      <span>{{ content }}</span
      ><br />
      <p class="description">{{ description }}</p>
    </div>
    <div class="price">
      <span>￥{{ price }}</span>
    </div>
  </div>
  <van-popup
    v-model:show="show"
    closeable
    round
    position="bottom"
    :style="{ height: '40%' }"
  >
    <div class="layer">
      <img :src="src" alt="" />
      <div class="contents">
        <span class="balck">{{ content }}</span>
        <span class="descriptions">{{ description }}</span>
        <span class="red">￥{{ price }}</span>
      </div>
    </div>
    <div class="sum">
      <span>数量</span>
      <van-stepper v-model="value" />
    </div>
    <div class="button">
      <van-button round type="success" size="large" @click="submuit"
        >选好了</van-button
      >
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
import { cartAddApi } from "@/api/api";

let props = defineProps<{
  src?: string;
  content?: string;
  price?: number;
  description?: string;
  foodId?: number;
}>();

const { src, content, price, description, foodId } = toRefs(props);

const show = ref(false);
const showPopup = () => {
  show.value = true;
};

const value = ref(1);

let submuit = () => {
  console.log(value.value);
  console.log(content?.value);
  console.log(description?.value);
  console.log(price?.value);
  console.log(foodId?.value);

  let data: any = ref([]);
  let localStorageNull = sessionStorage.getItem("token"); //登录状态
  let getCartAdd = JSON.parse(localStorage.getItem("cartAdd")); //本地存储的数据
  if (localStorageNull == null) {
    //没登录
    if (getCartAdd == null) {
      //没数据
      data.value.push({
        productId: foodId?.value,
        quantity: value.value,
      });
      localStorage.setItem("cartAdd", JSON.stringify(data.value));
    } else {
      data.value.push({
        productId: foodId?.value,
        quantity: value.value,
      });
      let datas = [...data.value, ...getCartAdd];
      localStorage.setItem("cartAdd", JSON.stringify(datas));
    }
  }  else{
    console.log('调接口');
    cartAddApi({
    productId:foodId?.value,
    quantity:value.value
  }).then(res =>{
    console.log(res);
  })
  }

  show.value = false;
};
</script>

<style scoped>
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
  padding: 1rem 0;
}

.layer {
  display: flex;
  margin: 2rem;
}
.layer img {
  width: 10rem;
  height: 10rem;
}
.contents {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 2rem;
}
.balck {
  font-size: 1.8rem;
  font-weight: 600;
}
.red {
  color: red;
  font-weight: 600;
}
.sum {
  display: flex;
  margin: 2rem;
  justify-content: space-between;
  font-size: 1.8rem;
  font-weight: 600;
}
.button {
  margin: 2rem;
}
.van-button--success {
  background-image: url(/src/assets/images/bj.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: var(--van-button-border-width) solid
    var(--van-button-success-border-color);
}
.descriptions {
  font-size: 1.3rem;
  margin-top: -1rem;
  color: #bcbcb9;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>