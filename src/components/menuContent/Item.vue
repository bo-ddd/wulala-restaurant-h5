<template>
  <div class="content-item" @click="showPopup" >
    <div class="img">
      <img :src="src" alt="" />
    </div>
    <div class="content">
      <span>{{ content }}</span><br>
      <span class="description">{{ description }}</span>
    </div>
    <div class="price">
      <span>￥{{ price }}</span>
    </div>  
  </div>

  <div class="layer">
    <van-popup v-model:show="show">
      <div class=""></div>
      <!-- <img :src="src" alt="" /> -->
      <span>{{ content }}</span>
      <span>￥{{ price }}</span>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
.description{
  font-size: 1.2rem;
  font-weight: 500;
  color: #bcbcb9;
}

.layer{
  
}
</style>