import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import svg from './plugins/icons'

// 组件
import MainViewTitle from './components/common/MainViewTitle'
import Subtitle from './components/common/Subtitle'
import Link from './components/common/Link'

Vue.config.productionTip = false

// 注册全局组件
Vue.component('main-view-title', MainViewTitle)
Vue.component('subtitle', Subtitle)
Vue.component('a-link', Link)

// 通过插件的形式 定义全局组件,组件名icon-svg
Vue.use(svg)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
