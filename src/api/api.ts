import axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    timeout: 1000,  //如果接口一秒都没有返回结果，则axios会自动帮我们做一个失败(reject)的处理
    headers: {'X-Custom-Header': 'foobar'},  //在发送服务端之前，前端设置请求头信息；
});

export default instance;