<template>
    <div>
        <van-nav-bar title="地址编辑" left-text="返回" left-arrow @click-left="onClickLeft" />
        <div id="container"></div>

    </div>
</template>
<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader';
import { ref } from "vue";
let map = ref<any>(null)
const onClickLeft = () => history.back();

AMapLoader.load({
    key: "b75527404f3a02890dc6d58c3fbee2d3",          // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "1.4.15",                                // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [],                                      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    AMapUI: {                                         // 是否加载 AMapUI，缺省不加载
        version: '1.1',                               // AMapUI 缺省 1.1
        plugins: [],                                  // 需要加载的 AMapUI ui插件
    },
    Loca: {                                           // 是否加载 Loca， 缺省不加载
        version: '1.3.2'                              // Loca 版本，缺省 1.3.2
    },
}).then((AMap) => {
    var options = {
        'showButton': true,//是否显示定位按钮
        'position': 'LB',//定位按钮的位置
        /* LT LB RT RB */
        'offset': [10, 20],//定位按钮距离对应角落的距离
        'showMarker': true,//是否显示定位点
        'markerOptions': {//自定义定位点样式，同Marker的Options
            'offset': new AMap.Pixel(-18, -36), 
            'content': `<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:36px;height:36px"/>`
        },
        'showCircle': true,//是否显示定位精度圈
        'circleOptions': {//定位精度圈的样式
            'strokeColor': '#0093FF',
            'noSelect': true,
            'strokeOpacity': 0.5,
            'strokeWeight': 1,
            'fillColor': '#02B0FF',
            'fillOpacity': 0.25
        }
    }
    var map = new AMap.Map('container', {
        zoom: 10,                                        // 缩放级别
        center: [116.397428, 39.90923],                  //中心点坐标
        // mapStyle: 'amap://styles/whitesmoke',         //设置地图样式
        viewMode: '3D',                                  //使用3D视图
    });
    AMap.plugin("AMap.Geolocation", function () {
        var geolocation = new AMap.Geolocation(options);
        map.addControl(geolocation);
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
    });

    AMap.plugin([
        'AMap.ToolBar',
    ], function () {
        // 在图面添加工具条控件, 工具条控件只有缩放功能
        map.addControl(new AMap.ToolBar());
    });

    AMap.plugin([
        'AMap.ControlBar',
    ], function () {

        // 添加 3D 罗盘控制
        map.addControl(new AMap.ControlBar({
            position: {
                right: '20px',
                top: '20px'
            },
            showControlButton: true,  // 是否显示倾斜、旋转按钮。默认为 true
        }));
    });
}).catch(e => {
    console.log(e);
})
</script>
<style scoped>
#container {
    width: 100%;
    height: calc(100vh - 5rem);
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
  
  