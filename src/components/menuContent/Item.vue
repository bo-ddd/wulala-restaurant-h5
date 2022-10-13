<template>
  <div class="content-item">
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
</template>

<script setup lang="ts">
let props = defineProps<{
  src?: string;
  content?: string;
  price?: string;
  description?: string;
}>();

const { src, content, price, description } = props;
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
</style>