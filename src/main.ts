import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入svg
import 'virtual:svg-icons-register'
// 引入自定义插件
import globalComponents from '@/components/index.ts'
import router from '@/router'
//引入nprogress样式
import 'nprogress/nprogress.css'
const app = createApp(App)
app.use(ElementPlus, {
  //注册成中文
  locale: zhCn,
})
// 安装自定义插件
app.use(globalComponents)
//注册模板路由
app.use(router)
// app.use(router)
app.mount('#app')
