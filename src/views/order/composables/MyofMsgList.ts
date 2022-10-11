import { useRouter } from "vue-router"
export default function () {
    let router = useRouter();
    let NavList = [
        {
            id:1,
            // 积分integral
            integral:'38',
            name:'余额'
        },
        {
            id:2,
            // 积分integral
            integral:'38',
            name:'积分'
        },
        {
            id:3,
            // 积分integral
            integral:'38',
            name:'收藏'
        },
        {
            id:4,
            // 积分integral
            integral:'38',
            name:'优惠'
        }
    ]
    let MyofOrderLidt = [
        {
            id:1,
            orderUrl:'icon-order_1.png',
            text:'待付款'
        },
        {
            id:2,
            orderUrl:'icon-order_3.png',
            text:'代发货'
        },
        {
            id:3,
            orderUrl:'icon-order_3.png',
            text:'待收货'
        },
        {
            id:4,
            orderUrl:'icon-order_4.png',
            text:'待评价'
        },
        {
            id:5,
            orderUrl:'icon-order_5.png',
            text:'退货/款'
        }
    ]
    let OrderInfoList = [
        {
            id:1,
            orderUrl:'icon-information_1.png',
            arrowUrl:'icon-arrow_right.png',
            text:'收货地址'
        },
        {
            id:2,
            orderUrl:'icon-information_2.png',
            arrowUrl:'icon-arrow_right.png',
            text:'优惠卷'
        },
        {
            id:3,
            orderUrl:'icon-information_3.png',
            arrowUrl:'icon-arrow_right.png',
            text:'历史订单'
        }
    ]
    const toMineOrder= function (text:string){
        router.push({
            name:'mineorder',
            query:{
                text,
            }
        })
    }
    return { NavList ,toMineOrder, MyofOrderLidt, OrderInfoList}
}