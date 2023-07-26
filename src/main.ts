import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入svg
import 'virtual:svg-icons-register'
const app = createApp(App)
app.use(ElementPlus, {
  //注册成中文
  locale: zhCn,
})
console.log(import.meta.env)
// app.use(router)
app.mount('#app')
