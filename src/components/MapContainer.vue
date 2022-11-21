<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
import AMapLoader from "@amap/amap-jsapi-loader";
import { ref, onMounted, watch } from "vue";
const props = defineProps({
  search: String,
});
const map = ref<any>(null);
let geocoder:any;
let locationArr=ref<any>([121.473667, 31.230525])
watch(
  () => props.search,
  (newValue) => {
    console.log("search", newValue);
    searchLocation(geocoder);
  }
);
function initMap() {
  AMapLoader.load({
    key: "2c1c4affeb410923990fec54c5af721a", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      "AMap.ToolBar",
      "AMap.Scale",
      "AMap.HawkEye",
      "AMap.MapType",
      "AMap.Geolocation",
      "AMap.Geocoder",
    ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map.value = new AMap.Map("container", {
        //设置地图容器id
        viewMode: "3D", //是否为3D地图模式
        zoom: 10, //初始化地图级别
        center: locationArr.value, //初始化地图中心点位置
      });
      map.value.addControl(new AMap.Scale());
      map.value.addControl(new AMap.ToolBar());
      map.value.addControl(new AMap.HawkEye());
      map.value.addControl(new AMap.MapType());
      map.value.addControl(new AMap.Geolocation());
      geocoder = new AMap.Geocoder({ city: "010" });
    })
    .catch((e) => {
      console.log(e);
    });
}
function searchLocation(geocoder: any) {
  geocoder.getLocation(props.search, function (status:any, result:any) {
    if (status === "complete" && result.info === "OK") {
      // result中对应详细地理坐标信息
      console.log('result',result);
      console.log('result',result.geocodes[0].location);
      let lngLat=[result.geocodes[0].location.lng,result.geocodes[0].location.lat]
      console.log('result',lngLat);
      locationArr.value=lngLat
      initMap()
      
    }
  });
}
onMounted(() => {
  initMap();
});
</script>

<style scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
}
</style>
