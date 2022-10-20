import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
//默认导入
import Layout from "../views/composables/Layout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/', // Home
          name: '/',
          component: Home
        }, {
          path: '/menu', //menu
          name: 'menu',
          component: () => import("@/views/menu/Menu.vue"),
        }, {
          path: '/order',//shoppingCart
          name: 'order',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          //路由的懒加载，型能好
          component: () => import('../views/order/Order.vue'),
          children:[
            {
              path: '/allorder',
              name:'allorder',
              component:() => import("@/views/order/AllOrder.vue")
            },
            {
              path: '/appraise',
              name:'appraise',
              component:() => import("@/views/order/appraise.vue")
            },
            {
              path: '/consignmentfee',
              name:'consignmentfee',
              component:() => import("@/views/order/ConsignmentFee.vue")
            },
            {
              path: '/refund',
              name:'refund',
              component:() => import("@/views/order/Refund.vue")
            },
          ]
        },
        {
          path: '/mine', //mien
          name: 'mine',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/mine/Mine.vue')
        },
      ]
    },
    {
      path:'/signin',
      name:'signin',
      component:()=> import("../views/toSignIn/toSignIn.vue"),
    },
    {
      path:'/forgotpasswrod',
      name:'forgotpasswrod',
      component:()=> import("../views/toSignIn/ForgotPassword.vue"),
    },
    {
      path:'/signup',
      name:'signup',
      component:()=> import("../views/toSignIn/SignUp.vue"),
    },
    {
      path:'/setaccount',
      name:'setaccount',
      component:()=> import("../views/toSignIn/SetAccount.vue"),
    },{
      path:'/evaluate',
      name:'evaluate',
      component:()=> import("../views/evaluate/Evaluate.vue"),
    },{
      path:'/userinfo',
      name:'userinfo',
      component:()=> import("../views/toSignIn/UserInfo.vue")
    },{
      path:'/birthday',
      name:'birthday',
      component:()=> import("../views/toSignIn/Birthday.vue")
    }
  ],
})
// 导航守卫，路由守卫，路由拦截
// router.beforeEach((to,from,next)=>{
  // 验证token，只有存在token的时候 ，才能跳转到内容页
  // console.log(to);
  // console.log(from);
  // let token = localStorage.getItem('token');
  // if (token || to.path === '/signin') {
    // next();
    // console.log(token);
//   }else{
//     next("/signin")
//   }
  
// })

export default router
