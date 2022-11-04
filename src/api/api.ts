import axios from "axios";


const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,  //如果接口一秒都没有返回结果，则axios会自动帮我们做一个失败(reject)的处理
    // headers: { 'token': token },  //在发送服务端之前，前端设置请求头信息；
    // headers: { 'token': token },  //在发送服务端之前，前端设置请求头信息；
    // headers:{'Content-Type':'multipart/form-data'},
});
const upload = axios.create({
    baseURL: '/api',
    timeout: 1000,  //如果接口一秒都没有返回结果，则axios会自动帮我们做一个失败(reject)的处理
    // headers: { 'token': token },  //在发送服务端之前，前端设置请求头信息；
    headers: { 'Content-Type': 'multipart/form-data' },
});
// 使用拦截器，定义全局请求头
instance.interceptors.request.use(config => {
    // 在请求头中添加token\
    let token = sessionStorage.getItem('token');
    if (config.headers) {
        config.headers.token = token
    }
    return config
})
upload.interceptors.request.use(config => {
    // 在请求头中添加token\
    let token = sessionStorage.getItem('token');
    if (config.headers) {
        config.headers.token = token
    }
    return config
})
//api 在项目中，通常情况指的是  服务端的一个接口方法；
//一个方法只实现一个功能；所以这个方法就只能是单纯的去调用服务端的接口；
//这样房子的目的就只是为了可读性，和可维护性；
//这个是 登录接口
/**
 * @description 登录接口
 * @param payload object
 * @param payload.username string 用户名  6-20位
 * @param payload.password string 密码  6-20位
 */
export const loginApi = function (payload = {}) {
    //payload 是不是服务端要的入参
    //就是网页的预览
    return instance.post('/user/login', payload)
}
/**
 * @description 注册接口
 */
export const signUpApi = function (options = {}) {
    return instance.post('/user/register', options)
}


export const uploadAvatarApi = function (payload = {}) {
    return upload.post('upload/avatar', payload)
}
/**
 * @description 更改用户信息接口
 */
export const userUpdateApi = function (payload = {}) {
    return instance.post('/user/update', payload)
}

/**
 * @description 查询用户信息接口
 */
export const userInfoApi = function (payload = {}) {
    return instance.post('/user/info', payload)
}

export const uploadGoods = function (payload = {}) {
    return instance.post('/upload/goods', payload)
}


export const getFoodListApi = function (payload = {}) {
    return instance.post('/food/list', payload)
}

export const getComment = function (payload = {}) {
    return instance.post('comment/food/list', payload)
}
export const updatecomment = function (payload = {}) {
    return instance.post('comment/food/create', payload)
}

/**
 * @description 加入购物车接口
 */

export const cartAddApi = function (payload = {}) {
    return instance.post('/cart/add',payload)
}

/**
 *  @description 获取购物车列表
 */
 export const getCartListApi = function (payload = {}) {
    return instance.post('/cart/list',payload)
}

/**
 * @description 删除购物车接口
 */
export const cartDeleteApi = function (payload = {}) {
    return instance.post('/cart/delete',payload)
}
/**
 * @description 用户修改密码接口
 */
 export const userPasswordUpdataApi = function (payload = {}) {
    return instance.post('/user/password/update',payload)
}

export default instance;