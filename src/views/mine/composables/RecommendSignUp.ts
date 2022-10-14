import { useRouter } from "vue-router";
export default function () {
    let MineOrderList = [
        {
            id:1,
            orderUrl:'icon-shopcar.png',
            text:'订单'
        },
        {
            id:2,
            orderUrl:'icon-collection.png',
            text:'收藏'
        },
        {
            id:3,
            orderUrl:'icon-evaluate.png',
            text:'待评价'
        },
        {
            id:4,
            orderUrl:'icon-feedback.png',
            text:'反馈'
        },
        {
            id:5,
            orderUrl:'icon-lucky_turntable.png',
            text:'转盘'
        }
    ]
    let router = useRouter();
    const toSignIn= function (){
        router.push({
            name:'signin',
            // query:{
            //     goodsId
            // }
        })
    }

    return {toSignIn, MineOrderList};
}