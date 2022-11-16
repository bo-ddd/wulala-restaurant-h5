<template>
    <div>
        <van-nav-bar title="地址编辑" left-text="返回" left-arrow @click-left="onClickLeft" />
        <div id="container"></div>
    </div>
</template>
<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader';
import { ref } from "vue";

const map = ref<any>(null);

const onClickLeft = () => history.back();


AMapLoader.load({
    key: "b75527404f3a02890dc6d58c3fbee2d3",          // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "1.4.15",                                // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [],                                      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    AMapUI: {                                         // 是否加载 AMapUI，缺省不加载
        version: '1.1',                               // AMapUI 缺省 1.1
        plugins: [

        ],                                  // 需要加载的 AMapUI ui插件
    },
    Loca: {                                           // 是否加载 Loca， 缺省不加载
        version: '1.3.2'                              // Loca 版本，缺省 1.3.2
    },
}).then((AMap) => {
    var map = new AMap.Map('container', {
        zoom: 10,                                        // 缩放级别
        center: [116.397428, 39.90923],                  //中心点坐标
        // mapStyle: 'amap://styles/whitesmoke',         //设置地图样式
        viewMode: '3D',                                  //使用3D视图
    });
    AMap.plugin("AMap.Geolocation", function () {
        var geolocation = new AMap.Geolocation({
            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,
            // 设置定位超时时间，默认：无穷大
            timeout: 10000,
            // 定位按钮的停靠位置的偏移量
            offset: [0, 0],
            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            zoomToAccuracy: true,
            //  定位按钮的排放位置,  RB表示右下
            buttonPosition: 'RB',
            position: "RB",
            showCircle: true,
            useNative: true,
            noIpLocate: 0,
            noGeoLocation: 0,
            showButton: true
        });
        geolocation.getCurrentPosition()
        geolocation.getCurrentPosition(function (status: any, result: any) {
            if (status == "complete") {
                onComplete(result);
            } else {
                onError(result);
            }
        });
        function onComplete(data: any) {
            console.log(data);
            // data是具体的定位信息
            const { lat, lng } = data.position;
            map.value = new AMap.Map("container", {
                //设置地图容器id
                viewMode: "3D", //是否为3D地图模式
                zoom: 16, //初始化地图级别  把地图绽放到街道级别;
                center: [lng, lat], //初始化地图中心点位置
                // center 接收一个数组，数组中第一个参数是 经度 第二个是纬度
            });
        }

        function onError(data: any) {
            // 定位出错
            console.log('------定位出错------');
            console.log(data);
        }
    })
    AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                // 查询成功，result即为当前所在城市信息
                console.log('通过ip获取当前城市：', result)
                //逆向地理编码
                AMap.plugin('AMap.Geocoder', function () {
                    var geocoder = new AMap.Geocoder({
                        // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                        city: result.adcode
                    })

                    var lnglat = result.rectangle.split(';')[0].split(',')

                    geocoder.getAddress(lnglat, function (status, data) {
                        if (status === 'complete' && data.info === 'OK') {
                            // result为对应的地理位置详细信息
                            console.log(data)
                        }
                    })
                })
            }
        })
    })
}).catch(e => {
    console.log(e);
})
</script>
<style scoped>
#container {
    width: 100%;
    height: 60vh;
}
</style>


<!-- <template>
    <div class="app">
        <div class="search"><input type="text" class="opo" v-model="input"><button @click="search">搜索</button></div>
        <div class="map">
            <map-container :search="input2" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import MapContainer from '@/components/MapContainer.vue';
const input = ref("");
const input2 = ref("");
function search() {
    input2.value = input.value
}
</script>
<style scoped>
.app {
    width: 100vw;
    height: 100vh;
}

.map {
    width: 100%;
    height: calc(100vh - 50px);
}

.search {
    width: 10rem;
    height: 50px;
    display: flex;
}
.opo{
    width: 8rem;
}
</style> -->
  
  