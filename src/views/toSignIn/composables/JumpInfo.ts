import { useRouter } from "vue-router";

export default function() {
    let router = useRouter();
    const toForgotPasswrod= function (){
        router.push({
            name:'forgotpasswrod',
            // query:{
            //     goodsId
            // }
        })
    }
    const toSignUp= function (){
        router.push({
            name:'signup',
            // query:{
            //     goodsId
            // }
        })
    }

    return  { toForgotPasswrod,toSignUp } 
}