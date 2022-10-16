import axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    timeout: 1000,  //如果接口一秒都没有返回结果，则axios会自动帮我们做一个失败(reject)的处理
    // headers: {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},  //在发送服务端之前，前端设置请求头信息；
});


//api 在项目中，通常情况指的是  服务端的一个接口方法；
//一个方法只实现一个功能；所以这个方法就只能是单纯的去调用服务端的接口；
//这样房子的目的就只是为了可读性，和可维护性；
//这个是 登录接口
export const loginApi = function (payload = {}){
    //payload 是不是服务端要的入参
    //就是网页的预览
    return instance.post('/user/login' , payload)
}
<<<<<<< HEAD

export const getFoodListApi = function (payload ={}){
    return instance.get('/food/list', payload)
}

=======
export const signUp = function ( options = {} ){
    return instance.post('/user/register' , options)
}
>>>>>>> 1b12c637826fed09d3d7a3366fe5325a09bee12c

//命名规范  以Api为结尾；
//增删改查的命名 和 post 接口命名规范是一样的；
// 获取商品列表 getGoodsListApi();
// 删除商品   deleteGoodsApi();
// 查询某件商品  getGoodsSetail();
// 修改商品信息  updateGoodsInfo();
// axios.post('/user/login',{
//     username:'xiaoming',
//     password:'999999',
//   }, {
//     headers:{
//       "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
//     }
//   } ).then(res => {
//     console.log('----------res--------');
//     console.log(res);
//   }).catch(err => {
//     console.log('-----------err--------');
//     console.log(err);
//   })
export default instance;