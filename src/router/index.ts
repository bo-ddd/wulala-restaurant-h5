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
          children:[
            {
              path: '/breakfast',
              name:'breakfast',
              component:() => import("@/views/breakfast/Breakfast.vue")
            },
            {
              path: '/lunch',
              name:'lunch',
              component:() => import("@/views/lunch/Lunch.vue")
            },
            {
              path: '/supper',
              name:'supper',
              component:() => import("@/views/supper/Supper.vue")
            },
          ]
        }, {
          path: '/order',//shoppingCart
          name: 'order',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          //路由的懒加载，型能好
          component: () => import('../views/order/Order.vue')
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
    }
  ],
})

export default router
