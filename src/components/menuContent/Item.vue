<template>
  <div class="content-item" @click="showPopup">
    <div class="img">
      <img :src="src" alt="" />
    </div>
    <div class="content">
      <span>{{ content }}</span
      ><br />
      <span class="description">{{ description }}</span>
    </div>
    <div class="price">
      <span>￥{{ price }}</span>
    </div>
  </div>

  <!-- <van-popup v-model:show="show">
      <div class="layer">
        <img :src="src" alt="" />
        <span>{{ content }}</span>
        <span>￥{{ price }}</span>
      </div>
    </van-popup> -->
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
        <span class="red">￥{{ price }}</span>
      </div>
    </div>
    <div class="sum">
      <span>数量</span>
      <van-stepper v-model="value" />
    </div>
    <div class="button">
      <van-button round type="success" size="large">选好了</van-button>
    </div>
  </van-popup>
</template>

<script setup lang="ts">
import { ref } from "vue";

let props = defineProps<{
  src?: string;
  content?: string;
  price?: number;
  description?: string;
}>();

const { src, content, price, description } = props;

const show = ref(false);
const showPopup = () => {
  show.value = true;
};

const value = ref(1);
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
  margin-right: 10rem;
}
.description {
  font-size: 1.2rem;
  font-weight: 500;
  color: #bcbcb9;
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
  /* background: var(--van-button-success-background-color); */
  border: var(--van-button-border-width) solid
    var(--van-button-success-border-color);
}
</style>