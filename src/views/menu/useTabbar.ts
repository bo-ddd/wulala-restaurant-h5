import { useRoute, useRouter, } from "vue-router"
import useUtil from '@/assets/ulit/index'
import { ref, type Ref } from 'vue'

export default function () {
    let imgarr = [
        {
            id: 0,
            text: '早餐',
            name: 'breakfast'
        },
        {
            id: 1,
            text: '午餐',
            name: 'lunch'
        },
        {
            id: 2,
            text: '晚餐',
            name: 'supper'
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

