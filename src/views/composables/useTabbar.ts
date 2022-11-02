import { useRoute, useRouter, } from "vue-router"
import useUtil from '@/assets/ulit/index'
import { ref, type Ref } from 'vue'
let { parsrAsssetFile } = useUtil()



export default function () {
    let imgarr = [
        {
            id: 0,
            url: parsrAsssetFile("icon-home.png"),
            urls: parsrAsssetFile('icon-home_hover.png'),
            text: '首页',
            name: '/'
        },
        {
            id: 1,
            url: parsrAsssetFile('icon-menu.png'),
            urls: parsrAsssetFile('icon-menu_hover.png'),
            text: '菜单',
            name: '/menu'
        },
        {
            id: 3,
            url: parsrAsssetFile('icon-shoppingcart.png'),
            urls: parsrAsssetFile('icon-shoppingcart_hover.png'),
            text: '购物车',
            name: '/shoppingcart'
        },
        {
            id: 4,
            url: parsrAsssetFile('icon-mine.png'),
            urls: parsrAsssetFile('icon-mine_hover.png'),
            text: '我的',
            name: '/mine'
        },
    ]
    let route = useRoute()
    let selected = ref(route.name) as Ref<string>
    let router = useRouter()


    //这个nav是这个页面中的唯一逻辑
    const nav = function (name: string): void {
        selected.value = name;
        router.push(name)
    }
    return { imgarr, selected, nav }
}

