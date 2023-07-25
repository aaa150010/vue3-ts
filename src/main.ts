import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// app.use(router)
app.mount('#app')
const fun = () => {
  console.log('你好')
}
fun()
