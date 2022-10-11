import { useRoute, useRouter, } from "vue-router"
import useUtil from '@/assets/ulit/index'
import { ref, type Ref } from 'vue'

export default function () {
  
let NavList = [
    {
        id:1,
        name: 'allorder',
        text:'全部'
    },
    {
        id:2,
        name: 'consignmentfee',
        text:'代销费'
    },
    {
        id:3,
        name: 'appraise',
        text:'待评价'
    },
    {
        id:4,
        name: 'refund',
        text:'退款'
    }
]
    let route = useRoute()
    let selected = ref(route.name) as Ref<string>
    let router = useRouter()
    console.log(selected.value);
    

    //这个menuNav是这个页面中的唯一逻辑
    const orderNav = function (name: string): void {
        selected.value = name;
        router.push(name)
    }
    return {  selected, orderNav ,NavList  }
}

