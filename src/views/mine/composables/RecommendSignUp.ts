import { useRouter } from "vue-router";
export default function () {
    let router = useRouter();
    const toSignUp= function (){
        router.push({
            name:'toSignUp',
            // query:{
            //     goodsId
            // }
        })
    }

    return {toSignUp};
}