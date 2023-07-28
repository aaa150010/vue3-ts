export const constantRoute = [
  {
    //登录
    path: '/login',
    component: () => import('@/components/Index.vue'),
    name: 'login',
  },
  {
    path: '/404',
    component: () => import('@/components/404.vue'),
  },
]
