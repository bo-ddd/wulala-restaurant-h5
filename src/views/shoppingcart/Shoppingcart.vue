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
                <img class="icon-btn" src="@/assets/images/icon-sub.png" alt="" @click="subs(el)" />
                <span class="text">{{ el.quantity }}</span>
                <img class="icon-btn" src="@/assets/images/icon-add.png" alt="" @click="adds(el)" />
              </div>
            </div>
          </div>
          <van-submit-bar :price=totalPrice button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="AllChecked" @click="checkAll">全选</van-checkbox>
            <template #tip>
              你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
            </template>
          </van-submit-bar>
        </div>
        <!-- 本地  -->
        <div class="box-shopping mt-20" v-for="bendiGoodItem in bendiGood">
          <van-checkbox :value="bendiGoodItem.foodId" v-model="bendiGoodItem.isCheckeds"
            @click="checkChange(bendiGoodItem)"></van-checkbox>
          <div class="box-food_png">
            <img class="food-png" :src="bendiGoodItem.bannerUrl" alt="" />
          </div>
          <div class="ml-10 box">
            <div class="name">
              <span class="text">{{ bendiGoodItem.foodName }}</span>
              <div class="aa">
                <img class="icon-del" src="@/assets/images/icon-del.png" alt="" @click="deletecart(bendiGoodItem)" />
                <!-- -->
              </div>
              <span>{{}}</span>
            </div>
            <div class="specifications">
              <span class="text"> 规格：</span>
            </div>

            <div class="box-price">
              <div>
                <span class="price"><span class="symbol">￥</span>{{ bendiGoodItem.price }}</span>
              </div>
              <div class="box-btn">
                <img class="icon-btn" src="@/assets/images/icon-sub.png" alt="" @click="sub(bendiGoodItem)" /> <!--  -->
                <span class="text">{{ bendiGoodItem.quantity }}</span>
                <img class="icon-btn" src="@/assets/images/icon-add.png" alt="" @click="add(bendiGoodItem)" />
              </div>
            </div>
          </div>
          <van-submit-bar :price=priceAdd button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="AllCheckeds" @click="lostCheckAll">全选</van-checkbox>
            <!--  -->
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
import {  getCartListApi, cartAddApi, cartDeleteApi, } from "@/api/api";
import { ref,  watch } from "vue";
import { Dialog, Notify } from "vant";
import router from "@/router";
let { parsrAsssetFile } = useUlit();
let bendiGood = ref();
let foodLists: any = ref([]);//线上数据
let localDate: any = ref([])
let AllChecked = ref(false); //全选
let checkedNames: any = ref([])//选中的东西放入数组
let getCartAdd = ref(JSON.parse(localStorage.getItem("cartAdd")))
let token = sessionStorage.getItem("token");
if (token != null) {
  localDate = JSON.parse(localStorage.getItem("cartAdd"));
  localStorage.removeItem("cartAdd");
  if (localDate != null) {
    localDate.forEach((el: any) => {
      cartAddApi({
        productId: Number(el.foodId),
        quantity: el.quantity, //数量
      }).then((res) => {
        console.log("-----添加数据库------");
        console.log(res);
        getCartListApi({}).then((res) => {
          foodLists.value = res.data.data;
        });
      });
    });
  } else {
    getCartListApi({}).then((res) => {
      foodLists.value = res.data.data;
      if (checkedNames.length == foodLists.value) {
        AllChecked.value = true;
      } else {
        AllChecked.value = false;
      }
    });
  }
} else {
  if (localDate == null) { } else {
    function delSameObjValue(arr: any, resultNum: any, keyName: any, keyValue: any) {
      const warp = new Map();
      if (arr == null) { }
      else {
        arr.forEach((i: any) => {
          let str = keyName.map((v: any) => i[v]).join("_");
          i[resultNum] = keyValue.reduce((p: any, c: any) => (p += i[c]), 0);
          warp.has(str) ? (warp.get(str)[resultNum] += i[resultNum]) : warp.set(str, i);
        });
      }
      return Array.from(warp).map(([, v]) => v);
    }
    bendiGood.value = delSameObjValue(getCartAdd.value, "quantity", ["foodId"], ["quantity"]);
  }
}



let deletecar = (el: any) => {
  Dialog.confirm({
    message: "确定删除这1种商品吗？",
  })
    .then(() => {
      // on confirm
      console.log(el.id);
      cartDeleteApi({
        id: el.id,
      }).then((res) => {
        console.log(res);
        if (res.data.status == 1) {
          Notify({ type: "success", message: "删除成功" });
          getCartListApi({}).then((res) => {
            let data = JSON.parse(JSON.stringify(res.data.data));
            foodLists.value = data;
            if (checkedNames.length == foodLists.value.length) {
              AllChecked.value = true;
            } else {
              AllChecked.value = false;
            }
          });
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
    message: '确定删除这1种商品吗?',
  })
    .then(() => {
      for (let i = 0; i < bendiGood.value.length; i++) {
        if (el.foodId == bendiGood.value[i].foodId) {
          delete bendiGood.value[i]
          bendiGood.value.splice(i, 1)
          localStorage.setItem('cartAdd', JSON.stringify(bendiGood.value))
        }
      }
      Toast('删除成功');
    })
    .catch(() => {
      Toast('取消成功');
    });
}

const sub = function (el: any) {
  for (let i = 0; i < bendiGood.value.length; i++) {
    if (el.foodId == bendiGood.value[i].foodId) {
      if (bendiGood.value[i].quantity == 1) {
        Toast('商品小于起购数量');
      } else {
        bendiGood.value[i].quantity--
        localStorage.setItem('cartAdd', JSON.stringify(bendiGood.value))
      }
    }
  }
  hun()
}
const add = function (el: any) {
  for (let i = 0; i < bendiGood.value.length; i++) {
    if (el.foodId == bendiGood.value[i].foodId) {
      bendiGood.value[i].quantity++
      localStorage.setItem('cartAdd', JSON.stringify(bendiGood.value))
    }
  }
  hun()
}


const subs = function (el: any) {
  for (let i = 0; i < foodLists.value.length; i++) {
    if (el.productId == foodLists.value[i].productId) {
      if (foodLists.value[i].quantity == 1) {
        Toast("商品小于起购数量");
      } else {
        foodLists.value[i].quantity--;

        cartAddApi({
          id: el.id,
          productId: el.productId,
          quantity: el.quantity,
        }).then((res) => {
          console.log(res);
          sum()
        });
      }
    }
  }
};

const adds = function (el: any) {
  for (let i = 0; i < foodLists.value.length; i++) {
    if (el.productId == foodLists.value[i].productId) {
      foodLists.value[i].quantity++;
      cartAddApi({
        id: el.id,
        productId: el.productId,
        quantity: el.quantity,
      }).then((res) => {
        console.log(res);
        sum()
      });
    }
  }
};

const onSubmit = () => {
  if (checkedNames.value.length > 0) {
    localStorage.setItem('item', JSON.stringify(checkedNames.value))
    router.push({
      name: 'orderDetails',
    })
  } else {
    Toast('还没有选择任何商品');
  }
};

let totalPrice = ref(0)
function sum() {
  var pic = 0;
  for (let i = 0; i < foodLists.value.length; i++) {
    if (foodLists.value[i].isChecked == true) {
      let item = foodLists.value[i]
      pic += item.quantity * item.originalPrice
    }
  }
  totalPrice.value = pic * 100
}
const onClickLink = () => Toast('修改地址');
// 操作数据库-------------------------------
const chooseChange = (item: any) => {
  if (item.isChecked) {
    foodLists.value.forEach((el: any) => {
      if (item.productId == el.productId) {
        Object.assign({}, foodLists.value, { isChecked: true });
        console.log(item);

      }
    })
    checkedNames.value.push(item);
    sum()
  } else {
    foodLists.value.forEach((el: any) => {
      if (item.productId == el.productId) {
        Object.assign({}, foodLists.value, { isChecked: false });
      }
    })
    checkedNames.value.pop(item);
    sum()
  }
  if (checkedNames.value.length == foodLists.value.length) {
    AllChecked.value = true;
  } else {
    AllChecked.value = false;
  }
  watch(() => item.quantity, (e, s) => {
    item.isChecked == true ? (totalPrice.value += item.originalPrice * (e - s) * 100) : (totalPrice.value -= item.originalPrice * item.quantity * 100);
  }
  );
};

foodLists.value.forEach((item: any) => {
  console.log(item);
})
const checkAll = function () {
  if (AllChecked.value) {
    foodLists.value.forEach((el: any) => {
      checkedNames.value.push(el);
      el.isChecked = true;
      sum()
    });
    AllChecked.value = true;
  } else {
    foodLists.value.forEach((el: any) => {
      el.isChecked = false;
      sum()
    });
    AllChecked.value = false;
  }
};


// 操作数据库end-------------------------------

//操作本地-------------------------------
let checkedItem: any = ref([])  //存放本地点击复选框让他全选的数组
let AllCheckeds = ref(false)
let priceAdd: any = ref(0)
function hun() {
  var pic = 0;
  for (let i = 0; i < bendiGood.value.length; i++) {
    if (bendiGood.value[i].isCheckeds == true) {
      let item = bendiGood.value[i]
      pic += item.quantity * item.price
    }
  }
  priceAdd.value = pic * 100
}

if (bendiGood.value == null) { } else {
  bendiGood.value.forEach((el: any) => { //默认选中计算
    if (el.isCheckeds == true) {
      checkedItem.value.push(el)
      hun()
    } else {
      checkedItem.value.pop(el)
    }
    if (checkedItem.value.length == bendiGood.value.length) {
      AllCheckeds.value = true
    } else {
      AllCheckeds.value = false
    }
  })
}
const checkChange = (item: any) => {
  bendiGood.value.forEach((el: any) => {
    if (item.foodId == el.foodId) {
      bendiGood.value.isCheckeds = true
      localStorage.setItem('cartAdd', JSON.stringify(bendiGood.value))
    }
  })
  if (item.isCheckeds == true) {
    checkedItem.value.push(item)
    hun()
  } else {
    checkedItem.value.pop(item)
    hun()
  }
  if (checkedItem.value.length == bendiGood.value.length) {
    AllCheckeds.value = true
  } else {
    AllCheckeds.value = false
  }
}
const lostCheckAll = function () {
  if (AllCheckeds.value) {
    bendiGood.value.forEach((el: any) => {
      for (let i = 0; i < bendiGood.value.length; i++) {
        if (el.productId == bendiGood.value[i].productId) {
          bendiGood.value[i].isCheckeds = true
          localStorage.setItem('cartAdd', JSON.stringify(bendiGood.value))
        }
      }
      checkedItem.value.push(el)
      hun()
    })
    AllCheckeds.value = true
  } else {
    bendiGood.value.forEach((el: any) => {
      for (let i = 0; i < bendiGood.value.length; i++) {
        if (el.productId == bendiGood.value[i].productId) {
          bendiGood.value[i].isCheckeds = false
          localStorage.setItem('cartAdd', JSON.stringify(bendiGood.value))
        }
      }
      checkedItem.value = []
      hun()
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