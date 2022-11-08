<template>
    <div class="bodys">
      <div class="lottery-container">
        <div class="turntable-wrap">
          <div
            :class="['border', item.className]"
            v-for="item in borders"
            :key="item as any"
          >
            <div class="dot" v-for="item in 5" :key="item"></div>
          </div>
          <div class="goods-container">
            <div class="goods-list-wrap">
              <div
                :class="['goods-item-wrap', { active: curActive === index }]"
                v-for="(item, index) in goods"
                :key="index"
              >
                <div class="goods-img">
                  <img :src="item.src" alt="" />
                </div>
                <div class="goods-name">{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="cost-wrap">
          <div class="turntable-btn btn-0" @click="onStart">
            <div>单抽</div>
            <span>200</span>
          </div>
          <div class="turntable-btn btn-1" @click="onGet">
            <div>十连抽</div>
            <span>2000</span>
          </div>
        </div>
        <div v-if="showResult" class="result-container">
          <div class="mask"></div>
          <div class="model">
            <h2>恭喜抽中{{ goods[curActive].name }}</h2>
            <img :src="goods[curActive].src" alt="" />
            <p>{{ goods[curActive].desc }}</p>
            <div class="get-btn" @click="onGet">收下奖励</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { computed, ref } from "vue";
  // interface Props {
  //   /** 宽度 */
  //   width: string;
  //   /** 高度 */
  //   height: string;
  // }
  // withDefaults(defineProps<Props>(), {});
  
  const borders = [
    { className: "upper-border up-down" },
    { className: "lower-border up-down" },
    { className: "left-border left-right" },
    { className: "right-border left-right" },
  ];
  const goods = [
    {
      desc: "本次抽中的矿石已累加到你的当前矿石数中",
      probability: 10,
      name: "随机矿石",
      src: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp",
    },
    {
      desc: "本次抽中的Bug已累加到你的当前Bug数中",
      probability: 10,
      name: "Bug",
      src: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0a4ce25d48b8405cbf5444b6195928d4~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp",
    },
    {
      desc: "请注意查收站内信，填写实物奖励地址与联系方式",
      probability: 10,
      name: "「码赛克」掘金贴纸",
      src: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77d5e1e091a944b1b894029d22cdfcf0~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?",
    },
    {
      desc: "请注意查收站内信，填写实物奖励地址与联系方式",
      probability: 10,
      name: "「码赛克」线圈毛巾",
      src: "https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77b634472b7f4700a4060edbd8cb3cf3~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?",
    },
    {
      desc: "请注意查收站内信，填写实物奖励地址与联系方式",
      probability: 10,
      name: "「解码」棒球帽",
      src: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffdb6abdc4c0475280108d785cf6ad80~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?",
    },
    {
      desc: "请注意查收站内信，填写实物奖励地址与联系方式",
      probability: 10,
      name: "九阳养生电热水壶",
      src: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4826808d48547fd966ceec758d8b7c5~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?",
    },
    {
      desc: "请注意查收站内信，填写实物奖励地址与联系方式",
      probability: 10,
      name: "九阳多功能空气炸锅",
      src: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e19a99c0b2a43399e9cedf6d235405f~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?",
    },
    {
      desc: "请注意查收站内信，填写实物奖励地址与联系方式",
      probability: 100,
      name: "摩飞便携榨汁杯",
      src: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b37abce75e5c4539b5c9f4395f6d05e6~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp?",
    },
    {
      desc: "请注意查收站内信，填写实物奖励地址与联系方式",
      probability: 10,
      name: "Switch",
      src: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/215f7217aa3a48dfa4dbb69976e92b1b~tplv-k3u1fbpfcp-no-mark:0:0:0:0.awebp",
    },
  ];
  
  const showResult = ref(false);
  
  const curActive : any = ref(-1);
  
  const probArr = computed(() => {
    return goods.map((item) => item.probability);
  });
  
  function onStart() {
    let interval = setInterval(() => {
      curActive.value = Math.floor(Math.random() * 9);
    }, 200);
    let timer = setTimeout(() => {
      curActive.value = winPrize(probArr.value);
      showResult.value = true;
      clearInterval(interval);
      clearTimeout(timer);
    }, 6000);
  }
  
  function onGet() {
    showResult.value = false;
    curActive.value = -1;
  }
  
  function winPrize(arr:any) {
    let sum = eval(arr.join("+")); // 获取总概率区间
    for (let i = 0; i < arr.length; i++) {
      let random = parseInt(Math.random() * sum) as any; // 获取 0-总概率区间的一个随随机整数
      if (random < arr[i]) {
        return i; //如果在当前的概率范围内,得到的就是当前概率
      } else {
        sum -= arr[i]; //否则减去当前的概率范围,进入下一轮循环
      }
    }
  }
  </script>
<style lang="scss" scoped>
.lottery-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .turntable-wrap {
    width: 100%;
    flex: 1;
    position: relative;

    .upper-border {
      top: 0;
    }

    .lower-border {
      bottom: 0;
    }

    .left-border {
      left: 0;
    }

    .right-border {
      right: 0;
    }

    .left-right {
      position: absolute;
      top: 8px;
      display: flex;
      align-items: center;
      width: 24px;
      height: calc(100% - 16px);
      justify-content: space-between;
      flex-direction: column;

      .dot {
        &:first-child,
        &:last-child {
          visibility: hidden;
        }
      }
    }

    .up-down {
      position: absolute;
      left: 8px;
      display: flex;
      align-items: center;
      height: 24px;
      width: calc(100% - 16px);
      justify-content: space-between;
    }

    .border {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;

      .dot {
        border-radius: 50%;
        box-sizing: border-box;
        width: 12px;
        height: 12px;
        background: #e37815;

        &:nth-child(2n + 2) {
          border: 1.5px solid #fff7e8;
          background: transparent;
        }

        &:nth-child(3) {
          background: #fff;
        }
      }
    }
    .goods-container {
      width: 100%;
      height: 100%;
      padding: 26px;
      box-sizing: border-box;

      .goods-list-wrap {
        width: 100%;
        height: 70%;
        background: #e37815;
        border-radius: 8px;
        padding: 16px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row;
        align-content: space-between;

        .goods-item-wrap {
          width: calc(33.33333% - 5.33333px);
          height: calc(33.33333% - 5.33333px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fdf3f3;
          border-radius: 4px;
          position: relative;
          user-select: none;

          &.active {
            background: #f5dd9e;
          }

          .goods-img {
            height: 50px;
            width: 72px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              max-width: 40px;
              max-height: 40px;
              height: 100%;
            }
          }

          .goods-name {
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
            color: #d25f00;
            max-width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  .cost-wrap {
    width: 100%;
    box-sizing: border-box;
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    margin:1rem 0;

    .turntable-btn {
      // width: 
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(180deg, #ffb46f 15.1%, #ef7d13);
      box-shadow: 0 8px 0 #d25f00;
      border-radius: 16px;
      cursor: pointer;

      &:active {
        background: #e17a2a;
      }

      > div {
        font-size: 20px;
        color: #fff;
        margin-right: 10px;
        font-weight: bold;
      }

      > span {
        font-size: 20px;
        color: #faf1be;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
        line-height: 32px;
        max-width: 100%;
        margin-left: 4px;
      }
    }
  }
}

.result-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    top: 0;
  }

  .model {
    min-width: 400px;
    min-height: 332px;
    background: #fff;
    border-radius: 12px;
    position: relative;
    z-index: 9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0;

    h2 {
      font-size: 20px;
      color: #d25f00;
      font-weight: 500;
      line-height: 28px;
      padding-top: 32px;
    }

    img {
      width: 88px;
      padding-top: 24px;
      padding-bottom: 32px;
    }

    p {
      font-size: 14px;
      color: #515767;
      margin: 0 0 4px;
      padding: 0;
      line-height: 24px;
    }

    .get-btn {
      margin-top: 20px;
      margin-bottom: 32px;
      padding: 0;
      width: 200px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      background-color: #1e80ff;
      border-radius: 50px;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
    }
  }
}
.bodys{
  background: #fadd95; 
     box-shadow: inset 0 0 16px #ff9a2e; 
     box-sizing: border-box;
     min-height: 100vh;
     display: flex;
    align-items: center;
}
</style>