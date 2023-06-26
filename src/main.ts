import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import './assets/less/index.less'
// import dataV from '@jiaminghi/data-view'
import DataVVue3 from '@kjgl77/datav-vue3'
import * as echarts from 'echarts'
import img from './utils/img'
// import utils from './utils/utils'
// import 'iview/src/styles/index.less'
const app = createApp(App)
app.config.globalProperties.$echarts = function (el: any) {
  return echarts.init(el, {}, { renderer: 'svg' })
}

app.use(DataVVue3)
app.config.globalProperties.$images = img
app.use(router)
// app.use(DataV, { classNamePrefix: 'dv-' })
// app.use(utils)
app.mount('#app')
