<template>
    <div class="map" id="gd_map_d"></div>
  </template>
   
  <script>
    import { defineComponent,nextTick,onMounted } from 'vue'
    export default defineComponent({
      setup(){
        onMounted(() => {
          nextTick(()=>{
            initMap()
          })
        })
        const initMap = () => {
          //定义地图中心点坐标
          var center = new TMap.LatLng(39.984120, 116.307484)
          //定义map变量，调用 TMap.Map() 构造函数创建地图
          var map = new AMap.Map('gd_map_d', {
            pitch:15, // 地图俯仰角度，有效范围 0 度- 83 度
            viewMode:'3D' // 地图模式
          })
   
   
   
        }
        return {
   
        }
      }
    })
   
  </script>
   
  <style lang='scss' scoped>
    .map{
      width: 100%;
      height: 100%;
    }
  </style>