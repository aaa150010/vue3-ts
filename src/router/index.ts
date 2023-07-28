import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes'
import NProgress from 'nprogress'
//创建路由器
const router = createRouter({
  //路由模式hash
  history: createWebHashHistory(),
  routes: constantRoute,
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})
// 全局路由守卫
router.beforeEach(async (to, from, next) => {
  // 显示全局loading
  NProgress.start()
  console.log(11)
  if (to.path == '/11' && from.path == '/11') {
    NProgress.done()
  }
  // // 跳过404页面
  // if (to.path == "/404") {
  //   return next()
  // }
  //
  // // 登录和权限验证
  // const token = getToken()
  //
  // // 未登录
  // if (!token && to.path != "/login") {
  //   toast("请先登录", "error")
  //   return next({ path: '/login' })
  // }
  //
  // // 防止重复登录
  // if (token && to.path == '/login') {
  //   toast("请勿重复登录", "error")
  //   return next({ path: from.path ? from.path : '/' })
  // }
  //
  //
  // // 权限验证
  // if (token && !hasLoadManagerInfo) {
  //   let d = await store.dispatch("getInfo")
  //   if (d) {
  //     hasLoadManagerInfo = true
  //   }
  // }
  //
  // // 如果到达登录页，hasLoadManagerInfo设为false
  // if(to.path == "/login" && !token){
  //   hasLoadManagerInfo = false
  // }
  //
  // // 设置页面标题
  // let title = (to.meta.title ? to.meta.title : "") + "-商城后台"
  // document.title = title

  next()
})

router.afterEach(() => NProgress.done())
export default router
