import { useRoute, useRouter, } from "vue-router"
import useUtil from '@/assets/ulit/index'
import { ref, type Ref } from 'vue'
let { parsrAsssetFile } = useUtil()

export default function () {
    let route = useRoute()
    let sect = ref(route.name) as Ref<string>
    let router = useRouter()

    //这个nav是这个页面中的唯一逻辑
    const homeNav = function (name: string): void {
        console.log(name);
        sect.value = name;
        router.push(name)

    }
    return { sect, homeNav }
}

