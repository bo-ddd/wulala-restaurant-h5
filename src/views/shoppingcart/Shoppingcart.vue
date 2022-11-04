<template>
    <div class="box-dir">
      <div class="wrap">
        <Title color="#000">购物车</Title>
      </div>
      <div class="wrap">
        <!-- 本地 -->
        <div class="box-shopping mt-20" v-for="(el, i) in foodList" :key="i">
          <div class="box-food_png">
            <img class="food-png" :src="el.info.bannerUrl" alt="" />
          </div>
          <div class="ml-10 box">
            <div class="name">
              <span class="text">{{ el.info.foodName }}</span>
              <span>{{ el.productName }}</span>
              <img
                class="icon-del"
                src="@/assets/images/icon-del.png"
                alt=""
                @click="deletecar"
              />
            </div>
            <div class="specifications">
              <span class="text"> 规格：</span>
            </div>
  
            <div class="box-price">
              <div>
                <span class="price"
                  ><span class="symbol">￥</span>{{ el.info.price }}</span
                >
              </div>
              <div class="box-btn">
                <img class="icon-btn" src="@/assets/images/icon-sub.png" alt="" />
                <span class="text">{{ el.quantity }}</span>
                <img class="icon-btn" src="@/assets/images/icon-add.png" alt="" />
              </div>
            </div>
          </div>
        </div>
  
        <!-- 数据库 -->
        <div class="box-shopping mt-20" v-for="(el, i) in foodLists" :key="i">
          <div class="box-food_png">
            <img class="food-png" :src="el.bannerUrl" alt="" />
          </div>
          <div class="ml-10 box">
            <div class="name">
              <span class="text">{{ el.productName }}</span>
              <img
                class="icon-del"
                src="@/assets/images/icon-del.png"
                alt=""
                @click="deletecar(el)"
              />
            </div>
            <div class="specifications">
              <span class="text"> 规格：</span>
            </div>
  
            <div class="box-price">
              <div>
                <span class="price"
                  ><span class="symbol">￥</span>{{ el.originalPrice }}</span
                >
              </div>
              <div class="box-btn">
                <img class="icon-btn" src="@/assets/images/icon-sub.png" alt="" />
                <span class="text">{{ el.quantity }}</span>
                <img class="icon-btn" src="@/assets/images/icon-add.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import Title from "@/components/Title.vue";
  import useUlit from "@/assets/ulit/index";
  import {
    getFoodListApi,
    getCartListApi,
    cartAddApi,
    cartDeleteApi,
  } from "@/api/api";
  import { reactive, ref } from "vue";
  import { Dialog, Notify } from "vant";
  let { parsrAsssetFile } = useUlit();
  let foodList = ref();
  let foodLists: any = ref([]);
  let getCartAdd = JSON.parse(localStorage.getItem("cartAdd"));
  
  if (getCartAdd == null) {
  } else {
    function delSameObjValue(
      arr: any,
      resultNum: any,
      keyName: any,
      keyValue: any
    ) {
      const warp = new Map();
      arr.forEach((i: any) => {
        let str = keyName.map((v: any) => i[v]).join("_");
        i[resultNum] = keyValue.reduce((p: any, c: any) => (p += i[c]), 0);
        warp.has(str)
          ? (warp.get(str)[resultNum] += i[resultNum])
          : warp.set(str, i);
      });
      return Array.from(warp).map(([, v]) => v);
    }
    foodList.value = delSameObjValue(
      getCartAdd,
      "quantity",
      ["productId"],
      ["quantity"]
    );
    foodList.value = foodList.value.map((item: {}) => {
      return {
        ...item,
        info: {
          foodName: "",
        },
      };
    });
    getFoodListApi({}).then((res) => {
      foodList.value.forEach((item: any) => {
        item.info = res.data.data.list.find(
          (e: any) => e.foodId == item.productId
        );
      });
    });
  }
  
  let userId = sessionStorage.getItem("userId");
  console.log(userId);
  
  getCartListApi({}).then((res) => {
    function delSameObjValue(
      arr: any,
      resultNum: any,
      keyName: any,
      keyValue: any
    ) {
      console.log(keyName);
  
      const warp = new Map();
      arr.forEach((i: any) => {
        let str = keyName.map((v: any) => i[v]).join("_");
        i[resultNum] = keyValue.reduce((p: any, c: any) => (p += i[c]), 0);
        warp.has(str)
          ? (warp.get(str)[resultNum] += i[resultNum])
          : warp.set(str, i);
      });
      return Array.from(warp).map(([, v]) => v);
    }
    if (res.data.status == 1) {
      // console.log(res.data.data);
      // console.log(res);
  
      let data = JSON.parse(JSON.stringify(res.data.data));
      for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
          if (data[i].productId === data[j].productId) {
            //console.log('重复',data[i],data[j])
            data[i].quantity = data[i].quantity + data[j].quantity;
            data.splice(j, 1);
            j--;
          }
        }
      }
      // console.log(data);
      foodLists.value = data;
    }
  });
  
  let token = sessionStorage.getItem("token");
  
  if (token != null) {
    if (getCartAdd == null) {
    } else {
      getCartAdd.forEach((el) => {
        cartAddApi({
          productId: el.productId,
          quantity: el.quantity, //数量
        }).then((res) => {
          console.log("-----thiscartList------");
          console.log(res);
        });
      });
      localStorage.removeItem("cartAdd");
      localStorage.removeItem("userId");
    }
  }
  
  let deletecar = (el) => {
    Dialog.confirm({
      message: "确定删除这1种商品吗？",
    })
      .then(() => {
        // on confirm
        console.log(el);
        cartDeleteApi({
          id: el.id,
        }).then((res) => {
          console.log(res);
          if (res.data.status == 1) {
            Notify({ type: "success", message: "删除成功" });
  
            getCartListApi({}).then((res) => {
              function delSameObjValue(
                arr: any,
                resultNum: any,
                keyName: any,
                keyValue: any
              ) {
                console.log(keyName);
  
                const warp = new Map();
                arr.forEach((i: any) => {
                  let str = keyName.map((v: any) => i[v]).join("_");
                  i[resultNum] = keyValue.reduce(
                    (p: any, c: any) => (p += i[c]),
                    0
                  );
                  warp.has(str)
                    ? (warp.get(str)[resultNum] += i[resultNum])
                    : warp.set(str, i);
                });
                return Array.from(warp).map(([, v]) => v);
              }
              if (res.data.status == 1) {
                // console.log(res.data.data);
                // console.log(res);
  
                let data = JSON.parse(JSON.stringify(res.data.data));
                for (let i = 0; i < data.length; i++) {
                  for (let j = i + 1; j < data.length; j++) {
                    if (data[i].productId === data[j].productId) {
                      //console.log('重复',data[i],data[j])
                      data[i].quantity = data[i].quantity + data[j].quantity;
                      data.splice(j, 1);
                      j--;
                    }
                  }
                }
                // console.log(data);
                foodLists.value = data;
              }
            });
          } else {
            Notify({ type: "danger", message: "删除失败" });
          }
        });
      })
      .catch(() => {
        // on cancel
        Notify({ type: "warning", message: "已取消删除" });
      });
  };
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
    padding: 0.2rem 1rem;
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
    flex-grow: 0.1;
    justify-content: space-between;
    align-items: center;
  }
  
  .icon-btn {
    width: 2rem;
    height: 2rem;
  }
  </style>