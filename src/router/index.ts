//引入路由对象
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 路由类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/page1'
  },
  {
    path: '',
    name: 'home',
    component: () => import('@/pages/home.vue'),
    children: [
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/pages/page1')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/pages/page2')
      },
      {
        path: '/page3',
        name: 'page3',
        component: () => import('@/pages/page3')
      }
    ]
  }
]

/* 路由模式 
  createWebHistory: h5
  createWebHashHistory: HASH
  createMemoryHistory: 服务端渲染时
*/

const router = createRouter({
  history: createWebHistory(),
  routes
})

//导出router
export default router
