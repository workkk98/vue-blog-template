import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import svg from './plugins/icons'

Vue.config.productionTip = false

// 通过插件的形式 定义全局组件,组件名icon-svg
Vue.use(svg)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
