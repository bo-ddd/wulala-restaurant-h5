<template>
  <div class="box-dir">
    <div class="wrap">
      <Title color="#000">购物车</Title>
    </div>
    <div>
      <div class="wrap lol">
        <!-- 数据库  -->
        <div class="box-shopping mt-20" v-for="(el, i) in foodLists" :key="i">
          <van-checkbox :value="el.id" v-model="el.isChecked" @click="chooseChange(el)"></van-checkbox>
          <div class="box-food_png">
            <img class="food-png" :src="el.bannerUrl" alt="" />
          </div>
          <div class="ml-10 box">
            <div class="name">
              <span class="text">{{ el.productName }}</span>
              <img class="icon-del" src="@/assets/images/icon-del.png" alt="" @click="deletecar(el)" />
            </div>
            <div class="specifications">
              <span class="text"> 规格：</span>
            </div>

            <div class="box-price">
              <div>
                <span class="price"><span class="symbol">￥</span>{{ el.originalPrice }}</span>
              </div>
              <div class="box-btn">
                <img class="icon-btn" src="@/assets/images/icon-sub.png" alt="" />
                <span class="text">{{ el.quantity }}</span>
                <img class="icon-btn" src="@/assets/images/icon-add.png" alt="" />
              </div>
            </div>
          </div>
          <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="AllChecked" @click="checkAll">全选</van-checkbox>
            <template #tip>
              你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
            </template>
          </van-submit-bar>
        </div>
        <!-- 本地  -->
        <div class="box-shopping mt-20" v-for="(el, i) in foodList">
          <van-checkbox :value="el.localId" v-model="el.isCheckeds" @click="checkChange(el)"></van-checkbox>
          <div class="box-food_png">
            <img class="food-png" :src="el.info.bannerUrl" alt="" />
          </div>
          <div class="ml-10 box">
            <div class="name">
              <span class="text">{{ el.info.foodName }}</span>
              <div class="aa">
                <img class="icon-del" src="@/assets/images/icon-del.png" alt="" @click="deletecart(el)" />
              </div>
              <span>{{ el.productName }}</span>
            </div>
            <div class="specifications">
              <span class="text"> 规格：</span>
            </div>

            <div class="box-price">
              <div>
                <span class="price"><span class="symbol">￥</span>{{ el.info.price }}</span>
              </div>
              <div class="box-btn">
                <img class="icon-btn" src="@/assets/images/icon-sub.png" alt="" @click="sub(el)" />
                <span class="text">{{ el.quantity }}</span>
                <img class="icon-btn" src="@/assets/images/icon-add.png" alt="" @click="add(el)" />
              </div>
            </div>
          </div>
          <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="AllCheckeds" @click="lostCheckAll">全选</van-checkbox>
            <template #tip>
              你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
            </template>
          </van-submit-bar>
        </div>
      </div>
    </div>

  </div>


</template>
<script setup lang="ts">
import Title from "@/components/Title.vue";
import useUlit from "@/assets/ulit/index";
import { Toast } from 'vant';
import { getFoodListApi, getCartListApi, cartAddApi, cartDeleteApi, } from "@/api/api";
import { ref, provide } from "vue";
import { Dialog, Notify } from "vant";
import router from "@/router";
let { parsrAsssetFile } = useUlit();
let foodList = ref();
let foodLists: any = ref([]);
let localDate: any = ref([])
let AllChecked = ref(false);
let checkedNames: any = ref([])
let getCartAdd = ref(JSON.parse(localStorage.getItem("cartAdd")))

let userId = sessionStorage.getItem("userId");
let token = sessionStorage.getItem("token");
if (token != null) {
  localDate = JSON.parse(localStorage.getItem('cartAdd'))
  localStorage.removeItem("cartAdd");
  if (localDate != null) {
    localDate.forEach((el: any) => {
      cartAddApi({
        productId: Number(el.productId),
        quantity: el.quantity, //数量
      }).then((res) => {
        console.log("-----添加数据库------");
        console.log(res);
        getCartListApi({}).then((res) => {
          console.log(2);
          console.log(res);
          foodLists.value = res.data.data

        });
      });
    })
  } else {
    getCartListApi({}).then((res) => {
      foodLists.value = res.data.data
      Object.assign({}, foodLists.value, { isChecked: true })
    });
  }
} else {
  if (localDate == null) { } else {
    function delSameObjValue(arr: any, resultNum: any, keyName: any, keyValue: any) {
      const warp = new Map();
      if (arr == null) {

      } else {
        arr.forEach((i: any) => {
          let str = keyName.map((v: any) => i[v]).join("_");
          i[resultNum] = keyValue.reduce((p: any, c: any) => (p += i[c]), 0);
          warp.has(str) ? (warp.get(str)[resultNum] += i[resultNum]) : warp.set(str, i);
        });
      }
      return Array.from(warp).map(([, v]) => v);
    }
    foodList.value = delSameObjValue(getCartAdd.value, "quantity", ["productId"], ["quantity"]);
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
      // console.log(foodList.value);
    });
  }
}



let deletecar = (el: any) => {
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
          if (res.data.status == 1) {
            let data = JSON.parse(JSON.stringify(res.data.data));
            for (let i = 0; i < data.length; i++) {
              for (let j = i + 1; j < data.length; j++) {
                if (data[i].productId === data[j].productId) {
                  data[i].quantity = data[i].quantity + data[j].quantity;
                  data.splice(j, 1);
                  j--;
                }
              }
            }
            // console.log(data);
            foodLists.value = data;
          }

        } else {
          Notify({ type: "danger", message: "删除失败" });
        }
      });
    })
    .catch(() => {
      Notify({ type: "warning", message: "已取消删除" });
    });
};

const deletecart = function (el: any) {

  Dialog.confirm({
    message:
      '确定删除这1种商品吗?',
  })
    .then(() => {
      for (let i = 0; i < foodList.value.length; i++) {
        if (el.productId == foodList.value[i].productId) {
          delete foodList.value[i]
          foodList.value.splice(i, 1)
          localStorage.setItem('cartAdd', JSON.stringify(foodList.value))
        }
      }
      Toast('删除成功');
    })
    .catch(() => {
      Toast('取消成功');
    });
}

const sub = function (el: any) {
  for (let i = 0; i < foodList.value.length; i++) {
    if (el.productId == foodList.value[i].productId) {
      if (foodList.value[i].quantity == 1) {
        Toast('商品小于起购数量');
      } else {
        foodList.value[i].quantity--
        localStorage.setItem('cartAdd', JSON.stringify(foodList.value))
      }
    }
  }
}

const add = function (el: any) {
  for (let i = 0; i < foodList.value.length; i++) {
    if (el.productId == foodList.value[i].productId) {
      foodList.value[i].quantity++
      localStorage.setItem('cartAdd', JSON.stringify(foodList.value))

    }
  }
}
const onSubmit = () => {
  localStorage.setItem('item',JSON.stringify(checkedNames.value))
    router.push({
      name: 'orderDetails',
  })

};
const onClickLink = () => Toast('修改地址');
// 操作数据库-------------------------------
const chooseChange = (item) => {
  checkedNames.value.push(item)
  if (checkedNames.value.length == foodLists.value.length) {
    AllChecked.value = true
  } else {
    AllChecked.value = false
  }
}

const checkAll = function () {
  if (AllChecked.value) {
    foodLists.value.forEach((el: any) => {
      checkedNames.value.push(el)
      el.isChecked = true;
    })
    AllChecked.value = true

  } else {
    foodLists.value.forEach((el: any) => {
      checkedNames.value = []
      el.isChecked = false;
    })
    AllChecked.value = false
  }
}
// 操作数据库end-------------------------------


//操作本地-------------------------------
interface foodList {
  item: {}
}
let checkedItem = []
let AllCheckeds = ref(false)
const checkChange = (item: foodList) => {
  checkedItem.push(item)
  if (checkedItem.length == foodList.value.length) {
    AllCheckeds.value = true
  } else {
    AllCheckeds.value = false
  }
}
const lostCheckAll = function () {
  if (AllCheckeds.value) {
    foodList.value.forEach((el: any) => {
      checkedItem.push(el)
      el.isCheckeds = true;
    })
    AllChecked.value = true
  } else {
    foodList.value.forEach((el: any) => {
      checkedItem = []
      el.isCheckeds = false;
    })
    AllCheckeds.value = false
  }
}
//操作本地end-------------------------------
</script>
<style scoped>
.tijiao {
  height: calc(100vh - 61.5rem);
  background-color: yellowgreen;
}

.box-dir {
  background-color: #f5f5f5;
  height: calc(100vh - 5rem);
}

.box-shopping {
  display: flex;
  background-color: #fff;
  /* border-radius: 1rem; */
}

.box {
  /* width: 100%;*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2rem 1rem;
  flex-grow: 1;
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
  margin-left: 1rem;
}

.icon-del {
  width: 2rem;
  height: 2rem;
  display: inline-block;

}

.aa {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
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



.lol {
  height: calc(100vh - 18.8rem);
  background-color: #fff;
  padding: .1rem .5rem 1rem .5rem;
  border-radius: 1rem;
  overflow-y: scroll;
}

::v-deep .van-submit-bar {
  position: fixed;
  bottom: 50px;
  left: 0;
  z-index: var(--van-submit-bar-z-index);
  width: 100%;
  background: var(--van-submit-bar-background-color);
  -webkit-user-select: none;
  user-select: none;
}

::v-deep .van-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* padding: var(--van-empty-padding); */
  padding: 22.5rem 0;
}
</style>