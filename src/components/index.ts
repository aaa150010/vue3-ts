//引入项目中全部的全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
//存放组件 后续遍历注册为全局组件
const allGlobalComponents: any = {
  SvgIcon,
}
// 向外暴露插件对象
export default {
  install(app: any) {
    Object.keys(allGlobalComponents).forEach((item) => {
      // 注册为全局组件
      app.component(item, allGlobalComponents[item])
    })
  },
}
